;(function($){
  if(!$){
    console.error('需要jQuery库~');
    return false;
  }
  var order = {
    contactform: {
      'address': '', // 详细地址
      'contacts': '', // 联系人
      'contactsPhone': '', // 联系电话
      'coordinate': '', // 发货地坐标
      // "createTime": "2018-07-27T06:28:38.733Z", //创建时间
      // "creater": "string", //创建人
      // "delFlag": "string", //删除状态
      'floorHousenum': '', // 楼层及门牌号 跟地址保持一致
      // "id": "string", //编号
      'isDefault': '0', // 是否默默常用联系人（0：否；1：是）
      'shipperId': '', // 货主ID userid
      // "summary": "string", //简称
      'type': '0' // 类型（0：常用发货人，1：常用收货人）
      // "updateTime": "2018-07-27T06:28:38.733Z", //更新时间
      // "updater": "string", //修改人
      // "version": "string" //版本
    },
    // 保存返回的数据
    req:{

    },
    userinfo:{
    },
    // 保存页面相关数据
    pageinfo: {

    },
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
      'cargo': '<li> <div class="input"> <input class="cargoname" maxlength="40" type="text"> </div> <div class="input"> <input maxlength="12" type="text"> <span class="append">件</span> </div> <div class="input"> <input class="caroweight" maxlength="12" type="text"> <span class="append">公斤</span> </div> <div class="input"> <input class="cargovolume" maxlength="12" type="text"> <span class="append">立方</span> </div> <span class="deletecargo">[删除]</span> </li>'
    },
    logininfo:{},
    initCargo: function(list){
      var str = '';
      $.each(list, function(index,ele){
        str += '<li>'+ele.name+'</li>'
      });

      this.$caroList.find('ul').html(str);
      this.$caroList.append('<div class="addinput"><span>确定</span><input placeholder="手动输入货物名称" maxlength="10" /></div>');
    },
    showCargoList: function(inputEle){
      clearTimeout(this.cargotimer);
      var x = inputEle.offset().left;
      var y = inputEle.offset().top;
      var h = inputEle.height();

      this.$caroList.css({
        'left': x-this.px,
        'top': y-this.py+h+3
      });
      this.$caroList.data('input', inputEle);
      this.$caroList.find('input').val('');
      this.$caroList.show();
    },
    hideCargoList: function(){
      clearTimeout(this.cargotimer);
      var _this = this;
      this.cargotimer = setTimeout(function(){
        _this.$caroList.hide();
      },200);
    },
    // 检查货物列表的值是否有效
    // 检查货物列表的长度是否超标了
    checkCargoList: function(){
      var names = this.$inputcargo.find('.cargoname');
      var weights = this.$inputcargo.find('.caroweight');
      var volumes = this.$inputcargo.find('.cargovolume');
      var flag = true;
      // 检查名称
      $.each(names, function(index, ele){
        ele = $(ele)
        var val = $.trim(ele.val());
        // ele.removeClass('error');
        if(!val){
          flag = false;
          // ele.addClass('error');
          layer.msg('请填写货物名称。');
          ele.focus();
          return false;
        }
      });
      // 检查重量
      if(flag){
        $.each(weights, function(index, ele){
          ele = $(ele)
          var val = $.trim(ele.val());
          // ele.removeClass('error');
          if(!val){
            flag = false;
            // ele.addClass('error');
            layer.msg('请填写货物重量。');
            ele.focus();
            return false;
          }
        });
      }
       // 检查体积
      if(flag){
        $.each(volumes, function(index, ele){
          ele = $(ele)
          var val = $.trim(ele.val());
          // ele.removeClass('error');
          if(!val){
            flag = false;
            // ele.addClass('error');
            layer.msg('请填写货物体积。');
            ele.focus();
            return false;
          }
        });
      }

      return flag;
    },
    addCaroList: function(){
      var flag = this.checkCargoList();
      if(flag){
        this.$inputcargo.append(this.tpl.cargo);
        if(this.$inputcargo.find('li').length > 4){
          $('.add-cargo-list').hide();
        }
      }
    },
    resetCargoList: function(){
      this.$inputcargo.html('');
      this.$inputcargo.append(this.tpl.cargo);
      $('.add-cargo-list').show();
    },
    getCompanyInfo: function(id, cb){
      var _this = this;
      if(this.req['net'+id]){
        this.renderNetInfo(this.req['net'+id]);
        cb&&cb();
      } else {
        var start = this.data.aflcOrderAddressWebDtoList[0];
        var end = this.data.aflcOrderAddressWebDtoList[1];
        var pos0 = start.viaAddressCoordinate.split(',');
        var pos1 = end.viaAddressCoordinate.split(',');
        this.netQuery = {
          endLatitude: pos1[1], // 到达地上传坐标纬度
          endLocation: start.provinceCityArea, // 目的地
          endLongitude: pos1[0], // 到达地上传坐标经度
          startLatitude: pos0[1], // 出发地上传坐标纬度
          startLocation: end.provinceCityArea, // 出发地
          startLongitude: pos0[0], // 出发地上传坐标经度
          startProvince: end.province,
          startCity: end.city,
          startArea: end.area,
          endProvince: start.province,
          endCity: start.city,
          endArea: start.area
        };
        // 如果没数据，则提示去获取数据
        if(!this.netQuery.endLatitude || !this.netQuery.startLatitude){
          layer.msg('请填写出发地跟到达地的详细地址。');
          return false;
        }
        AFWL_API.getBestNet(id, this.netQuery).done(function(res){
          _this.req['net'+id] = res.data
          _this.renderNetInfo(res.data)
          cb&&cb();
        }).fail(function(err){
          layer.alert('获取网点数据失败：' + (err.errorInfo || err.text || '未知错误'));
        });
        
      }
    },
    renderNetInfo: function(data){
      var p = $('.wlname-info').find('li').eq(0);
      var p2 = $('.wlname-info').find('li').eq(1);
      var ele1 = data[0];
      var ele2 = data[1];
      $.each(ele1, function(inx, ele){
        if(typeof ele1[inx] === 'undefined'){
          ele1[inx] = '';
        }
      });
      $.each(ele2, function(inx, ele){
        if(typeof ele2[inx] === 'undefined'){
          ele2[inx] = '';
        }
      });
      this.data.startPointId = ele1.id || '';
      this.data.endPointId = ele2.id || '';
      p.find('.wlnamev span').text(ele1.pointName);
      p.find('.wlnameh span').text((ele1.distance || 0) + 'km');
      p.find('.wladdress').text(ele1.name);
      p.find('.wlphone').text(ele1.telNum);

      p2.find('.wlnamev span').text(ele2.pointName);
      p2.find('.wlnameh span').text((ele2.distance || 0) + 'km');
      p2.find('.wladdress').text(ele2.name);
      p2.find('.wlphone').text(ele2.telNum);
    },
    showComany: function(inputEle){
      var x = inputEle.offset().left;
      var y = inputEle.offset().top;
      var h = inputEle.height();
      var _this =this;

      this.$popcompany.css({
        'left': x-this.px,
        'top': y-this.py+h+3
      });
      this.$popcompany.data('input', inputEle);
      this.currentcid = inputEle.attr('rel');
      this.getCompanyInfo(this.currentcid, function(){
        _this.$popcompany.show();
        _this.calcTotalFee();
      });
      
    },
    hideComany: function(){
      var _this = this;
      _this.hideComanyTimer = setTimeout(function(){
        _this.$popcompany.hide();
      },200);
    },
    showSelectNet: function(){
      $('.netListContent-wraper').show();
      AFWL_API.getAllNet(this.currentcid, this.netQuery).done(function(res){

      }).fail(function(err){
        layer.alert('获取网点列表失败：' + (err.errorInfo || err.text || '未知错误'));
      });
    },
    initEvent: function(){
      var _this = this;
      // 点击货物框，弹出货物列表
      $('.order-cargo-list').on('focus', '.cargoname', function(e){
        _this.showCargoList($(this));
      });
      // 隐藏货物列表
      $('.order-cargo-list').on('blur', '.cargoname', function(e){
        _this.hideCargoList($(this));
      });
      $('.order-cargo-list').on('blur', 'input:text', function(e){
        _this.calcTotalFee();
      });
      // 点击货物名称
      _this.$caroList.on('click', 'li', function(){
        _this.$caroList.data('input').val($(this).text());
      });
      // 货物列表新增
      _this.$caroList.on("click",'.addinput span', function(){
        var val = $.trim(_this.$caroList.find('input').val());
        if(val){
          _this.$caroList.data('input').val(val);
          _this.hideCargoList($(this));
        } else {
          layer.msg('请输入货物名称');
          clearTimeout(_this.cargotimer);
          _this.$caroList.find('input').focus();
        }
      });
      _this.$caroList.on('focus', 'input:text', function(e){
        clearTimeout(_this.cargotimer);
      });
      _this.$caroList.on('blur', 'input:text', function(e){
        _this.hideCargoList($(this));
      });
      _this.$caroList.on('keydown', 'input:text', function(e){
        console.log('eee:', e)
        if(e.keyCode === 13){
          _this.$caroList.find('span').trigger('click');
        }
      });
      // 点击新增货物信息
      $('.add-cargo-list').on('click', function(){
        _this.addCaroList();
      });
      // 重置货物列表
      $('.reset-cargo-list').on('click', function(){
        _this.resetCargoList();
      });
      // 删除货物列表
      $('.order-cargo-list').on('click','.deletecargo', function(){
        var li = $(this).closest('li');
        li.remove();
        $('.add-cargo-list').show();
      });

      // 点击展示最佳网点
      this.$companylist.on('click', '.order-company-name label',function(e){
        var inp = $(this).closest('td').find('input').eq(0);
        var ischeck = inp.prop('checked');
        if(ischeck){
          inp.prop('checked', false);
          _this.hideComany();
        } else {
          // 先重置其它已勾选的项
          _this.$companylist.find('.order-company-name label input').prop('checked', false);

          inp.prop('checked', true);
          _this.showComany(inp);
        }
        return false;
      });
      this.$companylist.on('click', '.order-company-name input',function(e){
        e.stopPropagation();
        var inp = $(this).closest('td').find('input').eq(0);
        var ischeck = inp.prop('checked');
        if(!ischeck){
          _this.hideComany();
        } else {
          // 先重置其它已勾选的项
          // console.log($(this).closest('td').siblings('td').find('input'), $(this).closest('td').siblings('td').find('input').length)
          // $(this).closest('td').siblings('td').find('input').prop('checked', false);

          _this.showComany(inp);
        }
        // return false;
      });
      this.$companylist.on('mouseover', '.order-company-name label', function(){
        var inp = $(this).find('input');
        var ischeck = inp.prop('checked');
        if(ischeck){
          _this.showComany(inp);
        }
      });
      this.$companylist.on('mouseleave', '.order-company-name label', function(){
        _this.hideComany();
      });
      this.$popcompany.on({
        'mouseenter': function(){
          clearTimeout(_this.hideComanyTimer)
        },
        'mouseleave': function(){
          _this.hideComany();
        }
      });
      // 展示重新选择的网点
      $('.select-other-net').on('click',function(){
        _this.showSelectNet();
      });
      _this.$selectcompany.find('.close,.cancel-net-select').on('click',function(){
        _this.$selectcompany.hide();
      });
      // 展示阶梯价格
      this.$companylist.on('mouseenter', '.seeJieti',function(){
        $(this).parent().find('.showjieti-info').show();
      });
      this.$companylist.on('mouseleave', '.seeJieti',function(){
        $(this).parent().find('.showjieti-info').hide();
      });
      // 绑定选中地图事件
      $('.order-line-from').find('input').eq(0).on('gaodemap.select',function(e,thename,thepos,theobj){
        // 如果有街道信息则直接填充到右边
        var inp = $('.order-line-from').find('input').eq(1);

        inp.attr('wtmapinit', thename);
        _this.setAddrInfo(0,thename,thepos,theobj);
        if(theobj.township || theobj.street){
          inp.val(theobj.township + theobj.street + theobj.building);
          _this.getCompany();
        } else {
          // 清空列表
          $('.order-company-list tbody').hide();
          $('.findnone').show();
          inp.val('');
        }
        
        
      });
      $('.order-line-to').find('input').eq(0).on('gaodemap.select',function(e,thename,thepos,theobj){
        var inp = $('.order-line-to').find('input').eq(1);
        inp.attr('wtmapinit', thename);
        _this.setAddrInfo(1,thename,thepos,theobj);
        if(theobj.township || theobj.street){
          inp.val(theobj.township + theobj.street + theobj.building);
          _this.getCompany();
        } else {
          // 清空列表
          $('.order-company-list tbody').hide();
          $('.findnone').show();
          inp.val('');
        }
        
      });
      $('.order-line-to').find('input').eq(1).on('gaodemap.select', function(e,thename,thepos,obj){
        var inp = $('.order-line-to').find('input').eq(0);
        var str = obj.province + '' + obj.city + '' + obj.district;
        inp.val(str);
        inp.attr('wtmapinit', str);
        _this.setAddrInfo(1,thename,thepos,obj);
        _this.getCompany();
      });
      $('.order-line-from').find('input').eq(1).on('gaodemap.select', function(e,thename,thepos,obj){
        // 如果有省市区信息则直接填充到左边
        var inp = $('.order-line-from').find('input').eq(0);
        var str = obj.province + '' + obj.city + '' + obj.district;
        inp.val(str);
        inp.attr('wtmapinit', str);
        _this.setAddrInfo(0,thename,thepos,obj);
        _this.getCompany();
      });
      // 选择发货人
      $('.order-contact-from .order-usual-button').on('click', function(){
        _this.showContactPop(0);
      });
      // 选择收货人
      $('.order-contact-to .order-usual-button').on('click', function(){
        _this.showContactPop(1);
      });
      // 关闭弹窗
      $('.order_list_contacts_pop .close').on('click', function(){
        $('.order_usual_contacts_wrapper').hide();
        // 展示回默认的列表框
        $('.order_usual_contacts_pop').hide();
        $('.order_list_contacts_pop').show();
      });
      // 关闭添加联系人的窗口
      $('.order_add_contacts_pop .close,.order_add_contacts_pop .add-cancel').on('click', function(){
        $('.order_usual_contacts_pop').hide();
        $('.order_list_contacts_pop').show();
      });
      // 搜索窗口展示
      $('.search-input span').on('click', function(){
        var data = _this.popContactList;
        var key = $.trim($('.search-input input').val());

        if(!key){
          _this.renderConcats(data);
        } else{
          var arr = [];
          $.each(data, function(inx ,ele){
            if(ele.contacts.indexOf(key) !== -1 || ele.contactsPhone.indexOf(key) !== -1 || ele.address.indexOf(key) !== -1 ){
              arr.push(ele);
            }
          });
          _this.renderConcats(arr);
        }
      });
      // 添加窗口展示
      $('.addNewContact').on('click', function(){
        // 清除上一次的数据
        var inps = $('.order_add_contacts_pop input');
        for(var i in _this.contactform){
          _this.contactform[i] = '';
        }
        _this.contactform.isDefault = '0';
        _this.contactform.type = _this.currentType;
        _this.contactform.id = '';

        inps.eq(0).val('');
        inps.eq(1).val('');
        inps.eq(2).val('');
        inps.eq(2).attr('wtmapinit', '');
        inps.eq(3).prop('checked', false);
        $('.order_usual_contacts_pop').hide();
        $('.order_add_contacts_pop').show();
      });
      // 修改窗口展示
      $('.contactPopList').on('click', '.contactManage', function(){
        // 初始化数据到框里
        var inps = $('.order_add_contacts_pop input');
        var inx = $(this).closest('li').index();
        var data = _this.popContactList[inx];
        _this.contactform = data;
        inps.eq(0).val(data.contacts);
        inps.eq(1).val(data.contactsPhone);
        inps.eq(2).val(data.address);
        inps.eq(2).attr('wtmapinit', data.address);
        inps.eq(3).prop('checked', data.isDefault === '1');

        $('.order_usual_contacts_pop').hide();
        $('.order_add_contacts_pop').show();
        return false;
      });
      // 选中某条数据
      $('.contactPopList').on('click', 'li', function(){
        if(_this.currentType === 0){
          $('.order-contact-from input').eq(0).val($(this).find('.contactName').text());
          $('.order-contact-from input').eq(1).val($(this).find('.contactMobile').text());
        } else {
          $('.order-contact-to input').eq(0).val($(this).find('.contactName').text());
          $('.order-contact-to input').eq(1).val($(this).find('.contactMobile').text());
        }
        $('.order_list_contacts_pop .close').trigger('click');
        return false;
      });
      // 提交联系人信息
      $('.add-submit').on('click', function(){
        var inps = $('.order_add_contacts_pop input');
        var data = _this.contactform;
        data.shipperId = _this.userinfo.id;
        var prom;

        data.contacts = $.trim(inps.eq(0).val());
        data.contactsPhone = $.trim(inps.eq(1).val());
        data.address = $.trim(inps.eq(2).val());
        data.isDefault = inps.eq(3).prop('checked') ? '1' : '0';

        if(!data.contacts){
          layer.msg('请输入联系人');
          return false;
        }
        if(!data.contactsPhone){
          layer.msg('请输入联系电话');
          return false;
        }

        if(!data.address){
          layer.msg('请输入联系地址');
          return false;
        }


        if(data.id){
          prom = AFWL_API.putChangeContact(data,{
            access_token: _this.logininfo.access_token,
            user_token: _this.userinfo.userToken
          });
        } else {
          prom = AFWL_API.postAddContact(data,{
            access_token: _this.logininfo.access_token,
            user_token: _this.userinfo.userToken
          });
        }
        prom.done(function(res){
          layer.msg('保存成功。');
          _this.showContactPop(_this.currentType);
        }).fail(function(err){
          layer.alert('保存失败：' + (err.errorInfo || err.text || '未知错误'));
        });
        
        
      });

      // 提交订单
      $('.order-submit-btn').on('click',function(){
        var res = _this.checkForm()
        if(res){
          var cb = function(){
            if(_this.islogin){
              AFWL_API.postCreateOrder(_this.data, {
                access_token: _this.logininfo.access_token,
                user_token: _this.userinfo.userToken
              }).done(function(res){
                // 订单id，用来跟踪
                _this.data.id = res.data.id;
                _this.data.orderSerial = res.data.orderSerial;
  
                _this.setSuccessPage(res.data);
              }).fail(function(err){
                layer.alert('创建失败：' + (err.errorInfo || err.text || '未知错误'));
              });
            } else {
              _this.showLoginForm();
            }
          }
          if(res === 'huoyuan'){
            // 判断是否需要提交货源
            layer.confirm('<span class="center tipcontent">未选择任何承运商无法下单<br>您还可以选择发布货源让更多承运商主动联系您！</span>', {
              title: '提示',
              btn: ['发布货源','取消'] //按钮
            }, function(){
              cb();
            }, function(){
              
            });
          } else {
            cb();
          }
          
          
          
        }
      });

      // 获取登录成功事件
      // 更新登录信息
      $('body').on('login.success', function(){
        if(_this.detectLogin()){
          _this.getLoginInfo(function(){
            $('.order-submit-btn').trigger('click');
          });
        }
      });

      // ============下载成功的页面====
      $('.continue-create-order').on('click', function(){
        // location.reload(true);
        if(location.href.indexOf('/plus/list.php')!==-1){
          location.href = "/plus/list.php?tid=77";
        } else {
          location.reload(true);
        }
      });

    },
    setSuccessPage: function(_data){
      var data = this.data;
      $('.order-num span').text(data.orderSerial);
      $('.order-from span').text(_data.shipperName + ' '+ _data.shipperMobile);
      $('.order-to span').text(data.aflcOrderAddressWebDtoList[1].contacts + ' '+ data.aflcOrderAddressWebDtoList[1].contactsPhone);

      $('.order-cargo span').text(_data.goodsName);
      $('.order-cargo-num span').text(_data.goodsNum);
      $('.order-cago-class span').text(_data.goodsType === '0' ? '轻货'  : '重货');
      $('.order-cargo-weight span').text(_data.goodsWeight);
      $('.order-cargo-volume span').text(_data.goodsVolume);
      $('.order-cargo-fee span').text(_data.totalAmount);

      $('.order-lineinfo-from span').text(data.aflcOrderAddressWebDtoList[0].provinceCityArea + data.aflcOrderAddressWebDtoList[0].viaAddress);
      $('.order-lineinfo-to span').text(data.aflcOrderAddressWebDtoList[1].provinceCityArea + data.aflcOrderAddressWebDtoList[1].viaAddress);

      $('.track-order').attr('href', $('.track-order').attr('href')+"&num="+ _data.orderSerial +"&uid="+this.logininfo.login_mobile);

      $('.order-create-main').hide();
      $('.order-success-main').show();
    },
    showLoginForm: function(){
      // 如果有填发货人手机号，则填上
      $('#usermobile2').val($('.order-contact-from input').eq(1).val());
      ;
      layer.msg('您还未登录，请先登录');
      $('.login_box').show();
    },
    showContactPop: function(type){
      // =======需要登录=========
      if(this.islogin){
        $('.addNewContact').text(type === 1 ? '添加常用收货人' : '添加常用发货人');
        $('.order_add_contacts_pop .inner_title').text(type === 1 ? '添加常用收货人' : '添加常用发货人');
        this.currentType = type;
        var _this = this;
        var index = layer.load();
        AFWL_API.getContactList({
          currentPage: 1,
          pageSize: 100,
          vo: {
            type: type
          }
        }, {
          access_token: this.logininfo.access_token,
          user_token: this.userinfo.userToken
        }).done(function(res){
          _this.popContactList = res.data.list;
          _this.showConcats();
        }).fail(function(err){
          layer.alert('获取数据失败：' + (err.errorInfo || err.text || '未知错误'));
        }).always(function(){
          layer.close(index);
        });
      } else {
        this.showLoginForm();
      }
      
    },
    renderConcats: function(data){
      var s = ''
      $.each(data, function(inx ,ele){
        s += '<li class="clearfix"><span class="contactName">'+ ele.contacts +'</span> <span class="contactMobile">' + ele.contactsPhone +'</span> <span class="contactAddres">'+ ele.address +'</span> <span data-default="'+ele.isDefault+'" class="contactManage">修改</span></li>'
      });
      $('.contactPopList').html(s);
    },
    showConcats: function(){
      var data = this.popContactList;
      this.renderConcats(data);
      $('.order_usual_contacts_pop').hide();
      $('.order_list_contacts_pop').show();
      $('.order_usual_contacts_wrapper').show();
    },
    setAddrInfo: function(inx, thename, thepos, obj){
      console.log('setAddrInfo:',inx, thename, thepos, obj)
      var str = obj.province + '' + obj.city + '' + obj.district;
      var str2 = obj.township + obj.street + obj.streetNumber + obj.building;
      this.data.aflcOrderAddressWebDtoList[inx].provinceCityArea = str;
      this.data.aflcOrderAddressWebDtoList[inx].viaAddressCoordinate = thepos || '';
      this.data.aflcOrderAddressWebDtoList[inx].viaAddress = str2;
      this.data.aflcOrderAddressWebDtoList[inx].province = obj.province;
      this.data.aflcOrderAddressWebDtoList[inx].city = obj.city;
      this.data.aflcOrderAddressWebDtoList[inx].area = obj.district;
      // 补上code值
      this.data.aflcOrderAddressWebDtoList[inx].code = obj.adcode || ''
    },
    checkForm: function(){
      var flag = true;
      var data = this.data;
      var _this = this;
      // 检查是否有填出发地
      if(!data.aflcOrderAddressWebDtoList[0].viaAddressCoordinate){
        layer.msg('请填写出发地');
        $('html,body').animate({'scrollTop':$('.order-line-info').offset().top});
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
      $('.order-cargo-list li').each(function(inx, ele){
        var inps = $(this).find('input');
        var _data = {
          "goodsName": $.trim(inps.eq(0).val()), // 货物名称
          "goodsNum": $.trim(inps.eq(1).val()), // 总件数
          "goodsVolume": $.trim(inps.eq(2).val()), // 货物体积（方）
          "goodsWeight": $.trim(inps.eq(3).val())
        };
        if(_data.goodsName && _data.goodsWeight && _data.goodsVolume)
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
      data.aflcOrderAddressWebDtoList[0].isSave = $('.order-contact-from input').eq(2).prop('checked');

      if(!data.aflcOrderAddressWebDtoList[0].contacts || !data.aflcOrderAddressWebDtoList[0].contactsPhone){
        layer.msg('请填写发货人信息。');
        return false;
      }

      // 检查收货人信息
      data.aflcOrderAddressWebDtoList[1].contacts = $('.order-contact-to input').eq(0).val();
      data.aflcOrderAddressWebDtoList[1].contactsPhone = $('.order-contact-to input').eq(1).val();
      data.aflcOrderAddressWebDtoList[1].isSave = $('.order-contact-to input').eq(2).prop('checked');

      /* if(!data.aflcOrderAddressWebDtoList[1].contacts || !data.aflcOrderAddressWebDtoList[1].contactsPhone){
        layer.msg('请填写收货人信息。');
        return false;
      }
 */
      if($('#agree').prop('checked') === false){
        layer.msg('请确认已阅读服务协议。');
        return false;
      }
      this.data = data;
      return flag;
    },
    getCityCode: function(code){
      code = code + ''
      var obj = {
        province: code,
        city: code,
        area: code
      }
      if(code) {
        // 判断code长度，小于6位后面补0
        if(code.length < 6){
          var len = 6-code.length;
          // 0044
          while(len>0){
            len--;
            code += '0';
          }
        }
        obj.area = code;
        obj.city = code.substr(0,4) + '00';
        obj.province = code.substr(0,2) + '0000';
      }
      
      return obj
    },
    getCompany: function(_vo){
      var start = $('.order-line-from').find('input');
      var end = $('.order-line-to').find('input');
      var vo = _vo;
      if(vo){
        vo = {
          currentPage: 1,
          'pageSize': 100,
          vo: _vo
        }
      } else {
        // 指定专线则不请求
        if(this.pageinfo.isid){
          return false;
        }
        start = this.data.aflcOrderAddressWebDtoList[0]
        end = this.data.aflcOrderAddressWebDtoList[1]
        var startcode = this.getCityCode(start.code)
        var endcode = this.getCityCode(end.code)

        vo = {
          currentPage: 1,
          'pageSize': 100,
          vo:{
            //'startLocation': start,
            //'endLocation': this.netQuery.endLocation,
            startProvince: start.province,
            startCity: start.city,
            startArea: start.area,
            endProvince: end.province,
            endCity: end.city,
            endArea: end.area,
            // 补上code值字段
            startProvinceCode: startcode.province,
            startCityCode: startcode.city,
            startAreaCode: startcode.area,
            endProvinceCode: endcode.province,
            endCityCode: endcode.city,
            endAreaCode: endcode.area
          }
        };
        // 指定了公司，则添加对应的comapnyId
        if(this.pageinfo.iscom){
          vo.vo.companyId = this.pageinfo.comid;
        }

        

        // 只有填了出发地跟目的地时才去请求
        if(!start.province || !end.province){
          return false;
        }
      }
      
      
      var index = layer.load();
      var _this = this;
      AFWL_API.getCompany(vo).done(function(res){
        var data = res.data.list;
        $('.order-company-list tbody').hide();
        if(data.length){
          _this.setCompanyList(data);
          _this.req.company = data;
          $('.lineinfo').show();
          // 如果是专线，则默认选中第一条
          if(_this.pageinfo.isid){
            $('.lineinfo input[type="checkbox"]').eq(0).prop('checked', true);

            // 如果只有一条，那就改为禁止操作
            if(data.length === 1){
              $('.lineinfo input[type="checkbox"]').eq(0).prop('disabled', true);
            }
          }
          
        } else {
          if(_this.pageinfo.iscom){
            $('.noline').show();
          } else {
            $('.findnone').show();
          }
          
        }
      }).fail(function(err){
        layer.alert('获取专线失败：' + (err.errorInfo || err.text || '未知错误'));
      }).always(function(){
        layer.close(index);
      });
      
      
    },
    findLowestPrice: function(list, type){
      var arr = [];
      $.each(list, function(inx, ele){
        if(ele.type === type){
          arr.push(ele)
        }
      });
      return arr.length ? arr[0].discountPrice : 0
    },
    setCompanyList: function(data){
      var _this = this;
      var tpl = '<tr> <td class="order-company-name"><label ><input type="checkbox" rel="{wlid}" relname="{name}" relid="{id}" {checked} name="" id="  ">{name}</label></td> <td class="order-company-ico"> {ico} </td> <td>{lowest}元</td> <td class="jietibox"><i>{perweight}</i>元/公斤 <span class="seeJieti">阶梯价格</span> <!-- 阶梯价格 --> {weightstr} </td> <td class="jietibox"><i>{pervolume}</i>元/立方 <span class="seeJieti">阶梯价格</span> <!-- 阶梯价格 --> {volumestr} </td> <td><i>{transportAging}</i>{transportAgingUnit}到达</td> <td><i>{departureHzData}</i>天<i>{departureHzTime}</i>次</td> </tr>';
      var tpl2 = '<div class="showjieti-info"><div class="jieti-title">最低一票价格：{lowest}元</div> <ul>{listr}</ul></div>';

      var s = '';
      $.each(data, function(inx, ele){
        var str1 = '';
        var str2 = '';
        $.each(ele.rangePrices, function(inx, ele){
          if(ele.type === '1'){
            str1 += '<li><span class="jietiv">'+ ele.startVolume +'公斤'+(ele.endVolume ? '~'+ele.endVolume+'公斤' : '以上')+'</span> <span class="jietih">'+ele.primeryPrice+'元/公斤</span> <span class="jietid">折后价'+ele.discountPrice+'元/公斤</span></li>';
          } else {
            str2 += '<li><span class="jietiv">'+ ele.startVolume +'立方'+(ele.endVolume ? '~'+ele.endVolume+'立方' : '以上')+'</span> <span class="jietih">'+ele.primeryPrice+'元/立方</span> <span class="jietid">折后价'+ele.discountPrice+'元/立方</span></li>';
          }
        });
        var str3 = tpl2.replace('{lowest}',ele.lowerPrice).replace('{listr}', str1);
        var str4 = tpl2.replace('{lowest}',ele.lowerPrice).replace('{listr}', str2);
        s += tpl.replace('{checked}','').replace(/\{name\}/g,ele.publishName).replace('{ico}','').replace('{lowest}',ele.lowerPrice).replace('{perweight}',_this.findLowestPrice(ele.rangePrices, '1')).replace('{weightstr}',str3).replace('{pervolume}',_this.findLowestPrice(ele.rangePrices, '0')).replace('{volumestr}',str4).replace('{transportAging}',ele.transportAging).replace('{transportAgingUnit}',ele.transportAgingUnit).replace('{departureHzData}',ele.departureHzData).replace('{departureHzTime}',ele.departureHzTime).replace('{wlid}', ele.companyId).replace('{id}', ele.id);
      });
      $('.lineinfo').html(s);
    },
    calcTotalFee: function(){
      // 获取价格前初始化下数据
      this.data.wlId = ''
      this.data.transportRangePublishId = ''
      this.data.wlName = ''
      this.data.forecastPrice = 0
      this.data.goodsType = ''
      this.data.totalAmount = 0
      var _this = this;

      if($('.lineinfo input[type="checkbox"]:checked').length){
        // var transportRangeId = $('.lineinfo input[type="checkbox"]:checked').eq(0).attr('rel');
        var sel =  $('.lineinfo input[type="checkbox"]:checked').eq(0);
        var transportRangeId = sel.attr('relid');
        var wldata = this.req['net'+transportRangeId] || [];
        this.data.transportRangePublishId = transportRangeId;
        this.data.wlId = sel.attr('rel');
        this.data.wlName = sel.attr('relname');
        this.data.startPointId = wldata[0] ? wldata[0].id : ''
        this.data.endPointId = wldata[1] ? wldata[1].id : ''

        var cargolist = [];
        $.each($('.order-cargo-list li'), function(inx, ele){
          ele = $(ele);
          var val = ele.find('.cargoname').val();
          if(val){
            cargolist.push({
              goodsName: val,
              goodsNum: ele.find('input').eq(1).val(),
              goodsWeight: ele.find('input').eq(2).val(),
              goodsVolume: ele.find('input').eq(3).val()
            });
          }
        });

        if(cargolist.length){
          var weight = 0
          var volume = 0
          var amount = 0

          $.each(cargolist, function(inx, item){
            weight += (parseFloat(item.goodsWeight, 10) || 0);
            volume += (parseFloat(item.goodsVolume, 10) || 0);
          });

          weight = weight || 0;
          volume = volume || 0;
          if (weight > 0 || volume > 0) {
            AFWL_API.getTotalPrice({
              transportRangeId: transportRangeId,
              weight: weight,
              volume: volume
            }).done(function(res){
              var data = res.data;
              if(data){
                _this.data.forecastPrice = data.forecastPrice
                _this.data.goodsType = data.goodsType
                _this.data.totalAmount = data.forecastPrice
              } else {
                _this.data.forecastPrice = ''
                _this.data.goodsType = ''
                _this.data.totalAmount = ''
              }
              _this.setTotalPrice();
            }).fail(function(err){
              _this.data.forecastPrice = ''
              _this.data.goodsType = ''
              _this.data.totalAmount = ''
              //layer.alert('获取价格失败：' + (err.errorInfo || err.text || '未知错误'));
              _this.setTotalPrice();
            });
          }
        }
      } else {
        
      }
    },
    setTotalPrice(){
      if(this.data.forecastPrice === ''){
        $('.order-calc-price span').text('面议');
      } else {
        $('.order-calc-price span').text( this.data.forecastPrice + '元');
      }
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
        this.detectLogin();
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
    detectLogin: function(){
      var data = this.data.aflcOrderAddressWebDtoList;
      // 判断是否为物流商
      if(this.logininfo.login_type === 'aflc-5'){
        if(this.pageinfo.uid === this.logininfo.login_mobile){
          layer.alert('目前不能对自己下单哦，请重新选择物流公司',{
            closeBtn: 0
          },function(){
            // /zhuanxian/list?start=广东省广州市&end=江西省吉安市
            var path = '/zhuanxian/list?';
            if(data[0].provinceCityArea){
              path += '&start=' + data[0].provinceCityArea
            }
            if(data[1].provinceCityArea){
              path += '&end=' + data[1].provinceCityArea
            }
            location.href = path;
          });
          return false;
        }
        return true;
      }
      return true;
    },
    // 获取专线详情
    initZx: function(){
      this.getCompany({
        id: this.pageinfo.id
      });
      return AFWL_API.getLineInfo(this.pageinfo.id).done(function(res){
        var data = res.data;
        var finp = $('.order-line-from input');
        var tinp = $('.order-line-to input');
        var reg = /(北京|天津|重庆|上海)市\1市/;
        var start = (data.startLocation || '').replace(reg,'$1市');
        var end = (data.endLocation || '').replace(reg,'$1市');
        finp.eq(0).val(start);
        tinp.eq(0).val(end);
        finp.eq(0).prop('disabled', true);
        tinp.eq(0).prop('disabled', true);

        finp.eq(1).attr('wtmapinit', start);
        tinp.eq(1).attr('wtmapinit', end);
        finp.eq(1).attr('wtmapnochange', true);
        tinp.eq(1).attr('wtmapnochange', true);
        finp.eq(1).attr('wtmapcode', data.startLocationCode || '');
        tinp.eq(1).attr('wtmapcode', data.endLcationCode || '');
      }).fail(function(err){
        layer.alert('加载专线信息失败：' + (err.errorInfo || err.text || '未知错误'));
      });
    },
    initSY: function(){
      // start=广东省惠州市博罗县&end=海南省海口市美兰区&startstreet=&endstreet=&startj=&startw=undefined&endj=&endw=undefined&startp=广东省&startc=惠州市&starta=博罗县&endp=海南省&endc=海口市&enda=美兰区
      var data = {
        startp: $.getParams('startp'),
        startc: $.getParams('startc'),
        starta: $.getParams('starta'),
        startj: $.getParams('startj'),
        startw: $.getParams('startw'),
        startstreet: $.getParams('startstreet'),

        endp: $.getParams('endp'),
        endc: $.getParams('endc'),
        enda: $.getParams('enda'),
        endj: $.getParams('endj'),
        endw: $.getParams('endw'),
        endstreet: $.getParams('endstreet')
      };
      
      // 格式化数据
      $.each(data, function(name, val){
        if(val === 'undefined' || val ==='null'){
          data[name] = '';
        }
      });
      

      var finp = $('.order-line-from input');
      var tinp = $('.order-line-to input');
      var str1 = data.startp + data.startc + data.starta;
      var str2 = data.endp + data.endc + data.enda;
      finp.eq(0).val(str1);
      tinp.eq(0).val(str2);
      finp.eq(1).val(data.startstreet);
      tinp.eq(1).val(data.endstreet);
      finp.eq(1).attr('wtmapinit', str1);
      tinp.eq(1).attr('wtmapinit', str2);
      // 设置出发地
      finp.attr({
        'theprovince': data.startp,
        'thecity': data.startc,
        'thearea': data.starta,
        'thepos': data.startw ? data.startj+','+data.startw : '',
        'thepcd': str1,
        'thestreet': data.startstreet
      });

      // 设置目的地
      tinp.attr({
        'theprovince': data.endp,
        'thecity': data.endc,
        'thearea': data.enda,
        'thepos': data.endw ? data.endj+','+data.endw : '',
        'thepcd': str2,
        'thestreet': data.endstreet
      });
      // 设置初始出发地
      this.setAddrInfo(0,'',finp.eq(0).attr('thepos'),{
        province: data.startp,
        city: data.startc,
        district: data.starta,
        township: data.startstreet,
        street:'',
        streetNumber: '',
        building: ''
      });

      // 设置目的地
      this.setAddrInfo(1,'',tinp.eq(0).attr('thepos'),{
        province: data.endp,
        city: data.endc,
        district: data.enda,
        township: data.endstreet,
        street:'',
        streetNumber: '',
        building: ''
      });

      // 获取公司
      if(data.startp && data.endp){
        this.getCompany();
      }

    },
    init: function(){
      // 获取当前页面信息
      // 1.判断是否为专线下单
      this.pageinfo.id = $.getParams('id');
      this.pageinfo.isid = !!this.pageinfo.id;

      // 2.判断是否为物流公司下单
      this.pageinfo.comid = $.getParams('publishId');
      this.pageinfo.iscom = !!this.pageinfo.comid;

      // 3.判断是否为自由下单
      this.pageinfo.isfree = !this.pageinfo.isid && !this.pageinfo.iscom

      this.pageinfo.uid = $.getParams('uid');

      // 获取从首页下单过来的参数
      if($.getParams('start') || $.getParams('end')){
        this.initSY();
      }

      // 获取DOM
      this.$caroList = $('.order-caro-pop');
      this.$inputcargo = $('.order-cargo-list');
      this.$companylist = $('.order-company-list');
      this.$popcompany = $('.wlname-info');
      this.$selectcompany = $('.netListContent-wraper');
      var _this = this;

      this.px = $('.main_nr').offset().left;
      this.py = $('.main_nr').offset().top;
      // 1.初始化货物列表
      AFWL_API.getSelectType('AF034').done(function(res){
        order.initCargo(res.data);
      }).fail(function(err){
        layer.alert('加载货物列表失败：' + (err.errorInfo || err.text || '未知错误'));
      });

      this.getLoginInfo();

      // 根据不同入口设置不同初始界面
      if(this.pageinfo.isid){
        this.initZx();
      }

      this.initEvent();
    }
  };
  order.init();
  window.AFLCORDER = order;

})(window.jQuery);