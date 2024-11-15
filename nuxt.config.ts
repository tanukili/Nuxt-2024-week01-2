// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["@/assets/stylesheets/all.scss"],
  router: {
    options: {
      // linkActiveClass 與 linkExactActiveClass 改用自定義樣式
      linkActiveClass: "active",
      linkExactActiveClass: "active",
    },
  },
});
