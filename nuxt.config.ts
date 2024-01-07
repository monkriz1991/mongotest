// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  // app: {
  //   pageTransition: { name: "page", mode: "out-in" },
  // },
  runtimeConfig: {
    bdurl: process.env.DATABASE_URL,
    dbName: process.env.DBNAME,
    user: process.env.DBUSERNAME,
    pass: process.env.DBPASSWORD,
    authSource: process.env.DBAUTHSOURCE,
    authSecret: process.env.AUTH_SECRET,
  },
  css: ["@/assets/main.css", "@/node_modules/bulma/css/bulma.css"],
  modules: [
    // "@nuxtjs/tailwindcss",
    "nuxt-simple-sitemap",
    "nuxt-server-utils",
    "@sidebase/nuxt-auth",
    "nuxt-swiper",
    "@element-plus/nuxt",
    "nuxt-icons",
    "nuxt-icon",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Montserrat: [100, 300, 400, 500, 600, 700, 800],
          download: true,
          inject: true,
        },
      },
    ],
    // [
    //   "nuxt-mail",
    //   {
    //     message: {
    //       name: "admin",
    //       to: "monkriz1991@gmail.com",
    //     },
    //     smtp: {
    //       host: "smtp.gmail.com",
    //       port: 465,
    //       auth: {
    //         user: "monkriz1991",
    //         pass: "aeuc ivhx waaw wxxw",
    //       },
    //     },
    //   },
    // ],
  ],
  nuxtServerUtils: {
    mongodbUri: process.env.DATABASE_URL,
  },
  auth: {
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: "authjs",
    },
  },
  devtools: { enabled: true },
});
