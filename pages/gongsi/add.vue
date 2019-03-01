<template>
  <LllDialog
    :is-show="showDiv"
    @close="closeDialog"
    :title="popTitle">

    <div slot="header">我要申请入驻</div>
    <div
      class="dialog_publish_main"
      slot="main">
      <form
        class="layui-form"
        action=""
        style="width: 400px;padding-bottom: 30px">
        <div class="layui-form-item">
          <label class="layui-form-label"><i style="color: red">*</i>公司名称:</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              lay-verify="title"
              autocomplete="off"
              placeholder="请输入公司名称"
              class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label"><i style="color: red">*</i>联系人:</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              lay-verify="title"
              autocomplete="off"
              placeholder="请输入公司名称"
              class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label"><i style="color: red">*</i>电话:</label>
          <div class="layui-input-block">
            <input
              type="text"
              name="title"
              lay-verify="title"
              autocomplete="off"
              placeholder="请输入公司名称"
              class="layui-input">
          </div>
        </div>
        <div class="layui-form-item layui-form-text">
          <label class="layui-form-label">普通文本域</label>
          <div class="layui-input-block">
            <textarea
              placeholder="请输入内容"
              class="layui-textarea"/>
          </div>
        </div>
        <div class="layui-form-item">
          <div class="layui-input-block">
            <button
              class="layui-btn"
              lay-submit=""
              lay-filter="demo1"
              style="width: 290px">立即申请</button>
          </div>
        </div>
        <p
          style="padding-left: 30px;height: 30px;
    line-height: 30px;">您还可以选择在线咨询：<a href=""><img src="../../static/line/images/15qq.gif" >qq交谈</a></p>
      </form>
    </div>
    <div slot="footer"/>
  </LllDialog>
</template>
<script>
import LllDialog from '../../components/lllDialog'
export default {
  name: 'Add',
  components: {
    LllDialog
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // isShow: this.show,
      popTitle: '提货派车单'
    }
  },
  computed: {
    showDiv(n, o) {
      return this.show
      console.log(this.show, 'isAdd1')
    }
  },
  methods: {
    // 留言类型（type  ） 1-入驻 2-推荐
    closeDialog() {
      // this.show = false
      this.$emit('close')
      // this.$emit('update:show', false)

      //把绑定的弹窗数组 设为false即可关闭弹窗
    }
    // closeMe(done) {
    //   this.reset()
    //   this.$emit('update:popVisible', false)
    //   if (typeof done === 'function') {
    //     done()
    //   }
    // }
  }
}
</script>

<style scoped>
</style>
