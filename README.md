# my-portfolio-temp

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Docker

### Production (nginx, static build)

```sh
docker compose up -d --build
# http://localhost:8080
```

Ganti port host dengan `APP_PORT`, misalnya `APP_PORT=3000 docker compose up -d --build`.

### Development (Vite dev server + hot reload)

```sh
docker compose -f docker-compose.dev.yml up
# http://localhost:5173
```

Catatan:

- `docker-compose.yml` membangun `dist/` di dalam image (multi-stage: `node:24-alpine` → `nginx:1.29-alpine`) lalu menyajikannya lewat `docker/nginx.conf` (gzip, cache asset, SPA fallback).
- `docker-compose.dev.yml` mem-bind-mount source dan menyimpan `node_modules` di named volume, jadi dependency host tidak tercampur.
- `.dockerignore` menjaga `node_modules`, `dist`, dan `.git` tidak ikut ke build context.
