<template>
  <div class="wzl-popDialog">
    <div class="popDialog">
      <div class="popDialog-header">
        <slot name="title">{{ title }}</slot>
        <div 
          class="close" 
          @click="closeMe()"><a>关闭</a></div>
      </div>
      <div 
      class="popDialog-main">
        <slot name="content">内容</slot>
      </div>
      <!-- <div class="popDialog-footer">
        <slot name="footer">底部</slot>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: '546'
    },
    title: {
      type: String,
      default: '标题'
    },
    isShow: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    shouldRender() {
      return this.isShow
    }
  },
  methods: {
    closeMe() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss">
.wzl-popDialog {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.popDialog {
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
.popDialog-header {
  height: 40px;
  line-height: 40px;
  background: #ffb65f;
  position: relative;
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-weight: bold;
}
.popDialog-main {
  min-width: 400px;
  min-height: 300px;
  background: #fff;
}
.close {
  position: absolute;
  display: block;
  text-align: center;
  width: 60px;
  height: 40px;
  right: 0px;
  bottom: 0px;
}
</style>
