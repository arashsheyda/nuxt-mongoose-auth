import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  modules: [
    resolve('./modules/nuxt-mongoose-auth/module'),
  ],

  components: [
    {
      path: 'components',
      prefix: 'mongoose',
    },
  ],
})
