const pkg = require('./package')
var TransformModulesPlugin = require('webpack-transform-modules-plugin')
module.exports = {
  mode: 'universal',
  modern: true, // 编译为现代 ES Module，并自动分辨浏览器输出
  /*
   ** Headers of the page
   */
  head: {
    title: '28快运网-物流配送-物流货运-物流公司-一站式物流服务平台',
    titleTemplate: '%s | 28快运网',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'renderer',
        content: 'webkit'
      },
      {
        name: 'X-UA-Compatible',
        content: 'IE=Edge,chrome=1'
      },
      {
        name: 'force-rendering',
        content: 'webkit'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '28快运是专业提供零担运输和整车运输等物流服务平台，同时提供免费发布货源、车源、专线。货主在线发货，物流跟踪查询，服务有保障，让您发货省时，省钱，更省心！'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '物流,物流平台,物流专线,物流公司,物流服务,在线发货,查询运价,运单查询,运单跟踪,物流帮'
      }
    ],
    htmlAttrs: {
      lang: 'zh-CN'
    },
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      // {
      //   rel: 'stylesheet',
      //   type: 'text/css',
      //   href: '/css/font/iconfont.css'
      // },
      //暂时用的图标
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '//at.alicdn.com/t/font_1076232_pygsk656jof.css'
      }
    ],
    script: [
      {
        src: '/vendor/jquery-1.12.4.min.js'
      },
      {
        src: '/vendor/polyfill.min.js'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  // loading: '~components/loading.vue',

  /*
   ** 公共 css
   */
  // css: ['~/css/index.css', '~/css/list_huo.css'],
  css: [
    /*     {
      src: '~assets/scss/*.scss',
      lang: 'scss'
    } */
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '~/plugins/vue-extend'
    },
    {
      src: '~/plugins/lozad',
      mode: 'client'
    },
    {
      src: '~/plugins/axios'
      // ssr: false
    },
    { src: '~/plugins/swiper', ssr: false }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    // 'bootstrap-vue/nuxt'
    // Simple usage
    'cookie-universal-nuxt'
    // With options
    // ['cookie-universal-nuxt']
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    proxy: true,
    // debug: true,
    prefix: '/api', // baseURL
    credentials: true
    // See https://github.com/nuxt-community/axios-module#options
  },

  proxy: {
    '/api/': {
      // target: 'http://192.168.1.233:7010', // 代理地址
      target: 'http://192.168.1.157:7010', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    },
    '/79api/': {
      target: 'http://192.168.1.79:7010', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/79api': ''
      }
    },
    '/sendm/': {
      target: 'http://vote.28china.cn/', // 代理地址
      changeOrigin: true,
      pathRewrite: {
        '^/sendm': ''
      }
    },
    '/anfacms/': {
      target: 'http://47.112.196.131:8083', // 代理地址
      changeOrigin: true
      /* pathRewrite: {
        '^/api': ''
      } */
    }
  },

  vendor: ['axios'],

  router: {
    middleware: 'ipinfo'
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    plugins: [new TransformModulesPlugin()],
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
  },
  server: {
    timing: {
      total: true
    }
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
