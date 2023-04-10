<template>
  <div class="pa-3">
    <v-btn v-for="(menu, index) in menuList" :key="index" :prepend-icon="menu.icon" :to="menu.path" variant="tonal">
      {{ $t(menu.text) }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
const menuList: any[] = [
  { icon: "mdi-account-tie", path: "/", text: "profile" }
];
</script>
