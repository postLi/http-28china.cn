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
          src=""
          class="left">
        <div class="l_h">
          <div class="f-30 c-3 f_w_b">
            张车主
            <img
              class="img-v margin_l_20"
              src="/m/zhuanxian/details-icon-vip.png" >
          </div>
          <div class="c-9 f-28">
            <img
              class="img-star"
              src="/m/zhuanxian/rate_star_yellow.png" >
            <span class="margin_r_20">4.9</span>
            <span>常驻地：深圳市</span>
          </div>
          <div class="f-28">
            <span class="margin_r_20 c-3">粤A**B19</span>
            <span class="f_b">6.8米 高栏车 | 载重10吨</span>
          </div>
        </div>
      </div>
      <div class="title c-9 f-28 flex_a">
        车源详情
      </div>
      <div class="content b_c_w">
        <div class="f-36 f_b">
          深圳市南山区 -- 广州市海珠区
        </div>
        <div class="f-28 flex_r">
          <span class="c-9 left">期望运价：</span>
          <span class="f_40">￥1325.00</span>
        </div>
        <div class="f-28 flex_r">
          <span class="c-9 left">发车时间：</span>
          <span class="c-3">2019/01/15 12:00</span>
        </div>
        <div class="f-28 flex_r">
          <span class="c-9 left">车源类型：</span>
          <span class="c-3">回程车</span>
        </div>
        <div class="f-28 flex_r">
          <span class="c-9 left">其他说明：</span>
          <span class="c-3">有货速联系，装车就走，运价好商量，找整车</span>
        </div>
        <div class="f-28 flex_r">
          <span class="c-9 left">距&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;离：</span>
          <span class="c-3">300米 <span class="f_b margin_l_20">查看定位</span></span>
        </div>
        <div class="f-28 flex_r">
          <span class="c-9 left">发布时间：</span>
          <span class="c-3">2019/01/14 23:55:03</span>
        </div>
      </div>
    </div>
    <footer class="b_t b_c_w flex_ce f-28">
      <div class="flex button1 margin_r_20">联系车主</div>
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
