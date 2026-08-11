<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import InnerHero from '../components/InnerHero.vue'
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

type BodyBlock = { type: 'heading' | 'paragraph'; text: string } | { type: 'list'; items: string[] }

const bodyBlocks = computed<BodyBlock[]>(() => {
  if (!post.value) return []
  return post.value.body.split(/\n{2,}/).map((block) => {
    if (block.startsWith('## ')) return { type: 'heading', text: block.slice(3) }
    if (block.startsWith('- ')) return { type: 'list', items: block.split('\n').map((item) => item.replace(/^- /, '')) }
    return { type: 'paragraph', text: block }
  })
})
</script>

<template>
  <main v-if="post">
    <InnerHero eyebrow="Freight notes" :title="post.title" :description="post.excerpt" :image="post.coverImage" :meta="post.publishedDate" />
    <article class="post-body">
      <template v-for="(block, index) in bodyBlocks" :key="index">
        <h2 v-if="block.type === 'heading'">{{ block.text }}</h2>
        <ul v-else-if="block.type === 'list'">
          <li v-for="item in block.items ?? []" :key="item">{{ item }}</li>
        </ul>
        <p v-else>{{ block.text }}</p>
      </template>
    </article>
    <RelatedCards title="Related Posts" :items="related" />
    <QuoteCtaBand />
  </main>
  <main v-else class="not-found">
    <h1>Article not found.</h1>
    <RouterLink class="button button-primary" to="/blog">Back to Blog</RouterLink>
  </main>
</template>
