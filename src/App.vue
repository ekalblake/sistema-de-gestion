<template>
  <v-app>
    <NavBar />
    <v-main>
      <RouterView :key="$route.fullPath" />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
</script>
