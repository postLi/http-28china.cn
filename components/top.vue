<template>
  <div class="header_top">
    <div
    class="header_top_top center" >
      <div class="header_r">
        <div
          id="_userlogin1"
          v-if="!islogin"
          class="header_r1">您好，欢迎来到28快运!&nbsp;&nbsp; <a href="/login">登录<div
            @click.stop.prevent 
            class="login-tipinfo">
            <div class="login-tipinfo-title">登录会员中心专享</div>
            <ul>
              <li>快速发布货源</li>
              <li>新增物流专线</li>
              <li>个人会员中心</li>
            </ul>
        </div></a> <a href="/regisiter">注册</a></div>
        <div
          v-if="islogin"
          id="_userlogin1_1"
          class="header_r1">
          <span class="chgoEm">您好，<span id="login_name1">{{ username }}</span>&nbsp;已登录</span>
          <a
            target="_blank"
            href="/hyzx/" >会员中心</a>
          <a
            class="exit_anfa"
            href="/exit">退出登录</a>
        </div>
        <div class="header_r2">

          <a href="/">首页</a>
          <a
            target="_blank"
            href="http://www.anfanet.com/download.html">APP下载</a>
          <a
            target="_blank"
            href="http://www.28tms.cn">28TMS</a>
          <a
            target="_blank"
            href="http://biz.28china.cn/">企业货主登录</a>
          <a
            target="_blank"
            href="/help/ggp/index.jhtml">帮助中心</a>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Top',
  data() {
    return {
      islogin: false,
      username: ''
    }
  },
  mounted() {
    let cookies = this.$cookies
    let acct = cookies.get('access_token')
    if (acct) {
      this.islogin = true
      this.username = cookies.get('login_mobile')
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  letter-spacing: normal;
}
.header_r1 {
  a:first-child {
    position: relative;
    display: inline-block;
    &:hover {
      .login-tipinfo {
        display: block;
      }
    }
  }

  .login-tipinfo {
    display: none;
    position: absolute;
    z-index: 3;
    top: 40px;
    left: 50%;
    margin-left: -125px;
    width: 200px;
    padding-left: 25px;
    padding-right: 25px;
    height: 160px;
    background: #fff;
    color: #333;
    border: 1px solid #aaaaaa;
    text-align: center;
    font-size: 14px;
    .login-tipinfo-title {
      line-height: 40px;
      border-bottom: 1px solid #e3e3e3;
    }
    li {
      line-height: 36px;
    }

    &:before,
    &:after {
      position: absolute;
      content: ' ';
      left: 115px;
      width: 0;
      height: 0;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
    }

    &:before {
      top: -9px;
      border-bottom: 10px solid #fff;
      z-index: 2;
    }
    &:after {
      top: -10px;
      border-bottom: 10px solid #aaaaaa;
    }
  }
}
.header_top {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  background-color: #eeeeee;
  position: relative;
  z-index: 3;
}
.header_top_top {
  width: 1400px;
  margin: 0 auto;
}
.header_r {
  /* float:left; */
}
.header_r1 {
  float: left;
  margin-right: 20px;
}
.header_r1 a {
  color: #fb5000;
  padding-left: 10px;
}
.header_r2 {
  float: right;
}
.header_r2 a {
  color: #333333;
  border-left: 1px solid #ccc;
  padding: 0 10px;
}
.header_r2 a em {
  font-family: normal;
  font-weight: bold;
}
</style>
