<template>
  <div class="member-page">
    <Top />
    <MemberHeader />
    <MemberNav />
    <nuxt/>
    <MemberFooter />
  </div>
</template>
<script>
import MemberHeader from '../components/member/top'
import MemberNav from '../components/member/nav'
import MemberFooter from '../components/member/foot'
import Top from '../components/member/topNav'
export default {
  components: {
    MemberHeader,
    MemberNav,
    MemberFooter,
    Top
  },
  head: {
    link: [{ rel: 'stylesheet', href: '/member/css/index.css' }]
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
<style lang="scss">
// @import '~/assets/scss/regisiter.scss';
</style>
