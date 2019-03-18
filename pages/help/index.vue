<template>
  <div v-html="content" />
</template>

<script>
import { formatAnfaTms, makeAnfaTmsUrl } from './utils.js'
export default {
  name: 'Help',
  layout: 'subLayout',
  head: {
    title: '帮助中心',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          '28快运是专业提供零担运输和整车运输等物流服务平台，同时提供免费发布货源、车源、专线。货主在线发货，物流跟踪查询，服务有保障，让您发货省时，省钱，更省心！'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          '物流,物流平台,物流专线,物流公司,物流服务,在线发货,查询运价,运单查询,运单跟踪,物流帮'
      }
    ],
    link: [
      { rel: 'stylesheet', href: '/help/index.css' },
      { rel: 'stylesheet', href: '/help/list_question.css' },
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/help/list_help.css' }
    ],
    script: [
      { src: '/js/city-picker.data.js' },
      { src: '/js/city-picker.js' },
      { src: '/zxnews_files/ty_window.js' },
      { src: '/zxnews_files/jquery.SuperSlide.2.1.1.js' },
      { src: '/index/js/pic_scroll.js' }
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
    console.log('route.path:', route.path)
    let con = await $axios.get(makeAnfaTmsUrl(route.path))
    // 替换链接跟静态资源路径
    return {
      content: formatAnfaTms(con.data)
    }
  },
  mounted() {
    if (process.client) {
      //echart滚动脚本
      var speed = 30 //数字越大速度越慢
      var tab = $('.echart_scroll_nr')
      var tab1 = $('.echart_scroll_nr1')
      var tab2 = $('.echart_scroll_nr2')
      tab2.html(tab1.html())
      console.log('tab2:' + tab2.html())
      function Marquee() {
        if (tab2[0].offsetWidth - tab[0].scrollLeft <= 0) {
          tab[0].scrollLeft -= tab1[0].offsetWidth
          //console.log('tab1[0].offsetWidth:'+tab1[0].offsetWidth)
        } else {
          tab[0].scrollLeft++
          //console.log('tab[0].scrollLeft:'+tab1[0].scrollLeft)
        }
      }
      var MyMar = setInterval(Marquee, speed)
      tab.mouseover(function() {
        clearInterval(MyMar)
      })
      tab.mouseout(function() {
        MyMar = setInterval(Marquee, speed)
      })

      $('#slideBox1').slide({
        mainCell: '.bd ul',
        autoPlay: true,
        delayTime: 0,
        trigger: 'click'
      })
      $('#slideBox2').slide({ mainCell: '.bd ul', autoPlay: true })
      $('#slideBox3').slide({ mainCell: '.bd ul', autoPlay: true })
      $('.scrollLoading').scrollLoading()
    }
  },
  methods: {
    //
  }
}
</script>
