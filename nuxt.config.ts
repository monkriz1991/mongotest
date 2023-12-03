// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    bdurl:process.env.DATABASE_URL,
    dbName:process.env.DBNAME,
    user:process.env.DBUSERNAME,
    pass:process.env.DBPASSWORD,
    authSource:process.env.DBAUTHSOURCE,
  },
  devtools: { enabled: true }
})
