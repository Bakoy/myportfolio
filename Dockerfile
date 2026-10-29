# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:24-alpine AS build
WORKDIR /app

# Cap the Node heap so the build does not thrash swap on low-RAM hosts,
# and skip npm's extra network calls (audit/fund/update-notifier).
ENV NODE_OPTIONS=--max-old-space-size=1024 \
    npm_config_audit=false \
    npm_config_fund=false \
    npm_config_update-notifier=false

# Install dependencies first so this layer is cached when only source changes.
# The cache mount keeps the npm tarballs between builds, so a package-lock
# change does not re-download every package.
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --prefer-offline

# Copy the rest of the project and build the static site.
# build-only (vite build) is used here on purpose: vue-tsc type-checking is the
# most expensive step and belongs in `npm run build` locally / in CI, not in the
# image build. Run `npm run build` or `npm run lint` before pushing.
COPY . .

# Vite inlines VITE_* variables at build time, so the GA4 measurement ID must be
# available here. docker-compose passes it from the local .env file:
#   VITE_GTAG_ID=G-XXXXXXXXXX docker compose up -d --build
# Leaving it empty builds the site with analytics disabled.
ARG VITE_GTAG_ID=""
ENV VITE_GTAG_ID=$VITE_GTAG_ID

RUN npm run build-only

# ---- Serve stage ----
FROM nginx:1.29-alpine AS serve

# SPA-friendly nginx config (gzip, asset caching, history fallback)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
