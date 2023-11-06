<script setup lang="ts">
const toast = useToast()
const { loggedIn, user, clear } = useAuth()

async function logout() {
  await clear()
  toast.add({
    icon: 'i-ph-sign-out',
    color: 'amber',
    title: 'Logged Out!',
    description: 'user logged out successfully'
  })
}

function onLogin(user) {
  toast.add({
    icon: 'i-ph-sign-in',
    title: 'Logged in!',
    description: user,
  })
}

function onError(error) {
  toast.add({
    icon: 'i-ph-warning',
    color: 'red',
    title: 'Error',
    description: error.statusMessage
  })
}
</script>

<template>
  <UPage>
    <UPageBody>
      <div v-if="loggedIn">
        {{ user }}
        <UButton class="mt-4" @click="logout">
          logout
        </UButton>
        <ULink to="/profile">
          profile
        </ULink>
      </div>
      <MongooseAuth v-else @onLogin="onLogin" @onError="onError" />
    </UPageBody>
  </UPage>
</template>