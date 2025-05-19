// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt', // Add this line to enable Pinia
  ],
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.tailwindcss.com',
          defer: true,
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js',
          defer: true
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
        },
      ],
    },
  },
})
