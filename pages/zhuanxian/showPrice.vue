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
            @mouseover="showPrice_box2Fn"
            @mouseout="hidePrice_box2Fn"
      >[阶梯价]</font></p>
    </div>
    <div class="arc_middle2_2">
      <div class="num1"><span id="nr0746"/></div>
      <div class="num2"><a href="javascript:void(0)"><span id="nr0745">{{ browse }}</span></a></div>
      <div class="num3"><span>下单量</span></div>
      <div class="num4"><a href="javascript:void(0)"><span>累计评价</span></a></div>
    </div>
    <!--阶梯价格 S-->
    <div
      v-if="showPrice_box1"
      id="js018"
      class="price_box1"
    >

      <div class="price_box_bt">阶梯价（重货）</div>
      <div
        v-for="(item, index) in info"
        v-if="item.type == 1"
        :key="index"
        class="price_box_item1"
      >
        <span>{{ item.endVolume ? item.startVolume+'-'+item.endVolume + '吨' : item.startVolume + '吨以上' }}</span><span style="color: #f00;" >{{ item.discountPrice ? parseFloat(item.discountPrice).toFixed(0)+ '元/吨' : '' }}</span><span ><em style="text-decoration:line-through">{{ item.primeryPrice ? parseFloat(item.primeryPrice).toFixed(0) : '' }}</em><em style="">元/吨</em></span>
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
        v-for="(item, index) in info"
        v-if="item.type == 0"
        :key="index"
        class="price_box_item2"
      >
        <span>{{ item.endVolume ? item.startVolume+'-'+item.endVolume + '立方' : item.startVolume + '立方以上' }}</span><span style="color: #f00;" >{{ item.discountPrice ? parseFloat(item.discountPrice).toFixed(0)+ '元/立方' : '' }}</span><span ><em style="text-decoration:line-through">{{ item.primeryPrice ? parseFloat(item.primeryPrice).toFixed(0) : '' }}</em><em style="">元/立方</em></span>
        <!--<span id="nr0744"/><i id="nr0730"/><font id="nr0731"/><em id="nr07310">元/立方</em>-->
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
    },
    browse: {
      type: Number,
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
      hPrice: [],
      infodata: {}
    }
  },
  watch: {
    info(n, o) {
      console.log(n, 'nnnnnnnn')
    },
    browse(n, o) {
      console.log(n, 'browse')
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    hidePrice_box1Fn() {
      this.showPrice_box1 = false
    },
    showPrice_box1Fn() {
      this.showPrice_box1 = true
    },
    hidePrice_box2Fn() {
      this.showPrice_box2 = false
    },
    showPrice_box2Fn() {
      this.showPrice_box2 = true
    },
    init() {
      this.browse = this.browse ? this.browse : '0'
      // console.log(this.info, 'info', this.browse)
      // this.wPrice = []
      // this.hPrice = []
      // this.infodata = Object.assign({}, this.info)
      this.info.forEach((item, index) => {
        if (item.type == 0) {
          this.hPrice.push(item)
        }
        if (item.type == 1) {
          this.wPrice.push(item)
        }
        // console.log(this.wPrice, 'this.wPrice')
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
      // console.log(this.hprices, ' this.endVolume', typeof this.wprices)
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
