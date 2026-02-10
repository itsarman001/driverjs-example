<script setup lang="ts"></script>

<template>
  <section class="py-24 px-6 bg-primary/5" id="about">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-3 gap-16">
        <div class="lg:col-span-1">
          <h2 class="text-3xl font-bold mb-6">About My Philosophy</h2>
          <div class="h-1 w-20 bg-primary mb-6"></div>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
            I believe that great design is invisible. It's about solving complex
            problems with simple, intuitive, and beautiful interfaces.
          </p>
        </div>
        <div class="lg:col-span-2 grid md:grid-cols-2 gap-8">
          <div
            class="p-8 bg-white dark:bg-slate-900 rounded-xl border border-primary/5 hover:border-primary/20 transition-all"
          >
            <span class="material-icons text-primary mb-4 text-3xl">brush</span>
            <h3 class="text-xl font-bold mb-3">UI/UX Design</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Crafting user-centric interfaces that are accessible, performant,
              and delightful to use across all devices.
            </p>
          </div>
          <div
            class="p-8 bg-white dark:bg-slate-900 rounded-xl border border-primary/5 hover:border-primary/20 transition-all"
          >
            <span class="material-icons text-primary mb-4 text-3xl">code</span>
            <h3 class="text-xl font-bold mb-3">Frontend Dev</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Transforming designs into pixel-perfect code using React, Tailwind
              CSS, and cutting-edge web technologies.
            </p>
          </div>
          <div
            class="p-8 bg-white dark:bg-slate-900 rounded-xl border border-primary/5 hover:border-primary/20 transition-all"
          >
            <span class="material-icons text-primary mb-4 text-3xl"
              >strategy</span
            >
            <h3 class="text-xl font-bold mb-3">Product Strategy</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Aligning business goals with user needs to create sustainable and
              impactful digital products.
            </p>
          </div>
          <div
            class="p-8 bg-white dark:bg-slate-900 rounded-xl border border-primary/5 hover:border-primary/20 transition-all"
          >
            <span class="material-icons text-primary mb-4 text-3xl">bolt</span>
            <h3 class="text-xl font-bold mb-3">Brand Identity</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">
              Developing cohesive visual languages that tell a brand's story and
              resonate with their audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
