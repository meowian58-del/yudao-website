<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { mainNav, serviceNav, solutionNav } from '../data/navigation'
import { site } from '../data/site'

const route = useRoute()
const isOpen = ref(false)
const openDropdown = ref<string | null>(null)
const closeTimer = ref<number | null>(null)
const isHome = computed(() => route.path === '/')

function closeAll() {
  isOpen.value = false
  openDropdown.value = null
}

function toggleDropdown(name: string) {
  openDropdown.value = openDropdown.value === name ? null : name
}

function openMenu(name: string) {
  cancelClose()
  openDropdown.value = name
}

function scheduleClose() {
  cancelClose()
  closeTimer.value = window.setTimeout(() => {
    openDropdown.value = null
  }, 180)
}

function cancelClose() {
  if (closeTimer.value !== null) {
    window.clearTimeout(closeTimer.value)
    closeTimer.value = null
  }
}
</script>

<template>
  <header class="site-header" :class="{ 'is-floating': isHome, 'is-solid': !isHome }">
    <RouterLink class="brand" to="/" aria-label="YUDAO GLOBAL LOGISTICS home" @click="closeAll">
      <span class="brand-mark">Y</span>
      <span>{{ site.brand }}</span>
    </RouterLink>

    <button class="menu-toggle" type="button" :aria-expanded="isOpen" aria-label="Toggle navigation" @click="isOpen = !isOpen">
      <span></span><span></span><span></span>
    </button>

    <nav class="site-nav" :class="{ 'is-open': isOpen }" aria-label="Primary navigation">
      <div class="nav-group" @mouseenter="cancelClose" @mouseleave="scheduleClose">
        <button class="nav-link nav-button" type="button" :aria-expanded="openDropdown === 'services'" @click="toggleDropdown('services')" @mouseenter="openMenu('services')">Services</button>
        <div class="submenu" :class="{ 'is-visible': openDropdown === 'services' }">
          <RouterLink v-for="item in serviceNav" :key="item.path" :to="item.path" @click="closeAll">{{ item.label }}</RouterLink>
        </div>
      </div>

      <div class="nav-group" @mouseenter="cancelClose" @mouseleave="scheduleClose">
        <button class="nav-link nav-button" type="button" :aria-expanded="openDropdown === 'solutions'" @click="toggleDropdown('solutions')" @mouseenter="openMenu('solutions')">Logistics Solutions</button>
        <div class="submenu" :class="{ 'is-visible': openDropdown === 'solutions' }">
          <RouterLink v-for="item in solutionNav" :key="item.path" :to="item.path" @click="closeAll">{{ item.label }}</RouterLink>
        </div>
      </div>

      <RouterLink v-for="item in mainNav" :key="item.path" class="nav-link" :to="item.path" @click="closeAll">{{ item.label }}</RouterLink>
      <RouterLink class="nav-cta" to="/quote" @click="closeAll">{{ site.primaryCta }}</RouterLink>
    </nav>
  </header>
</template>
