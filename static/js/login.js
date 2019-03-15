$('.login_close').click(function() {
  $('.login_box').css('display', 'none')
  $('.login_box_mask').hide()
})
$('.login_bt1').css({ color: '#2577e3', 'border-bottom': '1px solid #2577e3' })
$('.login_bt1').click(function() {
  $('.login_bt1').css({
    color: '#2577e3',
    'border-bottom': '1px solid #2577e3'
  })
  $('.login_bt2').css({ color: '#333', 'border-bottom': '1px solid #ccc' })
  $('.pwd_login').css('display', 'block')
  $('.yzm_login').css('display', 'none')
})
$('.login_bt2').click(function() {
  $('.login_bt1').css({ color: '#333', 'border-bottom': '1px solid #ccc' })
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

//更换图形验证码 S
var src =
  '/api/aflc-common/common/aflcMemberCenter/v1/getImageCodeAndUID?imageWidth=90&imageHeight=25'
$('#Vcode').attr('src', src)
//alert(1);
$('#Vcode').click(function() {
  $('#Vcode').attr('src', src)
})
$('#changeVcode').click(function() {
  $('#Vcode').attr('src', src)
})

//更换图形验证码 E

//更换图形验证码2 S
var src =
  '/api/aflc-common/common/aflcMemberCenter/v1/getImageCodeAndUID?imageWidth=90&imageHeight=25'
$('#Vcode2').attr('src', src)
//alert(1);
$('#Vcode2').click(function() {
  $('#Vcode2').attr('src', src)
})
$('#changeVcode2').click(function() {
  $('#Vcode2').attr('src', src)
})

//更换图形验证码 2 E

/*判断是否登录 S*/

function getCookie(cookieName) {
  var cookieValue = ''
  if (document.cookie && document.cookie != '') {
    var cookies = document.cookie.split(';')
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i]
      if (
        cookie.substring(0, cookieName.length + 2).trim() ==
        cookieName.trim() + '='
      ) {
        cookieValue = cookie.substring(cookieName.length + 2, cookie.length)
        break
      }
    }
  }
  return cookieValue
}
function setCookie(c_name, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie =
    c_name +
    '=' +
    escape(value) +
    (expiredays == null ? '' : ';expires=' + exdate.toGMTString())
}

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
      getCookie('access_token'),
    // url:"/api/aflc-portal/portalt/aflcLogisticsCompany/v1/findByAccount/"+account,

    success: function(res) {
      console.log('success')

      var datas = res.data
      //alert(datas.length);
      if (datas) {
        name = datas.contactsName
      }
      $.cookie('user_token', res.data.userToken, { expires: 7, path: '/' })
      $.cookie('loginId', res.data.id, { expires: 7, path: '/' })
      $.cookie('loginCompanyName', res.data.companyName, {
        expires: 7,
        path: '/'
      })
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
      $.cookie('user_token', res.data.userToken, { expires: 7, path: '/' })
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
      $.cookie('user_token', res.data.userToken, { expires: 7, path: '/' })
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
  var login_mobile = getCookie('login_mobile')
  var login_type = getCookie('login_type')
  var access_token = getCookie('access_token')
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
    $('#_userlogin1').css('display', 'none')
    $('#_userlogin1_1').css('display', 'block')

    $('#login_name1').html(login_name)
  }
}
Is_login1()

function Is_login2() {
  var login_mobile = getCookie('login_mobile')
  var login_type = getCookie('login_type')
  var access_token = getCookie('access_token')
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
    $('#_userlogin2').css('display', 'none')
    $('#_userlogin2_2').css('display', 'block')

    $('#login_name2').html(login_name)
    $('#my_website').attr('href', '/member/' + login_mobile + '.html')
  }
}
Is_login2()

function Is_login3() {
  var login_mobile = getCookie('login_mobile')
  var login_type = getCookie('login_type')
  var access_token = getCookie('access_token')
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
    $('#_userlogin3').css('display', 'none')
    $('#_userlogin3_2').css('display', 'block')

    $('#login_name3').html(login_name)
    $('#my_website').attr('href', '/member/' + login_mobile + '.html')
  }
}
Is_login3()

/*判断是否登录 E*/

function phplogin(userid, pwd) {
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url:
      '/member/index_do.php?fmdo=login&dopost=login2&gourl=/&userid=' +
      userid +
      '&pwd=' +
      pwd,

    success: function(res) {
      console.log(res)
    },
    error: function(err) {
      //alert("error");
      console.log(err.responseText)
    }
  })
}

;(function($) {
  if (!$) {
    console.log('init error, need JQ~')
    return false
  }

  // 接口相关
  var AFWL_API = {
    // url: 'http://192.168.1.188:886/api',
    url: '/api',
    login: function(username, password) {
      var grant_type = 'password'
      var scope = 'webApp'
      var form = new FormData()
      form.append('username', username)
      form.append('password', $.md5(password))
      form.append('grant_type', grant_type)

      /* return axios.request({
        url: 'http://192.168.1.188:886/api/api-uaa/password/token',
        method: 'post',
        headers: {
          'Content-Type': 'multipart/form-data',
          'authorization': 'Basic d2ViQXBwOndlYkFwcA=='
        },
        data: form
      }) */

      return $.ajax({
        url: this.url + '/api-uaa/password/token',
        type: 'POST',
        // 如果用jq，必须设置以下三项，避免jq 的中间处理
        processData: false,
        cache: false,
        contentType: false,

        headers: {
          // 主动设置Content-Type为multipart/form-data时，会丢掉boundary值，导致后台无法解析数据。
          //'Content-Type': 'multipart/form-data',
          authorization: 'Basic d2ViQXBwOndlYkFwcA=='
        },
        data: form
      })
    },
    vcode: function(width, height) {
      var w = width || 140
      var h = height || 40
      return (
        this.url +
        '/aflc-common/common/aflcMemberCenter/v1/getImageCodeAndUID?imageWidth=' +
        w +
        '&imageHeight=' +
        h
      )
    },
    checkVcode: function(code) {
      return $.get(
        this.url +
          '/aflc-common/common/aflcMemberCenter/v1/checkImageCodeAndUID/' +
          code
      )
    },
    getMobileCode: function(phone) {
      return $.post(
        this.url + '/aflc-common/aflcCommonSms/sendCodeSms/' + phone
      )
    },
    checkMobileCode: function(phone, code) {
      return $.post(
        this.url + '/aflc-common/aflcCommonSms/check/' + phone + '/' + code
      )
    },
    regisiter: function(data) {
      /* {
        "belongCity": "string",
        "belongCityName": "string",
        "companyName": "string",
        "contactsName": "string",
        "imageCode": "string",
        "memberType": "string",
        "mobile": "string",
        "password": "string",
        "passwordSure": "string",
        "registerOrigin": "string",
        "registerOriginName": "string",
        "smsCode": "string"
      } */
      return $.ajax({
        type: 'POST',
        url: this.url + '/aflc-common/common/aflcMemberCenter/v1/register',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        dataType: 'json'
      })
      //return $.post(this.url + '/aflc-common/common/aflcMemberCenter/v1/register', data);
    },
    getCityInfo: function(code) {
      code = code || ''
      return $.get(
        this.url +
          '/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code=' +
          code
      )
    },
    /**
     * {
     * memberType
     * mobile
     * imageCode
     * smsCode
     * password
     * passwordSure
     * }
     */
    findPassword: function(data) {
      var form = new FormData()
      form.append('mobile', data.mobile)
      form.append('password', data.password)
      form.append('passwordSure', data.passwordSure)
      form.append('smsCode', data.smsCode)
      form.append('imageCode', data.imageCode)
      form.append('memberType', data.memberType)

      return $.ajax({
        url:
          this.url + '/aflc-common/common/aflcMemberCenter/v1/retrievePassword',
        // url: this.url + '/aflc-common/common/aflcMemberCenter/v1/retrievePassword?' + $.param(data),
        type: 'put',
        //processData:false,
        //cache: false,
        // contentType: false,

        headers: {
          // 主动设置Content-Type为multipart/form-data时，会丢掉boundary值，导致后台无法解析数据。
          'Content-Type': 'application/x-www-form-urlencoded'
          // 'authorization': 'Basic d2ViQXBwOndlYkFwcA=='
        },
        data: $.param(data),
        timeout: 20000
      })
    },
    // 检查手机账号是否已注册
    checkMobileIsRegister: function(data) {
      var form = new FormData()
      form.append('mobile', data.mobile)
      form.append('memberType', data.memberType)

      return $.ajax({
        url:
          this.url +
          '/aflc-common/common/aflcMemberCenter/v1/checkMobileIsRegister',
        // url: this.url + '/aflc-common/common/aflcMemberCenter/v1/retrievePassword?' + $.param(data),
        type: 'post',
        //processData:false,
        //cache: false,
        // contentType: false,

        headers: {
          // 主动设置Content-Type为multipart/form-data时，会丢掉boundary值，导致后台无法解析数据。
          'Content-Type': 'application/x-www-form-urlencoded'
          // 'authorization': 'Basic d2ViQXBwOndlYkFwcA=='
        },
        data: $.param(data),
        timeout: 20000
      })
    }
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
            $.cookie('access_token', res.access_token, {
              expires: 7,
              path: '/'
            })
            $.cookie('login_mobile', username, { expires: 7, path: '/' })
            $.cookie('login_type', usertype, { expires: 7, path: '/' })
            Is_login1()
            Is_login2()
            phplogin(username, pwd)
            //layer.alert('登录成功');
            $('.login_box').css('display', 'none')
            $('.login_box_mask').hide()
            $('body').toast({
              content: '登录成功',
              duration: 3000
            })
            setTimeout(function() {
              $('body').trigger('login.success')
            }, 3 * 1000)
            //$('#form1').submit();
          } else {
            layer.alert(
              '登录失败：' +
                (res.errorInfo || res.text || JSON.stringify(res) || '未知错误')
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
