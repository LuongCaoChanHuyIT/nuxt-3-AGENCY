<template>
  <div>
    <section class="wrapper bg-light">
      <div class="container pt-12 pt-lg-8 pb-14 pb-md-16">
        <!-- TEAM -->
        <div class="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-11">
          <div class="col-lg-4 text-center text-lg-start">
            <h2 class="fs-16 text-uppercase text-primary mb-3">
              Company Facts
            </h2>
            <h3 class="display-3 mb-4 pe-xxl-5">
              {{ teamSection.title }}
            </h3>
            <p class="mb-0 pe-xxl-11">
              {{ teamSection.subtitle }}
            </p>
          </div>
          <!-- /column -->
          <div class="col-lg-8 mt-lg-2">
            <!-- counters: nếu có -->
            <div
              class="row align-items-center counter-wrapper gy-6 text-center"
            >
              <div
                class="col-md-4"
                v-for="(item, index) in counters"
                :key="index"
              >
                <div
                  class="icon btn btn-circle btn-lg btn-soft-primary pe-none mb-4"
                >
                  <i :class="item.icon"></i>
                </div>
                <h3 class="counter">{{ item.value }}</h3>
                <p>{{ item.label }}</p>
              </div>
            </div>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->

        <!-- Team members -->
        <div class="row grid-view gy-6 gy-xl-0">
          <div
            v-for="member in teamSection.items"
            :key="member.id"
            class="col-md-6 col-xl-3"
          >
            <div class="card shadow-lg">
              <div class="card-body">
                <img
                  class="rounded-circle w-15 mb-4"
                  :src="member.image_url"
                  :alt="member.title"
                />
                <h4 class="mb-1">{{ member.title }}</h4>
                <div class="meta mb-2">{{ member.description }}</div>
                <p class="mb-2">
                  Fermentum massa justo sit amet risus morbi leo.
                </p>
                <nav class="nav social mb-0">
                  <a v-for="(social, i) in countersMember || []" :key="i">
                    <i :class="social.icon"></i>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <!--/.row -->
      </div>
      <!-- /.container -->

      <!-- PROJECTS -->
      <div class="overflow-hidden">
        <div class="container pt-12 pt-lg-7 pb-14 pb-md-16">
          <div class="row">
            <div class="col-lg-10 col-xl-9 col-xxl-8 mx-auto text-center">
              <h2 class="fs-16 text-uppercase text-primary mb-3">
                Latest Projects
              </h2>
              <h3 class="display-3 mb-10">
                {{ projectSection.title }}
              </h3>
            </div>
          </div>
          <!-- /.row -->

          <div class="swiper-container grid-view nav-bottom nav-color mb-14">
            <div ref="swiperRef" class="swiper overflow-visible">
              <div class="swiper-wrapper">
                <div
                  v-for="project in projectSection.items"
                  :key="project.id"
                  class="swiper-slide"
                >
                  <figure class="rounded mb-7">
                    <a :href="project.link_url || '#'">
                      <img :src="project.image_url || ''" alt="" />
                    </a>
                  </figure>
                  <div
                    class="project-details d-flex justify-content-center flex-column"
                  >
                    <div class="post-header">
                      <h2 class="post-title h3">
                        <a :href="project.link_url || '#'" class="link-dark">{{
                          project.title
                        }}</a>
                      </h2>
                      <div class="post-category text-ash">
                        {{ project.description }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Navigation buttons -->
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
            </div>
          </div>
          <!-- /.swiper-container -->
        </div>

        <div class="divider text-soft-primary mx-n2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="currentColor"
              d="M1260,1.65c-60-5.07-119.82,2.47-179.83,10.13s-120,11.48-180,9.57-120-7.66-180-6.42c-60,1.63-120,11.21-180,16a1129.52,1129.52,0,0,1-180,0c-60-4.78-120-14.36-180-19.14S60,7,30,7H0v93H1440V30.89C1380.07,23.2,1319.93,6.15,1260,1.65Z"
            />
          </svg>
        </div>
      </div>
      <!-- /.overflow-hidden -->
    </section>
  </div>
</template>

<script setup lang="ts">
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

const props = defineProps<{
  teamSection: Section;
  projectSection: Section;
}>();

// Nếu muốn giữ counters demo, bạn có thể hardcode hoặc truyền props khác
const counters = [
  { icon: "uil uil-users-alt", value: "250K+", label: "Happy Clients" },
  { icon: "uil uil-briefcase-alt", value: "1.2K", label: "Projects Done" },
  { icon: "uil uil-award", value: "50+", label: "Awards" },
];

const countersMember = [
  { icon: "uil uil-twitter", value: "250K+", label: "Happy Clients" },
  { icon: "uil uil-facebook-f", value: "1.2K", label: "Projects Done" },
  { icon: "uil uil-dribbble", value: "50+", label: "Awards" },
];

const swiperRef = ref(null);
let swiperInstance: any = null;

onMounted(async () => {
  if (process.client) {
    await nextTick();
    const { Swiper } = await import("swiper");
    const { Navigation } = await import("swiper/modules");

    if (swiperRef.value) {
      swiperInstance = new Swiper(swiperRef.value, {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
        },
        loop: false,
        grabCursor: true,
        watchOverflow: true,
      });
    }
  }
});

onUnmounted(() => {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }
});
</script>
<style scoped>
.swiper-container {
  --swiper-navigation-color: #333;
  --swiper-navigation-size: 24px;
}

.swiper-button-next,
.swiper-button-prev {
  background: rgba(255, 255, 255, 0.8);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 16px;
  font-weight: bold;
}
</style>
