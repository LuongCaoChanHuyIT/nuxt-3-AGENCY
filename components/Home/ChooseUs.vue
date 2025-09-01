<template>
  <div>
    <section class="wrapper bg-gradient-reverse-primary">
      <div class="container pb-14 pb-md-16">
        <div class="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
          <!-- Hình bên trái (static như bạn đang dùng) -->
          <div class="col-lg-7">
            <figure>
              <img
                class="img-auto"
                src="/images/i22.png"
                srcset="/images/i22@2x.png 2x"
                alt=""
              />
            </figure>
          </div>

          <!-- Text + Accordion -->
          <div class="col-lg-5">
            <h2 class="fs-15 text-uppercase text-primary mb-3">
              {{ section.subtitle || "Why Choose Us?" }}
            </h2>
            <h3 class="display-3 mb-7">
              {{ section.title }}
            </h3>

            <div class="accordion accordion-wrapper" :id="accordionDomId">
              <div
                v-for="(item, index) in section?.items?.filter(
                  (item) => item.title !== 'img'
                )"
                :key="item.id"
                class="card plain accordion-item"
              >
                <div class="card-header" :id="`heading-${item.id}`">
                  <button
                    class="collapsed"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#collapse-${item.id}`"
                    :aria-controls="`collapse-${item.id}`"
                    :aria-expanded="index === 0 ? 'true' : 'false'"
                  >
                    {{ item.title }}
                  </button>
                </div>

                <div
                  :id="`collapse-${item.id}`"
                  class="accordion-collapse collapse"
                  :class="{ show: index === 0 }"
                  :aria-labelledby="`heading-${item.id}`"
                  :data-bs-parent="`#${accordionDomId}`"
                >
                  <div class="card-body">
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/column -->
        </div>
      </div>

      <div class="overflow-hidden">
        <div class="divider text-light mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="currentColor"
              d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
            />
          </svg>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Item {
  id: number;
  title: string;
  description: string;
  image_url?: string | null;
  link_url?: string | null;
  extra?: any;
  order_index: number;
  status: number;
  created_at: string;
  updated_at: string | null;
  position?: string | null;
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
  items: Item[];
}

const props = defineProps<{ section: Section }>();

// ID duy nhất cho accordion (tránh đụng nhau nếu render nhiều section)
const accordionDomId = computed(() => `accordion-${props.section.id}`);
</script>
