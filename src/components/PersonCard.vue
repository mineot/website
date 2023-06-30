<template>
  <v-card variant="text">

    <v-img cover max-height="300" :src="doc.photo"></v-img>

    <v-card-item>
      <v-card-title class="text-h4 text-primary mb-2">
        <span>{{ doc.name }}</span>
      </v-card-title>
      <v-card-subtitle class="text-h6 text-secondary">
        <span>{{ doc.title }}</span>
      </v-card-subtitle>
    </v-card-item>

    <v-divider class="mx-4 text-accent"></v-divider>

    <v-card-text class="text-body-2">
      <span>{{ doc.bio }}</span>
    </v-card-text>

  </v-card>
</template>

<script setup lang="ts">
import { Document } from "@/stores/db";

defineProps<{ doc: Document; }>();
</script>