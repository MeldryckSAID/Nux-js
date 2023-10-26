// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
        },
      ],
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  modules: ["@nuxtjs/prismic", "@pinia/nuxt", "@nuxtjs/storybook"],
  prismic: { endpoint: process.env.NUXT_PRISMIC_ENDPOINT },

  runtimeConfig: {
    public: {
      apiUrl: "",
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
        @import "@/scss/foundation/_variables.scss";
        @import "@/scss/foundation/_mixins.scss";
        `,
        },
      },
    },
  },
});
