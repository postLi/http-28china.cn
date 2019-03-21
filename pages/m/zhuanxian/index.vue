<template>
  <div class="flex_f flex_1">
    <div>
      <div class="flex_a f-26 b_b top b_c_w">
        <div
          class="flex_1 flex"
          :class="[isShowMask[0]?'f_g':'c-3']"
          @click="clickStart()">
          <span class="margin_r_10">{{ $store.state.m.zhuanxian.startName[0]===''?'全国': $store.state.m.zhuanxian.startName[2]===''?$store.state.m.zhuanxian.startName[1]:$store.state.m.zhuanxian.startName[2] }}</span>
          <div :class="[isShowMask[0]?'triangle-down-g':'triangle-down-9']"/>
        </div>
        <div
          class="flex_1 flex"
          :class="[isShowMask[1] === true?'f_g':'c-3']"
          @click="clickEnd()">
          <span class="margin_r_10">{{ $store.state.m.zhuanxian.endName[0]===''?'全国': $store.state.m.zhuanxian.endName[2]===''?$store.state.m.zhuanxian.endName[1]:$store.state.m.zhuanxian.endName[2] }}</span>
          <div :class="[isShowMask[1]?'triangle-down-g':'triangle-down-9']"/>
        </div>
        <div
          class="flex_1 flex"
          @click="clickReputation()">
          <span class="margin_r_10">信誉最高</span>
          <div :class="[isShowMask[2]?'triangle-down-g':'triangle-down-9']"/>
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
      </div>
    </div>

    <div
      v-if="$store.state.m.zhuanxian.pages === 0"
      class="flex f-26">
      没有相关数据
    </div>

    <cube-scroll
      ref="scroll"
      :scroll-events="['scroll-end']"
      class="mScroll flex_1"
      :data="$store.state.m.zhuanxian.rangeList"
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp"
      @scroll-end="getScroll"
    >
      <div
        class="item"
        v-for="(item, index) in $store.state.m.zhuanxian.rangeList"
        :key="index"
        @click="clickRange(item.id)"
      >
        <div class="title c-3 f-26 b_b flex_a">
          <span>{{ item.companyName }}</span>
          <img
            class="img-v margin_l_20"
            src="/m/zhuanxian/details-icon-vip.png" >
        </div>
        <div class="flex_sb">
          <div>
            <div class="f-36 f_w_b">{{ item.startCity }} {{ item.startArea }} -- {{ item.endCity }} {{ item.endArea }}</div>
            <div class="time f-20 c-9">
              <span>时效{{ item.transportAging }}{{ item.transportAgingUnit }}</span>
              <span class="margin_l_20">{{ item.browseNumber }}人浏览</span>
            </div>
          </div>
          <div>
            <img
              class="img-v margin_l_20"
              src="/m/zhuanxian/details-icon-vip.png" >
          </div>
        </div>
        <div class="f-20">
          轻货：{{ item.lightPrice }}元/m³ 重货：{{ item.weightPrice }}元/公斤
        </div>
      </div>
    </cube-scroll>
  </div>

</template>

<script>
import SelectAddress from '../../../components/m/selectAddress'
import Vue from 'vue'
import { Scroll } from 'cube-ui'
Vue.use(Scroll)
export default {
  name: 'PageZhuanXian',
  components: { SelectAddress },
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
  mounted() {
    this.$nextTick(() => {
      this.$refs.scroll.scrollTo(0, this.$store.state.m.zhuanxian.scrollTo)
    })
  },
  methods: {
    clickRange(id) {
      this.$router.push(`/m/zhuanxian/detail?id=${id}`)
    },
    onPullingDown() {
      this.$store.commit('m/zhuanxian/setData', {
        name: 'currentPage',
        data: 1
      })
      this.$store.commit('m/zhuanxian/setData', {
        name: 'rangeList',
        data: []
      })
      this.getRangeList()
    },
    onPullingUp() {
      this.getRangeList()
    },
    getScroll(obj) {
      this.$store.commit('m/zhuanxian/setData', {
        name: 'scrollTo',
        data: obj.y
      })
    },
    getRangeList() {
      console.log(this.$store.state.m.zhuanxian.currentPage)
      console.log(this.$store.state.m.zhuanxian.pages)
      if (
        this.$store.state.m.zhuanxian.currentPage >
        this.$store.state.m.zhuanxian.pages
      ) {
        this.$refs.scroll.forceUpdate()
        // return
      }
      let parm = {
        currentPage: this.$store.state.m.zhuanxian.currentPage,
        pageSize: 20,
        startProvince: this.$store.state.m.zhuanxian.startName[0],
        startCity: this.$store.state.m.zhuanxian.startName[1],
        startArea: this.$store.state.m.zhuanxian.startName[2],
        endProvince: this.$store.state.m.zhuanxian.endName[0],
        endCity: this.$store.state.m.zhuanxian.endName[1],
        endArea: this.$store.state.m.zhuanxian.endName[2]
      }
      // 专线列表
      this.$store.dispatch('m/zhuanxian/GETRANGELIST', {
        data: parm,
        name: 'rangeList'
      })
    },
    clickStart() {
      this.$set(this.isShowMask, 1, false)
      this.$refs.selectEndAddress.showMask = false
      this.$set(this.isShowMask, 0, !this.isShowMask[0])
      this.$refs.selectStartAddress.showMask = !this.$refs.selectStartAddress
        .showMask
    },
    clickEnd() {
      this.$set(this.isShowMask, 0, false)
      this.$refs.selectStartAddress.showMask = false
      this.$set(this.isShowMask, 1, !this.isShowMask[1])
      this.$refs.selectEndAddress.showMask = !this.$refs.selectEndAddress
        .showMask
    },
    clickReputation() {
      console.log(this.$store.state.m.zhuanxian.rangeList)
    },
    getStartArea(data) {
      this.$set(this.isShowMask, 0, false)
      if (data) {
        this.$store.dispatch('m/zhuanxian/SETDATA', {
          data: data,
          name: 'startName'
        })
        this.onPullingDown()
      }
    },
    getEndArea(data) {
      this.$set(this.isShowMask, 1, false)
      if (data) {
        this.$store.dispatch('m/zhuanxian/SETDATA', {
          data: data,
          name: 'endName'
        })
        this.onPullingDown()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.top {
  height: 0.55rem;
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
  .time {
    margin-top: 0.1rem;
  }
}
.triangle-down-g {
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 5px solid #2fb301;
}
.triangle-down-9 {
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 5px solid #999999;
}
</style>
