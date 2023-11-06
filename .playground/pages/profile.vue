<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const toast = useToast()
const { clear, loggedIn } = useAuth()

async function logout() {
  await clear()
  toast.add({
    icon: 'i-ph-sign-out',
    color: 'amber',
    title: 'Logged Out!',
    description: 'user logged out successfully'
  })
}
</script>

<template>
  <div>
    profile

    {{ loggedIn }}

    <UButton @click="logout">
      logout
    </UButton>
  </div>
</template>