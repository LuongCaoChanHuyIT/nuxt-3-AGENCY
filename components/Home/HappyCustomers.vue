<template>
  <section class="wrapper bg-gradient-primary">
    <div class="container pt-12 pt-lg-8 pb-14 pb-md-17">
      <div class="row text-center">
        <div class="col-lg-8 offset-lg-2">
          <h2 class="fs-16 text-uppercase text-primary mb-3">
            Happy Customers
          </h2>
          <h3 class="display-3 mb-10 px-xxl-10">
            {{ section?.title }}
          </h3>
        </div>
      </div>

      <div class="grid">
        <div class="row isotope gy-6">
          <div
            class="item col-md-6 col-xl-4"
            v-for="(item, index) in section?.items"
            :key="item.id || index"
          >
            <div class="card shadow-lg">
              <div class="card-body">
                <span class="ratings five mb-2"></span>
                <blockquote class="border-0 mb-0">
                  <p>{{ item.description }}</p>
                  <div class="blockquote-details">
                    <img
                      class="rounded-circle w-12"
                      :src="item.image_url"
                      :alt="item.title"
                    />
                    <div class="info">
                      <h5 class="mb-1">{{ item.title }}</h5>
                      <p class="mb-0">{{ item.position }}</p>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  section: {
    type: Object,
    required: true,
  },
});
</script>
