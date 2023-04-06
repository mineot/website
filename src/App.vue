<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <header>
        <div class="wrapper">
          <HelloWorld msg="Hi World!" />
          <nav>
            <RouterLink to="/">Home</RouterLink>
          </nav>
        </div>
      </header>

      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

let drawer = ref(true);
</script>
