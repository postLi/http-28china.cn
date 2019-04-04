<template>
  <LllDialog
    :is-show="showDiv"
    @close="closeDialog"
    :title="popTitle">

    <div slot="header">{{ title }}</div>
    <div
      class="dialog_publish_main"
      slot="main">
      <form
        class="layui-form"
        action=""
        style="width: 400px;">
        <div class="layui-form-item">
          <label class="layui-form-label"><i style="color: red">*</i>公司名称:</label>
          <div class="layui-input-block">
            <input
              maxlength="30"
              type="text"
              placeholder="请输入公司名称"
              class="layui-input"
              v-model="form.companyName">
          </div>
         
        </div>

        <div class="layui-form-item">
          <label class="layui-form-label"><i style="color: red">*</i>联系人:</label>
          <div class="layui-input-block">
            <input
              maxlength="20"
              type="text"
              placeholder="请输入联系人"
              class="layui-input"
              v-model="form.contactsName">
          </div>
         
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label"><i style="color: red">*</i>电话:</label>
          <div class="layui-input-block">
            <input
              type="text"
              placeholder="请输入电话"
              class="layui-input"
              maxlength="11"
              v-model="form.mobile">
          </div>
         
        </div>

        <div class="layui-form-item layui-form-text">
          <label class="layui-form-label">给我留言:</label>
          <div class="layui-input-block">
            <textarea
              maxlength="100"
              placeholder="请输入留言"
              class="layui-textarea"
              v-model="form.msg"/>
          </div>
          <p
            v-if="ismobile"
            style="color: red;text-align: center">{{ falseMsg }}</p>
        </div>


      </form>
      <div
        class=""
        style="">
        <button
          class=""
          style="width: 290px;margin-left: 110px;;padding: 10px 0;background: #0d91e9;border: none;color:#fff"
          @click="onTIJ">立即申请</button>
        <p
          style="margin:10px 0 30px 110px;;height: 30px;
    line-height: 30px;">您还可以选择在线咨询：<a 
    href="http://wpa.qq.com/msgrd?v=3&uin=4009992828
&site=qq&menu=yes
              &site=qq&menu=yes&quot;"
              target="_blank"
        ><img src="../../static/line/images/15qq.gif" >QQ交谈</a></p>
       
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
    }
  },
  data() {
    return {
      title: '',
      popTitle: '单',
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
    }
  },
  watch: {
    types(n, o) {
      if (n == '1') {
        this.title = '我要申请入驻'
      } else {
        this.title = '申请成为推荐企业'
      }
    }
  },
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
      this.$axios.post(aurl + '/28-web/leavingmsg/', this.form).then(res => {
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
    closeDialog() {
      this.$emit('close')
      this.form = {}
      this.ismobile = false
    }
  }
}
</script>

<style scoped>
</style>
