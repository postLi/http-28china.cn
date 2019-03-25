<template>
  <div>
    <MyTop
      :show-line="false"
      color="#ffffff"
      back-color="#2F3241">
      <div class="flex_3 f-36 flex">公司详情</div>
    </MyTop>
    <div class="top p_r">
      <div class="b_c"/>
      <div class="body_content p_r">
        <img
          src="/m/gongsi/mingpian_bg_normal.png"
          class="width_100">
        <div class="width_100 height_100 top_content">
          <img
            class="img"
            style="width: 1.18rem"
            src="/m/gongsi/youzhi.png" >
          <div class="f-42 c_b47">郑州利民物流有限公司</div>
          <div class="margin_t_20 flex_a">
            <div class="circle f-20 flex">待认证</div>
            <div class="f-24 c_e2a margin_l_20 margin_r_20">综合信誉值</div>
            <img
              style="width: 0.3rem"
              class="margin_l_20"
              src="/m/gongsi/xinyuzhi.png">
            <img
              style="width: 0.3rem"
              class="margin_l_20"
              src="/m/gongsi/xinyuzhi.png">
          </div>

          <div style="margin-top: 0.5rem">
            <div class="flex_a">
              <img
                class="img-item"
                src="/m/gongsi/dizhi1.png" >
              <div class="margin_l_20 f-26 c_b47 oneElisp">广东省广州市越秀区珠江新城富力中心旁</div>
            </div>

            <div class="flex_a margin_t_20">
              <img
                class="img-item"
                src="/m/gongsi/renyuan1.png" >
              <div class="margin_l_20 f-26 c_b47">业务咨询：陈升 <span class="f_b">17665765433</span> </div>
            </div>

            <div class="flex_a margin_t_20">
              <img
                class="img-item"
                src="/m/gongsi/rexian1.png" >
              <div class="margin_l_20 f-26 c_b47">服务热线：<span class="f_b">020-29038810</span></div>
            </div>
          </div>

          <div class="flex_sb margin_t_20">
            <div class="f-24 c_b47">3216浏览</div>
            <div class="fav f-28 f_w flex">
              <img
                src="/m/gongsi/weishoucang.png"
                style="width: 0.25rem"
              >
              <span class="margin_l_10">收 藏</span>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="body_content">
      <div class="flex item1 f-26 margin_t_10">
        此专线物流公司诚信值超过<span>77.9%</span>的同行
      </div>
    </div>
    <div class="divide"/>
    <div class="body_content">
      <div class="flex_sb item_title">
        <div class="f-32">物流专线</div>
        <div class="f-22 f_b flex_a">
          查看更多
          <img
            src="/m/gongsi/tiaozhuan.png"
            style="width: 0.12rem">
        </div>
      </div>
      <div class="item_h1 flex_saf flex_f">
        <div class="f-26 flex_a">郑州市 -> 徐州市 <span class="margin_l_20 f_w f-20 f_w_b flex qs">强 势</span></div>
        <div class="flex_a f-20">
          <i class="flex">时效1天</i>
          <i class="flex margin_l_20">2876人浏览</i>
        </div>
        <div class="footer f-24">
          轻货：116元～128元/公斤 重货：80元～100元/公斤
        </div>
      </div>
      <div class="item_h1 flex_saf flex_f">
        <div class="f-26 flex_a">郑州市 -> 徐州市 <span class="margin_l_20 f_w f-20 f_w_b flex rs">优 势</span></div>
        <div class="flex_a f-20">
          <i class="flex">时效1天</i>
          <i class="flex margin_l_20">2876人浏览</i>
        </div>
        <div class="footer f-24">
          轻货：116元～128元/公斤 重货：80元～100元/公斤
        </div>
      </div>
    </div>
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
.top {
  height: 4.74rem;
  overflow: hidden;
  .b_c {
    background: #2f3241;
    width: 10rem;
    height: 2.44rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -0.02rem;
    z-index: -1;
    border-radius: 0 0 50% 50%;
  }
  .top_content {
    position: absolute;
    top: 0;
    padding: 0.36rem;
    box-sizing: border-box;
    .img {
      position: absolute;
      top: 0;
      right: 5%;
    }
    .circle {
      height: 0.32rem;
      background: rgba(235, 146, 82, 1);
      border-radius: 0.2rem;
      font-weight: 500;
      color: rgba(255, 100, 43, 1);
      line-height: 0.28rem;
      padding: 0 0.1rem;
    }
    .img-item {
      width: 0.46rem;
    }
    .fav {
      width: 1.5rem;
      height: 0.52rem;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.1rem;
      border: 0.02rem solid rgba(255, 255, 255, 1);
    }
  }
}
.item1 {
  height: 0.9rem;
  color: #42474b;
  background: linear-gradient(
    50deg,
    rgba(252, 246, 240, 1) 0%,
    rgba(252, 242, 215, 1) 100%
  );
  border-radius: 0.08rem;
  span {
    color: #ff642b;
  }
}
.body_content {
  width: 95%;
  margin: 0 auto;
}
.c_b47 {
  color: #b4760e;
}
.c_e2a {
  color: #e2a237;
}
.item_title {
  height: 0.8rem;
}
.item_h1 {
  height: 2rem;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  i {
    height: 0.32rem;
    background: rgba(238, 238, 238, 1);
    border-radius: 0.16rem;
    color: rgba(138, 141, 143, 1);
    line-height: 0.28rem;
    padding: 0 0.2rem;
  }
  .footer {
    color: rgba(255, 68, 0, 1);
    line-height: 0.33rem;
  }
}
.qs {
  width: 0.66rem;
  height: 0.32rem;
  background: rgba(60, 146, 239, 1);
  border-radius: 0.04rem;
}
.rs {
  width: 0.66rem;
  height: 0.32rem;
  background: rgba(250, 211, 56, 1);
  border-radius: 0.04rem;
}
.divide {
  height: 0.1rem;
  background: #f5f5f5;
}
</style>
