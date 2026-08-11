<script setup lang="ts">
import { blogPosts } from '../data/blog'
</script>

<template>
  <main>
    <section class="inner-hero blog-hero">
      <div>
        <p class="eyebrow">Blog</p>
        <h1>Freight planning notes for operations teams.</h1>
        <p>Short, practical articles about shipment preparation, timing, documents and cargo handoffs.</p>
      </div>
      <img class="w-full h-auto object-cover" src="/assets/visual-documents.svg" alt="Documentation logistics visual">
    </section>
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
