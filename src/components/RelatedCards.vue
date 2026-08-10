<script setup lang="ts">
import type { BusinessPage, BlogPost } from '../data/types'

defineProps<{
  title: string
  items: Array<(BusinessPage | BlogPost) & { path: string }>
}>()
</script>

<template>
  <section class="section-block">
    <div class="section-heading">
      <p class="eyebrow">Related</p>
      <h2>{{ title }}</h2>
    </div>
    <div class="card-grid compact-grid">
      <RouterLink v-for="item in items" :key="item.path" class="mini-card" :to="item.path">
        <img :src="'coverImage' in item ? item.coverImage : item.heroImage" :alt="'title' in item ? item.title : item.name">
        <div>
          <h3>{{ 'title' in item ? item.title : item.name }}</h3>
          <p>{{ 'excerpt' in item ? item.excerpt : item.shortDescription }}</p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
