<template>
  <v-card elevation="0" v-if="docStore.loaded">
    <v-card-text>
      <TitleWidget title="bio"></TitleWidget>
      {{ docStore.document?.person?.bio }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import TitleWidget from "@/widgets/TitleWidget.vue";
import { useDocStore } from "@/stores/doc";

const docStore = useDocStore();
docStore.loadDocument();

</script>
