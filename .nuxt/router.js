import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _87248b4e = () => interopDefault(import('..\\pages\\cheyuan\\index.vue' /* webpackChunkName: "pages_cheyuan_index" */))
const _8f1fde4a = () => interopDefault(import('..\\pages\\gongsi\\index.vue' /* webpackChunkName: "pages_gongsi_index" */))
const _7b9a15b7 = () => interopDefault(import('..\\pages\\huoyuan\\index.vue' /* webpackChunkName: "pages_huoyuan_index" */))
const _523c2de8 = () => interopDefault(import('..\\pages\\Insurance\\index.vue' /* webpackChunkName: "pages_Insurance_index" */))
const _d63f6aee = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _439cb518 = () => interopDefault(import('..\\pages\\member\\index.vue' /* webpackChunkName: "pages_member_index" */))
const _2d80ada3 = () => interopDefault(import('..\\pages\\page2.vue' /* webpackChunkName: "pages_page2" */))
const _49721514 = () => interopDefault(import('..\\pages\\regisiter.vue' /* webpackChunkName: "pages_regisiter" */))
const _2997438a = () => interopDefault(import('..\\pages\\resetpassword.vue' /* webpackChunkName: "pages_resetpassword" */))
const _b977c922 = () => interopDefault(import('..\\pages\\shixiao\\index.vue' /* webpackChunkName: "pages_shixiao_index" */))
const _71e062dd = () => interopDefault(import('..\\pages\\wangdian\\index.vue' /* webpackChunkName: "pages_wangdian_index" */))
const _4b8549a8 = () => interopDefault(import('..\\pages\\wuliu\\index.vue' /* webpackChunkName: "pages_wuliu_index" */))
const _c52d8160 = () => interopDefault(import('..\\pages\\zhuanxian\\index.vue' /* webpackChunkName: "pages_zhuanxian_index" */))
const _699ca05a = () => interopDefault(import('..\\pages\\cheyuan\\detail.vue' /* webpackChunkName: "pages_cheyuan_detail" */))
const _51b44f84 = () => interopDefault(import('..\\pages\\gongsi\\onlineOrder.vue' /* webpackChunkName: "pages_gongsi_onlineOrder" */))
const _e0089e88 = () => interopDefault(import('..\\pages\\huoyuan\\detail.vue' /* webpackChunkName: "pages_huoyuan_detail" */))
const _3a17a23e = () => interopDefault(import('..\\pages\\Insurance\\pay.vue' /* webpackChunkName: "pages_Insurance_pay" */))
const _49e09405 = () => interopDefault(import('..\\pages\\Insurance\\product.vue' /* webpackChunkName: "pages_Insurance_product" */))
const _601ad30a = () => interopDefault(import('..\\pages\\Insurance\\step1.vue' /* webpackChunkName: "pages_Insurance_step1" */))
const _5ffea408 = () => interopDefault(import('..\\pages\\Insurance\\step2.vue' /* webpackChunkName: "pages_Insurance_step2" */))
const _5fe27506 = () => interopDefault(import('..\\pages\\Insurance\\step3.vue' /* webpackChunkName: "pages_Insurance_step3" */))
const _57305d19 = () => interopDefault(import('..\\pages\\Insurance\\success.vue' /* webpackChunkName: "pages_Insurance_success" */))
const _ed20c140 = () => interopDefault(import('..\\pages\\product\\detail.vue' /* webpackChunkName: "pages_product_detail" */))
const _5d926204 = () => interopDefault(import('..\\pages\\shixiao\\detail.vue' /* webpackChunkName: "pages_shixiao_detail" */))
const _85120a2a = () => interopDefault(import('..\\pages\\wuliu\\detail.vue' /* webpackChunkName: "pages_wuliu_detail" */))
const _0fc83c91 = () => interopDefault(import('..\\pages\\zhuanxian\\index1.vue' /* webpackChunkName: "pages_zhuanxian_index1" */))
const _ed3add8a = () => interopDefault(import('..\\pages\\act\\2019\\springDay\\index.vue' /* webpackChunkName: "pages_act_2019_springDay_index" */))
const _422dfb7b = () => interopDefault(import('..\\pages\\member\\_id-chajian.vue' /* webpackChunkName: "pages_member__id-chajian" */))
const _ba53af9e = () => interopDefault(import('..\\pages\\member\\_id-contactus.vue' /* webpackChunkName: "pages_member__id-contactus" */))
const _776fdedb = () => interopDefault(import('..\\pages\\member\\_id-cpfw.vue' /* webpackChunkName: "pages_member__id-cpfw" */))
const _76a3a5e7 = () => interopDefault(import('..\\pages\\member\\_id-cpfw2.vue' /* webpackChunkName: "pages_member__id-cpfw2" */))
const _ac34de96 = () => interopDefault(import('..\\pages\\member\\_id-huo.vue' /* webpackChunkName: "pages_member__id-huo" */))
const _2a4b300d = () => interopDefault(import('..\\pages\\member\\_id-jianjie.vue' /* webpackChunkName: "pages_member__id-jianjie" */))
const _8e901c5e = () => interopDefault(import('..\\pages\\member\\_id-line.vue' /* webpackChunkName: "pages_member__id-line" */))
const _96c53b7e = () => interopDefault(import('..\\pages\\member\\_id-order.vue' /* webpackChunkName: "pages_member__id-order" */))
const _79bdda5c = () => interopDefault(import('..\\pages\\member\\_id-wangdian.vue' /* webpackChunkName: "pages_member__id-wangdian" */))
const _3ffbacc2 = () => interopDefault(import('..\\pages\\member\\_id-webnotice.vue' /* webpackChunkName: "pages_member__id-webnotice" */))
const _20851d80 = () => interopDefault(import('..\\pages\\member\\_id.vue' /* webpackChunkName: "pages_member__id" */))
const _310f4dbb = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages_product__id" */))
const _698eb11c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/cheyuan",
      component: _87248b4e,
      name: "cheyuan"
    }, {
      path: "/gongsi",
      component: _8f1fde4a,
      name: "gongsi"
    }, {
      path: "/huoyuan",
      component: _7b9a15b7,
      name: "huoyuan"
    }, {
      path: "/Insurance",
      component: _523c2de8,
      name: "Insurance"
    }, {
      path: "/login",
      component: _d63f6aee,
      name: "login"
    }, {
      path: "/member",
      component: _439cb518,
      name: "member"
    }, {
      path: "/page2",
      component: _2d80ada3,
      name: "page2"
    }, {
      path: "/regisiter",
      component: _49721514,
      name: "regisiter"
    }, {
      path: "/resetpassword",
      component: _2997438a,
      name: "resetpassword"
    }, {
      path: "/shixiao",
      component: _b977c922,
      name: "shixiao"
    }, {
      path: "/wangdian",
      component: _71e062dd,
      name: "wangdian"
    }, {
      path: "/wuliu",
      component: _4b8549a8,
      name: "wuliu"
    }, {
      path: "/zhuanxian",
      component: _c52d8160,
      name: "zhuanxian"
    }, {
      path: "/cheyuan/detail",
      component: _699ca05a,
      name: "cheyuan-detail"
    }, {
      path: "/gongsi/onlineOrder",
      component: _51b44f84,
      name: "gongsi-onlineOrder"
    }, {
      path: "/huoyuan/detail",
      component: _e0089e88,
      name: "huoyuan-detail"
    }, {
      path: "/Insurance/pay",
      component: _3a17a23e,
      name: "Insurance-pay"
    }, {
      path: "/Insurance/product",
      component: _49e09405,
      name: "Insurance-product"
    }, {
      path: "/Insurance/step1",
      component: _601ad30a,
      name: "Insurance-step1"
    }, {
      path: "/Insurance/step2",
      component: _5ffea408,
      name: "Insurance-step2"
    }, {
      path: "/Insurance/step3",
      component: _5fe27506,
      name: "Insurance-step3"
    }, {
      path: "/Insurance/success",
      component: _57305d19,
      name: "Insurance-success"
    }, {
      path: "/product/detail",
      component: _ed20c140,
      name: "product-detail"
    }, {
      path: "/shixiao/detail",
      component: _5d926204,
      name: "shixiao-detail"
    }, {
      path: "/wuliu/detail",
      component: _85120a2a,
      name: "wuliu-detail"
    }, {
      path: "/zhuanxian/index1",
      component: _0fc83c91,
      name: "zhuanxian-index1"
    }, {
      path: "/act/2019/springDay",
      component: _ed3add8a,
      name: "act-2019-springDay"
    }, {
      path: "/member/:id-chajian",
      component: _422dfb7b,
      name: "member-id-chajian"
    }, {
      path: "/member/:id-contactus",
      component: _ba53af9e,
      name: "member-id-contactus"
    }, {
      path: "/member/:id-cpfw",
      component: _776fdedb,
      name: "member-id-cpfw"
    }, {
      path: "/member/:id-cpfw2",
      component: _76a3a5e7,
      name: "member-id-cpfw2"
    }, {
      path: "/member/:id-huo",
      component: _ac34de96,
      name: "member-id-huo"
    }, {
      path: "/member/:id-jianjie",
      component: _2a4b300d,
      name: "member-id-jianjie"
    }, {
      path: "/member/:id-line",
      component: _8e901c5e,
      name: "member-id-line"
    }, {
      path: "/member/:id-order",
      component: _96c53b7e,
      name: "member-id-order"
    }, {
      path: "/member/:id-wangdian",
      component: _79bdda5c,
      name: "member-id-wangdian"
    }, {
      path: "/member/:id-webnotice",
      component: _3ffbacc2,
      name: "member-id-webnotice"
    }, {
      path: "/member/:id",
      component: _20851d80,
      name: "member-id"
    }, {
      path: "/product/:id?",
      component: _310f4dbb,
      name: "product-id"
    }, {
      path: "/",
      component: _698eb11c,
      name: "index"
    }],

    fallback: false
  })
}
