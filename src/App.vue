<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="sideBar">

      <v-img class="mb-2" max-height="80" src="logo.png"></v-img>

      <div v-for="(menu, index) in menus" :key="index" class="mx-2">
        <v-btn :to="menu.path" color="link" variant="text" block>
          {{ $t(menu.text) }}
        </v-btn>
      </div>

    </v-navigation-drawer>

    <v-app-bar elevation="1">
      <v-app-bar-nav-icon @click="changeSidebar"></v-app-bar-nav-icon>
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
const sideBar = ref(true);

const menus: any[] = [
  { path: "/", text: "profile" }
];

function changeSidebar(): void {
  sideBar.value = !sideBar.value;
}
</script>
