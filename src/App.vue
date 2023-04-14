<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <SidebarHead></SidebarHead>
      <SidebarMenu></SidebarMenu>
    </v-navigation-drawer>

    <v-app-bar elevation="0" class="text-text-app">
      <v-app-bar-nav-icon @click="changeDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $t(info.getTitle) }}</v-toolbar-title>
    </v-app-bar>

    <v-main class="text-text-body">
      <v-container :fluid="true">
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import { useInfoStore } from "@/stores/info";

import SidebarHead from "@/components/SidebarHead.vue";
import SidebarMenu from "@/components/SidebarMenu.vue";

const info = useInfoStore();
let drawer = ref(true);

function changeDrawer(): void {
  drawer.value = !drawer.value;
}
</script>
