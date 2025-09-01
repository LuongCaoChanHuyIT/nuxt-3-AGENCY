<template>
  <div>
    <section class="wrapper bg-light">
      <div class="container pt-6 pb-14 pb-md-16">
        <div class="row gx-lg-8 gx-xl-12 gy-10">
          <!-- Cột trái -->
          <div class="col-lg-6 mb-0">
            <h2 class="fs-16 text-uppercase text-primary mb-4">FAQ</h2>
            <h3 class="display-3 mb-4">
              {{ dataFAQ.title }}
            </h3>
            <p class="mb-6">
              {{ dataFAQ.subtitle }}
            </p>
            <a href="#" class="btn btn-primary rounded-pill">All FAQ</a>
          </div>

          <!-- Cột phải: Accordion -->
          <div class="col-lg-6">
            <div id="accordion-3" class="accordion-wrapper">
              <div
                v-for="(faq, index) in dataFAQs"
                :key="faq.id || index"
                class="card accordion-item shadow-lg"
              >
                <div
                  class="card-header"
                  :id="`accordion-heading-3-${index + 1}`"
                >
                  <button
                    class="collapsed"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#accordion-collapse-3-${index + 1}`"
                    aria-expanded="false"
                    :aria-controls="`accordion-collapse-3-${index + 1}`"
                  >
                    {{ faq.title }}
                  </button>
                </div>
                <div
                  :id="`accordion-collapse-3-${index + 1}`"
                  class="collapse"
                  :aria-labelledby="`accordion-heading-3-${index + 1}`"
                  data-bs-parent="#accordion-3"
                >
                  <div class="card-body">
                    <p>{{ faq.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/column -->
        </div>
        <!--/.row -->
      </div>

      <!-- SVG Divider -->
      <div class="overflow-hidden">
        <div class="divider text-navy mx-n2">
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

<script setup>
import { onMounted } from "vue";
import { useHomepageStore } from "~/stores/useItemStore";

const itemStore = useHomepageStore();
const dataFAQ = useState("dataFAQ", () => ({}));
const dataFAQs = useState("dataFAQs", () => []);

onMounted(async () => {
  const resHappy = await itemStore.fetchItem("homepage_sections", 11, true);
  const resHappies = await itemStore.fetchItemsSection("homepage_items", 11);

  dataFAQ.value = resHappy;
  dataFAQs.value = resHappies;
});
</script>
