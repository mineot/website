<template>
  <h1>Profile View; {{ document.person.name }}</h1>
</template>

<script setup lang="ts">
// VUE AND CONFIGS
import { ref, getCurrentInstance } from "vue";

import type { Document } from "@/doc/document";

const app = getCurrentInstance();
const document: Document = ref(app?.appContext.config.globalProperties.$document);
</script>