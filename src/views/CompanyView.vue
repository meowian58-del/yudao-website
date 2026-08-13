<script setup lang="ts">
import InnerHero from '../components/InnerHero.vue'
import QuoteCtaBand from '../components/QuoteCtaBand.vue'
import { site } from '../data/site'
import { photos } from '../data/images'
</script>

<template>
  <main>
    <InnerHero
      eyebrow="Company"
      :title="site.brand"
      description="Shenzhen Yudao Global Logistics Limited. Freight coordination with clear routes, disciplined documents and steady shipment communication."
      :image="photos.yudaoTeam"
    />
    <section class="company-profile">
      <p class="eyebrow">Profile</p>
      <h2>{{ site.legalName }} supports international freight forwarding and logistics coordination from China.</h2>
      <p>Shenzhen Yudao Global Logistics Limited helps customers align cargo details, transport modes, documents and handoff timing into a clear shipment plan. We serve B2B cargo teams that need practical cross-border logistics support from inquiry to delivery handoff.</p>
    </section>
    <section class="brand-story">
      <div class="brand-story-copy">
        <p class="eyebrow">Brand Story</p>
        <h2>Yudao means guarding the right route and moving with discipline.</h2>
        <p>
          The name Yudao reflects careful stewardship, route discipline and responsibility. It expresses our belief that international logistics is not only about moving cargo, but about protecting every step of the route with dependable planning and clear communication.
        </p>
        <p>
          From Shenzhen, we connect Chinese supply chains with global trade lanes. Our brand story begins with a simple promise: help every shipment find a steadier way forward, with documents, timing and handoffs treated as seriously as the cargo itself.
        </p>
      </div>
      <figure>
        <img :src="photos.yudaoTeam" alt="Shenzhen Yudao Global Logistics Limited team" />
        <figcaption>Shenzhen Yudao Global Logistics Limited team</figcaption>
      </figure>
    </section>
    <section class="advantage-grid company-points">
      <article><span>01</span><h3>Freight mode coverage</h3><p>Ocean, air, rail, road and multimodal transport coordination.</p></article>
      <article><span>02</span><h3>Support around movement</h3><p>Customs document coordination, warehousing handoffs and tracking notes.</p></article>
      <article><span>03</span><h3>Practical communication</h3><p>Updates focus on milestones, next action and exception handling.</p></article>
    </section>
    <section class="credentials-section">
      <div class="section-heading">
        <p class="eyebrow">Qualifications</p>
        <h2>Qualified freight service foundation for international cargo coordination.</h2>
      </div>
      <div class="credentials-grid">
        <article>
          <span>NVOCC</span>
          <h3>Non-Vessel Operating Common Carrier qualification</h3>
          <p>Non-Vessel Operating Common Carrier service qualification for ocean freight coordination and related shipping arrangements.</p>
        </article>
        <article>
          <span>MOFCOM</span>
          <h3>MOFCOM International Freight Forwarder Filing</h3>
          <p>MOFCOM International Freight Forwarder Filing supporting international freight forwarding service operations.</p>
        </article>
      </div>
    </section>
    <section class="image-break"><img class="w-full h-auto object-cover" :src="photos.portCranes" alt="Port cranes and international freight containers"></section>
    <section class="mission-section">
      <div><p class="eyebrow">Mission</p><h2>Make freight movement easier to plan, review and hand off.</h2></div>
      <div><p class="eyebrow">Culture</p><h2>Clear details, steady follow-up and responsible communication.</h2></div>
    </section>
    <QuoteCtaBand />
  </main>
</template>
