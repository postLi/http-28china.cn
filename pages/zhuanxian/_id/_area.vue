<template>
  <div class="list-content main-width line-box-unit-wrapper">
    <div class="list_nav">
      <a href="/">物流首页</a>&gt;<a 
        id="list_nav_a1" 
        href="">零担物流专线</a>&gt;<a 
          id="list_nav_a2" 
          href="">零担物流专线</a>
    </div>
    <TopSearch />
    <div class="list-box">
      <div v-html="content" />
      <RightSide />
    </div>
  </div>
</template>

<script>
import RightSide from '@/components/lines/right1.vue'
import TopSearch from '@/components/lines/search.vue'
export default {
  name: 'Zhuanxian1',
  components: {
    RightSide,
    TopSearch
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
  head() {
    return {
      title: this.metatitle,
      meta: [
        { hid: 'description', name: 'description', content: this.desc },
        { hid: 'keywords', name: 'keywords', content: this.keyw }
      ],
      link: [
        { rel: 'stylesheet', href: '/index/css/list_line.css' },
        { rel: 'stylesheet', href: '/index/css/jquery.pagination.css' },
        { rel: 'stylesheet', href: '/index/css/list_line_more.css' }
      ],
      script: [
        { src: '/js/city-picker.data.js' },
        { src: '/js/city-picker.js' },
        { src: '/js/jquery.pagination.min.js' }
      ]
    }
  },
  async asyncData({ $axios, app, query, params, route }) {
    let path = route.path

    if (process.server) {
      path = 'http://localhost:825/lines' + path.replace(/^\/zhuanxian/, '')
    } else {
      path = 'http://127.0.0.1:825/lines' + path.replace(/^\/zhuanxian/, '')
    }

    // console.log('route.path4:', route.path, path)

    let con = await $axios.get(path)
    // 替换链接跟静态资源路径

    // 找到tdk信息回填到页面上
    // 过滤其它无关的信息
    let body = con.data.match(/<body>((\s|\S)*)<\/body>/gim)
    let head = con.data.match(/<title>(.*)<\/title>/i)
    let desc = con.data.match(/meta\s+name="description"\s+content="([^"]*)"/)
    let keyw = con.data.match(/meta\s+name="keywords"\s+content="([^"]*)"/)
    head = head ? head[1] : '28快运网'
    desc = desc ? desc[1] : '28快运网'
    keyw = keyw ? keyw[1] : '28快运网'

    return {
      content: body ? body[0] : con.data,
      metatitle: head,
      desc: desc,
      keyw: keyw
    }
  },
  mounted() {
    seajs.use(['/line/js/list_line.js', '/line/js/list_line_more.js'])
  },
  methods: {
    //
  }
}
</script>
