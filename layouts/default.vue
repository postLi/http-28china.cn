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
  }
}
</script>
<style scoped>
</style>
