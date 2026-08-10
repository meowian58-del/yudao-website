<script setup lang="ts">
import { site } from '../data/site'
</script>

<template>
  <main>
    <section class="policy-page">
      <p class="eyebrow">Privacy Policy</p>
      <h1>Privacy Policy</h1>
      <p>{{ site.legalName }} collects information submitted through the quote form only to review and respond to freight inquiries.</p>
      <h2>Information We Receive</h2>
      <p>Quote requests may include contact details, company name, cargo information, origin, destination and message content.</p>
      <h2>How We Use Information</h2>
      <p>We use submitted information to communicate about the inquiry, review shipment requirements and maintain basic website operations.</p>
      <h2>Contact</h2>
      <p>For privacy questions, contact <a :href="`mailto:${site.email}`">{{ site.email }}</a>.</p>
    </section>
  </main>
</template>
