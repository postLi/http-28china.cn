<template>
  <div>
    <MyTop>
      <div class="flex_3 f-36 flex">专线详情</div>
    </MyTop>
    <div class="content1">
      <div class="flex_sb">
        <div class="f-36 f_b f_w_b">
          上海 宝安区 ——广州 海珠区
        </div>
        <div class="f-24 c-9">
          2876人浏览
        </div>
      </div>
      <div class="item flex_a">
        <img
          class="left margin_r_20"
          src="" >
        <div class="right flex_f flex_js height_100">
          <div class="c-3 f-30 flex_a">
            广州市友亮物流有限公司
            <img
              class="img-v margin_l_20"
              src="/m/zhuanxian/details-icon-vip.png" >
            <img
              class="img-s margin_l_20"
              src="/m/zhuanxian/zhuanxian_shou.png" >
          </div>
          <div class="flex_a">
            <img
              class="img-star"
              src="/m/zhuanxian/rate_star_yellow.png" >
            <img
              class="img-star"
              src="/m/zhuanxian/rate_star_gray.png" >
          </div>
        </div>
      </div>
    </div>

    <div class="content2">
      <div class="title f-28 c-9 flex_a f_w_b">
        专线信息
      </div>
      <div class="item flex_a">
        <div class="f-30 c-3">轻货价：</div>
        <div class="right flex_sb flex_1 height_100">
          <div class="f-30 flex_sb flex_1">
            <span>116元/m³~128元/m³</span>
            <div class="right_r flex_a">
              低于行情价<span>13%</span>
            </div>
          </div>
          <img
            class="img_r"
            src="/m/zhuanxian/list_down_grey.png">
        </div>
      </div>
      <div class="item flex_a">
        <div class="f-30 c-3">重货价：</div>
        <div class="right flex_sb flex_1 height_100">
          <div class="f-30 flex_sb flex_1">
            <span>116元/m³~128元/m³</span>
          </div>
          <img
            class="img_r"
            src="/m/zhuanxian/list_down_grey.png">
        </div>
      </div>
      <div class="footer flex_a f_f">
        <div class="footer_item flex f-24 margin_b_20">最低一票价格：面议</div>
        <div class="footer_item flex f-24 margin_b_20">发车频率：1天1次</div>
        <div class="footer_item flex f-24 margin_b_20">时效：1天</div>
      </div>
    </div>

    <div class="content3">
      <div class="item1 flex_ae">
        <div class="cell width_100 padding_l_20 flex_a">
          <div class="left flex f_w f-28">竞争力</div>
          <div class="margin_l_20 c-3 f-26 f_b">此专线物流公司诚信值超过<span>77.9%</span>的同行</div>
        </div>
      </div>
      <div class="item2 flex_a">
        <div class="f-28">资质认证： <span class="c-3 f-26">4项经营资质认证，12项平台物流服务标准监督</span></div>
      </div>
      <div class="item2 flex_sb">
        <div class="f-28">担保交易： <span class="f_g f-26">物流运输保障服务</span></div>
        <img
          src="/m/zhuanxian/list_right_grey.png"
          @click="showMask = true">
      </div>
      <div class="item2 flex_sb">
        <div class="f-28 flex_a">
          增值服务：
          <span
            class="box flex f-26 f_w"
            style="background: #FFA800">送</span>
          <span
            class="box flex f-26 f_w"
            style="background: #4494F6">保</span>
          <span
            class="box flex f-26 f_w"
            style="background: #49AE17">票</span>
          <span
            class="box flex f-26 f_w"
            style="background: #4494F6">代</span>
          <span
            class="box flex f-26 f_w"
            style="background: #FFA800">签</span>
          <span
            class="box flex f-26 f_w"
            style="background: #F96652">运</span>
        </div>
        <img
          src="/m/zhuanxian/list_right_grey.png"
          @click="showMask = true">
      </div>
    </div>

    <div class="content4">
      <div class="item1 flex_ae b_b">
        <div class="cell width_100 flex_sb f-28">
          <div>
            <span class="c-3 margin_r_20">专线评价(269)</span>
            <span class="c-9">好评率99%</span>
          </div>
          <div @click="toEvaluate()">
            <span class="margin_r_20 c-9">查看全部</span>
            <img src="/m/zhuanxian/list_right_grey.png">
          </div>
        </div>
      </div>
      <div class="f-28 item2">
        <div class="flex_a f_w_b">
          <span class="margin_r_20">杨平</span>
          <img
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
          <img
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
          <img
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
        </div>
        <div>
          这家公司还挺好的，时效快，价格合理，经常找这家。
        </div>
      </div>
      <div class="item3 f-28 c-9 f_w_b flex_a">
        专线相关图片
      </div>
      <div class="item2">
        <div class="img">
          //
        </div>
        <div class="c-3 f-28 margin_t_40">
          广州平泽润通物流有限公司，简称平泽润通物流，专业从事全省各地公路运输（整车、零担）业务主营线路的物流公司。公司有着严谨的运输组织，完善的经营管理，是一家干线专业型物流公司，业务范围涵盖了IT产品，汽配，化工 ，日用品，机械，电力设备，家具，家电，建材，食品等众多行业。
        </div>
      </div>

    </div>

    <div class="content5">
      <div class="item flex_ae">
        <div class="b_t cell width_100 flex_ce f-28">
          <div class="flex button1 margin_r_20">联系专线</div>
          <div class="flex button2">收 藏</div>
        </div>
      </div>
    </div>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div
        class=" heightTran"
        v-if="showMask">
        <div class="b_c_w height_100">
          <div class="f-36 f_w_b title">什么是28快运担保交易？</div>
          <div class="f-28 flex f_b"><img src="/m/zhuanxian/baozhengjin.png">此承运商已交5000元诚信保证金</div>
          <div class="padding_40">
            <div class="c-3 f-34 ">
              如果您采用平台的担保交易，您与承运商洽谈好价格后，要在平台上生成标准托运单，并把运费托管在平台上，如果承运商未能良好履约，您有权要求退回所有的运费。并根据托运单规定的规则条款，您有权对承运商要求相应的补偿。
            </div>
            <div class="c-9 f-26 margin_t_20">
              如果您线下私自与承运商进行交易，平台不承担任何协助您向承运商要求兑现承诺的义务。
            </div>
          </div>
          <div
            class="button f_w f_w_b f-36"
            @click="showMask = false">
            我知道了
          </div>
        </div>
      </div>
    </transition>
    <div
      :class="[showMask?'mask2':'']"
      @click="closeMask()"/>
  </div>
</template>
<script>
import MyTop from '../../../components/m/myTop'
export default {
  components: { MyTop },
  layout: 'm',
  data() {
    return {
      showMask: false
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.height = 0
    },
    enter(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
      } else {
        el.style.height = ''
      }
    },
    afterEnter(el) {
      el.style.height = ''
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = 0
      }
    },
    afterLeave(el) {
      el.style.height = ''
    },
    closeMask() {
      this.showMask = false
    },
    toEvaluate() {
      this.$router.push('/m/zhuanxian/evaluate')
    }
  }
}
</script>
<style scoped lang="scss">
.content5 {
  .item {
    height: 1.16rem;
    background: #f4f4f4;
    .cell {
      height: 0.96rem;
      background: white;
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
      }
    }
  }
}
.content4 {
  .item1 {
    height: 0.98rem;
    background: #f4f4f4;
    .cell {
      height: 0.8rem;
      background: white;
      padding: 0 0.3rem;
    }
    img {
      height: 0.2rem;
    }
  }
  .item2 {
    padding: 0.3rem;
    .img {
      height: 3.8rem;
      background: rgba(247, 247, 247, 1);
      border-radius: 0.16rem;
    }
  }
  .item3 {
    height: 0.88rem;
    padding: 0 0.3rem;
    background: #f4f4f4;
  }
}
.content3 {
  .item1 {
    height: 1.03rem;
    background: #f4f4f4;
    .cell {
      height: 0.88rem;
      background: white;
      .left {
        width: 1.05rem;
        height: 0.54rem;
        background: rgba(17, 186, 0, 1);
        border-radius: 0.04rem;
      }
      span {
        color: #ff4400;
      }
    }
  }
  .item2 {
    height: 0.88rem;
    background: white;
    padding: 0 0.3rem;
    .box {
      width: 0.36rem;
      height: 0.36rem;
      margin-right: 0.1rem;
    }
    img {
      height: 0.2rem;
    }
  }
}
.content2 {
  .title {
    padding: 0 0.3rem;
    height: 0.89rem;
    background: #f4f4f4;
  }
  .item {
    height: 1rem;
    padding: 0 0.3rem;
    .right {
      border-bottom: 0.01rem solid rgba(238, 238, 238, 1);
      span {
        color: #ff4400;
      }
      .right_r {
        margin-right: 0.1rem;
        height: 0.36rem;
        background: rgba(255, 209, 69, 1);
        border-radius: 0.04rem;
        opacity: 0.5;
      }
      .img_r {
        width: 0.2rem;
      }
    }
  }
  .footer {
    min-height: 0.9rem;
    padding: 0.2rem 0.3rem 0 0.3rem;
    .footer_item {
      height: 0.54rem;
      background: rgba(238, 238, 238, 1);
      border-radius: 0.27rem;
      color: #8a8d8f;
      padding: 0 0.18rem;
      margin-right: 0.16rem;
    }
  }
}
.content1 {
  height: 2.9rem;
  padding: 0.3rem;
  box-sizing: border-box;
  .item {
    height: 1.6rem;
    background: rgba(246, 248, 250, 1);
    border-radius: 0.1rem;
    padding: 0.2rem;
    box-sizing: border-box;
    .left {
      width: 1.2rem;
      height: 1.2rem;
    }
    .right {
      padding: 5px 0;
      box-sizing: border-box;
      .img-v {
        width: 0.28rem;
        height: 0.24rem;
      }
      .img-s {
        width: 0.32rem;
        height: 0.32rem;
      }
    }
  }
}
.img-star {
  width: 0.28rem;
  height: 0.28rem;
  margin-right: 0.08rem;
}
.heightTran {
  transition: all 0.3s;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 100;
  img {
    width: 0.42rem;
    height: 0.44rem;
    margin-right: 0.1rem;
  }
  .b_c_w {
    border-top-left-radius: 0.16rem;
    border-top-right-radius: 0.16rem;
    .title {
      text-align: center;
      padding-top: 0.31rem;
    }
    .f-28 {
      margin-top: 0.52rem;
    }
    .button {
      text-align: center;
      margin: 1.25rem 0.2rem 0.2rem 0.2rem;
      height: 0.96rem;
      line-height: 0.96rem;
      background: rgba(84, 167, 255, 1);
      border-radius: 0.16rem;
    }
  }
}
.mask2 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 13;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
