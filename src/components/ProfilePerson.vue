<template>
  <v-card class="mx-auto" max-width="400">

    <v-img class="align-end text-white" height="200" :src="document.person.photo" cover> </v-img>

    <v-card-title>
      <span class="text-h4">{{ person.name }}</span>
    </v-card-title>

    <div v-for="(contact, index) in contactList" :key="index" class="mx-3">
      <v-btn :prepend-icon="contact.icon" :href="contact.href" :target="contact.target" variant="text">
        {{ $t(contact.text) }}
      </v-btn>
    </div>

    <v-card-text>
      <div class="mb-2">{{ $t("socials") }}</div>
      <div>
        <v-btn prepend-icon="mdi-link" href="" target="blank" size="small" variant="text">
          Instagram
        </v-btn>
      </div>
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

const contactList = computed((): any[] => {
  if (!person.contact) {
    return [];
  }

  const contact: Contact = person.contact;
  const list: any[] = [];

  if (contact.email) {
    list.push({ icon: "mdi-email", href: `mailto:${contact.email}`, text: "contacts.email", target: "" });
  }

  if (contact.phone) {
    list.push({ icon: "mdi-phone", href: `tel:${contact.phone}`, text: "contacts.phone", target: "" });
  }

  if (contact.whatsapp) {
    list.push({ icon: "mdi-cellphone-message", href: contact.whatsapp, text: "contacts.whatsapp", target: "blank" });
  }

  if (contact.telegram) {
    list.push({ icon: "mdi-cellphone-message", href: contact.telegram, text: "contacts.telegram", target: "blank" });
  }

  return list;
});
</script>
