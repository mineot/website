<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="sideBar">

      <v-img class="my-4" max-height="80" src="logo.png"></v-img>

      <div v-for="(menu, index) in info.getMenu" :key="index" class="mx-2 py-1">
        <v-btn :to="menu.path" color="link" variant="text" block>
          {{ $t(menu.text) }}
        </v-btn>
      </div>

    </v-navigation-drawer>

    <v-app-bar elevation="1" class="text-forecolor">
      <v-app-bar-nav-icon @click="changeSidebar"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $t(info.getTitle) }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <span v-for="(action, index) in info.getActions" :key="index">
        <v-btn v-if="action.cmd.to" color="link" variant="text" :icon="action.icon" :to="action.cmd.to"></v-btn>
        <v-btn v-else-if="action.cmd.url" color="link" variant="text" :icon="action.icon" :href="action.cmd.url"
          target="_blank"></v-btn>
        <v-btn v-else-if="action.cmd.click" color="link" variant="text" :icon="action.icon"
          @click="action.cmd.click"></v-btn>
      </span>
    </v-app-bar>

    <v-main>
      <v-container class="text-forecolor">
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
const sideBar = ref(true);

function changeSidebar(): void {
  sideBar.value = !sideBar.value;
}
</script>
