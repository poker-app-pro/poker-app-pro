<script lang="ts" setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

</script>

<template>
  <Authenticator>
    <v-app-bar title="PokerApp.pro" />

    <v-navigation-drawer>
      <AppSidebar />
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </Authenticator>
  <AppFooter />
</template>
