<template>
  <div>正在跳转至会员中心页面......</div>
</template>
<script>
export default {
  name: 'Hyzx',
  layout: 'empty',
  mounted() {
    if (process.client) {
      let url = location.href
      location.href =
        url.indexOf('192.168') === -1
          ? 'http://member.28china.cn'
          : url.indexOf('192.168.1.157') !== -1
            ? 'http://192.168.1.157:9526'
            : 'http://192.168.1.188:9524'
    }
  }
}
</script>
