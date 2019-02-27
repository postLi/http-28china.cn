<template>
  <div 
    v-show="isShow" 
    class="popDialog">
    <div 
      :key="dialogKey" 
      class="add1_content">
      <div 
        class="closeMe" 
        @click="closeMe()"><a>关闭</a></div>
      <div 
        class="huo_content" 
        @click="handleView()"
      >
        <h4>您要订阅的货源：广州到长沙</h4>
        <ul class="cont_ul">
          <li class="cont_ul_li">
            <span 
              :class="isActiveFirst?'actives' :''"
              @click="handleView()"
            >我是物流公司</span>
            <span 
              :class="isActiveFirst?'' :'actives'"
              @click="handleView()" >我是车主</span>
          </li>
          <li 
          class="cont_ul_li" >
            <input 
              class="text_phone"
              type="text" 
              placeholder="请输入手机号">
            <p class="text_err">*手机号格式不正确</p>
          </li>
          <li class="cont_ul_li">
            <input 
              class="text_num"
              type="text" 
              placeholder="请输入验证码">
            <a class="text_yzm">获取验证码</a>
            <p class="text_err">*验证码不正确</p>
          </li>
          <li class="cont_ul_li">
            <input 
              class="text_btn"
              type="text" 
              value="提交" 
              readonly>
          </li>
          <p>提交成功后平台将会为您智能筛选，实时推荐即时货源</p>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Add',
  props: {
    isShowAdd: {
      type: Boolean,
      default: false
    }
  },
  info: {
    props: [Array, Object],

    default: () => {}
  },
  data() {
    return {
      isActiveFirst: true,
      dialogKey: 0
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
  mounted() {
    this.handleView()
  },
  methods: {
    handleView() {
      this.isActiveFirst = !this.isActiveFirst
    },
    closeMe() {
      this.$emit('update:isShowAdd', false)
    },
    optenAdd() {}
  }
}
</script>
<style lang="scss">
.popDialog {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  padding: 20% 20%;
}
.add1_content {
  width: 50%;
  height: 50%;
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
  a {
    margin-right: 20px;
  }
}
.huo_content {
  width: 100%;
  height: 100%;
  text-align: center;
  h4 {
    font-size: 22px;
    height: 22px;
    line-height: 22px;
    padding: 20px;
  }
  .cont_ul {
    float: left;
    margin: 0 20%;
    .cont_ul_li {
      cursor: pointer;
      margin: 20px 0;
      position: relative;

      .text_phone {
        width: 358px;
        height: 40px;
        border-radius: 4px;
        border: solid 1px #cccccc;
        padding-left: 8px;
      }
      .text_num {
        width: 358px;
        height: 40px;
        border-radius: 4px;
        border: solid 1px #cccccc;
        padding-left: 8px;
      }
      .text_yzm {
        display: block;
        position: absolute;
        right: 26px;
        top: 13px;
        color: #2577e3;
      }
      .text_btn {
        width: 365px;
        height: 40px;
        border-radius: 4px;
        border: solid 1px #ffb65f;
        text-align: center;
        background-color: #ffb65f;
        color: #fff;
        cursor: pointer;
      }
      .text_err {
        text-align: left;
        font-size: 12px;
        margin-left: 18px;
        margin-top: 5px;
        color: #f77d07;
      }
    }
    .cont_ul_li:nth-child(1) {
      float: left;
      span {
        width: 172px;
        float: left;
        line-height: 40px;
        display: block;
        height: 40px;
        border-radius: 4px;
        border: solid 1px #cccccc;
        color: #333333;
        margin: 0 10px;
        font-weight: bold;
      }
    }
  }
}
</style>
