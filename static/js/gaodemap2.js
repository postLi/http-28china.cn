;(function($) {
  if (!$) {
    console.error('需要jquery1.8版本以上~')
    return false
  }
  function loadCssCode(code) {
    var style = document.createElement('style')
    style.type = 'text/css'
    style.rel = 'stylesheet'
    try {
      //for Chrome Firefox Opera Safari
      style.appendChild(document.createTextNode(code))
    } catch (ex) {
      //for IE
      style.styleSheet.cssText = code
    }
    var head = document.getElementsByTagName('head')[0]
    head.appendChild(style)
  }

  var htmlStr =
    '<div id="afwl-map"> <div id="afwl-map-mask"></div> <div id="afwl-map-container"> <span id="afwl-map-close">x</span> <div id="afwl-map-title">地图</div><div id="echart-map"></div> <div id="afwl-map-wrapper"> <div id="mapcontainer"></div> <div id="myPageTop"> <table> <tr> <td> <label>请输入关键字：</label> </td> </tr> <tr> <td> <input id="tipinput"/> </td> </tr> </table> </div> </div> <div id="afwl-map-tip">小贴士：鼠标左击选择详细地址；鼠标滑动滚轮放大缩小地图</div> <button class="reback">重新选择</button> <div id="afwl-map-button"> <span id="afwl-map-button-cancel">取消</span> <span id="afwl-map-button-confirm">确认</span> <div class="afwl-map-info"> 当前经纬度信息：<span></span> </div> </div> </div> </div>'
  var cssStr =
    '#afwl-map{ position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: 9999; display: none; } #afwl-map-mask{ position: absolute; width: 100%; height: 100%; top: 0; left: 0; opacity: 0.5; background: #000; } #afwl-map-container{ position: absolute; width: 800px; height: 800px; background: #fff; left: 50%; margin-left: -400px; top: 50%; margin-top: -400px; line-height: 1.2; } #afwl-map-close{ font-size: 16px; color: #666; position: absolute; top: 10px; right: 10px; cursor: pointer;z-index:2; } #afwl-map-title{ height: 40px; line-height: 40px; font-size: 16px; color: #000; margin-bottom: 10px; text-indent: 2em; } #afwl-map-button{ position:absolute;left:0;width:100%;bottom:0; height: 50px; line-height: 50px; text-align: right; padding-right: 2em; } #afwl-map-button-cancel,#afwl-map-button-confirm{ display: inline-block; margin-right: 10px; vertical-align: middle; height: 30px; line-height: 30px; font-size: 14px; text-align: center; width: 80px; border-radius: 4px; cursor: pointer; } #afwl-map-button-cancel{ background: #ccc; color: #333; } #afwl-map-button-confirm{ color: #fff; background: #409EFF; } #afwl-map-button-confirm.disabled{ background: #a0cfff; cursor: not-allowed; }#afwl-map-wrapper{display:none;} #afwl-map-wrapper,#echart-map{ height: 700px; position: absolute; top:50px; width: 780px; left: 10px; } #afwl-map .afwl-map-info{  line-height: 30px; height: 30px; float: left; padding-left: 2em; font-size: 14px; color: #666; text-align: left; margin-top: 5px; } .button-group { position: absolute; bottom: 20px; right: 20px; font-size: 12px; padding: 10px; } .button-group .button { height: 28px; line-height: 28px; background-color: #0D9BF2; color: #FFF; border: 0; outline: none; padding-left: 5px; padding-right: 5px; border-radius: 3px; margin-bottom: 4px; cursor: pointer; } .button-group .inputtext { height: 26px; line-height: 26px; border: 1px; outline: none; padding-left: 5px; padding-right: 5px; border-radius: 3px; margin-bottom: 4px; cursor: pointer; } .amap-info-content { font-size: 12px; } #mapcontainer { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; } #myPageTop { position: absolute; top: 5px; right: 10px; background: #fff none repeat scroll 0 0; border: 1px solid #ccc; margin: 10px auto; padding:6px; font-family: "Microsoft Yahei", "微软雅黑", "Pinghei"; font-size: 14px; } #myPageTop label { margin: 0 20px 10px 0; display: inline-block; color: #666666; font-weight: normal; } #myPageTop input { width: 250px; height: 25px; line-height: 25px; } #myPageTop .column2{ padding-left: 25px; } .amap-sug-result{ z-index: 10999; }#afwl-map .reback{position: absolute;top:5px;right:30px;width:120px;height:40px;line-height:40px;border:none;background:#0D9BF2;color:#fff;border-radius:5px;cursor:pointer;}#afwl-map-tip{position:absolute;line-height:30px;left:0;width:100%;text-align:center;top:5px;color:#f15a17;}'

  // 加载css代码
  loadCssCode(cssStr)

  var mapObj = {
    baseurl: '',
    noinfo: true,
    dialogTableVisible: false,
    thepos: '',
    thename: '',
    theobj: {},
    map: null,
    exit: function() {
      if (this.map && this.map.destroy) {
        this.map.destroy()
        this.map = null
      }
      this.thepos = ''
      this.thename = ''
      this.theobj = {}
      this.el = null
      clickMapData = {
        province: '',
        city: '',
        district: '',
        street: '',
        detail: '',
        township: '',
        streetNumber: '',
        building: ''
      }
      $('.afwl-map-info')
        .find('span')
        .eq(0)
        .text('')
      $('.afwl-map-info')
        .find('span')
        .eq(1)
        .text('')
      this.noinfo = true
    },
    // 如果有地图对象时，不要重复渲染
    initMap: function(thedata) {
      $('#echart-map').hide()
      $('#afwl-map-wrapper').show()
      thedata = thedata || {}
      this.thename = thedata.name || this.thename
      var _this = this
      if (this.map) {
        $('#tipinput').val(this.thename)
        if (this.thename) {
          this.placeSearch.search(this.thename)
        }
      } else {
        var AMap = window.AMap
        var AMapUI = window.AMapUI
        // 地图加载
        _this.map = new AMap.Map('mapcontainer', {
          resizeEnable: true
        })
        var map = this.map
        // 输入提示
        var autoOptions = {
          input: 'tipinput'
        }
        var auto = new AMap.Autocomplete(autoOptions)
        var placeSearch = new AMap.PlaceSearch({
          map: map,
          extensions: 'base' // all base
          // type: '商务住宅|生活服务|公司企业|地名地址信息'
        })
        this.placeSearch = placeSearch

        // 初始化一些信息
        //$(".afwl-map-info").find("span").eq(0).text(this.thename)
        //$(".afwl-map-info").find("span").eq(1).text(this.thepos)
        $('#tipinput').val(this.thename)
        if (this.thename) {
          placeSearch.search(this.thename)
        }

        var infoWindow = new AMap.InfoWindow({
          offset: new AMap.Pixel(0, -30),
          content: '' // 使用默认信息窗体框样式，显示信息内容
        })
        var geocoder = new AMap.Geocoder({
          radius: 1000 // 范围，默认：500
        })
        // infoWindow.open(map, map.getCenter())
        var contextMenu = new AMap.ContextMenu()
        var contextMenuPositon = []
        var marker

        function clearMarker() {
          //删除地图上所有的覆盖物
          map.clearMap()
          if (marker) {
            //清除地图上的信息窗体。
            // map.clearInfoWindow();
            //marker.setMap(null)
            marker = null
          }
        }
        // 右键添加Marker标记
        contextMenu.addItem(
          '添加标记',
          function(e) {
            // 删除上一个标记
            clearMarker()
            // 清除搜素结果
            placeSearch.clear()
            // 关闭上一个信息窗口
            infoWindow.close()

            findInfo(contextMenuPositon)
          },
          3
        )

        function findInfo(pos) {
          geocoder.getAddress(pos, function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
              geocoder_CallBack(result, pos)
            } else {
              clearMarker()
              alert('获取不到当前位置的地址信息~')
            }
          })
        }

        // 地图绑定鼠标右击事件——弹出右键菜单
        // map.on('rightclick', function(e) {
        map.on('click', function(e) {
          //console.log('right click:', e)
          var pos = e.lnglat

          //contextMenu.open(map, pos)
          contextMenuPositon = pos

          // 删除上一个标记
          clearMarker()
          // 清除搜素结果
          placeSearch.clear()
          // 关闭上一个信息窗口
          infoWindow.close()

          findInfo(contextMenuPositon)
        })

        function geocoder_CallBack(data, pos) {
          var haspx = !!pos.lat

          // console.log('geocodeer:', data)
          var addr = data.regeocode.formattedAddress
          if (haspx) {
            marker = new AMap.Marker({
              map: map,
              position: pos // 基点位置
            })

            marker.on('click', function(e) {
              infoWindow.open(map, e.target.getPosition())
            })
            marker.emit('click', {
              target: marker
            })
            infoWindow.setContent(addr)
          }

          _this.setData(
            haspx ? pos.lng + ',' + pos.lat : pos,
            addr,
            data.regeocode
          )
        }

        map.on('click', function(e) {
          console.log('e:', e)
        })
        // 构造地点查询类
        map.plugin(['AMap.ToolBar'], function() {
          map.addControl(new AMap.ToolBar())
        })
        AMap.event.addListener(auto, 'select', select) // 注册监听，当选中某条记录时会触发
        AMap.event.addListener(placeSearch, 'markerClick', function(e) {
          var loc = e.data.location
          findInfo(loc)
          // findInfo(loc)
        })
        function select(e) {
          console.log('select e:', e)
          placeSearch.setCity(e.poi.adcode)
          //
          placeSearch.search(e.poi.name) // 关键字查询查询
        }
      }
    },
    setData: function(pos, addr, obj) {
      this.thepos = pos
      this.thename = addr
      this.theobj = obj
      this.noinfo = false
      // $(".afwl-map-info").find("span").eq(0).text(this.thename)
      $('.afwl-map-info')
        .find('span')
        .eq(0)
        .text(this.thepos)
    },
    clear: function() {
      this.thepos = ''
      this.thename = ''
      this.theobj = {}
      this.noinfo = true
      // $(".afwl-map-info").find("span").eq(0).text(this.thename)
      $('.afwl-map-info')
        .find('span')
        .eq(0)
        .text(this.thepos)
    },
    tipCity: function() {
      var msg = '必须选择到市'
      if (window.layer) {
        window.layer.alert(msg)
      } else {
        alert(msg)
      }
    },
    submitForm: function() {
      var notDetail = false
      if (!this.theobj.addressComponent) {
        notDetail = true
      }
      if (notDetail) {
        this.thename =
          clickMapData.province + clickMapData.city + clickMapData.district
      }
      var obj = notDetail ? clickMapData : this.theobj.addressComponent

      console.log('select Area:', obj)
      if (this.thename) {
        // 省直辖县级行政单位 需要特殊处理
        /* if(obj.district && obj.city ===''){
          obj.city = obj.district
        } */

        // 判断是否选择到市
        if (
          /(北京|重庆|天津|上海|香港|澳门)/.test(obj.province) === false &&
          !obj.city &&
          !obj.district
        ) {
          this.tipCity()
          return false
        }

        // 判断是否要提示当前选中的地址符合前面框
        var nochange = this.el.attr('wtmapnochange')
        if (nochange) {
          var oldname = this.el.attr('wtmapinit') || ''
          var oldcode = this.el.attr('wtmapcode') || ''
          var checkflag = false

          // 尝试纠正模糊范围匹配的情况
          oldname = oldname.replace('市辖区', '')
          if (this.thename.indexOf(oldname) >= 0) {
            checkflag = true
          } else {
            // 如果匹配不上则再尝试code值匹配
            if (oldcode) {
              // 因为code值是俩位省+俩位市+俩位区县组成的，可以判断前4位是否一致
              // 直辖市、省管县需要特殊处理，它们是没有俩位市这个层级的(使用高德地图数据可以不用考虑这个)
              // 俩种情况
              // 1.第一层是市；2.第一层是区县
              // 通过判断最后俩位是否为00判断是市还是区县
              if (/00$/.test(oldcode)) {
                if (oldcode.substr(0, 4) === (obj.adcode || '').substr(0, 4)) {
                  checkflag = true
                }
              } else if (oldcode === obj.adcode) {
                checkflag = true
              }
            }
          }
          if (!checkflag) {
            var tip = '请选择匹配出发地的地址。'
            if (window.layer) {
              layer.alert(tip)
            } else {
              alert(tip)
            }
            return false
          }
        }

        var wtmap = this.el.attr('wtmap')

        var name = obj.province + obj.city + obj.district

        // province
        // city
        // district
        // township
        // street
        // building
        if (wtmap === 'detail') {
          name = this.thename
        }

        if (wtmap === 'city') {
          name = obj.province + obj.city
        }
        if (wtmap.indexOf('{') !== -1) {
          name = wtmap
          for (var l in obj) {
            var reg = new RegExp('\\{' + l + '\\}', 'g')
            name = name.replace(reg, obj[l])
          }
        }
        //Insurance/step3.htm 省市加上，2018.12.14
        if (wtmap === 'provinceCity') {
          name = obj.province + ',' + obj.city
        }
        this.el.val(name)
        this.el.attr('thepos', this.thepos)
        this.el.attr('theprovince', obj.province)
        this.el.attr('thecity', obj.city)
        this.el.attr('thearea', obj.district)
        this.el.attr('thepcd', obj.province + '' + obj.city + '' + obj.district)
        this.el.attr(
          'thestreet',
          obj.township + obj.street + obj.streetNumber + obj.building
        )
      } else {
        this.tipCity()

        return
      }

      if (typeof window.gaodemapfn === 'function') {
        window.gaodemapfn(this.el, this.thename, this.thepos, obj)
      }
      // 触发绑定在输入框上的事件
      this.el.trigger('gaodemap.select', [this.thename, this.thepos, obj])
      this.close()
    },
    close: function() {
      mapObj.exit()
      $('#afwl-map').hide()
    },
    load: function(url, options) {
      url = /https?:\/\//.test(url) ? url : this.baseurl + url
      options = $.extend(options || {}, {
        dataType: 'script',
        cache: true,
        url: url
      })

      return jQuery.ajax(options)
    },
    show: function(el) {
      this.el = el
      var _this = this
      $('#afwl-map').show()
      this.thename = el.val() || ''
      this.thepos = el.attr('thepos') || ''
      this._thename = el.attr('wtmapinit')
      if (this._thename) {
        this.thename = this._thename
        $('.reback').hide()
      } else {
        $('.reback').show()
      }
      if (window.AMap) {
        this._init()
        //

        // 避免重复加载
      } else if (!_this.loadJs) {
        _this.loadJs = true
        var cbfn = function() {
          $.when(
            _this.load('map/citymap.js'),
            _this.load(
              'https://webapi.amap.com/maps?v=1.4.8&key=e61aa7ddc6349acdb3b57c062080f730&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder'
            )
          )
            .done(function() {
              //echarts
              _this.loadJs = false
              _this._init()
              // loadJs('//webapi.amap.com/ui/1.0/main.js').then(() => {
              //mapObj.initMap()
              //echartObj.init();
              // })
            })
            .fail(function() {
              _this.loadJs = false
            })
        }
        if (window.echarts) {
          cbfn()
        } else {
          this.load('map/echarts.min.js').done(function() {
            cbfn()
          })
        }
      }
    },
    _init: function() {
      if (this._thename) {
        mapObj.initMap({
          name: this._thename,
          pos: ''
        })
      } else {
        // 初始化矢量中国地图
        echartObj.init()
      }
    },
    // 找到当前js的位置，有助于后续的其它相对路径的js文件加载
    findJSURL: function() {
      var src = ''
      $('script').each(function(inx, el) {
        if (el.src && /\/gaodemap2.js/.test(el.src)) {
          src = el.src
          // 找到后就终止查询
          return false
        }
      })
      // 有一定的误差，比如文件名被篡改了，相关文件目录变更等都会造成错误的判断
      this.baseurl = src.replace(/\/gaodemap2\.js.*$/, '/')
    },
    inputshow: function(el) {
      mapObj.show($(el))
      $(el).blur()
    },
    init: function() {
      var _this = this
      $('body').append(htmlStr)
      $('#afwl-map-button-cancel').on('click', function() {
        mapObj.close()
      })
      $('#afwl-map-button-confirm').on('click', function() {
        mapObj.submitForm()
      })

      /* $("input[wtmap]").each(function(inx,el){
        $(el).on("focus", function(){
          _this.inputshow(el);
          return false
        })
      }); */
      // 改为委托事件
      $('body').on('focus', 'input[wtmap]', function() {
        _this.inputshow(this)
      })

      // 主动触发展示
      $('body').on('gaodemap.show', function(e, el) {
        _this.inputshow(el)
      })
      // 主动触发关闭
      $('body').on('gaodemap.close', function(e, el) {
        mapObj.close()
      })
      // 重新选择
      $('.reback').on('click', function() {
        // $('#echart-map').show();
        // $('#afwl-map-wrapper').hide();
        $('.reback').hide()
        // renderMap('china',mapdata,'中华人民共和国');
        mapObj.clear()
        clickMapData = {
          province: '',
          city: '',
          district: '',
          street: '',
          detail: ''
        }
        echartObj.init()
      })
      this.findJSURL()
    }
  }

  mapObj.init()

  //刷新DOM wtmap 2018.12.14
  $.fn.reLoadWtmap = function() {
    var that = mapObj
    $('input[wtmap]').each(function(i, e) {
      $(e).on('focus', function() {
        that.inputshow(e)
      })
    })
  }
  //地图容器
  var chart
  //34个省、市、自治区的名字拼音映射数组
  var provinces = {
    //23个省
    台湾: 'taiwan',
    河北: 'hebei',
    山西: 'shanxi',
    辽宁: 'liaoning',
    吉林: 'jilin',
    黑龙江: 'heilongjiang',
    江苏: 'jiangsu',
    浙江: 'zhejiang',
    安徽: 'anhui',
    福建: 'fujian',
    江西: 'jiangxi',
    山东: 'shandong',
    河南: 'henan',
    湖北: 'hubei',
    湖南: 'hunan',
    广东: 'guangdong',
    海南: 'hainan',
    四川: 'sichuan',
    贵州: 'guizhou',
    云南: 'yunnan',
    陕西: 'shanxi1',
    甘肃: 'gansu',
    青海: 'qinghai',
    //5个自治区
    新疆: 'xinjiang',
    广西: 'guangxi',
    内蒙古: 'neimenggu',
    宁夏: 'ningxia',
    西藏: 'xizang',
    //4个直辖市
    北京: 'beijing',
    天津: 'tianjin',
    上海: 'shanghai',
    重庆: 'chongqing',
    //2个特别行政区
    香港: 'xianggang',
    澳门: 'aomen'
  }
  var provincesName = {
    //23个省
    台湾: '台湾省',
    河北: '河北省',
    山西: '山西省',
    辽宁: '辽宁省',
    吉林: '吉林省',
    黑龙江: '黑龙江省',
    江苏: '江苏省',
    浙江: '浙江省',
    安徽: '安徽省',
    福建: '福建省',
    江西: '江西省',
    山东: '山东省',
    河南: '河南省',
    湖北: '湖北省',
    湖南: '湖南省',
    广东: '广东省',
    海南: '海南省',
    四川: '四川省',
    贵州: '贵州省',
    云南: '云南省',
    陕西: '陕西省',
    甘肃: '甘肃省',
    青海: '青海省',
    //5个自治区
    新疆: '新疆维吾尔自治区',
    广西: '广西壮族自治区',
    内蒙古: '内蒙古自治区',
    宁夏: '宁夏回族自治区',
    西藏: '西藏自治区',
    //4个直辖市
    北京: '北京市',
    天津: '天津市',
    上海: '上海市',
    重庆: '重庆市',
    //2个特别行政区
    香港: '香港特别行政区',
    澳门: '澳门特别行政区'
  }
  var d
  //直辖市和特别行政区-只有二级地图，没有三级地图
  var special = ['北京', '天津', '上海', '重庆', '香港', '澳门']
  var mapdata = []
  //obj.township + obj.street + obj.streetNumber + obj.building
  var clickMapData = {
    province: '',
    city: '',
    district: '',
    street: '',
    detail: '',
    township: '',
    streetNumber: '',
    building: ''
  }
  //初始化绘制全国地图配置
  var option = {
    backgroundColor: '#fff',
    title: {
      text: '中国地图',
      subtext: '省市区',
      link: 'http://www.56lines.cn',
      left: 'center',
      textStyle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'normal',
        fontFamily: 'Microsoft YaHei'
      },
      subtextStyle: {
        color: '#ccc',
        fontSize: 13,
        fontWeight: 'normal',
        fontFamily: 'Microsoft YaHei'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}'
    },
    toolbox: {
      show: false,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      },
      iconStyle: {
        normal: {
          color: '#fff'
        }
      }
    },
    animationDuration: 1000,
    animationEasing: 'cubicOut',
    animationDurationUpdate: 1000
  }
  function selectCity() {
    mapObj.initMap({
      name:
        clickMapData.province +
        clickMapData.city +
        (clickMapData.district || ''),
      pos: ''
    })
  }
  function renderMap(map, data, stitle) {
    //console.log('data:', echarts.getMap(map))
    // 像中山、东莞下面没有区县，直接就是乡镇街道级别的，不做3级展示
    option.title.subtext = stitle || map
    option.series = [
      {
        name: map,
        type: 'map',
        mapType: map,
        //zoom: 1,
        //roam: true,
        /* layoutCenter:['30%','30%'],
          layoutSize:1000, */
        // left: 'center',
        // top: 'middle',
        scaleLimit: {
          min: 1,
          max: 3
        },
        nameMap: {
          china: '中国'
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 13
            }
          },
          emphasis: {
            show: true,
            textStyle: {
              color: '#000',
              fontSize: 13
            }
          }
        },
        itemStyle: {
          normal: {
            // areaColor: '#323c48',
            areaColor: '#33A2F7',
            borderColor: 'white'
          },
          emphasis: {
            areaColor: 'darkorange'
          }
        },
        data: data
      }
    ]
    //渲染地图
    chart.setOption(option)
  }
  var echartObj = {
    loadMap: function() {
      //绘制全国地图
      $.getJSON(mapObj.baseurl + 'map/china.json', function(data) {
        this.inited = true
        d = []
        for (var i = 0; i < data.features.length; i++) {
          d.push({
            name: data.features[i].properties.name
          })
        }
        mapdata = d
        //注册地图
        echarts.registerMap('china', data)
        //绘制地图
        renderMap('china', d, '中华人民共和国')
      })
    },
    loadProvince: function(name) {
      clickMapData.province = provincesName[name] || name
      //如果点击的是34个省、市、自治区，绘制选中地区的二级地图
      $.getJSON(
        mapObj.baseurl + 'map/province/' + provinces[name] + '.json',
        function(data) {
          echarts.registerMap(name, data)
          var d = []
          for (var i = 0; i < data.features.length; i++) {
            d.push({
              name: data.features[i].properties.name
            })
          }
          renderMap(name, d)
        }
      ).fail(function() {
        selectCity()
      })
    },
    init: function() {
      var _this = this
      if (!this.inited) {
        chart = echarts.init(document.getElementById('echart-map'))
        this.loadMap()
        //地图点击事件
        chart.on('click', function(params) {
          //console.log( params );
          $('.reback').show()
          // console.log('provinces', provinces);
          if (params.name in provinces) {
            //console.log('params.name', params.name);
            _this.loadProvince(params.name)
          } else if (params.seriesName in provinces) {
            //如果是【直辖市/特别行政区】只有二级下钻
            // console.log('params.seriesName',params, params.seriesName);
            clickMapData.city = params.name
            if (special.indexOf(params.seriesName) >= 0) {
              // 如果点击的是二级则回显到全国地图
              // renderMap('china',mapdata);
              selectCity()
            } else {
              //显示县级地图
              $.getJSON(
                mapObj.baseurl + 'map/city/' + cityMap[params.name] + '.json',
                function(data) {
                  echarts.registerMap(params.name, data)
                  var d = []
                  for (var i = 0; i < data.features.length; i++) {
                    d.push({
                      name: data.features[i].properties.name
                    })
                  }
                  renderMap(params.name, d)
                }
              ).fail(function() {
                selectCity()
              })
            }
          } else {
            clickMapData.district = params.name
            // 返回选中全国地图
            //renderMap('china',mapdata);
            selectCity()
          }
        })
      } else {
        //绘制地图
        renderMap('china', d, '中华人民共和国')
      }
      $('#echart-map').show()
      $('#afwl-map-wrapper').hide()
    }
  }

  // 绑定事件
  $('#afwl-map-close').on('click', function() {
    mapObj.close()
  })
})(window.jQuery)
