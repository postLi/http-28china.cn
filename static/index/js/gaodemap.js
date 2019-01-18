;(function($){
  if(!$){
    console.log('需要jquery1.8版本以上~')
    return false
  }
  function loadCssCode(code){
  var style = document.createElement('style');
      style.type = 'text/css';
      style.rel = 'stylesheet';
      try{
          //for Chrome Firefox Opera Safari
          style .appendChild(document.createTextNode(code));
      }catch(ex){
          //for IE
          style.styleSheet.cssText = code;
      }
      var head = document.getElementsByTagName('head')[0];
      head.appendChild(style);
  }

  var htmlStr = '<div id="afwl-map"> <div id="afwl-map-mask"></div> <div id="afwl-map-container"> <span id="afwl-map-close">x</span> <div id="afwl-map-title">地图</div> <div id="afwl-map-wrapper"> <div id="mapcontainer"></div> <div id="myPageTop"> <table> <tr> <td> <label>请输入关键字：</label> </td> </tr> <tr> <td> <input id="tipinput"/> </td> </tr> </table> </div> </div> <div id="afwl-map-button"> <span id="afwl-map-button-cancel">取消</span> <span id="afwl-map-button-confirm">确认</span> <div class="afwl-map-info"> 当前选中的地址：<span></span><br> 当前经纬度信息：<span></span> </div> </div> </div> </div>';
  var cssStr = '#afwl-map{ position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: 9999; display: none; } #afwl-map-mask{ position: absolute; width: 100%; height: 100%; top: 0; left: 0; opacity: 0.5; background: #000; } #afwl-map-container{ position: absolute; width: 800px; height: 500px; background: #fff; left: 50%; margin-left: -400px; top: 50%; margin-top: -250px; line-height: 1.2; } #afwl-map-close{ font-size: 16px; color: #666; position: absolute; top: 10px; right: 10px; cursor: pointer; } #afwl-map-title{ height: 40px; line-height: 40px; font-size: 16px; color: #000; margin-bottom: 10px; text-indent: 2em; } #afwl-map-button{ height: 50px; line-height: 50px; text-align: right; padding-right: 2em; } #afwl-map-button-cancel,#afwl-map-button-confirm{ display: inline-block; margin-right: 10px; vertical-align: middle; height: 30px; line-height: 30px; font-size: 14px; text-align: center; width: 80px; border-radius: 4px; cursor: pointer; } #afwl-map-button-cancel{ background: #ccc; color: #333; } #afwl-map-button-confirm{ color: #fff; background: #409EFF; } #afwl-map-button-confirm.disabled{ background: #a0cfff; cursor: not-allowed; } #afwl-map-wrapper{ height: 400px; position: relative; width: 780px; margin-left: 10px; } #afwl-map .afwl-map-info{ line-height: 20px; height: 20px; float: left; padding-left: 2em; font-size: 12px; color: #666; text-align: left; margin-top: 5px; } .button-group { position: absolute; bottom: 20px; right: 20px; font-size: 12px; padding: 10px; } .button-group .button { height: 28px; line-height: 28px; background-color: #0D9BF2; color: #FFF; border: 0; outline: none; padding-left: 5px; padding-right: 5px; border-radius: 3px; margin-bottom: 4px; cursor: pointer; } .button-group .inputtext { height: 26px; line-height: 26px; border: 1px; outline: none; padding-left: 5px; padding-right: 5px; border-radius: 3px; margin-bottom: 4px; cursor: pointer; } .amap-info-content { font-size: 12px; } #mapcontainer { position: absolute; top: 0; left: 0; right: 0; bottom: 0; width: 100%; height: 100%; } #myPageTop { position: absolute; top: 5px; right: 10px; background: #fff none repeat scroll 0 0; border: 1px solid #ccc; margin: 10px auto; padding:6px; font-family: "Microsoft Yahei", "微软雅黑", "Pinghei"; font-size: 14px; } #myPageTop label { margin: 0 20px 10px 0; display: inline-block; color: #666666; font-weight: normal; } #myPageTop input { width: 250px; height: 25px; line-height: 25px; } #myPageTop .column2{ padding-left: 25px; } .amap-sug-result{ z-index: 10999; }';

// 加载css代码
loadCssCode(cssStr);

  var mapObj = {
    noinfo: true,
    dialogTableVisible: false,
    thepos: '',
    thename: '',
    theobj: {},
    map: {},
    exit: function(){
      if (this.map && this.map.destroy) {
        this.map.destroy()
      }
      this.thepos = ''
      this.thename = ''
      this.theobj = {}
      this.el = null
      $(".afwl-map-info").find("span").eq(0).text('')
      $(".afwl-map-info").find("span").eq(1).text('')
      this.noinfo = true
    },
    initMap: function() {
      var _this = this
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

      // 初始化一些信息
      $(".afwl-map-info").find("span").eq(0).text(this.thename)
      $(".afwl-map-info").find("span").eq(1).text(this.thepos)
      $("#tipinput").val(this.thename)
      if(this.thename){
        placeSearch.search(this.thename)
      }

      var infoWindow = new AMap.InfoWindow({
        offset: new AMap.Pixel(0, -30),
        content: ''  // 使用默认信息窗体框样式，显示信息内容
      })
      var geocoder = new AMap.Geocoder({
        radius: 1000 // 范围，默认：500
      })
        // infoWindow.open(map, map.getCenter())
      var contextMenu = new AMap.ContextMenu()
      var contextMenuPositon = []
      var marker

      function clearMarker() {
        if (marker) {
          marker.setMap(null)
          marker = null
        }
      }
       // 右键添加Marker标记
      contextMenu.addItem('添加标记', function(e) {
        // 删除上一个标记
        clearMarker()
        // 清除搜素结果
        placeSearch.clear()
        // 关闭上一个信息窗口
        infoWindow.close()

        findInfo(contextMenuPositon)
      }, 3)

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
      map.on('rightclick', function(e) {
        console.log('right click:', e)
        var pos = e.lnglat

        contextMenu.open(map, pos)
        contextMenuPositon = pos
      })

      function geocoder_CallBack(data, pos) {
        var haspx = !!pos.lat

        console.log('geocodeer:', data)
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

        _this.setData(haspx ? pos.lng + ',' + pos.lat : pos, addr, data.regeocode)
      }

      map.on('click', function(e) {
        console.log('e:', e)
      })
      // 构造地点查询类
      map.plugin(['AMap.ToolBar'], function() {
        map.addControl(new AMap.ToolBar())
      })
      AMap.event.addListener(auto, 'select', select)// 注册监听，当选中某条记录时会触发
      AMap.event.addListener(placeSearch, 'markerClick', function(e) {
        var loc = e.data.location
        findInfo(loc)
        // findInfo(loc)
      })
      function select(e) {
        console.log('select e:', e)
        placeSearch.setCity(e.poi.adcode)
        //
        placeSearch.search(e.poi.name)  // 关键字查询查询
      }
    },
    setData: function(pos, addr, obj) {
      this.thepos = pos
      this.thename = addr
      this.theobj = obj
      this.noinfo = false
      $(".afwl-map-info").find("span").eq(0).text(this.thename)
      $(".afwl-map-info").find("span").eq(1).text(this.thepos)
    },
    submitForm: function(){
      if(this.thename){
        var wtmap = this.el.attr('wtmap')
        var obj = this.theobj.addressComponent
        var name = obj.province + obj.city + obj.district
        
        // province
        // city
        // district
          // township
          // street
          // building
        if(wtmap === 'detail'){
          name = this.thename
        }

        if(wtmap === 'city'){
          name = obj.province + obj.city
        }
        if(wtmap.indexOf('{')!==-1){
        	name = wtmap
        	for(var l in obj){
        		var reg = new RegExp("\\{"+l+"\\}","g")
        		name = name.replace(reg, obj[l])
        	}
        }

        this.el.val(name)
        this.el.attr("thepos", this.thepos)
        this.el.attr('theprovince', obj.province)
        this.el.attr('thecity', obj.city)
        this.el.attr('thearea', obj.district)
        this.el.attr("thepcd", obj.province + '' + obj.city + '' + obj.district)
        this.el.attr("thestreet", obj.township + obj.street + obj.streetNumber + obj.building)
      
      }
      if(typeof window.gaodemapfn === 'function' ){
        window.gaodemapfn(this.el,this.thename,this.thepos,this.theobj)
      }
      
      this.close()
    },
    close: function(){
      mapObj.exit();
      $("#afwl-map").hide();
    },
    show: function(el){
      this.el = el
      $("#afwl-map").show();
      this.thename = el.val() || '';
      this.thepos = el.attr("thepos") || '';
      if (window.AMap) {
        mapObj.initMap()
      } else {
        $.getScript('https://webapi.amap.com/maps?v=1.4.8&key=73bdb8428fbfe511ed6c5f3328b5734b&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder').done(function(){
          // loadJs('//webapi.amap.com/ui/1.0/main.js').then(() => {
          mapObj.initMap()
          // })
        })
      }
    },
    init: function(){
      $('body').append(htmlStr);
      $("#afwl-map-button-cancel").on("click",function(){
        mapObj.close();
      })
      $("#afwl-map-button-confirm").on("click",function(){
        mapObj.submitForm();
      });

      $("input[wtmap]").each(function(inx,el){
        $(el).on("focus", function(){
          mapObj.show($(el));
          $(el).blur();
          return false
        })
      });
    }
  };

  mapObj.init();

  // 绑定事件
  $("#afwl-map-close").on("click",function(){
    mapObj.close();
  });
})(window.jQuery);