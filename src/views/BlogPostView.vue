<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import QuoteCtaBand from '../components/QuoteCtaBand.vue'
import RelatedCards from '../components/RelatedCards.vue'
import { blogBySlug, blogPosts } from '../data/blog'

const route = useRoute()
const post = computed(() => blogBySlug[String(route.params.slug)])
const related = computed(() =>
  (post.value?.relatedSlugs ?? [])
    .map((slug) => blogPosts.find((item) => item.slug === slug))
    .filter(Boolean)
    .map((item) => ({ ...item!, path: `/blog/${item!.slug}` })),
)
</script>

<template>
  <main v-if="post">
    <section class="post-hero">
      <img :src="post.coverImage" :alt="post.title">
      <div>
        <p class="eyebrow">Freight notes</p>
        <h1>{{ post.title }}</h1>
        <time>{{ post.publishedDate }}</time>
      </div>
    </section>
    <article class="post-body">
      <p>{{ post.body }}</p>
    </article>
    <RelatedCards title="Related Posts" :items="related" />
    <QuoteCtaBand />
  </main>
  <main v-else class="not-found">
    <h1>Article not found.</h1>
    <RouterLink class="button button-primary" to="/blog">Back to Blog</RouterLink>
  </main>
</template>
