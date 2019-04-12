<template>
  <div class="flex_f h">
    <MyTop>
      <div class="flex_3 f-36 flex">车源详情</div>
    </MyTop>
    <div
      class="flex_1"
      style="background-color: #F4F4F4">
      <div class="content_top b_c_w flex_a">
        <img
          class="left"
          v-if="cy1.carFile"
          :src="cy1.carFile.split(',')[0]">
        <img
          class="left"
          v-else
          :src="'../../images/pic/bg' + cy1.num + '.png'" >
        <div class="l_h">
          <div class="f-30 c-3 f_w_b">
            {{ cy1.driverName }}
            <img
              class="img-v margin_l_20"
              src="/m/zhuanxian/details-icon-vip.png" >
          </div>
          <div class="c-9 f-28">
            <img
              class="img-star"
              src="/m/zhuanxian/rate_star_yellow.png" >
            <span class="margin_r_20">4.9</span>
            <span>常驻地：{{ cy1.usualPlace.substring(0, 10) }}</span>
          </div>
          <div class="f-28">
            <span
              class="margin_r_20 c-3"
              v-if="cy1.carNum">{{ cy1.carNum.substring(0, 2) + '***' + cy1.carNum.substring(6, 10) }}</span>
            <span class="f_b">{{ cy1.carLength ? cy1.carLength + '米': '' }} {{ cy1.carTypeName }} | {{ cy1.carLoad ? '载重' + cy1.carLoad + '吨': '' }}</span>
          </div>
        </div>
      </div>
      <div class="title c-9 f-28 flex_a">
        车源详情
      </div>
      <div class="content b_c_w">
        <div class="f-36 f_b">
          {{ cy1.startCity }} {{ cy1.startArea }} &nbsp;&rarr;&nbsp; {{ cy1.endCity }} {{ cy1.endArea }}
        </div>
        <div class="f-28 flex_r">
          <span class="c-9 left">期望运价：</span>
          <span class="f_40">{{ cy1.expectPrice? '￥' + cy1.expectPrice + '元':'面议' }}</span>
        </div>
        <div class="f-28 flex_r">
          <span class="c-9 left">发车时间：</span>
          <span class="c-3">{{ cy1.startTime ? cy1.startTime : '随时' }}</span>
        </div>
        <div class="f-28 flex_r">
          <span class="c-9 left">车源类型：</span>
          <span class="c-3">{{ cy1.carSourceTypeName ? cy1.carSourceTypeName: '暂无' }}</span>
        </div>
        <div class="f-28 flex_r">
          <span class="c-9 left">其他说明：</span>
          <span class="c-3">{{ cy1.remark ? cy1.remark.substring(0, 30) : '暂无' }}</span>
        </div>
        <!--        <div class="f-28 flex_r">-->
        <!--          <span class="c-9 left">距&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;离：</span>-->
        <!--          <span class="c-3">300米 <span class="f_b margin_l_20">查看定位</span></span>-->
        <!--        </div>-->
        <div class="f-28 flex_r">
          <span class="c-9 left">发布时间：</span>
          <span class="c-3">{{ cy1.createTime }}</span>
        </div>
      </div>
    </div>
    <footer class="b_t b_c_w flex_ce f-28">
      <a :href="'tel:' + cy1.phone">
        <div class="flex button1 margin_r_20">联系车主</div>
      </a>
      <div class="flex button2">
        <div class="flex_a">
          <img src="/m/cheyuan/btn_collect_fill.png" >
          收藏车主
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import MyTop from '../../../components/m/myTop'
export default {
  components: { MyTop },
  layout: 'm',
  data() {
    return {}
  },
  async asyncData({ $axios, app, query, error }) {
    const cy1 = await $axios.post('/28-web/carInfo/' + query.id)
    if (cy1.data.status === 200) {
      let item = cy1.data.data
      let arr = (item.id || '').split('')
      let num = 0
      arr.forEach(el => {
        num += el.charCodeAt(0) || 0
      })
      cy1.data.data.num = (num % 30) + 1
    }
    return {
      cy1: cy1.data.status === 200 ? cy1.data.data : {}
    }
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.h {
  height: inherit;
}
.content_top {
  height: 1.8rem;
  .left {
    width: 1.2rem;
    height: 1.2rem;
    margin: 0 0.2rem 0 0.3rem;
  }
  .l_h {
    line-height: 0.4rem;
    .img-v {
      width: 0.28rem;
      height: 0.24rem;
    }
    .img-star {
      width: 0.28rem;
      height: 0.28rem;
      margin-right: 0.08rem;
    }
  }
}
.title {
  height: 0.89rem;
  padding-left: 0.3rem;
}
.content {
  padding: 0.2rem 0.3rem;
  line-height: 0.44rem;
  .flex_r {
    margin-top: 0.2rem;
  }
  .left {
    min-width: 1.43rem;
  }
}
footer {
  height: 0.96rem;
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
    img {
      width: 0.24rem;
      margin-right: 0.1rem;
    }
  }
}
</style>
