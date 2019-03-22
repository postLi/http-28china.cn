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

    if (process.client) {
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
