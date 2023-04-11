<template>
  <v-card class="mx-auto pb-3" variant="outlined" max-width="400">

    <v-img class="align-end text-white" height="200" :src="document.person.photo" cover> </v-img>

    <v-card-title>
      <span class="text-h3">{{ person.name }}</span>
    </v-card-title>

    <div v-for="(contact, index) in contacts" :key="index" class="mx-3">
      <v-btn :prepend-icon="contact.icon" :href="contact.href" :target="contact.target" variant="plain">
        {{ $t(contact.text) }}
      </v-btn>
    </div>

  </v-card>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import type { Contact, Document, Person, Social } from "@/doc/document";

const document: Document = inject("document") as Document;
const person: Person = document.person;

const contacts = computed((): any[] => {
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

  socials.value.forEach((el: Social) => {
    list.push({ icon: "mdi-link", href: el.src, text: el.name, target: "blank" });
  });

  return list;
});

const socials = computed((): Social[] => {
  if (!person.socials) {
    return [];
  }

  return person.socials;
});
</script>
