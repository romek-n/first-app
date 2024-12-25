// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2024-12-22",

  future: {
    compatibilityVersion: 4,
  },

  app: {
    head: {
      title: "Nuxt Dojo",
      meta: [{ name: "description", content: "Everything about Nuxt 3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
