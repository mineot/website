<template>
  <main>
    <TheWelcome />
    <hr>
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
import TheWelcome from "@/components/TheWelcome.vue";

const store = useCounterStore();

let innerCounter = ref(0);

function innerIncrement() {
  innerCounter.value++;
}
</script>