export default defineEventHandler((event) => {
  const { mongoose } = useRuntimeConfig(event).auth

  const { url } = event.node.req

  mongoose.exclude.forEach((item) => {
    if (`/api/auth/${item}` === url) {
      throw createError({
        statusCode: 404,
        statusMessage: `Page not found: ${url}`
      })
    }
  })
})