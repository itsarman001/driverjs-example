<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const submitMessage = ref("");

const handleSubmit = async () => {
  isSubmitting.value = true;
  submitMessage.value = "";

  // Validate form
  if (
    !formData.value.name ||
    !formData.value.email ||
    !formData.value.subject ||
    !formData.value.message
  ) {
    submitMessage.value = "Please fill in all fields.";
    isSubmitting.value = false;
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.value.email)) {
    submitMessage.value = "Please enter a valid email address.";
    isSubmitting.value = false;
    return;
  }

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    submitMessage.value =
      "Message sent successfully! I will get back to you within 24 hours.";
    formData.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  } catch (error) {
    submitMessage.value = "An error occurred. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <section class="py-24 px-6" id="contact">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2 class="text-5xl font-bold mb-8">
            Let's build something
            <span class="text-primary underline underline-offset-8"
              >extraordinary</span
            >
            together.
          </h2>
          <p class="text-slate-500 dark:text-slate-400 mb-12 text-lg">
            Currently accepting new projects and collaboration opportunities.
            Reach out and I'll get back to you within 24 hours.
          </p>
          <div class="space-y-6">
            <div class="flex items-center gap-6">
              <div
                class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary"
              >
                <span class="material-icons">email</span>
              </div>
              <div>
                <div
                  class="text-xs uppercase tracking-widest font-bold text-slate-400"
                >
                  Email Me
                </div>
                <div class="text-lg font-medium">
                  hello@creativeportfolio.com
                </div>
              </div>
            </div>
            <div class="flex items-center gap-6">
              <div
                class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary"
              >
                <span class="material-icons">location_on</span>
              </div>
              <div>
                <div
                  class="text-xs uppercase tracking-widest font-bold text-slate-400"
                >
                  Office
                </div>
                <div class="text-lg font-medium">San Francisco, CA</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-2xl shadow-primary/5 border border-primary/10"
        >
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  class="block text-xs uppercase font-bold tracking-widest text-slate-400 mb-2"
                  >Name</label
                >
                <input
                  v-model="formData.name"
                  class="w-full bg-primary/5 border-none focus:ring-2 focus:ring-primary rounded-lg p-4 text-sm transition-all"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div>
                <label
                  class="block text-xs uppercase font-bold tracking-widest text-slate-400 mb-2"
                  >Email</label
                >
                <input
                  v-model="formData.email"
                  class="w-full bg-primary/5 border-none focus:ring-2 focus:ring-primary rounded-lg p-4 text-sm transition-all"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>
            <div>
              <label
                class="block text-xs uppercase font-bold tracking-widest text-slate-400 mb-2"
                >Subject</label
              >
              <input
                v-model="formData.subject"
                class="w-full bg-primary/5 border-none focus:ring-2 focus:ring-primary rounded-lg p-4 text-sm transition-all"
                placeholder="Project Inquiry"
                type="text"
              />
            </div>
            <div>
              <label
                class="block text-xs uppercase font-bold tracking-widest text-slate-400 mb-2"
                >Message</label
              >
              <textarea
                v-model="formData.message"
                class="w-full bg-primary/5 border-none focus:ring-2 focus:ring-primary rounded-lg p-4 text-sm transition-all"
                placeholder="How can I help you?"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-4 bg-primary text-white font-bold rounded-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all uppercase tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? "Sending..." : "Send Message" }}
            </button>
            <div
              v-if="submitMessage"
              :class="[
                'text-sm p-4 rounded-lg text-center',
                submitMessage.includes('successfully')
                  ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                  : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400',
              ]"
            >
              {{ submitMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
