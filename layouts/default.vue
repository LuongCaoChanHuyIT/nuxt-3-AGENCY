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
</script>

<style scoped></style>
