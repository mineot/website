<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Website</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <header>
          <div class="wrapper">
            <HelloWorld msg="Hi World!" />
            <nav>
              <v-btn to="/">Home</v-btn>
            </nav>
          </div>
        </header>

        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

let drawer = ref(true);
</script>
