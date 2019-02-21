<template>
  <div class="showPrice">
    <div class="arc_middle2_1">
      <p class="p1"><i>重货价：</i>
        <span>{{ wEndVolume }}</span>
        <!--<span>{{ '0'+ '-' + wPrice[0].endVolume + '吨' }}</span>-->
        <font
          class="font1">{{ wDiscountPrice }}</font>
        <span
          :style="wPrimeryPrice?'':'text-decoration:none'"
          class="span2">{{ wPrimeryPrice }}</span>
        <font
          class="font2"
          @mouseover="showPrice_box1Fn"
          @mouseout="hidePrice_box1Fn"
      >[阶梯价]</font></p>
      <p class="p2"><i>轻货价：</i> <span>{{ pEndVolume }}</span><font
        class="font1">{{ hDiscountPrice }}</font><span
          :style="hPrimeryPrice?'':'text-decoration:none'"
          class="span2" >{{ hPrimeryPrice }}</span><font
            class="font2"
      >[阶梯价]</font></p>
    </div>
    <div class="arc_middle2_2">
      <div class="num1"><span id="nr0746"/></div>
      <div class="num2"><a href="javascript:void(0)"><span id="nr0745"/></a></div>
      <div class="num3"><span>下单量</span></div>
      <div class="num4"><a href="javascript:void(0)"><span>累计评价</span></a></div>
    </div>
    <!--阶梯价格 S-->
    <div
      v-if="!showPrice_box1"
      id="js018"
      class="price_box1"
    >
      <!--onmouseover="price_block1();"-->
      <!--onmouseout="price_none1();"-->
      <div class="price_box_bt">阶梯价（重货）</div>
      <div
        v-for="(item, index) in wPrice"
        :key="index"
        class="price_box_item1"
      >

        <span>{{ item.startVolume+'-'+item.endVolume + '吨' }}</span><span>{{ parseFloat(item.discountPrice).toFixed(0)+ '元/吨' }}</span><span>{{ parseFloat(item.primeryPrice).toFixed(0) }}元/吨</span>

        <!--<span id="nr0743">{{ item.startVolume+'-'+item.endVolume + '吨' }}<i id="nr0720">{{ parseFloat(item.discountPrice).toFixed(0)+ '元/吨' }}</i><font id="nr0721">{{ parseFloat(item.primeryPrice).toFixed(0) }}</font><em id="nr07210">元/吨</em>-->
        <!--</span>-->
      </div>
    </div>

    <div
      v-show="showPrice_box2"
      id="js019"
      class="price_box2"
    >
      <!--onmouseover="price_block2();"-->
      <!--onmouseout="price_none2();"-->
      <div class="price_box_bt">阶梯价（轻货）</div>
      <div
        class="price_box_item2"
      ><span id="nr0744"/><i id="nr0730"/><font id="nr0731"/><em id="nr07310">元/立方</em>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ShowPrice',
  props: {
    info: {
      type: [Array, Object],
      default: () => {}
    }
  },
  data() {
    return {
      targetLinks: '',
      carSourceType: '',
      wEndVolume: '',
      wDiscountPrice: '',
      wPrimeryPrice: '',
      hPrimeryPrice: '',
      hDiscountPrice: '',
      pEndVolume: '',
      showPrice_box1: false,
      showPrice_box2: false,
      wPrice: [],
      hPrice: []
    }
  },
  watch: {
    info(n, o) {
      // console.log(n, 'nnnnnnnn')
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    hidePrice_box1Fn() {
      this.showPrice_box1 = false
      // console.log(this.showPrice_box1, 'this.showPrice_box1 nono')
    },
    showPrice_box1Fn() {
      this.showPrice_box1 = true
      // console.log(this.showPrice_box1, 'this.showPrice_box1')
      // alert('')
    },
    init() {
      this.wPrice = []
      this.hPrice = []
      // this.info.forEach((item, index) => {
      //   if (item.type == 0) {
      //     this.hPrice.push(item)
      //   }
      //   if (item.type == 1) {
      //     this.wPrice.push(item)
      //   }
      // })
      this.info.filter((item, index) => {
        if (item.type == 0) {
          this.hPrice.push(item)
        }
        if (item.type == 1) {
          this.wPrice.push(item)
        }
      })
      this.wPrice = Object.assign({}, this.wPrice)
      this.hPrice = Object.assign({}, this.hPrice)
      // pEndVolume
      this.wEndVolume = this.wPrice[0].endVolume
        ? '0-' + this.wPrice[0].endVolume + '吨'
        : this.wPrice[0].startVolume + '吨以上'
      this.pEndVolume = this.hPrice[0].endVolume
        ? '0-' + this.hPrice[0].endVolume + '立方'
        : this.hPrice[0].startVolume + '立方以上'
      this.wDiscountPrice = this.wPrice[0].discountPrice
        ? '￥' + parseFloat(this.wPrice[0].discountPrice).toFixed(0)
        : ''
      this.hDiscountPrice = this.hPrice[0].discountPrice
        ? '￥' + parseFloat(this.hPrice[0].discountPrice).toFixed(0)
        : ''

      this.wPrimeryPrice =
        this.wPrice[0].startVolume == 0
          ? parseFloat(this.wPrice[0].primeryPrice).toFixed(0)
          : ''
      this.hPrimeryPrice =
        this.hPrice[0].startVolume == 0
          ? parseFloat(this.hPrice[0].primeryPrice).toFixed(0)
          : ''
      console.log(this.wPrice, ' this.endVolume', typeof this.hPrice)
      // console.log(this.info, 'info')
    }
  }
}
</script>

<style lang="scss">
.showPrice {
  .p1 {
    /*.font2:hover {*/
    /*.price_box1 {*/
    /*display: block;*/
    /*}*/
    /*}*/
  }
}
</style>
