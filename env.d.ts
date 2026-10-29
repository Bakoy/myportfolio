/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Google Analytics 4 measurement ID (e.g. `G-XXXXXXXXXX`). Empty disables analytics. */
  readonly VITE_GTAG_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
