<script setup lang="ts">
import QuoteCtaBand from '../components/QuoteCtaBand.vue'
import { site } from '../data/site'
</script>

<template>
  <main>
    <section class="inner-hero company-hero">
      <div>
        <p class="eyebrow">Company</p>
        <h1>{{ site.brand }}</h1>
        <p>Freight coordination for B2B cargo teams that need route clarity, document discipline and practical shipment communication.</p>
      </div>
      <img class="w-full h-auto object-cover" src="/assets/visual-warehouse.svg" alt="Warehouse logistics visual">
    </section>
    <section class="company-profile">
      <p class="eyebrow">Profile</p>
      <h2>{{ site.legalName }} supports international freight forwarding and logistics coordination from China.</h2>
      <p>The public website keeps company information concise and focused on commercial logistics services. Our team helps customers align cargo details, transport modes, documents and handoff timing into a clear shipment plan.</p>
    </section>
    <section class="advantage-grid company-points">
      <article><span>01</span><h3>Freight mode coverage</h3><p>Ocean, air, rail, road and multimodal transport coordination.</p></article>
      <article><span>02</span><h3>Support around movement</h3><p>Customs document coordination, warehousing handoffs and tracking notes.</p></article>
      <article><span>03</span><h3>Practical communication</h3><p>Updates focus on milestones, next action and exception handling.</p></article>
    </section>
    <section class="image-break"><img class="w-full h-auto object-cover" src="/assets/visual-ocean.svg" alt="Cargo vessel logistics illustration"></section>
    <section class="mission-section">
      <div><p class="eyebrow">Mission</p><h2>Make freight movement easier to plan, review and hand off.</h2></div>
      <div><p class="eyebrow">Culture</p><h2>Clear details, steady follow-up and responsible communication.</h2></div>
    </section>
    <QuoteCtaBand />
  </main>
</template>
