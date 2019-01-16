function getcode(name) {
  var code = ''
  $.ajax({
    type: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    //url:"/api/aflc-portal/portalt/aflcPointNetwork/v1/listDetailPointNetwork",
    url: '../js/province.json',
    dataType: 'json',
    async: false,
    data: JSON.stringify({
      currentPage: 1,
      pageSize: 6,
      vo: {
        //"companyId":publishId
      } //JSON.stringify({})
    }),
    success: function(res) {
      var datas = res

      for (var i = 0; i < datas.length; i++) {
        var name0 = datas[i].name
        code0 = datas[i].code
        if (name == name0) {
          code = code0
        }
      }
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
  console.log(code)
  return code
}
//getcode("湖北省");

function getcity_zx(code, startCity) {
  return $.ajax({
    type: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    url:
      '/api/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code=' +
      code,

    success: function(res) {
      var datas = res.data
      console.log('城市数量' + datas.length)
      $('#arc_city').html('')
      //更多城市 S
      if (datas.length > 14) {
        $('.arc_top2_3').css('display', 'block')
        for (var i = 14; i < datas.length; i++) {
          var name = datas[i].name
          var code = datas[i].code
          var name1 = name.substring(0, 2)
          var s1 =
            '<a href="#" name="' + name + '" ><span>' + name1 + '</span></a>'
          $('#city_box').append(s1)
        }
        $('#city_box a').each(function() {
          $(this).click(function() {
            console.log('切换到目的地城市')
            //var a = $(this).html();
            var end = $(this).attr('name')
            //console.log(a);
            console.log(end)
            window.open('/cheyuan?startc=' + startCity + '&endc=' + end)
          })
        })
      }
      //更多城市 E

      for (var i = 0; i < 14 && i < datas.length; i++) {
        //var datas = res.data;
        console.log('城市：' + datas[0].name)
        var name = datas[i].name
        var code = datas[i].code
        var name1 = name.substring(0, 2)
        var s1 =
          '<a href="#" name="' + name + '" ><span>' + name1 + '</span></a>'
        $('#arc_city').append(s1)
      }
      $('#arc_city a:eq(0) span').html('直达' + datas[0].name.substring(0, 2))

      $('#arc_city a').each(function() {
        $(this).click(function() {
          console.log('切换到目的地城市')
          //var a = $(this).html();
          var end = $(this).attr('name')
          //console.log(a);
          console.log(end)
          window.open('/cheyuan?startc=' + startCity + '&endc=' + end)
        })
      })
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
//getcity_zx();

function getcity_huo(code, startCity) {
  return $.ajax({
    type: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    url:
      '/api/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code=' +
      code,

    success: function(res) {
      var datas = res.data
      $('#arc_city').html('')

      //更多城市 S
      if (datas.length > 14) {
        $('.arc_top2_3').css('display', 'block')
        for (var i = 14; i < datas.length; i++) {
          var name = datas[i].name
          var code = datas[i].code
          var name1 = name.substring(0, 2)
          var s1 =
            '<a href="#" name="' + name + '" ><span>' + name1 + '</span></a>'
          $('#city_box').append(s1)
        }
        $('#city_box a').each(function() {
          $(this).click(function() {
            console.log('切换到目的地城市')
            //var a = $(this).html();
            var end = $(this).attr('name')
            //console.log(a);
            console.log(end)
            window.open('/cheyuan?start=' + startCity + '&end=' + end)
          })
        })
      }
      //更多城市 E

      for (var i = 0; i < 14 && i < datas.length; i++) {
        var name = datas[i].name
        var code = datas[i].code
        var name1 = name.substring(0, 2)
        var s1 =
          '<a href="#" name="' + name + '" ><span>' + name1 + '</span></a>'
        $('#arc_city').append(s1)
      }
      $('#arc_city a:eq(0) span').html('直达' + datas[0].name.substring(0, 2))

      $('#arc_city a').each(function() {
        $(this).click(function() {
          console.log('切换到目的地城市')
          //var a = $(this).html();
          var end = $(this).attr('name')
          //console.log(a);
          console.log(end)
          window.open('/cheyuan?start=' + startCity + '&end=' + end)
        })
      })
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
//getcity_huo();

function getcity_che(code, startCity) {
  return $.ajax({
    type: 'get',
    headers: {
      'Content-Type': 'application/json'
    },
    url:
      '/api/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code=' +
      code,

    success: function(res) {
      console.log(res)
      var datas = res.data
      $('#arc_city').html('')

      //更多城市 S
      if (datas.length > 14) {
        $('.arc_top2_3').css('display', 'block')
        for (var i = 14; i < datas.length; i++) {
          var name = datas[i].name
          var code = datas[i].code
          var name1 = name.substring(0, 2)
          var s1 =
            '<a href="#" name="' + name + '" ><span>' + name1 + '</span></a>'
          $('#city_box').append(s1)
        }
        $('#city_box a').each(function() {
          $(this).click(function() {
            console.log('切换到目的地城市')
            //var a = $(this).html();
            var end = $(this).attr('name')
            //console.log(a);
            console.log(end)
            window.open(
              '/plus/list.php?tid=2&start=' + startCity + '&end=' + end
            )
          })
        })
      }
      //更多城市 E

      for (var i = 0; i < 14 && i < datas.length; i++) {
        var name = datas[i].name
        var code = datas[i].code
        var name1 = name.substring(0, 2)
        var s1 =
          '<a href="#" name="' + name + '" ><span>' + name1 + '</span></a>'
        $('#arc_city').append(s1)
      }
      $('#arc_city a:eq(0) span').html('直达' + datas[0].name.substring(0, 2))

      $('#arc_city a').each(function() {
        $(this).click(function() {
          console.log('切换到目的地城市')
          //var a = $(this).html();
          var end = $(this).attr('name')
          //console.log(a);
          console.log(end)
          window.open('/cheyuan?start=' + startCity + '&end=' + end)
        })
      })
    },
    error: function(err) {
      console.log(err.responseText)
    }
  })
}
//getcity_che();
