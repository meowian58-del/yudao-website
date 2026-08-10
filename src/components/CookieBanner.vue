<script setup lang="ts">
import { onMounted, ref } from 'vue'

const visible = ref(false)

onMounted(() => {
  visible.value = localStorage.getItem('yudao-cookie-accepted') !== 'true'
})

function accept() {
  localStorage.setItem('yudao-cookie-accepted', 'true')
  visible.value = false
}
</script>

<template>
  <div v-if="visible" class="cookie-banner" role="dialog" aria-label="Cookie notice">
    <p>We use essential cookies to keep this website reliable and understand basic site performance.</p>
    <button type="button" @click="accept">Accept</button>
  </div>
</template>
