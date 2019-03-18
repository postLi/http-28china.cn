
//设置统一token
$(document).ajaxSend(function(event, jqXHR, ajaxOptions) {
  var access_token = $.cookie('access_token')
  // console.log('ajaxOptions:',ajaxOptions)
  if (access_token && ajaxOptions.url.indexOf('access_token=') === -1) {
    // ajaxOptions.
    ajaxOptions.url =
      ajaxOptions.url +
      (ajaxOptions.url.indexOf('?') !== -1 ? '&' : '?') +
      'access_token=' +
      access_token
  }
})

// 接口相关
var AFWL_API = {
  // url: 'http://192.168.1.188:886/api',
  constant: {
    LINK_MEMBER: 'http://member.28china.cn',
    LINK_TMS: 'http://www.28tms.cn'
  },
  init: function() {
    var lc = location.host
    var c = this.constant
    if (lc.indexOf('192.168.1.157') !== -1) {
      c.LINK_MEMBER = 'http://192.168.1.157:9526'
      c.LINK_TMS = 'http://192.168.1.157:9528'
    } else if (lc.indexOf('192.168.1.188') !== -1) {
      c.LINK_MEMBER = 'http://192.168.1.188:9526'
      c.LINK_TMS = 'http://192.168.1.188:9528'
    } else if (lc.indexOf('192.168.1.170') !== -1) {
      c.LINK_MEMBER = 'http://192.168.1.188:9524'
      c.LINK_TMS = 'http://192.168.1.157:9528'
    }
  },
  url: '/api',
  // 包装器，统一处理逻辑
  _warpper: function(pro) {
    var defer = $.Deferred()
    pro
      .done(function(res) {
        if (res.status === 200 || res.access_token) {
          defer.resolve(res)
        } else {
          defer.reject(res)
        }
      })
      .fail(function() {
        defer.reject({
          text: '网络错误！',
          status: 100
        })
      })

    return defer.promise()
  },
  // 保存登陆后的信息
  setCookieData: function(data) {
    // 获取域名
    var domain = location.hostname
    if (domain.indexOf('28china.cn') !== -1) {
      domain = '.28china.cn'
    }
    $.cookie('access_token', data.access_token, {
      expires: 7,
      domain: domain,
      path: '/'
    })
    $.cookie('login_mobile', data.mobile, {
      expires: 7,
      domain: domain,
      path: '/'
    })
    $.cookie('login_userName', data.userName, {
      expires: 7,
      domain: domain,
      path: '/'
    })
    $.cookie('login_userId', data.id, { expires: 7, domain: domain, path: '/' })
    $.cookie('login_userToken', data.userToken, {
      expires: 7,
      domain: domain,
      path: '/'
    })
    $.cookie('login_type', data.login_type, {
      expires: 7,
      domain: domain,
      path: '/'
    })
  },
  login: function(username, password) {
    var defer = $.Deferred()
    var _this = this

    var grant_type = 'password'
    var scope = 'webApp'

    var form = new FormData()
    form.append('username', username)
    form.append('password', $.md5(password.toString()))
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
    this._warpper(
      $.ajax({
        url: this.url + '/api-uaa/password/token',
        method: 'POST',
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
    )
      .done(function(res) {
        if (res.access_token) {
          var login_type = username.split('|')[1]
          _this
            .getInfoByMobile(
              res.access_token,
              username.split('|')[0],
              login_type
            )
            .done(function(r) {
              if (r.data) {
                var data = r.data
                // 将登陆返回字段赋给获取信息的返回值
                for (var i in res) {
                  data[i] = res[i]
                }

                if(!data.id){
                  data.id = 
                }

                data.login_type = login_type

                _this.setCookieData(data)

                defer.resolve(data)
              } else {
                defer.reject(r)
              }
            })
            .fail(function(err) {
              defer.reject(err)
            })
        } else {
          defer.reject(res)
        }
      })
      .fail(function(err) {
        defer.reject(err)
      })
    return defer.promise()
  },
  loginByMobile: function(username, code) {
    var defer = $.Deferred()
    var _this = this

    var grant_type = 'authorization_code'
    var scope = 'webApp'
    var form = new FormData()
    form.append('mobile', username)
    form.append('code', code)
    form.append('grant_type', grant_type)

    this._warpper(
      $.ajax({
        url: this.url + '/api-uaa/mobile/token',
        method: 'POST',
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
    )
      .done(function(res) {
        if (res.access_token) {
          var login_type = username.split('|')[1]
          _this
            .getInfoByMobile(
              res.access_token,
              username.split('|')[0],
              login_type
            )
            .done(function(r) {
              if (r.data) {
                var data = r.data
                // 将登陆返回字段赋给获取信息的返回值
                for (var i in res) {
                  data[i] = res[i]
                }

                data.login_type = login_type

                _this.setCookieData(data)

                defer.resolve(data)
              } else {
                defer.reject(r)
              }
            })
            .fail(function(err) {
              defer.reject(err)
            })
        } else {
          defer.reject(res)
        }
      })
      .fail(function(err) {
        defer.reject(err)
      })

    return defer.promise()
  },
  /**
   * 返回数据包含 userName memberPwd
   */
  loginByToken: function(access_token) {
    var _this = this
    access_token = access_token || ''
    return this._warpper(
      $.get(
        this.url +
          '/aflc-uc/usercenter/aflcLogisticsCompanyAccout/v1/getAccoutInfo',
        {
          access_token: access_token
        }
      )
    ).done(function(res) {
      var data = res.data
      if (data) {
        data.access_token = access_token
        data.login_type = 'aflc-5'
        _this.setCookieData(data)
      }

      return res
    })
  },
  // 获取用户信息
  getInfo: function(mobile, memberType, access_token) {
    return this._warpper(
      $.get(this.url + '/aflc-common/common/aflcMemberCenter/v1/getUserInfo', {
        mobile: mobile,
        memberType: memberType,
        access_token: access_token
      })
    )
  },
  getInfoByMobile: function(access_token, mobile, type) {
    if (type === 'aflc-5') {
      // 物流商
      return this.getLogisticsCompanyInfo(mobile, access_token)
    } else if (type === 'aflc-2') {
      // 货主
      return this.getShipperInfo(mobile, access_token)
    } else {
      // 车主
      return this.getDriverInfo(mobile, access_token)
    }
  },
  // 获取车主信息
  getDriverInfo: function(mobile, access_token) {
    return this._warpper(
      $.get(
        this.url +
          '/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile',
        {
          access_token: access_token,
          mobile: mobile
        }
      )
    )
  },
  // 获取物流商信息
  getLogisticsCompanyInfo: function(mobile, access_token) {
    return this._warpper(
      $.get(
        this.url +
          '/aflc-common/common/aflcMemberCenter/v1/getLogisticsCompanyInfoByMobile',
        {
          access_token: access_token,
          mobile: mobile
        }
      )
    )
  },
  // 获取货主信息
  getShipperInfo: function(mobile, access_token) {
    return this._warpper(
      $.get(
        this.url +
          '/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile',
        {
          access_token: access_token,
          mobile: mobile
        }
      )
    )
  },
  // 根据token获取用户名
  getUserNameByAccessToken: function(access_token) {
    return this._warpper(
      $.get(
        this.url +
          '/aflc-common/common/aflcMemberCenter/v1/getUserNameByAccessToken',
        {
          access_token: access_token
        }
      )
    )
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
    return this._warpper(
      $.post(this.url + '/aflc-common/aflcCommonSms/sendCodeSms/' + phone)
    )
  },
  checkMobileCode: function(phone, code) {
    return $.post(
      this.url + '/aflc-common/aflcCommonSms/check/' + phone + '/' + code
    )
  },
  getWxInfo: function() {
    return $.get(this.url + '/api-uaa/wx/qr/wxinit')
  },
  /**
   * 绑定账号到指定的微信id上
   * @param {*} username 用户账号
   * @param {*} openid 微信id
   * @param {*} type 用户角色类型
   * @param {*} origin 来源
   */
  bindWxUser: function(username, openid, type, origin, unionid) {
    return $.get(
      this.url +
        '/api-common/common/user/v1/wx/regAndbindingByUnionid/' +
        username +
        '/' +
        openid +
        '/' +
        (origin || 'AF0030105') +
        '/' +
        type +
        '/' +
        unionid
    )
  },
  /**
   * 获取绑定的信息
   */
  getBindInfo: function(code, userType, origin) {
    /* var defer = $.Deferred();
    if(Math.random()>0.5){
      defer.resolve({data:{}});
    } else {
      defer.reject();
    }

    return defer.promise(); */
    //origin=28china&roleType=aflc-1&code=123xxasd123
    return $.get(this.url + '/api-uaa/wx/qr/wxlogincheck', {
      origin: origin || 'AF0030105',
      roleType: userType,
      code: code
    })
  },
  getBindedInfo: function(code, roleType, origin) {
    var grant_type = 'authorization_code'
    var scope = 'webApp'
    var form = new FormData()
    form.append('roleType', roleType)
    form.append('code', code)
    form.append('origin', origin || 'AF0030105')
    form.append('grant_type', grant_type)

    return $.ajax({
      url: this.url + '/api-uaa/qrwechat/token',
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
  /**
   * 统一的注册接口
   * @param {*} data 提交的参数
   * {
  "areaCode": "string",
  "cityCode": "string",
  "memberType": "string",
  "mobile": "string",
  "password": "string",
  "provinceCode": "string",
  "registerOrigin": "string",
  "registerType": "string",
  "smsCode": "string"
}
   */
  regisiterByMobile: function(data) {
    data = $.extend(true, {}, data)
    data.password = $.md5(data.password)
    return $.ajax({
      type: 'POST',
      url: this.url + '/aflc-common/common/aflcMemberCenter/v1/userRegister',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
      dataType: 'json'
    })
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
    return this._warpper(
      $.ajax({
        type: 'POST',
        url: this.url + '/aflc-common/common/aflcMemberCenter/v1/register',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        dataType: 'json'
      })
    )
    //return $.post(this.url + '/aflc-common/common/aflcMemberCenter/v1/register', data);
  },
  getCityInfo: function(code) {
    code = code || ''
    return this._warpper(
      $.get(
        this.url +
          '/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code=' +
          code
      )
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
    var form = {}
    form.mobile = data.mobile
    form.password = $.md5(data.password)
    form.passwordSure = $.md5(data.passwordSure)
    form.smsCode = data.smsCode
    form.imageCode = data.imageCode
    form.memberType = data.memberType

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
      data: $.param(form),
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
  },
  findByNum: function(num) {
    return this._warpper(
      $.get(
        this.url + '/aflc-portal/order/fclOrder/v1/queryCompanyBySerial/' + num
      )
    )
  },
  getInfoById: function(id) {
    return this._warpper(
      $.get(
        this.url + '/aflc-portal/order/fclOrder/v1/queryWaybillStateById/' + id
      )
    )
  },
  getCompanyOrder: function(cid, num) {
    return this._warpper(
      $.get(
        this.url +
          '/aflc-portal/order/fclOrder/v1/queryCurrentCompanyWaybillInfoBySerial',
        {
          userName: cid,
          serial: num
        }
      )
    )
  },
  // 下单相关
  postCreateOrder: function(data, param) {
    var str = '?' + $.param(param)
    return this._warpper(
      $.ajax({
        type: 'POST',
        url: this.url + '/aflc-order/order/fclOrder/v1/createOrder' + str,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        dataType: 'json'
      })
    )
  },
  /*   getGoodsPrice: function(publishId, weight, volume, startLocation, endLocation){
    return $.get(this.url + '/aflc-order/order/fclOrder/v1/getGoodsPrice', {
        publishId:publishId,
        weight:weight,
        volume:volume,
        startLocation:startLocation,
        endLocation:endLocation
      })
  }, */
  /* getListDetailPoint: function(data){
    return $.ajax({
        type: "POST",
        url: this.url + "/aflc-uc/usercenter/aflcPointNetwork/v1/listDetailPointNetwork",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        dataType: "json"
      });
  }, */
  postAddContact: function(data, param) {
    var str = '?' + $.param(param)
    return this._warpper(
      $.ajax({
        type: 'POST',
        url: this.url + '/aflc-uc/usercenter/aflcShipperContacts/v1/add' + str,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        dataType: 'json'
      })
    )
  },
  getContactList: function(data, param) {
    var str = '?' + $.param(param)
    return this._warpper(
      $.ajax({
        type: 'POST',
        url: this.url + '/aflc-uc/usercenter/aflcShipperContacts/v1/list' + str,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        dataType: 'json'
      })
    )
  },
  putChangeContact: function(data, param) {
    var str = '?' + $.param(param)
    return this._warpper(
      $.ajax({
        type: 'PUT',
        url:
          this.url + '/aflc-uc/usercenter/aflcShipperContacts/v1/update' + str,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        dataType: 'json'
      })
    )
  },
  getTotalPrice: function(data) {
    return this._warpper(
      $.get(
        this.url + '/aflc-order/order/fclOrder/v1/getEstimateTotalPieces',
        data
      )
    )
  },
  getBestNet: function(cid, data) {
    return this._warpper(
      $.ajax({
        type: 'POST',
        url:
          this.url +
          '/aflc-uc/usercenter/aflcPointNetwork/v1/listPointByCompanyId/' +
          cid,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        dataType: 'json'
      })
    )
  },
  getAllNet: function(cid, data) {
    return this._warpper(
      $.ajax({
        type: 'POST',
        url:
          this.url +
          '/aflc-uc/usercenter/aflcPointNetwork/v1/listCompanyPointByCompanyId/' +
          cid,
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        dataType: 'json'
      })
    )
  },
  getCompany: function(data) {
    return this._warpper(
      $.ajax({
        type: 'POST',
        url:
          this.url +
          '/aflc-uc/usercenter/aflcTransportRange/v1/findRangesWithCreateOrder',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        dataType: 'json'
      })
    )
  },
  getSelectType: function(type) {
    return this._warpper(
      $.get(this.url + '/aflc-common/sysDict/getSysDictByCodeGet/' + type)
    )
  },
  getLineInfo: function(id) {
    return this._warpper(
      $.get(
        this.url +
          '/aflc-uc/usercenter/aflcTransportRange/v1/findMemberAflcTransportRange/' +
          id
      )
    )
  },
  /**
   * 新增车源信息
   * @param {*} data 车源信息
  {
    "beginTime": "2018-07-16T11:51:14.433Z",
    "belongDriver": "string",
    "browseNumber": 0,
    "carFile": "string",
    "carHeight": 0,
    "carLength": 0,
    "carLoad": 0,
    "carNum": "string",
    "carSourceType": "string",
    "carSpec": "string",
    "carTag": "string",
    "carType": "string",
    "carVolume": 0,
    "carWidth": 0,
    "createTime": "2018-07-16T11:51:14.434Z",
    "creater": "string",
    "driverId": "string",
    "endAddress": "string",
    "endAddressCoordinate": "string",
    "endAddressName": "string",
    "endTime": "2018-07-16T11:51:14.434Z",
    "expectPrice": 0,
    "id": "string",
    "isLongCar": "string",
    "phone": "string",
    "remark": "string",
    "startTime": "2018-07-16T11:51:14.434Z",
    "strartAddress": "string",
    "strartAddressCoordinate": "string",
    "strartAddressName": "string",
    "title": "string",
    "updateTime": "2018-07-16T11:51:14.434Z",
    "updater": "string",
    "usualPlace": "string",
    "viaAddress": "string",
    "viaAddressCoordinate": "string",
    "viaAddressName": "string"
  }
  */
  postNewCar: function(data) {
    return this._warpper(
      $.ajax({
        type: 'POST',
        url: this.url + '/aflc-uc/usercenter/aflcCarInfo/v1/add',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        dataType: 'json'
      })
    )
  }
}

AFWL_API.init()

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
}
