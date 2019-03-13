<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">页面不存在2</h1>
    <h1 v-else>应用发生错误异常</h1>
    <nuxt-link to="/">首 页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  layout: 'errorpage',
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
