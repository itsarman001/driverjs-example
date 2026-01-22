<script setup lang="ts">
import BaseAvatar from '@/components/base/BaseAvatar.vue'
import { Button } from '@/components/ui/button'

import { RouterLink } from 'vue-router'

import { ArrowUpRight, Router } from 'lucide-vue-next'

const githubUrl = 'https://github.com/itsarman001/driverjs-example'

const openExternalLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <header class="flex items-center justify-between p-4 border-b">
    <RouterLink to="/" class="flex items-center gap-2">
      <BaseAvatar />
      <span class="text-xl">dev.portfolio</span>
    </RouterLink>

    <nav>
      <ul>
        <li>
          <Button variant="ghost" @click="openExternalLink(githubUrl)" class="flex items-center">
            <span>GitHub</span>
            <ArrowUpRight />
          </Button>
        </li>
      </ul>
    </nav>
  </header>
</template>
