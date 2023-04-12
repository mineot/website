<template>
  <div>

    <v-list density="compact" class="pa-0" variant="tonal">
      <v-list-item v-for="(lang, index) in languages" :key="index"  class="noScroll">

        <span>{{ lang.name }} </span>

        <template v-slot:append>
          <v-rating v-model="lang.level" color="secondary" size="x-small" density="compact" class="pb-1">
          </v-rating>
        </template>

      </v-list-item>
    </v-list>

  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { Language } from "@/doc/document";

defineProps({
  languages: Array<Language>
});
</script>

<style scoped>
.noScroll {
  overflow-x: hidden;
}
</style>