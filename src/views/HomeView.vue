<script setup lang="ts">
import { RouterLink } from 'vue-router'
import QuoteCtaBand from '../components/QuoteCtaBand.vue'
import { services } from '../data/services'
import { logisticsSolutions } from '../data/logisticsSolutions'
import { blogPosts } from '../data/blog'
import { site } from '../data/site'
import { photos } from '../data/images'
</script>

<template>
  <main>
    <section class="home-hero" :style="{ backgroundImage: `linear-gradient(90deg, rgba(19, 51, 101, 0.88), rgba(19, 51, 101, 0.18)), url(${photos.heroShip})` }">
      <div class="hero-copy">
        <p class="eyebrow">Global B2B freight coordination</p>
        <h1>Smooth Flow Logistics</h1>
        <p>{{ site.brand }} coordinates ocean, air, rail, road and multimodal freight with clear milestones, document discipline and responsive handoff support.</p>
        <div class="hero-actions">
          <RouterLink class="button button-primary whitespace-nowrap" to="/quote">Get A Quote</RouterLink>
          <a class="button button-ghost" href="#services">View Services</a>
        </div>
      </div>
      <div class="hero-status">
        <span>Shipment operating view</span>
        <strong>Booking - Documents - Handoff - Tracking</strong>
        <p>One clear route record from cargo-ready notes to final delivery coordination.</p>
      </div>
    </section>

    <section id="services" class="section-block">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">Services</p>
          <h2>Discover the freight range we coordinate for shipping.</h2>
        </div>
        <p>Each mode is planned around cargo readiness, booking windows, warehouse timing and the next handoff.</p>
      </div>
      <div class="service-mosaic">
        <RouterLink v-for="service in services" :key="service.slug" class="service-card" :to="`/${service.slug}`">
          <img class="w-full h-auto object-cover" :src="service.heroImage" :alt="service.name" loading="lazy">
          <span>{{ service.name }}</span>
          <b>Open</b>
        </RouterLink>
      </div>
    </section>

    <section class="home-company">
      <div class="home-company-copy">
        <p class="eyebrow">Company Overview</p>
        <h2>Freight coordination for structured B2B cargo planning.</h2>
        <p>{{ site.brand }} supports importers, exporters and platform sellers with freight coordination that keeps route planning, documents and milestone communication in one steady rhythm.</p>
        <RouterLink class="text-link" to="/company">View Company</RouterLink>
      </div>
      <img class="w-full h-auto object-cover" :src="photos.portCranes" alt="Container cranes working at a port terminal" loading="lazy">
    </section>

    <section class="key-figures-section">
      <div class="section-heading centered-heading">
        <p class="eyebrow">Key figures</p>
        <h2>Freight support built for B2B cargo teams.</h2>
      </div>
      <div class="key-figures" aria-label="Key figures">
        <div>
          <span>5</span>
          <strong>Freight Modes</strong>
        </div>
        <div>
          <span>3</span>
          <strong>Logistics Solutions</strong>
        </div>
        <div>
          <span>1</span>
          <strong>Point of Contact</strong>
        </div>
        <div>
          <span>2023</span>
          <strong>Founded</strong>
        </div>
      </div>
    </section>

    <section class="section-block advantages-section">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">Advantages</p>
          <h2>Advancing shipments through disciplined coordination.</h2>
        </div>
        <p>Our operating style is simple: confirm the cargo, align the route, keep the documents clean and make each milestone visible.</p>
      </div>
      <div class="advantage-grid">
        <article><span>Route</span><h3>Route clarity</h3><p>Mode, timing and handoff instructions are reviewed before booking.</p></article>
        <article><span>Docs</span><h3>Document rhythm</h3><p>Shipment details and document notes stay connected to the freight plan.</p></article>
        <article><span>Status</span><h3>Milestone updates</h3><p>Teams receive practical updates focused on status, next action and exceptions.</p></article>
      </div>
    </section>

    <section class="solution-band">
      <div class="solution-collage">
        <img class="w-full h-auto object-cover" :src="photos.portCranes" alt="Port cranes and container stacks" loading="lazy">
        <img class="w-full h-auto object-cover" :src="photos.truck" alt="Freight truck on a logistics route" loading="lazy">
        <img class="w-full h-auto object-cover" :src="photos.warehouse" alt="Warehouse storage and cargo handling" loading="lazy">
      </div>
      <div>
        <div class="section-heading">
          <p class="eyebrow">Logistics Solutions</p>
          <h2>Transfer your package local to the world.</h2>
        </div>
        <div class="solution-list">
          <RouterLink v-for="solution in logisticsSolutions" :key="solution.slug" :to="`/${solution.slug}`">
            <div>
              <h3>{{ solution.name }}</h3>
              <p>{{ solution.shortDescription }}</p>
            </div>
            <span>+</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading split-heading">
        <div>
          <p class="eyebrow">Blog</p>
          <h2>Useful notes for freight planning teams.</h2>
        </div>
        <RouterLink class="text-link" to="/blog">View More</RouterLink>
      </div>
      <div class="card-grid">
        <RouterLink v-for="post in blogPosts.slice(0, 3)" :key="post.slug" class="blog-card" :to="`/blog/${post.slug}`">
          <img class="w-full h-auto object-cover" :src="post.coverImage" :alt="post.title" loading="lazy">
          <time>{{ post.publishedDate }}</time>
          <h3>{{ post.title }}</h3>
          <p>{{ post.excerpt }}</p>
        </RouterLink>
      </div>
    </section>

    <QuoteCtaBand />
  </main>
</template>
