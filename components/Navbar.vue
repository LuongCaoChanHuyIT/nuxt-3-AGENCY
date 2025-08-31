<template lang="">
  <header class="wrapper bg-light">
    <nav class="navbar navbar-expand-lg classic transparent navbar-light">
      <div class="container flex-lg-row flex-nowrap align-items-center">
        <div class="navbar-brand w-100">
          <a href="./index.html">
            <img
              src="/images/logo-dark.png"
              srcset="/images/logo-dark@2x.png 2x"
              alt=""
            />
          </a>
        </div>
        <div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div class="offcanvas-header d-lg-none">
            <h3 class="text-white fs-30 mb-0">Sandbox</h3>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
            <ul class="navbar-nav">
              <li class="nav-item dropdown dropdown-mega">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Demos</a
                >
                <ul
                  class="dropdown-menu mega-menu mega-menu-dark mega-menu-img"
                >
                  <li class="mega-menu-content mega-menu-scroll">
                    <ul
                      class="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-4 gy-lg-2 list-unstyled"
                    >
                      <li v-for="demo in demos" :key="demo.id" class="col">
                        <a class="dropdown-item" :href="demo.href">
                          <figure class="rounded lift d-none d-lg-block">
                            <img :src="'' + demo.image_url" />
                          </figure>
                          <span class="d-lg-none">{{ demo.img }}</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <!--/.dropdown-menu -->
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Pages</a
                >
                <ul class="dropdown-menu">
                  <li
                    v-for="(menu, i) in pages"
                    :key="i"
                    class="dropdown"
                    :class="{ 'dropdown-submenu dropend': menu.position }"
                  >
                    <template v-if="menu.position">
                      <a
                        class="dropdown-item dropdown-toggle"
                        href="#"
                        data-bs-toggle="dropdown"
                      >
                        {{ menu.description }}
                      </a>
                      <ul class="dropdown-menu">
                        <li v-for="(child, j) in 1" :key="j" class="nav-item">
                          <a class="dropdown-item" :href="child.link">
                            {{ menu.position }}
                          </a>
                        </li>
                      </ul>
                    </template>

                    <template v-else>
                      <a class="dropdown-item" :href="menu.link">
                        {{ menu.position }}
                      </a>
                    </template>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Projects</a
                >
                <div class="dropdown-menu dropdown-lg">
                  <div class="dropdown-lg-content">
                    <div>
                      <h6 class="dropdown-header">Project Pages</h6>
                      <ul class="list-unstyled">
                        <li
                          v-for="(project, i) in projects.filter(
                            (p) => p.description === 'Project Pages'
                          )"
                          :key="i"
                        >
                          <a class="dropdown-item" :href="project.href">
                            {{ project.position }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <!-- /.column -->
                    <div>
                      <h6 class="dropdown-header">Single Projects</h6>
                      <ul class="list-unstyled">
                        <li
                          v-for="(project, i) in projects.filter(
                            (p) => p.description === 'Single Projects'
                          )"
                          :key="i"
                        >
                          <a class="dropdown-item" :href="project.href">
                            {{ project.position }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <!-- /.column -->
                  </div>
                  <!-- /auto-column -->
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Blog</a
                >
                <ul class="dropdown-menu">
                  <li
                    class="nav-item"
                    v-for="(blog, i) in blogs.filter(
                      (p) => p.description !== 'Blog Posts'
                    )"
                    :key="i"
                  >
                    <a class="dropdown-item" :href="blog.href">
                      {{ blog.description }}
                    </a>
                  </li>
                  <li
                    class="dropdown dropdown-submenu dropend"
                    v-for="(blog, i) in blogs.filter(
                      (p) => p.description === 'Blog Posts'
                    )"
                    :key="i"
                  >
                    <a
                      class="dropdown-item dropdown-toggle"
                      href="#"
                      data-bs-toggle="dropdown"
                      >{{ blog.description }}</a
                    >
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a class="dropdown-item" href="./blog-post2.html">{{
                          blog.position
                        }}</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown dropdown-mega">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Blocks</a
                >
                <ul
                  class="dropdown-menu mega-menu mega-menu-dark mega-menu-img"
                >
                  <li class="mega-menu-content">
                    <ul
                      class="row row-cols-1 row-cols-lg-6 gx-0 gx-lg-6 gy-lg-4 list-unstyled"
                    >
                      <li class="col" v-for="(block, i) in blocks" :key="i">
                        <a class="dropdown-item" :href="block.href">
                          <div
                            class="rounded img-svg d-none d-lg-block p-4 mb-lg-2"
                          >
                            <img
                              class="rounded-0"
                              :src="'' + block.image_url"
                              :alt="block.description"
                            />
                          </div>
                          <span>{{ block.description }}</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown dropdown-mega">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown"
                  >Documentation</a
                >
                <ul class="dropdown-menu mega-menu">
                  <li class="mega-menu-content">
                    <div class="row gx-0 gx-lg-3">
                      <div
                        v-for="(group, idx) in docGroup"
                        :key="idx"
                        :class="['col-lg-' + (idx === 0 ? 4 : 8)]"
                      >
                        <h6 class="dropdown-header">{{ group.description }}</h6>
                        <ul
                          class="list-unstyled"
                          :class="idx === 0 ? 'cc-2 pb-lg-1' : 'cc-3'"
                        >
                          <li v-for="child in group.children" :key="child.id">
                            <a
                              class="dropdown-item"
                              :href="child.link_url || '#'"
                            >
                              {{ child.position }}
                            </a>
                          </li>
                        </ul>
                      </div>
                      <!--/column -->
                    </div>
                    <!--/.row -->
                  </li>
                  <!--/.mega-menu-content-->
                </ul>

                <!--/.dropdown-menu -->
              </li>
            </ul>
            <!-- /.navbar-nav -->
            <div class="offcanvas-footer d-lg-none">
              <div>
                <a
                  href="/cdn-cgi/l/email-protection#6b0d0219181f45070a181f2b0e060a020745080406"
                  class="link-inverse"
                  ><span
                    class="__cf_email__"
                    data-cfemail="c5acaba3aa85a0a8a4aca9eba6aaa8"
                    >[email&#160;protected]</span
                  ></a
                >
                <br />
                00 (123) 456 78 90 <br />
                <nav class="nav social social-white mt-4">
                  <a href="#"><i class="uil uil-twitter"></i></a>
                  <a href="#"><i class="uil uil-facebook-f"></i></a>
                  <a href="#"><i class="uil uil-dribbble"></i></a>
                  <a href="#"><i class="uil uil-instagram"></i></a>
                  <a href="#"><i class="uil uil-youtube"></i></a>
                </nav>
                <!-- /.social -->
              </div>
            </div>
            <!-- /.offcanvas-footer -->
          </div>
          <!-- /.offcanvas-body -->
        </div>
        <!-- /.navbar-collapse -->
        <div class="navbar-other ms-lg-4">
          <ul class="navbar-nav flex-row align-items-center ms-auto">
            <li class="nav-item d-none d-md-block">
              <a
                href="./contact.html"
                class="btn btn-sm btn-primary rounded-pill"
                >Contact</a
              >
            </li>
            <li class="nav-item d-lg-none">
              <button class="hamburger offcanvas-nav-btn">
                <span></span>
              </button>
            </li>
          </ul>
          <!-- /.navbar-nav -->
        </div>
        <!-- /.navbar-other -->
      </div>
      <!-- /.container -->
    </nav>
    <!-- /.navbar -->
    <!-- {{ docGroup }} -->
  </header>
</template>
<script setup>
import { onMounted, computed } from "vue";
import { useHomepageStore } from "~/stores/useItemStore";

const itemStore = useHomepageStore();
const data = useState("homepage_items", () => []);

onMounted(async () => {
  const res = await itemStore.fetchItemsSection("homepage_items", 1);
  data.value = res;
});

const demos = computed(() =>
  data.value.filter((item) => item.title === "Demos")
);
const pages = computed(() =>
  data.value.filter((item) => item.title === "Pages")
);
const projects = computed(() =>
  data.value.filter((item) => item.title === "Projects")
);
const blogs = computed(() =>
  data.value.filter((item) => item.title === "Blog")
);
const blocks = computed(() =>
  data.value.filter((item) => item.title === "Blocks")
);
const documentation = computed(() =>
  data.value.filter((item) => item.title === "Documentation")
);

const docGroup = computed(() => groupByKey(documentation.value, "description"));

// Hàm group chung
const groupByKey = (arr, key) => {
  if (!arr || !arr.length) return [];
  return Object.values(
    arr.reduce((acc, item) => {
      const groupKey = item[key] ?? "Unknown";
      if (!acc[groupKey]) {
        acc[groupKey] = {
          [key]: groupKey,
          children: [],
        };
      }
      acc[groupKey].children.push(item);
      return acc;
    }, {})
  );
};
</script>

<style lang=""></style>
