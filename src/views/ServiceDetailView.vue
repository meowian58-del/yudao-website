<script setup lang="ts">
import { computed } from 'vue'
import InnerHero from '../components/InnerHero.vue'
import QuoteCtaBand from '../components/QuoteCtaBand.vue'
import RelatedCards from '../components/RelatedCards.vue'
import { services } from '../data/services'
import { logisticsSolutions } from '../data/logisticsSolutions'

const props = defineProps<{ slug: string }>()
const page = computed(() => services.find((item) => item.slug === props.slug) ?? services[0])
const related = computed(() =>
  page.value.relatedSlugs
    .map((slug) => services.find((item) => item.slug === slug) ?? logisticsSolutions.find((item) => item.slug === slug))
    .filter(Boolean)
    .map((item) => ({ ...item!, path: `/${item!.slug}` })),
)
</script>

<template>
  <main>
    <InnerHero :eyebrow="page.name" :title="`${page.name} for structured B2B cargo.`" :description="page.shortDescription" :image="page.heroImage" />
    <section class="detail-layout">
      <div class="detail-lead"><p class="eyebrow">Overview</p><h2>{{ page.overview }}</h2></div>
      <div class="numbered-list">
        <article v-for="capability in page.capabilities" :key="capability"><span></span><p>{{ capability }}</p></article>
      </div>
    </section>
    <section class="section-block soft-section">
      <div class="section-heading"><p class="eyebrow">Process</p><h2>From quote request to delivery handoff.</h2></div>
      <div class="process-grid">
        <article v-for="(step, index) in page.process" :key="step"><span>{{ String(index + 1).padStart(2, '0') }}</span><h3>{{ step }}</h3></article>
      </div>
    </section>
    <section class="why-band">
      <img :src="page.heroImage" :alt="`${page.name} planning`">
      <div>
        <p class="eyebrow">Why choose us</p>
        <h2>One accountable view for booking, documents and milestones.</h2>
        <p>Freight movement often slows down between teams. We keep the route plan, document notes and handoff updates connected so your internal team has a clearer operating picture.</p>
      </div>
    </section>
    <RelatedCards title="Related Services" :items="related" />
    <QuoteCtaBand />
  </main>
</template>
