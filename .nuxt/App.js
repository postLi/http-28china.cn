import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import _6f6c098b from '..\\layouts\\default.vue'
import _77a66d33 from '..\\layouts\\login.vue'
import _7e51c610 from '..\\layouts\\member.vue'
import _7a227e54 from '..\\layouts\\subLayout.vue'

const layouts = { "_default": _6f6c098b,"_login": _77a66d33,"_member": _7e51c610,"_subLayout": _7a227e54 }

export default {
  head: {"title":"28快运网-物流配送-物流货运-物流公司-一站式物流服务平台","titleTemplate":"%s | 28快运网","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"name":"renderer","content":"webkit"},{"name":"X-UA-Compatible","content":"IE=Edge,chrome=1"},{"name":"force-rendering","content":"webkit"},{"hid":"description","name":"description","content":"28快运是专业提供零担运输和整车运输等物流服务平台，同时提供免费发布货源、车源、专线。货主在线发货，物流跟踪查询，服务有保障，让您发货省时，省钱，更省心！"},{"hid":"keywords","name":"keywords","content":"物流,物流平台,物流专线,物流公司,物流服务,在线发货,查询运价,运单查询,运单跟踪,物流帮"}],"htmlAttrs":{"lang":"zh-CN"},"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"script":[{"src":"\u002Fvendor\u002Fjquery-1.12.4.min.js"}],"style":[]},

  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  methods: {
    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
