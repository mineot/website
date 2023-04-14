<template>
  <v-row v-if="docStore.loaded" no-gutters>

    <v-col class="d-flex pa-2" cols="12" sm="4">
      <v-avatar :image="docStore.document.person.photo" class="image-size mx-auto"></v-avatar>
    </v-col>

    <v-col class="pa-2">

      <div class="text-h3 mb-2">{{ docStore.document.person.name }}</div>

      <div v-for="(contact, index) in contacts" :key="index" class="mb-2">
        <v-btn color="secondary" variant="tonal" :prepend-icon="contact.icon" :href="contact.href"
          :target="contact.target">
          {{ $t(contact.text) }}
        </v-btn>
      </div>

      <div v-for="(social, index) in socials" :key="index" class="mb-2">
        <v-btn color="secondary" variant="tonal" :prepend-icon="social.icon" :href="social.src" :target="social.target">
          {{ social.text }}
        </v-btn>
      </div>

    </v-col>

  </v-row>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useDocStore } from "@/stores/doc";

const docStore = useDocStore();
docStore.loadDocument().then();

const contacts = computed((): any[] => {
  if (!docStore.document.person.contact) {
    return [];
  }

  const contact: any = docStore.document.person.contact;
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

const socials = computed((): any[] => {
  if (!docStore.document.person.socials) {
    return [];
  }

  const list: any[] = [];

  docStore.document.person.socials.forEach((el: any) => {
    list.push({ icon: "mdi-link", href: el.src, text: el.name, target: "blank" });
  });

  return list;
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