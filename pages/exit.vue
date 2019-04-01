<template>
  <div class="showlogoutinfo"> 正在退出登录......</div>
</template>
<script>
export default {
  name: 'Exit',
  layout: 'empty',
  mounted() {
    let cookies = this.$cookies
    cookies.remove('access_token')
    cookies.remove('login_mobile')
    cookies.remove('login_type')
    cookies.remove('loginId')
    cookies.remove('loginCompanyName')
    cookies.remove('login_userId')
    cookies.remove('login_userToken')
    cookies.remove('login_userName')

    // 获取域名
    var domain = location.hostname
    if (domain.indexOf('28kuaiyun.cn') !== -1) {
      domain = '.28kuaiyun.cn'
    }
    var opt = {
      domain: domain
    }

    $.cookie('access_token', null, opt)
    $.cookie('login_mobile', null, opt)
    $.cookie('login_type', null, opt)
    $.cookie('loginId', null, opt)
    $.cookie('loginCompanyName', null, opt)
    $.cookie('login_userId', null, opt)
    $.cookie('login_userToken', null, opt)
    $.cookie('login_userName', null, opt)

    location.href = '/'
  }
}
</script>
<style lang="scss">
.showlogoutinfo {
  margin: 30px auto;
  border: 1px solid #ccc;
  background: #eee;
  text-align: center;
  width: 300px;
  height: 100px;
  line-height: 100px;
}
</style>
