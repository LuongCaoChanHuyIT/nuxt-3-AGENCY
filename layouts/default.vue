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
// import { onMounted } from "vue";

// onMounted(() => {
//   const script = document.createElement("script");
//   script.src = "/js/theme.js";
//   script.defer = true;
//   document.body.appendChild(script);
// });
</script>

<style scoped></style>
