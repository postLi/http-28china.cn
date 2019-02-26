<template>
  <div>344</div>
  <!--<div -->
  <!--:isShow="popVisible" -->
  <!--class="showFind">-->
  <!--<form action="">-->
  <!--<h5>闪电服务</h5>-->
  <!--<p>您要寻找的专线:广州至深圳专线</p>-->
  <!--<div class="layui-form-item">-->
  <!--<label class="layui-form-label">输入框</label>-->
  <!--<div class="layui-input-block">-->
  <!--<input-->
  <!--type="text"-->
  <!--name="title"-->
  <!--required-->
  <!--lay-verify="required"-->
  <!--placeholder="请输入标题"-->
  <!--autocomplete="off"-->
  <!--class="layui-input">-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="layui-form-item">-->
  <!--<div class="layui-input-block">-->
  <!--<button-->
  <!--class="layui-btn"-->
  <!--lay-submit-->
  <!--lay-filter="formDemo">立即提交</button>-->
  <!--<button-->
  <!--type="reset"-->
  <!--class="layui-btn layui-btn-primary">重置</button>-->
  <!--</div>-->
  <!--</div>-->
  <!--</form>-->
  <!--</div>-->
</template>

<script>
export default {
  name: 'ShowFind',
  props: {
    info: {
      type: [Object, Array],
      default: () => {}
    },
    popVisible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    popVisible(newVal, oldVal) {
      console.log(newVal, 'newVal')
    }
  },
  methods: {
    //   form.on('submit(formDemo)', function(data){
    //   layer.msg(JSON.stringify(data.field));
    //   return false;
    // });
    // });
  }
}
</script>

<style scoped>
</style>
