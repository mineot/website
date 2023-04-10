<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-btn to="/">Home</v-btn>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $t(info.getTitle) }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import { useInfoStore } from "@/stores/info";

const info = useInfoStore();
let drawer = ref(true);

function changeDrawer(): void {
  drawer.value = !drawer.value;
}
</script>
