import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(() => {
  return {
    provide: {
        // imagePath: "http://localhost:3000/_nuxt/assets/image/",
        imagePath: "https://sherry092120.github.io/nuxt_sample/assets/image/",
    },
  }
})
