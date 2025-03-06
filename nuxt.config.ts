// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@tresjs/nuxt'],

  nitro: {
    compressPublicAssets: true,
  },
  tres: {
    devtools: true,
    glsl: true,
  },
  app: {
    baseURL: process.env.GITHUB_ACTIONS ? '/my-nuxt-project/' : '/', // 判断是否在 GitHub Actions 环境中
  },
})
