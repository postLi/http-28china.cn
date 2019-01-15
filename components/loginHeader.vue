<template>
  <div class="header">
    <TopNav />
    <div class="header_middle ">
      <div class="w1200">
        <a 
          href="/" 
          class="logo"><img 
            src="/img/logor.png" 
            alt="安发中国"></a>
        <div 
          v-if="$store.state.login.pageType === 'login'" 
          class="login-text">
          登录
        </div>
        <div 
          v-if="$store.state.login.pageType === 'findpassword'" 
          class="fpassword-text">
          找回密码
        </div>
        <div class="header_link">
          <p v-if="$store.state.login.isReg">如注册遇到问题，请拨打客服热线：400-9992828</p>
          <a href="/">返回首页</a><a 
            href="/plus/list.php?tid=88" 
            target="_blank" 
            class="help_link">使用帮助</a>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import TopNav from './public/topNav.vue'
export default {
  components: {
    TopNav
  }
}
</script>
