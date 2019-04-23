<template>
  <div class="header_top">
    <div class="w1200">
      <div 
        v-if="!islogin"
        id="_userlogin1" 
        class="header_r1">您好，欢迎来到28快运!&nbsp;&nbsp; <a href="/login">请登录<div
          @click.stop.prevent 
          class="login-tipinfo">
          <div class="login-tipinfo-title">登录会员中心专享</div>
          <ul>
            <li>快速发布货源</li>
            <li>新增物流专线</li>
            <li>个人会员中心</li>
          </ul>
        </div></a> <a href="/regisiter">免费注册</a>
        
      </div>
      <div 
        v-if="islogin"
        id="_userlogin1" 
        class="header_r1">您好，欢迎来到28快运!&nbsp;&nbsp; <a href="#">{{ username }}</a> <a href="/exit">[退出]</a></div>
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

</template>
<script>
export default {
  data() {
    return {
      islogin: false,
      username: ''
    }
  },
  mounted() {
    let cookies = this.$cookies
    if (process.client) {
      let acct = cookies.get('access_token')
      if (acct) {
        this.islogin = true
        this.username = cookies.get('login_mobile')
      }
      /* cookies.remove('login_type')
      cookies.remove('loginId')
      cookies.remove('loginCompanyName')
      location.href = '/' */
    }
  }
}
</script>
<style lang="scss" scoped>
.header_r1 {
  a:first-child {
    position: relative;
    display: inline-block;
  }

  .login-tipinfo {
    display: none;
    position: absolute;
    top: 40px;
    left: 50px;
  }
}
.arc_top1 {
  height: 80px !important;
  padding: 20px !important;
}
</style>
