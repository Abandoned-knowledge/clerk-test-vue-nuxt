// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@pinia/nuxt"],
  srcDir: "./src",
  dir: {
    layouts: "app/layout",
    public: "../public",
  },
  icon: {
    provider: "iconify",
    customCollections: [
      {
        prefix: "v-icon",
        dir: "./src/shared/icons",
      },
    ],
  },

  vite: {
    server: {
      hmr: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      },
    },
  },
  imports: {
    dirs: ["shared/stores", "shared/types"],
    autoImport: true,
  },
  pinia: {
    storesDirs: ["shared/stores/**"],
  },
  tailwindcss: {
    viewer: false,
    cssPath: [
      "~/app/style/tailwind.css",
      {
        injectPosition: "first",
      },
    ],
  },
});
