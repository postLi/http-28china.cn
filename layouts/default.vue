<template>
  <div class="app">
    <CommonNav />
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
    script: [
      {
        src: '/index/js/memu.js'
      }
    ]
  },
  mounted() {
    console.groupCollapsed('服务端请求信息:')
    this.$store.state.errorReqList.forEach(el => {
      if (el.isError) {
        console.error(el.config.url, ': ', el.config, el.data, el)
      } else {
        console.log(el.config.url, ': ', el.config, el.data, el)
      }
    })
    console.groupEnd()
  }
}
</script>
