// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "animate.css",
    "bootstrap/dist/css/bootstrap.min.css",
    // "bootstrap-icons/font/bootstrap-icons.css",
    "~/public/css/style.css",
    // "~/public/css/plugins.css",
    "~/public/css/sky.css",
    "~/public/css/urbanist.css",
    "@iconscout/unicons/css/line.css",
    "swiper/swiper-bundle.css",
  ],
  plugins: [{ src: "~/plugins/bootstrap.client.ts", mode: "client" }],
  modules: ["@nuxtjs/i18n", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  pinia: {
    // @ts-ignore
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&display=swap",
        },
      ],
      script: [
        // {
        //   src: "/js/theme.js",
        //   tagPosition: "bodyClose",
        // },
        // {
        //   src: "/js/plugins.js",
        //   tagPosition: "bodyClose",
        // },
      ],
    },
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.NUXT_PUBLIC_SUPABASE_URL,
      supabaseKey: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
    },
  },
});
