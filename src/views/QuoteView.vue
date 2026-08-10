<script setup lang="ts">
import { ref } from 'vue'
import { services } from '../data/services'
import { site } from '../data/site'

const status = ref('')
const state = ref<'idle' | 'loading' | 'success' | 'error'>('idle')

async function submit(event: Event) {
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  state.value = 'loading'
  status.value = 'Sending your request...'
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData,
    })
    if (!response.ok) throw new Error('The request could not be sent. Please email us directly if the issue continues.')
    state.value = 'success'
    status.value = 'Thank you. Your request has been received and our team will review the shipment details.'
    form.reset()
  } catch (error) {
    state.value = 'error'
    status.value = error instanceof Error ? error.message : `Please email ${site.email} if the form cannot be sent.`
  }
}
</script>

<template>
  <main>
    <section class="quote-layout">
      <div class="quote-intro">
        <p class="eyebrow">Get A Quote</p>
        <h1>Tell us what needs to move.</h1>
        <p>Share the cargo basics and our team will review the route, documents and handoff requirements.</p>
        <a :href="`mailto:${site.email}`">{{ site.email }}</a>
      </div>
      <form class="quote-form" action="https://formsubmit.co/ajax/official@yudaoglobal.com" method="POST" @submit.prevent="submit">
        <input type="hidden" name="_subject" value="New Quote Request from YUDAO GLOBAL LOGISTICS Website">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <label class="honeypot">Website<input name="_honey" tabindex="-1" autocomplete="off"></label>
        <label>Full Name<input name="Full Name" autocomplete="name" required></label>
        <label>Company Name<input name="Company Name" autocomplete="organization" required></label>
        <label>Business Email<input name="Business Email" type="email" autocomplete="email" required></label>
        <label>Phone / WhatsApp<input name="Phone / WhatsApp" autocomplete="tel"></label>
        <label>Service Needed<select name="Service Needed" required><option value="">Select service</option><option v-for="service in services" :key="service.slug">{{ service.name }}</option></select></label>
        <label>Cargo Type<input name="Cargo Type" required></label>
        <label>Origin<input name="Origin" required></label>
        <label>Destination<input name="Destination" required></label>
        <label class="full-span">Message<textarea name="Message" rows="6" required></textarea></label>
        <p class="form-status" :class="state" role="status">{{ status }}</p>
        <button class="button button-primary" type="submit" :disabled="state === 'loading'">{{ state === 'loading' ? 'Sending...' : 'Send Request' }}</button>
      </form>
    </section>
  </main>
</template>
