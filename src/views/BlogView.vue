<script setup lang="ts">
import InnerHero from '../components/InnerHero.vue'
import { blogPosts } from '../data/blog'
</script>

<template>
  <main>
    <InnerHero
      eyebrow="Blog"
      title="Freight planning notes for operations teams."
      description="Short, practical articles about shipment preparation, timing, documents and cargo handoffs."
      image="/assets/visual-documents.svg"
    />
    <section class="section-block">
      <div class="card-grid">
        <RouterLink v-for="post in blogPosts" :key="post.slug" class="blog-card" :to="`/blog/${post.slug}`">
          <img class="w-full h-auto object-cover" :src="post.coverImage" :alt="post.title">
          <time>{{ post.publishedDate }}</time>
          <h2>{{ post.title }}</h2>
          <p>{{ post.excerpt }}</p>
        </RouterLink>
      </div>
    </section>
  </main>
</template>
