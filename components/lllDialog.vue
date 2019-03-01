<template>
  <div class="dialog">
    <div
      class="dialog-cover back"
      v-if="showdiv"
      @click="closeMyself"/>
    <transition name="drop">
      <div
        class="dialog-content"
        v-if="showdiv">
        <div class="dialog_head back">
          <div
            style="float: left"
            class="dialog_tit">
            <slot
              name="header"
              style="float: left;">{{ title }}</slot>
          </div>
          <div
            class="layui-btn-group"
            style="float: right"
            @click="closeMyself"
          >
            <button
              type="text"
              style="background: #fff;border: none;cursor: pointer">
              <i
                class="layui-icon layui-icon-face-smile"
                style="font-size: 30px; color: #1E9FFF;"/>
                <!--<img-->
                <!--src="../static/gongsi/images/close.png"-->
                <!--alt=""-->
                <!--width="30"-->
                <!--&gt;-->
            </button>
          </div>
        </div>
        <div
        class="dialog_main">
          <slot name="main">内容</slot>
        </div>
        <div class="dialog_footer">
          <slot name="footer">底部</slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      //弹窗组件是否显示 默认不显示
      type: Boolean,
      default: false,
      required: true //必须
    },
    title: {
      type: String,
      default: '标题'
    },
    //下面这些属性会绑定到div上面 详情参照上面的html结构
    // 如： :style="{top:topDistance+'%',width:widNum+'%'}"
    widNum: {
      //内容宽度
      type: Number,
      default: 86.5
    },
    leftSite: {
      type: Number,
      default: 6.5
    },
    topDistance: {
      type: Number,
      default: 35
    },
    pdt: {
      type: Number,
      default: 22
    },
    pdb: {
      type: Number,
      default: 47
    }
  },
  computed: {
    showdiv(n) {
      return this.isShow
    }
  },
  methods: {
    closeMyself() {
      this.$emit('close')
      //如果需要传参的话，可以在"on-close"后面再加参数，然后在父组件的函数里接收就可以了。
    }
  }
}
</script>
<!--<dialogComponent :is-show="status.isShowPublish" :top-distance="status.topNum">-->
<style lang="scss">
// 最外层 设置position定位
.dialog {
  position: relative;
  color: #2e2c2d;
  font-size: 16px;

  .dialog-cover {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 546px;
    box-shadow: -2px 0px 8px 0px rgba(169, 169, 169, 0.35);
    border-radius: 5px;
    z-index: 300;
    background: #fff;
  }
  .dialog_head {
    .dialog_tit {
      display: inline-block;
      width: 89%;
      padding: 10px;
      text-align: center;
      color: #666;
      font-size: 18px;
    }
  }
  .dialog_main {
    padding: 10px;
    display: inline-block;
    font-size: 14px;
  }
}
</style>
