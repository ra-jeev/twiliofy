// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },

  modules: ["@nuxthub/core", "@nuxt/eslint"],
  hub: {
    database: true,
    kv: true,
    blob: true,
    cache: true,
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },

  devtools: { enabled: true },
});
