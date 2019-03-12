<template>
  <div/>
</template>
<script>
export default {
  name: 'Exit',
  mounted() {
    let cookies = this.$cookies
    if (process.client) {
      cookies.remove('access_token')
      cookies.remove('login_mobile')
      cookies.remove('login_type')
      cookies.remove('loginId')
      cookies.remove('loginCompanyName')
      location.href = '/'
    }
  }
}
</script>
