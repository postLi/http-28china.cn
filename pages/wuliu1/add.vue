<template>
  <LllDialog
    :is-show="showDiv"
    @close="closeDialog"
    :title="popTitle">

    <div slot="header">园区免费入驻</div>
    <div
      class="dialog_publish_main"
      slot="main">
      <form
        class="layui-form"
        action=""
        style="width: 400px;">
        <div 
          style="margin-bottom:30px"
          class="layui-form-item">
          <label class="layui-form-label"><i style="color: red">*</i>园区名称:</label>
          <div class="layui-input-block">
            <input
              maxlength="30"
              type="text"
              placeholder="请输入园区名称"
              class="layui-input"
              v-model="form.companyName">
          </div>
          <!--<p-->
          <!--v-if="isCompanyName" 说我压力抗不住啊，-->
          <!--style="color: red;text-align: center">请输入公司名称</p>-->
        </div>
        <div 
          style="margin-bottom:30px"
          class="layui-form-item">
          <label class="layui-form-label"><i style="color: red">*</i>园区地址:</label>
          <div class="layui-input-block">
            <input
              type="text"
              placeholder="请输入园区地址"
              class="layui-input"
              maxlength="11"
              v-model="form.mobile">
          </div>
          <!--<p-->
          <!--v-if="ismobile"-->
          <!--style="color: red;text-align: center">请输入电话</p>-->
        </div>
        <div 
          style="margin-bottom:30px"
          class="layui-form-item">
          <label class="layui-form-label"><i style="color: red">*</i>联系人:</label>
          <div class="layui-input-block">
            <input
              maxlength="20"
              type="text"
              placeholder="请输入联系人姓名"
              class="layui-input"
              v-model="form.contactsName">
            <p
              v-if="ismobile"
              style="color: red;text-align: center;padding-top:10px">{{ falseMsg }}</p>
          </div>
  
      </div></form>
      <div
        class=""
        style="">
        <button
          class=""
          style="width: 290px;margin-left: 110px;;padding: 10px 0;background: rgb(50,170,86);border: none;color:#fff"
          @click="onTIJ">提交</button>
        <p
          style="margin-left: 110px;;height: 30px;
    line-height: 30px;font-size:16px;padding-top:25px">提交成功后客服将在一个工作日内与您取得联系</p>
        <p style="margin-left: 110px;;height: 30px;line-height: 30px;font-size:20px;color:rgb(50,170,86);padding:20px 0 20px 20px">免费咨询  400-999-2828

        </p>
      </div>

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
    },
    types: {
      type: Number,
      default: 1
    },
    info: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // isShow: this.show,
      popTitle: '提货派车单',
      falseMsg: '',
      form: {
        companyName: '',
        contactsName: '',
        msg: '',
        mobile: ''
      },
      isCompanyName: false,
      isContactsName: false,
      ismobile: false
    }
  },

  computed: {
    showDiv(n, o) {
      return this.show
      // console.log(this.show, 'isAdd1')
    }
  },
  watch: {
    types(n, o) {},
    info(n, o) {},
    showDiv(n, o) {
      if (n == true) {
        // console.log(this.info, 'info')
      } else {
        this.info == ''
      }
      // console.log(n, 'showDivshowDiv')
    }
  },
  mounted() {},
  methods: {
    onTIJ() {
      let aurl = ''

      if (!this.form.companyName.length) {
        this.ismobile = true
        this.falseMsg = '请输入公司名称'
        return false
      }
      if (!this.form.contactsName.length) {
        this.ismobile = true
        this.falseMsg = '请输入联系人'
        return false
      }
      if (!this.form.mobile.length) {
        this.ismobile = true
        this.falseMsg = '请输入电话'
        return false
      }
      if (this.form.mobile) {
        this.ismobile = false
        var validReg = window.AFLC_VALID
        if (!validReg.MOBILE.test(this.form.mobile)) {
          this.ismobile = true
          this.form.mobile = ''
          this.falseMsg = '请输入正确的电话'
          return false
        }
      }
      if (this.types == 1) {
        this.form.type = 1
        this.form.source = 1
      } else {
        this.form.type = 2
        this.form.source = 2
      }
      console.log(this.form, 'this.form')
      this.$axios
        .post(
          // /leavingmsg/
          // 插入物流公司留言信息表信息
          aurl + '/28-web/leavingmsg/',
          this.form
        )
        .then(res => {
          console.log(res, 'ressss')
          if (res.data.status == 200) {
            layer.msg(
              '提交成功，客服稍后将会与您联系',
              {
                tiem: 3000
              },
              () => {}
            )
            this.$emit('close')
            this.form = {}
          } else {
            // res.data.status
          }
        })
    },
    // 留言类型（type  ） 1-入驻 2-推荐
    closeDialog() {
      this.$emit('close')
      this.form = {}
      this.ismobile = false
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
