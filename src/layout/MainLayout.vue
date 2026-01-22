<script setup lang="ts">
import BaseHeader from '@/components/layout/BaseHeader.vue'
import BaseFooter from '@/components/layout/BaseFooter.vue'
</script>

<template>
  <main class="h-screen">
    <BaseHeader />
    <slot />
    <BaseFooter />
  </main>
</template>
