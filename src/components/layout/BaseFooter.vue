<template>
  <footer class="border-t p-4 mt-auto">
    <p class="text-center mb-2.5">© 2024 Creative Developer. All rights reserved.</p>

    <nav class="flex items-center justify-center gap">
      <BaseTooltip text="Checkout my Linkedin Profile">
        <Button
          variant="link"
          @click="openExternalLink(socialLinks.linkedin)"
          class="flex items-center"
        >
          <span>Linkedin</span>
          <ArrowUpRight />
        </Button>
      </BaseTooltip>

      <BaseTooltip text="Checkout my X Profile">
        <Button variant="link" @click="openExternalLink(socialLinks.x)" class="flex items-center">
          <span>x</span>
          <ArrowUpRight />
        </Button>
      </BaseTooltip>

      <BaseTooltip text="Checkout my GitHub Profile">
        <Button
          variant="link"
          @click="openExternalLink(socialLinks.github)"
          class="flex items-center"
        >
          <span>GitHub</span>
          <ArrowUpRight />
        </Button>
      </BaseTooltip>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import BaseTooltip from '@/components/base/BaseTooltip.vue'
import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-vue-next'
import { openExternalLink } from '@/utils/utils'
import { socialLinks } from '@/constants/constants'
</script>
