<template>
  <LllDialog
    :is-show="showDiv"
    @close="closeDialog"
    :title="popTitle"
    class="showpj">

    <div
      slot="header"
      style="font-size:20px;color:red;padding:20px 0"><span>江苏大本赢物流有限公司-用户评价</span></div>
    <div
      class="dialog_publish_main"
      slot="main">
      <div class="bot_pj">
        <ul class="pjul">
          <li>
            <!-- <p>dfj</p> -->
            <!-- <p>{{ linedataE.evaGoodRate }}%</p> -->
            <p><span
              :class="indexPl==0?'active':'unActive'"
              class="unActive"
              @click="showPingLunFn(0)"/>好评(1)</p>
          </li>
          <li>
            <!-- <p>fkdf</p> -->
            <!-- <p>{{ linedataE.evaMiddleRate }}%</p> -->
            <p><span
              :class="indexPl==1?'active':'unActive'"
              class="unActive"
              @click="showPingLunFn(1)"/>中评(1)</p>
          </li>
          <li>
            <!-- <p>df</p> -->
            <!-- <p>{{ linedataE.evaBadCount }}%</p> -->
            <p><span
              :class="indexPl==2?'active':'unActive'"
              class="unActive"
              @click="showPingLunFn(2)"/>差评(1)</p>
          </li>
        </ul>
        <p style="margin-top: 20px;">此用户没有评论</p>
        <ul
          v-for="(item,i) in 3"
          :key="i"
          class="pjdetail">
          <li
          style="padding-top:25px;border-bottom:1px solid #ccc;padding-bottom: 20px;display:inline-block">
            <div
              style="float:left;padding:0 70px 0 50px"
              class="pj_l">
              <p style="padding-bottom:10px">狄仁杰</p>
              <p><img
                v-for="(item,i) in 4"
                :key="i"
                src="../../static/line/images/13z.png"
                alt=""></p>
            </div>
            <div
              style="float:left"
              class="pj_r">
              <p style="color:rgb(76,76,76)">希望是真的</p>
              <p style="padding-top:10px;color:rgb(181,189,205)">2015-2018 20.52</p>
              <p style="color:rgb(255,197,96);padding:10px;border:1px solid #ccc; padding: 10px;border: 1px solid;width: 505px;margin-top: 20px;"><span>[回复]</span>:dfdfdf</p>
            </div>
          </li>
        </ul>
        <!--分页-->
        <div
          class="box"
          style="float: right;margin-right: 170px;">
          <div
            id="pagination1"
            class="page fl"/>
          <div class="info fl">
          <!--<p>当前页数：<span id="current1">1</span></p>-->
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
    }
  },
  head: {
    link: [
      { rel: 'stylesheet', href: '/line/css/article_wlzx.css' },
      { rel: 'stylesheet', href: '/line/css/price.css' },
      { rel: 'stylesheet', href: '/gongsi/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/WTMap.css' },
      // { rel: 'stylesheet', href: '/css/index.css' },
      { rel: 'stylesheet', href: '/layer/dist/css/layui.css' }
    ],
    script: [
      { src: '../js/jquery.pagination.min.js' },
      { src: '../js/AFLC_API.js' },
      // { src: '../js/WTMap.min.js' },
      { src: 'https://echarts.baidu.com/dist/echarts.min.js' }
    ]
  },
  data() {
    return {
      indexPl: 0,
      // isShow: this.show,
      popTitle: '提货派车单',
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
    showDiv(n, o) {
      return this.show
      console.log(this.show, 'isAdd1')
    }
  },
  watch: {
    types(n, o) {},
    info(n, o) {
      console.log(n, 'nnn1')
    }
  },
  mounted() {
    this.loadPagination()
  },
  methods: {
    loadPagination() {
      $('#pagination1').pagination({
        currentPage: this.currentPage,
        totalPage: this.pages,
        callback: async current => {
          $('#current1').text(current)
          let obj = await gateWayList(this.$axios, current, this.vo)
          this.getGateWayList = obj.list
          this.currentPage = obj.currentPage
          window.location.href = '#top'
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
      }
      this.indexPl = index
      let aurl = ''
      if (process.server) {
        aurl = 'http://localhost:3000'
      }
      // $axios
      //   .post(aurl + `/api/28-web/rangeEva/range/list`, {
      //     currentPage: 1,
      //     pageSize: 3,
      //     transportRangeId: this.linedataA.id,
      //     assessLevel: assessLevel
      //   })
      //   .then(res => {
      //     console.log(res, 'resresres')
      //     if (res.data.status === 200) {
      //       this.linedataF = res.data.data.list
      //     } else {
      //       layer.msg(res.data.errorInfo ? res.data.errorInfo : res.data.text)
      //     }
      //   })

      // this.indexPl
    },
    onTIJ() {
      let aurl = ''
      if (process.server) {
        aurl = 'http://localhost:3000'
      }
      if (!this.form.companyName.length) {
        this.ismobile = true
        this.falseMsg = '请输入公司名称'
        return false
      }
      if (!this.form.contactsName.length) {
        this.ismobile = true
        this.falseMsg = '请输入联系人'
        return false
      }
      if (!this.form.mobile.length) {
        this.ismobile = true
        this.falseMsg = '请输入电话'
        return false
      }
      if (this.form.mobile) {
        this.ismobile = false
        var validReg = window.AFLC_VALID
        if (!validReg.MOBILE.test(this.form.mobile)) {
          this.ismobile = true
          this.form.mobile = ''
          this.falseMsg = '请输入正确的电话'
          return false
        }
      }
      if (this.types == 1) {
        this.form.type = 1
        this.form.source = 1
      } else {
        this.form.type = 2
        this.form.source = 2
      }
      console.log(this.form, 'this.form')
      $axios
        .post(
          // /leavingmsg/
          // 插入物流公司留言信息表信息
          aurl + '/xlapi/28-web/leavingmsg/',
          this.form
        )
        .then(res => {
          console.log(res, 'ressss')
          if (res.data.status == 200) {
            layer.msg(
              '提交成功，客服稍后将会与您联系',
              {
                tiem: 3000
              },
              () => {}
            )
            this.$emit('close')
            this.form = {}
          } else {
            // res.data.status
          }
        })
    },
    // 留言类型（type  ） 1-入驻 2-推荐
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
    // top: 30% !important;
    .bot_pj {
      margin-left: 120px;
      margin-bottom: 50px;
      ul.pjul {
        display: inline-block;
        border: 1px #ccc solid;
        padding: 0 330px 20px 25px;
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
