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
    <div class="body_content">
      <div class="f-32 title_h flex_a f_w_b">产品与服务</div>
    </div>
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in AF027result"
          :key="index"
          class="swiper-slide f-24 swiper-h">
          <div
            class="flex_f flex_a swiper-item"
            v-for="(item1, index1) in item"
            :key="index1"
          >
            <img
              :src="item1.img"
              style="width: 50%">
            {{ item1.name }}
          </div>
        </div>
      </div>
      <div
        class="swiper-pagination"
        style="bottom: 0"/>
    </div>
    <div class="body_content">
      <div class="f-32 title_h flex_a f_w_b">增值服务</div>
    </div>
    <div v-swiper:mySwiper1="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in AF025result"
          :key="index"
          class="swiper-slide f-24 swiper-h">
          <div
            class="flex_f flex_a swiper-item"
            v-for="(item1, index1) in item"
            :key="index1"
          >
            <img
              :src="item1.img"
              style="width: 50%">
            {{ item1.name }}
          </div>
        </div>
      </div>
      <div
        class="swiper-pagination"
        style="bottom: 0"/>
    </div>
    <div class="divide"/>
    <div class="body_content">
      <div class="flex_sb item_title">
        <div class="f-32 f_w_b">物流专线</div>
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
    <div class="divide"/>
    <div class="body_content">
      <div class="flex_sb item_title">
        <div class="f-32 f_w_b">网点信息</div>
        <div class="f-22 f_b flex_a">
          查看更多
          <img
            src="/m/gongsi/tiaozhuan.png"
            style="width: 0.12rem">
        </div>
      </div>
      <div class="item_h2 flex_js flex_f">
        <div class="f-30 f_b">网点1 : 嘉兴网点</div>
        <div class="f-26 flex_a c-3"><img src="/m/gongsi/wangdian_dz.png">湖南省益阳市新华区嘉兴物流综合服务楼 </div>
        <div class="f-26 flex_a c-3"><img src="/m/gongsi/wangdian_xm.png">陈升 17665765433</div>
        <div class="f-26 flex_a c-3"><img src="/m/gongsi/wangdian_dh.png">020-29038810</div>
      </div>
      <div class="item_h2 flex_js flex_f">
        <div class="f-30 f_b">网点1 : 嘉兴网点</div>
        <div class="f-26 flex_a c-3"><img src="/m/gongsi/wangdian_dz.png">湖南省益阳市新华区嘉兴物流综合服务楼 </div>
        <div class="f-26 flex_a c-3"><img src="/m/gongsi/wangdian_xm.png">陈升 17665765433</div>
        <div class="f-26 flex_a c-3"><img src="/m/gongsi/wangdian_dh.png">020-29038810</div>
      </div>
    </div>
    <div class="divide"/>
    <div class="body_content">
      <div class="f-32 title_h flex_a f_w_b">企业简介</div>
      <div class="f-26 info c-3">
        郑州利民物流有限公司是一家业内领先的现代物流运输企业，我们致力于为国内的制造业客户和商贸流通业务提供专业且有价格竞争力的运输、仓储、包装、配送、代收代付等相关物流服务。我们目前处在迅猛发展阶段，以快速的增长速度在大力扩张货物运输业务范围，公司的专线运输范围基本覆盖华中，华东和华北三个大区的各省市县，承揽广州到湖南，湖北，上海，江苏，河南，北京，山东，天津全境的整车及零担业务，公司通过引入先进的供...
        <span class="f_b margin_l_10">详情</span>
      </div>
    </div>

  </div>
</template>
<script>
import MyTop from '../../../components/m/myTop'
import 'swiper/dist/css/swiper.css'
export default {
  components: { MyTop },
  layout: 'm',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          bulletClass: 'my_bullet',
          bulletActiveClass: 'my_active'
        }
      }
    }
  },
  async asyncData({ $axios, app, query }) {
    let AF027result = [],
      AF025result = []
    let AF027 = await $axios.get('/28-web/sysDict/getSysDictByCodeGet/AF027')
    AF027.data.data.forEach(item => {
      switch (item.name) {
        case '整车运输': //需要使用名字，因生产环境与测试环境id不一样
          item.img = '/m/gongsi/zhencheys.png'
          break
        case '零担运输':
          item.img = '/m/gongsi/lingdanys.png'
          break
        case '专线运输':
          item.img = '/m/gongsi/zhuanxianys.png'
          break
        case '特大货物运输':
          item.img = '/m/gongsi/tedahwys.png'
          break
        case '大件运输':
          item.img = '/m/gongsi/dajianys.png'
          break
        case '集装箱运输':
          item.img = '/m/gongsi/jizhuangxys.png'
          break
        case '冷藏运输':
          item.img = '/m/gongsi/lengcangys.png'
          break
        case '危险品运输':
          item.img = '/m/gongsi/weixianpys.png'
          break
        case '仓储':
          item.img = '/m/gongsi/weixianpys.png'
          break
      }
    })
    for (let i = 0, len = AF027.data.data.length; i < len; i += 4) {
      AF027result.push(AF027.data.data.slice(i, i + 4))
    }
    let AF025 = await $axios.get('/28-web/sysDict/getSysDictByCodeGet/AF025')
    AF025.data.data.forEach(item => {
      switch (item.name) {
        case '送货上门':
          item.img = '/m/gongsi/songhuosl.png'
          break
        case '保价运输':
          item.img = '/m/gongsi/baojiays.png'
          break
        case '运费到付':
          item.img = '/m/gongsi/yunfeidf.png'
          break
        case '代收货款':
          item.img = '/m/gongsi/daishouhk.png'
          break
        case '上门提货':
          item.img = '/m/gongsi/shangmenth.png'
          break
        case '开发票':
          item.img = '/m/gongsi/kaifap.png'
          break
        case '签单回收':
          item.img = '/m/gongsi/qiandanhs.png'
          break
        case '时效保障':
          item.img = '/m/gongsi/shixiaobz.png'
          break
      }
    })
    for (let i = 0, len = AF025.data.data.length; i < len; i += 4) {
      AF025result.push(AF025.data.data.slice(i, i + 4))
    }
    return {
      AF027result: AF027result ? AF027result : [],
      AF025result: AF025result ? AF025result : []
    }
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
.item_h2 {
  height: 2.72rem;
  border-bottom: 1px solid rgba(238, 238, 238, 1);
  padding: 0.3rem 0;
  box-sizing: border-box;
  img {
    height: 0.31rem;
    margin-right: 0.2rem;
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
.swiper-h {
  height: 1.6rem;
  .swiper-item {
    width: 25%;
    box-sizing: border-box;
    float: left;
  }
}
.title_h {
  height: 0.88rem;
}
.swiper-wrapper img {
  margin-bottom: 0.1rem;
}
.info {
  line-height: 0.35rem;
  margin-bottom: 0.77rem;
  text-indent: 2em;
}
</style>
<style>
.my_active {
  background: rgba(187, 220, 255, 1) !important;
}
.my_bullet {
  width: 0.4rem;
  height: 0.06rem;
  background: rgba(246, 246, 246, 1);
  border-radius: 0.05rem;
  display: inline-block;
  margin: 0 5px;
}
</style>
