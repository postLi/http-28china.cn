<template>
  <div class="content">
    <div class="fpassword_wrap">
      <div class="ff-title">找回密码 / <span class="current">输入手机号</span> <span>验证信息</span> <span>重置密码</span> <span>取回成功</span></div>
      <div class="step_info step_info_ul_1">
        <ul class="clfix">
          <li class="step1 current"><i>1</i>输入手机号
          </li>
          <li class="step2">
            <i>2</i>
            验证信息
          </li>
          <li class="step3">
            <i>3</i>
            重置登录密码
          </li>
          <li class="step4">
            <i>3</i>
            成功找回密码
          </li>
        </ul>
      </div>
      <!-- 步骤内容 -->
      <div class="step-content">
        <div class="stepinfo step_1 current">
          <div class="step_con">
            <ul>
              <li><span class="label">选择会员类型：</span>
                <select 
                  id="memeberType" 
                  name="memeberType">
                  <option value="">选择会员类型</option>
                  <option value="aflc-5|AF00107">物流公司</option>
                  <option value="aflc-2|AF00101">货主</option>
                  <option value="aflc-1|AF00102">车主</option>
                </select>
              </li>
              <li><span class="label">输入您的手机号：</span>
                <input 
                  id="mobile" 
                  name="mobile" 
                  maxlength="11" 
                  type="text">
              </li>
              <li><span class="label">验证码：</span>
                <input 
                  id="vcode" 
                  maxlength="5" 
                  type="text">
                <img 
                  id="vdimgck" 
                  src="templets/img/vcode.jpg" 
                  alt="">
                <span class="changevcode">看不清？</span>
              </li>
              <li><span class="label"/><span class="next-btn">下一步</span></li>
              <li class="last"><span class="label"/><a href="/regisiter">免费注册</a> | <a href="/login">会员登录</a></li>
            </ul>
          </div>
        </div>
        <div class="stepinfo step_2">
          <div class="step_con">
            <strong>您注册的手机号为：</strong>
            <span class="mobile">18*****5685</span>
            <ul>
              <li><span class="label">输入您的验证码：</span>
                <input 
                  id="smscode" 
                  type="text" 
                  maxlength="8">
                <span class="getvcode">获取验证码</span>
              </li>
              <li class="tipinfo">
                请输入您手机<span class="mobile">138***8899</span>上收到的验证码，填写正确后即可重置密码
              </li>
              <li><span class="next-btn">下一步</span></li>
            </ul>
          </div>
        </div>
        <div class="stepinfo step_3">
          <div class="step_con">
            <ul>
              <li><span class="label">重新输入密码：</span>
                <input 
                  id="password" 
                  type="password">
                <span class="showtip">如何设置安全密码<img 
                  src="templets/img/u15100.png" 
                  alt=""></span>
                <div class="ptip">必须时6-20位字母或者数字</div>
              </li>
              <li><span class="label">再次输入新密码：</span>
                <input 
                  id="repassword" 
                  type="password">
              </li>
              <li><span class="label"/><a class="next-btn">下一步</a></li>
            </ul>
          </div>
        </div>
        <div class="stepinfo step_4">
          <div class="step_con">
            <div class="success-tip">
              <a 
                href="/login" 
                class="last-btn">重新登录</a> <a 
                  class="normal-btn" 
                  href="/">返回首页</a>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>
<script>
export default {
  layout: 'login',
  head: {
    title: '找回密码'
  },
  fetch({ params, store, req, res, query, route }) {
    store.commit('login/setReg', false)
    store.commit('login/setPageType', 'findpassword')
    store.commit('setPageClass', 'password-page')
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
