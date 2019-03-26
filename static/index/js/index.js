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

//快速下单切换 S
$('#m1_01_1').click(function() {
  $('.m1_01').removeClass('m1_on_02')
  $('.m1_01').removeClass('m1_on_03')
  $(this).addClass('m1_on_01')
  $('#desc_01').css('display', 'block')
  $('#desc_02').css('display', 'none')
  $('#desc_03').css('display', 'none')
  $('#order_01').css('display', 'block')
  $('#order_02').css('display', 'none')
  $('#order_03').css('display', 'none')
})
$('#m1_01_2').click(function() {
  $('.m1_01').removeClass('m1_on_01')
  $('.m1_01').removeClass('m1_on_03')
  $(this).addClass('m1_on_02')
  $('#desc_01').css('display', 'none')
  $('#desc_02').css('display', 'block')
  $('#desc_03').css('display', 'none')
  $('#order_01').css('display', 'none')
  $('#order_02').css('display', 'block')
  $('#order_03').css('display', 'none')
})
$('#m1_01_3').click(function() {
  $('.m1_01').removeClass('m1_on_01')
  $('.m1_01').removeClass('m1_on_02')
  $(this).addClass('m1_on_03')
  $('#desc_01').css('display', 'none')
  $('#desc_02').css('display', 'none')
  $('#desc_03').css('display', 'block')
  $('#order_01').css('display', 'none')
  $('#order_02').css('display', 'none')
  $('#order_03').css('display', 'block')
})
//快速下单切换 E

//数据统计 S
function sjtj() {
  $.ajax({
    type: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/api/aflc-portal/portalt/sysdateinfo/v1/dateinfo',

    success: function(res) {
      var datas = res.data
      if (!datas) {
        return
      }

      var totalGoods = datas.totalGoods
      var totalLines = datas.totalLines
      var totalCarSources = datas.totalCarSources
      var todyAddGoods = datas.todyAddGoods
      var todyAddLines = datas.todyAddLines
      var todyaddCarSources = datas.todyaddCarSources

      $('#data001').html(totalGoods)
      $('#data002').html(totalLines)
      $('#data003').html(totalCarSources)
      $('#data004').html(todyAddGoods)
      $('#data005').html(todyAddLines)
      $('#data006').html(todyaddCarSources)
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
// sjtj()
//数据统计 E

//零担下单 S
$('#order_01').click(function() {
  var start = $('#zhidaFrom').val()
  var end = $('#zhidaTo').val()
  var startjw = $('#zhidaFrom').attr('thepos')
  var startpcd = $('#zhidaFrom').attr('thepcd')
  var startstreet = $('#zhidaFrom').attr('thestreet')
  var endpcd = $('#zhidaTo').attr('thepcd')
  var endstreet = $('#zhidaTo').attr('thestreet')

  var startp = $('#zhidaFrom').attr('theprovince')
  var startc = $('#zhidaFrom').attr('thecity')
  var starta = $('#zhidaFrom').attr('thearea')

  var endp = $('#zhidaTo').attr('theprovince')
  var endc = $('#zhidaTo').attr('thecity')
  var enda = $('#zhidaTo').attr('thearea')

  if (startjw) {
    var startj = startjw.split(',', 2)[0]
    var startw = startjw.split(',', 2)[1]
  }
  if (!startjw) {
    var startj = ''
    var startw = ''
  }

  var endjw = $('#zhidaTo').attr('thepos')
  if (endjw) {
    var endj = endjw.split(',', 2)[0]
    var endw = endjw.split(',', 2)[1]
  }
  if (!endjw) {
    var endj = ''
    var endw = ''
  }
  if (!startpcd) {
    startpcd = ''
  }
  if (!endpcd) {
    endpcd = ''
  }
  if (!startstreet) {
    startstreet = ''
  }
  if (!endstreet) {
    endstreet = ''
  }
  if (!startp) {
    startp = ''
  }
  if (!startc) {
    startc = ''
  }
  if (!starta) {
    starta = ''
  }
  if (!endp) {
    endp = ''
  }
  if (!endc) {
    endc = ''
  }
  if (!enda) {
    enda = ''
  }

  s1 =
    '/create/order?&start=' +
    startpcd +
    '&end=' +
    endpcd +
    '&startstreet=' +
    startstreet +
    '&endstreet=' +
    endstreet
  s2 =
    '&startj=' +
    startj +
    '&startw=' +
    startw +
    '&endj=' +
    endj +
    '&endw=' +
    endw +
    '&startp=' +
    startp +
    '&startc=' +
    startc +
    '&starta=' +
    starta +
    '&endp=' +
    endp +
    '&endc=' +
    endc +
    '&enda=' +
    enda
  console.log(s1 + s2)
  window.open(s1 + s2)
  //+
})

$('#order_02').click(function() {
  layer.msg('功能正在开发中，敬请期待')
  return
})
$('#order_03').click(function() {
  layer.msg('功能正在开发中，敬请期待')
  return
})
//零担下单 E
//运单查询 S
$('.ydh').click(function() {
  $('#yd_nr').val('001380')
  $('.ydh').css('display', 'none')
})

$('#yd_nr').keyup(function() {
  if ($('#yd_nr').val()) {
    console.log('nr')
    $('.ydh').css('display', 'none')
  }
  if (!$('#yd_nr').val()) {
    console.log('nr')
    $('.ydh').css('display', 'block')
  }
})

$('#yd_cx').click(function() {
  console.log($('#yd_nr').val())
  var num = $('#yd_nr').val()
  if (num) {
    window.open('/ydcx?&num=' + num)
  }
  if (!num) {
    alert('请先输入运单号查询！')
  }
})

//运单查询 E

//header车源搜索 S
$('#search_cheyuan').click(function() {
  var list1 = [],
    list2 = []
  $('#carLineFrom .select-item').each(function(i, e) {
    list1.push($(this).text())
  })
  var startp = list1[0]
  var startc = list1[1]
  var starta = list1[2]

  $('#carLineTo .select-item').each(function(i, e) {
    list2.push($(this).text())
  })
  var endp = list2[0]
  var endc = list2[1]
  var enda = list2[2]

  if (!startp) {
    startp = ''
  }
  if (!startc) {
    startc = ''
  }
  if (!starta) {
    starta = ''
  }
  if (!endp) {
    endp = ''
  }
  if (!endc) {
    endc = ''
  }
  if (!enda) {
    enda = ''
  }
  startp = encodeURI(startp)
  startc = encodeURI(startc)
  starta = encodeURI(starta)
  endp = encodeURI(endp)
  endc = encodeURI(endc)
  enda = encodeURI(enda)
  window.open(
    '/cheyuan?startp=' +
      startp +
      '&startc=' +
      startc +
      '&starta=' +
      starta +
      '&endp=' +
      endp +
      '&endc=' +
      endc +
      '&enda=' +
      enda
  )
})
//header车源搜索 E

//header货源搜索 S
$('#search_huoyuan').click(function() {
  var list1 = [],
    list2 = []
  $('#HuoyuanFrom .select-item').each(function(i, e) {
    list1.push($(this).text())
  })
  var startp = list1[0]
  var startc = list1[1]
  var starta = list1[2]

  $('#HuoyuanTo .select-item').each(function(i, e) {
    list2.push($(this).text())
  })
  var endp = list2[0]
  var endc = list2[1]
  var enda = list2[2]

  if (!startp) {
    startp = ''
  }
  if (!startc) {
    startc = ''
  }
  if (!starta) {
    starta = ''
  }
  if (!endp) {
    endp = ''
  }
  if (!endc) {
    endc = ''
  }
  if (!enda) {
    enda = ''
  }
  startp = encodeURI(startp)
  startc = encodeURI(startc)
  starta = encodeURI(starta)
  endp = encodeURI(endp)
  endc = encodeURI(endc)
  enda = encodeURI(enda)
  window.open(
    '/huoyuan?startp=' +
      startp +
      '&startc=' +
      startc +
      '&starta=' +
      starta +
      '&endp=' +
      endp +
      '&endc=' +
      endc +
      '&enda=' +
      enda
  )
})
//header货源搜索 E

//header专线搜索 S
$('#search_wlLine').click(function() {
  var list1 = [],
    list2 = []
  $('#wlLineFrom .select-item').each(function(i, e) {
    list1.push($(this).text())
  })
  var startp = list1[0]
  var startc = list1[1]
  var starta = list1[2]

  $('#wlLineTo .select-item').each(function(i, e) {
    list2.push($(this).text())
  })
  var endp = list2[0]
  var endc = list2[1]
  var enda = list2[2]

  if (!startp) {
    startp = ''
  }
  if (!startc) {
    startc = ''
  }
  if (!starta) {
    starta = ''
  }
  if (!endp) {
    endp = ''
  }
  if (!endc) {
    endc = ''
  }
  if (!enda) {
    enda = ''
  }
  startp = encodeURI(startp)
  startc = encodeURI(startc)
  starta = encodeURI(starta)
  endp = encodeURI(endp)
  endc = encodeURI(endc)
  enda = encodeURI(enda)
  window.open(
    '/zhuanxian/list?startp=' +
      startp +
      '&startc=' +
      startc +
      '&starta=' +
      starta +
      '&endp=' +
      endp +
      '&endc=' +
      endc +
      '&enda=' +
      enda
  )
})
//header专线搜索 E

//门户物流专线 S
function process_01(vo1) {
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url:
      '/api/aflc-portal/portalt/aflcRecommendTransportRange/v1/gatewayHomePageList',
    dataType: 'json',
    data: JSON.stringify({
      currentPage: 1,
      pageSize: 100,
      vo: vo1 //JSON.stringify({})
    }),
    success: function(res) {
      $('#js001 li')
        .not(':eq(0)')
        .remove()
      if (!res.data || res.data == '') {
        $('.none_zx').css('display', 'block')
        $('.scroll_nr2').css('display', 'none')
        return
      }
      var datas = res.data
      for (var i = 0; i < datas.length; i++) {
        var lightPrice = datas[i].lightPrice
        var heavyPrice = datas[i].heavyPrice

        var id = datas[i].id
        var publishId = datas[i].publishId
        var account = datas[i].account
        var startCity = datas[i].startCity

        var startArea = datas[i].startArea
        var endCity = datas[i].endCity
        var endArea = datas[i].endArea

        if (startCity == null) {
          startCity = ''
          console.log('startCity')
        }
        if (startArea == null) {
          startArea = ''
          console.log('startArea')
        }
        if (endCity == null) {
          endCity = ''
          console.log('endCity')
        }
        if (endArea == null) {
          endArea = ''
          console.log('endArea')
        }
        var start = startCity + startArea
        var end = endCity + endArea
        if (end && end.length > 8) {
          end = end.substring(0, 8) + '..'
        }
        var publishName = datas[i].publishName
        var transportAging = datas[i].transportAging
        var transportAgingUnit = datas[i].transportAgingUnit.replace('多', '')
        var url = '/zhuanxian/detail?id=' + id + '&publishId=' + publishId
        $('#nr_a01').attr('href', url)
        $('#nr_a02').attr('href', url)
        $('#nr_a03').attr('href', url)
        $('#nr_a04').attr('href', url)
        $('#nr_a05').attr('href', url)
        $('#nr001').html(start)
        if (!start) {
          $('#nr001').html('')
        }

        $('#nr001_2').html(end)
        if (!end) {
          $('#nr001_2').html('')
        }

        $('#nr002').html(heavyPrice)
        $('#nr003').html(lightPrice)
        $('#nr004').html(transportAging + transportAgingUnit)
        var companyId = datas[i].companyId
        $('#nr005').attr('href', '/member/' + companyId + '')
        $('#nr006').html(publishName)
        var s1 = '<li>'
        var s2 = $('#js001 li').html()
        var s3 = '</li>'
        $('#js001').append(s1 + s2 + s3)
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
//process_01({});
//门户物流专线 E

//门户车源信息 S
function process_02(vo2) {
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/api/aflc-portal/portalt/aflcCarInfo/v1/getPortalHomePageList',
    dataType: 'json',
    data: JSON.stringify({
      currentPage: 1,
      pageSize: 100,
      vo: vo2 //JSON.stringify({})
    }),
    success: function(res) {
      $('#js003 li')
        .not(':eq(0)')
        .remove()
      if (!res.data || res.data.list == '') {
        $('.none_cy').css('display', 'block')
        $('.scroll_nr3').css('display', 'none')
        return
      }
      var datas = res.data.list
      for (var i = 0; i < datas.length; i++) {
        var id = datas[i].id
        var driverId = datas[i].driverId

        var strartAddress = datas[i].strartAddress
        var endAddress = datas[i].endAddress
        if (strartAddress.length > 3) {
          if (strartAddress.indexOf('自治区') != -1) {
            strartAddress = strartAddress.split('自治区')[1]
          } else if (strartAddress.indexOf('特别行政区') != -1) {
            strartAddress = strartAddress.substring(0, 2)
          } else {
            var strartAddress = strartAddress.substring(3, 10)
          }
        }
        if (endAddress.length > 3) {
          if (endAddress.indexOf('特别行政区') != -1) {
            endAddress = endAddress.substring(0, 2)
          } else if (endAddress.indexOf('自治区') != -1) {
            endAddress = endAddress.split('自治区')[1]
          } else {
            var endAddress = endAddress.substring(3, 10)
          }
        }

        var carNum = datas[i].carNum
        if (carNum && carNum.length > 2) {
          var carNum = carNum.substring(0, 2) + '***' + carNum.substring(6, 10)
        }
        var carTypeName = datas[i].carTypeName
        var carLength = datas[i].carLength
        var carLoad = datas[i].carLoad
        var expectPrice = datas[i].expectPrice
        var arcurl = '/cyxx/2018/0508/5.html?id=' + id + '&driverId=' + driverId
        $('#nr_a11').attr('href', arcurl)
        $('#nr_a12').attr('href', arcurl)
        $('#nr_a13').attr('href', arcurl)
        $('#nr_a14').attr('href', arcurl)
        $('#nr_a15').attr('href', arcurl)
        $('#nr_a16').attr('href', arcurl)
        $('#nr_a17').attr('href', arcurl)
        $('#nr021').html(strartAddress)
        $('#nr021_2').html(endAddress)
        $('#nr022').html(carNum)
        $('#nr023').html(carTypeName)
        $('#nr024').html(carLength)
        $('#nr025').html(carLoad)
        $('#nr026').html(expectPrice + '元')
        if (!expectPrice) {
          $('#nr026').html('面议')
        }
        var s1 = '<li>'
        var s2 = $('#js003 li').html()
        var s3 = '</li>'
        $('#js003').append(s1 + s2 + s3)
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
//process2({});
//门户车源信息 E

//门户货源信息 S
function process_03(vo3) {
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/api/aflc-portal/order/fclOrder/v1/getPortalHomePageList',
    dataType: 'json',
    data: JSON.stringify({
      currentPage: 1,
      pageSize: 100,
      vo: vo3 //JSON.stringify({})
    }),
    success: function(res) {
      $('#js004 li')
        .not(':eq(0)')
        .remove()
      if (!res.data) {
        $('.none_hy').css('display', 'block')
        $('.scroll_nr1').css('display', 'none')
        return
      }
      var datas = res.data.list
      for (var i = 0; i < datas.length; i++) {
        var id = datas[i].id
        var shipperId = datas[i].shipperId

        var startProvinceCityArea0 = datas[i].startProvinceCityArea
        var endProvinceCityArea0 = datas[i].endProvinceCityArea
        var startProvinceCityArea = startProvinceCityArea0.substring(3, 10)
        var endProvinceCityArea = endProvinceCityArea0.substring(3, 10)
        if (startProvinceCityArea0.indexOf('自治区') != -1) {
          startProvinceCityArea = startProvinceCityArea0.split('自治区')[1]
        }
        if (endProvinceCityArea0.indexOf('自治区') != -1) {
          endProvinceCityArea = endProvinceCityArea0.split('自治区')[1]
        }

        var orderTypeName = datas[i].orderTypeName
        var goodsName = datas[i].goodsName.split(',')[0]
        var goodsWeight = datas[i].goodsWeight
        var goodsVolume = datas[i].goodsVolume
        var shipperName = datas[i].shipperName
        var account = datas[i].account
        var createTime = datas[i].createTime.substring(5, 10)
        var url =
          '/huoyuan/2018/0508/2.html?id=' + id + '&shipperId=' + shipperId
        $('#nr_a31').attr('href', url)
        var companyId = datas[i].companyId
        $('#nr_a32').attr('href', '/member/' + companyId + '')
        $('#nr_a33').attr('href', url)
        $('#nr_a34').attr('href', url)
        $('#nr_a35').attr('href', url)
        $('#nr_a36').attr('href', url)
        $('#nr_a37').attr('href', url)
        $('#nr_a38').attr('href', url)
        $('#nr031').html(startProvinceCityArea)
        $('#nr031_2').html(endProvinceCityArea)
        $('#nr032').html(shipperName)
        $('#nr033').html(goodsName)
        $('#nr034').html(goodsWeight + '公斤')
        $('#nr035').html(goodsVolume + '方')
        $('#nr036').html(orderTypeName)
        $('#nr037').html(createTime)
        var s1 = '<li>'
        var s2 = $('#js004 li').html()
        var s3 = '</li>'
        $('#js004').append(s1 + s2 + s3)
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
//process3({"queryType":"2"});
//门户货源信息 E

//门户物流公司推荐 S
function wlgs_tj() {
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/api/aflc-portal/portalt/aflcLogisticsCompany/v1/recommendCompanys',
    dataType: 'json',
    data: JSON.stringify({
      currentPage: 1,
      pageSize: 8,
      vo: {} //JSON.stringify({})
    }),
    success: function(res) {
      $('#wlgs_tj1 li')
        .not(':eq(0)')
        .remove()
      $('#wlgs_tj2 li')
        .not(':eq(0)')
        .remove()
      if (!res.data || res.data == '') {
        return
      }
      var datas = res.data.list
      for (var i = 0; i < 3; i++) {
        var companyName = datas[i].companyName
        var account = datas[i].account
        var companyId = datas[i].companyId

        // $('#tj_01').attr('href', '/member/' + companyId + '')
        // $('#tj_02').html(i + 1)
        var imgsrc = '/images/index/wlgs_tj_0' + i + '.png'
        $('#tj_03').attr('src', imgsrc)
        $('#tj_04').attr('href', '/member/' + companyId + '')
        $('#tj_04').html(companyName)
        var s1 = '<li class="arank">'
        var s2 = $('#wlgs_tj1 li').html()
        var s3 = '</li>'
        $('#wlgs_tj1').append(s1 + s2 + s3)
        if (datas.length <= i + 1) {
          return
        }
      }

      for (var i = 3; i < datas.length; i++) {
        if (datas.length < 3) {
          return
        }
        var companyName = datas[i].companyName
        var account = datas[i].account

        var companyId = datas[i].companyId
        $('#tj_05').attr('href', '/member/' + companyId + '')
        $('#tj_06').html(i + 1)
        $('#tj_07').html(companyName)
        $('#tj_07').attr('href', '/member/' + companyId + '')
        var s1 = '<li class="arank arank2">'
        var s2 = $('#wlgs_tj2 li').html()
        var s3 = '</li>'
        $('#wlgs_tj2').append(s1 + s2 + s3)
      }

      $('#wlgs_tj1 li:nth-child(2) .avatar').css('background-color', '#f65050')
      $('#wlgs_tj1 li:nth-child(3) .avatar').css('background-color', '#ff8547')
      $('#wlgs_tj1 li:nth-child(4) .avatar').css('background-color', '#ffac38')
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
// wlgs_tj()
//门户物流公司推荐 E

//门户物流园区列表S
function wlyq() {
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/api/aflc-portal/portalt/aflclogisticspark/v1/Gateway/Gatewaylist',
    dataType: 'json',
    async: false,
    data: JSON.stringify({
      currentPage: 1,
      pageSize: 9,
      vo: { locationProvince: '广东省', locationCity: '广州市' } //JSON.stringify({})
    }),
    success: function(res) {
      $('#js_wlyq li')
        .not(':eq(0)')
        .remove()

      if (!res.data || !res.data.total) {
        console.log('内容为空')

        //$(".box").css("display","none")
        //$(".list_none").css("display","block")
        return
      }
      var datas = res.data.list

      for (var i = 0; i < datas.length; i++) {
        var id = datas[i].id
        var parkName = datas[i].parkName
        var parkAddress = datas[i].parkAddress
        if (parkAddress && parkAddress.length > 17) {
          parkAddress = parkAddress.substring(0, 17) + '..'
        }
        var transportNumber = datas[i].transportNumber
        if (!transportNumber) {
          transportNumber = 0
        }

        var url = '/wlyq/2018/1120/392.html?id=' + id
        $('#wlyq_a1').attr('href', url)
        $('#wlyq_a2').attr('href', url)
        $('#wlyq_a3').attr('href', url)
        $('#wlyq_a4').attr('href', url)
        $('#wlyq_name').html(parkName)
        $('#wlyq_num').html(transportNumber)
        $('#wlyq_postion').html(parkAddress)

        var s1 = '<li>'
        var s2 = $('#js_wlyq li').html()
        var s3 = '</li>'
        $('#js_wlyq').append(s1 + s2 + s3)
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
// wlyq()
//门户物流园区列表E

//门户物流公司列表S
function wlgs(vo4) {
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/api/aflc-portal/portalt/aflcLogisticsCompany/v1/listCompanys',
    dataType: 'json',
    data: JSON.stringify({
      currentPage: 1,
      pageSize: 100,
      vo: vo4 //JSON.stringify({})
    }),
    success: function(res) {
      $('#js_wlgs li')
        .not(':eq(0)')
        .remove()

      if (!res.data || !res.data.totalCount) {
        console.log('内容为空')
        $('.none_wlgs').css('display', 'block')
        $('.scroll_nr4').css('display', 'none')
        return
      }
      var datas = res.data.list

      for (var i = 0; i < datas.length; i++) {
        var account = datas[i].account
        var companyName = datas[i].companyName
        var belongCityName = datas[i].belongCityName
        if (belongCityName && belongCityName.length > 12) {
          belongCityName = belongCityName.substring(0, 12) + '..'
        }
        if (companyName && companyName.length > 8) {
          companyName = companyName.substring(0, 8) + '..'
        }

        if (datas[i].productService) {
          var reg0 = new RegExp(',', 'g')
          var reg1 = new RegExp('"', 'g')
          var productService0 = datas[i].productService.replace(reg0, ' ')
          var productService1 = productService0.replace(reg1, '')
          var productService2 = productService1.replace('[', '')
          var productService = productService2.replace(']', '')

          if (productService.length > 18) {
            productService = productService.substring(0, 18) + '..'
          }
        }

        if (!datas[i].productService) {
          var productService = ''
        }
        var companyId = datas[i].companyId
        $('#wlgs_a').attr('href', '/member/' + companyId + '')
        $('#wlgs_a1').attr('href', '/member/' + companyId + '')
        $('#wlgs_a2').attr('href', '/member/' + companyId + '')
        $('#wlgs_a3').attr('href', '/member/' + companyId + '')
        $('#wlgs_a4').attr('href', '/member/' + companyId + '')
        $('#wlgs_name').html(companyName)
        $('#wlgs_postion').html(belongCityName)
        $('#wlgs_jyfw').html(productService)

        var s1 = '<li>'
        var s2 = $('#js_wlgs li').html()
        var s3 = '</li>'
        $('#js_wlgs').append(s1 + s2 + s3)
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}

//门户物流公司列表E
