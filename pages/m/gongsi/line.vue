<template>
  <div class="body flex_f">
    <MyTop>
      <div class="flex_3 f-36 flex">公司全部网点</div>
    </MyTop>
    <div class="flex_f flex_1">
      <div>
        <div class="flex_a f-26 b_b page_view_top b_c_w">
          <div
            class="flex_1 flex"
            :class="[isShowMask[0]?'f_b':'c-3']"
            @click="clickStart()">
            <span class="margin_r_10">{{ $store.state.m.gongsi.line.startName[0]===''?'全国': $store.state.m.gongsi.line.startName[2]===''?$store.state.m.gongsi.line.startName[1]:$store.state.m.gongsi.line.startName[2] }}</span>
            <div :class="[isShowMask[0]?'page_view_triangle-down-g':'page_view_triangle-down-9']"/>
          </div>
          <div
            class="flex_1 flex"
            :class="[isShowMask[1] === true?'f_b':'c-3']"
            @click="clickEnd()">
            <span class="margin_r_10">{{ $store.state.m.gongsi.line.endName[0]===''?'全国': $store.state.m.gongsi.line.endName[2]===''?$store.state.m.gongsi.line.endName[1]:$store.state.m.gongsi.line.endName[2] }}</span>
            <div :class="[isShowMask[1]?'page_view_triangle-down-g':'page_view_triangle-down-9']"/>
          </div>
          <div
            class="flex_1 flex"
            @click="clickReputation()">
            <span
              class="margin_r_10"
              :class="[isShowMask[2] === true?'f_b':'c-3']">{{ $store.state.m.gongsi.line.orderBy.name }}</span>
            <div :class="[isShowMask[2]?'page_view_triangle-down-g':'page_view_triangle-down-9']"/>
          </div>
        </div>
        <div class="p_r">
          <SelectAddress
            top="auto"
            ref="selectStartAddress"
            @setArea="getStartArea"/>
          <SelectAddress
            top="auto"
            ref="selectEndAddress"
            @setArea="getEndArea"/>
          <Reputation
            top="auto"
            form="gongsiLine"
            ref="selectReputation"
            @setArea="getReputation"/>
        </div>
      </div>

      <div
        v-if="$store.state.m.gongsi.line.pages === 0"
        class="flex f-26 margin_t_40">
        没有相关数据
      </div>
      <cube-scroll
        ref="scroll"
        :scroll-events="['scroll-end']"
        class="mScroll flex_1"
        :data="$store.state.m.gongsi.line.rangeList"
        :options="options"
        @pulling-down="onPullingDown"
        @pulling-up="onPullingUp"
        @scroll-end="getScroll"
      >
        <div
          class="item"
          v-for="(item, index) in $store.state.m.gongsi.line.rangeList"
          :key="index"
          @click="clickRange(item.id,item.publishId)"
        >
          <div class="title c-3 f-30 b_b flex_sb">
            <div class="flex_a">
              <span>{{ item.companyName }}</span>
              <img
                class="img-v margin_l_20"
                src="/m/zhuanxian/details-icon-vip.png" >
            </div>
            <div class="flex_a f-20 f_w">
              <div class="shou flex">授</div>
              <div class="jian margin_l_10 flex">荐</div>
            </div>
          </div>
          <div class="l_h">
            <div class="width_100">
              <div class="f-36 f_w_b flex_sb">
                <div class="flex_a">
                  <span>{{ item.startCity }} {{ item.startArea }} -- {{ item.endCity }} {{ item.endArea }}</span>
                  <span
                    class="margin_l_20 f_w f-20 f_w_b flex rs"
                    v-if="item.rangeType === 'AF03302'">优 势</span>
                  <span
                    class="margin_l_20 f_w f-20 f_w_b flex qs"
                    v-if="item.rangeType === 'AF03303'">强 势</span>
                </div>

                <img
                  class="img-p margin_l_20"
                  src="/m/zhuanxian/phone.png"
                  @click.stop="phone(item.startLocationContactsMobile, item.endLocationContactsMobile)"
                >
              </div>
              <div class="time f-20 c-9">
                <span class="time_b">时效{{ item.transportAging }}{{ item.transportAgingUnit }}</span>
                <span class="margin_l_20 time_b">{{ item.browseNumber }}人浏览</span>
              </div>
            </div>
            <div class="f-24 f_40">
              轻货：{{ item.lightPrice }}元/m³ 重货：{{ item.weightPrice }}元/公斤
            </div>
          </div>

        </div>
      </cube-scroll>
    </div>
  </div>


</template>

<script>
import SelectAddress from '../../../components/m/selectAddress'
import Reputation from '../../../components/m/reputation'
import MyTop from '../../../components/m/myTop'
import Vue from 'vue'
import { ActionSheet, Scroll } from 'cube-ui'
Vue.use(ActionSheet)
Vue.use(Scroll)
export default {
  layout: 'm',
  components: { SelectAddress, Reputation, MyTop },
  data() {
    return {
      isShowMask: [false, false, false],
      options: {
        pullDownRefresh: { txt: ' ' },
        pullUpLoad: { txt: { more: '', noMore: '没有更多数据了' } },
        scrollbar: true
      }
    }
  },
  async fetch({ $axios, store, query }) {
    if (store.state.m.gongsi.line.rangeList.length === 0) {
      let parm = {
        publishId: query.id,
        currentPage: store.state.m.gongsi.line.currentPage,
        pageSize: 20,
        startProvince: store.state.m.gongsi.line.startName[0],
        startCity: store.state.m.gongsi.line.startName[1],
        startArea: store.state.m.gongsi.line.startName[2],
        endProvince: store.state.m.gongsi.line.endName[0],
        endCity: store.state.m.gongsi.line.endName[1],
        endArea: store.state.m.gongsi.line.endName[2],
        orderBy: store.state.m.gongsi.line.orderBy.value
      }
      // 公司专线列表
      return store.dispatch('m/gongsi/line/GETLIST', {
        data: parm,
        name: 'rangeList'
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scroll.scrollTo(0, this.$store.state.m.gongsi.line.scrollTo)
    })
  },
  methods: {
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
    clickRange(id, publishId) {
      this.$router.push(`/m/zhuanxian/detail?id=${id}&publishId=${publishId}`)
    },
    onPullingDown() {
      this.$nextTick(() => {
        this.$refs.scroll.scrollTo(0, 0)
      })
      this.$store.commit('m/gongsi/line/setData', {
        name: 'scrollTo',
        data: 0
      })
      this.$store.commit('m/gongsi/line/setData', {
        name: 'currentPage',
        data: 1
      })
      this.$store.commit('m/gongsi/line/setData', {
        name: 'rangeList',
        data: []
      })
      this.getRangeList()
    },
    onPullingUp() {
      this.getRangeList()
    },
    getScroll(obj) {
      this.$store.commit('m/gongsi/line/setData', {
        name: 'scrollTo',
        data: obj.y
      })
    },
    getRangeList() {
      console.log(this.$store.state.m.gongsi.line.currentPage)
      console.log(this.$store.state.m.gongsi.line.pages)
      if (
        this.$store.state.m.gongsi.line.currentPage >
        this.$store.state.m.gongsi.line.pages
      ) {
        this.$refs.scroll.forceUpdate()
        // return
      }
      let parm = {
        publishId: this.$route.query.id,
        currentPage: this.$store.state.m.gongsi.line.currentPage,
        pageSize: 20,
        startProvince: this.$store.state.m.gongsi.line.startName[0],
        startCity: this.$store.state.m.gongsi.line.startName[1],
        startArea: this.$store.state.m.gongsi.line.startName[2],
        endProvince: this.$store.state.m.gongsi.line.endName[0],
        endCity: this.$store.state.m.gongsi.line.endName[1],
        endArea: this.$store.state.m.gongsi.line.endName[2],
        orderBy: this.$store.state.m.gongsi.line.orderBy.value
      }
      // 公司专线列表
      this.$store.dispatch('m/gongsi/line/GETLIST', {
        data: parm,
        name: 'rangeList'
      })
    },
    clickStart() {
      this.isShowMask = [false, false, false]
      this.$refs.selectEndAddress.showMask = false
      this.$refs.selectReputation.showMask = false
      this.$set(this.isShowMask, 0, !this.isShowMask[0])
      this.$refs.selectStartAddress.showMask = !this.$refs.selectStartAddress
        .showMask
    },
    clickEnd() {
      this.isShowMask = [false, false, false]
      this.$refs.selectStartAddress.showMask = false
      this.$refs.selectReputation.showMask = false
      this.$set(this.isShowMask, 1, !this.isShowMask[1])
      this.$refs.selectEndAddress.showMask = !this.$refs.selectEndAddress
        .showMask
    },
    clickReputation() {
      this.isShowMask = [false, false, false]
      this.$refs.selectStartAddress.showMask = false
      this.$refs.selectEndAddress.showMask = false
      this.$set(this.isShowMask, 2, !this.isShowMask[2])
      this.$refs.selectReputation.showMask = !this.$refs.selectReputation
        .showMask
    },
    getStartArea(data) {
      this.$set(this.isShowMask, 0, false)
      if (data) {
        this.$store.dispatch('m/gongsi/line/SETDATA', {
          data: data,
          name: 'startName'
        })
        this.onPullingDown()
      }
    },
    getEndArea(data) {
      this.$set(this.isShowMask, 1, false)
      if (data) {
        this.$store.dispatch('m/gongsi/line/SETDATA', {
          data: data,
          name: 'endName'
        })
        this.onPullingDown()
      }
    },
    getReputation(data) {
      this.$set(this.isShowMask, 2, false)
      if (data) {
        this.$store.commit('m/gongsi/line/setData', {
          name: 'orderBy',
          data: data
        })
        this.onPullingDown()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.body {
  height: inherit;
}
.item {
  margin-top: 0.1rem;
  height: 2.6rem;
  background: white;
  padding: 0 0.2rem 0.2rem 0.2rem;
  .title {
    height: 0.88rem;
    .img-v {
      width: 0.28rem;
      height: 0.24rem;
    }
  }
  .l_h {
    line-height: 0.44rem;
    padding: 0.3rem 0;
    .img-p {
      width: 0.44rem;
    }
    .time {
      margin-top: 0.1rem;
      .time_b {
        height: 0.32rem;
        background: rgba(238, 238, 238, 1);
        border-radius: 0.16rem;
        padding: 0.05rem 0.1rem;
      }
    }
  }
}
.shou {
  width: 0.32rem;
  height: 0.32rem;
  background: rgba(101, 168, 255, 1);
  border-radius: 0.04rem;
}
.jian {
  width: 0.32rem;
  height: 0.32rem;
  background: rgba(255, 68, 0, 1);
  border-radius: 0.04rem;
}
.qs {
  width: 0.66rem;
  height: 0.32rem;
  background: rgba(60, 146, 239, 1);
  border-radius: 0.04rem;
}
.rs {
  width: 0.66rem;
  height: 0.32rem;
  background: rgba(250, 211, 56, 1);
  border-radius: 0.04rem;
}
</style>
