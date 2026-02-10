<script setup lang="ts">
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <section class="min-h-screen flex items-center pt-20 px-6" id="hero">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span
          class="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block"
          >Creative Designer &amp; Developer</span
        >
        <h1
          class="text-5xl md:text-7xl font-bold leading-tight text-slate-900 dark:text-white mb-6"
        >
          Building digital
          <span class="text-primary">experiences</span>
          that matter.
        </h1>
        <p
          class="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg leading-relaxed"
        >
          I'm a multi-disciplinary professional specializing in high-end UI/UX
          design and modern web development. Based in San Francisco, working
          globally.
        </p>
        <div class="flex flex-wrap gap-4">
          <button
            @click="scrollToSection('projects')"
            class="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all flex items-center shadow-lg shadow-primary/20"
          >
            View Projects
            <span class="material-icons ml-2 text-sm">arrow_forward</span>
          </button>
          <button
            @click="scrollToSection('contact')"
            class="px-8 py-4 border border-primary/20 dark:border-primary/40 hover:bg-primary/10 transition-all rounded-lg font-medium"
          >
            Let's Talk
          </button>
        </div>
      </div>
      <div class="relative">
        <div
          class="aspect-square rounded-2xl overflow-hidden bg-primary/10 border border-primary/20"
        >
          <img
            class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            data-alt="Professional portrait of a creative professional"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxeH92QShz5WyivuUP0J1qzW6w7_IS1I4MQF8v2CVF911UatrMLfL1UjuuNW7VyP-uIAaXOb1OVRGORPfxAOkmvpJeXDATaWeUPxFQOQtKRXURjRcUJj69MfJvyNVVOWc7dyG9MPClmiHu4UxR1IcNPaLjUPyNakHvYvhHfAkd-Hp1vlXArP46WDlD8YJwAvTbvJfqnAKoWlRsXv17Zy8VQTH3yHCKpWig_5Ix5PJYyJR8y897awbyjqcNzlOOyBKO8DWuinEIlZVp"
          />
        </div>
        <div
          class="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border border-primary/10"
        >
          <div class="flex items-center gap-4">
            <div class="bg-primary/20 p-3 rounded-lg">
              <span class="material-icons text-primary">verified</span>
            </div>
            <div>
              <div class="text-2xl font-bold">8+ Years</div>
              <div class="text-xs text-slate-500 uppercase tracking-widest">
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
