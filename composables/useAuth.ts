import type { AuthPayload } from '~/types'

const useUserSessionState = () => useState<AuthPayload>('nuxt-session', () => ({}))

export function useAuth() {
  const sessionState = useUserSessionState()

  return {
    loggedIn: computed(() => Boolean(sessionState.value?.email)),
    user: computed(() => sessionState.value || null),
    clear,
    me,
  }
}


async function me() {
  useUserSessionState().value = await useRequestFetch()('/api/auth/me').catch(() => ({}))
}

async function clear() {
  await $fetch('/api/auth/logout', { method: 'DELETE' })
  useUserSessionState().value = {}
}
