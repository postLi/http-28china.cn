<template>
  <div>
    <div class="list_box">
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a 
          id="list_nav_a" 
          href="">专线时效</a>
      </div>
      <div class="list_left">
        <div class="list_search">
          <!-- 出发地 -->
          <div class="order-line-from clearfix">
            <div class="order-form-item">
              <div class="order-form-label"/>
              <div 
                id="carLineFrom" 
                class="order-form-input shixiao-input">
                <input 
                  style="height: 100%;" 
                  data-toggle="city-picker" 
                  data-level="district" 
                  maxlength="40" 
                  placeholder="请选择出发地" 
                  type="text">
                <img 
                  src="../../static/images/wzlImg/qidian.png"
                  class="qd">
              </div>
            </div>

            <div class="order-form-item">
              <img 
                src="../../static/images/wzlImg/refresh.png"
                class="qiehuan">
            </div>
            <div class="order-form-item form-detail">
              <div class="order-form-label"/>
              <div 
                id="carLineTo" 
                class="order-form-input shixiao-input">
                <input 
                  style="height: 100%;" 
                  data-toggle="city-picker" 
                  data-level="district" 
                  placeholder="请选择到达地" 
                  wtmap="" 
                  maxlength="40" 
                  type="text">
                <img 
                  src="../../static/images/wzlImg/zhongdian.png"
                  class="wzl">
              </div>
            </div>
            <div class="order-form-item">
              <span class="search">查询</span>
            </div>
          </div>
        </div>

        <div 
          id="js006" 
          class="w1130">
          <div class="zx_sx"><span class="biaozhi"/><span >为您推荐</span></div>
          <div class="list_tiaoj"><span 
            id="seq1" 
            class="active">综合排序</span><span id="seq2">运输排序</span></div>

          <div class="list_none">
            <span>暂时没有找到您要查询的信息，可以看看其他信息哦</span>
            <img src="../../static/images/none_pic.png">
          </div>
          <div 
            class="wzl_box" 
            style="display: none">
            <div class="wzl_log"><span id="span">TOP<i id="num">1</i></span></div>
            <ul class="wlzx_list" >
              <li class="cy_list_1">
                <p class="p1"><a 
                  id="nr_a51" 
                  target="_blank" ><span id="startLocation"/> <span>&rarr;</span><span id="endLocation"/></a></p>
                <p class="p2"><img src="../../static/images/wzlImg/1.png"><font
                  id="nr055" 
                  style="color: #2577e3;">北京华远物流有限公司</font></p>
                <p class="p3"><img 
                  src="../../static/images/wzlImg/2.png"
                  style="float: left;margin-top: 7px;"><i style="float: left;">线路说明：</i><font id="nr056" >专线直达，天天发车，运价低至...</font></p>
                <p class="p4"><img src="../../static/images/wzlImg/3.png"><i>地址：</i><font id="nr058">北京大兴区魏永路博洋仓储物流园</font></p>
              </li>
              <li class="cy_list_7">
                <p>时效：<span id="shixiao"/></p>
              </li>
              <li class="cy_list_2">
                <!-- <p class="p1"><span>发布者：</span><i id="nr059">广州东山运输有限公司</i></P>
                <p class="p2"><span id="nr0510">发布时间：2018-6-30 15：28</span></p> -->
                <p>重货：<span id="zhPrice"/></p>
                <p>轻货：<span id="qhPrice"/></p>
                <p>频率：<span id="pinglv"/></p>

              </li>
              <li class="cy_list_3">
                <p class="p1"><img 
                  id="list_shiming" 
                  src="../../static/images/list_wlzx/10shiming.png"></P>
                <p class="p2"><img 
                  id="list_xinyong" 
                  src="../../static/images/list_wlzx/11xinyong.png"></P>
                <p class="p3"><img 
                  id="list_danbao" 
                  src="../../static/images/list_wlzx/12danbao.png"></P>
              </li>
              <!-- <li class="cy_list_4" style="visibility:hidden">
              <p class="p1"><a href="#"><i>浏览量：<em id="nr0521"></em></i></a></p>
              <p class="p1"><a href="#"><i>收藏量：32</i></a></p>
              <p><span id="orderNumber"></span>下单量</p>
              <p><span id="assessNumber"></span>条评价</p>
              </li> -->
              <li class="cy_list_4">
                <!-- <p class="p1"><a href="#"><i>浏览量：<em id="nr0521"></em></i></a></p> -->
                <!-- <p class="p1"><a href="#"><i>收藏量：32</i></a></p> -->
                <p><img 
                  class="numlll" 
                  src="../../static/images/wzlImg/lll.png">浏览量：<span id="orderNumber"/></p>
                <p><img 
                  class="numlll" 
                  src="../../static/images/wzlImg/pj.png">评价：<span id="assessNumber"/></p>
              </li>
              <li class="wlzx_list_6">
                <p class="p2"><a 
                  id="nr_a521" 
                  target="_blank" 
                  class="check_btn" 
                  style="background: #2577e3;color: #fff;">下单</a>
                </p><p class="p2"><a 
                  id="nr_a522" 
                  target="_blank" 
                  class="check_btn">查看</a>
                </p><p class="p3"><a 
                  id="nr_a53" 
                  target="_blank" 
                  href="http://wpa.qq.com/msgrd?v=3&uin=596803544&site=qq&menu=yes"><input 
                    id="qq" 
                    readonly="readonly" 
                    value="QQ交谈"></a>
              </p></li>
            </ul>
          </div>



        </div>
        <!--分页-->
        <div 
          class="box" 
          style="float: right;margin-right: 370px;">
          <div 
            id="pagination1" 
            class="page fl"/>
          <div class="info fl">
            <!-- <p>当前页数：<span id="current1">1</span></p> -->
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

    </div>
    <div class="h70"/>
  </div>
</template>

<script>
export default {
  name: 'ShiXiao',
  head: {
    link: [{ rel: 'stylesheet', href: '/css/jquery.pagination.css' }]
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
          //点击事件
          $('.list_tiaoj')
            .find('span')
            .click(function() {
              $('.list_tiaoj')
                .find('span')
                .removeClass('active')
              $(this).addClass('active')
            })

          var startCity = $.cookie('currentProvinceFullName')
          var startArea = $.cookie('currentAreaFullName')
          // console.log(cookie1,cookie3)
          //排序点击 S
          $('#seq1').click(function() {
            console.log('clear排序')
            vo.filterSign = 1
            process02(1)
          })
          $('#seq2').click(function() {
            console.log('clear排序')
            vo.filterSign = 2
            process02(1)
          })
          $('.search').click(function() {
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

            window.location =
              '/shixiao?startp=' +
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

          //车源搜索 E
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
          function formatDate(objD) {
            var str, colorhead, colorfoot
            var yy = objD.getYear()
            if (yy < 1900) yy = yy + 1900
            var MM = objD.getMonth() + 1
            if (MM < 10) MM = '0' + MM
            var dd = objD.getDate()
            if (dd < 10) dd = '0' + dd
            var hh = objD.getHours()
            if (hh < 10) hh = '0' + hh
            var mm = objD.getMinutes()
            if (mm < 10) mm = '0' + mm
            var ss = objD.getSeconds()
            if (ss < 10) ss = '0' + ss
            str = yy + '-' + MM + '-' + dd + ' ' + hh + ':' + mm
            return str
          }

          //获取url传过来的参数
          var filterSign1 = GetUrlParam('filterSign')
          var startp1 = GetUrlParam('startp')
          var startc1 = GetUrlParam('startc')
          var starta1 = GetUrlParam('starta')
          var endp1 = GetUrlParam('endp')
          var endc1 = GetUrlParam('endc')
          var enda1 = GetUrlParam('enda')

          //将参数转码
          var filterSign = decodeURI(filterSign1)
          var startp = decodeURI(startp1)
          var startc = decodeURI(startc1)
          var starta = decodeURI(starta1)
          var endp = decodeURI(endp1)
          var endc = decodeURI(endc1)
          var enda = decodeURI(enda1)

          var currentAreaFullName = $.cookie('currentAreaFullName')
          var currentProvinceFullName = $.cookie('currentProvinceFullName')
          //创建一个vo对象，将需要传的参数放在vo中
          var vo = new Object()
          vo.filterSign = filterSign
          vo.startProvince = startp
          vo.startCity = startc
          vo.startArea = starta
          vo.endProvince = endp
          vo.endCity = endc
          vo.endArea = enda

          if (!filterSign || filterSign == 'null') {
            vo.filterSign = 1
          }
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

          //$("#list_nav_a").attr("href",'/plus/list.php?tid=82'+'&starp='+startp+'&startc='+startc+'&starta='+starta+'&endp='+endp+'&endc='+endc+'&enda='+enda);
          $('#list_nav_a').html(
            startc + starta + ' 到 ' + endc + enda + ' 专线时效'
          )
          if ((!startc && !starta) || (!endc && !enda)) {
            $('#list_nav_a').html(
              startc + starta + '  ' + endc + enda + '专线时效'
            )
          }
          //搜索赋input框的初始值

          $('#carLineFrom input').citypicker({
            province: startp,
            city: startc,
            district: starta
          })
          $('#carLineTo input').citypicker({
            province: endp,
            city: endc,
            district: enda
          })

          $('.qiehuan').click(function() {
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
            $('#carLineFrom input').citypicker({
              province: endp,
              city: endc,
              district: enda
            })
            $('#carLineTo input').citypicker({
              province: startp,
              city: startc,
              district: starta
            })
          })
          //车源信息栏目列表S
          function process02(currentPage) {
            var totalPage = 8
            $.ajax({
              type: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              // url:"/api2/aflc-portal/portalt/aflcTransportRange/v1/listRangesAging",
              url:
                '/api/aflc-portal/portalt/aflcTransportRange/v1/listRangesAging',
              dataType: 'json',
              async: false,
              data: JSON.stringify({
                currentPage: currentPage,
                pageSize: 20,
                //vo:{	"strartAddress":start,"endAddress":end,"carType":carType,"carLengthLower":carLength1,"carLengthUpper":carLength2,"carLoadLower":carLoad1,"carLoadUpper":carLoad2}			//JSON.stringify({})
                vo: vo
              }),
              //列表的显示请求接口
              success: function(res) {
                $('#js006 .wzl_box')
                  .not(':eq(0)')
                  .remove()
                if (res.data) {
                  totalPage = res.data.totalPage
                  // console.log(totalPage,88888);
                }
                if (!res.data || !res.data.totalCount) {
                  console.log('内容为空')
                  $('.box').css('display', 'none')
                  $('.list_none').css('display', 'block')
                  return
                }

                //后台返回的参数赋值给datas
                var datas = res.data.list
                // console.log(res)
                for (var i = 0; i < datas.length; i++) {
                  // var  startLocation=datas[i].startLocation ? datas[i].startLocation : '';
                  // var endLocation = datas[i].endLocation ? datas[i].endLocation : '';
                  var startCity = datas[i].startCity ? datas[i].startCity : ''
                  var startArea = datas[i].startArea ? datas[i].startArea : ''
                  var endCity = datas[i].endCity ? datas[i].endCity : ''
                  var endArea = datas[i].endArea ? datas[i].endArea : ''
                  var zhPrice = datas[i].zhPrice
                    ? datas[i].zhPrice + '元/公斤'
                    : '0'
                  var qhPrice = datas[i].qhPrice
                    ? datas[i].qhPrice + '元/m³'
                    : '0'
                  var transportAging = datas[i].transportAging
                    ? datas[i].transportAging
                    : '0'
                  var departureHzData = datas[i].departureHzData
                    ? datas[i].departureHzData + '天'
                    : ''
                  var departureHzTime = datas[i].departureHzTime
                    ? datas[i].departureHzTime + '次'
                    : ''
                  var browseNumber = datas[i].browseNumber
                    ? datas[i].browseNumber
                    : '无'
                  var assessNumber = datas[i].assessNumber
                    ? datas[i].assessNumber + '条'
                    : '无'
                  var companyName = datas[i].companyName
                    ? datas[i].companyName
                    : '无'
                  var transportRemark = datas[i].transportRemark
                    ? datas[i].transportRemark
                    : '无'
                  var transportAgingUnit = datas[i].transportAgingUnit
                    ? datas[i].transportAgingUnit
                    : ''
                  var authStatus = datas[i].authStatus
                  var isVip = datas[i].isVip
                  var collateral = datas[i].collateral
                  // if(transportRemark.length>20){
                  //   transportRemark=transportRemark.substring(0,20)}
                  var address = datas[i].address ? datas[i].address : '无'
                  var companyId = datas[i].companyId
                  var id = datas[i].id
                  var account = datas[i].account
                  //前三个添加颜色
                  $('.wzl_box0 span').addClass('bgr')
                  $('.wzl_box1 span').addClass('bgr')
                  $('.wzl_box2 span').addClass('bgr')
                  //给每一个添加数字12345序号
                  var list_index =
                    i + (res.data.currentPage - 1) * res.data.pageSize + 1
                  // console.log(i, res.data.currentPage, list_index)
                  if (list_index > 20) {
                    $('.wzl_log').css('display', 'none')
                  } else {
                    $('.wzl_log').css('display', 'block')
                  }
                  $('#num').html(list_index)
                  $('#startLocation').html(startCity + startArea)
                  $('#endLocation').html(endCity + endArea)
                  $('#zhPrice').html(zhPrice)
                  $('#qhPrice').html(qhPrice)
                  $('#shixiao').html(transportAging + transportAgingUnit)
                  $('#pinglv').html(departureHzData + departureHzTime)
                  $('#orderNumber').html(browseNumber)
                  $('#assessNumber').html(assessNumber)
                  $('#nr055').html(companyName)
                  $('#nr056').html(transportRemark)
                  $('#nr058').html(address)
                  //  $('#list_shiming')
                  // console.log($('#qinghuo'),datas[i].zhPrice)
                  var qq = datas[i].qq
                  if (!qq) {
                    $('#qq').css('display', 'none')
                  }
                  var credit28 = datas[i].credit28
                  var driverStatus = datas[i].driverStatus

                  var arcurl =
                    '/shixiao/detail?id=' + id + '&publishId=' + companyId //下单
                  var orderurl =
                    '/plus/list.php?tid=77&uid=' +
                    account +
                    '&id=' +
                    id +
                    '&publishId=' +
                    companyId //查看详情
                  $('#nr_a521').attr(
                    'onclick',
                    "window.open('" + orderurl + "')"
                  )
                  $('#nr_a522').attr('onclick', "window.open('" + arcurl + "')")
                  $('#nr_a51').attr('onclick', "window.open('" + arcurl + "')")
                  var s1 = '<div class="wzl_box wzl_box' + i + '">'
                  var s2 = $('.wzl_box').html()
                  var s3 = '</div>'
                  $('#js006').append(s1 + s2 + s3)
                  if (!collateral || collateral == 0) {
                    //实名认证，28信用，担保交易，后台返回authStatus有值就显示，没有值就隐藏
                    $('.wzl_box' + i + ' #list_danbao').css('display', 'none')
                  }
                  if (!isVip || isVip == 0) {
                    console.log('is not Vip')
                    // console.log('wlzx_list'+i+' .wlzx_list_4 .p2');
                    $('.wzl_box' + i + ' #list_xinyong').css('display', 'none')
                  }
                  if (authStatus != 'AF0010403') {
                    // console.log("is not shiming"+startLocation+endLocation);
                    $('.wzl_box' + i + ' #list_shiming').css('display', 'none')
                  }
                }
              },
              error: function(err) {
                console.log(err.responseText)
              }
            })
            // console.log("最终总页数："+totalPage)
            return totalPage
          }
          // process02(1);
          //车源信息栏目列表 E

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
  /* PADDING-top: 6px;  */
  overflow: hidden;
  line-height: 50px;
  height: 50px;
  color: #585858;
  font-size: 18px;
  font-weight: bold;
  background-color: #fff;
  /* border-bottom: 1px solid #ddd; */
  border-bottom: 2px solid #2577e3;
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
  margin: 16px 12px 0 10px;
}
.list_box {
  width: 1400px;
  height: auto !important;
  margin: 0 auto;
  overflow: hidden;
}
.list_left {
  width: 100%;
  float: left;
}
.w1130 {
  /* width: 1130px; */
  width: 100%;
  float: left;
  /*    OVERFLOW: hidden;*/
  min-height: 400px;
}
.search:hover {
  /* background: red; */
  opacity: 0.8;
}
#nr_a521:hover {
  opacity: 0.8;
}
#nr_a522:hover {
  background: #2577e3;
  color: #fff;
}
#nr_a522:hover a {
  color: #fff;
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
  min-height: 200px;
  height: auto !important;
  width: 260px;
  padding: 0px 0px 0 10px;
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
  border-color: #e2e2e2;
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
  color: #999;
  font-size: 14px;
  padding-left: 9px;
}
.list_button {
  width: 72px;
  height: 28px;
  border-radius: 2px;
  border: solid 1px #eb434d;
  background-color: #fff;
  color: #eb434d;
  font-size: 15px;
  background: no-repeat url(../../static/images/01search.png) 45px 6px;
  text-align: left;
  /*padding-left: 8px;*/
  margin-left: 8px;
  cursor: pointer;
}
#flush {
  background: no-repeat url(../../static/images/flush.png) 10px 6px;
  padding-left: 30px;
  width: 50px;
  border: solid 1px #e3e3e3;
  color: #999;
  margin-left: 30px;
}

.list_img {
  position: relative;
  top: 3px;
  left: 5px;
  margin-right: 5px;
}
.select_con dl dd a:hover,
.select_con dl dd a.now {
  background: #eb434d;
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
  /* width: 1130px; */
  width: 100%;
  height: 39px;
  background-color: #f1f1f1;
  /* border: solid 1px #e6e6e6; */
  /* margin-bottom: 14px; */
  /* background: no-repeat url(../images/list_wlzx/xiajt.png) #f1f1f1 363px 16px; */
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
  /* width: 1128px; */
  width: 100%;
  /* height: 120px; */
  padding-top: 20px;
  /* border: solid 1px #dfdfdf; */
  margin-top: -1px;
  background-color: #fff;
  float: left;
  transition: all 0.4s;
}
.wzl_box {
  float: left;
  width: 1400px;
  border-bottom: 1px solid #ddd;
}
/* .wlzx_list:hover{
      transform: translateY(-3px);
      transition-delay: 0.1s;
      box-shadow: 0px 20px 20px -17px rgba(0, 0, 0, 0.40);
      opacity: 0.8;
      background-color: #C4E7FF;
      cursor: pointer;
    } */
.wlzx_list:hover {
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transform: translate3d(0, -2px, 0);
}
.cy_list_1 img {
  vertical-align: middle;
}
.wlzx_list li {
  height: 140px;
  float: left;
  /* overflow: hidden;	 */
}
.cy_list_1 .wlzx_list img {
  transition: 0.7s;
}
.wlzx_list img:hover {
  transform: scale(1.05);
}
/* .wlzx_list_1{
      width: 150px;
      margin-left: 9px;

  }
  .wlzx_list_2{
      width: 300px;
      margin-left: 20px;

  }
  .wlzx_list_3{
      width: 150px;
      margin-left: 30px;


  }
  .wlzx_list_4{
      width: 90px;
      margin-left: 70px;

  }
  .wlzx_list_5{
      width: 75px;
      margin-left: 65px;

  }
  .wlzx_list_6{
      width: 110px;
      margin-left: 130px;

  } */

.wlzx_list_2 p {
  height: 26px;
  line-height: 26px;
}
.wlzx_list_2 .p1 {
  margin-bottom: 3px;
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
.wlzx_list_2 .p2 font {
  color: #2577e3;
  font-size: 13px;
  padding-left: 5px;
}
.wlzx_list_2 .p3 font,
.wlzx_list_2 .p4 font {
  color: #333;
  font-size: 13px;
}
.wlzx_list_2 .p3 i,
.wlzx_list_2 .p4 i {
  color: #666;
  font-size: 13px;
  padding-left: 5px;
}

.wlzx_list_3 p {
  height: 27px;
  line-height: 27px;
  font-size: 13px;
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
  height: 27px;
  line-height: 27px;
  font-size: 13px;
}
.wlzx_list_4 img {
  margin-top: 5px;
}
.wlzx_list_5 p {
  height: 27px;
  line-height: 27px;
  font-size: 12px;
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
  border: solid 1px #dedede;
}
.wlzx_list_6 .p1,
.wlzx_list_6 .p2 {
  margin-bottom: 12px;
}
/* .wlzx_list_6 .p2 a input {margin-bottom: 12px;background-color: #2577e3;} */
.wlzx_list_6 .p1 input {
  background-color: #eb434d;
  color: #fff;
  border: 0px;
  height: 28px;
}
.wlzx_list_6 .p1 input:hover {
  background-color: #ff0000;
}

.wlzx_list_6 .p3 input {
  background: no-repeat url(../../static/images/article_wlzx/15qq.gif) 12px 3px;

  padding-left: 15px;
  width: 87px;
}
.tj_list {
  background-color: #fff;
  margin-top: -1px;
  border: 1px solid #dedede;
  width: 258px;
  font-size: 14px;
}
.tj_list:hover {
  background-color: #f9f9f9;
}
.tj_list p {
  height: 28px;
  line-height: 28px;
  padding-left: 10px;
  padding-right: 0px;
}

.tj_list .p1 {
  height: 50px;
  line-height: 50px;
}
.tj_list .p1 span {
  font-size: 16px;
  color: #666;
}
.tj_list .p1 i {
  color: #c5c5c5;
  font-size: 16px;
  padding: 0 3px 0 3px;
}
.tj_list .p2 span {
  padding: 0 0 0 5px;
}

.tj_list .p3 i,
.tj_list .p3 em,
.tj_list .p4 i {
  font-size: 13px;
  color: #999;
}
.tj_list .p3 font,
.tj_list .p4 font {
  font-size: 13px;
  color: #eb434d;
}
.tj_list .p3 span,
.tj_list .p3 font,
.tj_list .p4 span {
  font-size: 13px;
  color: #666;
}
.tj_list .p3 i {
  float: left;
  width: 65px;
  height: 28px;
}
.tj_list .p3 em {
  float: left;
  width: 45px;
  height: 28px;
}
.tj_list .p3 span {
  float: left;
  width: 50px;
  height: 28px;
}
.tj_list .p3 font {
  float: left;
  width: 60px;
  height: 28px;
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
  border-top: solid 1px #cde0ff;
  text-align: center;
}
.tj_list .p6 span {
  color: #2577e3;
  font-size: 13px;
}
/*物流专线 E */

/*时效查询 S */
.cy_list_1 {
  width: 400px;
  margin-left: 30px;
}
.cy_list_2 {
  width: 150px;
  margin-left: 80px;
}
.cy_list_3 {
  width: 100px;
  margin-left: 80px;
}
.cy_list_4 {
  width: 100px;
  margin-left: 80px;
}

.cy_list_5 {
  width: 100px;
  margin-left: 100px;
}
.wlzx_list_6 {
  width: 100px;
  margin-left: 100px;
}
.cy_list_7 {
  width: 100px;
  margin-left: 50px;
}
.cy_list_1 .p1 {
  margin-bottom: 3px;
  font-size: 16px;
}
.cy_list_1 .p1 a span {
  color: #333333;
  font-size: 16px;
  font-weight: bold;
}
.cy_list_1 .p1:hover a span {
  color: #ff5833;
  cursor: pointer;
}
.cy_list_1 p {
  height: 26px;
  line-height: 26px;
  font-size: 14px;
}
.cy_list_1 p a {
  color: #eb434d;
  font-size: 16px;
}
.cy_list_1 p i {
  font-size: 14px;
  color: #666;
}
.cy_list_1 p span {
  font-size: 14px;
  color: #666;
  padding: 0 2px 0 2px;
}
.cy_list_1 p font {
  font-size: 14px;
  color: #333;
}

.cy_list_2 p {
  height: 27px;
  line-height: 27px;
  font-size: 14px;
}

.cy_list_2 p span {
  color: #fb5000 !important;
  font-size: 14px;
}
.cy_list_2 p i {
  font-size: 14px;
}
.cy_list_4 p {
  height: 26px;
  margin: 0 0 5px 0;
}
.cy_list_7 p {
  color: #fb5000;
  font-size: 14px;
}
.wlzx_list_6 .p2 input {
  background-color: #eb434d;
  color: #fff;
  border: 0;
}
/*车源信息 E */

/*货源信息 S */
/* .cy_list_1{
      width: 351px;
      margin-left: 14px;


  }
  .cy_list_2{
      width: 182px;
      margin-left: 100px;

  }
  .cy_list_3{
      width: 75px;
      margin-left: 80px;


  }
  .cy_list_4{
      width: 80px;
      margin-left: 50px;

  }
  .cy_list_5{
      width: 102px;
      margin-left: 60px;

  } */
.cy_list_1 .p1 {
  margin-bottom: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  color: #eb434d;
  font-size: 13px;
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
.cy_list_2 p font {
  color: #333;
}
.cy_list_3 p {
  height: 27px;
  line-height: 27px;
}
.wlzx_list_6 .p2 .check_btn {
  /* background-color: #eb434d; */
  /* background-color: #2577e3; */
  width: 104px;
  height: 28px;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  display: block;
  /* color: #2577e3; */
  border-radius: 3px;
  border: solid 1px #8dadd8;
  /* background-color: #2577e3; */
  color: #2577e3;
}
/* .active{
    background-color: #2577e3;
    color: #fff;
  } */
.check_btn:active {
  opacity: 0.5;
}
#wlzx_list_view:hover {
  background-color: #f1f1f1;
}
#wlzx_list_view {
  border: solid 1px #dedede;
  background-color: #f9f9f9;
  font-size: 13px;
  color: #333;
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
  margin-left: -140px;
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

/* 出发地到达地 */
.list_search {
  /* margin: 0 60px; */
}
.order-form-item {
  float: left;
  /* width: 470px; */
  /* width: 50%; */
  margin-left: 50px;
}
.order-form-item:first-child .order-form-label {
  padding-left: 10px;
}
.order-form-label,
.order-form-input {
  float: left;
  line-height: 40px;
  position: relative;
}
.order-form-label {
  text-align: right;
}
.shixiao-input {
  width: 340px;
  height: 45px;
  border-radius: 2px;
  border: solid 1px #d2d2d2;
  padding-left: 20px;
}
.order-line-from {
  /* margin-bottom: 20px; */
  background: #fff;
  padding: 20px 80px;
}
.order-line-from .qd {
  position: absolute;
  right: 13px;
  top: 7px;
}
.boxx {
  float: left;
}
#nr056 {
  width: 300px;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.order-line-from .wzl {
  position: absolute;
  right: 13px;
  top: 7px;
}
.search {
  display: block;
  width: 100px;
  height: 47px;
  line-height: 47px;
  background-image: linear-gradient(#79b3ff, #79b3ff),
    linear-gradient(#2577e3, #2577e3);
  background-blend-mode: normal, normal;
  border-radius: 3px;
  text-align: center;
  color: #fff;
  cursor: pointer;
}
.cy_list_1 .bgr {
  float: left;
}
.cy_list_1 .p1 span {
  float: left;
}
.cy_list_1 #startLocation,
#endLocation {
  width: 114px;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
}
/* 为您推荐下面的列表 */
.wzl_box {
  background: #fff;
}
.numlll {
  width: 20px;
  height: 20px;
  display: block;
  float: left;
  margin: -2px 5px;
  vertical-align: middle;
}
.wzl_log span {
  display: block;
  width: 128px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  background: url(../../static/images/wzlImg/bule.png) no-repeat;
}
.wzl_log .bgr {
  display: block;
  width: 128px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
  background: url(../../static/images/wzlImg/red.png) no-repeat;
}
.qiehuan {
  cursor: pointer;
}
.qiehuan:active {
  cursor: pointer;
  /* transform: scale(2); */
  transition-duration: 0.8s;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -webkit-transform: rotate(180deg); /* Safari and Chrome */
  -o-transform: rotate(180deg); /* Opera */
  -moz-transform: rotate(180deg); /* Firefox */
}
.rotate {
  cursor: pointer;
  transition-duration: 1s;
  transform: rotate(180deg);
  -ms-transform: rotate(180deg); /* IE 9 */
  -webkit-transform: rotate(180deg); /* Safari and Chrome */
  -o-transform: rotate(180deg); /* Opera */
  -moz-transform: rotate(180deg); /* Firefox */
}
</style>
