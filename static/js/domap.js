// ;
// (function($) {
// 	if (!$) {
// 		window.console && window.console.error('需要jQuery库！');
// 		return;
// 	}
// })(window.jQuery);
//
console.warn('这里是地图公用方法 domap.js')

// function initJS() {
// 	var url = 'https://webapi.amap.com/maps?v=1.4.13&key=e61aa7ddc6349acdb3b57c062080f730';
// 	var jsapi = document.createElement('script');
// 	jsapi.charset = 'utf-8';
// 	jsapi.src = url;
// 	document.head.appendChild(jsapi);
// }
//
function loadedGaodeMap() {
  var mainurl = '//webapi.amap.com/ui/1.0/main.js'
  var jsapis = document.createElement('script')
  jsapis.charset = 'utf-8'
  jsapis.src = mainurl
  document.head.appendChild(jsapis)
}
//

//此处静态模拟两辆车数据：
var Path = [
  {
    truckIdNumber: '粤L18782',
    dirverName: '骆火火',
    dirverMobile: '18318186217',
    trajectoryList: [
      {
        latitude: '23.231983',
        longitude: '113.2023',
        time: '2019-02-22 11:30:05',
        speed: 0.0,
        mileage: 0.37,
        altitude: null,
        direction: 344
      },
      {
        latitude: '23.231983',
        longitude: '113.2023',
        time: '2019-02-22 12:08:53',
        speed: 6.0,
        mileage: 0.37,
        altitude: null,
        direction: 44
      },
      {
        latitude: '23.23185',
        longitude: '113.202433',
        time: '2019-02-22 12:15:05',
        speed: 6.0,
        mileage: 0.39,
        altitude: null,
        direction: 242
      }
    ]
  }
]

function refreshNavgButtons() {}
// 轨迹预设颜色
var lineColor = [
  '#3366cc',
  '#329262',
  '#ff9900',
  '#109618',
  '#990099',
  '#0099c6',
  '#dd4477',
  '#66aa00',
  '#b82e2e',
  '#316395',
  '#994499',
  '#22aa99',
  '#aaaa11',
  '#6633cc',
  '#e67300',
  '#8b0707',
  '#651067',
  '#dc3912',
  '#5574a6',
  '#3b3eac',
  '#409eff',
  '#008000',
  '#40E0D0',
  '#22aa99',
  '#9400D3',
  '#FFC0CB',
  '#0000FF',
  '#FFA500',
  '#B22222',
  '#808080',
  '#00FFFF',
  '#8A2BE2',
  '#5F9EA0',
  '#7FFF00',
  '#DAA520'
]
var imgurl = './img/queryOrder.car.png'
var navigBtnsConf = [
  {
    // 控制器
    name: '开始巡航',
    action: 'start',
    enableExp: 'navgStatus === "stop" || navgStatus === "pause"'
  },
  {
    name: '暂停',
    action: 'pause',
    enableExp: 'navgStatus === "moving"'
  },
  {
    name: '恢复',
    action: 'resume',
    enableExp: 'navgStatus === "pause"'
  },
  {
    name: '停止',
    action: 'stop',
    enableExp: 'navgStatus === "moving"'
  },
  {
    name: '销毁',
    action: 'destroy',
    enableExp: 'navgExists'
  }
]
var activeTruckItem = []
var AMapUI
var AMap
var map
var markers = []
var pathNavigs = []
var allPathData = []

function getPathSimplifierIns() {
  AMapUI = window.AMapUI
  AMap = window.AMap
  AMapUI.load(['ui/misc/PathSimplifier'], function(PathSimplifier) {
    if (!PathSimplifier.supportCanvas) {
      alert('当前环境不支持 Canvas！')
      return
    }
    console.log('123123123123123123')
    pathSimplifierIns = new PathSimplifier({
      zIndex: 100,
      setFitView: -1,
      map: map, //所属的地图实例
      getPath: function(pathData, pathIndex) {
        return pathData.path
      },
      getHoverTitle: function(pathData, pathIndex, pointIndex) {
        if (pointIndex >= 0) {
          return (
            pathData.name + '，点:' + pointIndex + '/' + pathData.path.length
          )
        }
        return pathData.name + '，点数量' + pathData.path.length
      },
      renderOptions: {
        pathLineStyle: {
          dirArrowStyle: true
        },
        getPathStyle: function(pathItem, zoom) {
          let color = lineColor[pathItem.pathIndex],
            lineWidth = Math.round(4 * Math.pow(1.1, zoom - 3))
          return {
            pathLineStyle: {
              strokeStyle: color,
              lineWidth: lineWidth
            },
            pathLineSelectedStyle: {
              lineWidth: lineWidth + 2
            },
            pathNavigatorStyle: {
              fillStyle: color
            }
          }
        },
        startPointStyle: {
          radius: 6,
          fillStyle: '#109618',
          lineWidth: 1,
          strokeStyle: '#eeeeee'
        },
        endPointStyle: {
          radius: 6,
          fillStyle: '#dc3912',
          lineWidth: 1,
          strokeStyle: '#eeeeee'
        }
      }
    })
    window.pathSimplifierIns = pathSimplifierIns
    console.log(' pathSimplifierIns:', window.pathSimplifierIns)
  })
}

function initDoMap(mapid, control) {
  // 初始化地图
  map = new AMap.Map(mapid, {
    resizeEnable: true,
    zoom: 4 //级别
  })
  AMapUI = window.AMapUI
  AMap = window.AMap
  console.log('AMap：', AMap)
  console.log(' AMapUI：', AMapUI)
  console.log(' map:', map)
  setTimeout(() => {
    getPathSimplifierIns()
  }, 500)

  AMap.plugin(
    ['AMap.ToolBar', 'AMap.Scale', 'AMap.OverView', 'AMap.MapType'],
    function() {
      // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
      map.addControl(new AMap.ToolBar())

      // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
      map.addControl(new AMap.Scale())

      // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
      map.addControl(
        new AMap.OverView({
          isOpen: true
        })
      )

      // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
      map.addControl(new AMap.MapType())
    }
  )

  createOtherPart(mapid) // 创建提示信息层
}

function initRouteItem(pathData, idx) {
  var $routeItem = $('<div class="route-item"></div>')

  $routeItem.attr('data-idx', idx)

  $('<h3/>')
    .css({
      color: colors[idx]
    })
    .html(pathData.name + '(点数： ' + pathData.path.length + ')')
    .appendTo($routeItem)
    .on('click', function() {
      pathSimplifierIns.setSelectedPathIndex(idx)
    })

  for (var i = 0, len = navigBtnsConf.length; i < len; i++) {
    $(
      '<button class="navigBtn" data-btnIdx="' +
        i +
        '" data-act="' +
        navigBtnsConf[i].action +
        '"></button>'
    )
      .html(navigBtnsConf[i].name)
      .appendTo($routeItem)
  }

  $speedBox = $('<div class="speedBox"></div>').appendTo($routeItem)

  var speedTxt = $('<span><span>').appendTo($speedBox)

  var speedRangeInput = $(
    '<input id="speedInp_' +
      idx +
      '" class="speedRange" type="range" min="1000" max="1000000" step="1000" value="100000" />'
  ).appendTo($speedBox)

  function updateSpeedTxt() {
    var speed = parseInt(speedRangeInput.val(), 10)

    speedTxt.html('时速：' + speed + ' km/h')

    if (pathNavigs[idx]) {
      pathNavigs[idx].setSpeed(speed)
    }
  }
  speedRangeInput.on('change', updateSpeedTxt)

  updateSpeedTxt()

  $speedBox.appendTo($routeItem)

  $('<div class="msg"></div>').appendTo($routeItem)

  $routeItem.appendTo('#routes-container')
}

function setDataLine(data) {
  // 设置轨迹需要的经纬度数据
  let arr = []
  if (data && data.length) {
    for (var i = 0; i < data.length; i++) {
      var obj = {
        name: '',
        path: []
      }
      if (data[i].trajectoryList && data[i].trajectoryList.length) {
        for (var j = 0; j < data[i].trajectoryList.length; j++) {
          var location = [
            Number(data[i].trajectoryList[j].longitude),
            Number(data[i].trajectoryList[j].latitude)
          ]
          obj.name = data[i].truckIdNumber
          obj.path.push(location)
        }
        arr.push(obj)
      }
    }
  }
  console.log('setDataLine', arr, data, data.length)
  allPathData = arr
  return arr
}

function initLine(data) {
  // 初始化轨迹
  if (window.pathSimplifierIns) {
    map.remove(markers) // 移除标注
    var pathSimplifierIns = window.pathSimplifierIns
    var pathData = setDataLine(data) // 格式化数据
    pathSimplifierIns.setData(pathData) // 给巡航器设置数据
    pathData.forEach((row, pathIndex) => {
      var navg = getNavg(pathIndex, row) // 创建轨迹
    })
  } else {
    getPathSimplifierIns()
  }
}

function getNavg(pathIndex, row) {
  // 轨迹的控制器
  var AMap = window.AMap
  var AMapUI = window.AMapUI

  var pathSimplifierIns = window.pathSimplifierIns
  console.log('PathSimplifier', window.pathSimplifierIns)
  if (!pathNavigs[pathIndex]) {
    function onload() {
      pathSimplifierIns.renderLater()
    }

    function onerror(e) {
      alert('巡航器图片加载失败！')
    }

    //创建一个轨迹巡航器
    let navgtr = pathSimplifierIns.createPathNavigator(pathIndex, {
      loop: true,
      speed: 90000,
      pathNavigatorStyle: {
        width: 24,
        height: 24
        // content: PathSimplifier.Render.Canvas.getImageContent(imgurl, onload, onerror)
      }
    })

    navgtr.onDestroy(function() {
      pathNavigs[pathIndex] = null
    })

    navgtr.on('start resume', function() {
      navgtr._startTime = Date.now()
      navgtr._startDist = this.getMovedDistance()
    })
    navgtr.on('stop pause', function() {
      navgtr._movedTime = Date.now() - navgtr._startTime
      navgtr._movedDist = this.getMovedDistance() - navgtr._startDist
      navgtr._realSpeed = (navgtr._movedDist / navgtr._movedTime) * 3600
      let totalDis = Math.round(this.getMovedDistance() / 1000) || 0 // 总行进距离
      let curDis = Math.round(navgtr._movedDist / 1000) || 0 // 本段行进距离
      let msgInfo = {
        状态: this.getNaviStatus(),
        设定速度: this.getSpeed() + ' km/h',
        总行进距离: totalDis + ' km',
        本段行进距离: curDis + ' km',
        本段耗时: navgtr._movedTime / 1000 + ' s',
        本段实际速度: Math.round(navgtr._realSpeed) + ' km/h'
      }
      this.comDis = totalDis === curDis // 判断是否完成路径
      refreshNavgButtons(pathIndex)
    })

    navgtr.on('move', function() {
      let msgInfo = {
        状态: this.getNaviStatus(),
        设定速度: this.getSpeed() + ' km/h',
        总行进距离: Math.round(this.getMovedDistance() / 1000) + ' km'
      }
    })
    pathNavigs[pathIndex] = navgtr
    navgtr.destroy()
  }
  return pathNavigs[pathIndex]
}

function doLine(type) {
  // 轨迹控制器
  if (window.pathSimplifierIns) {
    // if (/(start|resume|pause)/.test(type)) {
    // 	clearInterval(timerOption)
    // 	isTimerOpen = false
    // } else {
    // 	this.initTimer()
    // }
    var pathSimplifierIns = window.pathSimplifierIns
    allPathData.forEach((row, pathIndex) => {
      console.log('doline', row, pathIndex)
      // initRouteItem(row, pathIndex)
      var navg = getNavg(pathIndex, row) // 创建轨迹
      navg[type]()
      refreshNavgButtons(pathIndex)
    })
  } else {
    getPathSimplifierIns()
  }
}

function refreshNavgButtons(pathIndex) {
  if (pathIndex < 0) {
    return
  }
  let navgStatus = 'stop',
    navgExists = !!pathNavigs[pathIndex]
  let navgtr = pathNavigs[pathIndex]
  if (navgExists) {
    navgStatus = navgtr.getNaviStatus()
  }
}

function createOtherPart(mapid) {
  // 创建其他组件
  var parentdiv = $('<div></div>') //创建一个父div
  parentdiv.attr('id', 'map_empty_panel') //给父div设置id
  parentdiv.addClass('map_empty_panel') //添加css样式

  var childdiv = $('<div></div>') //创建一个子div
  childdiv.attr('id', 'map_empty_tips') //给子div设置id
  childdiv.addClass('map_empty_tips') //添加css样式
  childdiv.appendTo(parentdiv) //将子div添加到父div中

  parentdiv.appendTo($('#' + mapid)) //将父div添加到map中
}

// 接口-查询运单轨迹
var MAP_API = {
  url: '/api',
  // url: '/79api',
  getOrderLine: function(orgId, shipSn) {
    var json = {
      orgId: Number(orgId),
      shipSn: shipSn
    }
    return $.ajax({
      type: 'POST',
      url: this.url + '/api-order/order/load/v1/trajectoryByShipSnAndOrg',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(json),
      dataType: 'json'
    })
  }
}
// 调用接口-查询运单轨迹
function getOrderLine(orgId, shipSn) {
  // orgId = 209
  // shipSn = 18110023
  return MAP_API.getOrderLine(orgId, shipSn)
    .done(function(res) {
      var data = res.data
      if (res.status === 200) {
        console.log('轨迹请求成功：：', data)
        if (data && data.length) {
          $('.map_empty_panel').hide()
          initLine(data)
        } else {
          showErrorTips()
        }
      } else {
        showErrorTips()
        alert('查询出错了:' + (res.errorInfo || res.text))
      }
    })
    .fail(function() {
      showErrorTips('暂无跟踪数据，请求出错了~')
    })
}

function showErrorTips(msg = '暂无跟踪数据~') {
  // 暂时没有数据提示
  $('.map_empty_panel').show()
  $('#map_empty_tips').text(msg)
}
