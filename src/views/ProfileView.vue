<template>
  <v-row no-gutters>
    <v-col cols="12" md="5">
      <ProfilePerson></ProfilePerson>
    </v-col>
    <v-col>
      <ProfilePersonBio></ProfilePersonBio>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import ProfilePerson from "@/components/ProfilePerson.vue";
import ProfilePersonBio from "@/components/ProfilePersonBio.vue";
</script>
