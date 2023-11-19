// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['element-plus/dist/index.css','@/assets/scss/main.scss','@/assets/scss/main.scss'],
  typescript: { typeCheck: true },
  build: {
    transplie: [/^element-plus/]
  },
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/nuxt-landing-page/dist/' : '/'
  }
})
