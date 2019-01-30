<template>
  <div v-html="content" />
</template>

<script>
import { formatAnfaTms, makeAnfaTmsUrl } from '../utils.js'
export default {
  name: 'CheYuan',
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
    console.log('route.path2:', route.path)
    let path = route.path
    if (path.indexOf('.jhtml') === -1) {
      path = path.replace(/\/?$/, '/index.jhtml')
    }
    let con = await $axios.get(makeAnfaTmsUrl(path))
    // 替换链接跟静态资源路径
    return {
      content: formatAnfaTms(con.data)
    }
  },
  mounted() {},
  methods: {
    //
  }
}
</script>
