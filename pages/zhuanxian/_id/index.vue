<template>
  <div class="list-content main-width">
    <div class="list_nav">
      <a href="/">物流首页</a>&gt;<a 
        id="list_nav_a1" 
        href="">零担物流专线</a>
        <!-- &gt;<a 
          id="list_nav_a2" 
          href="">零担物流专线</a> -->
    </div>
    <TopSearch />
    <div class="list-box">
      <div v-html="content" />
      <RightSide />
    </div>
  </div>
</template>

<script>
import RightSide from '@/components/lines/right.vue'
import TopSearch from '@/components/lines/search.vue'
export default {
  name: 'Zhuanxian',
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
  async asyncData({ $axios, app, query, params, route, error }) {
    let path = route.path
    let url = path.replace(/^\/zhuanxian/, '')
    return new Promise((resolve, reject) => {
      if (process.server) {
        let fs = require('fs')
        let path = require('path')
        let filepath = '../../lines/' + url
        // let file = path.resolve(__dirname, filepath)
        fs.readFile('lines/' + url, 'utf-8', function(err, data) {
          if (err) {
            console.log('file error:', err)
            error({ statusCode: 404, message: '找不到文件' })
          } else {
            // console.log('data:', data)
            // 替换链接跟静态资源路径
            // 找到tdk信息回填到页面上
            // 过滤其它无关的信息
            let content = data

            let body = content.match(/<body>((\s|\S)*)<\/body>/gim)
            let head = content.match(/<title>(.*)<\/title>/i)
            let desc = content.match(
              /meta\s+name="description"\s+content="([^"]*)"/
            )
            let keyw = content.match(
              /meta\s+name="keywords"\s+content="([^"]*)"/
            )
            head = head ? head[1] : '28快运网'
            desc = desc ? desc[1] : '28快运网'
            keyw = keyw ? keyw[1] : '28快运网'

            resolve({
              content: body ? body[0] : content,
              metatitle: head,
              desc: desc,
              keyw: keyw
            })
          }
        })
      }
    })

    /* 
    path = 'http://127.0.0.1:825/lines' + path.replace(/^\/zhuanxian/, '')
    console.log('route.path4:', route.path, path)

    let con = await $axios.get(path)
    let content = con.data */
  },
  mounted() {
    seajs.use(['/line/js/list_line.js?V2', '/line/js/list_line_more.js'])
  },
  methods: {},
  async fetch({ store, params, $axios, error }) {
    await store.dispatch('news/GETNEWSINFO', {
      params: {
        channelIds: '94,95,96,97,98,99',
        count: '10',
        // checked: 'true',
        // recommend: '1',
        orderBy: '9',
        channelOption: '0'
      },
      name: 'wlzx'
    })
  }
}
</script>
