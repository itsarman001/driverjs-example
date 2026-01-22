<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
defineProps({
  src: {
    type: String,
    default: 'https://github.com/shadcn.png'
  },
  name: {
    type: String,
    default: 'Developer'
  }
})
</script>

<template>
  <Avatar>
    <AvatarImage :src="src" :alt="name" />
    <AvatarFallback class="uppercase">{{ name.charAt(0) }}</AvatarFallback>
  </Avatar>
</template>
