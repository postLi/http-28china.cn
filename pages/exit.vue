<template>
  <div class="showlogoutinfo"> 正在退出登录......</div>
</template>
<script>
export default {
  name: 'Exit',
  layout: 'empty',
  mounted() {
    let cookies = this.$cookies
    if (process.client) {
      cookies.set('access_token', '')
      cookies.set('login_mobile', '')
      cookies.set('login_type', '')
      cookies.set('loginId', '')
      cookies.set('loginCompanyName', '')
      cookies.set('login_userId', '')
      cookies.set('login_userToken', '')
      cookies.set('login_userName', '')
      location.href = '/'
    }
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
