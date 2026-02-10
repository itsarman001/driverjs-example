<script setup lang="ts">
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div
    class="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-primary/5 hover:border-primary/40 transition-all"
  >
    <div class="aspect-video overflow-hidden">
      <img
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        :src="project.image"
        :alt="project.title"
      />
    </div>
    <div class="p-8">
      <div class="flex gap-2 mb-4 flex-wrap">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      <h3
        class="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
      >
        {{ project.title }}
      </h3>
      <p class="text-slate-500 dark:text-slate-400 text-sm mb-6">
        {{ project.description }}
      </p>
      <a
        class="inline-flex items-center text-primary font-semibold text-sm"
        href="#"
      >
        Case Study
        <span class="material-icons text-xs ml-1">north_east</span>
      </a>
    </div>
  </div>
</template>
