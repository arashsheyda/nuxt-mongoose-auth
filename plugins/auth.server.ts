export default defineNuxtPlugin({
  name: 'mongoose-auth-plugin',
  enforce: 'pre',
  async setup() {
    await useAuth().me()
  },
})
