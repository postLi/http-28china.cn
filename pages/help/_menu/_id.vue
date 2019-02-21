<template>
  <div v-html="content" />
</template>

<script>
import { formatAnfaTms, makeAnfaTmsUrl } from '../utils.js'
export default {
  name: 'CheYuan',
  layout: 'subLayout',
  head() {
    return {
      title: this.metatitle,
      meta: [{ hid: 'description', name: 'description', content: this.desc }],
      link: [
        { rel: 'stylesheet', href: '/help/index.css' },
        { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
        this.cssfile
      ],
      script: [
        { src: '/js/city-picker.data.js' },
        { src: '/js/city-picker.js' },
        { src: '/js/jquery.pagination.min.js' },
        { src: '/help/suggest.js' }
      ]
    }
  },
  data() {
    return {
      recommendList: [],
      dataset: [],
      content: '',
      metatitle: '',
      desc: '',
      keyw: ''
    }
  },
  async asyncData({ $axios, app, query, params, route }) {
    let path = route.path
    if (path.indexOf('.jhtml') === -1) {
      path = path.replace(/\/?$/, '/index.jhtml')
    }
    let con = await $axios.get(makeAnfaTmsUrl(path))
    let isnew = /(wzgg|khal)/.test(route.path)
    let cssfile = { rel: 'stylesheet', href: '/help/list_question.css' }
    if (isnew) {
      cssfile = { rel: 'stylesheet', href: '/help/list_help.css' }
    }
    // 替换链接跟静态资源路径
    return {
      content: formatAnfaTms(con.data),
      cssfile: cssfile
    }
  },
  mounted() {},
  methods: {
    //
  }
}
</script>
