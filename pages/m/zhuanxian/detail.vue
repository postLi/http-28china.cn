<template>
  <div>
    <MyTop>
      <div class="flex_3 f-36 flex">专线详情</div>
    </MyTop>
    <div class="content1">
      <div class="flex_sb">
        <div class="f-36 f_b f_w_b flex_3">
          {{ linedataA.startLocation }} ——{{ linedataA.endLocation }}
        </div>
        <div class="f-24 c-9 flex_1 flex_fe">
          {{ linedataA.browseNumber }}人浏览
        </div>
      </div>
      <div class="item flex_a margin_t_20">
        <img
          class="left margin_r_20"
          v-if="linedataA.rangeLogo"
          :src="linedataA.rangeLogo[0]">
        <img
          v-else
          class="left margin_r_20"
          :src="'/images/pic/bg' + linedataA.num + '.png'"
          alt="">
        <div class="right flex_f flex_js height_100">
          <div class="c-3 f-30 flex_a">
            {{ linedataA.publishName }}
            <img
              class="img-v margin_l_20"
              src="/m/zhuanxian/details-icon-vip.png" >
            <img
              class="img-s margin_l_20"
              src="/m/zhuanxian/zhuanxian_shou.png" >
          </div>
          <div class="flex_a">
            <img
              class="img-star"
              src="/m/zhuanxian/rate_star_yellow.png" >
            <img
              class="img-star"
              src="/m/zhuanxian/rate_star_gray.png" >
          </div>
        </div>
      </div>
    </div>

    <div class="content2">
      <div class="title f-28 c-9 flex_a f_w_b">
        专线信息
      </div>
      <div
        class="item flex_a"
        @click="clockMessage(0)">
        <div class="f-30 c-3">轻货价：</div>
        <div class="right flex_sb flex_1 height_100">
          <div class="f-30 flex_1">
            <span>{{ linedataA.v[0].endVolume ? linedataA.v[0].startVolume + '-' + linedataA.v[0].endVolume + '立方' : linedataA.v[0].startVolume + '立方以上' }}</span>
            <span
              class="margin_l_20"
              v-if="linedataA.v[0].discountPrice">￥{{ linedataA.v[0].discountPrice.toFixed(2) }}</span>
            <span
              class="margin_l_20"
              style="text-decoration:line-through;color: #333333"
              v-if="linedataA.v[0].primeryPrice">￥{{ linedataA.v[0].primeryPrice.toFixed(2) }}</span>
              <!--            <div class="right_r flex_a">-->
              <!--              低于行情价<span>13%</span>-->
              <!--            </div>-->
          </div>
          <img
            class="img_r"
            src="/m/zhuanxian/list_down_grey.png">
        </div>
      </div>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div
          class="show_item f-30"
          v-if="showMessage[0]">
          <div
            class="flex"
            v-for="(item,index1) in linedataA.v"
            :key="index1">
            <span>{{ item.endVolume ? item.startVolume + '-' + item.endVolume + '立方' : item.startVolume + '立方以上' }}</span>
            <span
              class="margin_l_20"
              v-if="item.discountPrice">{{ item.discountPrice.toFixed(2) }}元/立方</span>
            <span
              class="margin_l_20"
              style="text-decoration:line-through;color: #333333"
              v-if="item.primeryPrice">￥{{ item.primeryPrice.toFixed(2) }}元/立方</span>
          </div>
        </div>
      </transition>
      <div
        class="item flex_a"
        @click="clockMessage(1)">
        <div class="f-30 c-3">重货价：</div>
        <div class="right flex_sb flex_1 height_100">
          <div class="f-30 flex_1">
            <span>{{ linedataA.w[0].endVolume ? linedataA.w[0].startVolume + '-' + linedataA.w[0].endVolume + '公斤' : linedataA.w[0].startVolume + '公斤以上' }}</span>
            <span
              class="margin_l_20"
              v-if="linedataA.w[0].discountPrice">￥{{ linedataA.w[0].discountPrice.toFixed(2) }}</span>
            <span
              class="margin_l_20"
              style="text-decoration:line-through;color: #333333"
              v-if="linedataA.w[0].primeryPrice">￥{{ linedataA.w[0].primeryPrice.toFixed(2) }}</span>
          </div>
          <img
            class="img_r"
            src="/m/zhuanxian/list_down_grey.png">
        </div>
      </div>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div
          class="show_item f-30"
          v-if="showMessage[1]">
          <div
            class="flex"
            v-for="(item,index1) in linedataA.w"
            :key="index1">
            <span>{{ item.endVolume ? item.startVolume + '-' + item.endVolume + '公斤' : item.startVolume + '公斤以上' }}</span>
            <span
              class="margin_l_20"
              v-if="item.discountPrice">{{ item.discountPrice.toFixed(2) }}元/公斤</span>
            <span
              class="margin_l_20"
              style="text-decoration:line-through;color: #333333"
              v-if="item.primeryPrice">￥{{ item.primeryPrice.toFixed(2) }}元/公斤</span>
          </div>
        </div>
      </transition>
      <div class="footer flex_a f_f">
        <div class="footer_item flex f-24 margin_b_20">最低一票价格：{{ linedataA.lowerPrice?'￥'+linedataA.lowerPrice+'元':'面议' }}</div>
        <div class="footer_item flex f-24 margin_b_20">发车频率：{{ (linedataA.departureHzData?linedataA.departureHzData:'')+'天'+(linedataA.departureHzTime?linedataA.departureHzTime:'') +'次' }}</div>
        <div class="footer_item flex f-24 margin_b_20">时效：{{ linedataA.transportAging+linedataA.transportAgingUnit }}</div>
      </div>
    </div>
    <div class="divide"/>
    <div class="content3">
      <div class="cell padding_l_20 flex_a">
        <div class="left flex f_w f-28">竞争力</div>
        <div class="margin_l_20 f-26 f_b">此专线物流公司诚信值超过<span>{{ linedataE.greaterCreditRate }}%</span>的同行</div>
      </div>
      <div class="item2 flex_a">
        <div class="f-28">资质认证： <span class="c-3 f-26">{{ linedataE.qualificationNum }}项经营资质认证，{{ linedataE.serviceNum }}项平台物流服务标准监督</span></div>
      </div>
      <div
        class="item2 flex_sb"
        @click="showMask = true">
        <div class="f-28">担保交易： <span class="f_g f-26">{{ linedataB.collateral ? '物流运输保障服务' : '暂未开通' }}</span></div>
        <img src="/m/zhuanxian/list_right_grey.png">
      </div>
      <div
        class="item2 flex_sb"
        @click="clockMessage(2)">
        <div class="f-28 flex_a">
          增值服务：
          <span
            v-if="linedataB.otherServiceCode.includes('AF02504')"
            class="box flex f-26 f_w"
            style="background: #FFA800">送</span>
          <span
            v-if="linedataB.otherServiceCode.includes('AF02502')"
            class="box flex f-26 f_w"
            style="background: #4494F6">保</span>
          <span
            v-if="linedataB.otherServiceCode.includes('AF02503')"
            class="box flex f-26 f_w"
            style="background: #FFA800">付</span>
          <span
            v-if="linedataB.otherServiceCode.includes('AF02501')"
            class="box flex f-26 f_w"
            style="background: #4494F6">代</span>
          <span
            v-if="linedataB.otherServiceCode.includes('AF02505')"
            class="box flex f-26 f_w"
            style="background: #F96652">提</span>
          <span
            v-if="linedataB.otherServiceCode.includes('AF02506')"
            class="box flex f-26 f_w"
            style="background: #49AE17">票</span>
          <span
            v-if="linedataB.otherServiceCode.includes('AF02507')"
            class="box flex f-26 f_w"
            style="background: #FFA800">签</span>
          <span
            v-if="linedataB.otherServiceCode.includes('AF02508')"
            class="box flex f-26 f_w"
            style="background: #F96652">效</span>
        </div>
        <img src="/m/zhuanxian/list_right_grey.png">
      </div>
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <div
          class="show_item f-30"
          v-if="showMessage[2]">
          <div
            class="flex_r"
            v-if="linedataB.otherServiceCode.includes('AF02504')">
            <span
              class="box flex f-26 f_w"
              style="background: #FFA800">送</span>
            <div>
              <div>送货上门</div>
              <div class="margin_t_10 l_h">
                收取客户货物后，将货物送到指定收件对象的服务。
              </div>
            </div>
          </div>
          <div
            class="flex_r margin_t_20"
            v-if="linedataB.otherServiceCode.includes('AF02502')">
            <span
              class="box flex f-26 f_w"
              style="background: #4494F6">保</span>
            <div>
              <div>保价运输</div>
              <div class="margin_t_10 l_h">
                保价运输是我司与您共同确定的以托运人申明货物价值为基础的一种特殊运输方式，您向我司声明其托运货物的实际价值，按保价运输的货物，托运人除缴纳运输费用外，按照规定缴纳一定的保价费用，若货物在运输过程中出险，我司将按照托运人的声明价值赔偿一定损失。
              </div>
            </div>
          </div>
          <div
            class="flex_r margin_t_20"
            v-if="linedataB.otherServiceCode.includes('AF02503')">
            <span
              class="box flex f-26 f_w"
              style="background: #FFA800">付</span>
            <div>
              <div>运费到付</div>
              <div class="margin_t_10 l_h">
                为您提供派送末端支付运费服务，当货物到达收货人时由收货人支付运费
              </div>
            </div>
          </div>
          <div
            class="flex_r margin_t_20"
            v-if="linedataB.otherServiceCode.includes('AF02501')">
            <span
              class="box flex f-26 f_w"
              style="background: #4494F6">代</span>
            <div>
              <div>代收货款</div>
              <div class="margin_t_10 l_h">
                按照寄件方（卖家）与收件方（买家）达成交易协议的要求，为寄件方提供承运、寄递物品的同时，并代寄件方向收件方收取货款，同时按照约定时间将货款返还给寄件方的服务。
              </div>
            </div>
          </div>
          <div
            class="flex_r margin_t_20"
            v-if="linedataB.otherServiceCode.includes('AF02505')">
            <span
              class="box flex f-26 f_w"
              style="background: #F96652">提</span>
            <div>
              <div>上门提货</div>
              <div class="margin_t_10 l_h">
                照客户指令到指定地点收取货物的服务。
              </div>
            </div>
          </div>
          <div
            class="flex_r margin_t_20"
            v-if="linedataB.otherServiceCode.includes('AF02506')">
            <span
              class="box flex f-26 f_w"
              style="background: #49AE17">票</span>
            <div>
              <div>开发票</div>
              <div class="margin_t_10 l_h">
                客户可向物流公司申请开具货物运输发票。
              </div>
            </div>
          </div>
          <div
            class="flex_r margin_t_20"
            v-if="linedataB.otherServiceCode.includes('AF02507')">
            <span
              class="box flex f-26 f_w"
              style="background: #FFA800">签</span>
            <div>
              <div>签单回收</div>
              <div class="margin_t_10 l_h">
                在货物正常签收后，将寄件客户提供的需收件客户签名的收条或收货单等单据返还寄件客户的服务 。
              </div>
            </div>
          </div>
          <div
            class="flex_r margin_t_20"
            v-if="linedataB.otherServiceCode.includes('AF02508')">
            <span
              class="box flex f-26 f_w"
              style="background: #FFA800">效</span>
            <div>
              <div>时效保障</div>
              <div class="margin_t_10 l_h">
                承诺在规定时间内送达的时效保障服务。
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="divide"/>
    <div class="content4">
      <div class="cell flex_sb f-28 b_b">
        <div>
          <span class="c-3 margin_r_20">专线评价({{ linedataG.all }})</span>
          <span
            class="c-9"
            v-if="linedataE.evaGoodRate">好评率{{ linedataE.evaGoodRate }}%</span>
        </div>
        <div @click="toEvaluate()">
          <span class="margin_r_20 c-9">查看全部</span>
          <img
            class="array"
            src="/m/zhuanxian/list_right_grey.png">
        </div>
      </div>
      <div
        class="f-28 item2 flex"
        v-if="linedataF.length === 0">
        <p>此用户没有评论</p>
      </div>
      <div
        class="f-28 item2"
        v-for="(item, index) in linedataF"
        :key="index">
        <div class="flex_a f_w_b">
          <span class="margin_r_20">{{ item.evaluationName }}</span>
          <img
            v-for="( item, index ) in 4"
            :key="index"
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
        </div>
        <div>{{ item.evaluationDes }}</div>
      </div>
      <div class="item3 f-28 c-9 f_w_b flex_a">
        专线相关图片
      </div>
      <div class="item2 p_r">
        <div class="f-28 c-3 number">{{ currentImg }}/{{ linedataA.rangeLogo.length }}</div>
        <cube-slide
          v-if="linedataA.rangeLogo"
          ref="slide"
          :auto-play="false"
          :loop="false"
          :show-dots="false"
          :allow-vertical="true"
          :data="linedataA.rangeLogo"
          @change="changePage"
        >
          <cube-slide-item
            v-for="(item, index) in linedataA.rangeLogo"
            :key="index">
            <img
              class="img"
              :src="item">
          </cube-slide-item>
        </cube-slide>
        <div
          v-else
          class="flex f-28">
          还没有相关图片
        </div>
        <div
          class="c-3 f-28 margin_t_40"
          v-if="linedataA.transportRemark">
          {{ linedataA.transportRemark }}
        </div>
      </div>

    </div>
    <div class="divide"/>
    <div class="content5">
      <div class="b_t cell flex_ce f-28">
        <div
          class="flex button1 margin_r_20"
          @click="phone(linedataA.startLocationContactsMobile, linedataA.endLocationContactsMobile)">联系专线</div>
          <!--        <div class="flex button2">收 藏</div>-->
      </div>
    </div>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div
        class=" heightTran"
        v-if="showMask">
        <div class="b_c_w height_100">
          <div class="f-36 f_w_b title">什么是28快运担保交易？</div>
          <div class="f-28 flex f_b"><img src="/m/zhuanxian/baozhengjin.png">此承运商{{ linedataB.collateral ? `已交${linedataB.collateral}元` : '未缴纳' }}诚信保证金</div>
          <div class="padding_40">
            <div class="c-3 f-34 ">
              如果您采用平台的担保交易，您与承运商洽谈好价格后，要在平台上生成标准托运单，并把运费托管在平台上，如果承运商未能良好履约，您有权要求退回所有的运费。并根据托运单规定的规则条款，您有权对承运商要求相应的补偿。
            </div>
            <div class="c-9 f-26 margin_t_20">
              如果您线下私自与承运商进行交易，平台不承担任何协助您向承运商要求兑现承诺的义务。
            </div>
          </div>
          <div
            class="button f_w f_w_b f-36"
            @click="showMask = false">
            我知道了
          </div>
        </div>
      </div>
    </transition>
    <div
      :class="[showMask?'mask2':'']"
      @click="closeMask()"/>
  </div>
</template>
<script>
import MyTop from '../../../components/m/myTop'
import Vue from 'vue'
import { ActionSheet, Slide } from 'cube-ui'
Vue.use(ActionSheet)
Vue.use(Slide)
export default {
  components: { MyTop },
  layout: 'm',
  data() {
    return {
      showMask: false,
      showMessage: [false, false, false],
      currentImg: 1
    }
  },
  async asyncData({ $axios, app, query, error }) {
    // 专线详情
    let linedataA = await $axios.get(`/28-web/range/${query.id}`)
    if (linedataA.data.status === 200 && linedataA.data.data) {
      if (linedataA.data.data.rangeLogo) {
        linedataA.data.data.rangeLogo = linedataA.data.data.rangeLogo.split(',')
      }
      let v = [],
        w = []
      linedataA.data.data.rangePrices.forEach(item => {
        if (item.type === '0') {
          v.push(item)
        }
        if (item.type === '1') {
          w.push(item)
        }
      })
      linedataA.data.data.v = v
      linedataA.data.data.w = w
    }
    let item = linedataA.data.data
    let arr = (item.id || '').split('')
    let num = 0
    arr.forEach(el => {
      num += el.charCodeAt(0) || 0
    })
    item.num = (num % 30) + 1
    let [linedataB, linedataE, linedataF, linedataG] = await Promise.all([
      // 根据ID获取物流公司
      $axios.get(`/28-web/logisticsCompany/${query.publishId}`),
      // 物流公司综合信息
      $axios.post(
        `/28-web/logisticsCompany/comprehensive?companyId=${query.publishId}`
      ),
      // 专线评价列表
      $axios.post(`/28-web/rangeEva/range/list`, {
        currentPage: 1,
        pageSize: 1,
        transportRangeId: query.id,
        assessLevel: 'AF0360101' // 好评
      }),
      // 专线好中差总评价次数
      $axios.get(`/28-web/rangeEva/range/assessLevel/count?rangeId=${query.id}`)
    ])
    return {
      linedataA: linedataA.data.status === 200 ? linedataA.data.data : [],
      linedataB: linedataB.data.status === 200 ? linedataB.data.data : [],
      linedataE: linedataE.data.status === 200 ? linedataE.data.data : [],
      linedataF: linedataF.data.status === 200 ? linedataF.data.data.list : [],
      linedataG: linedataG.data.status === 200 ? linedataG.data.data : []
    }
  },
  methods: {
    changePage(current) {
      this.currentImg = current + 1
    },
    phone(s, e) {
      let obj_s = {},
        obj_e = {}
      if (s) {
        obj_s = { content: '出发地手机号码' }
      } else {
        obj_s = { content: '出发地还没有手机号码' }
      }
      if (e) {
        obj_e = { content: '到达地手机号码' }
      } else {
        obj_e = { content: '到达地还没有手机号码' }
      }
      let list = [obj_s, obj_e]
      this.$createActionSheet({
        title: '',
        pickerStyle: true,
        data: list,
        onSelect: (item, index) => {
          console.log(item)
          if (item.content === '出发地手机号码') {
            window.location.href = `tel:${s}`
          }
          if (item.content === '到达地手机号码') {
            window.location.href = `tel:${e}`
          }
        },
        onCancel: () => {}
      }).show()
    },
    clockMessage(i) {
      this.$set(this.showMessage, i, !this.showMessage[i])
    },
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
      } else {
        el.style.height = ''
      }
    },
    afterEnter(el) {
      el.style.height = ''
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = 0
      }
    },
    afterLeave(el) {
      el.style.height = ''
    },
    closeMask() {
      this.showMask = false
    },
    toEvaluate() {
      this.$router.push(`/m/zhuanxian/evaluate?id=${this.$route.query.id}`)
    }
  }
}
</script>
<style scoped lang="scss">
.content5 {
  .cell {
    height: 0.96rem;
    background: white;
    padding: 0 0.3rem;
    .button1 {
      width: 1.72rem;
      height: 0.6rem;
      border-radius: 0.3rem;
      color: #54a7ff;
      border: 0.02rem solid rgba(84, 167, 255, 1);
    }
    .button2 {
      width: 1.72rem;
      height: 0.6rem;
      border-radius: 0.3rem;
      color: #ff4400;
      border: 0.02rem solid #ff4400;
    }
  }
}
.content4 {
  .cell {
    height: 0.8rem;
    background: white;
    padding: 0 0.3rem;
  }
  .array {
    height: 0.2rem;
  }
  .item2 {
    padding: 0.3rem;
    .number {
      position: absolute;
      bottom: 0.62rem;
      right: 0.46rem;
      z-index: 100;
    }
    .img {
      /*height: 3.8rem;*/
      width: 100%;
      border-radius: 0.16rem;
      background: rgba(247, 247, 247, 1);
    }
  }
  .item3 {
    height: 0.88rem;
    padding: 0 0.3rem;
    background: #f4f4f4;
  }
}
.content3 {
  .cell {
    height: 0.88rem;
    background: white;
    .left {
      width: 1.05rem;
      height: 0.54rem;
      background: rgba(17, 186, 0, 1);
      border-radius: 0.04rem;
    }
    span {
      color: #ff4400;
    }
  }
  .show_item {
    transition: height 0.3s;
    overflow: hidden;
    background: #f4f4f4;
    padding: 0.1rem 0.2rem;
    .l_h {
      line-height: 0.32rem;
    }
  }
  .item2 {
    height: 0.88rem;
    background: white;
    padding: 0 0.3rem;
    img {
      height: 0.2rem;
    }
  }
}
.box {
  min-width: 0.36rem;
  height: 0.36rem;
  margin-right: 0.1rem;
}
.content2 {
  .title {
    padding: 0 0.3rem;
    height: 0.89rem;
    background: #f4f4f4;
  }
  .item {
    height: 1rem;
    padding: 0 0.3rem;
    .right {
      border-bottom: 0.01rem solid rgba(238, 238, 238, 1);
      span {
        color: #ff4400;
      }
      .right_r {
        margin-right: 0.1rem;
        height: 0.36rem;
        background: rgba(255, 209, 69, 1);
        border-radius: 0.04rem;
        opacity: 0.5;
      }
      .img_r {
        width: 0.2rem;
      }
    }
  }
  .show_item {
    transition: height 0.3s;
    overflow: hidden;
    background: #f4f4f4;
    padding: 0.1rem 0.2rem;
    div {
      height: 0.5rem;
      box-sizing: border-box;
    }
  }
  .footer {
    min-height: 0.9rem;
    padding: 0.2rem 0.3rem 0 0.3rem;
    .footer_item {
      height: 0.54rem;
      background: rgba(238, 238, 238, 1);
      border-radius: 0.27rem;
      color: #8a8d8f;
      padding: 0 0.18rem;
      margin-right: 0.16rem;
    }
  }
}
.content1 {
  height: 2.9rem;
  padding: 0.3rem;
  box-sizing: border-box;
  .item {
    height: 1.6rem;
    background: rgba(246, 248, 250, 1);
    border-radius: 0.1rem;
    padding: 0.2rem;
    box-sizing: border-box;
    .left {
      width: 1.2rem;
      height: 1.2rem;
    }
    .right {
      padding: 5px 0;
      box-sizing: border-box;
      .img-v {
        width: 0.28rem;
        height: 0.24rem;
      }
      .img-s {
        width: 0.32rem;
        height: 0.32rem;
      }
    }
  }
}
.img-star {
  width: 0.28rem;
  height: 0.28rem;
  margin-right: 0.08rem;
}
.heightTran {
  transition: all 0.3s;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  img {
    width: 0.42rem;
    height: 0.44rem;
    margin-right: 0.1rem;
  }
  .b_c_w {
    border-top-left-radius: 0.16rem;
    border-top-right-radius: 0.16rem;
    .title {
      text-align: center;
      padding-top: 0.31rem;
    }
    .f-28 {
      margin-top: 0.52rem;
    }
    .button {
      text-align: center;
      margin: 1.25rem 0.2rem 0.2rem 0.2rem;
      height: 0.96rem;
      line-height: 0.96rem;
      background: rgba(84, 167, 255, 1);
      border-radius: 0.16rem;
    }
  }
}
.mask2 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 13;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.divide {
  height: 0.2rem;
  background: #f5f5f5;
}
</style>
