import type { AuthPayload } from '~/types'
import type { H3Event } from 'h3'

const { mongoose } = useRuntimeConfig().auth

export async function _useSession(event: H3Event, email?: string) {
  const session = await useSession(event, {
    password: mongoose.secret,
    name: 'authorization',
  })
  if (email)
    await session.update({ email })
  return {
    ...session,
    data: session.data as AuthPayload
  }
}