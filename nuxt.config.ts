// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  srcDir: "./src",
  dir: {
    layouts: "app/layout",
  },
  icon: {
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
    dirs: [],
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
