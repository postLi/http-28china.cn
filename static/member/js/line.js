//获取参数的值
function GetQueryString(e) {
  var t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)'),
    s = window.location.search.substr(1).match(t)
  return null != s ? unescape(s[2]) : null
}
//var uid=GetQueryString("uid");
var uid = myurl.split(/member\/|-|.html/)[1]

//获取参数的值
function GetUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = encodeURI(window.location.search)
    .substr(1)
    .match(reg)
  if (r != null) return unescape(r[2])
  return null
}
//当前url追加参数 UrlUpdateParams(window.location.href, "mid", 11111)
function UrlUpdateParams(url, name, value) {
  var r = url
  if (r != null && r != 'undefined' && r != '') {
    value = encodeURIComponent(value)
    var reg = new RegExp('(^|)' + name + '=([^&]*)(|$)')
    var tmp = name + '=' + value
    if (url.match(reg) != null) {
      r = url.replace(eval(reg), tmp)
    } else {
      if (url.match('[?]')) {
        r = url + '&' + tmp
      } else {
        r = url + '?' + tmp
      }
    }
  }
  return r
}

var startp1 = GetUrlParam('startp')
var endp1 = GetUrlParam('endp')
var startc1 = GetUrlParam('startc')
var endc1 = GetUrlParam('endc')
var starta1 = GetUrlParam('starta')
var enda1 = GetUrlParam('enda')

var orderNumber = GetUrlParam('orderNumber')
var transportAging = GetUrlParam('transportAging')
var weigthPrice = GetUrlParam('weigthPrice')
var lightPrice = GetUrlParam('lightPrice')

var startp = decodeURI(startp1)
var endp = decodeURI(endp1)
var startc = decodeURI(startc1)
var endc = decodeURI(endc1)
var starta = decodeURI(starta1)
var enda = decodeURI(enda1)

//var authStatus= decodeURI(authStatus1);

var orderNumber = decodeURI(orderNumber)
var transportAging = decodeURI(transportAging)
var weigthPrice = decodeURI(weigthPrice)
var lightPrice = decodeURI(lightPrice)

vo = new Object()
vo.startProvince = startp
vo.startCity = startc
vo.startArea = starta
vo.endProvince = endp
vo.endCity = endc
vo.endArea = enda

var obj2 = new Object()
obj2 = lineId(1)
vo.companyId = obj2.companyId

if (!startp || startp == 'null') {
  startp = ''
  delete vo.startProvince
}
if (!startc || startc == 'null') {
  startc = ''
  delete vo.startCity
}
if (!starta || starta == 'null') {
  starta = ''
  delete vo.startArea
}
if (!endp || endp == 'null') {
  endp = ''
  delete vo.endProvince
}
if (!endc || endc == 'null') {
  endc = ''
  delete vo.endCity
}
if (!enda || enda == 'null') {
  enda = ''
  delete vo.endArea
}

if (!orderNumber || orderNumber == 'null') {
  orderNumber = ''
  delete vo.orderNumber
}
if (!transportAging || transportAging == 'null') {
  transportAging = ''
  delete vo.transportAging
}
if (!weigthPrice || weigthPrice == 'null') {
  weigthPrice = ''
  delete vo.weigthPrice
}
if (!lightPrice || lightPrice == 'null') {
  lightPrice = ''
  delete vo.lightPrice
}

$('#wlLineFrom input').citypicker({
  province: startp,
  city: startc,
  district: starta
})
$('#wlLineTo input').citypicker({
  province: endp,
  city: endc,
  district: enda
})

//排序点击 S
$('#seq0').click(function() {
  console.log('clear排序')
  delete vo.orderNumber
  delete vo.transportAging
  delete vo.weigthPrice
  delete vo.lightPrice
  line(1)
})
$('#seq1').click(function() {
  console.log('orderNumber排序')
  delete vo.orderNumber
  delete vo.transportAging
  delete vo.weigthPrice
  delete vo.lightPrice
  delete vo.defaultSort
  vo.orderNumber = 1
  line(1)
})
$('#seq2').click(function() {
  console.log('transportAging排序')
  delete vo.orderNumber
  delete vo.transportAging
  delete vo.weigthPrice
  delete vo.lightPrice
  delete vo.defaultSort
  vo.transportAging = 1
  line(1)
})
$('#seq3').mouseenter(function() {
  console.log('弹出价格排序')
  $('#tj_price').css('display', 'block')
})
$('#seq3').mouseleave(function() {
  $('#tj_price').css('display', 'none')
})
$('#tj_price').mouseenter(function() {
  $('#tj_price').css('display', 'block')
})
$('#tj_price').mouseleave(function() {
  $('#tj_price').css('display', 'none')
})
$('#tj_price2').click(function() {
  $('#tj_price').css('display', 'none')
  console.log('weigthPrice排序')
  delete vo.orderNumber
  delete vo.transportAging
  delete vo.weigthPrice
  delete vo.lightPrice
  delete vo.defaultSort
  vo.weigthPrice = 1
  line(1)
})
$('#tj_price1').click(function() {
  $('#tj_price').css('display', 'none')
  console.log('lightPrice排序')
  delete vo.orderNumber
  delete vo.transportAging
  delete vo.weigthPrice
  delete vo.lightPrice
  delete vo.defaultSort
  vo.lightPrice = 1
  line(1)
})
//排序点击 E

//专线搜索 S
$('#search_wlLine1').click(function() {
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
  window.location =
    uid +
    '-line.html?startp=' +
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
})

$('#search_wlLine2').click(function() {
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
    '/plus/list.php?tid=4&startp=' +
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

//专线搜索 E

//通过账号获取专线公司id S
function lineId(currentPage) {
  var companyId
  var totalPage = 0
  $.ajax({
    type: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    url:
      '/api/aflc-portal/portalt/aflcLogisticsCompany/v1/findByAccount/' + uid,
    async: false,
    success: function(res) {
      var datas = res.data
      var id = datas.id
      if (id) {
        companyId = id
        totalPage = line(currentPage)
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
  console.log('totalPage:' + totalPage)
  return { totalPage: totalPage, companyId: companyId }
}
//通过账号获取专线公司id E

//物流专线 栏目列表S
function line(currentPage) {
  var totalPage = 1
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url: '/api/aflc-portal/portalt/aflcTransportRange/v1/findCompanyRanges',
    dataType: 'json',
    async: false,
    data: JSON.stringify({
      currentPage: currentPage,
      pageSize: 10,
      vo: vo //JSON.stringify({})
    }),
    success: function(res) {
      $('#js003 .line_item')
        .not(':eq(0)')
        .remove()
      if (!res.data || res.data.list == '') {
        $('.line_none').css('display', 'block')
        return
      }

      totalPage = res.data.totalPage
      console.log(totalPage)

      var datas = res.data.list
      for (var i = 0; i < datas.length; i++) {
        var plength = datas[i].rangePrices.length
        console.log(plength)
        for (var j = 0; j < plength; j++) {
          var qhjg
          var zhjg
          var ptype
          var startVolume = datas[i].rangePrices[j].startVolume
          if (startVolume == 0) {
            ptype = datas[i].rangePrices[j].type
            if (ptype == 0) {
              qhjg = datas[i].rangePrices[j].discountPrice
            }
            if (ptype == 1) {
              zhjg = datas[i].rangePrices[j].discountPrice
            }
          }
        }

        var id = datas[i].id
        var publishId = datas[i].publishId
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
        if (start && start.length > 6) {
          start = start.substring(0, 6) + '..'
        }
        if (end && end.length > 6) {
          end = end.substring(0, 6) + '..'
        }
        var transportAging = datas[i].transportAging
        var transportAgingUnit = datas[i].transportAgingUnit
        var lowerPrice = datas[i].lowerPrice
        var startLocationContacts = datas[i].startLocationContacts
        var startLocationContactsMobile = datas[i].startLocationContactsMobile
        var arcurl =
          '/wlzx/2018/0509/7.html?id=' + id + '&publishId=' + publishId
        var orderurl =
          '/member/' +
          uid +
          '.html?action=order' +
          '&id=' +
          id +
          '&publishId=' +
          publishId
        $('#fahuo').attr('onclick', "window.open('" + orderurl + "')")
        $('#nr021').attr('href', arcurl)
        $('#nr029').attr('href', arcurl)
        $('#nr022').html(start)
        $('#nr023').html(end)
        $('#nr024').html(zhjg)
        $('#nr025').html(transportAging + transportAgingUnit)
        if (!transportAging || !transportAgingUnit) {
          $('#nr025').html('暂无')
        }
        $('#nr026').html(qhjg)
        $('#nr027').html(lowerPrice)
        if (!lowerPrice || lowerPrice == 0) {
          $('#nr027').html('面议')
        }
        $('#nr0210').attr('href', arcurl)
        var s1 = '<div class="line_item">'
        var s2 = $('.line_item').html()
        var s3 = '</div>'
        $('#js003').append(s1 + s2 + s3)
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
  return totalPage
}
//process02();
//物流专线栏目列表 E
