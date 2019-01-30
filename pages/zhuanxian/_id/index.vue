<template>
  <div v-html="content" />
</template>

<script>
export default {
  name: 'Zhuanxian1',
  head: {
    link: [
      { rel: 'stylesheet', href: '/zxnews_files/n/basic.css' },
      { rel: 'stylesheet', href: '/zxnews_files/n/mains.css' }
    ],
    script: [
      { src: '/js/city-picker.data.js' },
      { src: '/js/city-picker.js' },
      { src: '/js/jquery.pagination.min.js' }
    ]
  },
  data() {
    return {
      recommendList: [],
      dataset: [],
      content: ''
    }
  },
  async asyncData({ $axios, app, query, params, route }) {
    let path = route.path

    path = 'http://192.168.1.188:825/lines' + path.replace(/^\/zhuanxian/, '')
    console.log('route.path4:', route.path, path)

    let con = await $axios.get(path)
    // 替换链接跟静态资源路径
    return {
      content: con.data
    }
  },
  mounted() {},
  methods: {
    //
  }
}
</script>
