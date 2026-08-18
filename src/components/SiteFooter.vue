<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { serviceNav, solutionNav } from '../data/navigation'
import { site } from '../data/site'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <RouterLink class="brand" to="/">
          <img class="brand-logo" src="/assets/brand/logo-yudao-white.png" alt="" aria-hidden="true">
        </RouterLink>
        <p>{{ site.legalName }}</p>
        <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        <span>{{ site.address }}</span>
      </div>
      <div>
        <h3>Services</h3>
        <RouterLink v-for="item in serviceNav" :key="item.path" :to="item.path">{{ item.label }}</RouterLink>
      </div>
      <div>
        <h3>Logistics Solutions</h3>
        <RouterLink v-for="item in solutionNav" :key="item.path" :to="item.path">{{ item.label }}</RouterLink>
      </div>
      <div>
        <h3>Company</h3>
        <RouterLink to="/company">About Us</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
      </div>
    </div>
    <div class="footer-bottom">
      <small>&copy; {{ site.year }} {{ site.legalName }}. All rights reserved.</small>
      <RouterLink to="/privacy">Privacy Policy</RouterLink>
    </div>
  </footer>
</template>
