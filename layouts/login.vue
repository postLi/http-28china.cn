<template>
  <div :class="$store.state.pageClass">
    <LoginHeader />
    <nuxt/>
    <LoginFooter />
  </div>
</template>
<script>
import LoginHeader from '../components/loginHeader'
import LoginFooter from '../components/public/footer'
export default {
  components: {
    LoginHeader,
    LoginFooter
  },
  head: {
    link: [{ rel: 'stylesheet', href: '/css/regisiter.css' }]
  }
}
</script>
<style lang="scss">
// @import '~/assets/scss/regisiter.scss';
</style>
