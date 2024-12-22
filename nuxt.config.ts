// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-12-22',

  future: {
    compatibilityVersion: 4
  }
})