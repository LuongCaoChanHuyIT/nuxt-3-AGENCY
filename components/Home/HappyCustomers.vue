<template lang="">
  <div>
    <section class="wrapper bg-gradient-primary">
      <div class="container pt-12 pt-lg-8 pb-14 pb-md-17">
        <div class="row text-center">
          <div class="col-lg-8 offset-lg-2">
            <h2 class="fs-16 text-uppercase text-primary mb-3">
              Happy Customers
            </h2>
            <h3 class="display-3 mb-10 px-xxl-10">
              {{ dataHappy?.title }}
            </h3>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
        <div class="grid">
          <div class="row isotope gy-6">
            <div
              class="item col-md-6 col-xl-4"
              v-for="(t, index) in dataHappies"
              :key="index"
            >
              <div class="card shadow-lg">
                <div class="card-body">
                  <span class="ratings five mb-2"></span>
                  <blockquote class="border-0 mb-0">
                    <p>{{ t.description }}</p>
                    <div class="blockquote-details">
                      <img
                        class="rounded-circle w-12"
                        :src="t.image_url"
                        alt=""
                      />
                      <div class="info">
                        <h5 class="mb-1">{{ t.title }}</h5>
                        <p class="mb-0">{{ t.position }}</p>
                      </div>
                    </div>
                  </blockquote>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!--/column -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.grid-view -->
      </div>
      <!-- /.container -->
    </section>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { useHomepageStore } from "~/stores/useItemStore";

const itemStore = useHomepageStore();
const dataHappy = useState("dataHappy", () => []);
const dataHappies = useState("dataHappies", () => []);

onMounted(async () => {
  const resHappy = await itemStore.fetchItem("homepage_sections", 10, true);
  const resHappies = await itemStore.fetchItemsSection("homepage_items", 10);

  dataHappy.value = resHappy;
  dataHappies.value = resHappies;
});

const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});
</script>
<style lang=""></style>
