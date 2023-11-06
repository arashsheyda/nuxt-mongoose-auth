export default defineNuxtConfig({

  extends: [
    '@nuxt/ui-pro',
    '../',
  ],
  
  modules: [
    '@nuxt/ui',
    'nuxt-mongoose'
  ],

  // ui: {
  //   icons: [
  //     'ph',
  //   ],
  // },

  mongoose: {
    uri: 'mongodb://localhost:27017/auth',
  },
 
  devtools: {
    enabled: true,
  },
})