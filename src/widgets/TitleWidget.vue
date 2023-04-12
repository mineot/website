<template>
  <div :class="[sizeComputed, 'mb-1']">{{ $t(titleComputed) }}</div>
  <hr class="mb-6">
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