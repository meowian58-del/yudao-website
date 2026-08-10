<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import CookieBanner from './components/CookieBanner.vue'
</script>

<template>
  <SiteHeader />
  <RouterView />
  <SiteFooter />
  <CookieBanner />
</template>
