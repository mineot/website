<template>
  <v-card elevation="0" v-if="docStore.loaded">
    <v-card-text>

      <v-sheet class="mb-5">
        <v-avatar :image="person?.photo" class="image-size mx-auto"></v-avatar>
      </v-sheet>

      <v-sheet class="text-h3 mb-5">
        {{ person?.name }}
      </v-sheet>

      <v-sheet class="mb-5">
        <v-sheet v-for="(contact, index) in contacts" :key="index" class="mb-2">
          <v-btn color="secondary" variant="tonal" :prepend-icon="contact.icon" :href="contact.href"
            :target="contact.target">
            {{ $t(contact.text) }}
          </v-btn>
        </v-sheet>
      </v-sheet>

      <v-sheet class="mb-3">
        <v-btn v-for="(social, index) in socials" :key="index" class="mr-2 mb-2" color="secondary" variant="tonal"
          :prepend-icon="social.icon" :href="social.src" :target="social.target">
          {{ social.text }}
        </v-btn>
      </v-sheet>

      <v-sheet>
        {{ person?.languages }}
      </v-sheet>

    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDocStore } from "@/stores/doc";
import type { Document, Person } from "@/stores/doc/document";
import { ContactIcon, ContactHref, ContactTarget } from "@/stores/doc/document.enum";

const docStore = useDocStore();
docStore.loadDocument();

const document = computed((): Document | undefined => docStore.loaded ? docStore.document : undefined);

const person = computed((): Person | undefined => document.value ? document.value.person : undefined);

const contacts = computed((): any[] => {
  if (person?.value?.contact) {
    const contact: any = person.value.contact;
    return Object.keys(contact).map((key: string) => {
      return {
        icon: ContactIcon[key],
        text: `contacts.${key}`,
        href: ContactHref(key, contact[key]),
        target: ContactTarget(key),
      };
    });
  }

  return [];
});

const socials = computed((): any[] => {
  if (person?.value?.socials) {
    return person.value.socials.map((el: any) => {
      return { icon: "mdi-open-in-new", href: el.src, text: el.name, target: "blank" };
    });
  }

  return [];
});
</script>

<style scoped>
.image-size {
  width: 100%;
  height: 200px;
  max-width: 200px;
  max-height: 200px;
}
</style>