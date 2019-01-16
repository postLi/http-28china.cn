const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'renderer', content: 'webkit' },
      { name: 'X-UA-Compatible', content: 'IE=Edge,chrome=1' },
      { name: 'force-rendering', content: 'webkit' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    htmlAttrs: {
      lang: 'zh-CN'
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      { src: '/vendor/jquery-1.12.4.min.js' },
      { src: '/js/city-picker.data.js' },
      { src: '/js/city-picker.js' }
      // { src: '/js/diqu.js' },
      // { src: '/js/jquery.pagination.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  // loading: '~components/loading.vue',

  /*
  ** 公共 css
  */
  css: ['~/css/index.css', '~/css/list_huo.css'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/axios',
      ssr: false
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true,
    prefix: '/api', // baseURL
    credentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },

  proxy: {
    '/api/': {
      target: 'http://192.168.1.157:7010', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    }
  },

  vendor: ['axios'],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  // 缓存最近生成的页面，减少服务器端性能损耗
  // https://zh.nuxtjs.org/api/configuration-cache
  cache: {
    max: 1000,
    maxAge: 5 * 60 * 1000 // 毫秒单位
  }
  // https://ssr.vuejs.org/zh/api/#clientmanifest
  /* render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  } */
}
