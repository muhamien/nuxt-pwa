export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-pwa',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/pwa',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // ['nuxt-twa-module', {
    //   defaultUrl: 'https://nuxt-pwa.muhamien.my.id',
    //   hostName: 'muhamien.my.id',
    //   applicationId: 'my.id.muhamien.nuxt-pwa',
    //   launcherName: 'NuxtJS PWA',
    //   versionCode: 1,
    //   versionName: '1.0',
    //   statusBarColor: '#893CEA',
    //   sha256Fingerprints: ['/* your SHA-256 keys */'],
    //   iconPath: '/static/icon.png',
    //   distFolder: '.nuxt/dist/client',
    // }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  pwa: {
    icon: {
      source: '/static/icon.png',
      filename: 'icon.png',
      size: [64, 120, 144, 152, 192, 384, 512],
      plugin:true,
      purpose:['any']
    },
    meta: {
      title:'Nuxt PWA Test',
      author:'Muhammad Amien',
      theme_color: '#893CEA',
    },
    manifest: {
      name: 'nuxt-pwa',
      lang: 'en',
      orientation: 'portrait',
      short_name:'nuxt-pwa',
      description: 'The Amaizing PWA with NuxtJS',
      start_url: '/?standalone=true',
      display:'standalone',
      background_color: '#FFFFFF',
    }
  }
}
