<template>
  <form
    class="form_findme"
    name="zxaddform"
    method="post"
    action="">
    <input
      name="a7"
      type="hidden"
      value="0">
    <input
      type="hidden"
      name="mid"
      value="19">
    <input
      type="hidden"
      name="dopost"
      value="search">
    <div
      id="wlLineFrom"
      class="fl list_input"
      style="position:relative;">
      <input
        name="cfd"
        style="height: 100%;"
        data-level="district"
        type="text"
        placeholder="请输入出发地">
    </div>
    <div
      id="wlLineTo"
      class="fl list_input"
      style="position:relative;">
      <input
        name="ddd"
        style="height: 100%;"
        data-level="district"
        type="text"
        placeholder="请输入到达地">
    </div>
    <textarea
      v-model="form.memo"
      maxlength="100"
      placeholder="备注信息，如：期望发货时间、货物体积重量
等信息..."
      class="textare"/>
    <input
      v-model="form.msgMobile"
      placeholder="11位手机号 "
      autocomplete="off"
      class="textinput"
      maxlength="11">
    <input
      class="phone-btn"
      type="button"
      value="找到通知我"
      @click="callMe"
    >
    <p
      v-if="isTit"
      style="color: red">请输入正确手机号</p>
  </form>
  <!--<form-->
  <!--action=""-->
  <!--class="form_phone">-->
  <!--<span>出发地</span>-->
  <!--<div class="ltl-input">-->
  <!--<input-->
  <!--id="right-bar-form"-->
  <!--ref="rightbarorm"-->
  <!--autocomplete="off"-->
  <!--wtmap=""-->
  <!--type="text"-->
  <!--class="ltl-location"-->
  <!--placeholder="请选择出发地"-->
  <!--&gt;-->
  <!--<i class="ltl-icons ss56-common-sprite-icon ltl-ico-start"/>-->
  <!--</div>-->
  <!--&lt;!&ndash;<span>目的地</span>&ndash;&gt;-->
  <!--<div class="ltl-input">-->
  <!--<input-->
  <!--id="right-bar-to"-->
  <!--ref="rightbarto"-->
  <!--autocomplete="off"-->
  <!--wtmap=""-->
  <!--type="text"-->
  <!--class="ltl-location"-->
  <!--placeholder="请选择目的地">-->
  <!--<i class="ltl-icons ss56-common-sprite11 ltl-ico-end"/>-->
  <!--</div>-->
  <!--<div class="ltl-input">-->
  <!--<textarea-->
  <!--ref="textareaDiv"-->
  <!--v-model="form.memo"-->
  <!--maxlength="100"-->
  <!--class="textareaDiv"-->
  <!--placeholder="备注信息，如：期望发货时间、货物体积重量-->
<!--等信息..."/>-->
  <!--</div>-->
  <!--<div class="ltl-input">-->
  <!--<input-->
  <!--ref="phoneNum"-->
  <!--v-model="form.msgMobile"-->
  <!--type="text"-->
  <!--class="ltl-location phone-num"-->
  <!--placeholder="11位手机号"-->
  <!--style="width: 60%"-->
  <!--maxlength="11">-->
  <!--<input-->
  <!--class="phone-btn"-->
  <!--type="button"-->
  <!--value="找到通知我"-->
  <!--@click="callMe"-->
  <!--&gt;-->
  <!--</div>-->
  <!--<p-->
  <!--v-if="isTit"-->
  <!--style="color: red">请输入正确手机号</p>-->
  <!--&lt;!&ndash;<input&ndash;&gt;-->
  <!--&lt;!&ndash;id="check-fee"&ndash;&gt;-->
  <!--&lt;!&ndash;type="button"&ndash;&gt;-->
  <!--&lt;!&ndash;value="查询零担运费"&ndash;&gt;-->
  <!--&lt;!&ndash;class="right-top-btn">&ndash;&gt;-->
  <!--</form>-->
</template>

<script>
export default {
  name: 'SelectMap',
  props: {
    line: {
      type: Boolean,
      default: false
    }
  },
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
  watch: {
    line(n, o) {}
  },
  mounted() {
    seajs.use('../js/city-picker.js', function() {
      // console.log(this.$route.startp, 'this.$route.query')
      // $('#wlLineFrom input').citypicker({
      //   province: this.$route.query.startp ? this.$route.query.startp : '',
      //   city: this.$route.query.startc ? this.$route.query.startc : '',
      //   city: this.$route.query.starta ? this.$route.query.starta : ''
      // })
      // $('#wlLineTo input').citypicker({
      //   province: this.$route.query.endp ? this.$route.query.endp : '',
      //   province: this.$route.query.endc ? this.$route.query.endc : '',
      //   province: this.$route.query.enda ? this.$route.query.enda : ''
      // })
    })

    // console.log(this.$refs.rightbarorm.value, 'rightbarorm')
    // console.log(this.$refs.rightbarorm.thepcd, 'rightbarorm')
  },
  methods: {
    callMe() {
      // console.log(
      //   $('.form_findme .city-picker-span:eq(1) .select-item').text(),
      //   'text'
      // )
      // console.log(this.$refs.rightbarorm.value, 'rightbarorm')
      // console.log(
      //   this.$refs.rightbarorm.getAttribute('thepcd'),
      //   '12455rightbarorm'
      // )
      var validReg = window.AFLC_VALID
      // this.phoneNum = this.$refs.phoneNum.value
      this.form.startProvince = $(
        '.form_findme .city-picker-span:eq(0) .select-item:eq(0)'
      ).text()
      this.form.startCity = $(
        '.form_findme .city-picker-span:eq(0) .select-item:eq(1)'
      ).text()
      this.form.startArea = $(
        '.form_findme .city-picker-span:eq(0) .select-item:eq(2)'
      ).text()
      this.form.endProvince = $(
        '.form_findme .city-picker-span:eq(1) .select-item:eq(0)'
      ).text()
      this.form.endCity = $(
        '.form_findme .city-picker-span:eq(1) .select-item:eq(1)'
      ).text()
      this.form.endArea = $(
        '.form_findme .city-picker-span:eq(1) .select-item:eq(2)'
      ).text()
      if (this.form.msgMobile) {
        this.isTit = false
        if (validReg.MOBILE.test(this.form.msgMobile)) {
          this.isTit = false
          let aurl = ''

          this.$axios
            .post(aurl + '/28-web/helpFind/range/create', this.form)
            .then(res => {
              // console.log(res.data, 'resresres')
              if (res.data.status === 200) {
                layer.msg('提交成功，客服稍后将会与您联系')
                this.form.msgMobile = ''
                this.remForm()
                console.log(this.form, 'fomr')
              } else {
                layer.msg(
                  res.data.errorInfo ? res.data.errorInfo : res.data.text
                )
              }
            })
        } else {
          this.isTit = true
          this.form.msgMobile = ''
        }
      } else {
        this.isTit = true
      }
    },
    remForm() {
      // this.form = {
      //   msgMobile: '',
      //   memo: '',
      //   startProvince: '',
      //   startCity: '',
      //   startArea: '',
      //   endProvince: '',
      //   endCity: '',
      //   endArea: ''
      // }
      this.form.msgMobile = ''
      this.form.memo = ''
      if (this.line) {
        window.location.href = '/zhuanxian/list'
      } else {
        window.location.href = '/gongsi'
      }

      // this.form.startProvince = $(
      //   '.form_findme .city-picker-span:eq(0) .select-item:eq(0)'
      // ).text('')
      // this.form.startCity = $(
      //   '.form_findme .city-picker-span:eq(0) .select-item:eq(1)'
      // ).text('')
      // this.form.startArea = $(
      //   '.form_findme .city-picker-span:eq(0) .select-item:eq(2)'
      // ).text('')

      // this.form.endProvince = $(
      //   '.form_findme .city-picker-span:eq(1) .select-item:eq(0)'
      // ).text('')
      // this.form.endCity = $(
      //   '.form_findme .city-picker-span:eq(1) .select-item:eq(1)'
      // ).text('')
      // this.form.endArea = $(
      //   '.form_findme .city-picker-span:eq(1) .select-item:eq(2)'
      // ).text('')
      // $('.list-box-r-top #wlLineTo .city-picker-span').text('请输入到达地')
      // $('.list-box-r-top #wlLineFrom .city-picker-span').text('请输入出发地')
    }
  }
}
</script>

<style lang="scss">
.form_findme {
  padding-bottom: 20px;
  margin-bottom: 10px;
  .city-picker-span {
    padding-top: 7px;
  }
  .city-picker-span .arrow {
    background: url('../../static/images/index/01xx.png');
    top: 80%;
  }
  #wlLineFrom {
    width: 280px;
    background: #fff;
    padding-right: 20px;
    margin-bottom: 10px;
  }
  #wlLineTo {
    width: 280px;
    background: #fff;
    padding-right: 20px;
    margin-bottom: 10px;
    .list_input {
      width: 161px;
      height: 32px;
      border-radius: 2px;
      border: solid 1px #e5e5e5;
      background: none;
      color: #333;
      font-size: 13px;
      padding-left: 9px;
    }
  }
  .textare {
    width: 282px;
    height: 64px;
    padding: 10px 12px 10px 12px;
    border: solid 1px #e5e5e5;
    border-radius: 3px;
    margin-bottom: 10px;
  }
  .textinput {
    width: 180px;
    height: 34px;
    border: solid 1px #e5e5e5;
    line-height: 34px;
    padding-left: 13px;
  }
  .phone-btn {
    width: 100px;
    height: 34px;
    background-color: #589def;
    border: none;
    margin-left: 3px;
    color: #ffffff;
    cursor: pointer;
  }
  .phone-btn:hover {
    background-color: #2577ff;
  }
  /*.list-box-r-top {*/
  /*background: rgba(255, 255, 255, 0.1);*/
  /*padding-top: 0 !important;*/
  /*margin-bottom: 0px !important;*/
  /*}*/

  /*.phone-btn {*/
  /*font-size: 14px;*/
  /*padding: 7px 18px;*/
  /*margin-left: 10px;*/
  /*background-color: #589def;*/
  /*color: #ffffff;*/
  /*border-style: none;*/
  /*}*/
  /*.phone-btn:hover {*/
  /*background-color: #2577ff;*/
  /*}*/
}
</style>
