<template>
  <div class="content">
    <div class="regisiter_wrap">
      <div class="step_info step_info_ul_1">
        <ul class="clfix">
          <li class="step1 current">
            <i>1</i>
            选择会员类型
          </li>
          <li class="step2">
            <i>2</i>
            填写基本信息
          </li>
          <li class="step3">
            <i>3</i>
            完成注册
          </li>  
        </ul>
      </div>
      <div class="step-content">
        <div class="stepinfo step_1 current">
          <ul>
            <li>
              <h4 
                rel="aflc-5" 
                rel2="AF00107">物流公司</h4>
              <ul>
                <li>提供国内第三方物流运输服务的公司。</li>
                <li>可免费发布各省、地、县收货、提货的网点，免费发布物流线路信息，免费查询车源、货源信息。</li>
                <li>提醒：国内物流公司必须提供真实网点信息和具有物流公司的相关资质。</li>
              </ul>
            </li>
            <li>
              <h4 
                rel="aflc-2" 
                rel2="AF00101">发货企业或个人</h4>
              <ul>
                <li>需要发货的企业或个人。</li>
                <li>可免费发布国内外货物运输信息，免费查询运输车辆及物流公司信息。</li>
              </ul>
            </li>
            <li>
              <h4 
                rel="aflc-1" 
                rel2="AF00102">车主</h4>
              <ul>
                <li>提供物流运输服务且具备营运资格的车队或个体车主。</li>
                <li>可免费发布车辆信息，线路信息，免费查询货源信息。</li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="stepinfo step_2">
          <form action="/">
            <ul class="form">
              <li>
                <span class="label"><span class="hot">*</span> 注册手机号</span><input 
                  autocomplete="new-password" 
                  data-valid="checkMobile" 
                  name="mobile" 
                  maxlength="11" 
                  placeholder="请输入手机号作为登录账号" 
                  type="text">
                <div class="tip"/>
              </li>
              <li>
                <span class="label"><span class="hot">*</span>登录密码</span><input 
                  autocomplete="new-password" 
                  data-valid="checkPassword" 
                  name="password" 
                  type="password" 
                  maxlength="16" 
                  placeholder="密码长度6~16个字符，字母区分大小写" >
                <div class="tip"/>
                <span class="eye"/>
              </li>
              <li class="vcodeinput">
                <span class="label"><span class="hot">*</span>验证码</span><input 
                  autocomplete="off" 
                  data-valid="checkVcode" 
                  name="imageCode" 
                  maxlength="6" 
                  placeholder="请输入验证码" 
                  type="text">
                <div class="vcode">
                  <img 
                    id="vdimgck" 
                    src="#" 
                    alt="">
                  看不清？<span class="changeVcode">点击更换</span>
                </div>
                <div class="tip"/>
              </li>
              <li class="phonecodeInput">
                <span class="label"><span class="hot">*</span>手机验证码</span><input 
                  autocomplete="off" 
                  data-valid="checkSmsCode" 
                  name="smsCode" 
                  maxlength="6" 
                  placeholder="请输入短信验证码" 
                  type="text">
                <div class="getcode-btn">获取短信验证码</div>
                <div class="tip"/>
              </li>
              <li class="radioinput">
                <span class="label">&nbsp;</span><label><input 
                  autocomplete="off" 
                  name="agree" 
                  checked 
                  type="checkbox">我已阅读并接受<a 
                    href="/h5/EnterpriseAgreement.html" 
                    target="_blank">《安发网络服务条款》</a></label>
              </li>
            </ul>
          </form>
        </div>
        <div class="stepinfo step_3">
          <div class="success-text">
            恭喜您，注册成功！  
          </div>
          <div class="tipinfo">
            <span class="tipicon"/>完善基本信息，有更多惊喜等着您！ <a 
              href="http://192.168.1.157:9526/baseInfo/authentication" 
              target="_blank">立即完善</a>
          </div>
          <div class="introinfo">
            <ul>
              <li class="reg_shangji">
                <strong>获取等多商机</strong>
                <p>准确、完整的填写您的基本信息，有利于获得客户的信任，赢得更多商机！</p>
              </li>
              <li class="reg_qiyewz reg_chezhu">
                <strong>多权限多功能</strong>
                <p>完善基本信息，有利于及时通过我们的人工审核，通过审核后可开启更多功能权限！</p>
              </li>
              <li class="reg_qiyewz reg_wuliu">
                <strong>免费获赠企业网站</strong>
                <p>完善基本信息，有利于及时通过我们的人工审核，通过审核后可免费获赠专属网站一个！</p>
              </li>
              <li class="reg_gongsik">
                <strong>收录到28快运公司库</strong>
                <p>您的网站将被并收录到在28快运公司库中，免费为您推广，便于客户及时搜索到！</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="step-next">
        <div class="step-next1 current">
          <div class="next-btn">下一步</div>
        </div>
        <div class="step-next2">
          <div class="prev-btn">上一步</div>
          <div class="next-btn">注册</div>
        </div>
        <div class="step-next3">
          <a 
            href="http://192.168.1.157:9526/baseInfo/authentication" 
            class="last-btn">进入会员中心</a>
          <a 
            href="/" 
            class="normal-btn">返回网站首页</a>
        </div>
      
      </div>
    </div>
    <div 
      class="hidediv" 
      style="width:0;height:0;overflow: hidden;">
      <form 
        id="form1" 
        name="form1" 
        method="POST" 
        action="index_do.php">
        <input 
          autocomplete="off" 
          type="hidden" 
          name="fmdo" 
          value="login">
        <input 
          autocomplete="off" 
          type="hidden" 
          name="dopost" 
          value="login">
        <input 
          autocomplete="off" 
          type="hidden" 
          name="gourl" 
          value="">
        <input 
          id="usermobile" 
          autocomplete="off" 
          type="text" 
          name="userid" 
          placeholder="请输入您的手机号">
        <input 
          id="userpwd" 
          autocomplete="off" 
          type="password" 
          name="pwd" 
          placeholder="请输入您的密码">
      </form>
    </div>

  </div>


</template>
<script>
export default {
  layout: 'login',
  fetch({ params, store, req, res, query, route }) {
    let isReg = false
    isReg = route.path.indexOf('/regisiter') !== -1

    store.commit('login/setReg', isReg)
    store.commit('login/setPageType', '')
    store.commit('setPageClass', 'registiter-page')
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
