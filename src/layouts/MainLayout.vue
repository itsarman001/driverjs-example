<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div
    class="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 transition-colors duration-300"
  >
    <Navbar />
    <main class="pt-20">
      <slot></slot>
    </main>
    <Footer />
  </div>
</template>
