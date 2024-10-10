// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss"],
  srcDir: "./src",
  vite: {
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
