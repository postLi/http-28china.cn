<template>
  <form
    action=""
    class="form_phone">
    <!--<span>出发地</span>-->
    <div class="ltl-input">
      <input
        id="right-bar-form"
        ref="rightbarorm"
        autocomplete="off"
        wtmap=""
        type="text"
        class="ltl-location"
        placeholder="请选择出发地"
      >
      <i class="ltl-icons ss56-common-sprite-icon ltl-ico-start"/>
    </div>
    <!--<span>目的地</span>-->
    <div class="ltl-input">
      <input
        id="right-bar-to"
        ref="rightbarto"
        autocomplete="off"
        wtmap=""
        type="text"
        class="ltl-location"
        placeholder="请选择目的地">
      <i class="ltl-icons ss56-common-sprite11 ltl-ico-end"/>
    </div>
    <div class="ltl-input">
      <textarea
        ref="textareaDiv"
        v-model="form.memo"
        maxlength="100"
        class="textareaDiv"
        placeholder="备注信息，如：期望发货时间、货物体积重量
等信息..."/>
    </div>
    <div class="ltl-input">
      <input
        ref="phoneNum"
        v-model="form.msgMobile"
        type="text"
        class="ltl-location phone-num"
        placeholder="11位手机号"
        style="width: 60%"
        maxlength="11">
      <input
        class="phone-btn"
        type="button"
        value="找到通知我"
        @click="callMe"
      >
    </div>
    <p
      v-if="isTit"
      style="color: red">请输入正确手机号</p>
      <!--<input-->
      <!--id="check-fee"-->
      <!--type="button"-->
      <!--value="查询零担运费"-->
      <!--class="right-top-btn">-->
  </form>
</template>

<script>
import $axios from 'axios'

export default {
  name: 'SelectMap',
  data() {
    return {
      phoneNum: '',
      isTit: false,
      form: {
        msgMobile: '',
        memo: ''
      }
    }
  },
  mounted() {
    // console.log(this.$refs.rightbarorm.value, 'rightbarorm')
    // console.log(this.$refs.rightbarorm.thepcd, 'rightbarorm')
  },
  methods: {
    callMe() {
      // console.log(this.$refs.rightbarorm.value, 'rightbarorm')
      console.log(
        this.$refs.rightbarorm.getAttribute('thepcd'),
        '12455rightbarorm'
      )
      var validReg = window.AFLC_VALID
      this.phoneNum = this.$refs.phoneNum.value
      this.form.startProvince = this.$refs.rightbarorm.getAttribute(
        'theprovince'
      )
      this.form.startCity = this.$refs.rightbarorm.getAttribute('thecity')
      this.form.startArea = this.$refs.rightbarorm.getAttribute('thearea')
      this.form.endProvince = this.$refs.rightbarorm.getAttribute('theprovince')
      this.form.endCity = this.$refs.rightbarorm.getAttribute('thecity')
      this.form.endArea = this.$refs.rightbarorm.getAttribute('thearea')
      if (validReg.MOBILE.test(this.form.msgMobile)) {
        this.isTit = false
        let aurl = ''
        if (process.server) {
          aurl = 'http://localhost:3000'
        }
        let res = $axios.post(aurl + '/28-web/helpFind/range', this.form)
        console.log(res, 'res')
        layer.alert('请求出错了，请尝试刷新页面')
      } else {
        this.isTit = true
        this.form.msgMobile = ''
        // layer.alert('请求出错了，请尝试刷新页面11')
        // $('.phone-num').val().length = 0
      }
    }
  }
}
</script>

<style lang="scss">
.form_phone {
  .list-box-r-top {
    background: rgba(255, 255, 255, 0.1);
    padding-top: 0 !important;
    margin-bottom: 0px !important;
  }

  .phone-btn {
    font-size: 14px;
    padding: 7px 18px;
    margin-left: 10px;
    background-color: #589def;
    color: #ffffff;
    border-style: none;
  }
  .phone-btn:hover {
    background-color: #2577ff;
  }
}
</style>
