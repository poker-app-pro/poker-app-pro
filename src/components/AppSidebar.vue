<script lang="ts" setup>
import { signOut } from 'aws-amplify/auth';

async function handleSignOut() {
    await signOut({ global: true })
}
</script>

<template>
    <v-list nav>
        <v-list-item title="Sign Out" link v-on:click="handleSignOut"></v-list-item>
    </v-list>
</template>