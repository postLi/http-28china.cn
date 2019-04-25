import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _65f8621e = () => interopDefault(import('..\\pages\\cheyuan\\index.vue' /* webpackChunkName: "pages_cheyuan_index" */))
const _e1b24d74 = () => interopDefault(import('..\\pages\\exit.vue' /* webpackChunkName: "pages_exit" */))
const _8e0ded7a = () => interopDefault(import('..\\pages\\gongsi\\index.vue' /* webpackChunkName: "pages_gongsi_index" */))
const _79e66679 = () => interopDefault(import('..\\pages\\help\\index.vue' /* webpackChunkName: "pages_help_index" */))
const _e79fab62 = () => interopDefault(import('..\\pages\\huoyuan\\index.vue' /* webpackChunkName: "pages_huoyuan_index" */))
const _d4c10700 = () => interopDefault(import('..\\pages\\Insurance\\index.vue' /* webpackChunkName: "pages_Insurance_index" */))
const _437c2af1 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _6fa25aa2 = () => interopDefault(import('..\\pages\\loginsuccess.vue' /* webpackChunkName: "pages_loginsuccess" */))
const _548a5626 = () => interopDefault(import('..\\pages\\m\\index.vue' /* webpackChunkName: "pages_m_index" */))
const _4425ad80 = () => interopDefault(import('..\\pages\\member\\index.vue' /* webpackChunkName: "pages_member_index" */))
const _1eac61de = () => interopDefault(import('..\\pages\\regisiter.vue' /* webpackChunkName: "pages_regisiter" */))
const _2a203bf2 = () => interopDefault(import('..\\pages\\resetpassword.vue' /* webpackChunkName: "pages_resetpassword" */))
const _984b9ff2 = () => interopDefault(import('..\\pages\\shixiao\\index.vue' /* webpackChunkName: "pages_shixiao_index" */))
const _740ce145 = () => interopDefault(import('..\\pages\\wangdian\\index.vue' /* webpackChunkName: "pages_wangdian_index" */))
const _4347a440 = () => interopDefault(import('..\\pages\\wuliu\\index.vue' /* webpackChunkName: "pages_wuliu_index" */))
const _6a8c9b9a = () => interopDefault(import('..\\pages\\ydcx\\index.vue' /* webpackChunkName: "pages_ydcx_index" */))
const _6ae0abe6 = () => interopDefault(import('..\\pages\\yuanqu\\index.vue' /* webpackChunkName: "pages_yuanqu_index" */))
const _40627eb8 = () => interopDefault(import('..\\pages\\zixun\\index.vue' /* webpackChunkName: "pages_zixun_index" */))
const _6daf1500 = () => interopDefault(import('..\\pages\\cheyuan\\add.vue' /* webpackChunkName: "pages_cheyuan_add" */))
const _6bc91ec2 = () => interopDefault(import('..\\pages\\cheyuan\\detail.vue' /* webpackChunkName: "pages_cheyuan_detail" */))
const _a13a61ee = () => interopDefault(import('..\\pages\\cheyuan\\huizong.vue' /* webpackChunkName: "pages_cheyuan_huizong" */))
const _5b730175 = () => interopDefault(import('..\\pages\\create\\cheyuan.vue' /* webpackChunkName: "pages_create_cheyuan" */))
const _fece8f8e = () => interopDefault(import('..\\pages\\create\\cySuccess.vue' /* webpackChunkName: "pages_create_cySuccess" */))
const _765193d7 = () => interopDefault(import('..\\pages\\create\\huoyuan.vue' /* webpackChunkName: "pages_create_huoyuan" */))
const _2dd9f2d0 = () => interopDefault(import('..\\pages\\create\\line.vue' /* webpackChunkName: "pages_create_line" */))
const _e0b6334c = () => interopDefault(import('..\\pages\\create\\order.vue' /* webpackChunkName: "pages_create_order" */))
const _be4734bc = () => interopDefault(import('..\\pages\\create\\orderbak.vue' /* webpackChunkName: "pages_create_orderbak" */))
const _481a885c = () => interopDefault(import('..\\pages\\gongsi\\add.vue' /* webpackChunkName: "pages_gongsi_add" */))
const _26babe47 = () => interopDefault(import('..\\pages\\gongsi\\orderSearch.vue' /* webpackChunkName: "pages_gongsi_orderSearch" */))
const _18469db7 = () => interopDefault(import('..\\pages\\help\\utils.js' /* webpackChunkName: "pages_help_utils" */))
const _3856afde = () => interopDefault(import('..\\pages\\huoyuan\\add.vue' /* webpackChunkName: "pages_huoyuan_add" */))
const _5aee447a = () => interopDefault(import('..\\pages\\huoyuan\\add1.vue' /* webpackChunkName: "pages_huoyuan_add1" */))
const _dbafa1b8 = () => interopDefault(import('..\\pages\\huoyuan\\detail.vue' /* webpackChunkName: "pages_huoyuan_detail" */))
const _54e5cae7 = () => interopDefault(import('..\\pages\\huoyuan\\huizong.vue' /* webpackChunkName: "pages_huoyuan_huizong" */))
const _b60a2a6a = () => interopDefault(import('..\\pages\\huoyuan\\order.vue' /* webpackChunkName: "pages_huoyuan_order" */))
const _4aadb6d6 = () => interopDefault(import('..\\pages\\Insurance\\pay.vue' /* webpackChunkName: "pages_Insurance_pay" */))
const _41aa9c9d = () => interopDefault(import('..\\pages\\Insurance\\product.vue' /* webpackChunkName: "pages_Insurance_product" */))
const _1355e513 = () => interopDefault(import('..\\pages\\Insurance\\step1.vue' /* webpackChunkName: "pages_Insurance_step1" */))
const _1363fc94 = () => interopDefault(import('..\\pages\\Insurance\\step2.vue' /* webpackChunkName: "pages_Insurance_step2" */))
const _13721415 = () => interopDefault(import('..\\pages\\Insurance\\step3.vue' /* webpackChunkName: "pages_Insurance_step3" */))
const _4efa65b1 = () => interopDefault(import('..\\pages\\Insurance\\success.vue' /* webpackChunkName: "pages_Insurance_success" */))
const _a21b7316 = () => interopDefault(import('..\\pages\\m\\act\\index.vue' /* webpackChunkName: "pages_m_act_index" */))
const _a750f184 = () => interopDefault(import('..\\pages\\m\\cheyuan\\index.vue' /* webpackChunkName: "pages_m_cheyuan_index" */))
const _65569356 = () => interopDefault(import('..\\pages\\m\\gongsi\\index.vue' /* webpackChunkName: "pages_m_gongsi_index" */))
const _6b83e29c = () => interopDefault(import('..\\pages\\m\\huoyuan\\index.vue' /* webpackChunkName: "pages_m_huoyuan_index" */))
const _05ec594e = () => interopDefault(import('..\\pages\\m\\pageView\\index.vue' /* webpackChunkName: "pages_m_pageView_index" */))
const _2248e326 = () => interopDefault(import('..\\pages\\m\\ydcx\\index.vue' /* webpackChunkName: "pages_m_ydcx_index" */))
const _3a1366f5 = () => interopDefault(import('..\\pages\\m\\zhuanxian\\index.vue' /* webpackChunkName: "pages_m_zhuanxian_index" */))
const _5fbee06c = () => interopDefault(import('..\\pages\\shixiao\\detail.vue' /* webpackChunkName: "pages_shixiao_detail" */))
const _0c098bce = () => interopDefault(import('..\\pages\\shixiao\\index - 副本.vue' /* webpackChunkName: "pages_shixiao_index - 副本" */))
const _2b941be2 = () => interopDefault(import('..\\pages\\wuliu\\add.vue' /* webpackChunkName: "pages_wuliu_add" */))
const _8400195a = () => interopDefault(import('..\\pages\\wuliu\\detail.vue' /* webpackChunkName: "pages_wuliu_detail" */))
const _0df260c0 = () => interopDefault(import('..\\pages\\wuliu\\list.vue' /* webpackChunkName: "pages_wuliu_list" */))
const _1fb8a726 = () => interopDefault(import('..\\pages\\yuanqu\\detail.vue' /* webpackChunkName: "pages_yuanqu_detail" */))
const _488db492 = () => interopDefault(import('..\\pages\\zhuanxian\\add.vue' /* webpackChunkName: "pages_zhuanxian_add" */))
const _5dcf82aa = () => interopDefault(import('..\\pages\\zhuanxian\\detail.vue' /* webpackChunkName: "pages_zhuanxian_detail" */))
const _8ebbb3ca = () => interopDefault(import('..\\pages\\zhuanxian\\help.vue' /* webpackChunkName: "pages_zhuanxian_help" */))
const _1810a780 = () => interopDefault(import('..\\pages\\zhuanxian\\huizong.vue' /* webpackChunkName: "pages_zhuanxian_huizong" */))
const _37ea10f8 = () => interopDefault(import('..\\pages\\zhuanxian\\list.vue' /* webpackChunkName: "pages_zhuanxian_list" */))
const _7da25454 = () => interopDefault(import('..\\pages\\zhuanxian\\selectMap.vue' /* webpackChunkName: "pages_zhuanxian_selectMap" */))
const _421afed0 = () => interopDefault(import('..\\pages\\zhuanxian\\showEchart.vue' /* webpackChunkName: "pages_zhuanxian_showEchart" */))
const _817b353c = () => interopDefault(import('..\\pages\\zhuanxian\\showPrice.vue' /* webpackChunkName: "pages_zhuanxian_showPrice" */))
const _7851fcd0 = () => interopDefault(import('..\\pages\\zixun\\utils.js' /* webpackChunkName: "pages_zixun_utils" */))
const _0bfcb3a3 = () => interopDefault(import('..\\pages\\act\\2019\\springDay\\index.vue' /* webpackChunkName: "pages_act_2019_springDay_index" */))
const _70acd084 = () => interopDefault(import('..\\pages\\m\\act\\detail.vue' /* webpackChunkName: "pages_m_act_detail" */))
const _4f1492cb = () => interopDefault(import('..\\pages\\m\\act\\list.vue' /* webpackChunkName: "pages_m_act_list" */))
const _76ec7015 = () => interopDefault(import('..\\pages\\m\\cheyuan\\detail.vue' /* webpackChunkName: "pages_m_cheyuan_detail" */))
const _23820a26 = () => interopDefault(import('..\\pages\\m\\gg\\detail.vue' /* webpackChunkName: "pages_m_gg_detail" */))
const _b329761a = () => interopDefault(import('..\\pages\\m\\gg\\ggList.vue' /* webpackChunkName: "pages_m_gg_ggList" */))
const _44623206 = () => interopDefault(import('..\\pages\\m\\gongsi\\detail.vue' /* webpackChunkName: "pages_m_gongsi_detail" */))
const _3b170a20 = () => interopDefault(import('..\\pages\\m\\gongsi\\line.vue' /* webpackChunkName: "pages_m_gongsi_line" */))
const _548d6ba1 = () => interopDefault(import('..\\pages\\m\\gongsi\\wangdian.vue' /* webpackChunkName: "pages_m_gongsi_wangdian" */))
const _c568ff12 = () => interopDefault(import('..\\pages\\m\\huoyuan\\detail.vue' /* webpackChunkName: "pages_m_huoyuan_detail" */))
const _551e59b3 = () => interopDefault(import('..\\pages\\m\\utils\\localStorage.js' /* webpackChunkName: "pages_m_utils_localStorage" */))
const _bea6f184 = () => interopDefault(import('..\\pages\\m\\zhuanxian\\detail.vue' /* webpackChunkName: "pages_m_zhuanxian_detail" */))
const _5f13d646 = () => interopDefault(import('..\\pages\\m\\zhuanxian\\evaluate.vue' /* webpackChunkName: "pages_m_zhuanxian_evaluate" */))
const _43a505e3 = () => interopDefault(import('..\\pages\\member\\_id-chajian.vue' /* webpackChunkName: "pages_member__id-chajian" */))
const _22b43899 = () => interopDefault(import('..\\pages\\member\\_id-contactus.vue' /* webpackChunkName: "pages_member__id-contactus" */))
const _8a59a51a = () => interopDefault(import('..\\pages\\member\\_id-cpfw.vue' /* webpackChunkName: "pages_member__id-cpfw" */))
const _c0abab62 = () => interopDefault(import('..\\pages\\member\\_id-cpfw2.vue' /* webpackChunkName: "pages_member__id-cpfw2" */))
const _a7dbe1c6 = () => interopDefault(import('..\\pages\\member\\_id-huo.vue' /* webpackChunkName: "pages_member__id-huo" */))
const _2bc23a75 = () => interopDefault(import('..\\pages\\member\\_id-jianjie.vue' /* webpackChunkName: "pages_member__id-jianjie" */))
const _07c97f2e = () => interopDefault(import('..\\pages\\member\\_id-line.vue' /* webpackChunkName: "pages_member__id-line" */))
const _086593c8 = () => interopDefault(import('..\\pages\\member\\_id-news.vue' /* webpackChunkName: "pages_member__id-news" */))
const _44b832ae = () => interopDefault(import('..\\pages\\member\\_id-order.vue' /* webpackChunkName: "pages_member__id-order" */))
const _1ee9552c = () => interopDefault(import('..\\pages\\member\\_id-wangdian.vue' /* webpackChunkName: "pages_member__id-wangdian" */))
const _5fe03a07 = () => interopDefault(import('..\\pages\\member\\_id-webnotice.vue' /* webpackChunkName: "pages_member__id-webnotice" */))
const _20410fe8 = () => interopDefault(import('..\\pages\\member\\_id.vue' /* webpackChunkName: "pages_member__id" */))
const _327f9f9c = () => interopDefault(import('..\\pages\\zhuanxian\\_id\\index.vue' /* webpackChunkName: "pages_zhuanxian__id_index" */))
const _3f33feb6 = () => interopDefault(import('..\\pages\\help\\_menu\\_id.vue' /* webpackChunkName: "pages_help__menu__id" */))
const _8e109868 = () => interopDefault(import('..\\pages\\zhuanxian\\_id\\_area.vue' /* webpackChunkName: "pages_zhuanxian__id__area" */))
const _273a37c6 = () => interopDefault(import('..\\pages\\zixun\\_menu\\_id.vue' /* webpackChunkName: "pages_zixun__menu__id" */))
const _79d487da = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
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
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/cheyuan",
      component: _65f8621e,
      name: "cheyuan"
    }, {
      path: "/exit",
      component: _e1b24d74,
      name: "exit"
    }, {
      path: "/gongsi",
      component: _8e0ded7a,
      name: "gongsi"
    }, {
      path: "/help",
      component: _79e66679,
      name: "help"
    }, {
      path: "/huoyuan",
      component: _e79fab62,
      name: "huoyuan"
    }, {
      path: "/Insurance",
      component: _d4c10700,
      name: "Insurance"
    }, {
      path: "/login",
      component: _437c2af1,
      name: "login"
    }, {
      path: "/loginsuccess",
      component: _6fa25aa2,
      name: "loginsuccess"
    }, {
      path: "/m",
      component: _548a5626,
      name: "m"
    }, {
      path: "/member",
      component: _4425ad80,
      name: "member"
    }, {
      path: "/regisiter",
      component: _1eac61de,
      name: "regisiter"
    }, {
      path: "/resetpassword",
      component: _2a203bf2,
      name: "resetpassword"
    }, {
      path: "/shixiao",
      component: _984b9ff2,
      name: "shixiao"
    }, {
      path: "/wangdian",
      component: _740ce145,
      name: "wangdian"
    }, {
      path: "/wuliu",
      component: _4347a440,
      name: "wuliu"
    }, {
      path: "/ydcx",
      component: _6a8c9b9a,
      name: "ydcx"
    }, {
      path: "/yuanqu",
      component: _6ae0abe6,
      name: "yuanqu"
    }, {
      path: "/zixun",
      component: _40627eb8,
      name: "zixun"
    }, {
      path: "/cheyuan/add",
      component: _6daf1500,
      name: "cheyuan-add"
    }, {
      path: "/cheyuan/detail",
      component: _6bc91ec2,
      name: "cheyuan-detail"
    }, {
      path: "/cheyuan/huizong",
      component: _a13a61ee,
      name: "cheyuan-huizong"
    }, {
      path: "/create/cheyuan",
      component: _5b730175,
      name: "create-cheyuan"
    }, {
      path: "/create/cySuccess",
      component: _fece8f8e,
      name: "create-cySuccess"
    }, {
      path: "/create/huoyuan",
      component: _765193d7,
      name: "create-huoyuan"
    }, {
      path: "/create/line",
      component: _2dd9f2d0,
      name: "create-line"
    }, {
      path: "/create/order",
      component: _e0b6334c,
      name: "create-order"
    }, {
      path: "/create/orderbak",
      component: _be4734bc,
      name: "create-orderbak"
    }, {
      path: "/gongsi/add",
      component: _481a885c,
      name: "gongsi-add"
    }, {
      path: "/gongsi/orderSearch",
      component: _26babe47,
      name: "gongsi-orderSearch"
    }, {
      path: "/help/utils",
      component: _18469db7,
      name: "help-utils"
    }, {
      path: "/huoyuan/add",
      component: _3856afde,
      name: "huoyuan-add"
    }, {
      path: "/huoyuan/add1",
      component: _5aee447a,
      name: "huoyuan-add1"
    }, {
      path: "/huoyuan/detail",
      component: _dbafa1b8,
      name: "huoyuan-detail"
    }, {
      path: "/huoyuan/huizong",
      component: _54e5cae7,
      name: "huoyuan-huizong"
    }, {
      path: "/huoyuan/order",
      component: _b60a2a6a,
      name: "huoyuan-order"
    }, {
      path: "/Insurance/pay",
      component: _4aadb6d6,
      name: "Insurance-pay"
    }, {
      path: "/Insurance/product",
      component: _41aa9c9d,
      name: "Insurance-product"
    }, {
      path: "/Insurance/step1",
      component: _1355e513,
      name: "Insurance-step1"
    }, {
      path: "/Insurance/step2",
      component: _1363fc94,
      name: "Insurance-step2"
    }, {
      path: "/Insurance/step3",
      component: _13721415,
      name: "Insurance-step3"
    }, {
      path: "/Insurance/success",
      component: _4efa65b1,
      name: "Insurance-success"
    }, {
      path: "/m/act",
      component: _a21b7316,
      name: "m-act"
    }, {
      path: "/m/cheyuan",
      component: _a750f184,
      name: "m-cheyuan"
    }, {
      path: "/m/gongsi",
      component: _65569356,
      name: "m-gongsi"
    }, {
      path: "/m/huoyuan",
      component: _6b83e29c,
      name: "m-huoyuan"
    }, {
      path: "/m/pageView",
      component: _05ec594e,
      name: "m-pageView"
    }, {
      path: "/m/ydcx",
      component: _2248e326,
      name: "m-ydcx"
    }, {
      path: "/m/zhuanxian",
      component: _3a1366f5,
      name: "m-zhuanxian"
    }, {
      path: "/shixiao/detail",
      component: _5fbee06c,
      name: "shixiao-detail"
    }, {
      path: "/shixiao/index - 副本",
      component: _0c098bce,
      name: "shixiao-index - 副本"
    }, {
      path: "/wuliu/add",
      component: _2b941be2,
      name: "wuliu-add"
    }, {
      path: "/wuliu/detail",
      component: _8400195a,
      name: "wuliu-detail"
    }, {
      path: "/wuliu/list",
      component: _0df260c0,
      name: "wuliu-list"
    }, {
      path: "/yuanqu/detail",
      component: _1fb8a726,
      name: "yuanqu-detail"
    }, {
      path: "/zhuanxian/add",
      component: _488db492,
      name: "zhuanxian-add"
    }, {
      path: "/zhuanxian/detail",
      component: _5dcf82aa,
      name: "zhuanxian-detail"
    }, {
      path: "/zhuanxian/help",
      component: _8ebbb3ca,
      name: "zhuanxian-help"
    }, {
      path: "/zhuanxian/huizong",
      component: _1810a780,
      name: "zhuanxian-huizong"
    }, {
      path: "/zhuanxian/list",
      component: _37ea10f8,
      name: "zhuanxian-list"
    }, {
      path: "/zhuanxian/selectMap",
      component: _7da25454,
      name: "zhuanxian-selectMap"
    }, {
      path: "/zhuanxian/showEchart",
      component: _421afed0,
      name: "zhuanxian-showEchart"
    }, {
      path: "/zhuanxian/showPrice",
      component: _817b353c,
      name: "zhuanxian-showPrice"
    }, {
      path: "/zixun/utils",
      component: _7851fcd0,
      name: "zixun-utils"
    }, {
      path: "/act/2019/springDay",
      component: _0bfcb3a3,
      name: "act-2019-springDay"
    }, {
      path: "/m/act/detail",
      component: _70acd084,
      name: "m-act-detail"
    }, {
      path: "/m/act/list",
      component: _4f1492cb,
      name: "m-act-list"
    }, {
      path: "/m/cheyuan/detail",
      component: _76ec7015,
      name: "m-cheyuan-detail"
    }, {
      path: "/m/gg/detail",
      component: _23820a26,
      name: "m-gg-detail"
    }, {
      path: "/m/gg/ggList",
      component: _b329761a,
      name: "m-gg-ggList"
    }, {
      path: "/m/gongsi/detail",
      component: _44623206,
      name: "m-gongsi-detail"
    }, {
      path: "/m/gongsi/line",
      component: _3b170a20,
      name: "m-gongsi-line"
    }, {
      path: "/m/gongsi/wangdian",
      component: _548d6ba1,
      name: "m-gongsi-wangdian"
    }, {
      path: "/m/huoyuan/detail",
      component: _c568ff12,
      name: "m-huoyuan-detail"
    }, {
      path: "/m/utils/localStorage",
      component: _551e59b3,
      name: "m-utils-localStorage"
    }, {
      path: "/m/zhuanxian/detail",
      component: _bea6f184,
      name: "m-zhuanxian-detail"
    }, {
      path: "/m/zhuanxian/evaluate",
      component: _5f13d646,
      name: "m-zhuanxian-evaluate"
    }, {
      path: "/member/:id-chajian",
      component: _43a505e3,
      name: "member-id-chajian"
    }, {
      path: "/member/:id-contactus",
      component: _22b43899,
      name: "member-id-contactus"
    }, {
      path: "/member/:id-cpfw",
      component: _8a59a51a,
      name: "member-id-cpfw"
    }, {
      path: "/member/:id-cpfw2",
      component: _c0abab62,
      name: "member-id-cpfw2"
    }, {
      path: "/member/:id-huo",
      component: _a7dbe1c6,
      name: "member-id-huo"
    }, {
      path: "/member/:id-jianjie",
      component: _2bc23a75,
      name: "member-id-jianjie"
    }, {
      path: "/member/:id-line",
      component: _07c97f2e,
      name: "member-id-line"
    }, {
      path: "/member/:id-news",
      component: _086593c8,
      name: "member-id-news"
    }, {
      path: "/member/:id-order",
      component: _44b832ae,
      name: "member-id-order"
    }, {
      path: "/member/:id-wangdian",
      component: _1ee9552c,
      name: "member-id-wangdian"
    }, {
      path: "/member/:id-webnotice",
      component: _5fe03a07,
      name: "member-id-webnotice"
    }, {
      path: "/member/:id",
      component: _20410fe8,
      name: "member-id"
    }, {
      path: "/zhuanxian/:id?",
      component: _327f9f9c,
      name: "zhuanxian-id"
    }, {
      path: "/help/:menu/:id?",
      component: _3f33feb6,
      name: "help-menu-id"
    }, {
      path: "/zhuanxian/:id?/:area",
      component: _8e109868,
      name: "zhuanxian-id-area"
    }, {
      path: "/zixun/:menu/:id?",
      component: _273a37c6,
      name: "zixun-menu-id"
    }, {
      path: "/",
      component: _79d487da,
      name: "index"
    }],

    fallback: false
  })
}
