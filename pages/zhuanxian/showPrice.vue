<template>
  <div>
    <div class="arc_middle2_1">
      <p class="p1"><i>重货价：</i>
        <span>{{ '0-'+wEndVolume+'吨' }}</span>
        <!--<span>{{ '0'+ '-' + wPrice[0].endVolume + '吨' }}</span>-->
        <font
          id="nr073"
          class="font1"/><span
            id="nr074"
            class="span2"/><font
              id="zh_price"
              class="font2"
      >[阶梯价]</font></p>
      <p class="p2"><i>轻货价：</i> <span>{{ '0-'+pEndVolume+'吨' }}</span><font
        id="nr075"
        class="font1"/><span
          id="nr076"
          class="span2"/><font
            id="qh_price"
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
      id="js018"
      class="price_box1"
    >
      <!--onmouseover="price_block1();"-->
      <!--onmouseout="price_none1();"-->
      <div class="price_box_bt">阶梯价（重货）</div>
      <div
        class="price_box_item1"
        style="display: none;"><span id="nr0743"/><i id="nr0720"/><font id="nr0721"/><em id="nr07210">元/吨</em>
      </div>
    </div>

    <div
      id="js019"
      class="price_box2"
    >
      <!--onmouseover="price_block2();"-->
      <!--onmouseout="price_none2();"-->
      <div class="price_box_bt">阶梯价（轻货）</div>
      <div
        class="price_box_item2"
        style="display: none;"><span id="nr0744"/><i id="nr0730"/><font id="nr0731"/><em id="nr07310">元/立方</em>
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
      pEndVolume: '',
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
    init() {
      this.info.forEach((item, index) => {
        if (item.type == 0) {
          this.hPrice.push(item)
        }
        if (item.type == 1) {
          this.wPrice.push(item)

          // console.log(this.hPrice, ' this.hPrice')/
        }
      })
      // '0-'+wEndVolume+'吨'
      this.wEndVolume = this.wPrice[0].endVolume ? this.wPrice[0].endVolume : ''
      console.log(this.endVolume, ' this.endVolume', this.hPrice)
      console.log(this.info, 'info')
    }
  }
}
</script>

<style scoped>
</style>
