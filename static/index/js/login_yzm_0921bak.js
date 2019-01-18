var myurl=window.location.href;

 $("input[name='gourl']").val(myurl);

 $('.userType2 input').click(function(){
 	  $('.userType2 input').removeClass("checked");
    $(this).addClass("checked");
    $("input[name='userType2']").val($(this).attr("name"))  
  console.log($("input[name='userType2']").val()); 
 })
 
function invokeSettime(obj){
    var countdown=60;
    settime(obj);
    function settime(obj) {
        if (countdown == 0) {
        	$(obj).attr("disabled",false);
            $('#yzm_sm').css("display","none");
            $('.yzm_sm').removeClass("yzm_sm_bg");
            $(obj).attr("value","获取短信验证码");
            countdown = 60;
            return;
        } else {
        	$(obj).attr("disabled",true);
           $('#yzm_sm').css("display","block");
           $('.yzm_sm').addClass("yzm_sm_bg");
           $('#yzm_time').html(countdown);
           $(obj).attr("value",countdown + " s 重新发送");
            countdown--;
        }
        setTimeout(function() {
                    settime(obj) }
                ,1000)
    }
}


$('#getyzm').click(function(){
if(!$('#usermobile2').val()){layer.alert("请输入您的手机号")}
if($('#usermobile2').val()){
invokeSettime("#getyzm");
var mobile=$('#usermobile2').val();
sendyzm(mobile);
}

})
 
 function sendyzm(mobile){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-common/aflcCommonSms/sendCodeSms/"+mobile,
		
		success:function(res){
			console.log(res);
				
		},error:function(err){
			//alert("error");
			console.log(err.responseText);
		

		}
		})
	}
 
function phplogin2(userid,pwd){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/member/index_do.php?fmdo=login&dopost=login3&gourl=/&userid="+userid+"&pwd="+pwd,
		
		success:function(res){
			console.log(res);
				
		},error:function(err){
			//alert("error");
			console.log(err.responseText);
		

		}
		})
	}
function getpwd(access_token){
	var pwd="";
	
	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		async:false,
		url:"/api/aflc-uc/usercenter/aflcLogisticsCompanyAccout/v1/getAccoutInfo?access_token="+access_token,
		
		success:function(res){
			console.log(res);
			pwd=res.data.memberPwd;
			console.log(pwd);		
		},error:function(err){
			//alert("error");
			console.log(err.responseText);
		

		}
		})
	return pwd;
	}


;(function($){
  if(!$){
    console.log('init error, need JQ~');
    return false;
  }
  // 扩展jquery的方法
  /** cookie http://www.2cto.com/kf/201205/133505.html **/
  jQuery.cookie=function(d,c,a){if("undefined"!=typeof c){a=a||{};null===c&&(c="",a=$.extend({},a),a.expires=-1);var b="";if(a.expires&&("number"==typeof a.expires||a.expires.toUTCString))"number"==typeof a.expires?(b=new Date,b.setTime(b.getTime()+864E5*a.expires)):b=a.expires,b="; expires="+b.toUTCString();var e=a.path?"; path="+a.path:"",f=a.domain?"; domain="+a.domain:"",a=a.secure?"; secure":"";document.cookie=[d,"=",encodeURIComponent(c),b,e,f,a].join("")}else{c=null;if(document.cookie&&""!=document.cookie){a=
    document.cookie.split(";");for(b=0;b<a.length;b++)if(e=jQuery.trim(a[b]),e.substring(0,d.length+1)==d+"="){c=decodeURIComponent(e.substring(d.length+1));break}}return c}};
  jQuery.getParams = function(_keystr,url) {
    var keystr = _keystr || '';
    var args = url || location.search;
    args = args.replace(/&amp;/ig,"&");
    if(!args){return "";}
    var reg = new RegExp('[\?&]' + keystr + '=([^&]*)[&$]?', 'i');
    var chk = args.match(reg);
    return chk ? chk[1] : "";
  };

  // 验证码登录接口相关
  var YZM_API = {
    // url: 'http://192.168.1.188:886/api',
    url: '/api',
    login: function(username, code){
      var grant_type = 'authorization_code'
      var scope = 'webApp'
      var form = new FormData()
      form.append('mobile', username)
      form.append('code', code)
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
    },
    vcode: function(width, height){
      var w = width || 140;
      var h = height || 40;
      return this.url + '/aflc-common/common/aflcMemberCenter/v1/getImageCode?imageWidth='+w+'&imageHeight=' + h;
    },
    checkVcode: function(code){
      return $.get(this.url + '/aflc-common/common/aflcMemberCenter/v1/checkImageCode/' + code)
    },
    getMobileCode: function(phone){
      return $.post(this.url + '/aflc-common/aflcCommonSms/sendCodeSms/' + phone);
    },
    checkMobileCode: function(phone, code){
      return $.post(this.url + '/aflc-common/aflcCommonSms/check/'+phone+'/' + code);
    },
    regisiter: function(data){
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
        type: "POST",
        url: this.url + "/aflc-common/common/aflcMemberCenter/v1/register",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        dataType: "json"
      });
      //return $.post(this.url + '/aflc-common/common/aflcMemberCenter/v1/register', data);
    },
    getCityInfo: function(code){
      code = code || ''
      return $.get(this.url + '/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code=' + code)
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
    findPassword: function(data){
      var form = new FormData()
      form.append('mobile', data.mobile)
      form.append('password', data.password)
      form.append('passwordSure', data.passwordSure)
      form.append('smsCode', data.smsCode)
      form.append('imageCode', data.imageCode)
      form.append('memberType', data.memberType)

      return $.ajax({
        url: this.url + '/aflc-common/common/aflcMemberCenter/v1/retrievePassword',
        // url: this.url + '/aflc-common/common/aflcMemberCenter/v1/retrievePassword?' + $.param(data),
        type:"put",
        //processData:false,
        //cache: false,
        // contentType: false,

        headers: {
          // 主动设置Content-Type为multipart/form-data时，会丢掉boundary值，导致后台无法解析数据。
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'authorization': 'Basic d2ViQXBwOndlYkFwcA=='
        },
        data: $.param(data),
        timeout:20000
      });
    },
    // 检查手机账号是否已注册
    checkMobileIsRegister: function(data){
      var form = new FormData()
      form.append('mobile', data.mobile)
      form.append('memberType', data.memberType)

      return $.ajax({
        url: this.url + '/aflc-common/common/aflcMemberCenter/v1/checkMobileIsRegister',
        // url: this.url + '/aflc-common/common/aflcMemberCenter/v1/retrievePassword?' + $.param(data),
        type:"post",
        //processData:false,
        //cache: false,
        // contentType: false,

        headers: {
          // 主动设置Content-Type为multipart/form-data时，会丢掉boundary值，导致后台无法解析数据。
          'Content-Type': 'application/x-www-form-urlencoded',
          // 'authorization': 'Basic d2ViQXBwOndlYkFwcA=='
        },
        data: $.param(data),
        timeout:20000
      });
    }
  };


  

  var login_page = {
    login_data: {

    },
    init: function(){
      var _this = this
      $(".login-yzm").on("click", function(){
        var check = login_page.validate();
        if(check.done){
          login_page.login(_this.login_data.username, _this.login_data.pwd, _this.login_data.usertype);
        } else {
          layer.alert(check.err)
        }
      });
    },
    validate: function (){
      var  checkinfo = {
        done: true,
        err: ''
      };
      $(".login-box").find('input, select').removeClass('error');
      if($('#userType2').val()){
        this.login_data.usertype = $('#userType2').val()
      } else {
        $('#userType2').addClass('error');
        checkinfo.done = false;
        checkinfo.err += '<br>请选择会员类型';
      }
      if($('#usermobile2').val()){
        this.login_data.username = $('#usermobile2').val()
      } else {
        $('#usermobile2').addClass('error');
        checkinfo.done = false;
        checkinfo.err += '<br>请输入您的手机号';
      }
      if($('#useryzm').val()){
        this.login_data.yzm = $('#useryzm').val()
      } else {
        $('#useryzm').addClass('error');
        checkinfo.done = false;
        checkinfo.err += '<br>请输入您的验证码';
      }
       if($('#useragree').attr("checked")){
      } else {
        $('#useragree').addClass('error');
        checkinfo.done = false;
        checkinfo.err += '<br>请同意用户条款';
      }
      /*
      if($('#uservcode').val()){
        this.login_data.vcode = $('#uservcode').val()
      } else {
        $('#uservcode').addClass('error');
        checkinfo.done = false;
        checkinfo.err += '<br>请输入验证码';
      }
      */
      return checkinfo;
    },
    login: function(username, code, usertype){
      // 先登录157拿token
      // 将token保存到cookie后再进行最后的php登录
      return YZM_API.login(username +'|' + usertype,code).done(function(res){
        if(res.access_token){
        	console.log(res.access_token);
        	console.log(username);
        	console.log(usertype);
          $.cookie('access_token', res.access_token,{ expires: 7, path: '/' });
          $.cookie('login_mobile', username,{ expires: 7, path: '/' });
          $.cookie('login_type', usertype,{ expires: 7, path: '/' });
          Is_login1();
          Is_login2();
          if(usertype=='aflc-5'){
          var pwd=getpwd(res.access_token);
          console.log("PHP登录"+username+pwd)
        phplogin2(username,pwd);
        }
           //layer.alert('登录成功');
        $('.login_box').css("display","none");
        $('.input:eq(2)').toast({
			content:'登录成功',
			duration:3000
		});
		setTimeout( function(){  $('body').trigger('login.success');}, 3 * 1000 );
      
       
       //$('#form1').submit();
          
 
        } else{
          layer.alert('登录失败：'+(res.errorInfo || res.text || JSON.stringify(res) || '未知错误'));
        }
        
      }).fail(function(err,status,let2){
        console.log(err,status,let2)
       
        if(err.status){
        	 console.log(username +'|' + usertype);
          //layer.alert('登录失败，服务器返回：'+err.status);
          layer.alert('登录失败，请检查您的账号密码。');
        } else {
          layer.alert('登录失败，请检查您的账号密码。');
        }
        // layer.alert(JSON.stringify(err));
        
      });
    }
  };


login_page.init();

})(window.jQuery);