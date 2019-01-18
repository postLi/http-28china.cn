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
    ]
  }
}
</script>
<style scoped>
.header {
  margin: 0 auto 30px;
}
</style>
