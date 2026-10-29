# syntax=docker/dockerfile:1

# ---- Build stage ----
FROM node:24-alpine AS build
WORKDIR /app

# Install dependencies first so this layer is cached when only source changes
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the project and build the static site
COPY . .
RUN npm run build

# ---- Serve stage ----
FROM nginx:1.29-alpine AS serve

# SPA-friendly nginx config (gzip, asset caching, history fallback)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
