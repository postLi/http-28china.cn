<template>
  <div class="dialog">
    <div
      class="dialog-cover back"
      v-if="showdiv"
      @click="closeMyself"/>
    <transition name="slide-fade">
      <div
        class="dialog-content"
        v-if="showdiv">
        <div class="dialog_head back">
          <div
            style="float: left"
            class="dialog_tit">
            <slot
              name="header"
              style="float: left;margin-left:50px;">{{ title }}</slot>
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
                class="layui-icon layui-icon-close"
                style="font-size: 30px; color: #1E9FFF;"/>
              
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
      type: Boolean,
      default: false,
      required: true
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    showdiv(n) {
      return this.isShow
    }
  },
  mounted() {
    // seajs.use('../js/city-picker.js', function() {})
  },
  methods: {
    closeMyself() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss">
.dialog {
  position: relative;
  color: #2e2c2d;
  font-size: 16px;

  .dialog_main {
    margin: 0 30px;
  }
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
    top: 30%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 746px;
    box-shadow: -2px 0px 8px 0px rgba(169, 169, 169, 0.35);
    border-radius: 5px;
    z-index: 300;
    background: #fff;
  }
  .dialog_head {
    height: 44px;
    background: #3f94ee;
    color: #fff;
    .dialog_tit {
      display: inline-block;
      width: 89%;
      padding: 10px;
      text-align: center;
      font-size: 18px;
    }
  }
  .dialog_main {
    padding: 10px;
    display: inline-block;
    font-size: 14px;
  }
  .layui-btn-group {
    padding: 5px;
  }
}
</style>
