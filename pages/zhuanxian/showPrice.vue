<template>
  <div class="showPrice">
    <div class="arc_middle2_1">
      <p class="p1"><i>重货价：</i>
        <span>{{ wEndVolume }}</span>
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
      <div class="num4"><a href="javascript:void(0)"><span>累计评价</span></a></div>
    </div>
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
        <span>{{ item.endVolume ? item.startVolume+'-'+item.endVolume + '公斤' : item.startVolume + '公斤以上' }}</span><span style="color: #f00;" >{{ item.discountPrice ? item.discountPrice.toFixed(2)+ '元/公斤' : item.discountPrice }}</span><span ><em style="text-decoration:line-through">{{ item.primeryPrice ?item.primeryPrice.toFixed(2) :item.primeryPrice }}</em><em style="">元/公斤</em></span>
      
      </div>
    </div>

    <div
      v-show="showPrice_box2"
      id="js019"
      class="price_box2"
    >
      <div class="price_box_bt">阶梯价（轻货）</div>
      <div
        v-for="(item, index) in info"
        v-if="item.type == 0"
        :key="index"
        class="price_box_item2"
      >
        <span>{{ item.endVolume ? item.startVolume+'-'+item.endVolume + '立方' : item.startVolume + '立方以上' }}</span><span style="color: #f00;" >{{ item.discountPrice ? item.discountPrice.toFixed(2)+ '元/立方' : item.discountPrice }}</span><span ><em style="text-decoration:line-through">{{ item.primeryPrice ? item.primeryPrice.toFixed(2) : item.primeryPrice }}</em><em style="">元/立方</em></span>
      
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
    info(n, o) {},
    browse(n, o) {}
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

      let _this = this
      this.info.forEach((item, index) => {
        if (item.type == 0) {
          this.hPrice.push(item)
        }
        if (item.type == 1) {
          this.wPrice.push(item)
        }
      })
      this.wPrice = Object.assign({}, this.wPrice)
      this.hPrice = Object.assign({}, this.hPrice)
      if (this.wPrice[0]) {
        this.wEndVolume = this.wPrice[0].endVolume
          ? '0-' + this.wPrice[0].endVolume + '公斤'
          : this.wPrice[0].startVolume + '公斤以上'
        this.wDiscountPrice = this.wPrice[0].discountPrice
          ? '￥' + this.wPrice[0].discountPrice.toFixed(2)
          : ''
        this.wPrimeryPrice =
          this.wPrice[0].startVolume == 0
            ? this.wPrice[0].primeryPrice.toFixed(2)
            : ''
      }
      if (this.hPrice[0]) {
        this.pEndVolume = this.hPrice[0].endVolume
          ? '0-' + this.hPrice[0].endVolume + '立方'
          : this.hPrice[0].startVolume + '立方以上'
        this.hDiscountPrice = this.hPrice[0].discountPrice
          ? '￥' + this.hPrice[0].discountPrice.toFixed(2)
          : ''
        this.hPrimeryPrice =
          this.hPrice[0].startVolume == 0
            ? this.hPrice[0].primeryPrice.toFixed(2)
            : ''
      }
    }
  }
}
</script>

<style lang="scss">
.showPrice {
  position: relative;
  .price_box1 {
    display: block;
    width: 400px;
    height: 180px;
    min-height: 110px;
    position: absolute;
    left: 200px;
    top: 45px;
    margin-left: 0px;
    background-color: #fff7d3;
    padding-left: 15px;
    padding-top: 10px;
    border: 1px solid #979797;
    border-radius: 3px;
  }

  .price_box2 {
    width: 400px;
    height: 180px;
    min-height: 110px;
    position: absolute;
    left: 200px;
    top: 80px;
    margin-left: 0px;
    background-color: #fff;
    padding-left: 15px;
    padding-top: 10px;
    background-color: #fff7d3;
    border: 1px solid #979797;
  }

  .price_box_bt {
    float: left;
    width: 100%;
    color: #333;
    font-size: 14px;
    font-weight: bold;
    height: 28px;
    line-height: 28px;
  }

  .price_box_item1,
  .price_box_item2 {
    float: left;
    width: 100%;
    height: 24px;
    line-height: 24px;
  }

  .price_box_item1 span,
  .price_box_item2 span {
    float: left;
    font-size: 12px;
    color: #333;
    min-width: 130px;
    height: 28px;
  }

  .price_box_item1 font,
  .price_box_item2 font {
    text-decoration: line-through;
    float: left;
    font-size: 12px;
    color: #333;
    width: 47px;
    height: 28px;
    margin-left: 3px;
    text-align: right;
  }
}
</style>
