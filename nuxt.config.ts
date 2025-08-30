// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    "animate.css",
    // "bootstrap/dist/css/bootstrap.min.css",
    // "bootstrap-icons/font/bootstrap-icons.css",
    "~/public/css/style.css",
    "~/public/css/plugins.css",
    "~/public/css/sky.css",
    "~/public/css/urbanist.css",
  ],
  plugins: [{ src: "~/plugins/bootstrap.client.ts", mode: "client" }],
  modules: ["@nuxtjs/i18n", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  // @ts-ignore
  i18n: {
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US",
        file: "en.json",
      },
      {
        code: "vi",
        name: "Tiếng Việt",
        iso: "vi-VN",
        file: "vi.json",
      },
    ],
    langDir: "locales/",
    defaultLocale: "en",
    strategy: "prefix_except_default",
    // @ts-ignore
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  app: {
    head: {
      link: [
        // {
        //   rel: "stylesheet",
        //   href: "https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;700&family=Roboto:wght@400;700&display=swap",
        // },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "https://unicons.iconscout.com/release/v4.0.8/css/line.css",
        },
        {
          rel: "preload",
          href: "css/urbanist.css",
          as: "style",
          onload: "this.rel='stylesheet'",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
          tagPosition: "bodyClose",
        },
        { src: "/js/theme.js", tagPosition: "bodyClose" },
        {
          src: "/js/email.js",
          tagPosition: "bodyClose",
        },
        {
          src: "/js/plugins.js",
          tagPosition: "bodyClose",
        },
        // {
        //   src: "/js/theme.js",
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
