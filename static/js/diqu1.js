// 获取参数的值

function GetQueryString(e) {
  var t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)'),
    s = window.location.search.substr(1).match(t)
  return null != s ? unescape(s[2]) : null
}

function GetUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = encodeURI(window.location.search)
    .substr(1)
    .match(reg)
  if (r != null) return unescape(r[2])
  return null
}

var myurl = window.location.href
if (location.href.indexOf('?') == -1) {
  myurl = location.href + '?'
}
var code = GetQueryString('code')
// 行政数据
var REGIONSDATA = []
// 一级城市数据
var REGIONSDATA_CITY = []
// 被选中的数据
var REGIONSDATA_SELECTED_DATA = {}
function getCityNameByCode(code) {
  var find = ''
  $.each(REGIONSDATA, function(index, ele) {
    if (el.code === code) {
      find = el
    }
  })
  return find || code
}
// console.log(code)

// 专线数据字典 S

function cx01() {
  return $.getJSON('/js/regions.json').done(function(res) {
    REGIONSDATA = res
    // console.log(res, 'resresresres')
    var datas = []
    var childDatas = []
    var childInfo = []
    $.each(res, function(inx, el) {
      if (el.level === 1) {
        datas.push(el)
      }
      if (el.level === 2) {
        childDatas.push(el)
      }
      // console.log(el.code == el.parent_code, 'nameddddd')
    })
    // $.each(datas,function (index, el) {
    //   $.each(childDatas,function (index, item) {
    //     if(el.code ==item.parent_code){
    //       console.log(item,'item')
    //       childInfo.push(item)
    //     }
    //   })
    // })

    // console.log(childInfo,'childInfo')
    // console.log(childDatas, 'childDatas')
    REGIONSDATA_CITY = datas
    // console.log(REGIONSDATA_CITY, 'REGIONSDATA_CITY')
    renderDropdownList(datas, true)
    // 初始化横向的导航
    // cx02(null)
    // 初始化页面
    detectWhereYouFrom()
    //初始化
    var s1 = ''

    // s1 +=
    //   '<span style="width: 33%; text-align: center;display: inline-block;">不限</span>'

    for (var i = 0; i < datas.length; i++) {
      var name = datas[i].alias
      var code = datas[i].code
      // var name1 = name.substring(0, 2)

      s1 +=
        '<span ' +
        'class="spanclass"' +
        'data-pinyin="' +
        datas[i].pinyin +
        '" name="' +
        code +
        '"  style="width: 33%; text-align: center;display: inline-block;padding: 5px 0;">' +
        name +
        '</span>'

      // var childcode = datas[i].code
    }
    // console.log(datas, 'datassssssss');
    // console.log(s1, 's1s1s1s1')
    $('.company_address #index_map1').html(s1)

    //

    // $('.company_address .index_map1')
  })
}

function renderDropdownList(datas, isprovince) {
  var s = ''
  if (!isprovince) {
    s +=
      '<a class="returnAllMap"><span  style="color:blue;cursor:pointer;float: left;min-width: 70px;height: 30px;font-size: 13px;line-height: 30px;">[不限]</span></a>'
  }
  for (var i = 0; i < datas.length; i++) {
    var name = datas[i].alias
    var code = datas[i].code
    // var name1 = name.substring(0, 2)

    s +=
      '<a href="#" data-pinyin="' +
      datas[i].pinyin +
      '" name="' +
      code +
      '" ><span  style="float: left;min-width: 70px;height: 30px;font-size: 13px;color: #333;line-height: 30px;">' +
      name +
      '</span></a>'
  }

  $('.company_address #map_box1').html(s)
}

function cx02(code) {
  var datas = []
  $.each(REGIONSDATA, function(index, el) {
    if (el.parent_code === code) {
      datas.push(el)
    }
  })
  // console.log('datas:', code, datas)

  renderDropdownList(datas)
}

/**
 *
 * @param {*} a 名称
 * @param {*} b code值
 * @param {*} c 省级code
 * @param {*} d 省级名称
 */
function setSelectArea(a, b, c, d) {
  $.cookie('currentArea', b, {
    expires: 365,
    path: '/'
  })
  $.cookie('currentAreaName', a, {
    expires: 365,
    path: '/'
  })
  $.cookie('currentProvince', c, {
    expires: 365,
    path: '/'
  })
  $.cookie('currentProvinceName', d, {
    expires: 365,
    path: '/'
  })

  // 新增完整名称
  var afull = ''
  var bfull = ''
  $.each(REGIONSDATA, function(index, el) {
    if (el.code === b) {
      afull = el.name
    }
    if (el.code === c) {
      bfull = el.name
    }
  })
  $.cookie('currentAreaFullName', afull, {
    expires: 365,
    path: '/'
  })
  $.cookie('currentProvinceFullName', bfull, {
    expires: 365,
    path: '/'
  })

  $('#index_map').data('rendercode', c)
  $('#index_map').data('renderchina', false)
  if (b === c) {
    // 表示选择的是直辖市之类的
    $('#index_map').data('renderchina', true)
  }
  // console.log(a, 'aaaaaaaaaaaa');
  $('.company_address #diqu').html(a)

  vo1 = {}
  vo1.startProvince = bfull
  vo1.startCity = afull
  if (!b || b == 'null') {
    delete vo1.startProvince
    delete vo1.startCity
  }

  //window.process_01 && process_01(vo1)
  // console.log(vo1)
  vo2 = {}
  vo2.startProvince = bfull
  vo2.startCity = afull
  if (!b || b == 'null') {
    delete vo2.startProvince
    delete vo2.startCity
  }

  // window.process_02 && process_02(vo2)
  // console.log(vo2)
  vo3 = {}
  vo3.startProvince = bfull
  vo3.startCity = afull
  vo3.queryType = 2
  if (!b || b == 'null') {
    delete vo3.startProvince
    delete vo3.startCity
  }

  // window.process_03 && process_03(vo3)
  // console.log(vo3)
  vo4 = {}
  vo4.address = bfull + afull
  if (!b || b == 'null') {
    delete vo4.address
  }

  // window.wlgs && wlgs(vo4)
  // console.log(vo4)
}

$('.company_address #diqu').html('')
// 点击下拉框
$('.company_address .map_box1').on('click', 'a', function(e) {
  e.preventDefault()
  var a = $(this)
    .children('span')
    .html()
  var b = $(this).attr('name')
  var c = $(this).data('pinyin')

  if ($(this).hasClass('returnAllMap')) {
    renderDropdownList(REGIONSDATA_CITY, true)
    REGIONSDATA_SELECTED_DATA = {}
    return false
  }

  // 如果选择到的是直辖市、特别行政区，则当选中市级了
  if (/(香港|澳门|台湾)/.test(a)) {
    $('.company_address #map_box1').css('display', 'none')
    setSelectArea(a, b, b, a)
    REGIONSDATA_SELECTED_DATA = {}
    changeStart()
  } else {
    // 判断是展开下级还是下级被选中
    if (REGIONSDATA_SELECTED_DATA.province) {
      $('.company_address #diqu').html(a)
      setSelectArea(
        a,
        b,
        REGIONSDATA_SELECTED_DATA.provinceCode,
        REGIONSDATA_SELECTED_DATA.province
      )
      $('.company_address #map_box1').css('display', 'none')
      changeStart()
    } else {
      REGIONSDATA_SELECTED_DATA.province = a
      REGIONSDATA_SELECTED_DATA.provinceCode = b
      cx02(b)
    }
  }

  // console.log('切换到省市' + a + b + c)
})

$('.company_address #index_map1').on({
  mouseenter: function() {
    var code = $(this).data('rendercode')
    var isall = $(this).data('renderchina')
    if ($('.company_address .map_box1').css('display') === 'none') {
      if (isall) {
        REGIONSDATA_SELECTED_DATA = {}
        renderDropdownList(REGIONSDATA_CITY, true)
      } else if (code) {
        cx02(code)
      }
    }
  },
  mouseover: function() {
    $('.company_address .map_box1').css('display', 'block')
  },
  mouseout: function() {
    $('.company_address .map_box1').css('display', 'none')
  }
})
$('.company_address #map_box1').on({
  mouseout: function() {
    $('.company_address .map_box1').css('display', 'block')
  }
})

cx01()
// cx02(' ')
// 专线数据字典 E

// 处理自动跳转
function detectWhereYouFrom() {
  // 在样式后面载入脚本，避免被脚本卡住样式
  // 返回格式
  // {"cip": "219.137.141.118", "cid": "440106", "cname": "广东省广州市天河区"}

  // 先获取链接
  // 再判断cookie
  // 最后利用搜狗ip库
  var area = $.cookie('currentArea')
  var areaname = $.cookie('currentAreaName')
  var province = $.cookie('currentProvince')
  var provincename = $.cookie('currentProvinceName')

  var find
  var defaultFn = function() {
    REGIONSDATA_SELECTED_DATA = {}
    REGIONSDATA_SELECTED_DATA.province = '广东'
    REGIONSDATA_SELECTED_DATA.provinceCode = '440000'

    setSelectArea('广州', '440100', '440000', '广东')
    cx02('440000')
    $('.company_address #diqu').show()
  }
  if (area) {
    // 判断能否找到对应的地区

    $.each(REGIONSDATA, function(index, el) {
      if (el.code === area) {
        find = true
        if (el.level === 2) {
          REGIONSDATA_SELECTED_DATA.province = provincename
          REGIONSDATA_SELECTED_DATA.provinceCode = province
          cx02(el.parent_code)
        }
      }
    })
    if (find) {
      setSelectArea(areaname, area, province, provincename)
      // console.log(areaname, 'areanameareaname')
      $('.company_address #diqu').text(areaname)
    }
  }
  // 当找不到且选的为非全国时，调用第三方ip库判断
  if (!find) {
    $.getScript('http://pv.sohu.com/cityjson?ie=utf-8')
      .done(function() {
        if (window.returnCitySN) {
          var city = returnCitySN.cname
          // console.log(city)
          // 先从前到后判断
          // 先找省
          // 再找市
          // 匹配不到市则选省
          // 匹配不到省则默认全国
          var find1
          var find2
          $.each(REGIONSDATA, function(index, ele) {
            if (city.indexOf(ele.name) === 0) {
              find1 = ele
              REGIONSDATA_SELECTED_DATA.province = ele.alias
              REGIONSDATA_SELECTED_DATA.provinceCode = ele.code
            }
          })
          // console.log('find1:', find1)
          if (find1) {
            $.each(REGIONSDATA, function(index, ele) {
              if (city.indexOf(find1.name + ele.name) === 0) {
                find2 = ele
              }
            })
            // 如果找到了省信息，但找不到市区信息，则默认选该省下面的第一个市区
            // 需要判断省级是否为直辖市、特别行政区
            if (find2) {
              cx02(find2.parent_code)
              setSelectArea(
                find2.alias,
                find2.code,
                REGIONSDATA_SELECTED_DATA.provinceCode,
                REGIONSDATA_SELECTED_DATA.province
              )
            } else {
              if (/(香港|澳门|台湾)/.test(find1.name)) {
                setSelectArea(
                  REGIONSDATA_SELECTED_DATA.province,
                  REGIONSDATA_SELECTED_DATA.provinceCode,
                  REGIONSDATA_SELECTED_DATA.provinceCode,
                  REGIONSDATA_SELECTED_DATA.province
                )
              } else {
                // 如果匹配失败，则默认
                defaultFn()
              }
            }
          } else {
            // 如果匹配失败，则默认为全国
            defaultFn()
          }
        } else {
          defaultFn()
        }
        $('.company_address #diqu').show()
      })
      .fail(function() {
        // 如果加载失败，则默认为广州

        defaultFn()
      })
  } else {
    $('.company_address #diqu').show()
  }
}

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
function changeStart() {
  var myurl0 = UrlUpdateParams(window.location.href, 'address', '')
  var myurl1 = UrlUpdateParams(myurl0, 'startp', '')
  var myurl2 = UrlUpdateParams(myurl1, 'startc', '')
  var myurl3 = UrlUpdateParams(myurl2, 'starta', '')
  var myurl4 = UrlUpdateParams(myurl3, 'start', '')
  var myurl5 = UrlUpdateParams(myurl4, 'startProvince', '')
  var myurl6 = UrlUpdateParams(myurl5, 'startCity', '')
  var myurl7 = UrlUpdateParams(myurl6, 'locationProvince', '')
  var myurl8 = UrlUpdateParams(myurl7, 'locationCity', '')
  var myurl9 = UrlUpdateParams(myurl8, 'locationArea', '')
  var myurl = UrlUpdateParams(myurl9, 'startArea', '')
  if (/zhuanxian\/\d+\.htm/g.test(location.pathname)) {
    gotoline()
    return
  }
  window.location.href = myurl
}
