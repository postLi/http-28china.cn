<template>
  <div class="flex_f flex_1">
    <div>
      <div class="flex_a f-26 b_b page_view_top b_c_w">
        <div
          class="flex_1 flex"
          :class="[isShowMask[0]?'f_g':'c-3']"
          @click="clickStart()">
          <span class="margin_r_10">{{ $store.state.m.gongsi.startName[0]===''?'全国': $store.state.m.gongsi.startName[2]===''?$store.state.m.gongsi.startName[1]:$store.state.m.gongsi.startName[2] }}</span>
          <div :class="[isShowMask[0]?'page_view_triangle-down-g':'page_view_triangle-down-9']"/>
        </div>
        <div
          class="flex_1 flex"
          :class="[isShowMask[1] === true?'f_g':'c-3']"
          @click="clickEnd()">
          <span class="margin_r_10">{{ $store.state.m.gongsi.endName[0]===''?'全国': $store.state.m.gongsi.endName[2]===''?$store.state.m.gongsi.endName[1]:$store.state.m.gongsi.endName[2] }}</span>
          <div :class="[isShowMask[1]?'page_view_triangle-down-g':'page_view_triangle-down-9']"/>
        </div>
        <div
          class="flex_1 flex"
          @click="clickReputation()">
          <span class="margin_r_10">信誉最高</span>
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
      </div>
    </div>
  </div>
</template>
<script>
import SelectAddress from '../../../components/m/selectAddress'
export default {
  name: 'PageGongSi',
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
      // this.$refs.scroll1.scrollTo(0, this.$store.state.m.gongsi.scrollTo)
    })
  },
  methods: {
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
      console.log(this.$store.state.m.huoyuan.rangeList)
    },
    getStartArea(data) {
      this.$set(this.isShowMask, 0, false)
      if (data) {
        this.$store.dispatch('m/gongsi/SETDATA', {
          data: data,
          name: 'startName'
        })
        //this.onPullingDown()
      }
    },
    getEndArea(data) {
      this.$set(this.isShowMask, 1, false)
      if (data) {
        this.$store.dispatch('m/gongsi/SETDATA', {
          data: data,
          name: 'endName'
        })
        //this.onPullingDown()
      }
    }
  }
}
</script>
<style scoped lang="scss">
</style>
