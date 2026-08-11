<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { mainNav, serviceNav, solutionNav } from '../data/navigation'
import { site } from '../data/site'

const route = useRoute()
const isOpen = ref(false)
const openDropdown = ref<string | null>(null)
const closeTimer = ref<number | null>(null)
const isHome = computed(() => route.path === '/')
const isMobile = ref(false)
let mediaQuery: MediaQueryList | null = null

watch(
  () => route.fullPath,
  () => closeAll(),
)

watch(isOpen, (value) => {
  document.body.classList.toggle('nav-open', value)
})

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 767px)')
  updateViewportMode(mediaQuery)
  mediaQuery.addEventListener('change', updateViewportMode)
  document.addEventListener('keydown', handleKeydown)
  document.addEventListener('click', handleOutsideClick)
})

onBeforeUnmount(() => {
  mediaQuery?.removeEventListener('change', updateViewportMode)
  document.removeEventListener('keydown', handleKeydown)
  document.removeEventListener('click', handleOutsideClick)
  document.body.classList.remove('nav-open')
})

function closeAll() {
  isOpen.value = false
  openDropdown.value = null
}

function toggleDropdown(name: string) {
  openDropdown.value = openDropdown.value === name ? null : name
}

function openMenu(name: string) {
  if (isMobile.value) return
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

function updateViewportMode(event: MediaQueryList | MediaQueryListEvent) {
  isMobile.value = event.matches
  if (!event.matches) {
    isOpen.value = false
  }
  openDropdown.value = null
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeAll()
}

function handleOutsideClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Node)) return
  const header = document.querySelector('.site-header')
  if (header && !header.contains(target)) closeAll()
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
      <RouterLink class="nav-link mobile-home-link" to="/" @click="closeAll">Home</RouterLink>

      <div class="nav-group" @mouseenter="cancelClose" @mouseleave="scheduleClose">
        <button class="nav-link nav-button" type="button" :aria-expanded="openDropdown === 'services'" @click="toggleDropdown('services')" @mouseenter="openMenu('services')">
          <span>Services</span>
          <span class="nav-chevron" aria-hidden="true"></span>
        </button>
        <div class="submenu" :class="{ 'is-visible': openDropdown === 'services' }">
          <RouterLink v-for="item in serviceNav" :key="item.path" :to="item.path" @click="closeAll">{{ item.label }}</RouterLink>
        </div>
      </div>

      <div class="nav-group" @mouseenter="cancelClose" @mouseleave="scheduleClose">
        <button class="nav-link nav-button" type="button" :aria-expanded="openDropdown === 'solutions'" @click="toggleDropdown('solutions')" @mouseenter="openMenu('solutions')">
          <span class="desktop-label">Logistics Solutions</span>
          <span class="mobile-label">Solutions</span>
          <span class="nav-chevron" aria-hidden="true"></span>
        </button>
        <div class="submenu" :class="{ 'is-visible': openDropdown === 'solutions' }">
          <RouterLink v-for="item in solutionNav" :key="item.path" :to="item.path" @click="closeAll">{{ item.label }}</RouterLink>
        </div>
      </div>

      <RouterLink v-for="item in mainNav" :key="item.path" class="nav-link" :to="item.path" @click="closeAll">{{ item.label }}</RouterLink>
      <RouterLink class="nav-cta" to="/quote" @click="closeAll">{{ site.primaryCta }}</RouterLink>
    </nav>
  </header>
</template>
