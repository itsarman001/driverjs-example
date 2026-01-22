<script setup lang="ts">
import BaseTooltip from '@/components/base/BaseTooltip.vue'
import BaseAvatar from '@/components/base/BaseAvatar.vue'
import { Button } from '@/components/ui/button'

import { RouterLink } from 'vue-router'
import { ArrowUpRight } from 'lucide-vue-next'

import { openExternalLink } from '@/utils/utils'
import { projectLink } from '@/constants/constants'
</script>

<template>
  <header class="flex items-center justify-between p-4 border-b">
    <RouterLink to="/" class="flex items-center gap-2">
      <BaseAvatar />
      <span class="text-xl">dev.portfolio</span>
    </RouterLink>

    <nav class="flex items-center gap">
      <RouterLink to="/about">
        <span class="capitalize">about</span>
      </RouterLink>
      <BaseTooltip text="Navigate to GitHub Repository">
        <Button variant="link" @click="openExternalLink(projectLink)" class="flex items-center">
          <span>GitHub</span>
          <ArrowUpRight />
        </Button>
      </BaseTooltip>
    </nav>
  </header>
</template>
