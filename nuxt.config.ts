// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  app: {
    baseURL: '/', // Base URL pour GitHub Pages
    buildAssetsDir: '/assets/', // Dossier des assets
  },
  experimental: {
    payloadExtraction: false // Désactiver l'extraction de payload pour éviter les problèmes d'hydratation
  },
  ssr: true,
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./app/components/ui",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["shadcn-nuxt", "@nuxt/content"],
  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
});
