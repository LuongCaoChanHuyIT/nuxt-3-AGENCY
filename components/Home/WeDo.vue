<script setup lang="ts">
interface ServiceItem {
  id: number;
  section_id: number;
  title: string;
  description: string;
  image_url: string;
  link_url: string;
  order_index: number;
}

interface Section {
  id: number;
  section_key: string;
  title: string;
  subtitle?: string | null;
  order_index: number;
  status: number;
  items: ServiceItem[];
}

const props = defineProps<{
  section: Section;
}>();
</script>

<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container pt-12 pt-lg-8 pb-14 pb-md-17">
      <!-- Title -->
      <div class="row text-center">
        <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
          <h2 class="fs-16 text-uppercase text-primary mb-3">
            {{ section.subtitle || "What We Do?" }}
          </h2>
          <h3 class="display-3 mb-10 px-xxl-10">
            {{ section.title }}
          </h3>
        </div>
      </div>

      <!-- Services -->
      <div
        class="row gx-lg-8 gx-xl-12 gy-11 px-xxl-5 text-center d-flex align-items-end"
      >
        <div
          class="col-lg-4"
          v-for="service in section.items"
          :key="service.id"
        >
          <div class="px-md-15 px-lg-3">
            <figure class="mb-6">
              <img
                class="img-fluid"
                :src="service.image_url"
                :alt="service.title"
              />
            </figure>
            <h3>{{ service.title }}</h3>
            <p class="mb-2">{{ service.description }}</p>
            <a :href="service.link_url" class="more hover">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
