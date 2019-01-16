<template>
  <div>
    <div class="list_box">
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a 
          id="list_nav_a" 
          href="">货源信息</a>
      </div>
      <div class="list_left">
        <div 
          class="w1036" 
          style=" background-color: #fff;">
          <div class="zx_sx"><span class="biaozhi"/><span>货源筛选</span>
            <a 
              class="toggle-btn show-collapse" 
              href="#">
              <span class="expand">
                <span>显示筛选</span><span class="arrow icon-btn-arrow-down-2"/>
              </span>
              <span class="collapse">
                <span>收起筛选</span><span class="arrow icon-btn-arrow-up-2"/>
              </span>
            </a>
          </div>
          <div class="select_con" >
            <dl >
              <dt>货源线路&nbsp;：</dt>
              <dd><form 
                name="zxaddform" 
                method="post" 
                action="" >
                <input 
                  name="a7" 
                  type="hidden" 
                  value="0">
                <input 
                  type="hidden" 
                  name="mid" 
                  value="19" >
                <input 
                  type="hidden" 
                  name="dopost" 
                  value="search" >
                <div 
                  id="HuoyuanFrom" 
                  class="fl list_input" 
                  style="position:relative;" >
                  <input 
                    name="cfd" 
                    style="height: 100%;" 
                    data-toggle="city-picker" 
                    data-level="district" 
                    type="text"
                    placeholder="请输入出发地" >
                </div>
                <img 
                  class="fl list_img" 
                  src="../../static/images/list_wlzx/02jiantou.png">
                <div 
                  id="HuoyuanTo" 
                  class="fl list_input" 
                  style="position:relative" >
                  <input 
                    name="ddd" 
                    style="height: 100%;" 
                    data-toggle="city-picker" 
                    data-level="district" 
                    type="text"
                    placeholder="请输入到达地" >
                </div>
                <input 
                  id="search_huoyuan" 
                  readonly 
                  name="Submit2" 
                  value=" 搜索 " 
                  class="list_button">
                <input 
                  id="flush" 
                  name="Submit2" 
                  readonly 
                  value="重置 " 
                  class="list_button">
              </form>
              </dd>

              <dt>重量区间&nbsp;:</dt>
              <dd id="tjcx_01">
                <a 
                  class="now all" 
                  href="/huoyuan"
                  style="    float: left;
    margin-bottom: 10px;">不限</a>

              </dd>
              <dt>体积区间&nbsp;:</dt>
              <dd id="tjcx_02">
                <a
                  class="now all"
                  href="/huoyuan" >不限</a>

              </dd>


              <dt>货源类型&nbsp;:</dt>
              <dd id="tjcx_03">
                <a
                  id="seq0"
                  class="now all"
                  href="#" >不限</a>
                <a
                  id="seq1"
                  href="#" >单次急发货源</a>
                <a
                  id="seq2"
                  href="#" >长期稳定货源</a>
              </dd>




            </dl>
          </div>
        </div>
        <div
          id="js005"
          class="w1036 list_hy">

          <div class="zx_sx"><span class="biaozhi"/><span>货源信息</span></div>
          <!--<div class="list_tiaoj"><span class="active">默认排序</span><span>交易量</span><span>运输时效</span><span>重货价格</span></div>-->
          <div class="list_none">
            <span>暂时没有找到您要查询的信息，可以看看其他货源哦</span>
            <img src="../../static/images/none_pic.png">
          </div>
          <ul
            class="wlzx_list"
            style="display: none;">

            <li id="wlzx_list_0">
              <a
                id="nr_a41"
                class="list-title-a"
                target="_blank" >
                <div class="position">

                  <span class="list-icon lines-sprite-icons icon-start"/>
                  <em id="nr_a41_1"/>
                  <span class="list-icon lines-sprite-icons icon-through"/>
                  <span class="list-icon lines-sprite-icons icon-end"/>
                  <em id="nr_a41_2"/>

                </div>
              </a>
              <div class="distance_total">[全程<em id="nr_distance"/>公里]</div>
              <div class="sc_num"><img src="../../static/images/list_wlzx/ll_num.png"><span><i>浏览量:<em id="nr0499"/></i></span></div>
              <div class="view_num"><img src="../../static/images/list_wlzx/sc_num.png"><span><i>收藏量:<em id="nr0500"/></i></span></div>
            </li>


            <li class="wlzx_list_1">
              <p class="p1"/>
              <p class="p2"><img src="../../static/images/list_wlzx/hy_item1.png"><i>货物：</i><font id="nr041">电子电器 </font></p>
              <p class="p3"><img src="../../static/images/list_wlzx/hy_item2.png"><i>规格：</i><span id="nr042"/><font id="nr0420" >件</font>&nbsp;&nbsp;<span id="nr043"/><font >公斤</font>&nbsp;&nbsp;<span id="nr044">20</span><font >立方米</font></p>
            </li>
            <li class="wlzx_list_2">
              <p class="p3"/>
              <p class="p1"><img src="../../static/images/list_wlzx/hy_item3.png"><span>发布者：</span><i id="nr045"/></P>
              <p class="p2"><img src="../../static/images/list_wlzx/hy_item4.png"><span>联系人：</span><i id="nr046">张三</i></P>
            </li>
            <li class="wlzx_list_4">
              <p class="p3"/>
              <p class="p1"><img src="../../static/images/list_wlzx/hy_item5.png"><span>货源类型：</span><i id="nr051"/></P>
              <p class="p2"><img src="../../static/images/list_wlzx/hy_item6.png"><span>发布时间：</span><i id="nr052"/></P>
            </li>
            <li class="wlzx_list_3">
              <p class="p1"><img
                id="list_shiming"
                src="../../static/images/list_wlzx/10shiming.png"></P>
              <p class="p2"><img
                id="list_xinyong"
                src="../../static/images/list_wlzx/11xinyong.png"></P>
            </li>

            <li class="wlzx_list_6">
              <p class="p1"><a
                id="nr_a42"
                target="_blank"><input
                  readonly
                  value="查看"></a>
              </p><p class="p2"><a
                id="nr048"
                target="_blank"
                href="http://wpa.qq.com/msgrd?v=3&uin=596803544&site=qq&menu=yes"><input
                  id="qq"
                  value="QQ交谈"></a>
            </p></li>
          </ul>


        </div>

        <!--分页-->
        <div
          class="box"
          style="float: right;margin-right: 150px;">
          <div
            id="pagination1"
            class="page fl"/>
          <div class="info fl">
            <!--<p>当前页数：<span id="current1">1</span></p>-->
          </div>
        </div>
        <!--分页-->

        <!--分页
        <div class="list_hy_page2">
            <div class="floatr2">
                <form name="beginPagefrm" method=post action="" onsubmit="return onCheckPage()">
                {dede:pagelist listitem="info,pre,next,pageno,option" listsize="3"/}
                <span>

            到第&nbsp;<input class="input_page1" name="beginPage" value="">页&nbsp;<input class="input_page2" type="submit" name="Submit" value="确定">

                </span>

                </form>
            </div>
        </div>
        分页-->

      </div>

      <div
        id="js010"
        class="list_right">

        <div class="zx_sx"><span class="biaozhi"/><span>货源推荐</span></div>
        <div class="tj_none hy_tj_none">
          <span>没有相关货源推荐</span>
        </div>
        <div
          class="tj_list"
          style="display: none;">
          <div class="p p1"><img src="../../static/images/04gongsi.png" ><span><a
            id="nr0412"
            target="_blank" >广州明科物流有限公司</a></span>
            <img
              id="tj_shiming"
              src="../../static/images/list_wlzx/shiming.png" >
            <img
              id="tj_xinyong"
              src="../../static/images/list_wlzx/xinyong.png" >

          </div>
          <div class="p p2">
            <a
              id="tj010"
              class="list-title-a"
              target="_blank" >
              <span class="list-icon lines-sprite-icons icon-start"/>
              <em id="nr0410"/>
              <span class="list-icon lines-sprite-icons icon-through"/>
              <span class="list-icon lines-sprite-icons icon-end"/>
              <em id="nr0411"/>
            </a>
          </div>

          <div class="p p3">
            <ul>
              <li class="tj_left"><i>货物：</i><span id="nr0413"/></li>
              <li class="tj_right"><i>数量：</i><span id="nr0416"/></li>
              <li class="tj_left"><i >重量：</i><font id="nr0414" /><em>公斤</em></li>
              <li class="tj_right"><i >体积：</i><font id="nr0415" /><em>立方米</em></li>
            </ul>

          </div>

          <div class="p p6">
            <div class="sc_num1"><img src="../../static/images/list_wlzx/ll_num.png"><span><i><em id="tj101"/></i>浏览</span></div>
            <div class="view_num1"><img src="../../static/images/list_wlzx/sc_num.png"><span><i><em id="tj102"/>人收藏</i></span></div>
          </div>
        </div>


      </div>
    </div>
    <div class="h70"/>
  </div>
</template>
<script>
export default {
  name: 'HuoYuan',
  asyncData({ query }) {
    // console.log(query)
  },
  mounted() {
    seajs.use(['./js/city-picker.data.js'], function() {
      seajs.use(['./js/city-picker.js'], function() {
        seajs.use(['./js/jquery.pagination.min.js'], function() {
          $(function() {
            $('a[_for]').mouseover(function() {
              $(this)
                .parents()
                .children('a[_for]')
                .removeClass('thisclass')
                .parents()
                .children('dd')
                .hide()
              $(this)
                .addClass('thisclass')
                .blur()
              $('#' + $(this).attr('_for')).show()
            })
            $('a[_for=uc_member]').mouseover()
            $('a[_for=flink_1]').mouseover()
          })
          $('.collapse').click(function() {
            $('.collapse').css('display', 'none')
            $('.expand').css('display', 'inline-block')
            $('.select_con').css('display', 'none')
          })
          $('.expand').click(function() {
            $('.collapse').css('display', 'inline-block')
            $('.expand').css('display', 'none')
            $('.select_con').css('display', 'block')
          })

          //获取参数的值
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
          var goodsWeight1 = GetUrlParam('goodsWeight1')
          var goodsWeight2 = GetUrlParam('goodsWeight2')
          var goodsVolume1 = GetUrlParam('goodsVolume1')
          var goodsVolume2 = GetUrlParam('goodsVolume2')
          var orderClass1 = GetUrlParam('orderClass')

          var startp = decodeURI(startp1)
          var endp = decodeURI(endp1)
          var startc = decodeURI(startc1)
          var endc = decodeURI(endc1)
          var starta = decodeURI(starta1)
          var enda = decodeURI(enda1)
          var goodsWeight1 = decodeURI(goodsWeight1)
          var goodsWeight2 = decodeURI(goodsWeight2)
          var goodsVolume1 = decodeURI(goodsVolume1)
          var goodsVolume2 = decodeURI(goodsVolume2)
          var orderClass = decodeURI(orderClass1)

          var currentAreaFullName = $.cookie('currentAreaFullName')
          var currentProvinceFullName = $.cookie('currentProvinceFullName')

          var vo = new Object()
          vo.queryType = '2'
          vo.startProvince = startp
          vo.startCity = startc
          vo.startArea = starta
          vo.endProvince = endp
          vo.endCity = endc
          vo.endArea = enda
          vo.goodsWeightLower = parseFloat(goodsWeight1).toFixed(0)
          vo.goodsWeightUpper = parseFloat(goodsWeight2).toFixed(0)
          vo.goodsVolumeLower = parseFloat(goodsVolume1).toFixed(1)
          vo.goodsVolumeUpper = parseFloat(goodsVolume2).toFixed(1)
          vo.orderClass = orderClass

          if (startp || startc) {
            if (!startp || startp == 'null') {
              startp = ''
              delete vo.startProvince
            }
            if (!startc || startc == 'null') {
              startc = ''
              delete vo.startCity
            }
          }
          if ((!startp || startp == 'null') && (!startc || startc == 'null')) {
            startc = currentAreaFullName
            vo.startCity = startc
            startp = currentProvinceFullName
            vo.startProvince = startp
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

          if (!goodsWeight1 || goodsWeight1 == 'null') {
            goodsWeight1 = ''
            delete vo.goodsWeightLower
          }
          if (!goodsWeight2 || goodsWeight2 == 'null') {
            goodsWeight2 = ''
            delete vo.goodsWeightUpper
          }
          if (!goodsVolume1 || goodsVolume1 == 'null') {
            goodsVolume1 = ''
            delete vo.goodsVolumeLower
          }
          if (!goodsVolume2 || goodsVolume2 == 'null') {
            goodsVolume2 = ''
            delete vo.goodsVolumeUpper
          }
          if (!orderClass || orderClass == 'null') {
            orderClass = ''
            delete vo.orderClass
          }

          $('#list_nav_a').html(
            startc + starta + ' 到 ' + endc + enda + ' 货源信息'
          )
          if ((!startc && !starta) || (!endc && !enda)) {
            $('#list_nav_a').html(
              startc + starta + '  ' + endc + enda + '货源信息'
            )
          }
          $('#HuoyuanFrom input').citypicker({
            province: startp,
            city: startc,
            district: starta
          })
          $('#HuoyuanTo input').citypicker({
            province: endp,
            city: endc,
            district: enda
          })
          $('#tjcx_01 .all').attr(
            'href',
            UrlUpdateParams(
              UrlUpdateParams(window.location.href, 'goodsWeight1', ''),
              'goodsWeight2',
              ''
            )
          )
          $('#tjcx_02 .all').attr(
            'href',
            UrlUpdateParams(
              UrlUpdateParams(window.location.href, 'goodsVolume1', ''),
              'goodsVolume2',
              ''
            )
          )
          $('#tjcx_03 .all').attr(
            'href',
            UrlUpdateParams(window.location.href, 'orderClass', '')
          )
          //清空条件
          $('#flush').click(function() {
            console.log('清空地址')
            window.location.href = '/huoyuan'
          })
          //清空条件
          //货源搜索 S
          /*
          $("#search_huoyuan").click(
          function(){
          var start=$("#HuoyuanFrom").val();
          var end=$("#HuoyuanTo").val();




          if(!start){start=""}
          if(!end){end=""}


          start=encodeURI(start)
          end=encodeURI(end)
          var sstart="&start="+start;
          var send="&end="+end;

          window.location='/plus/list.php?tid=2'+sstart+send;
          })
          */
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

            window.location =
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
          })
          //货源搜索 E

          //货源数据字典 S

          function tjcx01() {
            $.ajax({
              type: 'get',
              headers: {
                'Content-Type': 'application/json'
              },
              url: '/api/aflc-common/sysDict/getSysDictByCodeGet/AF03801',

              success: function(res) {
                var datas = res.data
                for (var i = 0; i < datas.length; i++) {
                  var name = datas[i].name
                  if (name.indexOf('<') != -1) {
                    var name1 = 0
                    var name2 = name.substring(1, 20)
                  } else if (name.indexOf('>') != -1) {
                    var name1 = name.substring(1, 20)
                    var name2 = 100000
                  } else {
                    var name1 = name.split('-', 2)[0]
                    var name2 = name.split('-', 2)[1]
                  }

                  var code = datas[i].code
                  var myurl = UrlUpdateParams(
                    UrlUpdateParams(
                      window.location.href,
                      'goodsWeight1',
                      name1
                    ),
                    'goodsWeight2',
                    name2
                  )
                  //       var s1='<a  href=/plus/list.php?tid=2'+sstart+send;
                  //				 var s2='&goodsWeight1='+name1+'&goodsWeight2='+name2+'>';
                  //				 var s3=name+'公斤</a>';
                  var s1 = '<a  href=' + myurl + '>'
                  var s3 = name + '公斤</a>'
                  $('#tjcx_01').append(s1 + s3)
                }
                //选中状态 S
                if (goodsWeight1 && goodsWeight2) {
                  $('#tjcx_01 a').each(function() {
                    var aaa = $(this).attr('href')

                    if (
                      aaa.indexOf('goodsWeight1=' + goodsWeight1) != -1 &&
                      aaa.indexOf('goodsWeight2=' + goodsWeight2) != -1
                    ) {
                      //console.log(aaa+":"+goodsWeight1+":"+goodsWeight2);
                      $('#tjcx_01 a').removeClass('now')
                      $(this).addClass('now')
                    }
                  })
                }
                //选中状态 E
              },
              error: function(err) {
                console.log(err.responseText)
              }
            })
          }
          tjcx01()

          function tjcx02() {
            $.ajax({
              type: 'get',
              headers: {
                'Content-Type': 'application/json'
              },
              url: '/api/aflc-common/sysDict/getSysDictByCodeGet/AF03802',

              success: function(res) {
                var datas = res.data
                for (var i = 0; i < datas.length; i++) {
                  var name = datas[i].name
                  if (name.indexOf('<') != -1) {
                    var name1 = 0
                    var name2 = name.substring(1, 20)
                  } else if (name.indexOf('>') != -1) {
                    var name1 = name.substring(1, 20)
                    var name2 = 100000
                  } else {
                    var name1 = name.split('-', 2)[0]
                    var name2 = name.split('-', 2)[1]
                  }

                  var code = datas[i].code
                  var myurl = UrlUpdateParams(
                    UrlUpdateParams(
                      window.location.href,
                      'goodsVolume1',
                      name1
                    ),
                    'goodsVolume2',
                    name2
                  )
                  //       var s1='<a  href=/plus/list.php?tid=2'+sstart+send;
                  //				 var s2='&goodsVolume1='+name1+'&goodsVolume2='+name2+'>';
                  //				 var s3=name+'立方</a>';
                  var s1 = '<a  href=' + myurl + '>'
                  var s3 = name + '立方</a>'
                  $('#tjcx_02').append(s1 + s3)
                }

                //选中状态 S
                if (goodsVolume1 && goodsVolume2) {
                  $('#tjcx_02 a').each(function() {
                    var aaa = $(this).attr('href')

                    if (
                      aaa.indexOf('goodsVolume1=' + goodsVolume1) != -1 &&
                      aaa.indexOf('goodsVolume2=' + goodsVolume2) != -1
                    ) {
                      //console.log(aaa+":"+goodsVolume1+":"+goodsVolume2);
                      $('#tjcx_02 a').removeClass('now')
                      $(this).addClass('now')
                    }
                  })
                }
                //选中状态 E
              },
              error: function(err) {
                console.log(err.responseText)
              }
            })
          }
          tjcx02()

          function tjcx03() {
            var myurl1 = UrlUpdateParams(window.location.href, 'orderClass', 0)
            var myurl2 = UrlUpdateParams(window.location.href, 'orderClass', 1)
            $('#seq1').attr('href', myurl1)
            $('#seq2').attr('href', myurl2)
            //选中状态 S
            if (orderClass) {
              $('#tjcx_03 a').each(function() {
                var aaa = $(this).attr('href')

                if (aaa.indexOf('orderClass=' + orderClass) != -1) {
                  $('#tjcx_03 a').removeClass('now')
                  $(this).addClass('now')
                }
              })
            }
          }
          tjcx03()
          //货源数据字典 E

          //货源列表推荐列表S
          function process01() {
            $.ajax({
              type: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              url: '/api/aflc-portal/order/fclOrder/v1/getPortalRecommendList',
              dataType: 'json',
              data: JSON.stringify({
                currentPage: 1,
                pageSize: 14,
                vo: vo //JSON.stringify({})
              }),
              success: function(res) {
                if (!res.data || res.data == '') {
                  console.log('推荐内容为空')
                  $('.tj_none').css('display', 'block')
                }
                var datas = res.data
                if (!datas) {
                  return
                }
                for (var i = 0; i < datas.length; i++) {
                  var id = datas[i].id
                  var shipperId = datas[i].shipperId
                  var account = datas[i].account
                  var browseNumber = datas[i].browseNumber
                  var collectNum = datas[i].collectNum
                  if (!browseNumber) {
                    browseNumber = 0
                  }
                  if (!collectNum) {
                    collectNum = 0
                  }
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

                  var companyName = datas[i].companyName
                  if (companyName && companyName > 12) {
                    companyName = companyName.substring(0, 12) + '..'
                  }
                  if (!companyName) {
                    companyName = '普通货主'
                  }
                  var goodsName = datas[i].goodsName.replace(/\,/g, ' ')
                  if (goodsName.length > 6) {
                    var goodsName = goodsName.substring(0, 6) + '..'
                  }
                  var goodsWeight = datas[i].goodsWeight
                  if (goodsWeight.length > 5) {
                    goodsWeight = goodsWeight.substring(0, 5) + '..'
                  }
                  var goodsVolume = datas[i].goodsVolume
                  if (goodsVolume.length > 5) {
                    goodsVolume = goodsVolume.substring(0, 5) + '..'
                  }
                  var goodsNum = datas[i].goodsNum
                  var isVip = datas[i].isVip
                  var authStatus = datas[i].authStatus
                  //var companyName =datas[i].companyName;

                  var url =
                    '/huoyuan/2018/0508/2.html?id=' +
                    id +
                    '&shipperId=' +
                    shipperId
                  $('#nr0410').html(start)
                  $('#nr0411').html(end)
                  $('#nr0412').html(companyName)
                  //$("#nr0412").attr("href","/member/index.php?uid="+account);
                  $('#nr0413').html(goodsName)
                  $('#nr0414').html(goodsWeight)
                  $('#nr0415').html(goodsVolume)
                  $('#nr0416').html(goodsNum + '件')
                  $('#tj101').html(browseNumber)
                  $('#tj102').html(collectNum)
                  if (!goodsNum) {
                    $('#nr0416').html('')
                  }
                  $('#nr04170').attr('href', url)
                  $('#tj010').attr('href', url)
                  $('#nr_a41').attr('href', url)
                  $('#tj017').attr('href', url)
                  var s1 = '<div class="tj_list tj_list' + i + '">'
                  var s2 = $('.tj_list').html()
                  var s3 = '</div>'
                  $('#js010').append(s1 + s2 + s3)

                  if (!isVip || isVip == 0) {
                    console.log('is not Vip')
                    $('.tj_list' + i + '  #tj_xinyong').css('display', 'none')
                  }
                  if (authStatus != 'AF0010403') {
                    console.log('is not shiming')
                    $('.tj_list' + i + '  #tj_shiming').css('display', 'none')
                  }
                }
              },
              error: function(err) {
                console.log(err.responseText)
              }
            })
          }
          process01()
          //货源列表推荐列表 E

          //货源信息栏目列表S
          function process02(currentPage) {
            var totalPage = 8
            $.ajax({
              type: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              url: '/api/aflc-portal/order/fclOrder/v1/getPortalOrderList',
              dataType: 'json',
              async: false,
              data: JSON.stringify({
                currentPage: currentPage,
                pageSize: 20,
                //vo:{"queryType":"2","startAddress":start,"endAddress":end,"goodsWeightLower":goodsWeight1,"goodsWeightUpper":goodsWeight2,"goodsVolumeLower":goodsVolume1,"goodsVolumeUpper":goodsVolume2}			//JSON.stringify({})
                vo: vo //JSON.stringify({})
              }),
              success: function(res) {
                $('#js005 .wlzx_list')
                  .not(':eq(0)')
                  .remove()

                if (res.data) {
                  totalPage = res.data.totalPage
                  console.log(totalPage)
                }

                if (!res.data || !res.data.totalCount) {
                  console.log('内容为空')
                  $('.box').css('display', 'none')
                  $('.list_none').css('display', 'block')

                  return
                }

                var datas = res.data.list
                for (var i = 0; i < datas.length; i++) {
                  var id = datas[i].id

                  var shipperId = datas[i].shipperId
                  var account = datas[i].account
                  var qq = datas[i].qq
                  var distance = datas[i].distance

                  distance = parseFloat(distance / 1000).toFixed(1)
                  var startCoordinate = datas[i].startCoordinate
                  var endCoordinate = datas[i].endCoordinate
                  var createTime = datas[i].createTime

                  if (createTime) {
                    createTime = createTime.substring(0, 19)
                  }
                  var orderClass = datas[i].orderClass
                  if (orderClass == 0) {
                    orderClass = '单次急发货源'
                  }
                  if (orderClass == 1) {
                    orderClass = '长期稳定货源'
                  }
                  var goodsNum = datas[i].goodsNum

                  console.log('goodsNum0:' + goodsNum)
                  if (goodsNum <= 0) {
                    console.log('goodsNum1:' + goodsNum)
                    $('#nr042').html('')
                    $('#nr0420').html('')
                  }
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

                  var goodsName = datas[i].goodsName.replace(/\,/g, ' ')
                  if (goodsName.length > 14) {
                    var goodsName = goodsName.substring(0, 14) + '..'
                  }
                  var goodsWeight = datas[i].goodsWeight
                  var goodsVolume = datas[i].goodsVolume
                  var companyName = datas[i].companyName
                  if (companyName && companyName.length > 8) {
                    companyName = companyName.substring(0, 8) + '..'
                  }
                  var wlName = datas[i].wlName
                  if (!companyName) {
                    companyName = '普通货主'
                  }
                  var shipperName = datas[i].shipperName
                  var createTime = datas[i].createTime.substring(0, 16)
                  var isVip = datas[i].isVip
                  var authStatus = datas[i].authStatus
                  var browseNumber = datas[i].browseNumber
                  var collectNum = datas[i].collectNum
                  if (!browseNumber) {
                    browseNumber = 0
                  }
                  if (!collectNum) {
                    collectNum = 0
                  }

                  var url =
                    '/huoyuan/2018/0508/2.html?id=' +
                    id +
                    '&shipperId=' +
                    shipperId
                  $('#nr_a41').attr('href', url)
                  $('#nr_a41_1').html(start)
                  $('#nr_a41_2').html(end)
                  $('#nr_a42').attr('href', url)
                  $('#nr_a43').attr('href', '/member/index.php?uid=' + account)
                  $('#nr041').html(goodsName)
                  if (goodsNum > 0) {
                    $('#nr042').html(goodsNum)
                    $('#nr0420').html('件')
                  }

                  $('#nr043').html(goodsWeight)
                  $('#nr044').html(goodsVolume)
                  $('#nr045').html(companyName)
                  $('#nr046').html(shipperName)

                  $('#nr051').html(orderClass)
                  $('#nr052').html(createTime)
                  $('#nr048').attr(
                    'href',
                    'tencent://message/?uin=' + qq + '&Site=&menu=yes'
                  )
                  $('#nr049').attr('href', url)
                  $('#nr0499').html(browseNumber)
                  $('#nr0500').html(collectNum)
                  $('#nr_distance').html(distance)
                  var s1 = '<ul class="wlzx_list wlzx_list' + i + '">'
                  var s2 = $('.wlzx_list').html()
                  var s3 = '</ul>'

                  $('#js005').append(s1 + s2 + s3)

                  if (!isVip || isVip == 0) {
                    console.log('is not Vip')
                    $('.wlzx_list' + i + ' #list_xinyong').css(
                      'display',
                      'none'
                    )
                  }
                  if (authStatus != 'AF0010403') {
                    console.log('is not shiming')
                    $('.wlzx_list' + i + ' #list_shiming').css(
                      'display',
                      'none'
                    )
                  }
                  if (!qq) {
                    $('.wlzx_list' + i + ' .wlzx_list_6 #qq').css(
                      'display',
                      'none'
                    )
                  }
                }
              },
              error: function(err) {
                console.log(err.responseText)
              }
            })
            console.log('最终货源总页数：' + totalPage)
            return totalPage
          }
          //process02(1);
          //货源信息栏目列表 E
          $('#pagination1').pagination({
            currentPage: 1,
            totalPage: process02(1),
            callback: function(current) {
              $('#current1').text(current)
              process02(current)
              window.location.href = '#top'
            }
          })
        })
      })
    })
  }
}
</script>
<style scoped>
/*物流专线 S */
body {
  background-color: #f9f9f9;
}
.zx_sx {
  overflow: hidden;
  line-height: 50px;
  height: 50px;
  color: #585858;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff;
}
.list_hy .zx_sx {
  border-bottom: 2px solid #2577e3;
  margin-bottom: 1px;
}
.list_right .zx_sx {
  border-bottom: 2px solid #2577e3;
  margin-bottom: 1px;
}
.zx_sx span {
  float: left;
  display: block;
  color: #2577e3;
}
.zx_sx .biaozhi {
  width: 3px;
  height: 18px;
  background-color: #2577e3;
  border-radius: 1px;
  margin: 16px 12px 0px 10px;
}
.list_box {
  width: 1400px;
  height: auto !important;
  margin: 0 auto;
  overflow: hidden;
}
.list_left {
  width: 1036px;
  float: left;
}
.w1130 {
  width: 1130px;
  float: left;
  overflow: hidden;
}
.tywlist {
  width: 1130px;
}
.tyxboxWrap {
  float: left;
  width: 100%;
  position: relative;
}
.list_right {
  min-height: 246px;
  height: auto !important;
  width: 344px;
  margin: 0px 0px 0 16px;
  float: left;
}
.list_hy_page2 {
  width: 1400px;
}
.w260 {
  width: 260px;
}
.tylist {
  width: 240px;
}
.select_con {
  width: 1128px;
  border-color: #eee;
}
.select_con dl dt {
  font-size: 13px;
  height: 39px;
  line-height: 39px;
  padding: 3px 0 0 20px;
}

.list_input {
  width: 161px;
  height: 32px;
  border-radius: 2px;
  border: solid 1px #e5e5e5;
  background: none;
  color: #333;
  font-size: 14px;
  padding-left: 9px;
}
.list_input::-webkit-input-placeholder {
  color: #999;
}
.list_button {
  width: 72px;
  height: 28px;
  border-radius: 2px;
  border: solid 1px #2577e3;
  background-color: #fff;
  color: #2577e3;
  font-size: 15px;
  /*
      background: no-repeat url(../images/01search.png) 45px 6px;
      */
  text-align: left;
  /*padding-left: 8px;*/
  margin-left: 8px;
  cursor: pointer;
}
#flush {
  width: 70px;
  border: solid 1px #e3e3e3;
  color: #999;
  text-align: center;
  margin-left: 10px;
  font-size: 13px;
}

.list_img {
  position: relative;
  top: 10px;
  left: 5px;
  margin-right: 5px;
}
.select_con dl dd a {
  min-width: 65px;
  text-align: center;
}
.select_con dl dd a:hover,
.select_con dl dd a.now {
  background: #3371ff;
  color: #fff;
}
.ck_input {
  width: 14px;
  height: 14px;
  border: solid 1px #ccc;
  position: relative;
  top: -2px;
  right: 3px;
  cursor: pointer;
}
.list_tiaoj {
  width: 1130px;
  height: 39px;
  background-color: #f1f1f1;
  border: solid 1px #e6e6e6;
  margin-bottom: 14px;
  background: no-repeat url(../../static/images/list_wlzx/xiajt.png) #f1f1f1
    363px 16px;
  position: relative;
}
.list_tiaoj span {
  display: block;
  text-align: center;
  line-height: 39px;
  float: left;
  width: 94px;
  height: 39px;
  cursor: pointer;
  font-size: 13px;
}
.list_tiaoj .active {
  background-color: #ffffff;
  color: #eb434d;
}
#tj_price {
  width: 140px;
  height: 100px;
  position: absolute;
  left: 300px;
  top: 40px;
  margin-left: 0px;
  /* border-radius: 6px;*/
  display: none;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  padding-top: 15px;
}
#tj_price1,
#tj_price2 {
  color: #ff6633;
  width: 140px;
  padding-bottom: 5px;
}
#tj_price1:hover,
#tj_price2:hover {
  color: #f00;
}

.wlzx_list {
  width: 1036px;
  height: 180px;
  border: solid 1px #dfdfdf;
  border-left: 0;
  border-right: 0;
  margin-top: -1px;
  background-color: #fff;
  transition: all 0.4s;
}
.wlzx_list:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}

.wlzx_list li {
  float: left;
  overflow: hidden;
}
.wlzx_list img {
  transition: 0.7s;
}
.wlzx_list img:hover {
  transform: scale(1.05);
}
.wlzx_list_1 {
  width: 180px;
  margin-left: 30px;
}
.wlzx_list_2 {
  width: 400px;
  margin-left: 30px;
}
.wlzx_list_3 {
  width: 150px;
  margin-left: 25px;
}
.wlzx_list_4 {
  width: 90px;
  margin-left: 70px;
}
.wlzx_list_5 {
  width: 75px;
  margin-left: 65px;
}
.wlzx_list_6 {
  width: 110px;
  margin-left: 50px;
}
.wlzx_list_2 p {
  height: 30px;
  line-height: 30px;
}
.wlzx_list_2 .p1 {
  overflow: hidden;
}
.wlzx_list_2 .p1 a {
  color: #333333;
  font-size: 16px;
  font-weight: normal;
}
.wlzx_list_2 .p1 font {
  color: #666666;
  font-size: 12px;
  padding-left: 5px;
}
.wlzx_list_2 .p1 i,
.wlzx_list_2 .p2 i {
  color: #333;
  font-size: 14px;
}
.wlzx_list_2 .p2 font {
  color: #2577e3;
  font-size: 13px;
  padding-left: 5px;
}
.wlzx_list_2 .p3 font,
.wlzx_list_2 .p4 font {
  color: #333;
  font-size: 14px;
}
.wlzx_list_2 .p3 i,
.wlzx_list_2 .p4 i {
  color: #333;
  font-size: 14px;
  padding-left: 5px;
}
.wlzx_list_3 p {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
}
.wlzx_list_3 .p1 {
  margin-top: 20px;
}
.wlzx_list_3 p i {
  color: #999;
}
.wlzx_list_3 p font {
  color: #fb5000;
}
.wlzx_list_3 p span {
  color: #333;
}
.wlzx_list_4 p {
  height: 30px;
  line-height: 30px;
  font-size: 13px;
}
.wlzx_list_4 .p3 {
  line-height: 20px;
  height: 20px;
}
.wlzx_list_4 img {
  margin-top: 5px;
}
.wlzx_list_5 p {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.wlzx_list_5 p:nth-child(1) {
  display: none;
}
.wlzx_list_5 p i {
  color: #999;
}

.wlzx_list_6 p input {
  display: block;
  width: 102px;
  height: 26px;
  line-height: 26px;
  border-radius: 3px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border: solid 1px #8dadd8;
}
.wlzx_list_6 .p1 {
  margin-top: 20px;
}
.wlzx_list_6 p {
  margin-bottom: 14px;
}
.wlzx_list_6 .p1 input {
  background-color: #2577e3;
  color: #fff;
  border: 0px;
  height: 28px;
}
.wlzx_list_6 .p1 input:hover {
  background-color: #2577ff;
}

.tj_list {
  background-color: #fff;
  margin-top: -1px;
  border: 1px solid #dedede;
  width: 344px;
  height: 246px;
  font-size: 14px;
  transition: all 0.4s;
}
.tj_list:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.tj_list .p {
  height: 28px;
  line-height: 28px;
  padding-left: 10px;
  padding-right: 0px;
}

.tj_list .p1 {
  height: 50px;
  line-height: 50px;
  margin-left: 20px;
}
.tj_list .p1 span {
  padding: 0 0 0 5px;
}
.tj_list .p2 {
  padding-left: 30px;
}
.tj_list .p2 i {
  color: #2577e3;
  font-size: 16px;
  padding: 0 5px 0 5px;
}
.tj_list .p2 span {
  font-size: 16px;
  color: #2577e3;
}
.tj_list .p3 {
  margin-top: 20px;
  margin-left: 32px;
  width: 260px;
  height: 80px;
  background-color: #f2f2f2;
}
.tj_list ul {
  padding-top: 10px;
}
.tj_list .p3 li {
  float: left;
  width: 130px;
  height: 35px;
}
.tj_list .p3 .tj_left {
  text-align: left;
}
.tj_list .p3 .tj_right {
  text-align: left;
  padding-left: 10px;
  width: 120px;
}
.tj_list .p3 i,
.tj_list .p4 i {
  font-size: 13px;
  color: #999;
}
.tj_list .p3 em {
  font-size: 13px;
  color: #333;
}
.tj_list .p3 font,
.tj_list .p4 font {
  font-size: 13px;
  color: #eb434d;
}
.tj_list .p3 span,
.tj_list .p4 span {
  font-size: 13px;
  color: #333;
}
.tj_list .p3 font {
  font-size: 13px;
  color: #eb434d;
}

.tj_list .p5 img {
  margin-top: 5px;
  margin-bottom: 10px;
  margin-right: 8px;
}
.tj_list img {
  transition: 0.7s;
}
.tj_list img:hover {
  transform: scale(1.05);
}
.tj_list .p6 {
  float: left;
  margin-top: 24px;
  margin-right: 15px;
  text-align: center;
}
.tj_list .p6 span {
  color: #333;
  font-size: 13px;
}
/*物流专线 E */

/*车源信息 S */
.cy_list_1 {
  width: 351px;
  margin-left: 14px;
}
.cy_list_2 {
  width: 182px;
  margin-left: 100px;
}
.cy_list_3 {
  width: 75px;
  margin-left: 80px;
}
.cy_list_4 {
  width: 65px;
  margin-left: 60px;
}

.cy_list_5 {
  width: 102px;
  margin-left: 60px;
}
.cy_list_1 .p1 {
  margin-bottom: 3px;
}
.cy_list_1 p {
  height: 26px;
  line-height: 26px;
}
.cy_list_1 p a {
  color: #eb434d;
  font-size: 16px;
}
.cy_list_1 p i {
  font-size: 13px;
  color: #666;
}
.cy_list_1 p span {
  font-size: 13px;
  color: #666;
  padding: 0 2px 0 2px;
}
.cy_list_1 p font {
  font-size: 13px;
  color: #333;
}

.cy_list_2 p {
  height: 27px;
  line-height: 27px;
}

.cy_list_2 p span {
  color: #666;
  font-size: 13px;
}
.cy_list_2 p i {
  font-size: 13px;
}
.cy_list_4 p {
  height: 26px;
  margin: 0 0 5px 0;
}

.wlzx_list_6 .p2 input {
  background-color: #eb434d;
  color: #fff;
  border: 0;
}
/*车源信息 E */

/*货源信息 S */
.wlzx_list_01 {
  width: 180px;
  margin-left: 30px;
  position: relative;
}
.wlzx_list_1 {
  width: 237px;
  margin-left: 30px;
}
.wlzx_list_2 {
  width: 200px;
  margin-left: 10px;
}
.wlzx_list_3 {
  width: 85px;
  margin-left: 20px;
}
.wlzx_list_4 {
  width: 240px;
  margin-left: 30px;
}
.wlzx_list_5 {
  width: 102px;
  margin-left: 60px;
}
.wlzx_list_1 .p1 {
  line-height: 20px;
  height: 20px;
}
.wlzx_list_1 p {
  height: 34px;
  line-height: 34px;
}
.wlzx_list_1 p a {
  font-size: 16px;
}
.wlzx_list_1 p i {
  font-size: 13px;
  color: #666;
}
.wlzx_list_1 p span {
  color: #eb434d;
  font-size: 13px;
}
.wlzx_list_1 p font {
  font-size: 13px;
  color: #333;
}

.wlzx_list_2 p {
  height: 34px;
  line-height: 34px;
}
.wlzx_list_2 .p3 {
  line-height: 20px;
  height: 20px;
}
.wlzx_list_2 p span {
  color: #666;
  font-size: 13px;
}
.wlzx_list_2 p i {
  font-size: 13px;
}
.wlzx_list_2 p font {
  color: #333;
}
.wlzx_list_3 p {
  height: 34px;
  line-height: 34px;
}
.wlzx_list_6 .p2 input {
  background-color: #eb434d;
  color: #fff;
  border: 0;
}
#wlzx_list_view:hover {
  background-color: #f1f1f1;
}
#wlzx_list_view {
  border: solid 1px #8dadd8;
  font-size: 13px;
  background-color: #fff;
  color: #2577e3;
}
/*货源信息 E */

.list_none {
  display: none;
}
.list_none span {
  float: left;
  width: 100%;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  margin-top: 40px;
}
.list_none img {
  float: left;
  width: 300px;
  height: 160px;
  margin: 20px 0 20px 400px;
}

.tj_none {
  display: none;
  background-color: #fff;
  width: 100%;
  height: 220px;
}
.tj_none span {
  float: left;
  width: 100%;
  text-align: center;
  height: 100px;
  line-height: 100px;
  font-size: 14px;
  margin-top: 0px;
}
.hy_tj_none {
  height: 186px;
}
.cy_tj_none {
  height: 290px;
}

/*显示隐藏S */
.toggle-btn {
  float: right;
  margin: 12px 15px 0 4px;
  height: 24px;
  line-height: 24px;
  border: solid 1px #e8e8e8;
  padding: 0 9px;
  background: #fff;
  color: #6b6b6b;
  cursor: pointer;
  text-decoration: none;
  font: 12px/1.5 tahoma, arial, 'Hiragino Sans GB', '\5b8b\4f53', sans-serif;
}

.show-collapse .expand {
  display: none;
  margin-top: 2px;
}
.toggle-btn .arrow {
  margin-left: 8px;
  vertical-align: middle;
}
.icon-btn-arrow-up-2,
.icon-btn-arrow-down-2 {
}

.icon-btn-arrow-down-2 {
  margin-top: 5px;
  display: inline-block;
  background: url(../../static/images/list_wlzx/xiajt.png);
  background-repeat: no-repeat;
  width: 12px;
  height: 7px;
  cursor: pointer;
}
.show-collapse .collapse {
  display: inline-block;
  margin-top: 2px;
}
.toggle-btn .arrow {
  margin-left: 8px;
  vertical-align: middle;
}

.icon-btn-arrow-up-2 {
  margin-top: 5px;
  display: inline-block;
  background: url(../../static/images/list_wlzx/up_jt.png);
  background-repeat: no-repeat;
  width: 12px;
  height: 7px;
  cursor: pointer;
}
/*显示隐藏E */

/*V1.1版本S*/
#HuoyuanFrom {
  width: 222px;
  background: url(../../static/images/list_wlzx/start_addr.png) no-repeat 200px
    8px #fff;
  background-size: 16px 17px;
  padding-right: 20px;
}
#HuoyuanTo {
  width: 222px;
  background: url(../../static/images/list_wlzx/end_addr.png) no-repeat 200px
    8px #fff;
  background-size: 16px 17px;
  padding-right: 20px;
}
#wlgs {
  width: 220px;
  margin-left: 10px;
}
#search_huoyuan {
  width: 42px;
  height: 28px;
  border-radius: 2px;
  color: #f9f9f9;
  font-size: 13px;
  background: no-repeat url(../../static/images/white_search.png) 10px 6px
    #2577e3;
  text-align: left;
  padding-left: 30px;
  padding-right: 5px;
  margin-left: 8px;
  cursor: pointer;
}
.w1036 {
  width: 1036px;
  float: left;
  /*OVERFLOW: hidden;*/
  border: 1px solid #eee;
  border-bottom: 0;
}
.select_con {
  width: 1036px;
  border-left: 0;
  border-right: 0;
}

#wlzx_list_0 {
  width: 100%;
  float: left;
}
.view_num {
  float: right;
  height: 26px;
  width: 120px;
  font-size: 12px;
  line-height: 26px;
}
.sc_num {
  float: right;
  height: 26px;
  width: 120px;
  font-size: 12px;
  line-height: 26px;
}
#wlzx_list_0 img {
  margin-top: 15px;
  float: left;
  margin-right: 7px;
}
.view_num span,
.sc_num span {
  float: left;
  margin-top: 13px;
}
.wlzx_list_2 .p5 {
  height: auto;
}
.wlzx_list_2 .p5 img {
  padding-right: 5px;
}
#qq {
  position: relative;
  top: 5px;
}
#tj_shiming,
#tj_xinyong,
#tj_danbao {
  position: relative;
  left: 5px;
  top: 5px;
}
.list_hy {
  margin-top: 20px;
}

.distance {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 180px;
  height: 24px;

  background: url(../../static/images/list_wlzx/distance.png) #010101 no-repeat
    155px 5px;
  opacity: 0.5;
}
.distance span {
  line-height: 24px;
  padding-left: 9px;
  color: #fff;
  font-size: 12px;
}
#qq {
  background-color: #fff;
  border-radius: 3px;
  border: solid 1px #dedede;
  font-size: 13px;
  color: #333;
  background: no-repeat url(../../static/images/article_wlzx/15qq.gif) 12px 3px;
  padding-left: 15px;
  width: 87px;
}

.lines-sprite-icons {
  background: url(../../static/images/list_wlzx/ss56-lines-sprite.png) no-repeat;
}
.list-title-a {
  color: #333;
  font-size: 16px;
}
.list-title {
  font-weight: 300;
  font-size: 18px;
  color: #333;
}
.icon-through {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-position: -6px -62px;
  position: relative;
  top: 3px;
  margin: 0 10px;
}
.icon-end {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-position: -6px -6px;
  position: relative;
  top: 2px;
  margin-right: 3px;
}
.icon-start {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-position: -6px -34px;
  position: relative;
  top: 2px;
  margin-right: 3px;
}

.view_num1 {
  float: right;
  height: 26px;
  width: 140px;
  font-size: 12px;
  line-height: 26px;
}
.sc_num1 {
  float: right;
  height: 26px;
  width: 140px;
  font-size: 12px;
  line-height: 26px;
}
.view_num1 img,
.sc_num1 img {
  float: left;
  margin-left: 32px;
  margin-right: 10px;
  margin-top: 3px;
}
.view_num1 span,
.sc_num1 span {
  float: left;
}
.position {
  float: left;
  height: 26px;
  min-width: 250px;
  margin-left: 30px;
  margin-top: 18px;
}
.distance_total {
  float: left;
  height: 26px;
  margin-left: 20px;
  margin-top: 20px;
  min-width: 100px;
  color: #f00;
  font-size: 14px;
}
.wlzx_list_1 img,
.wlzx_list_2 img,
.wlzx_list_4 img {
  padding-right: 5px;
}
</style>
