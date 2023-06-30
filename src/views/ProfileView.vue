<template>
  <v-row>
    <v-col cols="12" sm="12" md="6" lg="4">
      <PersonCard :doc="db.document" />
    </v-col>
    <v-col cols="12" sm="12" md="6" lg="8">
      ...
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { useDBStore } from "@/stores/db";
import PersonCard from "@/components/PersonCard.vue";

const db = useDBStore();
db.fetchData();
</script>
