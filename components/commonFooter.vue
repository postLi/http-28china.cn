<template>
  <div>
    <div class="footer clear">
      <div 
        class="w1200 center " 
        style="background-color: #ddd;">
        <div class="footer1  center">

          <a href="/plus/list.php?tid=4">找物流专线</a>
          <a href="/plus/list.php?tid=3">找车源</a>
          <a href="/plus/list.php?tid=2">找货源</a>
          <a href="javascript:void(0)">精选案例</a>
          <a href="/plus/list.php?tid=12">资讯动态</a>
          <a href="http://www.anfanet.com/about.html">关于我们</a>
          <a href="http://www.anfanet.com/tech-info.html">帮助中心</a>
        </div>
        <div class="footer2 center">
          <p>版权所有：28快运|客服免费电话：400-9992828</p>
          <p>备案：<a 
            href="http://www.miitbeian.gov.cn/" 
            target="_blank">粤ICP备16061301号-4</a></p>
          <p>Copyright © 2018-2021 anfachina.com All rights reserved</p>
        </div>
      </div>
    </div>


    <div class="login_box">
      <div class="login_close"><img src="/templets/default/images/login_close.png" ></div>
      <div class="login_box_bt">
        <div class="login_bt1">密码登录</div>
        <div class="login_bt2">验证码登录</div>

      </div>
      <div class="pwd_login">
        <!--<form name="form1" id="form1" method="POST" action="/member/index_do.php">-->
        <form 
          id="form1" 
          name="form1" >
          <input 
            type="hidden" 
            name="fmdo" 
            value="login">
          <input 
            type="hidden" 
            name="dopost" 
            value="login2">
          <input 
            id="userType" 
            type="hidden" 
            name="userType" >
          <input 
            type="hidden" 
            name="gourl" 
            value="" >
          <ul>

            <li class="userType" ><input 
              type="button" 
              name="aflc-5" 
              value="物流公司"><input 
                type="button" 
                name="aflc-2" 
                value="货主"><input 
                  type="button" 
                  name="aflc-1" 
                  value="车主"></li>
            <li class="usermobile" > <input 
              id="usermobile" 
              type="text" 
              value="" 
              name="userid" 
              placeholder="请输入您的手机号"></li>
            <li class="userpwd"> <input 
              id="userpwd" 
              type="password" 
              value="" 
              name="pwd" 
              autocomplete="off" 
              placeholder="请输入您的密码"></li>
            <div class="inputbox vcodeinput">
              <input 
                id="uservcode" 
                type="text" 
                maxlength="5" 
                name="vdcode" 
                placeholder="请输入验证码">
              <div class="vcode"><img 
                id="Vcode" 
                alt=""><span id="changeVcode">点击更换</span></div>
            </div>
            <li class="userreg"><a 
              href="/member/index_do.php?fmdo=user&dopost=regnew" 
              target="_blank"><span>免费注册</span></a><i/><a 
                href="/member/resetpassword.php" 
                target="_blank"><span>忘记密码?</span></a></li>
            <li class="submit"> <input 
              class="login-btn" 
              readonly="" 
              value="登录" ></li>
          </ul>
        </form>
      </div>

      <div class="yzm_login">
        <!--<form name="form1" id="form1" method="POST" action="/member/index_do.php">-->
        <form 
          id="form2" 
          name="form2" >
          <input 
            type="hidden" 
            name="fmdo" 
            value="login">
          <input 
            type="hidden" 
            name="dopost" 
            value="login3">
          <input 
            id="userType2" 
            type="hidden" 
            name="userType2" >
          <input 
            type="hidden" 
            name="gourl" 
            value="" >
          <ul>

            <li class="userType2" ><input 
              type="button" 
              name="aflc-5" 
              value="物流公司"><input 
                type="button" 
                name="aflc-2" 
                value="货主"><input 
                  type="button" 
                  name="aflc-1" 
                  value="车主"></li>
            <li class="usermobile" > <input 
              id="usermobile2" 
              type="text" 
              value="" 
              name="userid" 
              placeholder="请输入您的手机号"></li>
            <div class="inputbox vcodeinput">
              <input 
                id="uservcode2" 
                type="text" 
                maxlength="5" 
                name="vdcode" 
                placeholder="请输入验证码">
              <div class="vcode"><img 
                id="Vcode2" 
                alt=""><span id="changeVcode2">点击更换</span></div>
            </div>
            <li class="useryzm"> <input 
              id="useryzm" 
              type="text" 
              value="" 
              name="pwd" 
              placeholder="请输入短信验证码">
              <input 
                id="getyzm" 
                type="button" 
                value="获取短信验证码" 
                name="pwd" >
            </li>
            <!--
              <li class="yzm_sm">
                  <span id="yzm_sm" >验证码已发出，请注意查收短信您可以在<i id="yzm_time">60</i>秒后点击重新获取验证码</span>
              </li>
             -->
            <li class="useragree"><input 
              id="useragree" 
              type="checkbox" 
              name="agree" 
              value="checkbox" >
              <label for="useragree"/>
              我已阅读并接受<a 
                target="_blank" 
                href="/h5/EnterpriseAgreement.html"><i>《安发网络服务条款》</i></a><a 
                  target="_blank" 
                  href="/h5/SecrecyAgreement.html"><i>《网络用户信息保密协议》</i></a>
            </li>
            <li class="submit"> <input 
              class="login-yzm" 
              readonly="" 
              value="登录" ></li>
          </ul>
        </form>
      </div>
      <div class="login-other-platform">
        <span class="login-weixin">微信登录</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CommonFooter'
}
</script>

<style scoped>
.footer {
  padding-top: 27px;
  font-family: MicrosoftYaHei;
  height: 176px;
  font-size: 14px;
  text-align: center;
  border-top: 2px solid #ccc;
  background-color: #ddd;
  /* min-width: 1400px; */
}
.footer1 {
  width: 1200px;
}
.footer1 a {
  color: #333;
  padding: 0 20px;
  line-height: 1.2;
  border-right: 1px solid #999999;
}
.footer1 a:last-child {
  border: none;
}
.footer2 a {
  color: #999999;
}
.footer2 {
  line-height: 24px;
  padding-top: 10px;
  width: 1200px;
  color: #999999;
}
</style>
