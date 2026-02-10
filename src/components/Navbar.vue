<script setup lang="ts">
import { ref } from "vue";
import { useDarkMode } from "../composables/useDarkMode.js";

const isMobileMenuOpen = ref(false);
const { isDark, toggleDarkMode } = useDarkMode();

const scrollToSection = (sectionId: string) => {
  isMobileMenuOpen.value = false;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <nav
    class="fixed top-0 w-full z-50 backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-primary/10"
  >
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div class="text-2xl font-bold tracking-tighter text-primary">
        PORTFOLIO.
      </div>

      <div class="flex items-center gap-8">
        <!-- Desktop Menu -->
        <div
          class="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest"
        >
          <button
            @click="scrollToSection('hero')"
            class="hover:text-primary transition-colors"
          >
            Home
          </button>
          <button
            @click="scrollToSection('about')"
            class="hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            @click="scrollToSection('projects')"
            class="hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            @click="scrollToSection('experience')"
            class="hover:text-primary transition-colors"
          >
            Experience
          </button>
          <button
            @click="scrollToSection('contact')"
            class="hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>

        <div class="flex items-center gap-4">
          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            class="text-primary hover:text-primary/80 transition-colors"
            :title="isDark ? 'Light mode' : 'Dark mode'"
          >
            <span class="material-icons">{{
              isDark ? "light_mode" : "dark_mode"
            }}</span>
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden text-primary"
          >
            <span class="material-icons">{{
              isMobileMenuOpen ? "close" : "menu"
            }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden bg-background-light dark:bg-background-dark border-t border-primary/10"
    >
      <div class="px-6 py-4 space-y-4">
        <button
          @click="scrollToSection('hero')"
          class="block w-full text-left hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest"
        >
          Home
        </button>
        <button
          @click="scrollToSection('about')"
          class="block w-full text-left hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest"
        >
          About
        </button>
        <button
          @click="scrollToSection('projects')"
          class="block w-full text-left hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest"
        >
          Projects
        </button>
        <button
          @click="scrollToSection('experience')"
          class="block w-full text-left hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest"
        >
          Experience
        </button>
        <button
          @click="scrollToSection('contact')"
          class="block w-full text-left hover:text-primary transition-colors text-sm font-medium uppercase tracking-widest"
        >
          Contact
        </button>
      </div>
    </div>
  </nav>
</template>
