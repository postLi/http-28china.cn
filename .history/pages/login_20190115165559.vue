<template>
  <div class="content">
    <div class="login_wrap w1200">
      <div class="login-box">
        <form 
          id="form1" 
          name="form1" 
          method="POST" 
          action="index_do.php">
          <input 
            type="hidden" 
            name="fmdo" 
            value="login">
          <input 
            type="hidden" 
            name="dopost" 
            value="login">
          <input 
            type="hidden" 
            name="gourl" 
            value="">
          <!-- <h3>会员登录</h3> -->
          <div class="login-box-tab clearfix">
            <span 
              data-type="password" 
              class="active">密码登录</span><span data-type="smscode">短信登录</span>
          </div>
          <div class="inputbox userTypeinput"><span data-type="aflc-1">车主</span><span data-type="aflc-2">货主</span><span data-type="aflc-5">物流公司</span>
          </div>
          <div class="inputbox">
            <span class="icon icon-mobile"/>
            <input 
              id="usermobile" 
              type="text" 
              maxlength="11" 
              name="userid" 
              placeholder="请输入您的手机号">
          </div>
          <div class="inputbox passinput">
            <span class="icon icon-password"/>
            <input 
              id="userpwd" 
              type="password" 
              maxlength="20" 
              name="pwd" 
              placeholder="请输入您的密码">
          </div>
          <div class="inputbox vcodeinput">
            <input 
              id="uservcode" 
              type="text" 
              maxlength="5" 
              name="vdcode" 
              placeholder="请输入验证码">
            <div class="vcode"><img 
              id="vdimgck" 
              alt=""><span class="changeVcode">点击更换</span></div>
          </div>
          <div class="inputbox smscodeinput">
            <span class="icon icon-password"/>
            <input 
              id="usersmscode" 
              type="text" 
              maxlength="10" 
              name="smscode" 
              placeholder="请输入短信验证码">
            <span class="getsmscode">获取验证码</span>
          </div>
          
          <div class="login-btn">登录</div>
          <div class="other-btn">
            <a 
              href="../member/index_do.php?fmdo=user&dopost=regnew" 
              target="_blank">免费注册<i/></a>
            <a 
              href="/member/resetpassword.php" 
              target="_blank">忘记密码?</a>
          </div>
          <div class="login-other">其他方式登入</div>
          <div class="login-other-platform">
            <span class="login-weixin"/>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'login',

  fetch({ params, store, req, res, query, route }) {
    store.commit('login/setReg', false)
    store.commit('login/setPageType', 'login')
    store.commit('setPageClass', 'login-page')
    // return store.dispatch('login/SETREG', isReg)
  },
  mounted() {
    if (process.client) {
      window.seajs.use(['layer', 'api'], function() {
        seajs.use(['./js/regisiter.js'])
      })
    }
  }
}
</script>
