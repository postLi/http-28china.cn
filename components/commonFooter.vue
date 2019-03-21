<template>
  <div>
    <div class="footer clear">
      <div class="center">
        <div class="img"/>
        <div class="title">
          <div class="left">
            <div class="title1">快 好 省</div>
            <div class="title2">国内领先的一站式综合物流快运平台，物流运输管理，网络路径优化，网络货物跟踪，供应链可视化</div>
          </div>
          <div class="right">
            <div class="box-qr divide">
              <div class="box-in"/>
            </div>
            <div class="box-qr">
              <img 
                src="../static/images/28fast_download.png" 
                width="112" 
                height="112">
              <div>28快运 货主端</div>
            </div>
            <div class="box-qr">
              <img
                src="../static/images/28fast_download.png"
                width="112"
                height="112">
              <div>28快运 车主端</div>
            </div>
          </div>
        </div>
        <div class="footer1">
          <a 
            href="http://www.anfanet.com/about.html" 
            target="_blank">关于我们</a>
          <a href="javascript:void(0)">产品与服务</a>
          <a href="http://www.28tms.cn">云TMS</a>
          <a href="javascript:void(0)">精选案例</a>
          <a href="/zixun">资讯动态</a>
          <a 
            href="/help/ggp/index.jhtml" 
            target="_blank">帮助中心</a>
        </div>
        <div class="footer1-1">
          <a href="javascript:void(0)">友情链接：</a>
          <a 
            href="http://www.28kuaiyun.cn" 
            target="_blank"> 28快运官网</a>
          <a 
            href="http://www.28tms.com" 
            target="_blank">28云TMS</a>
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
    <!-- <div class="login_box_mask" id="login_box_mask"> -->
    <div class="login_box">
      <div class="login_close"><img 
        id="close_btn" 
        src="/images/login_close.png"></div>
      <div class="login_box_bt">
        <div class="login_bt1">密码登录</div>
        <div class="login_bt2">验证码登录</div>
        
      </div>
      <div class="pwd_login">
        <!--<form name="form1" id="form1" method="POST" action="/member/index_do.php">-->
        <form name="form1" >
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
            <div class="inputbox">
              <span class="icon icon-mobile"/>
              <input 
                id="usermobile" 
                type="text" 
                maxlength="11" 
                name="userid" 
                placeholder="请输入您的手机号">
            </div>
            <div 
              class="inputbox passinput" 
              style="display: block;">
              <span class="icon icon-password"/>
              <input 
                id="userpwd" 
                type="password" 
                maxlength="20" 
                name="pwd" 
                placeholder="请输入您的密码">
            </div>
            <!-- <li class="usermobile" > <input type="text" value="" name="userid" id="usermobile" placeholder="请输入您的手机号"></li> -->
            <!-- <li class="userpwd"> <input type="password" value="" name="pwd" autocomplete="off" id="userpwd" placeholder="请输入您的密码"></li> -->
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
            <li class="submit"> <input 
              class="login-btn" 
              readonly="" 
              value="登录" ></li>
            <li class="userreg"><a 
              href="/regisiter?fmdo=user&dopost=regnew" 
              target="_blank"><span>免费注册</span></a><i/><a 
                href="/resetpassword?" 
                target="_blank"><span>忘记密码?</span></a></li>
          
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
            <div class="inputbox">
              <span class="icon icon-mobile"/>
              <input 
                id="usermobile2" 
                type="text" 
                maxlength="11" 
                name="userid" 
                placeholder="请输入您的手机号">
            </div>
            <!-- <li class="usermobile" > <input type="text" value="" name="userid" id="usermobile2" placeholder="请输入您的手机号"></li> -->
            <div 
              class="inputbox smscodeinput" 
              style="display: block;">
              <span class="icon icon-password"/>
              <input 
                id="usersmscode" 
          
                type="text" 
                maxlength="10" 
                name="smscode" 
                placeholder="请输入短信验证码">
              <span 
                id="getyzm" 
                class="getsmscode">获取验证码</span>
            </div>
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
            <!-- <li class="useryzm"> <input type="text" value="" name="pwd" id="useryzm" placeholder="请输入短信验证码">
        <input type="button" value="获取短信验证码" name="pwd" id="getyzm" >
        </li> -->
        
            <!--
          <li class="yzm_sm">
            <span id="yzm_sm" >验证码已发出，请注意查收短信您可以在<i id="yzm_time">60</i>秒后点击重新获取验证码</span>
          </li>
          -->
            <!-- <li class="useragree"><input id="useragree"  type="checkbox" name="agree" value="checkbox" /> -->
            <!-- <label for="useragree"></label>
                我已阅读并接受<a target="_blank" href="/h5/EnterpriseAgreement.html"><i>《安发网络服务条款》</i></a><a target="_blank" href="/h5/SecrecyAgreement.html"><i>《网络用户信息保密协议》</i></a>
          </li> -->
            <li class="submit"> <input 
              class="login-yzm" 
              readonly="" 
              value="登录" ></li>
            <li class="userreg"><a 
              href="/regisiter" 
              target="_blank"><span>免费注册</span></a><i/><a 
                href="/resetpassword" 
                target="_blank"><span>忘记密码?</span></a></li>
          </ul>
        </form>
      </div>
      <div class="login-other">其他方式登入</div>
      <div class="login-other-platform">
        <span class="login-weixin"/>
      </div>
    </div>
    <!-- </div> -->
    <div class="login_box_mask" />
  </div>
</template>

<script>
export default {
  name: 'CommonFooter',
  mounted() {
    seajs.use(['/js/login.js'], function() {})
  }
}
</script>

<style scoped lang="scss">
.footer {
  font-family: MicrosoftYaHei;
  margin-top: 50px;
  font-size: 14px;
  text-align: center;
  border-top: 2px solid #ccc;
  background-color: #2d3b55;
  /* min-width: 1400px; */
  .center {
    padding-top: 27px;
    width: 1400px;
    margin: 0 auto;
    position: relative;
    .img {
      position: absolute;
      top: -19px;
      left: 0;
      width: 205px;
      height: 140px;
      background: url(../static/images/foot_logo_bg.png) no-repeat center;
    }
    .title {
      height: 100px;
      .left {
        float: left;
        margin: 0 0 0 229px;
        .title1 {
          text-align: left;
          font-size: 20px;
          font-weight: bold;
          line-height: 28px;
          color: #3f97ef;
        }
        .title2 {
          font-size: 14px;
          font-weight: bold;
          line-height: 28px;
          color: #ffffff;
        }
      }
      .right {
        float: right;
        .box-qr {
          display: table-cell;
          padding-left: 20px;
          div {
            font-size: 14px;
            color: #e0e0e0;
          }
        }
        .divide {
          vertical-align: middle;
          .box-in {
            background: #ffffff;
            width: 1px;
            height: 100px;
          }
        }
      }
    }
  }
}
.footer1 {
  clear: both;
  text-align: left;
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10px;
}
.footer1-1 {
  padding-top: 10px;
  text-align: left;
}
.footer1 a,
.footer1-1 a {
  padding-right: 20px;
  line-height: 1.2;
  font-size: 16px;
  color: #fefefe;
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
  font-size: 14px;
  color: #cccccc;
}
</style>
