// 公共验证规则
var AFLC_VALID = {
  // 用户名
  USERNAME: /^([0-9a-zA-Z]|[\u0391-\uFFE5]){2,}$/,
  // 中文
  ONLY_CHINESE: /^[\u4E00-\u9FA5]+$/,
  // 中英文
  CHINESE_AND_ENGLISH: /^[\u4E00-\u9FA5a-zA-Z]+$/,
  // 手机
  MOBILE: /^[1][3-8]\d{9}$/,
  // MOBILE: /^(13[0-9]|14[57]|15[01-37-9]|18[0235-9])\d{8}$/,
  // 身份证
  ID_CARD: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
  // 英语和数字
  ENGLISH_AND_NUMBER: /^[a-zA-Z0-9]+$/,
  // 特殊字符
  SPECIAL_CHARACTER: /([^0-9a-zA-Z\u4E00-\u9FA5])+/,
  // 数字且最多只能有两位小数
  FLOAT2ING: /^\d+(\.\d{0,2})?$/,
  // 邮件地址
  EMAIL: /^[\w!#$%&\'*+\/=?^_`{|}~-]+(?:\.[\w!#$%&\'*+\/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/,
  // 非数字
  NO_NUMBER: /[\D|\.]/,
  // 纯数字
  ONLY_NUMBER: /^[0-9]+$/,
  // 纯字母
  ONLY_LETTER: /^[a-zA-Z]+$/,
  // 纯符号 !$^&*()+{}|:?-=[]./ 此种情况下这19个是特殊字符
  ONLY_PUNCTUATION: /^[~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,
  // 字母和数字
  ONLY_NUMBER_AND_LETTER: /^[0-9a-zA-Z]+$/,
  //  6-32位密码
  PWD_NUMBER_AND_LETTER: /^[0-9a-zA-Z_#]{6,32}$/,
  // 字母和符号
  ONLY_LETTER_AND_PUNCTUATION: /^[a-zA-Z~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,
  // 数字和符号
  ONLY_NUMBER_AND_PUNCTUATION: /^[0-9~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,
  // 同时包含字母数字和符号
  LETTER_AND_NUMBER_AND_PUNCTUATION: /^[a-zA-Z0-9~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$/,
//       LETTER_AND_NUMBER_AND_PUNCTUATION : /(^[a-zA-Z]+$)&(^[0-9]+$)(^[~\!@#\$%\^\&\*\(\)_\+\{\}\|\:\"<>\?`\-\=\[\]\\;\',\.\/]+$)/,
  // 纯数字从1开始
  ONLY_NUMBER_GT: /^[1-9]\d*$/,
  // 不可以为空格
  KONGE: /^[^ ]{6,16}$/,
  // 只含有英文字母、数字和下划线
  ONLY_ENGLISH_NUMBER: /^[A-Za-z0-9_]+$/,
  // 国内电话(区号-号码)
  TELEPHONE: /(^\d{3}-\d{8}$)|(^\d{4}-\d{7,8}$)/,
  // 邮编
  ZIPCODE: /^[1-9]\d{5}(?!\d)$/,
  // 保留两位小数点
  NUM_POINT: /^(([1-9][0-9])|(([0].\d{0,2}|[1-9][0-9].\d{0,2})))$/,
  // 支持百分比
  NUM_PERCENTAGE: /^([1-9]{1}[0-9]{0,1}|0|100)(.\d{1,2}){0,1}%$/,
  /**
   * 获取字符长度
   */
  strlen: function(str) {
    var s = 0
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i).match(/[\u0391-\uFFE5]/)) {
        s += 2
      } else {
        s++
      }
    }
    return s
  }
};
// 接口相关 S
var AFWL_API = {
  url: '/api',
  getWxInfo: function(){
    return $.get(this.url + '/api-uaa/wx/qr/wxinit')
  },
  /**
   * 绑定账号到指定的微信id上
   * @param {*} username 用户账号
   * @param {*} openid 微信id
   * @param {*} type 用户角色类型
   * @param {*} origin 来源
   */
  bindWxUser: function(username,openid,type,origin){
    return $.get(this.url + '/api-common/common/user/v1/wx/regAndbinding/'+username+'/'+openid+'/'+(origin || '56LINES')+'/' + type)
  },
  /**
   * 获取绑定的信息
   */
  getBindInfo: function(code, userType, origin){
    /* var defer = $.Deferred();
    if(Math.random()>0.5){
      defer.resolve({data:{}});
    } else {
      defer.reject();
    }

    return defer.promise(); */
    //origin=56LINES&roleType=aflc-1&code=123xxasd123
    return $.get(this.url + '/api-uaa/wx/qr/wxlogincheck',{
      origin: origin || '56LINES',
      roleType: userType,
      code: code
    });
  },
  getBindedInfo: function(code, roleType, origin){
    var grant_type = 'authorization_code'
    var scope = 'webApp'
    var form = new FormData()
    form.append('roleType', roleType)
    form.append('code', code)
    form.append('origin', origin || '56LINES')
    form.append('grant_type', grant_type)
 
    return $.ajax({
      url: this.url + '/api-uaa/qrwechat/token',
      type: 'POST',
      // 如果用jq，必须设置以下三项，避免jq 的中间处理
      processData:false,
      cache: false,
      contentType: false,

      headers: {
        // 主动设置Content-Type为multipart/form-data时，会丢掉boundary值，导致后台无法解析数据。
        //'Content-Type': 'multipart/form-data',
        'authorization': 'Basic d2ViQXBwOndlYkFwcA=='
      },
      data: form
    })
  },
    _warpper: function(pro){
    var defer = $.Deferred();
    pro.done(function(res){
      if(res.status === 200 || res.access_token){
        defer.resolve(res);
      } else {
        defer.reject(res);
      }
    }).fail(function(){
      defer.reject({
        text: '网络错误！',
        status: 100
      });
    });

    return defer.promise();
  }, 
  /**
   * 返回数据包含 userName memberPwd
   */
  loginByToken: function(access_token){
    access_token = access_token || ''
    return this._warpper($.get(this.url + '/aflc-uc/usercenter/aflcLogisticsCompanyAccout/v1/getAccoutInfo?access_token=' + access_token))
  },
   getMobileCode: function(phone){
    return this._warpper($.post(this.url + '/aflc-common/aflcCommonSms/sendCodeSms/' + phone));
  },
    loginByMobile: function(username, code){
    var grant_type = 'authorization_code'
    var scope = 'webApp'
    var form = new FormData()
    form.append('mobile', username)
    form.append('code', code)
    form.append('grant_type', grant_type)
 
    return $.ajax({
      url: this.url + '/api-uaa/mobile/token',
      type: 'POST',
      // 如果用jq，必须设置以下三项，避免jq 的中间处理
      processData:false,
      cache: false,
      contentType: false,

      headers: {
        // 主动设置Content-Type为multipart/form-data时，会丢掉boundary值，导致后台无法解析数据。
        //'Content-Type': 'multipart/form-data',
        'authorization': 'Basic d2ViQXBwOndlYkFwcA=='
      },
      data: form
    })
  }
}
//接口相关 E

//函数方法 S
  function phplogin3(userid,pwd){
    return $.ajax({
        type:"post",
        headers:{
          'Content-Type': 'application/json'
        },
        url:"/member/index_do.php?fmdo=login&dopost=login3&gourl=/&userid="+userid+"&pwd="+pwd
      });
  }
   // 打开二维码弹窗
    function openWxPop(){
     return AFWL_API.getWxInfo().done(function(res){
        layer.open({
          type: 1,
          title:"登录",
          skin: 'layui-layer-rim', //加上边框
          area: ['300px', '460px'], //宽高
          content: '<div id="wxtwocodebox"></div>'
        });
        var data = res.data;
      
          var obj = new WxLogin({
            self_redirect:true,
            id:"wxtwocodebox", 
            appid: data.appid, 
            scope: data.scope, 
            redirect_uri: encodeURIComponent("http://www.56lines.cn/plus/list.php?tid=78"),
            state: data.state,
            style: "",
            href: ""
          });

      }).fail(function(){
        layer.msg('请求微信授权失败。');
      });
    }
    //绑定微信
    function bindWx(username,openid,type){
      return AFWL_API.bindWxUser(username,openid,type).done(function(res){
        if(res.status === 200){
          // 绑定成功
          
          layer.closeAll();
          setTimeout(function() {layer.msg("绑定成功");}, 1000);      
          $('.login-box2').css("display","none")
          // location.href='/';
        } else {
          // 绑定失败
          layer.alert('失败：'+(res.errorInfo || res.message || res.text || JSON.stringify(res) || '未知错误'));
        }
        return res;
      }).fail(function(res){
        layer.alert('失败：'+(res.errorInfo || res.message || res.text || JSON.stringify(res) || '未知错误'));
      });
    }
    
     // 通过微信code值获取token
    function loginByWx(code,type){
      var _this = this;
      return AFWL_API.getBindedInfo(code, type).done(function(res){
        var data = res.data;
        layer.closeAll();
        if(res.access_token){
          loginPhpByToken(res.access_token, type, '#');
          layer.msg('登录成功');
          // 已经绑定，跳转到会员中心
          // location.href = AFWL_API.constant.LINK_MEMBER
        } else {
        	
          layer.msg('您的微信号尚未绑定该角色。');
          wxid = res.message.match(/openid:(.*)$/)[1];
          openBindPop();
          // 跳转到绑定页面
          // location.href = ''
        }
      }).fail(function(res,err){ 
       var  data =  JSON.parse(res.responseText);

        if(data.status && data.message.indexOf('openid:')!==-1){

          layer.msg('您的微信号尚未绑定该角色。');
          wxid = data.message.match(/openid:(.*)$/)[1];
          openBindPop();
        } else {
          layer.closeAll();
          layer.alert('失败：'+(data.errorInfo || data.message || data.text || JSON.stringify(data) || '未知错误'));
        }
        
      });
    }
        // 打开绑定弹窗
    function  openBindPop(){
      layer.open({
        type: 1,
        skin: 'layui-layer-rim',
        area: ['360px', '300px'],
        cancel: function(){
          layer.closeAll();
        },
        title: '绑定微信号', //不显示标题
        content: '<div class="login-box2"> <h4>您的微信号未绑定，请输入手机号进行绑定</h4> <div class="inputbox"> <span class="icon icon-mobile"></span> <input type="text" maxlength="11" name="userid2" id="usermobile3" placeholder="请输入您的手机号"> </div> <div class="inputbox smscodeinput"> <span class="icon icon-password"></span> <input type="text" maxlength="10" name="smscode2" id="usersmscode2" placeholder="请输入短信验证码"> <span class="getsmscode2">获取验证码</span> </div> <div class="login-btn2">绑 定</div> </div>'
        
      });
    }
    
        function loginByMobile(username, pwd, usertype){
      var _this = this;
      // 先登录157拿token
      // 将token保存到cookie后再进行最后的php登录
      return AFWL_API.loginByMobile(username +'|' + usertype, pwd).done(function(res){
        if(res.access_token){
          
          // $('#form1').submit();
          loginPhpByToken(res.access_token, usertype, '#');
        } else{
          layer.alert('登录失败：'+(res.errorInfo || res.message || res.text || JSON.stringify(res) || '未知错误'));
        }
        return res
      }).fail(function(err,status,let2){
        console.log(err,status,let2)
        if(err.status){
          layer.alert('登录失败，服务器返回：'+err.status);
        } else {
          layer.alert('登录失败，请检查您的账号密码。');
        }
        // layer.alert(JSON.stringify(err));
        
      });
    }
        
            // 发送短信
   function  sendSms(phone,ele){
      return AFWL_API.getMobileCode(phone).done(function(){
        layer.msg('已发送验证码，请注意查收。');
        startSms(ele);
      }).fail(function(res){
        layer.alert('失败：'+(res.errorInfo || res.message || res.text || JSON.stringify(res) || '未知错误'));
      });
    }
    // sms倒计时
    function startSms(ele){
      var  i = 60;
      var smstimer = setInterval(function(){
        if(--i>=0){
          ele.text('获取验证码('+i+'s)')
        } else {
          clearInterval(smstimer);
          ele.text('获取验证码');
          ele.removeClass('disabled');
        }
      }, 1000);
    }
      function    loginPhpByToken(access_token, usertype, url){
      return AFWL_API.loginByToken(access_token).done(function(res){
        if(res.data){
        	console.log("phplogin"+res.data.userName+res.data.memberPwd);
          return phplogin3(res.data.userName,res.data.memberPwd).done(function(){
            $.cookie('access_token', access_token,{ expires: 7, path: '/' });
            $.cookie('login_mobile', res.data.userName,{ expires: 7, path: '/' });
            $.cookie('login_type', usertype,{ expires: 7, path: '/' });
            // 登录成功
            if(url){
              //location.href = url;
            Is_login1();
            Is_login2();
            $('.login_box').css("display","none");
            }
            
          }).fail(function(res){
            layer.alert('登录失败：'+(res.errorInfo || res.message || res.text || JSON.stringify(res) || '未知错误'));
          });
        }
      }).fail(function(res){
        layer.alert('登录失败：'+(res.errorInfo || res.message || res.text || JSON.stringify(res) || '未知错误'));
      });
    }
//函数方法 E


  	var wxcode;
  	var wxtype;
  	var wxid;
  	
  	
// 二维码登录
      $(".login-weixin").on("click", function(){
        openWxPop();
      });
// 获取微信登录信息
      window.addEventListener('message', function(e){
        var payload = e.data
        if(e.data.indexOf('code:')!==-1){
          var code = e.data.split(':')[1];
          $('body').trigger('wxLoginSuccess', code);
        }
      });
      $('body').on('wxLoginSuccess', function(e, code){
        layer.closeAll();
        wxcode = code;
        // layer.msg('')
        layer.open({
          type: 1,
          title:"选择角色",
          skin: 'layui-layer-rim', //加上边框
          area: ['200px', '240px'], //宽高
          content: '<div class="userTypeSelect"> <span data-type="aflc-1">车主</span> <span data-type="aflc-2">货主</span> <span data-type="aflc-5">物流公司</span> </div>'
        });
      });
 // 选择角色信息
      $('body').on('click', '.userTypeSelect span', function(){
        $('.userTypeSelect span').removeClass('active');
        $(this).addClass('active');
        layer.closeAll();
        var index = layer.load(1, {
          title: '正在登录中...',
          shade: [0.3,'#fff'] //0.1透明度的白色背景
        });
        wxtype = $(this).data('type');
        loginByWx(wxcode,wxtype);
      });
// 绑定
      $('body').on('click', '.login-btn2', function() {
        var phone = $('#usermobile3').val();
        var smscode = $.trim($('#usersmscode2').val());
        if(AFLC_VALID.MOBILE.test(phone) && smscode){
          loginByMobile(phone, smscode,wxtype).done(function(res){
            bindWx(phone,wxid,wxtype);
          });
        }
      });
// 绑定 - 获取验证码
      $('body').on('click', '.getsmscode2', function() {
        if($(this).hasClass('disabled') === false){
          // 先判断是否有手机号
          var phone = $('#usermobile3').val();
          if(AFLC_VALID.MOBILE.test(phone)){
            $(this).addClass('disabled');
            sendSms(phone, $('.getsmscode2'));
            
          } else {
            layer.msg('请输入您的手机号');
          }
          
        }
      });
      
