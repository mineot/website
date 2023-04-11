<template>
  <div>
    <v-row v-for="(lang, index) in languages" :key="index">
      <v-col class="text-h6">
        {{ lang.name }}
      </v-col>
      <v-col>
        <v-rating v-model="lang.level" :empty-icon="rating.empty" :full-icon="rating.full" density="compact">
        </v-rating>
      </v-col>
    </v-row>
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