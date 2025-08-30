<template>
  <div>
    <main class="content-wrapper">
      <Navigation />
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navigation from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, nextTick } from "vue";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

onMounted(async () => {
  await nextTick();
  document.documentElement.setAttribute(
    "data-bs-theme",
    themeStore.isDark ? "dark" : "light"
  );
});
</script>

<style scoped></style>
