//获取参数的值
function GetQueryString(e) {
  var t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)'),
    s = window.location.search.substr(1).match(t)
  return null != s ? unescape(s[2]) : null
}

var aid = GetQueryString('id')

var shipperId = GetQueryString('shipperId')

//找专线/货源/车源 S
$('.arc_input3').click(function() {
  var search_type = $('#search_type option:selected').attr('name')
  var start = $('.arc_input1').val()
  var end = $('.arc_input2').val()
  console.log(
    '搜索类型：' + search_type + '出发地：' + start + '到达地：' + end
  )
  if (search_type == 'zx') {
    window.open('/zhuanxian/list?start=' + start + '&end=' + end)
  }
  if (search_type == 'huo') {
    window.open('/huoyuan?start=' + start + '&end=' + end)
  }
  if (search_type == 'che') {
    window.open('/cheyuan?start=' + start + '&end=' + end)
  }
})

//找专线/货源/车源 E

//货源其他求货信息S
function process02(current) {
  var totalPage = 8
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url:
      'http://www.28china.cn/api/aflc-portal/order/fclOrder/v1/getOtherInfoList',
    dataType: 'json',
    async: false,
    data: JSON.stringify({
      currentPage: current,
      pageSize: 5,
      vo: {
        id: aid,
        shipperId: shipperId,
        queryType: '2'
      } //JSON.stringify({})
    }),
    success: function(res) {
      $('#arc_nr2 .arc_list_item')
        .not(':eq(0)')
        .remove()
      if (res.data) {
        totalPage = res.data.totalPage
        console.log(totalPage)
      }

      if (!res.data || !res.data.totalCount) {
        console.log('内容为空')
        $('.box').css('display', 'none')
        $('#arc_nr2').html("<div class='arc_none'>暂无其他求车信息</div>")
      }
      var datas = res.data.list

      for (var i = 0; i < datas.length; i++) {
        var id = datas[i].id
        var shipperId = datas[i].shipperId
        var startProvinceCityArea = datas[i].startProvinceCityArea
        if (startProvinceCityArea) {
          startProvinceCityArea = startProvinceCityArea.substring(0, 10)
        }
        var endProvinceCityArea = datas[i].endProvinceCityArea
        if (endProvinceCityArea) {
          endProvinceCityArea = endProvinceCityArea.substring(0, 10)
        }
        var goodsName = datas[i].goodsName
        var goodsNum = datas[i].goodsNum
        var goodsWeight = datas[i].goodsWeight
        var goodsVolume = datas[i].goodsVolume
        var createTime = datas[i].createTime.substring(0, 16)
        var url =
          '/huoyuan/2018/0508/2.html?id=' + id + '&shipperId=' + shipperId
        $('#nr091').html(startProvinceCityArea + '	&rarr;' + endProvinceCityArea)
        if (!startProvinceCityArea || !endProvinceCityArea) {
          $('#nr091').html('')
        }
        $('#nr092').html(goodsName)
        $('#nr093').html(goodsNum)
        $('#nr094').html(goodsWeight)
        $('#nr095').html(goodsVolume)
        $('#nr096').html(createTime)
        $('#nr097').attr('href', url)
        $('#nr090').attr('href', url)
        var s1 = '<div class="arc_list_item">'
        var s2 = $('#arc_nr2 .arc_list_item').html()
        var s3 = '</div>'
        $('#arc_nr2').append(s1 + s2 + s3)
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
  console.log('最终总页数：' + totalPage)
  return totalPage
}
//process02()
//货源其他求货信息  E

//路线其他求货信息S
function process03(startCity, endCity) {
  $.ajax({
    type: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    url:
      'http://www.28china.cn/api/aflc-portal/order/fclOrder/v1/getOtherOrderList',
    dataType: 'json',
    data: JSON.stringify({
      currentPage: 1,
      pageSize: 7,
      vo: {
        shipperId: shipperId,
        queryType: '2',
        startAddress: startCity,
        endAddress: endCity
      } //JSON.stringify({})
    }),
    success: function(res) {
      if (res.data) {
        var datas = res.data.list

        for (var i = 0; i < datas.length; i++) {
          var id = datas.id
          var shipperId = datas[i].shipperId
          var startAddress = datas[i].startAddress.substring(3, 9)
          var endAddress = datas[i].endAddress.substring(3, 9)
          var wlName = datas[i].wlName
          var account = datas[i].account
          var goodsName = datas[i].goodsName
          var goodsNum = datas[i].goodsNum
          if (!goodsNum) {
            goodsNum = 0
          }
          var goodsWeight = datas[i].goodsWeight
          var goodsVolume = datas[i].goodsVolume
          var createTime = datas[i].createTime.substring(0, 19)
          var url =
            '/huoyuan/2018/0508/2.html?id=' + aid + '&shipperId=' + shipperId
          $('#nr0911').html(startAddress)
          $('#nr0912').html(endAddress)
          $('#nr0913').html(wlName)
          $('#nr0913').attr('href', '/member/' + companyId + '')
          $('#nr0914').html(goodsName)
          $('#nr0915').html(goodsWeight + '吨')
          $('#nr0916').html(goodsVolume + '立方米')
          $('#nr0917').html(goodsNum + '件')
          if (!goodsNum) {
            $('#nr0917').html('')
          }
          $('#nr0918').attr('href', url)
          $('#nr0910').attr('href', url)
          var s1 = '<div class="tj_list">'
          var s2 = $('.tj_list').html()
          var s3 = '</div>'
          $('#js011').append(s1 + s2 + s3)
        }
      }
      console.log('长度' + $('.tj_list').length)
      if ($('.tj_list').length >= 10) {
        $('.arc_bottom_more').css('display', 'block')
        $('#arc_bottom_more').attr(
          'href',
          '/huoyuan?start=' + startCity + '&end=' + endCity
        )
      }
      if ($('.tj_list').length == 1 || !res.data) {
        $('.arc_bottom').css('display', 'none')
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
//process03()
//路线其他求货信息  E
