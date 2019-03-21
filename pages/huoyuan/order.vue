<template>
  <div 
    v-show="isShow" 
    class="wzlOrder">
    <div 
      :key="dialogKey" 
      class="add1_content">
      <div 
        class="closeMe" 
        @click="closeMe()"><a>关闭</a></div>
      <div class="order_content">
        <h3>扫码下载App进行抢单</h3>
        <div class="imgbox">
          <img 
            src="/images/28fast_download.png" 
            width="200" 
            height="200">
        </div>
        <div class="textbox">
          <p style="text-align: center;">扫码获得多权益：</p>
          <p>1.查看平台所有货源及联系方式，立即抢单达成交易</p>
          <p>2.订阅货源，第一时间获得系统消息通知，快人一步</p>
          <p>3.立即送2800元运费奖励，立马到账</p>
          <p>4.便捷查询我的运力撮合情况</p>
          <p>......</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Add',
  props: {
    isShowOrder: {
      type: Boolean,
      default: false
    },
    dataInfo: {
      type: [Array, Object],
      default: () => {}
    }
  },
  head: {
    link: [{ rel: 'stylesheet', href: '/layer3/css/layui.css' }],
    script: [{ src: '/layer/layer.js' }, { src: '/js/AFLC_API.js' }]
  },
  data() {
    return {
      dialogKey: 0
    }
  },
  async asyncData() {},
  computed: {
    isShow() {
      return this.isShowOrder
    }
  },
  watch: {
    info() {},
    isShowOrder: {
      handler(cval, oval) {
        if (cval) {
        }
      },
      deep: true
    }
  },
  mounted() {},
  methods: {
    closeMe() {
      this.$emit('update:isShowOrder', false)
    }
  }
}
</script>
<style lang="scss">
.wzlOrder {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  padding: 12% 30%;
}
.add1_content {
  width: 532px;
  float: left;
  background: #fff;
}

.closeMe {
  height: 40px;
  line-height: 40px;
  width: 100%;
  text-align: right;
  background: #dddddd;
  cursor: pointer;
}
.closeMe a {
  margin-right: 20px;
}
.imgbox {
  width: 100%;
  float: left;
  margin: 20px 0px;
}
.order_content {
  float: left;
  width: 100%;
  text-align: center;
}
.order_content h3 {
  line-height: 40px;
  height: 40px;
  float: left;
  text-align: center;
  width: 100%;
  font-weight: bold;
  font-size: 24px;
}
.textbox {
  float: left;
  margin-left: 100px;
  color: #2577e3;
}
.textbox p {
  text-align: left;
}
</style>
