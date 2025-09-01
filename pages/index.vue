<template>
  <div>
    <home-header :section="homepageStore.hero" />
    <home-we-do :section="homepageStore.services" />
    <home-our-strategy :section="homepageStore.process" />
    <home-choose-us :section="homepageStore.chooseus" />
    <home-company-facts
      :teamSection="homepageStore.team"
      :projectSection="homepageStore.projects"
    />
    <home-happy-customers :section="homepageStore.testimonials" />
    <home-f-a-q :section="homepageStore.faq" />
  </div>
</template>
<script setup>
import { useHomepageStore } from "~/stores/useItemStore";
const homepageStore = useHomepageStore();
onMounted(() => {
  homepageStore.fechHomepageSection();
});
useHead({
  title: "Sandbox - Modern & Multipurpose Bootstrap 5 Template",
  meta: [
    {
      name: "description",
      content:
        "An impressive and flawless site template that includes various UI elements and countless features, attractive ready-made blocks and rich pages, basically everything you need to create a unique and professional website.",
    },
    {
      name: "keywords",
      content:
        "bootstrap 5, business, corporate, creative, gulp, marketing, minimal, modern, multipurpose, one page, responsive, saas, sass, seo, startup, html5 template, site template",
    },
    { name: "author", content: "elemis" },
  ],
});
</script>
