<template>
  <div 
    v-show="isShow" 
    class="wzlAdd">
    <div 
      :key="dialogKey" 
      class="add1_content">
      <div 
        class="closeMe" 
        @click="closeMe()"><a>关闭</a></div>
      <div class="huo_content">
        <h4>您要选择的车源：{{ dataInfo.startCity + '至' + dataInfo.endCity + '车源' }}</h4>
        <ul class="cont_ul">
          <div class="layui-form-item">
            <div class="layui-input-block">
              <select 
                name="city" 
                @click="selectd"
                v-model="carType"
                lay-verify="required">
                <option 
                  value="" 
                  disabled 
                  selected>请选择您需要的车型</option>
                <option 
                  v-for="(item,index) in selectData"
                  :key="index" 
                  :value="item.code">{{ item.name }}</option>
              </select>
              <p 
                class="text_err" 
                style="margin-left:81px;">{{ Showtextnum ? '*' + numErr : '' }}</p>
            </div>
          </div>
          <li class="cont_ul_li" >
            <input 
              v-model="mobile"
              name="title" 
              required 
              autocomplete="off"
              lay-verify="required" 
              maxlength="11" 
              class="text_phone"
              @keyup.enter="done()"
              type="text" 
              placeholder="请输入手机号">
            <p class="phone_err">{{ ShowmobileErr? '*' + mobileErr : '' }}</p>
          </li>
          <li class="cont_ul_li">
            <input 
              class="text_btn"
              type="text" 
              value="找到通知我" 
              readonly
              @click="submitBtn()">
          </li>
        </ul>
        <p>提交成功后平台将会为您智能筛选，实时推荐即时货源</p>
      </div>
    </div>
  </div>
</template>
<script>
import $axios from 'axios'
export default {
  name: 'Add',
  props: {
    isShowAdd: {
      type: Boolean,
      default: false
    },
    dataInfo: {
      type: [Array, Object],
      default: () => {}
    }
  },
  head: {
    link: [{ rel: 'stylesheet', href: '/layer3/css/layui.css' }],
    script: [{ src: '/layer/layer.js' }, { src: '/js/AFLC_API.js' }]
  },
  data() {
    return {
      isActiveFirst: true,
      dialogKey: 0,
      getMoblie: '',
      ShowmobileErr: false,
      Showtextnum: false,
      showTitme: '',
      selectData: [],
      carType: '',
      mobile: '',
      textnum: '',
      userType: '',
      times: 60,
      mobileErr: ''
    }
  },
  computed: {
    isShow() {
      return this.isShowAdd
    }
  },
  watch: {
    info() {},
    isShowAdd: {
      handler(cval, oval) {
        if (cval) {
        }
      },
      deep: true
    }
  },
  mounted(val) {
    $axios
      .get('/api/28-web/sysDict/getSysDictByCodeGet/AF018')
      .then(res => {
        console.log(res)
        if (res.data.status === 200) {
          this.selectData = res.data.data
        }
      })
      .catch(err => {
        console.log('提交捕获异常')
      })
  },
  methods: {
    closeMe() {
      this.$emit('update:isShowAdd', false)
      this.reset()
      // this.dialogKey = Math.random()
    },
    selectd(val) {
      this.carType = val.target.value
      if (this.carType !== '') {
        this.Showtextnum = false
      }
    },
    reset() {
      this.mobile = ''
    },
    submitBtn() {
      let _this = this
      var validReg = window.AFLC_VALID
      var AFLC_VALID = window.AFLC_VALID
      this.dataInfo.mobile = _this.mobile
      this.dataInfo.carType = _this.carType
      console.log(this.carType)
      if (this.mobile) {
        if (validReg.MOBILE.test(this.mobile)) {
          this.Showtextnum = false
          this.ShowmobileErr = false
          this.numErr = ''
          this.mobileErr = ''
        } else {
          this.ShowmobileErr = true
          this.mobileErr = '请填写有效的手机号'
        }
      } else {
        this.ShowmobileErr = true
        this.mobileErr = '请填写手机号'
        return
      }

      if (this.mobile && this.carType != '') {
        this.Showtextnum = false
        $axios
          .post('/api/28-web/helpFind/carInfo/create', this.dataInfo)
          .then(res => {
            if (res.data.status === 100) {
              layer.msg('操作成功')
              this.reset()
            }
          })
          .catch(err => {
            console.log('捕获异常')
          })
      } else {
        this.Showtextnum = true
        this.numErr = '请选择您需要的车型'
        return
      }
    }
  }
}
</script>
<style lang="scss">
.wzlAdd {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  padding: 12% 30%;
}
a {
  cursor: pointer;
}
.add1_content {
  width: 532px;
  float: left;
  background: #fff;
}
.actives {
  border: solid 1px #ffb65f !important;
  color: #ffb65f !important;
}
.closeMe {
  height: 40px;
  line-height: 40px;
  width: 100%;
  text-align: right;
  background: #dddddd;
}
.closeMe a {
  margin-right: 20px;
}
.text_phone {
  width: 358px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #cccccc;
  padding-left: 8px;
  margin-left: 18px;
}

.cont_ul_li a {
  display: block;
  position: absolute;
  right: 26px;
  top: 13px;
  color: #2577e3;
}
.text_btn {
  width: 368px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #ffb65f;
  text-align: center;
  background-color: #ffb65f;
  color: #fff;
  cursor: pointer;
  margin-left: 18px;
  margin-bottom: 20px;
}
.phone_err {
  text-align: left;
  font-size: 12px;
  margin-left: 18px;
  margin-top: 5px;
  color: #f77d07;
  position: absolute;
}
.text_err {
  text-align: left;
  font-size: 12px;
  margin-left: 18px;
  margin-top: 5px;
  color: #f77d07;
  position: absolute;
}
.cont_ul_li {
  cursor: pointer;
  margin: 20px 0 0 63px;
  float: left;
  position: relative;
}
.cont_ul p {
  float: left;
  margin-left: 26px;
}
.cont_ul_li:nth-child(1) {
  float: left;
}
.cont_ul_li:nth-child(1) span {
  width: 170px;
  float: left;
  line-height: 40px;
  display: block;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #cccccc;
  color: #333333;
  font-weight: bold;
  margin-left: 21px;
}
.cont_ul {
  float: left;
}
.huo_content {
  float: left;
  // margin: 20px 62px;
  text-align: center;
  padding-bottom: 20px;
}
.huo_content h4 {
  font-size: 22px;
  height: 22px;
  line-height: 22px;
  padding: 20px;
}
.layui-input-block select {
  width: 368px;
  height: 42px;
  border-radius: 4px;
  border: solid 1px #cccccc;
}
.layui-input-block {
  margin-left: 0px !important;
}
</style>
