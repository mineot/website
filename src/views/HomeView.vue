<template>
  <main>
    <button @click="innerIncrement()">Inner Test</button>
    <span>Inner Count: {{ innerCounter }}</span>
    <hr>
    <button @click="store.increment()">Pinia Test</button>
    <span>Pinia Count: {{ store.count }}</span>
  </main>
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
main {
  margin: 5rem;
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