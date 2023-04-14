<template>
  <TitleWidget title="Titles"></TitleWidget>
  <div v-for="(btn, index) in btns" :key="index" class="mb-2">
    <v-btn :color="btn.color" :active="active" class="mr-2" elevation="2">{{ btn.text }}</v-btn>
    <v-btn :color="btn.color" :active="active" class="mr-2" variant="tonal">{{ btn.text }}</v-btn>
    <v-btn :color="btn.color" :active="active" class="mr-2" variant="plain">{{ btn.text }}</v-btn>
    <v-btn :color="btn.color" :active="active" class="mr-2" variant="text">{{ btn.text }}</v-btn>
    <v-btn :color="btn.color" :active="active" class="mr-2" variant="outlined">{{ btn.text }}</v-btn>
  </div>
  <div>Document: {{ docStore.document }}</div>
  <!-- <ProfilePerson></ProfilePerson> -->
</template>

<script setup lang="ts">
import { useDocStore } from "@/stores/doc";
// import ProfilePerson from "@/components/ProfilePerson.vue";
import TitleWidget from "@/widgets/TitleWidget.vue";

const docStore = useDocStore();
const active = false;

const btns = [
  { color: "primary", text: "Primary" },
  { color: "secondary", text: "Secondary" },
  { color: "accent", text: "Accent" },
  { color: "link", text: "Link" },
  { color: "error", text: "Error" },
  { color: "info", text: "Info" },
  { color: "success", text: "Success" },
  { color: "warning", text: "Warning" },
];
</script>
