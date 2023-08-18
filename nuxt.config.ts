export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    documentDriven: true,
    highlight: {
      theme: 'github-light'
    }
  }
})
