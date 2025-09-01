<script setup lang="ts">
interface ProcessItem {
  id: number;
  section_id: number;
  title: string;
  description: string;
  image_url: string | null;
  link_url: string | null;
  extra: string | null;
  order_index: number;
  status: number;
  created_at: string;
  updated_at: string | null;
  position: string | null;
}

interface Section {
  id: number;
  section_key: string;
  title: string;
  subtitle: string | null;
  order_index: number;
  status: number;
  created_at: string;
  updated_at: string | null;
  items: ProcessItem[];
}

const props = defineProps<{
  section: Section;
}>();

const steps = [
  { class: "me-lg-6" },
  { class: "ms-lg-13 mt-6" },
  { class: "mx-lg-6 mt-6" },
];
</script>

<template>
  <section class="wrapper bg-light">
    <div class="container pb-14 pb-md-17">
      <div class="row gx-md-8 gx-xl-12 gy-10 align-items-center">
        <!-- Cột bên trái: danh sách steps -->
        <div class="col-lg-6 order-lg-2">
          <div
            v-for="(step, index) in section.items"
            :key="step.id"
            class="card shadow-lg"
            :class="steps[index]?.class"
          >
            <div class="card-body p-6">
              <div class="d-flex flex-row">
                <div>
                  <span
                    class="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4"
                  >
                    <span class="number">{{ index + 1 }}</span>
                  </span>
                </div>
                <div>
                  <h4 class="mb-1">{{ step.title }}</h4>
                  <p class="mb-0">{{ step.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Cột bên phải: text -->
        <div class="col-lg-6">
          <h2 class="fs-16 text-uppercase text-primary mb-3">Our Strategy</h2>
          <h3 class="display-3 mb-4">
            {{ section.title }}
          </h3>
          <p>
            Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
            vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam
            id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus
            eget urna mollis.
          </p>
          <p class="mb-6">
            Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
            ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
            consectetur.
          </p>
          <a href="#" class="btn btn-primary rounded-pill mb-0">Learn More</a>
        </div>
      </div>
    </div>
  </section>
</template>
