
$('.login_close').click(function(){
	$('.login_box').css("display","none")
	
})
$('.login_bt1').click(function(){
	$('.login_bt1').css("color","#2577e3");
	$('.login_bt2').css("color","#333");
	$('.pwd_login').css("display","none");
	$('.yzm_login').css("display","block");
})
$('.login_bt2').click(function(){
	$('.login_bt1').css("color","#333");
	$('.login_bt2').css("color","#2577e3");
	$('.pwd_login').css("display","block");
	$('.yzm_login').css("display","none");
})
 $('.userType input').click(function(){
 	  $('.userType input').removeClass("checked");
    $(this).addClass("checked");
    $("input[name='userType']").val($(this).attr("name"))  
  console.log($("input[name='userType']").val()); 
 })

var myurl=window.location.href;

 $("input[name='gourl']").val(myurl);
 
/*判断是否登录 S*/

function getCookie(cookieName){
	    var cookieValue="";
		if (document.cookie && document.cookie != '') { 
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) { 
				 var cookie = cookies[i];
				 if (cookie.substring(0, cookieName.length + 2).trim() == cookieName.trim() + "=") {
					   cookieValue = cookie.substring(cookieName.length + 2, cookie.length); 
					   break;
				 }
			 }
		} 
		return cookieValue;
	}
function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}


//手机号获取用户昵称（物流公司）
function wuliu(account){
var name="";
   
$.ajax(
 	
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		async:false,
		url:"/api/aflc-portal/portalt/aflcLogisticsCompany/v1/findByAccount/"+account,
		
		success:function(res){
			console.log("success");
		
			 var datas = res.data;
      //alert(datas.length);
      if(datas){
        name=datas.contactsName;
      }
				
			if(!name){name=account}
		},error:function(err){
			//alert("error");
			console.log(err.responseText);
		}
		})

return name;
	}

//手机号获取用户ID（车主）
function che(account,token){
var name=""
   
$.ajax(
 	
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		async:false,
		url:"/api/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?access_token="+token+"&mobile="+account,
		
		success:function(res){
			console.log("success");
		
			 var datas = res.data;
			//alert(datas.length);
			name=datas.driverName;
			if(!name){name=account}
							
		},error:function(err){
			//alert("error");
			console.log(err.responseText);
		}
		})
return name;

	}
//手机号获取用户ID（货主）
function huo(account,token){
var name=""  
$.ajax(
 	
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		async:false,
		url:"/api/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?access_token="+token+"&mobile="+account,
		
		success:function(res){
			console.log("success");
		
			 var datas = res.data;
			//alert(datas.length);
			name=datas.contacts;
			if(!name){name=account}
		},error:function(err){
			//alert("error");
			console.log(err.responseText);
		}
		})
return name;

	}


function Is_login1(){
	var login_mobile = getCookie("login_mobile");
    var login_type= getCookie("login_type");
    var access_token= getCookie("access_token");
    console.log('ok'+login_mobile+":"+access_token+":"+login_type)
    if(login_mobile&&login_type&&access_token){	
     if(login_type=="aflc-1"){var login_name=che(login_mobile,access_token)}
     if(login_type=="aflc-2"){var login_name=huo(login_mobile,access_token)}
     if(login_type=="aflc-5"){var login_name=wuliu(login_mobile)}
     $('#_userlogin1').css("display","none");
     $('#_userlogin1_1').css("display","block");
    
     $('#login_name1').html(login_name);
    }
	
}
Is_login1();

function Is_login2(){
	var login_mobile = getCookie("login_mobile");
    var login_type= getCookie("login_type");
    var access_token=getCookie("access_token");
    if(login_mobile&&login_type&&access_token){	
     if(login_type=="aflc-1"){var login_name=che(login_mobile,access_token)}
     if(login_type=="aflc-2"){var login_name=huo(login_mobile,access_token)}
     if(login_type=="aflc-5"){var login_name=wuliu(login_mobile)}
     $('#_userlogin2').css("display","none");
     $('#_userlogin2_2').css("display","block");
    
     $('#login_name2').html(login_name);
     $('#my_website').attr("href","/member/index.php?uid="+login_mobile);
    }
	
}
Is_login2();

/*判断是否登录 E*/ 
 
function phplogin(userid,pwd){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/member/index_do.php?fmdo=login&dopost=login2&gourl=/&userid="+userid+"&pwd="+pwd,
		
		success:function(res){
			console.log(res);
				
		},error:function(err){
			//alert("error");
			console.log(err.responseText);
		

		}
		})
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

  // 接口相关
  var AFWL_API = {
    // url: 'http://192.168.1.188:886/api',
    url: '/api',
    login: function(username, password){
      var grant_type = 'password'
      var scope = 'webApp'
      var form = new FormData()
      form.append('username', username)
      form.append('password', password)
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
      $(".login-btn").on("click", function(){
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
      if($('#userType').val()){
        this.login_data.usertype = $('#userType').val()
      } else {
        $('#userType').addClass('error');
        checkinfo.done = false;
        checkinfo.err += '<br>请选择会员类型';
      }
      if($('#usermobile').val()){
        this.login_data.username = $('#usermobile').val()
      } else {
        $('#usermobile').addClass('error');
        checkinfo.done = false;
        checkinfo.err += '<br>请输入您的手机号';
      }
      if($('#userpwd').val()){
        this.login_data.pwd = $('#userpwd').val()
      } else {
        $('#userpwd').addClass('error');
        checkinfo.done = false;
        checkinfo.err += '<br>请输入您的密码';
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
    login: function(username, pwd, usertype){
      // 先登录157拿token
      // 将token保存到cookie后再进行最后的php登录
      return AFWL_API.login(username +'|' + usertype, pwd).done(function(res){
        if(res.access_token){
        	console.log(res.access_token);
        	console.log(username);
        	console.log(usertype);
          $.cookie('access_token', res.access_token,{ expires: 7, path: '/' });
          $.cookie('login_mobile', username,{ expires: 7, path: '/' });
          $.cookie('login_type', usertype,{ expires: 7, path: '/' });
          Is_login1();
          Is_login2();
        phplogin(username,pwd);
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
        //console.log(username +'|' + usertype+pwd);
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