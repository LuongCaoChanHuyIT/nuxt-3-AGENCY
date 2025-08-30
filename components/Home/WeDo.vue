<template lang="">
  <div>
    <section class="wrapper bg-gradient-primary">
      <div class="container pt-12 pt-lg-8 pb-14 pb-md-17">
        <div class="row text-center">
          <div class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2 class="fs-16 text-uppercase text-primary mb-3">What We Do?</h2>
            <h3 class="display-3 mb-10 px-xxl-10">
              The service we offer is specifically designed to meet your needs.
            </h3>
          </div>
        </div>

        <div
          class="row gx-lg-8 gx-xl-12 gy-11 px-xxl-5 text-center d-flex align-items-end"
        >
          <div
            class="col-lg-4"
            v-for="(service, index) in services"
            :key="index"
          >
            <div class="px-md-15 px-lg-3">
              <figure class="mb-6">
                <img
                  class="img-fluid"
                  :src="service.img"
                  :srcset="`${service.img2x} 2x`"
                  :alt="service.title"
                />
              </figure>
              <h3>{{ service.title }}</h3>
              <p class="mb-2">{{ service.desc }}</p>
              <a :href="service.link" class="more hover">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
const services = [
  {
    img: "/images/i24.png",
    img2x: "/images/i24@2x.png",
    title: "Web Design",
    desc: "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget. Fusce dapibus tellus.",
    link: "#",
  },
  {
    img: "/images/i19.png",
    img2x: "/images/i19@2x.png",
    title: "Graphic Design",
    desc: "Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel augue laoreet. Sed posuere consectetur.",
    link: "#",
  },
  {
    img: "/images/i18.png",
    img2x: "/images/i18@2x.png",
    title: "3D Animation",
    desc: "Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna scelerisque.",
    link: "#",
  },
];
</script>
