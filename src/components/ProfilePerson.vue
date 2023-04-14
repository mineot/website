<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-avatar :image="person.photo" size="180" rounded="0"></v-avatar>
      <div class="text-h3 mt-6">{{ person.name }}</div>
      <div v-for="(contact, index) in contacts" :key="index" class="my-4">
        <v-btn :prepend-icon="contact.icon" :href="contact.href" :target="contact.target" variant="tonal" block>
          {{ $t(contact.text) }}
        </v-btn>
      </div>
      <div v-if="languages.length">
        <TitleWidget title="languages" size="small"></TitleWidget>
        <div v-for="(lang, index) in languages" :key="index" class="pb-3">
          {{ lang.name }}
          <v-rating v-model="lang.level" color="secondary" size="x-small" density="compact" class="float-right">
          </v-rating>
        </div>
      </div>
    </v-col>
    <v-col cols="12" sm="6">
      <TitleWidget title="bio"></TitleWidget>
      <div>{{ person.bio }}</div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed, inject } from "vue";
import type { Contact, Document, Person, Social, Language } from "@/stores/doc/document";
import TitleWidget from "@/widgets/TitleWidget.vue"

const document: Document = inject("document") as Document;
const person: Person = document.person;
const languages: Language[] = person.languages || [];

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
