<template>
  <!-- onerror on <img> does not always trigger with certain CORS policies:
       we manage a local state to switch to the fallback if necessary -->
  <img
    v-if="!failed"
    :src="src"
    :alt="alt"
    v-bind="$attrs"
    @error="failed = true"
    loading="lazy"
    decoding="async"
  />
  <img
    v-else
    :src="fallback"
    :alt="alt"
    v-bind="$attrs"
    loading="lazy"
    decoding="async"
  />
</template>

<script setup lang="ts">

const props = defineProps<{
  src: string;
  alt?: string;
  fallback?: string;
}>();

const failed = ref(false);
const fallback = props.fallback ?? "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400'><rect width='100%' height='100%' fill='%23e5e7eb'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%236b7280'>Image indisponible</text></svg>";
</script>