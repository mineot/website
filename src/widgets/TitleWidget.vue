<template>
  <div class="text-text-title mb-5">
    <div :class="[sizeComputed, 'mb-2']">{{ $t(titleComputed) }}</div>
    <div class="div-h bg-text-title"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps({
  title: String,
  size: String,
});

const titleComputed = computed((): string => props.title || "Title");

const sizeComputed = computed((): string => {
  if (props.size) {
    switch (props.size) {
      case "small":
        return "text-h5";
      case "large":
        return "text-h4";
      default:
        return `text-h${props.size}`;
    }
  }

  return "text-h4";
});
</script>

<style scoped>
.div-h {
  padding-bottom: 0.005rem;
}
</style>
