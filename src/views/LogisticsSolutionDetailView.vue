<script setup lang="ts">
import { computed } from 'vue'
import InnerHero from '../components/InnerHero.vue'
import QuoteCtaBand from '../components/QuoteCtaBand.vue'
import RelatedCards from '../components/RelatedCards.vue'
import { logisticsSolutions } from '../data/logisticsSolutions'
import { services } from '../data/services'

const props = defineProps<{ slug: string }>()
const page = computed(() => logisticsSolutions.find((item) => item.slug === props.slug) ?? logisticsSolutions[0])
const related = computed(() =>
  page.value.relatedSlugs
    .map((slug) => logisticsSolutions.find((item) => item.slug === slug) ?? services.find((item) => item.slug === slug))
    .filter(Boolean)
    .map((item) => ({ ...item!, path: `/${item!.slug}` })),
)
</script>

<template>
  <main>
    <InnerHero :eyebrow="page.name" :title="`${page.name} that supports the freight plan.`" :description="page.shortDescription" :image="page.heroImage" />
    <section class="detail-layout">
      <div class="detail-lead"><p class="eyebrow">Customer needs</p><h2>When this solution fits.</h2></div>
      <div class="numbered-list">
        <article v-for="need in page.needs" :key="need"><span></span><p>{{ need }}</p></article>
      </div>
    </section>
    <section class="section-block">
      <div class="section-heading"><p class="eyebrow">Included Services</p><h2>{{ page.overview }}</h2></div>
      <div class="advantage-grid">
        <article v-for="item in page.capabilities" :key="item"><span>+</span><h3>{{ item }}</h3></article>
      </div>
    </section>
    <section class="section-block soft-section">
      <div class="section-heading"><p class="eyebrow">Workflow</p><h2>A cleaner path from preparation to status updates.</h2></div>
      <div class="process-grid">
        <article v-for="(step, index) in page.process" :key="step"><span>{{ String(index + 1).padStart(2, '0') }}</span><h3>{{ step }}</h3></article>
      </div>
    </section>
    <section class="why-band">
      <img :src="page.heroImage" :alt="`${page.name} benefits`">
      <div>
        <p class="eyebrow">Benefits</p>
        <h2>Support that reduces manual follow-up.</h2>
        <ul>
          <li v-for="benefit in page.benefits" :key="benefit">{{ benefit }}</li>
        </ul>
      </div>
    </section>
    <RelatedCards title="Related Solutions" :items="related" />
    <QuoteCtaBand />
  </main>
</template>
