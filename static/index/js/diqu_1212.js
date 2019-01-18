// 获取参数的值

function GetQueryString (e) {
  var t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)'),
    s = window.location.search.substr(1).match(t)
  return null != s ? unescape(s[2]) : null
}

function GetUrlParam (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = encodeURI(window.location.search).substr(1).match(reg)
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
function getCityNameByCode (code) {
  var find = ''
  $.each(REGIONSDATA, function (index, ele) {
    if (el.code === code) {
      find = el
    }
  })
  return find || code
}
// console.log(code)

// 专线数据字典 S

function cx01 () {
  return $.getJSON('/templets/default/js/regions.json').done(function (res) {
    REGIONSDATA = res
    var datas = []
    $.each(res, function (inx, el) {
      if (el.level === 1) {
        datas.push(el)
      }
		})
		REGIONSDATA_CITY = datas

    renderDropdownList(datas, true)
    // 初始化横向的导航
    // cx02(null)
    // 初始化页面
    detectWhereYouFrom()
  })
}

function renderDropdownList (datas, isprovince) {
  var s = ''
  if (!isprovince) {
    s += '<a class="returnAllMap"><span  style="color:blue;cursor:pointer;">[返回]</span></a>'
  }
  for (var i = 0; i < datas.length; i++) {
    var name = datas[i].alias
    var code = datas[i].code
    // var name1 = name.substring(0, 2)
    s += '<a href="#" data-pinyin="' + datas[i].pinyin + '" name="' + code + '" ><span>' + name + '</span></a>'
  }

	$('#map_box').html(s);
}

function cx02 (code) {
  var datas = []
  $.each(REGIONSDATA, function (index, el) {
    if (el.parent_code === code) {
      datas.push(el)
    }
  })
  console.log('datas:',code,datas)
	
	renderDropdownList(datas)

}

/**
 * 
 * @param {*} a 名称
 * @param {*} b code值
 * @param {*} c 省级code
 * @param {*} d 省级名称
 */
function setSelectArea (a, b, c, d) {
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
  $.each(REGIONSDATA, function (index, el) {
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
  if(b===c){
    // 表示选择的是直辖市之类的
    $('#index_map').data('renderchina', true)
  }

  $('#diqu').html(a)

  vo1 = { }
  vo1.startLocation = a
  if (!b || b == 'null') {
		delete vo1.startLocation;
	}

  window.process_01 && process_01(vo1)
  console.log(vo1)
  vo2 = { }
  vo2.strartAddress = a
  if (!b || b == 'null') {
    delete vo2.startLocation;}

  window.process_02 && process_02(vo2)
  console.log(vo2)
  vo3 = { }
  vo3.startProvinceCityArea = a
  vo3.queryType = 2
  if (!b || b == 'null') {
    delete vo3.startLocation;}

  window.process_03 && process_03(vo3)
  console.log(vo3)
}

$('#diqu').html("");
// 点击下拉框
$('.map_box').on('click', 'a', function (e) {
  e.preventDefault()
  var a = $(this).children('span').html()
  var b = $(this).attr('name')
  var c = $(this).data('pinyin')
  
  if($(this).hasClass('returnAllMap')){
    renderDropdownList(REGIONSDATA_CITY, true)
    REGIONSDATA_SELECTED_DATA = {}
    return false;
  }
	
	// 如果选择到的是直辖市、特别行政区，则当选中市级了
	if(/(北京|上海|重庆|天津|香港|澳门|台湾)/.test(a)){
		
		$('#map_box').css('display', 'none')
		setSelectArea(a, b, b, a)
		REGIONSDATA_SELECTED_DATA = {}
	} else {
		// 判断是展开下级还是下级被选中
		if(REGIONSDATA_SELECTED_DATA.province){
      $('#diqu').html(a)
      setSelectArea(a, b, REGIONSDATA_SELECTED_DATA.provinceCode,REGIONSDATA_SELECTED_DATA.province)
      $('#map_box').css('display', 'none')
		} else {
			REGIONSDATA_SELECTED_DATA.province = a
			REGIONSDATA_SELECTED_DATA.provinceCode = b
			cx02(b)
		}
		
  	
	}

  console.log('切换到省市' + a + b + c)
  
  
  
})


$('#index_map').on({
  "mouseenter": function(){
    var code = $(this).data('rendercode');
    var isall = $(this).data('renderchina');
    if($('.map_box').css('display') === 'none'){
      if(isall){
        REGIONSDATA_SELECTED_DATA = {}
        renderDropdownList(REGIONSDATA_CITY, true);
      } else if(code) {
        cx02(code);
      }
    }
    
  },
  "mouseover": function(){
    
    $('.map_box').css("display","block");
  },
  "mouseout": function(){
    $('.map_box').css("display","none");
  }
});
$("#map_box").on({
  "mouseout": function(){
    $('.map_box').css("display","block");
  }
});



cx01()
// cx02(' ')
// 专线数据字典 E

// 处理自动跳转
function detectWhereYouFrom () {

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
  var defaultFn = function () {
    REGIONSDATA_SELECTED_DATA = {}
    REGIONSDATA_SELECTED_DATA.province = "广东"
    REGIONSDATA_SELECTED_DATA.provinceCode = "440000"

    setSelectArea('广州',"440100",  "440000", '广东')
    cx02("440000")
    $('#diqu').show()
  }
  if (area) {
    // 判断能否找到对应的地区

    $.each(REGIONSDATA, function (index, el) {
      if (el.code === area) {
        find = true
        if(el.level===2){
          REGIONSDATA_SELECTED_DATA.province = provincename
          REGIONSDATA_SELECTED_DATA.provinceCode = province
          cx02(el.parent_code)
        }
        
      }
    })
    if(find){
      setSelectArea(areaname,area,province,provincename)
      $('#diqu').text(areaname)
    }
  }
  // 当找不到且选的为非全国时，调用第三方ip库判断
  if (!find) {
    $.getScript('http://pv.sohu.com/cityjson?ie=utf-8').done(function () {
      if (window.returnCitySN) {
        var city = returnCitySN.cname
        console.log(city)
        // 先从前到后判断
        // 先找省
        // 再找市
        // 匹配不到市则选省
        // 匹配不到省则默认全国
        var find1
        var find2
        $.each(REGIONSDATA, function (index, ele) {
          if (city.indexOf(ele.name) === 0) {
            find1 = ele
            REGIONSDATA_SELECTED_DATA.province = ele.alias
            REGIONSDATA_SELECTED_DATA.provinceCode = ele.code
          }
        })
        console.log('find1:',find1)
        if (find1) {
          
          $.each(REGIONSDATA, function (index, ele) {
            if (city.indexOf(find1.name + ele.name) === 0) {
              find2 = ele
            }
          })
          // 如果找到了省信息，但找不到市区信息，则默认选该省下面的第一个市区
          // 需要判断省级是否为直辖市、特别行政区
          if (find2) {
            cx02(find2.parent_code)
            setSelectArea(find2.alias,find2.code,REGIONSDATA_SELECTED_DATA.provinceCode,REGIONSDATA_SELECTED_DATA.province)

          } else {
            if(/(北京|上海|重庆|天津|香港|澳门|台湾)/.test(find1.name)){
              setSelectArea(REGIONSDATA_SELECTED_DATA.province,REGIONSDATA_SELECTED_DATA.provinceCode,REGIONSDATA_SELECTED_DATA.provinceCode,REGIONSDATA_SELECTED_DATA.province)

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
      $('#diqu').show()
    }).fail(function () {
      // 如果加载失败，则默认为广州

      defaultFn()
    })
  } else {
    $('#diqu').show()
  }
}
