<template>
  <LllDialog :is-show="isShowPublish">

    <div slot="header">插入到name为header的slot标签里面</div>
    <div
      class="dialog_publish_main"
      slot="main">
      这里是内容插入到子组件的slot的name为main里面，可以在父组件中添加class定义样式，事件类型等各种操作
    </div>
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
    isAdd: {
      type: Boolean,
      default: () => {}
    }
  },
  data() {
    return {
      isShowPublish: false
    }
  },

  methods: {
    closeDialog() {
      this.isShowPublish = false
      //把绑定的弹窗数组 设为false即可关闭弹窗
    }
  }
}
</script>

<style scoped>
</style>
