;(function($) {
  if (!$) {
    throw 'init error, need JQ~'
    return false
  }

  var validReg = window.AFLC_VALID
  var AFLC_VALID = window.AFLC_VALID

  // 注册页面
  var reg_page = {
    memberType: '',
    reg_data: {
      areaCode: '',
      cityCode: '',
      memberType: '',
      mobile: '',
      password: '',
      provinceCode: '',
      registerOrigin: 'AF0030103',
      registerType: '1',
      smsCode: ''
    },
    showStep: function(index) {
      $('.step-next>div')
        .removeClass('current')
        .eq(index)
        .addClass('current')
      $('.stepinfo')
        .removeClass('current')
        .eq(index)
        .addClass('current')
      $('.step_info').attr('class', 'step_info step_info_ul_' + (index + 1))
      $('.ff-title span')
        .removeClass('current')
        .eq(index)
        .addClass('current')
    },
    checkValid: function(name, checkFn, defaultErrTxt) {
      var el = $('[name="' + name + '"]')
      var val = el.val()
      var par = el.closest('li')
      if (name === 'belongCityName') {
        el = $('[rel="belongCityName"]')
        val = $('#store-selector .text div').attr('title')
        par = el
      }
      par.removeClass('success error')
      var defer = $.Deferred()
      checkFn(val, defer).then(
        function() {
          console.log(4)
          reg_page.reg_data[name] = val
          par
            .addClass('success')
            .find('.tip')
            .html('')
        },
        function(err2) {
          console.log(1)
          par
            .addClass('error')
            .find('.tip')
            .html(err2 || defaultErrTxt)
          reg_page.reg_data[name] = ''
        }
      )
      return defer.promise()
    },
    checkMobile: function() {
      return this.checkValid(
        'mobile',
        function(value, p) {
          if (validReg.MOBILE.test(value)) {
            AFWL_API.checkMobileIsRegister({
              mobile: value,
              memberType: reg_page.reg_data.memberType
            })
              .done(function(res) {
                if (res.status === 100) {
                  console.log(2)
                  // 已经注册
                  p.reject(
                    '手机号已存在，请更换其他手机号或点击<a href="/resetpassword" target="_blank">找回密码</a>'
                  )
                } else {
                  console.log(3)
                  // 没有注册
                  p.resolve()
                }
              })
              .fail(function(err) {
                layer.alert('请求出错了，请尝试刷新页面')
              })
          } else {
            p.reject(value === '' ? '手机号不能为空' : '')
          }
          return p
        },
        '请输入正确的手机号码'
      )
    },
    checkPassword: function() {
      return this.checkValid(
        'password',
        function(value, p) {
          if (value.length >= 6) {
            // 纯数字或者纯字母或者相同的字符都判定为弱密码
            if (/\s/.test(value)) {
              p.reject('不允许有空格！')
            } else if (
              AFLC_VALID.ONLY_NUMBER.test(value) ||
              AFLC_VALID.ONLY_LETTER.test(value) ||
              /^(.)\1*$/.test(value)
            ) {
              p.reject(' ')
            } else {
              p.resolve()
            }
          } else {
            p.reject()
          }
          return p.promise()
        },
        '密码长度至少为6位'
      )
    },
    checkPasswordSure: function() {
      return this.checkValid(
        'passwordSure',
        function(value, p) {
          if (value && value === $('[name="password"]').val()) {
            p.resolve()
          } else {
            p.reject()
          }
          return p.promise()
        },
        '两次密码输入必须保持一致'
      )
    },
    checkContactName: function() {
      return this.checkValid(
        'contactsName',
        function(value, p) {
          if (value) {
            p.resolve()
          } else {
            p.reject()
          }
          return p.promise()
        },
        '请输入注册人姓名'
      )
    },
    checkCompany: function() {
      return this.checkValid(
        'companyName',
        function(value, p) {
          if (value) {
            p.resolve()
          } else {
            p.reject()
          }
          return p.promise()
        },
        '请输入公司名称'
      )
    },
    checkVcode: function() {
      return this.checkValid(
        'imageCode',
        function(value, p) {
          if (value) {
            AFWL_API.checkVcode(value)
              .done(function(res) {
                if (res.status === 200) {
                  p.resolve()
                } else {
                  p.reject()
                  // 重新获取验证码
                  $('.changeVcode').trigger('click')
                }
              })
              .fail(function() {
                p.reject()
              })
          } else {
            p.reject()
          }
          return p.promise()
        },
        '请输入正确的验证码'
      )
    },
    checkSmsCode: function() {
      return this.checkValid(
        'smsCode',
        function(value, p) {
          var mobile = $('[name="mobile"]').val()
          if (value && validReg.MOBILE.test(mobile)) {
            AFWL_API.checkMobileCode(mobile, value)
              .done(function(res) {
                if (res.status === 200) {
                  p.resolve()
                } else {
                  p.reject()
                }
              })
              .fail(function() {
                p.reject()
              })
          } else {
            p.reject()
          }
          return p.promise()
        },
        '请输入有效的手机验证码'
      )
    },
    checkCity: function() {
      return this.checkValid(
        'belongCityName',
        function(value, p) {
          if (value) {
            p.resolve()
          } else {
            p.reject()
          }
          return p.promise()
        },
        '请选择所在地'
      )
    },
    validate: function() {
      var mobile = this.checkMobile()
      var password = this.checkPassword()
      //var passwordSure = this.checkPasswordSure();
      //var contactsName = this.checkContactName();
      //var city = this.checkCity();

      //var companyName = this.checkCompany();
      var imageCode = this.checkVcode()
      var smsCode = this.checkSmsCode()
      // if($(".companyName").is(':hidden')){
      //   companyName = $.Deferred();
      //   companyName.resolve('agree');
      // }

      var agree = $('[name="agree"]').prop('checked')
      var defer = $.Deferred()

      if (!agree) {
        defer.reject(agree)
        layer.msg('请确认已阅读我们的服务条款！')
      } else {
        defer.resolve(agree)
      }

      return $.when(mobile, password, imageCode, smsCode, defer.promise())
    },
    doRegisiter: function() {
      AFWL_API.regisiterByMobile(this.reg_data)
        .done(function(res) {
          if (res.status === 200) {
            reg_page.showStep(2)
            // 判断注册的是什么角色，显示对应的文案
            $('.reg_qiyewz').hide()
            if (reg_page.memberType === 'aflc-5') {
              $('.reg_wuliu').show()
            } else {
              $('.reg_chezhu').show()
            }
            // /member/index.php
            // /index.php
            $('#usermobile').val(reg_page.reg_data.mobile)
            $('#userpwd').val(reg_page.reg_data.password)
          } else {
            // 重新获取验证码
            $('.changeVcode').trigger('click')
            layer.alert('注册失败：' + res.errorInfo || res.message)
          }
        })
        .fail(function(error) {
          layer.alert('网络有问题，注册失败。')
        })
    },
    startCountDown: function(el, time) {
      var _this = this
      el.text(time + '秒后再次操作')
      setTimeout(function() {
        if (time > 0) {
          _this.startCountDown(el, time - 1)
        } else {
          el.removeClass('disabled')
          el.text('获取短信验证码')
        }
      }, 1000)
    },
    init: function() {
      var $this = this
      // 选取会员类型
      $('.step_1 h4').on('click', function() {
        $('.step_1 h4').removeClass('check')
        $(this).toggleClass('check')
        if ($(this).hasClass('check')) {
          reg_page.reg_data.memberType = $(this).attr('rel2')
          reg_page.memberType = $(this).attr('rel')
        }
      })
      // 验证
      $('.registiter-page .step_2 input').on('blur', function() {
        var check = $(this).data('valid')
        if (check && $this[check]) {
          $this[check]()
        }
      })
      $('.getcode-btn').on('click', function() {
        var _this = $(this)
        if (_this.hasClass('disabled')) {
          return false
        } else {
          var mobile = $('[name="mobile"]').val()
          if (validReg.MOBILE.test(mobile)) {
            _this.addClass('disabled')

            AFWL_API.getMobileCode(mobile)
              .done(function(res) {
                $this.startCountDown(_this, 60)

                layer.msg('验证码已发送，请注意查收')
              })
              .fail(function() {
                _this.removeClass('disabled')
              })
          } else {
            layer.msg('请填写有效的手机号码！')
          }
        }
      })
      // 设置验证码
      $('#vdimgck').attr('src', AFWL_API.vcode())
      $('.changeVcode').on('click', function() {
        $('#vdimgck').attr('src', AFWL_API.vcode() + '&rn=' + Math.random())
        return false
      })

      // 查看密码
      $('.eye').on('click', function() {
        var $this = $(this)
        var inp = $(this)
          .closest('li')
          .find('input')
        if ($this.hasClass('active')) {
          inp.attr('type', 'password')
          $this.removeClass('active')
        } else {
          $this.addClass('active')
          inp.attr('type', 'text')
        }
      })

      // 注册页
      $('.registiter-page .step-next1 .next-btn').on('click', function() {
        //if(reg_page.reg_data.)
        if (reg_page.reg_data.memberType) {
          reg_page.showStep(1)
        } else {
          layer.alert('请选择会员类型')
        }
      })
      $('.registiter-page .step-next2 .next-btn').on('click', function() {
        reg_page
          .validate()
          .done(function(res) {
            console.log('check success:', res)
            reg_page.doRegisiter()
          })
          .fail(function(err) {
            console.log('check fail:', err)
          })
      })
      $('.registiter-page .step-next2 .prev-btn').on('click', function() {
        reg_page.showStep(0)
      })
      $('.registiter-page .step-next3 .last-btn,.tipinfo a').on(
        'click',
        function(e) {
          e.preventDefault()

          $('[name="gourl"]').val('/hyzx/baseInfo/authentication')
          login_page.login(
            reg_page.reg_data.mobile,
            reg_page.reg_data.password,
            reg_page.memberType,
            '/hyzx/baseInfo/authentication'
          )
          return false
        }
      )

      $('.registiter-page .step-next3 .normal-btn').on('click', function(e) {
        e.preventDefault()
        $('[name="gourl"]').val('/index.php')
        login_page.login(
          reg_page.reg_data.mobile,
          reg_page.reg_data.password,
          reg_page.memberType
        )
      })
    }
  }
  // 登录页面
  var login_page = {
    login_data: {},
    loginType: 'password',
    initLoginBox: function(type) {
      // 用来在登录时判断
      this.loginType = type
      $('.passinput,.smscodeinput').hide()
      if (type === 'password') {
        $('.passinput').show()
      } else {
        $('.smscodeinput').show()
      }
    },
    changeVcode: function() {
      $('#vdimgck').attr('src', AFWL_API.vcode() + '&rn=' + Math.random())
      $('#uservcode').val('')
    },
    init: function() {
      var _this = this
      $('.login-btn').on('click', function() {
        var check = login_page.validate()
        if (check.done) {
          if (_this.loginType === 'password') {
            _this.checkVcode(function() {
              login_page.login(
                _this.login_data.username,
                _this.login_data.pwd,
                _this.login_data.usertype
              )
            })
          } else {
            login_page.loginByMobile(
              _this.login_data.username,
              _this.login_data.pwd,
              _this.login_data.usertype
            )
          }
        } else {
          layer.alert(check.err)
        }
      })
      // 设置验证码
      $('#vdimgck').attr('src', AFWL_API.vcode())
      $('.changeVcode').on('click', function() {
        _this.changeVcode()
        return false
      })
      // 切换登录方式
      $('.login-box-tab span').on('click', function() {
        if ($(this).hasClass('active') === false) {
          $('.login-box-tab span').removeClass('active')
          $(this).addClass('active')
          _this.initLoginBox($(this).data('type'))
        }
      })
      // 获取验证码
      $('.getsmscode').on('click', function() {
        var $this = $(this)
        if ($this.hasClass('disabled') === false) {
          // 先判断是否有手机号
          var phone = $('#usermobile').val()
          if (AFLC_VALID.MOBILE.test(phone)) {
            _this.checkVcode(function() {
              $this.addClass('disabled')
              _this.sendSms(phone, $('.getsmscode'))
            })
          } else {
            layer.msg('请输入您的手机号')
          }
        }
      })
      // 设定登录角色
      $('.userTypeinput span').on('click', function() {
        $('.userTypeinput span').removeClass('active')
        $(this).addClass('active')
      })
      // 二维码登录
      $('.login-weixin').on('click', function() {
        _this.openWxPop()
      })
      // 获取微信登录信息
      window.addEventListener('message', function(e) {
        var payload = e.data
        if (e.data && (e.data + '').indexOf('code:') !== -1) {
          var code = e.data.split(':')[1]
          $('body').trigger('wxLoginSuccess', code)
        }
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
          _this.loginByMobile(phone, smscode, _this.wxtype).done(function(res) {
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
    checkVcode: function(cb) {
      var vcode = $('#uservcode').val()
      if (vcode) {
        AFWL_API.checkVcode(vcode)
          .done(function(res) {
            if (res.status === 200) {
              cb && cb()
            } else {
              layer.alert('验证码有误')
            }
          })
          .fail(function() {
            layer.alert('出错了，请刷新页面重试')
          })
      } else {
        layer.alert('请填写验证码')
      }
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
            location.href = AFWL_API.constant.LINK_MEMBER
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
                'http://www.28kuaiyun.cn/plus/list.php?tid=78'
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
    validate: function() {
      var checkinfo = {
        done: true,
        err: ''
      }
      $('.login-box')
        .find('input, select')
        .removeClass('error')
      if ($('.userTypeinput .active').length) {
        this.login_data.usertype = $('.userTypeinput .active').data('type')
      } else {
        // $('.userTypeinput .active').addClass('error');
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
      if (this.loginType === 'password') {
        if ($('#userpwd').val()) {
          this.login_data.pwd = $('#userpwd').val()
        } else {
          $('#userpwd').addClass('error')
          checkinfo.done = false
          checkinfo.err += '<br>请输入您的密码'
        }
      }

      if ($('#uservcode').val()) {
        this.login_data.vcode = $('#uservcode').val()
      } else {
        $('#uservcode').addClass('error')
        checkinfo.done = false
        checkinfo.err += '<br>请输入验证码'
      }

      if (this.loginType === 'smscode') {
        if ($('#usersmscode').val()) {
          this.login_data.pwd = $('#usersmscode').val()
        } else {
          $('#usersmscode').addClass('error')
          checkinfo.done = false
          checkinfo.err += '<br>请输入短信验证码'
        }
      }

      return checkinfo
    },
    loginPhpByToken: function(access_token, usertype, url) {
      return AFWL_API.loginByToken(access_token)
        .done(function(res) {
          if (res.data) {
            // 登录成功
            if (url) {
              location.href = url
            }
          }
        })
        .fail(function(res) {
          layer.alert(
            '登录失败：' +
              (res.errorInfo ||
                res.message ||
                res.text ||
                JSON.stringify(res) ||
                '未知错误')
          )
        })
    },
    loginByMobile: function(username, pwd, usertype) {
      var _this = this
      // 先登录157拿token
      // 将token保存到cookie后再进行最后的php登录
      return AFWL_API.loginByMobile(username + '|' + usertype, pwd)
        .done(function(res) {
          if (res.access_token) {
            // $('#form1').submit();
            location.href = url
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
    login: function(username, pwd, usertype, url) {
      // 先登录157拿token
      // 将token保存到cookie后再进行最后的php登录
      var _this = this
      return AFWL_API.login(username + '|' + usertype, pwd)
        .done(function(res) {
          if (res.access_token) {
            var domain = location.hostname
            if (domain.indexOf('28kuaiyun.cn') !== -1) {
              domain = '.28kuaiyun.cn'
            }
            $.cookie('access_token', res.access_token, {
              expires: 7,
              domain: domain,
              path: '/'
            })
            $.cookie('login_mobile', username, {
              expires: 7,
              domain: domain,
              path: '/'
            })
            $.cookie('login_type', usertype, {
              expires: 7,
              domain: domain,
              path: '/'
            })
            $.cookie('loginId', res.id, { expires: 7, path: '/' })
            $.cookie('loginCompanyName', res.companyName, {
              expires: 7,
              path: '/'
            })
            // 登录成功
            location.href = url || '/'
          } else {
            _this.changeVcode()
            layer.alert(
              '登录失败：' +
                (res.errorInfo ||
                  res.message ||
                  res.text ||
                  JSON.stringify(res) ||
                  '未知错误')
            )
          }
        })
        .fail(function(err, status, let2) {
          console.log(err, status, let2)
          _this.changeVcode()
          if (err.status) {
            layer.alert('登录失败，账号或密码错误。')
          } else {
            layer.alert('登录失败，请检查您的账号密码。')
          }
          // layer.alert(JSON.stringify(err));
        })
    }
  }
  //mobile=2&imageCode=3&smsCode=4&password=5&passwordSure=6
  // 找回密码页面
  var find_page = {
    memberType: '',
    find_data: {
      imageCode: '',
      memberType: '',
      mobile: '',
      password: '',
      passwordSure: '',
      smsCode: ''
    },
    showStep: function(index) {
      $('.step-next>div')
        .removeClass('current')
        .eq(index)
        .addClass('current')
      $('.stepinfo')
        .removeClass('current')
        .eq(index)
        .addClass('current')
      $('.step_info').attr('class', 'step_info step_info_ul_' + (index + 1))
      $('.ff-title span')
        .removeClass('current')
        .eq(index)
        .addClass('current')
    },
    checkValid: function(name, checkFn, errTxt) {
      var el = $('[name="' + name + '"]')
      var val = el.val()
      var par = el.closest('li')
      par.removeClass('success error')
      var defer = $.Deferred()
      checkFn(val, defer, el).then(
        function() {
          find_page.find_data[name] = val
          par
            .addClass('success')
            .find('.tip')
            .html('')
        },
        function() {
          par
            .addClass('error')
            .find('.tip')
            .html(errTxt)
          find_page.find_data[name] = ''
        }
      )
      return defer.promise()
    },
    validate: function() {
      var mobile = this.checkValid(
        'mobile',
        function(value, p) {
          if (validReg.MOBILE.test(value)) {
            p.resolve()
          } else {
            p.reject()
          }
          return p
        },
        '请输入正确的手机号码'
      )
      var password = this.checkValid(
        'password',
        function(value, p) {
          if (value.length >= 6) {
            p.resolve()
          } else {
            p.reject()
          }
          return p.promise()
        },
        '密码长度至少为6位'
      )
      var passwordSure = this.checkValid(
        'passwordSure',
        function(value, p) {
          if (value && value === $('[name="password"]').val()) {
            p.resolve()
          } else {
            p.reject()
          }
          return p.promise()
        },
        '两次密码输入必须保持一致'
      )
      var contactsName = this.checkValid(
        'contactsName',
        function(value, p) {
          if (value) {
            p.resolve()
          } else {
            p.reject()
          }
          return p.promise()
        },
        '请输入注册人姓名'
      )

      var companyName = this.checkValid(
        'companyName',
        function(value, p) {
          if (value) {
            p.resolve()
          } else {
            p.reject()
          }
          return p.promise()
        },
        '请输入公司名称'
      )
      var imageCode = this.checkValid(
        'imageCode',
        function(value, p, el) {
          if (value) {
            AFWL_API.checkVcode(value)
              .done(function(res) {
                if (res.status === 200) {
                  p.resolve()
                } else {
                  p.reject()
                }
              })
              .fail(function() {
                p.reject()
              })
          } else {
            p.reject()
          }
          return p.promise()
        },
        '请输入正确的验证码'
      )
      var smsCode = this.checkValid(
        'smsCode',
        function(value, p) {
          var mobile = $('[name="mobile"]').val()
          if (value && validReg.MOBILE.test(mobile)) {
            AFWL_API.checkMobileCode(mobile, value)
              .done(function(res) {
                if (res.status === 200) {
                  p.resolve()
                } else {
                  p.reject()
                }
              })
              .fail(function() {
                p.reject()
              })
          } else {
            p.reject()
          }
          return p.promise()
        },
        '请输入有效的手机验证码'
      )

      var agree = $('[name="agree"]').prop('checked')
      var defer = $.Deferred()

      if (!agree) {
        defer.reject(agree)
        layer.msg('请确认已阅读我们的服务条款！')
      } else {
        defer.resolve(agree)
      }

      find_page.find_data.belongCityName = $('#store-selector .text div').attr(
        'title'
      )
      find_page.find_data.belongCity = $('#store-selector .text div').attr(
        'data-id'
      )
      find_page.find_data.provinceCode = $('#store-selector .text div').attr(
        'data-province'
      )
      find_page.find_data.cityCode = $('#store-selector .text div').attr(
        'data-city'
      )
      find_page.find_data.areaCode = $('#store-selector .text div').attr(
        'data-area'
      )

      return $.when(
        mobile,
        password,
        passwordSure,
        contactsName,
        companyName,
        imageCode,
        smsCode,
        defer.promise()
      )
    },
    doRegisiter: function() {
      AFWL_API.regisiter(this.find_data)
        .done(function(res) {
          if (res.status === 200) {
            find_page.showStep(2)
            // /member/index.php
            // /index.php
            $('#usermobile').val(find_page.find_data.mobile)
            $('#userpwd').val(find_page.find_data.password)
          } else {
            layer.alert('注册失败：' + res.errorInfo || res.message)
          }
        })
        .fail(function(error) {
          layer.alert('网络有问题，注册失败。')
        })
    },
    startCountDown: function(el, time) {
      var _this = this
      el.text(time + '秒后再次操作')
      setTimeout(function() {
        if (time > 0) {
          _this.startCountDown(el, time - 1)
        } else {
          el.removeClass('disabled')
          el.text('获取短信验证码')
        }
      }, 1000)
    },
    init: function() {
      var $this = this
      // 选取会员类型
      $('#memeberType').on('change', function() {
        var val = $(this).val()
        if (val) {
          var arr = val.split('|')
          find_page.memberType = arr[0]
          find_page.find_data.memberType = arr[1]
        }
      })
      $('.getvcode').on('click', function() {
        var _this = $(this)
        if (_this.hasClass('disabled')) {
          return false
        } else {
          var mobile = $('[name="mobile"]').val()
          if (validReg.MOBILE.test(mobile)) {
            _this.addClass('disabled')
            AFWL_API.getMobileCode(mobile)
              .done(function(res) {
                $this.startCountDown(_this, 60)
                layer.msg('验证码已发送，请注意查收')
              })
              .fail(function() {
                _this.removeClass('disabled')
              })
          } else {
            layer.msg('请填写有效的手机号码！')
          }
        }
      })
      // 设置验证码
      $('#vdimgck').attr('src', AFWL_API.vcode())
      $('.changevcode').on('click', function() {
        $('#vdimgck').attr('src', AFWL_API.vcode() + '&rn=' + Math.random())
        return false
      })

      // 注册页
      $('.password-page .step_1 .next-btn').on('click', function() {
        //if(find_page.find_data.)
        if (find_page.find_data.memberType) {
          var value = $('#mobile').val()
          var vcode = $('#vcode').val()

          if (validReg.MOBILE.test(value)) {
            find_page.find_data.mobile = value
          } else {
            layer.alert('请填写有效的手机号码')
            return false
          }
          if (vcode) {
            AFWL_API.checkVcode(vcode)
              .done(function(res) {
                if (res.status === 200) {
                  AFWL_API.checkMobileIsRegister({
                    mobile: find_page.find_data.mobile,
                    memberType: find_page.find_data.memberType
                  })
                    .done(function(res) {
                      if (res.status === 100) {
                        find_page.find_data.imageCode = vcode
                        $('.mobile').text(find_page.find_data.mobile)
                        find_page.showStep(1)
                      } else {
                        layer.alert(res.errorInfo || res.message)
                      }
                    })
                    .fail(function(err) {
                      layer.alert('请求出错了，请尝试刷新页面')
                    })
                } else {
                  layer.alert('验证码有误')
                }
              })
              .fail(function() {
                layer.alert('出错了，请刷新页面重试')
              })
          } else {
            layer.alert('请填写验证码')
          }
        } else {
          layer.alert('请选择会员类型')
        }
      })
      $('.password-page .step_2 .next-btn').on('click', function() {
        var value = $('#smscode').val()
        if (!value) {
          layer.alert('请填写验证码')
          return false
        }
        find_page.find_data.smsCode = value
        AFWL_API.checkMobileCode(find_page.find_data.mobile, value)
          .done(function(res) {
            if (res.status === 200) {
              find_page.showStep(2)
            } else {
              layer.alert('验证失败')
            }
          })
          .fail(function() {
            layer.alert('网络错误，验证失败')
          })
      })

      $('.password-page .step_3 .next-btn').on('click', function(e) {
        e.preventDefault()
        var pwd = $('#password').val()
        var repwd = $('#repassword').val()
        if (!pwd || pwd.length < 6) {
          layer.alert('请输入有效密码')
          return false
        }
        if (pwd !== repwd) {
          layer.alert('两次密码输入不一致')
          return false
        }
        find_page.find_data.password = pwd
        find_page.find_data.passwordSure = repwd
        AFWL_API.findPassword(find_page.find_data)
          .done(function(res) {
            if (res.status === 200) {
              layer.alert('修改成功')
              find_page.showStep(3)
            } else {
              layer.alert('修改失败' + res.errorInfo || res.message)
            }
          })
          .fail(function() {
            layer.alert('网络错误，修改失败')
          })
        return false
      })

      $('.password-page .step-next3 .normal-btn').on('click', function() {
        $('[name="gourl"]').val('/index.php')
        login_page.login(
          find_page.find_data.mobile,
          find_page.find_data.password,
          find_page.memberType
        )
      })
    }
  }

  //初始化登录页面
  if ($('.login-page').length) {
    login_page.init()
  }
  // 初始化注册页面
  if ($('.registiter-page').length) {
    reg_page.init()
  }
  // 初始化找回密码页面
  if ($('.password-page').length) {
    find_page.init()
  }

  /* var current_reg_step = 0;
  $(".next-btn").on("click", function(){
    reg_page.showStep(++current_reg_step)
  });
  $(".prev-btn").on("click", function(){
    reg_page.showStep(--current_reg_step)
  }); */
})(window.jQuery)
