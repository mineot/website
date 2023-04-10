<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="align-end text-white" height="200" :src="document.person.photo" cover> </v-img>
    <v-card-title>
      {{ document.person.name }}
    </v-card-title>

    <v-card-subtitle>
      <a :href="mailto">{{ document.person.contact.email }}</a>
    </v-card-subtitle>

    <v-card-text>
      {{ document.person.bio }}
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary">
        Share
      </v-btn>
      <v-btn color="primary">
        Explore
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";
import type { Document } from "@/doc/document";

const document: Document = inject("document") as Document;

const mailto = computed(() => `mailto:${document.person.contact.email}`);
</script>
