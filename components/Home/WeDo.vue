<template lang="">
  <div>
    <section class="wrapper bg-gradient-primary">
      <div class="container pt-12 pt-lg-8 pb-14 pb-md-17">
        <div class="row text-center">
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 class="fs-16 text-uppercase text-primary mb-3">What We Do?</h2>
            <h3 class="display-3 mb-10 px-xxl-10">
              {{ data?.title }}
            </h3>
          </div>
        </div>

        <div
          class="row gx-lg-8 gx-xl-12 gy-11 px-xxl-5 text-center d-flex align-items-end"
        >
          <div class="col-lg-4" v-for="(service, index) in items" :key="index">
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
              <a :href="service.link" class="more hover">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { useHomepageStore } from "~/stores/useItemStore";
import { onMounted, watch, computed } from "vue";

const itemStore = useHomepageStore();
const data = useState("wedo", () => []);
const items = useState("wedoitems", () => []);
onMounted(async () => {
  const res = await itemStore.fetchItem("homepage_sections", 5, true);
  const resItems = await itemStore.fetchItemsSection("homepage_items", 5);
  items.value = resItems;
  data.value = res;
});
</script>
