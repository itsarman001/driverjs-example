<script setup lang="ts">
import MainLayout from "./layouts/MainLayout.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import ContactSection from "./components/ContactSection.vue";
</script>

<template>
  <MainLayout>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
    <ContactSection />
  </MainLayout>
</template>
