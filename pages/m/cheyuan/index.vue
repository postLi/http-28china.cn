<template>
  <div class="flex_f flex_1">
    <div>
      <div class="flex_a f-26 b_b page_view_top b_c_w">
        <div
          class="flex_1 flex"
          :class="[isShowMask[0]?'f_b':'c-3']"
          @click="clickStart()">
          <span class="margin_r_10">{{ $store.state.m.cheyuan.startName[0]===''?'全国': $store.state.m.cheyuan.startName[2]===''?$store.state.m.cheyuan.startName[1]:$store.state.m.cheyuan.startName[2] }}</span>
          <div :class="[isShowMask[0]?'page_view_triangle-down-g':'page_view_triangle-down-9']"/>
        </div>
        <div
          class="flex_1 flex"
          :class="[isShowMask[1] === true?'f_b':'c-3']"
          @click="clickEnd()">
          <span class="margin_r_10">{{ $store.state.m.cheyuan.endName[0]===''?'全国': $store.state.m.cheyuan.endName[2]===''?$store.state.m.cheyuan.endName[1]:$store.state.m.cheyuan.endName[2] }}</span>
          <div :class="[isShowMask[1]?'page_view_triangle-down-g':'page_view_triangle-down-9']"/>
        </div>
        <div
          class="flex_1 flex"
          @click="clickRelease()">
          <span
            class="margin_r_10"
            :class="[isShowMask[2] === true?'f_b':'c-3']">{{ $store.state.m.cheyuan.orderBy.name }}</span>
          <div :class="[isShowMask[2]?'page_view_triangle-down-g':'page_view_triangle-down-9']"/>
        </div>
        <div
          class="flex_1 flex"
          @click="clickScreen()">
          <span
            class="margin_r_10"
            :class="[isShowMask[3] === true?'f_b':'c-3']">筛选</span>
          <div :class="[isShowMask[3]?'page_view_triangle-down-g':'page_view_triangle-down-9']"/>
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
        <Release
          top="auto"
          form="cheyuan"
          ref="selectRelease"
          @setArea="getRelease"/>
        <screen
          top="auto"
          form="cheyuan"
          ref="selectScreen"
          @setArea="getScreen"/>
      </div>
    </div>

    <div
      v-if="$store.state.m.cheyuan.pages === 0"
      class="flex f-26 margin_t_40">
      没有相关数据
    </div>

    <cube-scroll
      ref="scroll1"
      :scroll-events="['scroll-end']"
      class="mScroll flex_1"
      :data="$store.state.m.cheyuan.rangeList"
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp"
      @scroll-end="getScroll"
    >
      <div
        class="item"
        v-for="(item, index) in $store.state.m.cheyuan.rangeList"
        :key="index"
        @click="clickRange(item.id)"
      >
        <div class="title c-3 f-26 b_b flex_sb">
          <div class="flex_a">
            <span>{{ item.carTypeName? item.carTypeName + ' |': '' }}</span>
            <span class="margin_l_10">{{ item.carLength ? item.carLength + '米 |': '' }}</span>
            <span class="margin_l_10">{{ item.carLoad ? '载重' + item.carLoad + '吨': '' }}</span>
          </div>
          <span class="c-9">{{ item.startTime ? item.startTime : '随时' }}发车</span>
        </div>
        <div class="flex_sb">

          <div class="l_h">
            <div class="flex_a p_r">
              <div class="divide"/>
              <div class="green"/>
              <div class="f-32 f_w_b margin_l_20">{{ item.startCity }} {{ item.startArea }}</div>
            </div>
            <div class="flex_a">
              <div class="red"/>
              <div class="f-32 f_w_b margin_l_20">{{ item.endCity }} {{ item.endArea }}</div>
            </div>
          </div>

          <div class="f_40 f-32 flex_a">
            {{ item.expectPrice? '￥' + item.expectPrice + '元':'面议' }}
            <a
              :href="'tel:' + item.phone"
              style="display: contents;">
              <img
                class="img-p margin_l_10"
                src="/m/zhuanxian/phone.png"
                @click.stop="">
            </a>
          </div>
        </div>
        <div class="f-28 margin_t_20 flex_sb">
          <div class="flex_a">
            <img
              class="img_2"
              src="/m/huoyuan/huoyuandt_dinwei.png">
              <!--            <span class="margin_l_10 f_b">距离您<span class="f_40">6.5</span>公里</span>-->
          </div>
          <span class="c-9">{{ item.myTime }}前发布</span>
        </div>
      </div>
    </cube-scroll>
  </div>

</template>

<script>
import SelectAddress from '../../../components/m/selectAddress'
import Vue from 'vue'
import { Scroll } from 'cube-ui'
import Release from '../../../components/m/release'
import Screen from '../../../components/m/screen'
Vue.use(Scroll)
export default {
  name: 'PageCheYuan',
  components: { Screen, Release, SelectAddress },
  data() {
    return {
      isShowMask: [false, false, false, false],
      options: {
        pullDownRefresh: { txt: ' ' },
        pullUpLoad: { txt: { more: '', noMore: '没有更多数据了' } },
        scrollbar: true
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scroll1.scrollTo(0, this.$store.state.m.cheyuan.scrollTo)
    })
  },
  methods: {
    clickRange(id) {
      this.$router.push(`/m/cheyuan/detail?id=${id}`)
    },
    onPullingDown() {
      this.$store.commit('m/cheyuan/setData', {
        name: 'currentPage',
        data: 1
      })
      this.$store.commit('m/cheyuan/setData', {
        name: 'rangeList',
        data: []
      })
      this.getRangeList()
    },
    onPullingUp() {
      this.getRangeList()
    },
    getScroll(obj) {
      this.$store.commit('m/cheyuan/setData', {
        name: 'scrollTo',
        data: obj.y
      })
    },
    getRangeList() {
      console.log(this.$store.state.m.cheyuan.currentPage)
      console.log(this.$store.state.m.cheyuan.pages)
      if (
        this.$store.state.m.cheyuan.currentPage >
        this.$store.state.m.cheyuan.pages
      ) {
        this.$refs.scroll1.forceUpdate()
        // return
      }
      let parm = {
        currentPage: this.$store.state.m.cheyuan.currentPage,
        pageSize: 20,
        startProvince: this.$store.state.m.cheyuan.startName[0],
        startCity: this.$store.state.m.cheyuan.startName[1],
        startArea: this.$store.state.m.cheyuan.startName[2],
        endProvince: this.$store.state.m.cheyuan.endName[0],
        endCity: this.$store.state.m.cheyuan.endName[1],
        endArea: this.$store.state.m.cheyuan.endName[2],
        orderBy: this.$store.state.m.cheyuan.orderBy.value,
        carSpec: this.$store.state.m.cheyuan.carSpec,
        carType: this.$store.state.m.cheyuan.carType
      }
      // 列表
      this.$store.dispatch('m/cheyuan/GETRANGELIST', {
        data: parm,
        name: 'rangeList'
      })
    },
    clickStart() {
      this.isShowMask = [false, false, false, false]
      this.$refs.selectEndAddress.showMask = false
      this.$refs.selectRelease.showMask = false
      this.$refs.selectScreen.showMask = false
      this.$set(this.isShowMask, 0, !this.isShowMask[0])
      this.$refs.selectStartAddress.showMask = !this.$refs.selectStartAddress
        .showMask
    },
    clickEnd() {
      this.isShowMask = [false, false, false, false]
      this.$refs.selectStartAddress.showMask = false
      this.$refs.selectRelease.showMask = false
      this.$refs.selectScreen.showMask = false
      this.$set(this.isShowMask, 1, !this.isShowMask[1])
      this.$refs.selectEndAddress.showMask = !this.$refs.selectEndAddress
        .showMask
    },
    clickRelease() {
      this.isShowMask = [false, false, false, false]
      this.$refs.selectStartAddress.showMask = false
      this.$refs.selectEndAddress.showMask = false
      this.$refs.selectScreen.showMask = false
      this.$set(this.isShowMask, 2, !this.isShowMask[2])
      this.$refs.selectRelease.showMask = !this.$refs.selectRelease.showMask
    },
    clickScreen() {
      this.isShowMask = [false, false, false, false]
      this.$refs.selectStartAddress.showMask = false
      this.$refs.selectEndAddress.showMask = false
      this.$refs.selectRelease.showMask = false
      this.$set(this.isShowMask, 3, !this.isShowMask[3])
      this.$refs.selectScreen.showMask = !this.$refs.selectScreen.showMask
    },
    getStartArea(data) {
      this.$set(this.isShowMask, 0, false)
      if (data) {
        this.$store.dispatch('m/cheyuan/SETDATA', {
          data: data,
          name: 'startName'
        })
        this.onPullingDown()
      }
    },
    getEndArea(data) {
      this.$set(this.isShowMask, 1, false)
      if (data) {
        this.$store.dispatch('m/cheyuan/SETDATA', {
          data: data,
          name: 'endName'
        })
        this.onPullingDown()
      }
    },
    getRelease(data) {
      this.$set(this.isShowMask, 2, false)
      if (data) {
        this.$store.commit('m/cheyuan/setData', {
          name: 'orderBy',
          data: data
        })
        this.onPullingDown()
      }
    },
    getScreen(data) {
      this.$set(this.isShowMask, 3, false)
      console.log(data)
      if (data) {
        this.$store.commit('m/cheyuan/setData', {
          name: 'carSpec',
          data: data.carSpec
        })
        this.$store.commit('m/cheyuan/setData', {
          name: 'carType',
          data: data.carType
        })
        this.onPullingDown()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  margin-top: 0.1rem;
  height: 2.6rem;
  background: white;
  padding: 0 0.3rem 0.3rem 0.3rem;
  .title {
    height: 0.88rem;
  }
  .img_2 {
    width: 0.21rem;
    height: 0.26rem;
  }
}
.l_h {
  line-height: 0.65rem;
}
.green {
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 0.18rem;
  background: rgba(30, 176, 2, 1);
}
.red {
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 0.18rem;
  background: rgba(255, 68, 0, 1);
}
.divide {
  position: absolute;
  bottom: -0.16rem;
  left: 0.07rem;
  width: 1px;
  height: 0.34rem;
  background: #d8d8d8;
}
.img-p {
  width: 0.44rem;
}
</style>
