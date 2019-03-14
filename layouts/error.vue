<template>
  <div class="container">
    <div v-if="error.statusCode === 404"><h1>
      页面不存在
    </h1>
      {{ error.message || '' }}
    </div>
    <h1 v-else>应用发生错误异常：{{ error.message || '' }}</h1>
    <!-- <nuxt-link to="/">首 页</nuxt-link> -->
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
