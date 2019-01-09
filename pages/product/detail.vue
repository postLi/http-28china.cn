<template>
  <span>
    您的IP：{{ ip }}<br>
    {{
      $route.query.id
    }}
  </span>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          name: 'keywords',
          content: '最强王者,今晚吃鸡'
        },
        // 动态获取的内容渲染到tdk
        {
          hid: 'description',
          name: 'description',
          content: `${this.ip},无限宝石,无限元宝`
        }
      ]
    }
  },
  validate({ query }) {
    // Must be a number
    return /^\d+$/.test(query.id)
  },
  data() {
    return {
      ip: ''
    }
  },
  async asyncData({ $axios }) {
    const ip = await $axios.$get('http://icanhazip.com')
    return {
      ip: ip
    }
  }
}
</script>
