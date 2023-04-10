<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="align-end text-white" height="200" :src="document.person.photo" cover> </v-img>
    <v-card-title>
      {{ person.name }}
    </v-card-title>

    <div v-if="hasEmail" class="mx-2">
      <v-btn prepend-icon="mdi-email" variant="text" size="small" :href="mailto">
        {{ contact?.email }}
      </v-btn>
    </div>

    <div v-if="hasPhone" class="mx-2">
      <v-btn prepend-icon="mdi-phone" variant="text" size="small" :href="tel">
        {{ contact?.phone }}
      </v-btn>
    </div>

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
import type { Document, Person, Contact } from "@/doc/document";

const document: Document = inject("document") as Document;
const person: Person = document.person;
const contact: Contact | undefined = person.contact;

const hasEmail = computed((): boolean => contact?.email !== undefined && contact.email.length > 0);
const hasPhone = computed((): boolean => contact?.phone !== undefined && contact.phone.length > 0);

const mailto = computed((): string => `mailto:${contact?.email}`);
const tel = computed((): string => `tel:${contact?.email}`);
</script>
