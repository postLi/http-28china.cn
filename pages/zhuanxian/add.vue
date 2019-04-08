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
            <p><span
              :class="indexPl==3?'active':'unActive'"
              class="unActive"
              @click="showPingLunFn(3)"/>全部({{ pjNum.all || 0 }})</p>
          </li>
          <li>
            <p><span
              :class="indexPl==0?'active':'unActive'"
              class="unActive"
              @click="showPingLunFn(0)"/>好评({{ pjNum.good || 0 }})</p>
          </li>
          <li>
            <p><span
              :class="indexPl==1?'active':'unActive'"
              class="unActive"
              @click="showPingLunFn(1)"/>中评({{ pjNum.middle || 0 }})</p>
          </li>
          <li>
            <p><span
              :class="indexPl==2?'active':'unActive'"
              class="unActive"
              @click="showPingLunFn(2)"/>差评({{ pjNum.bad || 0 }})</p>
          </li>
        </ul>
        <div v-if="list==[]||list.length==0">
          <p 
            style="margin-top: 20px;;color:red;font-size:16px"
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
      
                <p style="color:rgb(255,197,96);padding:10px;border:1px solid #ccc; padding: 10px;border: 1px solid;width: 505px;margin-top: 20px;"><span style="display: inline-block;">[回复]：{{ item.replyDes }}</span></p>
              </div>
            </li>
          </ul>
        </div>
        <div
          
          class="box"
          style="float: right;margin-right: 170px;">
          <div v-if="list==[]"/>
          <div
            v-else
            id="pagination1"
            class="page fl"/>
          <div class="info fl"/>
        </div>
      </div>
    </div>
    <div slot="footer"/>
  </LllDialog>
</template>
<script>
import LllDialog from '../../components/lllDialog'

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
}
async function getpjNum($axios, query) {
  let res = await $axios.get(
    `/28-web/rangeEva/range/assessLevel/count?rangeId=${query.id}
`
  )

  if (res.data.status === 200) {
    return {
      data: res.data.data
    }
  } else {
    return { list: [], pages: 0, currentPage: 1 }
  }
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

  head: {
    link: [
      { rel: 'stylesheet', href: '/line/css/article_wlzx.css' },
      { rel: 'stylesheet', href: '/line/css/price.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' },
      { rel: 'stylesheet', href: '/layer/dist/css/layui.css' }
    ],
    script: [{ src: 'https://echarts.baidu.com/dist/echarts.min.js' }]
  },
  data() {
    return {
      assessLevel: '',
      indexPl: 3,
      list: [],
      pjNum: {},
      pages: 0,
      currentPage: 1,
      falseMsg: '',
      form: {
        companyName: '',
        contactsName: '',
        msg: '',
        mobile: ''
      },
      isCompanyName: false,
      isContactsName: false,
      ismobile: false,
      vo: {}
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
        let obj = await getpjLists(
          this.$axios,
          1,
          this.vo,
          this.$route.query,
          this.assessLevel
        )
        this.pages = obj.pages
        this.list = obj.list
        this.currentPage = obj.currentPage
        this.loadPagination()

        let _data = await getpjNum(this.$axios, this.$route.query)
        this.pjNum = _data.data
      }
    },
    types(n, o) {},
    info(n, o) {}
  },
  mounted() {},
  methods: {
    loadPagination() {
      $('#pagination1').pagination({
        currentPage: 1,
        totalPage: this.pages,
        callback: async current => {
          this.currentPage = current
          $('#current1').text(current)
          let obj = await getpjLists(
            this.$axios,
            current,
            {},
            this.$route.query,
            this.assessLevel
          )
          let assessLevel = ''
          this.pages = obj.pages
          this.list = obj.list
        }
      })
    },
    showPingLunFn(index) {
      let assessLevel = ''
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
      getpjLists(this.$axios, 1, this.vo, this.$route.query, assessLevel).then(
        res => {
          let obj = res
          this.pages = obj.pages
          this.list = obj.list
          this.currentPage = obj.currentPage
          this.loadPagination()
        }
      )
    },
    closeDialog() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.showpj {
  .dialog-content {
    width: 900px !important;
    height: 900px !important;
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
