<template>
  <div>

    <div v-for="(lang, index) in languages" :key="index">

      <span> {{ lang.name }} </span>

      <v-spacer></v-spacer>

      <v-rating v-model="lang.level" :empty-icon="rating.empty" :full-icon="rating.full" size="x-small" density="compact">
      </v-rating>

    </div>

  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Language } from "@/doc/document";

defineProps({
  languages: Array<Language>
});

const rating = {
  empty: "mdi-square-rounded-outline",
  full: "mdi-square-rounded",
};
</script>
