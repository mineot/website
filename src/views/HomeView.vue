<template>
  <v-card class="mr">
    <v-card-text>
      <v-btn @click="innerIncrement()">Inner Text</v-btn>
      <span>Inner Count: {{ innerCounter }}</span>
    </v-card-text>
  </v-card>

  <v-card>
    <v-card-text>
      <v-btn @click="store.increment()">Pinia Text</v-btn>
      <span>Pinia Count: {{ store.count }}</span>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();

let innerCounter = ref(0);

function innerIncrement() {
  innerCounter.value++;
}
</script>

<style scoped>
.mr {
  margin-top: 1em;
  margin-bottom: 1em;
}

button {
  margin-right: 1rem;
}

hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

span {
  font-weight: bold;
}
</style>