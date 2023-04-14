<template>
  <div class="pa-3">
    <v-btn v-for="(menu, index) in menuList" :key="index" :to="menu.path" color="link" variant="text" block>
      {{ $t(menu.text) }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
const menuList: any[] = [
  { path: "/", text: "profile" }
];
</script>
