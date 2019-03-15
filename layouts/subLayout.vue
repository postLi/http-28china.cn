<template>
  <div class="app">
    <div class="header">
      <top/>
    </div>
    <nuxt/>
    <CommonFooter />
  </div>

</template>
<script>
import Top from '../components/top'
import TopNav from '../components/public/topNav.vue'
import CommonFooter from '../components/commonFooter'
export default {
  components: {
    Top,
    CommonFooter
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/index.css' },
      { rel: 'stylesheet', href: '/css/list_huo.css' }
    ],
    script: [
      {
        src: '/js/city-picker.data.js'
      },
      {
        src: '/js/city-picker.js'
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
<style scoped>
.header {
  margin: 0 auto 30px;
}
</style>
