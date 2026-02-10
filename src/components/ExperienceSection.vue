<script setup lang="ts">
interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  isActive: boolean;
}

const experience: ExperienceItem[] = [
  {
    id: "1",
    title: "Senior Product Designer",
    company: "TechFlow Solutions",
    period: "2021 — Present",
    description:
      "Leading the design system team and overseeing the UX strategy for the flagship enterprise product suite.",
    isActive: true,
  },
  {
    id: "2",
    title: "UI/UX Designer",
    company: "Creative Pulse Agency",
    period: "2018 — 2021",
    description:
      "Developed digital products for Fortune 500 clients, ranging from FinTech startups to global retail brands.",
    isActive: false,
  },
  {
    id: "3",
    title: "Junior Web Developer",
    company: "Innovate Web Labs",
    period: "2016 — 2018",
    description:
      "Started as an intern and worked up to a full-time role building responsive websites and internal tools.",
    isActive: false,
  },
];
</script>

<template>
  <section class="py-24 px-6 bg-primary/5" id="experience">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-4xl font-bold mb-16 text-center">My Career Path</h2>
      <div class="space-y-12">
        <div
          v-for="item in experience"
          :key="item.id"
          class="relative pl-12 border-l-2 border-primary/20"
        >
          <div
            :class="[
              'absolute -left-[9px] top-0 w-4 h-4 rounded-full ring-4',
              item.isActive ? 'bg-primary ring-primary/20' : 'bg-primary/40',
            ]"
          ></div>
          <div
            class="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
          >
            <h3 class="text-xl font-bold">{{ item.title }}</h3>
            <span
              :class="[
                item.isActive ? 'text-primary' : 'text-slate-500',
                'font-medium',
              ]"
            >
              {{ item.period }}
            </span>
          </div>
          <div class="text-slate-900 dark:text-white font-semibold mb-2">
            {{ item.company }}
          </div>
          <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
