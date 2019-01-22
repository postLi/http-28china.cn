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
function myCode(myname) {
  var mycode = 440100
  $.ajax({
    type: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    url: '../js/regions.json',
    async: false,
    success: function(res) {
      for (var i = 0; i < res.length; i++) {
        var code = res[i].code
        var name = res[i].name
        if (myname == name) {
          mycode = code
        }
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
  console.log('mycode:' + mycode)
  return mycode
}
//找专线/货源/车源 S
$('.arc_input3').click(function() {
  var search_type = $('#search_type option:selected').attr('name')
  var start = $('.arc_input1').val()
  var end = $('.arc_input2').val()
  console.log(
    '搜索类型：' + search_type + '出发地：' + start + '到达地：' + end
  )
  if (search_type == 'zx') {
    window.open('/plus/list.php?tid=4&start=' + start + '&end=' + end)
  }
  if (search_type == 'huo') {
    window.open('/huoyuan?start=' + start + '&end=' + end)
  }
  if (search_type == 'che') {
    window.open('/cheyuan?start=' + start + '&end=' + end)
  }
})

//找专线/货源/车源 E

//客户评价效果处理 S
var src1 = '/templets/default/images/article_wlzx/stars01.png'
var src2 = '/templets/default/images/article_wlzx/stars02.png'
var fen1 = '1分&nbsp非常不满意'
var fen2 = '2分&nbsp不满意'
var fen3 = '3分&nbsp一般'
var fen4 = '4分&nbsp满意'
var fen5 = '5分&nbsp非常满意'
var defen = ''
var defen1 = '差评'
var defen2 = '中评'
var defen3 = '好评'

//第一行
$('#pjxx1_1').click(function() {
  $('#pj_f1').html(fen1)
  $('#pj_f1').css('display', 'block')
  $('#pjxx1_1').attr('src', src2)
  $('#pjxx1_2').attr('src', src1)
  $('#pjxx1_3').attr('src', src1)
  $('#pjxx1_4').attr('src', src1)
  $('#pjxx1_5').attr('src', src1)
})
$('#pjxx1_2').click(function() {
  $('#pj_f1').html(fen2)
  $('#pj_f1').css('display', 'block')
  $('#pjxx1_1').attr('src', src2)
  $('#pjxx1_2').attr('src', src2)
  $('#pjxx1_3').attr('src', src1)
  $('#pjxx1_4').attr('src', src1)
  $('#pjxx1_5').attr('src', src1)
})
$('#pjxx1_3').click(function() {
  $('#pj_f1').html(fen3)
  $('#pj_f1').css('display', 'block')
  $('#pjxx1_1').attr('src', src2)
  $('#pjxx1_2').attr('src', src2)
  $('#pjxx1_3').attr('src', src2)
  $('#pjxx1_4').attr('src', src1)
  $('#pjxx1_5').attr('src', src1)
})
$('#pjxx1_4').click(function() {
  $('#pj_f1').html(fen4)
  $('#pj_f1').css('display', 'block')
  $('#pjxx1_1').attr('src', src2)
  $('#pjxx1_2').attr('src', src2)
  $('#pjxx1_3').attr('src', src2)
  $('#pjxx1_4').attr('src', src2)
  $('#pjxx1_5').attr('src', src1)
})
$('#pjxx1_5').click(function() {
  $('#pj_f1').html(fen5)
  $('#pj_f1').css('display', 'block')
  $('#pjxx1_1').attr('src', src2)
  $('#pjxx1_2').attr('src', src2)
  $('#pjxx1_3').attr('src', src2)
  $('#pjxx1_4').attr('src', src2)
  $('#pjxx1_5').attr('src', src2)
})
//第二行
$('#pjxx2_1').click(function() {
  $('#pj_f2').html(fen1)
  $('#pj_f2').css('display', 'block')
  $('#pjxx2_1').attr('src', src2)
  $('#pjxx2_2').attr('src', src1)
  $('#pjxx2_3').attr('src', src1)
  $('#pjxx2_4').attr('src', src1)
  $('#pjxx2_5').attr('src', src1)
})
$('#pjxx2_2').click(function() {
  $('#pj_f2').html(fen2)
  $('#pj_f2').css('display', 'block')
  $('#pjxx2_1').attr('src', src2)
  $('#pjxx2_2').attr('src', src2)
  $('#pjxx2_3').attr('src', src1)
  $('#pjxx2_4').attr('src', src1)
  $('#pjxx2_5').attr('src', src1)
})
$('#pjxx2_3').click(function() {
  $('#pj_f2').html(fen3)
  $('#pj_f2').css('display', 'block')
  $('#pjxx2_1').attr('src', src2)
  $('#pjxx2_2').attr('src', src2)
  $('#pjxx2_3').attr('src', src2)
  $('#pjxx2_4').attr('src', src1)
  $('#pjxx2_5').attr('src', src1)
})
$('#pjxx2_4').click(function() {
  $('#pj_f2').html(fen4)
  $('#pj_f2').css('display', 'block')
  $('#pjxx2_1').attr('src', src2)
  $('#pjxx2_2').attr('src', src2)
  $('#pjxx2_3').attr('src', src2)
  $('#pjxx2_4').attr('src', src2)
  $('#pjxx2_5').attr('src', src1)
})
$('#pjxx2_5').click(function() {
  $('#pj_f2').html(fen5)
  $('#pj_f2').css('display', 'block')
  $('#pjxx2_1').attr('src', src2)
  $('#pjxx2_2').attr('src', src2)
  $('#pjxx2_3').attr('src', src2)
  $('#pjxx2_4').attr('src', src2)
  $('#pjxx2_5').attr('src', src2)
})
//第三行
$('#pjxx3_1').click(function() {
  $('#pj_f3').html(fen1)
  $('#pj_f3').css('display', 'block')
  $('#pjxx3_1').attr('src', src2)
  $('#pjxx3_2').attr('src', src1)
  $('#pjxx3_3').attr('src', src1)
  $('#pjxx3_4').attr('src', src1)
  $('#pjxx3_5').attr('src', src1)
})
$('#pjxx3_2').click(function() {
  $('#pj_f3').html(fen2)
  $('#pj_f3').css('display', 'block')
  $('#pjxx3_1').attr('src', src2)
  $('#pjxx3_2').attr('src', src2)
  $('#pjxx3_3').attr('src', src1)
  $('#pjxx3_4').attr('src', src1)
  $('#pjxx3_5').attr('src', src1)
})
$('#pjxx3_3').click(function() {
  $('#pj_f3').html(fen3)
  $('#pj_f3').css('display', 'block')
  $('#pjxx3_1').attr('src', src2)
  $('#pjxx3_2').attr('src', src2)
  $('#pjxx3_3').attr('src', src2)
  $('#pjxx3_4').attr('src', src1)
  $('#pjxx3_5').attr('src', src1)
})
$('#pjxx3_4').click(function() {
  $('#pj_f3').html(fen4)
  $('#pj_f3').css('display', 'block')
  $('#pjxx3_1').attr('src', src2)
  $('#pjxx3_2').attr('src', src2)
  $('#pjxx3_3').attr('src', src2)
  $('#pjxx3_4').attr('src', src2)
  $('#pjxx3_5').attr('src', src1)
})
$('#pjxx3_5').click(function() {
  $('#pj_f3').html(fen5)
  $('#pj_f3').css('display', 'block')
  $('#pjxx3_1').attr('src', src2)
  $('#pjxx3_2').attr('src', src2)
  $('#pjxx3_3').attr('src', src2)
  $('#pjxx3_4').attr('src', src2)
  $('#pjxx3_5').attr('src', src2)
})
//评价积分处理
$('.pj_box3 img').click(function() {
  if (
    $('#pj_f1').html() != '' &&
    $('#pj_f2').html() != '' &&
    $('#pj_f3').html() != ''
  ) {
    var pj_f1 = parseInt(
      $('#pj_f1')
        .html()
        .substring(0, 1)
    )
    var pj_f2 = parseInt(
      $('#pj_f2')
        .html()
        .substring(0, 1)
    )
    var pj_f3 = parseInt(
      $('#pj_f3')
        .html()
        .substring(0, 1)
    )
    var pj_fen = pj_f1 + pj_f2 + pj_f3
    if (pj_fen >= 3 && pj_fen <= 6) {
      $('#pj_box_zh').css('display', 'block')
      $('#pj_box_zh').html(defen1)
    }
    if (pj_fen >= 7 && pj_fen <= 9) {
      $('#pj_box_zh').css('display', 'block')
      $('#pj_box_zh').html(defen2)
    }
    if (pj_fen >= 10 && pj_fen <= 15) {
      $('#pj_box_zh').css('display', 'block')
      $('#pj_box_zh').html(defen3)
    }
  }
})

$('#pj_nr').keyup(function() {
  var len = this.value.length

  var limit = 400 - len
  $('#pj_limit').html(limit)
})

//客户评价效果处理 E

//获取参数的值
function GetQueryString(e) {
  var t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)'),
    s = window.location.search.substr(1).match(t)
  return null != s ? unescape(s[2]) : null
}
var aid = GetQueryString('id')
var publishId = GetQueryString('publishId')

vo = new Object()
var assessLevel = ''
vo.assessLevel = assessLevel
vo.transportRangeId = aid
if (!assessLevel || assessLevel == 'null') {
  delete vo.assessLevel
}
$('.arc_pjbt_item input').click(function() {
  var val = $('[name=radio]:checked').attr('value')
  console.log(val)
  vo.assessLevel = val
})

//物流评价数量 E
//物流专线 其他列表S
function process08(startProvince, startCity, endProvince, endCity, rangeIds) {
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url:
      '/api/aflc-portal/portalt/aflcRecommendTransportRange/v1/findOtherRanges',
    dataType: 'json',
    data: JSON.stringify({
      currentPage: 1,
      pageSize: 8,
      vo: {
        startProvince: startProvince,
        startCity: startCity,
        endProvince: endProvince,
        endCity: endCity,
        rangeIds: rangeIds
      } //JSON.stringify({})
    }),
    success: function(res) {
      $('#js017 .tj_list')
        .not(':eq(0)')
        .remove()
      var datas = res.data
      for (var i = 0; i < datas.length; i++) {
        var lightPrice = datas[i].lightPrice
        var heavyPrice = datas[i].heavyPrice
        if (lightPrice) {
          var lightPrice = parseFloat(lightPrice).toFixed(0)
        }
        if (heavyPrice) {
          var heavyPrice = parseFloat(heavyPrice).toFixed(0)
        }
        var id = datas[i].id
        var publishId = datas[i].publishId
        var lowerPrice = datas[i].lowerPrice
        var account = datas[i].account
        var publishName = datas[i].publishName
        var startCity = datas[i].startCity
        var startArea = datas[i].startArea
        var endCity = datas[i].endCity
        var endArea = datas[i].endArea
        if (!startCity) {
          startCity = ''
        }
        if (!endCity) {
          endCity = ''
        }
        if (!startArea) {
          startArea = ''
        }
        if (!endArea) {
          endArea = ''
        }
        var start = startCity + startArea
        var end = endCity + endArea
        if (start && start.length > 6) {
          start = start.substring(0, 6) + '..'
        }
        if (end && end.length > 6) {
          end = end.substring(0, 6) + '..'
        }
        var publishName = datas[i].publishName
        if (publishName && publishName.length > 12) {
          publishName = publishName.substring(0, 12) + '..'
        }
        var transportAging = datas[i].transportAging
        var transportAgingUnit = datas[i].transportAgingUnit
        var isVip = datas[i].isVip
        var authStatus = datas[i].authStatus
        var collateral = datas[i].collateral
        var arcurl =
          '/wlzx/2018/0509/7.html?id=' + id + '&publishId=' + publishId
        $('#tj023').attr('href', '/member/' + account + '.html')
        $('#tj023').html(publishName)
        $('#tj021').html(start)
        $('#tj022').html(end)
        $('#tj024').html(heavyPrice)
        $('#tj025').html(lightPrice)
        $('#tj026').html(transportAging + transportAgingUnit)
        $('#tj027').html(lowerPrice + '元')
        if (!lowerPrice) {
          $('#tj027').html('面议')
        }
        $('#tj028').attr('href', arcurl)
        $('#tj020').attr('href', arcurl)
        var s1 = '<div class="tj_list tj_list' + i + '">'
        var s2 = $('.tj_list').html()
        var s3 = '</div>'
        $('#js017').append(s1 + s2 + s3)

        if (isVip != 1) {
          console.log('is not Vip')
          $('.tj_list' + i + '  #tj_xinyong').css('display', 'none')
        }
        if (authStatus != 'AF0010403') {
          console.log('is not shiming')
          $('.tj_list' + i + '  #tj_shiming').css('display', 'none')
        }
        if (!collateral || collateral == 0) {
          console.log('is not danbao')
          $('.tj_list' + i + '  #tj_danbao').css('display', 'none')
        }
      }
      console.log($('.tj_list').length)
      if ($('.tj_list').length >= 10) {
        $('.arc_bottom_more').css('display', 'block')
        $('#arc_bottom_more').attr(
          'href',
          '/plus/list.php?tid=4&start=' + startCity + '&end=' + endCity
        )
      }
      if ($('.tj_list').length == 1) {
        $('.arc_bottom').css('display', 'none')
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
//process08();
//物流专线 其他列表 E

//专线数据字典 S
function tjcx01() {
  return $.ajax({
    type: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/api/aflc-common/sysDict/getSysDictByCodeGet/AF0360301',

    success: function(res) {
      var datas = res.data
      for (var i = 0; i < datas.length; i++) {
        var value = datas[i].value
        var code = datas[i].code
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}

//专线数据字典 E

//专线详情评价S
function process06(
  evaluationDes,
  evaluationId,
  evaluationName,
  serverPriceStarLevel,
  serverQualityStarLevel,
  transportAgingStarLevel,
  transportRangeId,
  assessLevel
) {
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/api/aflc-portal/portal/aflcTransportEvaluation/v1/add',
    dataType: 'json',
    data: JSON.stringify({
      evaluationDes: evaluationDes,
      evaluationId: evaluationId,
      evaluationName: evaluationName,
      serverPriceStarLevel: serverPriceStarLevel,
      serverQualityStarLevel: serverQualityStarLevel,
      transportAgingStarLevel: transportAgingStarLevel,
      transportRangeId: transportRangeId,
      assessLevel: assessLevel
    }),
    success: function(res) {
      var datas = res.data.list
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
//process06();
//专线详情评价 E

//提交评价 S
$('#pj_submit').click(function() {
  var login_mobile = getCookie('login_mobile')
  var login_type = getCookie('login_type')
  var access_token = getCookie('access_token')

  var assessLevel = ''
  var transportRangeId = aid
  var evaluationDes = $('#pj_nr').val()
  var pj_f1 = parseInt(
    $('#pj_f1')
      .html()
      .substring(0, 1)
  )
  var pj_f2 = parseInt(
    $('#pj_f1')
      .html()
      .substring(0, 1)
  )
  var pj_f3 = parseInt(
    $('#pj_f1')
      .html()
      .substring(0, 1)
  )
  var pj_zh = $('#pj_box_zh').html()
  var serverPriceStarLevel = 'AF03603010' + pj_f1
  var serverQualityStarLevel = 'AF03603020' + pj_f2
  var transportAgingStarLevel = 'AF03603030' + pj_f3
  if (pj_zh == '好评') {
    var assessLevel = 'AF0360101'
  }
  if (pj_zh == '中评') {
    var assessLevel = 'AF0360102'
  }
  if (pj_zh == '差评') {
    var assessLevel = 'AF0360103'
  }

  var login_mobile = getCookie('login_mobile')
  var login_type = getCookie('login_type')
  var access_token = getCookie('access_token')
  if (login_type == 'aflc-1') {
    var obj2 = new Object()
    obj2 = che(login_mobile, access_token)
    console.log(obj2)
    var evaluationId = obj2.id
    var evaluationName = obj2.name
    console.log(evaluationId)
    console.log(evaluationName)
  }
  if (login_type == 'aflc-2') {
    var obj3 = new Object()
    obj3 = huo(login_mobile, access_token)
    console.log(obj3)
    var evaluationId = obj3.id
    var evaluationName = obj3.name
    console.log(evaluationId)
    console.log(evaluationName)
  }
  if (login_type == 'aflc-5') {
    var obj = new Object()
    obj = wuliu(login_mobile, access_token)
    console.log(obj)
    var evaluationId = obj.id
    var evaluationName = obj.name
    console.log(evaluationId)
    console.log(evaluationName)
  }

  console.log(
    serverPriceStarLevel +
      ':' +
      serverQualityStarLevel +
      ':' +
      transportAgingStarLevel +
      ':' +
      assessLevel +
      ':' +
      evaluationDes +
      transportRangeId +
      evaluationName +
      evaluationId
  )
  if (!pj_zh) {
    alert('请完善评价信息！')
    return false
  }
  if (pj_zh) {
    if (!login_mobile || !login_type || !access_token) {
      $('.pj_box').hide()
      $('body').toast({
        content: '您还未登录，请先登录',
        duration: 3000
      })
      $('.login_box').css('display', 'block')

      //window.location='/member/login.php';
      return false
    }
  }

  process06(
    evaluationDes,
    evaluationId,
    evaluationName,
    serverPriceStarLevel,
    serverQualityStarLevel,
    transportAgingStarLevel,
    transportRangeId,
    assessLevel
  )

  $('.pj_box').hide()

  alert('评价成功！')

  //window.location.reload();
})

//提交评价 E
