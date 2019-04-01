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
                src="/images/28fast_download.png" 
                width="112" 
                height="112">
              <div>28快运 货主端</div>
            </div>
            <div class="box-qr">
              <img
                src="/images/28fast_download.png"
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
    seajs.use(['api'], () => {
      //更换图形验证码 S
      var src =
        '/api/aflc-common/common/aflcMemberCenter/v1/getImageCodeAndUID?imageWidth=90&imageHeight=25'

      // 唤起登录弹框、隐藏登录弹框
      // $('body').trigger('login.show')
      // $('body').trigger('login.hide')
      $('body').on({
        'login.show': function() {
          $('.login_box').show()
          $('.login_box_mask').show()
          $('#Vcode2').attr('src', src)
          $('#Vcode').attr('src', src)
        },
        'login.hide': function() {
          $('.login_box').hide()
          $('.login_box_mask').hide()
        }
      })

      $('.login_close').click(function() {
        $('body').trigger('login.hide')
      })
      $('.login_bt1').css({
        color: '#2577e3',
        'border-bottom': '1px solid #2577e3'
      })
      $('.login_bt1').click(function() {
        $('.login_bt1').css({
          color: '#2577e3',
          'border-bottom': '1px solid #2577e3'
        })
        $('.login_bt2').css({
          color: '#333',
          'border-bottom': '1px solid #ccc'
        })
        $('.pwd_login').css('display', 'block')
        $('.yzm_login').css('display', 'none')
      })
      $('.login_bt2').click(function() {
        $('.login_bt1').css({
          color: '#333',
          'border-bottom': '1px solid #ccc'
        })
        $('.login_bt2').css({
          color: '#2577e3',
          'border-bottom': '1px solid #2577e3'
        })
        $('.pwd_login').css('display', 'none')
        $('.yzm_login').css('display', 'block')
      })
      $('.userType input').click(function() {
        $('.userType input').removeClass('checked')
        $(this).addClass('checked')
        $("input[name='userType']").val($(this).attr('name'))
        console.log($("input[name='userType']").val())
      })
      $('.userType2 input').click(function() {
        $('.userType2 input').removeClass('checked')
        $(this).addClass('checked')
        $("input[name='userType2']").val($(this).attr('name'))
        console.log($("input[name='userType2']").val())
      })
      var myurl = window.location.href

      $("input[name='gourl']").val(myurl)

      //alert(1);
      $('#Vcode').click(function() {
        $('#Vcode').attr('src', src)
      })
      $('#changeVcode').click(function() {
        $('#Vcode').attr('src', src)
      })

      //更换图形验证码 E

      //更换图形验证码2 S

      //alert(1);
      $('#Vcode2').click(function() {
        $('#Vcode2').attr('src', src)
      })
      $('#changeVcode2').click(function() {
        $('#Vcode2').attr('src', src)
      })

      //更换图形验证码 2 E

      /*判断是否登录 S*/

      //手机号获取用户昵称（物流公司）
      function wuliu(account, access_token) {
        var name = ''

        $.ajax({
          type: 'get',
          headers: {
            'Content-Type': 'application/json'
          },
          async: false,
          url:
            '/api/aflc-common/common/aflcMemberCenter/v1/getLogisticsCompanyInfoByMobile/?mobile=' +
            account +
            '&access_token=' +
            $.cookie('access_token'),
          // url:"/api/aflc-portal/portalt/aflcLogisticsCompany/v1/findByAccount/"+account,

          success: function(res) {
            console.log('success')

            var datas = res.data
            //alert(datas.length);
            if (datas) {
              name = datas.contactsName
            }

            // huo(account,getCookie("access_token"))
            if (!name) {
              name = account
            }
          },
          error: function(err) {
            //alert("error");
            console.log(err.responseText)
          }
        })

        return name
      }

      //手机号获取用户ID（车主）
      function che(account, token) {
        var name = ''

        $.ajax({
          type: 'get',
          headers: {
            'Content-Type': 'application/json'
          },
          async: false,
          url:
            '/api/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?access_token=' +
            token +
            '&mobile=' +
            account,

          success: function(res) {
            console.log('success')
            $.cookie('user_token', res.data.userToken, {
              expires: 7,
              path: '/'
            })
            var datas = res.data
            //alert(datas.length);
            name = datas.driverName
            if (!name) {
              name = account
            }
          },
          error: function(err) {
            //alert("error");
            console.log(err.responseText)
          }
        })
        return name
      }
      //手机号获取用户ID（货主）
      function huo(account, token) {
        var name = ''
        $.ajax({
          type: 'get',
          headers: {
            'Content-Type': 'application/json'
          },
          async: false,
          url:
            '/api/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?access_token=' +
            token +
            '&mobile=' +
            account,

          success: function(res) {
            console.log('success')

            var datas = res.data
            //alert(datas.length);
            name = datas.contacts
            $.cookie('user_token', res.data.userToken, {
              expires: 7,
              path: '/'
            })
            if (!name) {
              name = account
            }
          },
          error: function(err) {
            //alert("error");
            console.log(err.responseText)
          }
        })
        return name
      }

      function Is_login1() {
        var login_mobile = $.cookie('login_mobile')
        var login_type = $.cookie('login_type')
        var access_token = $.cookie('access_token')
        console.log('ok' + login_mobile + ':' + access_token + ':' + login_type)
        if (login_mobile && login_type && access_token) {
          if (login_type == 'aflc-1') {
            var login_name = che(login_mobile, access_token)
          }
          if (login_type == 'aflc-2') {
            var login_name = huo(login_mobile, access_token)
          }
          if (login_type == 'aflc-5') {
            var login_name = wuliu(login_mobile, access_token)
          }
        }
      }
      //Is_login1()

      /*判断是否登录 E*/
      ;(function($) {
        if (!$) {
          console.log('init error, need JQ~')
          return false
        }

        // function openLoginMask(){
        //   var _this = this
        //   $('.login_box').show()
        //   $('.login_box_mask').css('display','block')
        //   console.log(7777777)
        // }

        var login_page = {
          login_data: {},
          init: function() {
            var _this = this
            $('.login-btn').on('click', function() {
              AFWL_API.checkVcode($('#uservcode').val()).always(function(res) {
                var status = res.status
                var check = login_page.validate(status)
                if (check.done) {
                  console.log('check ok!')
                  login_page.login(
                    _this.login_data.username,
                    _this.login_data.pwd,
                    _this.login_data.usertype
                  )
                } else {
                  layer.alert(check.err)
                }
              })
            })
            // 二维码登录
            $('.login-weixin').on('click', function() {
              _this.openWxPop()
            })
            $('body').on('wxLoginSuccess', function(e, code) {
              layer.closeAll()
              _this.wxcode = code
              // layer.msg('')
              layer.open({
                type: 1,
                title: '选择角色',
                skin: 'layui-layer-rim', //加上边框
                area: ['200px', '240px'], //宽高
                content:
                  '<div class="userTypeSelect"> <span data-type="aflc-1">车主</span> <span data-type="aflc-2">货主</span>  </div>'
              })
            })
            // 获取微信登录信息
            window.addEventListener('message', function(e) {
              var payload = e.data
              if (e.data && (e.data + '').indexOf('code:') !== -1) {
                var code = e.data.split(':')[1]
                $('body').trigger('wxLoginSuccess', code)
              }
            })
            // 选择角色信息
            $('body').on('click', '.userTypeSelect span', function() {
              $('.userTypeSelect span').removeClass('active')
              $(this).addClass('active')
              layer.closeAll()
              var index = layer.load(1, {
                title: '正在登录中...',
                shade: [0.3, '#fff'] //0.1透明度的白色背景
              })
              _this.wxtype = $(this).data('type')
              _this.loginByWx(_this.wxcode, _this.wxtype)
            })
            // 绑定
            $('body').on('click', '.login-btn2', function() {
              var phone = $('#usermobile2').val()
              var smscode = $.trim($('#usersmscode2').val())
              if (AFLC_VALID.MOBILE.test(phone) && smscode) {
                _this
                  .loginByMobile(phone, smscode, _this.wxtype)
                  .done(function(res) {
                    _this.bindWx(phone, _this.wxid, _this.wxtype, _this.unionid)
                  })
              }
            })
            // 绑定 - 获取验证码
            $('body').on('click', '.getsmscode2', function() {
              if ($(this).hasClass('disabled') === false) {
                // 先判断是否有手机号
                var phone = $('#usermobile2').val()
                if (AFLC_VALID.MOBILE.test(phone)) {
                  $(this).addClass('disabled')
                  _this.sendSms(phone, $('.getsmscode2'))
                } else {
                  layer.msg('请输入您的手机号')
                }
              }
            })
          },
          // 打开二维码弹窗
          openWxPop: function() {
            return AFWL_API.getWxInfo()
              .done(function(res) {
                layer.open({
                  type: 1,
                  title: '登录',
                  skin: 'layui-layer-rim', //加上边框
                  area: ['300px', '460px'], //宽高
                  content: '<div id="wxtwocodebox"></div>'
                })
                var data = res.data
                seajs.use('wxLogin', function() {
                  var obj = new WxLogin({
                    self_redirect: true,
                    id: 'wxtwocodebox',
                    appid: data.appid,
                    scope: data.scope,
                    redirect_uri: encodeURIComponent(
                      'http://www.28kuaiyun.cn/loginsuccess'
                    ),
                    state: data.state,
                    style: '',
                    href: ''
                  })
                })
              })
              .fail(function() {
                layer.msg('请求微信授权失败。')
              })
          },
          // 通过微信code值获取token
          loginByWx: function(code, type) {
            var _this = this
            return AFWL_API.getBindedInfo(code, type)
              .done(function(res) {
                var data = res.data
                layer.closeAll()
                if (res.access_token) {
                  // _this.loginPhpByToken(res.access_token, type, '/')
                  // layer.msg('登录成功。');
                  // 已经绑定，跳转到会员中心
                  // location.href = AFWL_API.constant.LINK_MEMBER
                  $('body').trigger('login.hide')
                  layer.msg('登录成功')
                  $('body').trigger('login.success')
                } else {
                  layer.msg('您的微信号尚未绑定该角色。')
                  _this.wxid = data.message.match(/openid:([^,]*),?/)[1]
                  _this.unionid = data.message.match(/unionid:([^,]*),?/)[1]
                  _this.openBindPop()
                  // 跳转到绑定页面
                  // location.href = ''
                }
              })
              .fail(function(res, err) {
                var data = res.responseJSON
                if (data.status && data.message.indexOf('openid:') !== -1) {
                  layer.msg('您的微信号尚未绑定该角色。')
                  _this.wxid = data.message.match(/openid:([^,]*),?/)[1]
                  _this.unionid = data.message.match(/unionid:([^,]*),?/)[1]
                  _this.openBindPop()
                } else {
                  layer.closeAll()
                  layer.alert(
                    '失败：' +
                      (data.errorInfo ||
                        data.message ||
                        data.text ||
                        JSON.stringify(data) ||
                        '未知错误')
                  )
                }
              })
          },
          // 发送短信
          sendSms: function(phone, ele) {
            var _this = this
            return AFWL_API.getMobileCode(phone)
              .done(function() {
                layer.msg('已发送验证码，请注意查收。')
                _this.startSms(ele)
              })
              .fail(function(res) {
                layer.alert(
                  '失败：' +
                    (res.errorInfo ||
                      res.message ||
                      res.text ||
                      JSON.stringify(res) ||
                      '未知错误')
                )
              })
          },
          // sms倒计时
          startSms: function(ele) {
            var i = 60
            var _this = this
            var smstimer = setInterval(function() {
              if (--i >= 0) {
                ele.text('获取验证码(' + i + 's)')
              } else {
                clearInterval(smstimer)
                ele.text('获取验证码')
                ele.removeClass('disabled')
              }
            }, 1000)
          },
          loginByMobile: function(username, pwd, usertype) {
            var _this = this
            // 先登录157拿token
            // 将token保存到cookie后再进行最后的php登录
            return AFWL_API.loginByMobile(username + '|' + usertype, pwd)
              .done(function(res) {
                if (res.access_token) {
                  // $('#form1').submit();
                  // location.href = url
                  $('body').trigger('login.hide')
                  layer.msg('登录成功')
                  $('body').trigger('login.success')
                } else {
                  layer.alert(
                    '登录失败：' +
                      (res.errorInfo ||
                        res.message ||
                        res.text ||
                        JSON.stringify(res) ||
                        '未知错误')
                  )
                  _this.changeVcode()
                }
                return res
              })
              .fail(function(err, status, let2) {
                console.log(err, status, let2)
                if (err.status) {
                  layer.alert('登录失败，验证码错误。')
                } else {
                  layer.alert('登录失败，请检查您的手机号跟验证码。')
                }
                _this.changeVcode()
                // layer.alert(JSON.stringify(err));
              })
          },
          changeVcode: function() {
            $('#vdimgck').attr('src', AFWL_API.vcode() + '&rn=' + Math.random())
            $('#uservcode').val('')
          },
          bindWx: function(username, openid, type, unionid) {
            return AFWL_API.bindWxUser(username, openid, type, '', unionid)
              .done(function(res) {
                if (res.status === 200) {
                  // 绑定成功
                  layer.msg('绑定成功。')
                  // location.href='/';
                } else {
                  // 绑定失败
                  layer.alert(
                    '失败：' +
                      (res.errorInfo ||
                        res.message ||
                        res.text ||
                        JSON.stringify(res) ||
                        '未知错误')
                  )
                }
                return res
              })
              .fail(function(res) {
                layer.alert(
                  '失败：' +
                    (res.errorInfo ||
                      res.message ||
                      res.text ||
                      JSON.stringify(res) ||
                      '未知错误')
                )
              })
          },
          // 打开绑定弹窗
          openBindPop: function() {
            layer.open({
              type: 1,
              skin: 'layui-layer-rim',
              area: ['360px', '300px'],
              cancel: function() {
                layer.closeAll()
              },
              title: '绑定微信号', //不显示标题
              content:
                '<div class="login-box2"> <h4>您的微信号未绑定，请输入手机号进行绑定</h4> <div class="inputbox"> <span class="icon icon-mobile"></span> <input type="text" maxlength="11" name="userid2" id="usermobile2" placeholder="请输入您的手机号"> </div> <div class="inputbox smscodeinput"> <span class="icon icon-password"></span> <input type="text" maxlength="10" name="smscode2" id="usersmscode2" placeholder="请输入短信验证码"> <span class="getsmscode2">获取验证码</span> </div> <div class="login-btn2">绑 定</div> </div>'
            })
          },
          validate: function(status) {
            var checkinfo = {
              done: true,
              err: ''
            }
            $('.login-box')
              .find('input, select')
              .removeClass('error')
            if ($('#userType').val()) {
              this.login_data.usertype = $('#userType').val()
            } else {
              $('#userType').addClass('error')
              checkinfo.done = false
              checkinfo.err += '<br>请选择会员类型'
            }
            if ($('#usermobile').val()) {
              this.login_data.username = $('#usermobile').val()
            } else {
              $('#usermobile').addClass('error')
              checkinfo.done = false
              checkinfo.err += '<br>请输入您的手机号'
            }
            if ($('#userpwd').val()) {
              this.login_data.pwd = $('#userpwd').val()
            } else {
              $('#userpwd').addClass('error')
              checkinfo.done = false
              checkinfo.err += '<br>请输入您的密码'
            }

            if ($('#uservcode').val()) {
              if (status === 200) {
              } else {
                checkinfo.done = false
                console.log('status:' + status)
                checkinfo.err += '<br>请输入正确的验证码'
              }
            } else {
              $('#uservcode').addClass('error')
              checkinfo.done = false
              checkinfo.err += '<br>请输入验证码'
            }

            return checkinfo
          },

          login: function(username, pwd, usertype) {
            // 先登录157拿token
            // 将token保存到cookie后再进行最后的php登录
            return AFWL_API.login(username + '|' + usertype, pwd)
              .done(function(res) {
                if (res.access_token) {
                  console.log(res.access_token)
                  console.log(username)
                  console.log(usertype)

                  // phplogin(username, pwd)
                  //layer.alert('登录成功');
                  $('body').trigger('login.hide')
                  layer.msg('登录成功')
                  setTimeout(function() {
                    $('body').trigger('login.success')
                  }, 3 * 1000)
                  //$('#form1').submit();
                } else {
                  layer.alert(
                    '登录失败：' +
                      (res.errorInfo ||
                        res.text ||
                        JSON.stringify(res) ||
                        '未知错误')
                  )
                }
              })
              .fail(function(err, status, let2) {
                console.log(err, status, let2)

                if (err.status) {
                  //console.log(username +'|' + usertype+pwd);
                  //layer.alert('登录失败，服务器返回：'+err.status);
                  layer.alert('登录失败，请检查您的账号密码。')
                } else {
                  layer.alert('登录失败，请检查您的账号密码。')
                }
                // layer.alert(JSON.stringify(err));
              })
          }
        }

        login_page.init()
      })(window.jQuery)
    })
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
      background: url(/images/foot_logo_bg.png) no-repeat center;
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
