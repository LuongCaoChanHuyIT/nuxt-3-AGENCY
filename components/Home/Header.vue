<script setup lang="ts">
interface HeroItem {
  id: number;
  section_id: number;
  title: string;
  description: string;
  image_url: string;
  link_url: string;
  extra?: string | null;
  order_index: number;
  status: number;
  created_at: string;
  updated_at: string | null;
  position?: string | null;
}

interface HeroSection {
  id: number;
  section_key: string;
  title: string;
  subtitle: string;
  order_index: number;
  status: number;
  created_at: string;
  updated_at: string | null;
  items: HeroItem[];
}

const props = defineProps<{
  section: HeroSection;
}>();

const images = [
  "c1.png",
  "c2.png",
  "c3.png",
  "c4.png",
  "c5.png",
  "c6.png",
  "c7.png",
];

const formattedTitle = computed(() =>
  props.section?.title ? props.section.title.replace(/\n/g, "<br/>") : ""
);

const firstItem = computed(() => props.section.items?.[0] || null);
</script>

<template>
  <section class="wrapper bg-light">
    <div class="container pt-10 pt-md-14 pb-14 pb-md-16 text-center">
      <div class="row gx-lg-8 gx-xl-12 gy-10 gy-xl-0 mb-14 align-items-center">
        <div class="col-lg-7 order-lg-2">
          <figure>
            <img
              class="img-auto"
              :src="firstItem?.image_url"
              :alt="firstItem?.title"
            />
          </figure>
        </div>
        <div
          class="col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start"
        >
          <h1 class="display-1 fs-54 mb-0 mx-md-n0 mx-lg-0 mt-7">
            <div class="display-1 fs-54 my-0" v-html="formattedTitle"></div>
            <ui-text-rotator
              :texts="['mobile design', 'web design', '3D animation']"
              class="text-primary"
              :interval="2500"
            />
          </h1>
          <p class="lead fs-lg mb-7 mt-7">
            {{ props.section.subtitle }}
          </p>
          <span v-if="firstItem">
            <a
              class="btn btn-lg btn-primary rounded-pill me-2"
              :href="firstItem.link_url"
            >
              {{ firstItem.title }}
            </a>
          </span>
        </div>
      </div>
      <home-client />
    </div>
    <div class="overflow-hidden">
      <div class="divider text-soft-primary mx-n2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="currentColor"
            d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
          />
        </svg>
      </div>
    </div>
  </section>
</template>
