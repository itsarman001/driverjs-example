<script setup lang="ts">
import { ref, computed } from "vue";
import ProjectCard from "./ProjectCard.vue";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "design" | "web" | "all";
}

const activeFilter = ref<"all" | "design" | "web">("all");

const projects: Project[] = [
  {
    id: "1",
    title: "Nebula Dashboard",
    description:
      "A complete data visualization platform for SaaS companies focusing on real-time metrics.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrN29bVXMcfNGmXsVFXW4LiE59L_Ngw7rg21r6GY_iPjxlEZORF9tFgxdRZMdZ2uSgqK6HMw1hfI9XMxvsNMeLdfnLHJ1eEpqza30FtPFRhrQANKCuvjxM5lYMuIdUhxen5uEgLU_K44VWgFOfCwdrBcugoFWne-AmzMQlJsm0Ag0j0FdVt-MMGI62i9rwl1zYXldPh45sz3EL7wi5Pbe3bBjug5MTmUZqFVt13YNfWQufa-UrPSDcXftvMgUxgg2KmN6-hZzxUBKC",
    tags: ["React", "UI Design"],
    category: "design",
  },
  {
    id: "2",
    title: "Lumina App",
    description:
      "Mental health and wellness mobile application designed with a focus on tranquility.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBAOkSvxtcTqnOFnwvPS3k0cDiSNUp56ppx0S07nmM47QDxtYSVs__kDiLAN-6xmCzZSmbSRLBjvcolNkVVqGBkk_tfYohM-aobUFFT8bmo-lnjMu9Zct37h_qI86uJKsl7MQT_MIc9B0zlkddzvJhqvh0OJ51AMk3MxOvvOkVox2EnqaZOv0f_NHiDJQfsceUsZ4oNJmv_XTDGVR9_LmMViRHSkRLpsmEsMNu7186-KirJvpn1wLwNL2ckM09fKjDAjaHhpV5ccQg",
    tags: ["Product", "Mobile"],
    category: "design",
  },
  {
    id: "3",
    title: "Ethera Commerce",
    description:
      "A luxury e-commerce platform integrated with crypto payments and NFT authentication.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCPFKwE3uIsCGGeWuPvB4GiTUvHApLq8SPZAyk2-Vy17anU8C78L8nDhl0O_X8DTvSqr08ARr4MerQoIm7NfFFsAGx4x2fCXL8yA-BFy4CYiyWlzPJjIZ04AIQjEb2fKtD9gg-chYnWsJHSRHOrr2Dat9rFoRtvIPGk_xE-GDe6d5dshoMcq4iqH7sbF8J6A3JrjFmcpa4stUcYXBgJYRrnpnIkGe71HvN6_ESb-H0VzLeCD2XTFnopyxZ85tjdvFHN89NfMPZYIjkD",
    tags: ["Web3", "Brand"],
    category: "web",
  },
];

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") {
    return projects;
  }
  return projects.filter((project) => project.category === activeFilter.value);
});
</script>

<template>
  <section class="py-24 px-6" id="projects">
    <div class="max-w-7xl mx-auto">
      <div
        class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
      >
        <div>
          <h2 class="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <p class="text-slate-500 dark:text-slate-400 max-w-md">
            A selection of my recent works across design and development.
          </p>
        </div>
        <div class="flex gap-4">
          <button
            @click="activeFilter = 'all'"
            :class="[
              'px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all',
              activeFilter === 'all'
                ? 'bg-primary text-white'
                : 'border border-primary/20 hover:bg-primary/5',
            ]"
          >
            All
          </button>
          <button
            @click="activeFilter = 'design'"
            :class="[
              'px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all',
              activeFilter === 'design'
                ? 'bg-primary text-white'
                : 'border border-primary/20 hover:bg-primary/5',
            ]"
          >
            Design
          </button>
          <button
            @click="activeFilter = 'web'"
            :class="[
              'px-6 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-all',
              activeFilter === 'web'
                ? 'bg-primary text-white'
                : 'border border-primary/20 hover:bg-primary/5',
            ]"
          >
            Web
          </button>
        </div>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>
