<script lang="ts" setup>
import { signOut } from 'aws-amplify/auth';

async function handleSignOut() {
    await signOut({ global: true })
}
</script>

<template>
  <v-list nav>
    <v-list-item
      title="Leagues"
      link
      to="/leagues"
    />
  </v-list>
  <div
    block
    class="px-2"
  >
    <v-btn
      variant="tonal"
      class="mx-auto"
      block
      @click="handleSignOut"
    >
      Sign Out
    </v-btn>
  </div>
</template>