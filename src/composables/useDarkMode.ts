import { ref, onMounted, watch } from "vue";

const THEME_KEY = "theme";

export function useDarkMode() {
  const isDark = ref(false);

  const applyTheme = (dark: boolean) => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
  };

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === "dark") {
      isDark.value = true;
    } else if (savedTheme === "light") {
      isDark.value = false;
    } else {
      // system preference fallback
      isDark.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    applyTheme(isDark.value);
  });

  watch(isDark, (value) => {
    applyTheme(value);
  });

  return {
    isDark,
    toggleDarkMode,
  };
}
