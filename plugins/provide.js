import { defineNuxtPlugin } from "#app"

export default defineNuxtPlugin(() => {
  return {
    provide: {
        imagePath: "http://localhost:3000/_nuxt/assets/image/",
    },
  }
})
