<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>

<template>
  <main>
    <authenticator>
      <v-app>
        <router-view />
      </v-app>
    </authenticator>
  </main>
</template>
