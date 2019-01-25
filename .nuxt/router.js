import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _66fe9d77 = () => interopDefault(import('..\\pages\\cheyuan\\index.vue' /* webpackChunkName: "pages_cheyuan_index" */))
const _18c751fd = () => interopDefault(import('..\\pages\\gongsi\\index.vue' /* webpackChunkName: "pages_gongsi_index" */))
const _262af8d5 = () => interopDefault(import('..\\pages\\huoyuan\\index.vue' /* webpackChunkName: "pages_huoyuan_index" */))
const _c7be7cf4 = () => interopDefault(import('..\\pages\\Insurance\\index.vue' /* webpackChunkName: "pages_Insurance_index" */))
const _6253cdab = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _b818138c = () => interopDefault(import('..\\pages\\member\\index.vue' /* webpackChunkName: "pages_member_index" */))
const _0a179e76 = () => interopDefault(import('..\\pages\\page2.vue' /* webpackChunkName: "pages_page2" */))
const _21bfd0d0 = () => interopDefault(import('..\\pages\\regisiter.vue' /* webpackChunkName: "pages_regisiter" */))
const _ec22f6a8 = () => interopDefault(import('..\\pages\\resetpassword.vue' /* webpackChunkName: "pages_resetpassword" */))
const _4dd4fe8d = () => interopDefault(import('..\\pages\\shixiao\\index.vue' /* webpackChunkName: "pages_shixiao_index" */))
const _196be37f = () => interopDefault(import('..\\pages\\wangdian\\index.vue' /* webpackChunkName: "pages_wangdian_index" */))
const _0c905c46 = () => interopDefault(import('..\\pages\\wuliu\\index.vue' /* webpackChunkName: "pages_wuliu_index" */))
const _31645a24 = () => interopDefault(import('..\\pages\\zhuanxian\\index.vue' /* webpackChunkName: "pages_zhuanxian_index" */))
const _112820fc = () => interopDefault(import('..\\pages\\cheyuan\\detail.vue' /* webpackChunkName: "pages_cheyuan_detail" */))
const _506aaf26 = () => interopDefault(import('..\\pages\\gongsi\\onlineOrder.vue' /* webpackChunkName: "pages_gongsi_onlineOrder" */))
const _3787315e = () => interopDefault(import('..\\pages\\huoyuan\\detail.vue' /* webpackChunkName: "pages_huoyuan_detail" */))
const _36aef548 = () => interopDefault(import('..\\pages\\Insurance\\pay.vue' /* webpackChunkName: "pages_Insurance_pay" */))
const _a6228fba = () => interopDefault(import('..\\pages\\Insurance\\product.vue' /* webpackChunkName: "pages_Insurance_product" */))
const _19d72a19 = () => interopDefault(import('..\\pages\\Insurance\\step1.vue' /* webpackChunkName: "pages_Insurance_step1" */))
const _19e5419a = () => interopDefault(import('..\\pages\\Insurance\\step2.vue' /* webpackChunkName: "pages_Insurance_step2" */))
const _19f3591b = () => interopDefault(import('..\\pages\\Insurance\\step3.vue' /* webpackChunkName: "pages_Insurance_step3" */))
const _8b82fd92 = () => interopDefault(import('..\\pages\\Insurance\\success.vue' /* webpackChunkName: "pages_Insurance_success" */))
const _30fb2002 = () => interopDefault(import('..\\pages\\product\\detail.vue' /* webpackChunkName: "pages_product_detail" */))
const _051de2a6 = () => interopDefault(import('..\\pages\\shixiao\\detail.vue' /* webpackChunkName: "pages_shixiao_detail" */))
const _1dce3c0d = () => interopDefault(import('..\\pages\\wuliu\\detail.vue' /* webpackChunkName: "pages_wuliu_detail" */))
const _02761cb3 = () => interopDefault(import('..\\pages\\zhuanxian\\index1.vue' /* webpackChunkName: "pages_zhuanxian_index1" */))
const _aacfa246 = () => interopDefault(import('..\\pages\\act\\2019\\springDay\\index.vue' /* webpackChunkName: "pages_act_2019_springDay_index" */))
const _40e45b1d = () => interopDefault(import('..\\pages\\member\\_id-chajian.vue' /* webpackChunkName: "pages_member__id-chajian" */))
const _6519b15a = () => interopDefault(import('..\\pages\\member\\_id-contactus.vue' /* webpackChunkName: "pages_member__id-contactus" */))
const _7d571b0e = () => interopDefault(import('..\\pages\\member\\_id-cpfw.vue' /* webpackChunkName: "pages_member__id-cpfw" */))
const _69518609 = () => interopDefault(import('..\\pages\\member\\_id-cpfw2.vue' /* webpackChunkName: "pages_member__id-cpfw2" */))
const _51711157 = () => interopDefault(import('..\\pages\\member\\_id-huo.vue' /* webpackChunkName: "pages_member__id-huo" */))
const _29018faf = () => interopDefault(import('..\\pages\\member\\_id-jianjie.vue' /* webpackChunkName: "pages_member__id-jianjie" */))
const _029c856f = () => interopDefault(import('..\\pages\\member\\_id-line.vue' /* webpackChunkName: "pages_member__id-line" */))
const _b1697b3a = () => interopDefault(import('..\\pages\\member\\_id-order.vue' /* webpackChunkName: "pages_member__id-order" */))
const _c992b120 = () => interopDefault(import('..\\pages\\member\\_id-wangdian.vue' /* webpackChunkName: "pages_member__id-wangdian" */))
const _0a9f28c1 = () => interopDefault(import('..\\pages\\member\\_id-webnotice.vue' /* webpackChunkName: "pages_member__id-webnotice" */))
const _bac381bc = () => interopDefault(import('..\\pages\\member\\_id.vue' /* webpackChunkName: "pages_member__id" */))
const _1bcb3f4e = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages_product__id" */))
const _cea7aad8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
      component: _66fe9d77,
      name: "cheyuan"
    }, {
      path: "/gongsi",
      component: _18c751fd,
      name: "gongsi"
    }, {
      path: "/huoyuan",
      component: _262af8d5,
      name: "huoyuan"
    }, {
      path: "/Insurance",
      component: _c7be7cf4,
      name: "Insurance"
    }, {
      path: "/login",
      component: _6253cdab,
      name: "login"
    }, {
      path: "/member",
      component: _b818138c,
      name: "member"
    }, {
      path: "/page2",
      component: _0a179e76,
      name: "page2"
    }, {
      path: "/regisiter",
      component: _21bfd0d0,
      name: "regisiter"
    }, {
      path: "/resetpassword",
      component: _ec22f6a8,
      name: "resetpassword"
    }, {
      path: "/shixiao",
      component: _4dd4fe8d,
      name: "shixiao"
    }, {
      path: "/wangdian",
      component: _196be37f,
      name: "wangdian"
    }, {
      path: "/wuliu",
      component: _0c905c46,
      name: "wuliu"
    }, {
      path: "/zhuanxian",
      component: _31645a24,
      name: "zhuanxian"
    }, {
      path: "/cheyuan/detail",
      component: _112820fc,
      name: "cheyuan-detail"
    }, {
      path: "/gongsi/onlineOrder",
      component: _506aaf26,
      name: "gongsi-onlineOrder"
    }, {
      path: "/huoyuan/detail",
      component: _3787315e,
      name: "huoyuan-detail"
    }, {
      path: "/Insurance/pay",
      component: _36aef548,
      name: "Insurance-pay"
    }, {
      path: "/Insurance/product",
      component: _a6228fba,
      name: "Insurance-product"
    }, {
      path: "/Insurance/step1",
      component: _19d72a19,
      name: "Insurance-step1"
    }, {
      path: "/Insurance/step2",
      component: _19e5419a,
      name: "Insurance-step2"
    }, {
      path: "/Insurance/step3",
      component: _19f3591b,
      name: "Insurance-step3"
    }, {
      path: "/Insurance/success",
      component: _8b82fd92,
      name: "Insurance-success"
    }, {
      path: "/product/detail",
      component: _30fb2002,
      name: "product-detail"
    }, {
      path: "/shixiao/detail",
      component: _051de2a6,
      name: "shixiao-detail"
    }, {
      path: "/wuliu/detail",
      component: _1dce3c0d,
      name: "wuliu-detail"
    }, {
      path: "/zhuanxian/index1",
      component: _02761cb3,
      name: "zhuanxian-index1"
    }, {
      path: "/act/2019/springDay",
      component: _aacfa246,
      name: "act-2019-springDay"
    }, {
      path: "/member/:id-chajian",
      component: _40e45b1d,
      name: "member-id-chajian"
    }, {
      path: "/member/:id-contactus",
      component: _6519b15a,
      name: "member-id-contactus"
    }, {
      path: "/member/:id-cpfw",
      component: _7d571b0e,
      name: "member-id-cpfw"
    }, {
      path: "/member/:id-cpfw2",
      component: _69518609,
      name: "member-id-cpfw2"
    }, {
      path: "/member/:id-huo",
      component: _51711157,
      name: "member-id-huo"
    }, {
      path: "/member/:id-jianjie",
      component: _29018faf,
      name: "member-id-jianjie"
    }, {
      path: "/member/:id-line",
      component: _029c856f,
      name: "member-id-line"
    }, {
      path: "/member/:id-order",
      component: _b1697b3a,
      name: "member-id-order"
    }, {
      path: "/member/:id-wangdian",
      component: _c992b120,
      name: "member-id-wangdian"
    }, {
      path: "/member/:id-webnotice",
      component: _0a9f28c1,
      name: "member-id-webnotice"
    }, {
      path: "/member/:id",
      component: _bac381bc,
      name: "member-id"
    }, {
      path: "/product/:id?",
      component: _1bcb3f4e,
      name: "product-id"
    }, {
      path: "/",
      component: _cea7aad8,
      name: "index"
    }],

    fallback: false
  })
}
