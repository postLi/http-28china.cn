<template>
  <LllDialog
    :is-show="showDiv"
    @close="closeDialog"
  
    class="showpj">

    <div
      slot="header"
      style="font-size:20px;color:red;padding:20px 0"><span>{{ info.companyName }}-用户评价</span></div>
    <div
      class="dialog_publish_main"
      slot="main">
      <div class="bot_pj">
        <ul class="pjul">
          <li>
            <!-- <p>dfj</p> -->
            <!-- <p>{{ linedataE.evaGoodRate }}%</p> -->
            <p><span
              :class="indexPl==3?'active':'unActive'"
              class="unActive"
              @click="showPingLunFn(3)"/>全部({{ infopj.all || 0 }})</p>
          </li>
          <li>
            <!-- <p>dfj</p> -->
            <!-- <p>{{ linedataE.evaGoodRate }}%</p> -->
            <p><span
              :class="indexPl==0?'active':'unActive'"
              class="unActive"
              @click="showPingLunFn(0)"/>好评({{ infopj.good || 0 }})</p>
          </li>
          <li>
            <!-- <p>fkdf</p> -->
            <!-- <p>{{ linedataE.evaMiddleRate }}%</p> -->
            <p><span
              :class="indexPl==1?'active':'unActive'"
              class="unActive"
              @click="showPingLunFn(1)"/>中评({{ infopj.middle || 0 }})</p>
          </li>
          <li>
            <!-- <p>df</p> -->
            <!-- <p>{{ linedataE.evaBadCount }}%</p> -->
            <p><span
              :class="indexPl==2?'active':'unActive'"
              class="unActive"
              @click="showPingLunFn(2)"/>差评({{ infopj.bad || 0 }})</p>
          </li>
        </ul>
        <div v-if="list==[]||list.length==0">
          <p 
            style="margin-top: 20px;;color:red"
          > 此用户没有评论</p>
        </div>
        <div
          v-else
        >

          <ul
            v-for="(item,i) in list"
            :key="i"
            class="pjdetail">
            <li
            style="padding-top:25px;border-bottom:1px solid #ccc;padding-bottom: 20px;display:inline-block">
              <div
                style="float:left;padding:0 70px 0 50px"
                class="pj_l">
                <p style="padding-bottom:10px">{{ item.evaluationName }}</p>
                <p><img
                  v-for="(item,i) in 4"
                  :key="i"
                  src="../../static/line/images/13z.png"
                  alt=""></p>
              </div>
              <div
                style="float:left; width: 560px;"
                class="pj_r">
                <p style="color:rgb(76,76,76)">{{ item.evaluationDes }}</p>
                <p style="padding-top:10px;color:rgb(181,189,205)">{{ item.createTime }}</p>
                <!-- <p style="color:rgb(255,197,96);padding:10px;border:1px solid #ccc; padding: 10px;border: 1px solid;width: 505px;margin-top: 20px;"><span style="display: inline-block;">[回复]</span>:dfdfdf</p> -->
                <p style="color:rgb(255,197,96);padding:10px;border:1px solid #ccc; padding: 10px;border: 1px solid;width: 505px;margin-top: 20px;"><span style="display: inline-block;">[回复]：{{ item.replyDes }}</span></p>
              </div>
            </li>
          </ul>
        </div>
        <!--分页-->
        <div
          class="box"
          style="float: right;margin-right: 170px;">
          <div
            id="pagination1"
            class="page fl"/>
          <div class="info fl">
          <!-- <p>当前页数：<span id="current1">1</span></p> -->
          </div>
        </div>
        <!--分页-->
      </div>
    </div>
    <div slot="footer"/>
  </LllDialog>
</template>
<script>
import $axios from 'axios'
import LllDialog from '../../components/lllDialog'
async function gateWayList($axios, currentPage, vo = {}) {
  let parm = vo
  parm.currentPage = currentPage
  parm.pageSize = 21
  let res = await $axios.post('/28-web/logisticsPark/list', parm)
  console.log(res, 'res')
  if (res.data.status === 200) {
    return {
      list: res.data.data.list,
      pages: res.data.data.pages,
      currentPage: res.data.data.pageNum
    }
  } else {
    return { list: [], pages: 0, currentPage: 1 }
  }
}
async function getpjLists($axios, currentPage, vo = {}, query, assessLevel) {
  let parm = vo
  parm.currentPage = currentPage
  parm.pageSize = 3
  parm.assessLevel = assessLevel
  parm.transportRangeId = query.id
  let aurl = ''

  let res = await $axios.post(aurl + '/28-web/rangeEva/range/list', parm)

  if (res.data.status === 200) {
    return {
      list: res.data.data.list,
      pages: res.data.data.pages,
      currentPage: res.data.data.pageNum
    }
  } else {
    return { list: [], pages: 0, currentPage: 1 }
  }
  // console.log(typeof list, 'list', '/28-web/rangeEva/range/list')
}
export default {
  name: 'Add',
  components: {
    LllDialog
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    types: {
      type: Number,
      default: 1
    },
    info: {
      type: [Array, Object],
      default: () => {}
    },
    infopj: {
      type: [Array, Object],
      default: () => {}
    },
    infopjs: {
      type: [Array, Object],
      default: () => {}
    }
  },
  async asyncData({ $axios, app, query, error }) {
    let vo
    let getpjListData = await getpjLists($axios, 1, vo)

    // console.log('ressss1')
    // console.log(getpjListData, 'getpjListData')
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/line/css/article_wlzx.css' },
      { rel: 'stylesheet', href: '/line/css/price.css' },
      // { rel: 'stylesheet', href: '/gongsi/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' },
      // { rel: 'stylesheet', href: '/css/index.css' },
      { rel: 'stylesheet', href: '/layer/dist/css/layui.css' }
    ],
    script: [
      // { src: '../js/jquery.pagination.min.js' },
      { src: '../js/AFLC_API.js' },
      // { src: '../js/WTMap.min.js' },
      { src: 'https://echarts.baidu.com/dist/echarts.min.js' }
    ]
  },
  data() {
    return {
      assessLevel: '',
      indexPl: 3,
      list: [],
      pages: 0, //总页数
      currentPage: 1, //当前页
      // isShow: this.show,
      // popTitle: '提货派车单',
      falseMsg: '',
      form: {
        companyName: '',
        contactsName: '',
        msg: '',
        mobile: ''
      },
      isCompanyName: false,
      isContactsName: false,
      ismobile: false
    }
  },

  computed: {
    showDiv(n) {
      return this.show
    }
  },
  watch: {
    async showDiv(n) {
      if (n == true) {
        // console.log(this.assessLevel, 'this.assessLevel')
        let vo
        let obj = await getpjLists(
          this.$axios,
          1,
          vo,
          this.$route.query,
          this.assessLevel
        )
        console.log(obj.list, 'list1')
        // console.log(obj, 'getpjListData')
        this.pages = obj.pages
        this.list = obj.list
        this.currentPage = obj.currentPage
        this.loadPagination()
      }
    },
    types(n, o) {},
    info(n, o) {
      console.log(n, 'nnn1')
    },
    infopj(n, o) {
      console.log(n, 'infopj')
    },
    infopjs(n, o) {
      // console.log(n, 'infopjs')
    }
  },
  mounted() {},
  methods: {
    loadPagination() {
      $('#pagination1').pagination({
        currentPage: this.currentPage,
        totalPage: this.pages,
        callback: async current => {
          // $('#current1').text(current)
          let obj = await getpjLists(
            this.$axios,
            current,
            {},
            this.$route.query,
            this.assessLevel
          )
          // console.log(obj, 'objobj11')
          let assessLevel = ''
          this.pages = obj.pages
          this.list = obj.list
          this.currentPage = obj.currentPage
        }
      })
    },
    showPingLunFn(index) {
      // alert(index, 'index')
      // /range/getRangePriceReference/{rangeId}
      // 专线详情_专线价格参考
      // if (pj_zh == '好评') {
      //   var assessLevel = 'AF0360101'
      // }
      // if (pj_zh == '中评') {
      //   var assessLevel = 'AF0360102'
      // }
      // if (pj_zh == '差评') {
      //   var assessLevel = 'AF0360103'
      // }
      let assessLevel = ''

      // console.log(index, 'index')
      if (index == 0) {
        assessLevel = 'AF0360101'
      } else if (index == 1) {
        assessLevel = 'AF0360102'
      } else if (index == 2) {
        assessLevel = 'AF0360103'
      } else if (index == 3) {
        assessLevel = ''
      }
      this.indexPl = index
      this.assessLevel = assessLevel
      let vo
      // vo.assessLevel = assessLevel
      getpjLists(
        this.$axios,
        this.currentPage,
        vo,
        this.$route.query,
        assessLevel
      ).then(res => {
        let obj = res
        this.pages = obj.pages
        this.list = obj.list
        this.currentPage = obj.currentPage
        // console.log(this.list, 'this.list')
      })
    },
    closeDialog() {
      this.$emit('close')
      this.form = {}
      this.ismobile = false
      // this.$emit('update:show', false)

      //把绑定的弹窗数组 设为false即可关闭弹窗
    }
    // closeMe(done) {
    //   this.reset()
    //   this.$emit('update:popVisible', false)
    //   if (typeof done === 'function') {
    //     done()
    //   }
    // }
  }
}
</script>

<style lang="scss">
.showpj {
  .dialog-content {
    width: 900px !important;
    height: 900px !important;
    // top: 30% !important;
    .bot_pj {
      margin-left: 80px;
      margin-bottom: 50px;
      ul.pjul {
        display: inline-block;
        border: 1px #ccc solid;
        padding: 0 220px 20px 25px;
        li {
          float: left;
          padding-right: 40px;
          height: 40px;
          line-height: 40px;
          .unActive {
            display: inline-block;
            width: 14px;
            height: 14px;
            border: 1px solid #e2e2e2;
            border-radius: 50%;
            position: relative;
            margin-right: 5px;
            cursor: pointer;
          }
          .active {
            display: inline-block;
            width: 14px;
            height: 14px;
            border: 1px solid #b7d2ff;
            border-radius: 50%;
            margin-right: 5px;
          }
          .active:before {
            content: '';
            display: inline-block;
            width: 4px;
            height: 4px;
            border: 1px solid #72b6ff;
            background: #72b6ff;
            border-radius: 50% !important;
            position: absolute;
            top: 4px;
            left: 4px;
          }
          p:last-of-type {
            padding-top: 15px;
          }
        }
      }
    }
  }
}
</style>
