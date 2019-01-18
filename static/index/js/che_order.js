
// 发布专线
;(function $($) {
  if(!$){
    console.error('需要传jq库');
    return false
  }
  var order = {
    data:{
      done: true,
			err: '',
      startProvince: '',
      startCity: '',
      startArea: '',
      endProvince:'',
      endCity:'',
      endArea:'',
      viaAddress:'',
      expectPrice:'',//期望运价
      carType:'',//车源类型
      carSourceType:'AF01801',//即时/长期车源(0:长期车源，1：短期车源)
      remark:'',
      startTime:''
    },
    logininfo:{},
    userinfo:{},
    init:function(cb){
      let _this = this
      // var access_token = $.cookie("access_token");
      //点击选择车
      $('.check1 .minbox').click(function () {
        $('.check1 .minbox').removeClass("checked");
        $(this).addClass('checked');
        var type =$(this).attr("type");
        order.data.carSourceType=type;
      });
      //点击选择类型
      $('.check2 .minbox').click(function () {
        $('.check2 .minbox').removeClass("checked");
        $(this).addClass('checked')
      });
      
      //发布
      $('.btn_bottom .order-submit-btn').click(function(){
        $('.btn_bottom .order-submit-btn').removeClass('click');
        $(this).addClass('click');
        // var access_token = $.cookie("access_token");
        // if(access_token && _this.checkForm()){
        //   order.promise();
        // }else{
        //   _this.showLoginForm()
        // }
        var res = _this.checkForm()
        if(res){
          var callback = function() {
            if(_this.islogin){
              order.promise();
            }else{
              _this.showLoginForm();
            }
          }
          callback()
        }
      })
          // 更新登录信息
      $('body').on('login.success', function(){
        if(_this,getLoginInfo){
          console.log(8888,99999)
        }
      });
      
    },
    checkForm:function() {
      // var start= $(".start").val();
      // var end = $(".end").val()
      // var midile = $('.midile').val()
      // var data3 = $('#time').val
      // if(!start){layer.msg('出发地不能为空'); return;}
      // if(!end){layer.msg('到达地不能为空'); return;}
      // if(!midile){layer.msg('途径地不能为空'); return;}
      // if(!data3){layer.msg('发车时间不能为空'); return;}
      
      if($(".start").val()){
        order.data.startProvince = $(".start").val().split(',')[0];
        order.data.startCity = $(".start").val().split(',')[1];
      } else {
        layer.msg('出发地不能为空'); return;
      }
      if($(".end").val()){
        order.data.endProvince = $(".end").val().split(',')[0];
        order.data.endCity = $(".end").val().split(',')[1];
      } else {
        layer.msg('到达地不能为空'); return;
      }
      if($(".midile").val()){
        order.data.viaAddress = $('midile').val()
      } else {
        layer.msg('途径地不能为空'); return;
      }
      if($("#data3").val()){
        order.data.startTime = $("#data3").val()
      } else {
        layer.msg('发车时间不能为空'); return;
      }
      if($("#textarea").val()){
        order.data.remark = $("#textarea").val()
      } else {
        layer.msg('请填写备注信息'); return;
      }
    },
    showLoginForm: function(){
      // 如果有填发货人手机号，则填上
      $('#usermobile2').val($('.order-contact-from input').eq(1).val());
      ;
      layer.msg('您还未登录，请先登录');
      $('.login_box').show();
    },
    getLoginInfo: function(cb){
      var _this = this
      // 2.获取登录信息
      this.logininfo.access_token = $.cookie('access_token');
      this.logininfo.login_mobile = $.cookie('login_mobile');
      this.logininfo.login_type = $.cookie('login_type');
      var mapObj = {
        'aflc-1': 'AF00102',
        'aflc-2': 'AF00101',
        'aflc-5': 'AF00107'
      }
      this.logininfo.memberType = mapObj[this.logininfo.login_type];
      if(this.logininfo.access_token&&this.logininfo.login_mobile){
        // 判断是否为当前账号
        // this.detectLogin();
        AFWL_API.getInfo(this.logininfo.login_mobile,this.logininfo.memberType,this.logininfo.access_token).done(function(res){
          _this.islogin = true;
          _this.userinfo = res.data;
          // 如果没有发货人信息则填充
          if(!$('.order-contact-from input').eq(0).val() && !$('.order-contact-from input').eq(1).val()){
            $('.order-contact-from input').eq(0).val(res.data.contactsName);
            $('.order-contact-from input').eq(1).val(res.data.mobile);
          }
          $.cookie('user_token', res.data.userToken,{ expires: 7, path: '/' });
          //$.ajaxSetup();
          cb && cb();
        }).fail(function(){
          // 获取用户信息失败
          // 清除当前的登录状态
          _this.islogin = false;
          _this.logininfo = {};
        });
        
      } else {
        this.islogin = false;
      }
    },
    promise:function() {
      var access_token = $.cookie("access_token");
      console.log(access_token)
      $.ajax(
        {
          type:"post",
          headers:{
          'Content-Type': 'application/json'
          },
          url:"/api/aflc-uc/usercenter/aflcCarInfo/v1/add?access_token="+access_token,
          async:false,
          dataType: "json",
          data:JSON.stringify(order.data),
          success:function(res){
      
          }
         });
     }
  };
  
  order.init()
  window.AFLCORDER = order;
})(window.jQuery)