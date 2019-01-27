<template>
  <div class="app">
    <!--<CommonNav />-->
    <nuxt/>
    <CommonFooter />
  </div>

</template>
<script>
import CommonNav from '../components/commonNav'
import CommonFooter from '../components/commonFooter'
export default {
  components: {
    CommonNav,
    CommonFooter
  },
  head: {
    //https://github.com/declandewet/vue-meta
    //metaInfo
    //  htmlAttrs
    //  headAttrs
    //  bodyAttrs
    //  meta
    //  style
    //  script
    link: [
      { rel: 'stylesheet', href: '/css/index.css' },
      { rel: 'stylesheet', href: '/css/list_huo.css' }
    ],
    mounted() {
      if (window.location.pathname.indexOf('/zhuanxian/detail')) {
      }
      console.log(window.location.pathname, 'location')
      // var startp1 = GetUrlParam("startp")
    }
  }
}
</script>
