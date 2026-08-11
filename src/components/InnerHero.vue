<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  image: string
  meta?: string
}>()
</script>

<template>
  <section class="inner-hero">
    <div>
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <time v-if="meta">{{ meta }}</time>
      <p>{{ description }}</p>
    </div>
    <img class="w-full h-auto object-cover" :src="image" :alt="`${title} visual`">
  </section>
</template>
