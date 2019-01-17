
// 发布专线
;(function $($) {
  if(!$){
    console.error('需要传jq库');
    return false
  }
  var order = {
    data:{
      aflcFCLOrderGoodsDtoList:[],
      'aflcOrderAddressWebDtoList': [
        {
          'contacts': '', // 联系人
          'contactsPhone': '', // 联系电话
          'isSave': false, // 是否保存常用收发货人
          'type': '0', // 类型（0：发货人，1：收货人）

          'provinceCityArea': '', // 省市区
          viaAddress: '', // 途径地
          'viaAddressCoordinate': '', // 途径地坐标
          // "viaAddressName": "string", // 途径名地址名称
          'viaOrder': 0 // 途径地顺序（0：出发地；1：目的地）
        },
        {
          'contacts': '', // 联系人
          'contactsPhone': '', // 联系电话
          'isSave': false, // 是否保存常用收发货人
          'type': '1', // 类型（0：发货人，1：收货人）

          'provinceCityArea': '', // 省市区
          viaAddress: '', // 途径地
          'viaAddressCoordinate': '', // 途径地坐标
          // "viaAddressName": "string", // 途径名地址名称
          'viaOrder': 1 // 途径地顺序（0：出发地；1：目的地）
        }
      ],
      'clientIp': '', // 终端ip
      'memberType': '', // 会员类型(货主:AF00101,车主:AF00102,物流公司:AF00107)
      'shipperId': '', // 货主id 用户id
      'orderClass': '0', // 货源类型(0单次急发货源1长期稳定货源)
      'title': '', // 标题
      'totalAmount': 0, // 总价格
      transportRangePublishId: '',
      'wlId': '', // 专线id
      'wlName': '', // 物流公司名称
      'orderFrom': 'AF0040002', // 订单来源(APP端:AF0040001;WEB端:AF0040002;微信公众号:AF0040003;小程序:AF004004)
      startPointId: '', // 最佳出发网点
      endPointId: '', // 最佳结束网点
      goodsType: 0, // 价格状态
      forecastPrice: 0 // 获取到总价格
    },
    tpl:{
      'cargo': `<tr class="box2_list">
        <td colspan="2">
          <div class="inputbox">
            <input maxlength="40" type="number" class="volume"><label>------</label>
            <input maxlength="40" type="number" class="volumeEnd"  /><label>元/公斤</label>
          </div>
          
        </td>
        <td colspan="2">
          <div class="inputbox">
            <input maxlength="40" type="number" class="origina"><label>元/公斤</label>
          </div>
        </td>
        <td colspan="2">
          <div class="inputbox">
            <input maxlength="40" type="number" class="discount"><label>元/公斤</label>
          </div>
        </td>
      </tr>`
    },
    logininfo:{},
    //点击增加
    initEvent:function(){
      var _this = this;
      console.log($('.box1_list').find('.add1'),777)
      $('.todoTable').find('.add1').on('click',function(){
        _this.addCaroList();
      })
      $('.todoTable').find('.add2').on('click',function(){
        _this.addCaroList('add2');
      })
      //提交按钮
      $('.btn_bottom .order-submit-btn').on('click',function(){
        var res = _this.checkForm()
      })
    },
    //检查价格验证
    checkCargoList: function(){
      var $inputcargo = $('.table1 .box1')
      var volume = $inputcargo.find('.volume')
      var origina = $inputcargo.find('.origina');
      var discount = $inputcargo.find('.discount');
      var flag = true;
      // 检查名称
      $.each(volume, function(index, ele){
        ele = $(ele)
        var val = $.trim(ele.val());
        // ele.removeClass('error');
        if(!val){
          flag = false;
          // ele.addClass('error');
          layer.msg('请填最小值。');
          ele.focus();
          return false;
        }
      });
      // 检查重量
      if(flag){
        $.each(origina, function(index, ele){
          ele = $(ele)
          var val = $.trim(ele.val());
          // ele.removeClass('error');
          if(!val){
            flag = false;
            // ele.addClass('error');
            layer.msg('请填写原报价');
            ele.focus();
            return false;
          }
        });
      }
       // 检查体积
      if(flag){
        $.each(discount, function(index, ele){
          ele = $(ele)
          var val = $.trim(ele.val());
          // ele.removeClass('error');
          if(!val){
            flag = false;
            // ele.addClass('error');
            layer.msg('情填写折后价');
            ele.focus();
            return false;
          }
        });
      }

      return flag;
    },
    //点击增加按钮
    addCaroList: function(className){
      var flag = this.checkCargoList();
      if(flag){
        var listLen = $('.box1')[0].rows.length
        var $inputcargo = $('.table1 .box1')
        var volume = $inputcargo.find('.volume')
        var volumeEnd = $inputcargo.find('.volumeEnd')
        let orgvalue = ''
        let orgindex = ''
        $.each(volumeEnd, function(index, ele){
          ele = $(ele)
          var val = $.trim(ele.val());
          orgvalue = val
          orgindex = index
        })

        $('.box1').append(this.tpl.cargo);
        // $('.add1').hide()
       
        volume = $inputcargo.find('.volume')
        if(orgvalue && orgindex+1 <= listLen ){
           var newvalume =  document.getElementsByClassName('volume')[orgindex+1]
           newvalume.value = orgvalue
          }
        if(listLen > 4){
          $('.add1').hide();
        }
      }
    },
    resetCargoList: function(){
      $('.box1').html('');
      $('.box1').append(this.tpl.cargo);
      $('.add-cargo-list').show();
    },
    checkForm: function(){
      var flag = true;
      var data = this.data;
      var _this = this;
      // 检查是否有填出发地
      if(!data.aflcOrderAddressWebDtoList[0].viaAddressCoordinate){
        layer.msg('请填写出发地');
        $('html,body').animate({'scrollTop':$('.order-form-input').offset().top});
        return false;
      }
      // 检查是否有填到达地
      if(!data.aflcOrderAddressWebDtoList[1].viaAddressCoordinate){
        $('html,body').animate({'scrollTop':$('.order-line-info').offset().top});
        layer.msg('请填写到达地');
        return false;
      }

      // 检查货物列表
     data.aflcFCLOrderGoodsDtoList = [];
      $('.box1 .box1_list').each(function(inx, ele){
        var inps = $(this).find('input');
        var _data = {
          "volume": $.trim(inps.eq(0).val()), // 重货价格
          "origina": $.trim(inps.eq(1).val()), // 原报价
          "discount": $.trim(inps.eq(2).val()), // 折后价
          // "goodsWeight": $.trim(inps.eq(3).val())
        };
        if(_data.volume && _data.origina && _data.discount)
        {
          data.aflcFCLOrderGoodsDtoList.push(_data);
        }
        
      });
      if(data.aflcFCLOrderGoodsDtoList.length === 0){
        layer.msg('请填写有效的货物信息。');
        return false;
      }
      
      // 检查是否有网点信息
      data.memberType = this.logininfo.memberType;
      data.shipperId = this.userinfo ? this.userinfo.id : '';

      // 判断是否有专线列表
      if($('.lineinfo input[type="checkbox"]').length){
        if($('.lineinfo input[type="checkbox"]:checked').length === 0 && this.pageinfo.isfree){
          layer.msg('请选择专线。');
          return false;
        }
        var selinp = $('.lineinfo input[type="checkbox"]:checked').eq(0);
        data.wlId = selinp.attr('relid');
        data.transportRangePublishId = selinp.attr('rel');
        data.wlName = selinp.attr('relname');
      } else {
        if(this.pageinfo.iscom){
          data.wlId = '';
          data.transportRangePublishId = this.pageinfo.comid;
          data.wlName = $('#nr081').text();
        } else {
          // layer.alert('参数不足，不能下单。');
          //return false;
          flag = "huoyuan";
        }
      }
     

      // 检查发货人信息
      data.aflcOrderAddressWebDtoList[0].contacts = $('.order-contact-from input').eq(0).val();
      data.aflcOrderAddressWebDtoList[0].contactsPhone = $('.order-contact-from input').eq(1).val();
      // data.aflcOrderAddressWebDtoList[0].isSave = $('.order-contact-from input').eq(2).prop('checked');

      if(!data.aflcOrderAddressWebDtoList[0].contacts || !data.aflcOrderAddressWebDtoList[0].contactsPhone){
        layer.msg('请填写发货人信息。');
        return false;
      }

      // 检查收货人信息
      data.aflcOrderAddressWebDtoList[1].contacts = $('.order-contact-from1 input').eq(0).val();
      data.aflcOrderAddressWebDtoList[1].contactsPhone = $('.order-contact-from1 input').eq(1).val();
      // data.aflcOrderAddressWebDtoList[1].isSave = $('.order-contact-to input').eq(2).prop('checked');

      /* if(!data.aflcOrderAddressWebDtoList[1].contacts || !data.aflcOrderAddressWebDtoList[1].contactsPhone){
        layer.msg('请填写收货人信息。');
        return false;
      }
      */
      this.data = data;
      return flag;
    },
    //初始化页面
    init:function(){
      //运输时效
      this.$transportAging = $(":input[name='time']")[0]

      //天数
      this.$transportAgingUnit = $('.order_top').find('.minbox')
      console.log($('.order_top').find('.minbox'))
      //点击天数
      $('.order_top .minbox').click(function () {
        $('.order_top .minbox').removeClass("checked");
        $(this).addClass('checked')
      });
      //发车时间
      console.log(document.getElementById('order_buttom'))
      $('.order_buttom .minbox').click(function(){
        $('.order_buttom .minbox').removeClass("checked");
        $(this).addClass("checked")
      })

       //发布
      $('.btn_bottom .order-submit-btn').click(function(){
        $('.btn_bottom .order-submit-btn').removeClass('click');
        $(this).addClass('click')
      })
      //价格时效添加按钮
      this.initEvent();
      
        
        
      }
    
  };
  order.init()
  window.AFLCORDER = order;
})(window.jQuery)