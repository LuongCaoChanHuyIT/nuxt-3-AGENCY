<template>
  <div>
    <home-header />
    <home-we-do />
    <home-our-strategy />
    <home-choose-us />
    <home-company-facts />
    <home-happy-customers />
    <home-f-a-q />
    <!-- {{ itemStore.itemsSection }} -->
  </div>
</template>
<script setup>
// import { useHomepageStore } from "~/stores/useItemStore";
// const itemStore = useHomepageStore();

onMounted(() => {
  // itemStore.fetchItems("homepage_items");
  // itemStore.fetchItem("homepage_sections", 1);
  // itemStore.fetchItemsSection("homepage_items", 1);
});
</script>
<style lang=""></style>
