<template>
  <div class="header_top">
    <div class="w1200">
      <div 
        v-if="!islogin"
        id="_userlogin1" 
        class="header_r1">您好，欢迎来到28快运!&nbsp;&nbsp; <a href="/login">请登录</a> <a href="/regisiter">免费注册</a></div>
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
          href="http://www.28tms.com">28TMS</a>
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
