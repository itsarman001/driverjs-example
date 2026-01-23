<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <main class="flex items-center justify-center">
    <section>
      <div>
        <h1 class="text-4xl font-bold">creative. developer</h1>
        <p>
          Building delightful digital experiences with clean code, intuitive design, and a focus on
          user happiness.
        </p>
      </div>
      <div>
        <Button size="lg">Get in Touch</Button>
        <Button variant="outline" size="lg">Lets Talk</Button>
      </div>
    </section>
    <section class="h-20 w-20">
      <img src="/developer.svg" alt="developer illustration" />
    </section>
  </main>
</template>
