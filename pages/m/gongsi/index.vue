<template>
  <div class="flex_f flex_1">
    <div>
      <div class="flex_a f-26 b_b page_view_top b_c_w">
        <div
          class="flex_1 flex"
          :class="[isShowMask[0]?'f_b':'c-3']"
          @click="clickStart()">
          <span class="margin_r_10">{{ $store.state.m.gongsi.startName[0]===''?'全国': $store.state.m.gongsi.startName[1] }}</span>
          <div :class="[isShowMask[0]?'page_view_triangle-down-g':'page_view_triangle-down-9']"/>
        </div>
        <div
          class="flex_1 flex"
          @click="clickRelease()">
          <span
            class="margin_r_10"
            :class="[isShowMask[1] === true?'f_b':'c-3']">{{ $store.state.m.gongsi.orderBy.name }}</span>
          <div :class="[isShowMask[1]?'page_view_triangle-down-g':'page_view_triangle-down-9']"/>
        </div>
        <div class="flex_1 flex_ce margin_r_40">
          <img
            class="search"
            @click="search()"
            src="/m/gongsi/wuliugs_chaxun.png">
        </div>
      </div>
      <div class="p_r">
        <SelectAddress
          top="auto"
          ref="selectStartAddress"
          @setArea="getStartArea"/>
        <Release
          top="auto"
          form="gongsi"
          ref="selectRelease"
          @setArea="getRelease"/>
      </div>
    </div>
    <div
      v-if="$store.state.m.gongsi.pages === 0"
      class="flex f-26 margin_t_40">
      没有相关数据
    </div>

    <cube-scroll
      ref="scroll1"
      :scroll-events="['scroll-end']"
      class="mScroll flex_1"
      :data="$store.state.m.gongsi.rangeList"
      :options="options"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp"
      @scroll-end="getScroll"
    >
      <div
        class="item"
        v-for="(item, index) in $store.state.m.gongsi.rangeList"
        :key="index"
        @click="clickRange(item.id)"
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
          <div class="f-36 f_w_b flex_a content_h">
            <img
              class="img-left margin_l_20 margin_r_20"
              v-if="item.companyFacadeFile"
              :src="item.companyFacadeFile"
            >
            <img
              v-else
              class="img-left margin_l_20 margin_r_20"
              src="/gongsi/images/moren.png">
            <div class="flex_1 height_100">
              <div class="flex_sb margin_b_10">
                <img
                  class="img-s"
                  src="/images/huizong/icon_huangguan.gif"
                >
                <span class="time_b f-20 c-9 flex">{{ item.browseNumber }}人浏览</span>
              </div>
              <div class="flex_sb f-28 c-9">
                <div class="threeElisp">{{ item.allServiceNameList.join(',') }}</div>
                <a :href="'tel:' + item.mobile">
                  <img
                    class="img-p"
                    src="/m/zhuanxian/phone.png"
                    @click.stop="">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </cube-scroll>
  </div>
</template>
<script>
import SelectAddress from '../../../components/m/selectAddressGongSi'
import Release from '../../../components/m/release'
export default {
  name: 'PageGongSi',
  components: { Release, SelectAddress },
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
      this.$refs.scroll1.scrollTo(0, this.$store.state.m.gongsi.scrollTo)
    })
  },
  methods: {
    search() {
      //
    },
    clickStart() {
      this.isShowMask = [false, false, false]
      this.$refs.selectRelease.showMask = false
      this.$set(this.isShowMask, 0, !this.isShowMask[0])
      this.$refs.selectStartAddress.showMask = !this.$refs.selectStartAddress
        .showMask
    },

    clickRelease() {
      this.isShowMask = [false, false, false]
      this.$refs.selectStartAddress.showMask = false
      this.$set(this.isShowMask, 1, !this.isShowMask[1])
      this.$refs.selectRelease.showMask = !this.$refs.selectRelease.showMask
    },
    clickRange(id) {
      this.$router.push(`/m/gongsi/detail?id=${id}`)
    },
    getStartArea(data) {
      this.$set(this.isShowMask, 0, false)
      if (data) {
        this.$store.dispatch('m/gongsi/SETDATA', {
          data: data,
          name: 'startName'
        })
        this.onPullingDown()
      }
    },
    getRelease(data) {
      this.$set(this.isShowMask, 1, false)
      if (data) {
        this.$store.commit('m/gongsi/setData', {
          name: 'orderBy',
          data: data
        })
        //this.onPullingDown()
      }
    },
    onPullingDown() {
      this.$store.commit('m/gongsi/setData', {
        name: 'currentPage',
        data: 1
      })
      this.$store.commit('m/gongsi/setData', {
        name: 'rangeList',
        data: []
      })
      this.getRangeList()
    },
    onPullingUp() {
      this.getRangeList()
    },
    getScroll(obj) {
      this.$store.commit('m/gongsi/setData', {
        name: 'scrollTo',
        data: obj.y
      })
    },
    getRangeList() {
      console.log(this.$store.state.m.gongsi.currentPage)
      console.log(this.$store.state.m.gongsi.pages)
      if (
        this.$store.state.m.gongsi.currentPage >
        this.$store.state.m.gongsi.pages
      ) {
        this.$refs.scroll1.forceUpdate()
        // return
      }
      let parm = {
        currentPage: this.$store.state.m.gongsi.currentPage,
        pageSize: 20,
        province: this.$store.state.m.gongsi.startName[0],
        city: this.$store.state.m.gongsi.startName[1],
        orderBy: this.$store.state.m.gongsi.orderBy.value
      }
      // 公司列表
      this.$store.dispatch('m/gongsi/GETRANGELIST', {
        data: parm,
        name: 'rangeList'
      })
    }
  }
}
</script>
<style scoped lang="scss">
.search {
  width: 0.42rem;
  height: 0.44rem;
}
.item {
  margin-top: 0.1rem;
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
    padding: 0.2rem 0;
  }
  .content_h {
    height: 1.55rem;
  }
  .img-left {
    width: 1.55rem;
    height: 1.55rem;
  }
  .img-s {
    width: 0.28rem;
  }
  .img-p {
    width: 0.44rem;
  }
  .time_b {
    height: 0.32rem;
    background: rgba(238, 238, 238, 1);
    border-radius: 0.16rem;
    padding: 0.05rem 0.1rem;
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
.threeElisp {
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  line-height: 0.33rem;
}
</style>
