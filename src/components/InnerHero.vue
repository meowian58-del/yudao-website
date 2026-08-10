<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  description: string
  image: string
}>()
</script>

<template>
  <section class="inner-hero">
    <div>
      <p class="eyebrow">{{ eyebrow }}</p>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
    <img :src="image" :alt="`${title} visual`">
  </section>
</template>
