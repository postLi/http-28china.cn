<template>
  <div>
    <div class="list_box">
      <div class="list_nav">
        <a href="/">物流首页</a>&gt;<a 
          id="list_nav_a" 
          href="">物流园区</a>
      </div>
      <div class="list_left">
        <div 
          class="w1036" 
          style=" background-color: #fff;">
          <!--
          <div class="zx_sx"><span class="biaozhi"></span><span>园区筛选</span>
          <a class="toggle-btn show-collapse" href="#">
                <span class="expand">
                  <span>显示筛选</span><span class="arrow icon-btn-arrow-down-2"></span>
                </span>
                <span class="collapse">
                  <span>收起筛选</span><span class="arrow icon-btn-arrow-up-2"></span>
                </span>
              </a>
          </div>
          -->
          <div class="select_con">

            <dl>
              <dt><span>园区所在地&nbsp;：</span></dt>
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
                  id="parkAddress" 
                  class="fl list_input" 
                  style="position:relative;" >
                  <input 
                    name="cfd" 
                    style="height: 100%;" 
                    data-toggle="city-picker" 
                    data-level="district" 
                    type="text"
                    placeholder="请选择省-市-区" >
                </div>
                <span>&nbsp;园区名称&nbsp;：</span>
                <input 
                  id="parkName" 
                  name="ddd" 
                  type="text"
                  class="list_input" 
                  placeholder="请输入园区名称" >
                <input 
                  id="search_wlyq" 
                  name="Submit2" 
                  value=" 搜索 " 
                  readonly="" 
                  class="list_button">
                <input 
                  id="flush" 
                  name="Submit2" 
                  value="重置 " 
                  readonly="" 
                  class="list_button">
              </form>
              </dd>







            </dl>
          </div>
        </div>
        <div 
          id="js005" 
          class="w1036 list_wlyq">

          <!--<div class="zx_sx"><span class="biaozhi"></span><span>园区信息</span></div>-->
          <div class="list_none">
            <span>暂时没有找到您要查询的信息，可以看看其他园区哦</span>
            <img src="../../static/images/none_pic.png">
          </div>

          <ul 
            class="wlzx_list" 
            style="display: none;" >
            <a 
              id="nr01" 
              target="_blank" 
              href="#">
              <li class="wlzx_list_01"><img 
                id="nr02" 
                src="../../static/images/list_wlzx/wlyq_pic.png"
                class="scrollLoading" 
                width="268" 
                height="268"></li>
              <li class="wlzx_list_02"><span id="nr03"/></li>
              <li class="wlzx_list_03"><font id="nr04"/><i>条</i><span>优质专线</span></li>
              <li class="wlzx_list_04"><span id="nr05"/></li>
              <li class="wlzx_list_05"><span id="nr06"/></li>
            </a>
          </ul>







        </div>

        <!--分页-->
        <div 
          class="box" 
          style="float: right;margin-right: 170px;">
          <div 
            id="pagination1" 
            class="page fl"/>
          <div class="info fl">
            <!--<p>当前页数：<span id="current1">1</span></p>-->
          </div>
        </div>
        <!--分页-->

        <div class="bottom_wlyq" >
          <div class="bottom_wlyq_bt">您可能对这些感兴趣</div>
          <div 
            id="js006" 
            class="bottom_wlyq_nr">
            <div 
              id="wlyq_item1" 
              class="bottom_wlyq_item" 
              style="display: none;"><a 
                id="wlyq_item0" 
                target="_blank" 
                href="#">深圳物流园</a></div>
          </div>
        </div>

      </div>

      <div 
        id="js010" 
        class="list_right">

        <div class="zx_sx"><span class="biaozhi"/><span>园区推荐</span></div>
        <div class="tj_none hy_tj_none">
          <span>暂无相关园区推荐</span>
        </div>
        <div 
          class="tj_list" 
          style="display: none;">
          <a 
            id="tj01" 
            target="_blank" 
            href="#">
            <div class="p p1"><span id="tj02"/>
            </div>
            <div class="p p3">
              <ul>
                <li class="tj_left tj_left1"><font id="tj03"/><em>条</em></li>
                <li class="tj_right"><span >优质专线</span></li>
                <li class="tj_left tj_left2"><font id="tj04"/><em>家</em></li>
                <li class="tj_right"><span >优质物流公司</span></li>
              </ul>
            </div>
            <div class="p p4">
              <span id="tj05"/>
            </div>
            <div class="p p5"><span id="tj06"/></div>
          </a>
        </div>


      </div>
    </div>
    <div class="h70"/>
  </div>
</template>

<script>
export default {
  name: 'WuLiu',
  head: {
    title: '物流园区-28快运',
    meta: [
      {
        name: 'keywords',
        content:
          '物流,物流平台,物流专线,物流公司,物流服务,在线发货,查询运价,运单查询,运单跟踪,物流帮'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '28快运是专业提供零担运输和整车运输等物流服务平台，同时提供免费发布货源、车源、专线。货主在线发货，物流跟踪查询，服务有保障，让您发货省时，省钱，更省心！'
      }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/jquery.pagination.css' },
      { rel: 'stylesheet', href: '/css/list_wlyq.css' }
    ]
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

          var locationProvince1 = GetUrlParam('locationProvince')
          var locationCity1 = GetUrlParam('locationCity')
          var locationArea1 = GetUrlParam('locationArea')
          var parkName1 = GetUrlParam('parkName')

          var locationProvince = decodeURI(locationProvince1)
          var locationCity = decodeURI(locationCity1)
          var locationArea = decodeURI(locationArea1)
          var parkName = decodeURI(parkName1)

          var currentProvinceFullName = $.cookie('currentProvinceFullName')
          var currentAreaFullName = $.cookie('currentAreaFullName')

          var vo = new Object()

          vo.locationProvince = locationProvince
          vo.locationCity = locationCity
          vo.locationArea = locationArea
          vo.parkName = parkName

          if (!locationProvince || locationProvince == 'null') {
            locationProvince = currentProvinceFullName
            vo.locationProvince = locationProvince
          }
          if (!locationCity || locationCity == 'null') {
            locationCity = currentAreaFullName
            vo.locationCity = locationCity
          }
          if (!locationArea || locationArea == 'null') {
            locationArea = ''
            delete vo.locationArea
          }
          if (!parkName || parkName == 'null') {
            parkName = ''
            delete vo.parkName
          }

          $('#parkAddress input').citypicker({
            province: locationProvince,
            city: locationCity,
            district: locationArea
          })
          //$("#list_nav_a").attr("href",'/plus/list.php?tid=1'+'&locationProvince='+locationProvince+'&locationCity='+locationCity+'&locationArea='+locationArea);
          $('#list_nav_a').html(locationCity + locationArea + '物流园区')

          $('#parkName').val(parkName)

          //清空条件
          $('#flush').click(function() {
            console.log('清空地址')
            window.location.href = '/wuliu'
          })
          //清空条件
          //园区搜索 S

          $('#search_wlyq').click(function() {
            var list1 = []
            $('#parkAddress .select-item').each(function(i, e) {
              list1.push($(this).text())
            })
            var locationProvince = list1[0]
            var locationCity = list1[1]
            var locationArea = list1[2]
            if (!locationProvince) {
              locationProvince = ''
            }
            if (!locationCity) {
              locationCity = ''
            }
            if (!locationArea) {
              locationArea = ''
            }
            locationProvince = encodeURI(locationProvince)
            locationCity = encodeURI(locationCity)
            locationArea = encodeURI(locationArea)

            var parkName = $('#parkName').val()
            var parkAddress =
              '&locationProvince=' +
              locationProvince +
              '&locationCity=' +
              locationCity +
              '&locationArea=' +
              locationArea

            if (!parkAddress) {
              parkAddress = ''
            }
            if (!parkName) {
              parkName = ''
            }

            parkName = encodeURI(parkName)

            window.location = '/wuliu?' + parkAddress + '&parkName=' + parkName
          })

          //园区搜索 E

          //园区列表推荐列表S
          function process01() {
            $.ajax({
              type: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              url:
                '/api/aflc-portal/portalt/aflclogisticspark/v1/Gateway/RecommendParklist',
              dataType: 'json',
              data: JSON.stringify({
                currentPage: 1,
                pageSize: 14,
                vo: vo //JSON.stringify({})
              }),
              success: function(res) {
                if (!res.data || res.data.list == '') {
                  console.log('推荐内容为空')
                  $('.tj_none').css('display', 'block')
                  return
                }
                var datas = res.data.list

                for (var i = 0; i < datas.length; i++) {
                  var id = datas[i].id
                  var parkName = datas[i].parkName
                  var parkAddress = datas[i].parkAddress
                  var transportNumber = datas[i].transportNumber
                  if (!transportNumber) {
                    transportNumber = 0
                  }
                  var browseNumber = datas[i].browseNumber
                  if (!browseNumber) {
                    browseNumber = 0
                  }
                  var netWorkNumber = datas[i].netWorkNumber
                  if (!netWorkNumber) {
                    netWorkNumber = 0
                  }
                  var url = '/wuliu/detail?id=' + id

                  $('#tj01').attr('href', url)
                  $('#tj02').html(parkName)
                  $('#tj03').html(transportNumber)
                  $('#tj04').html(netWorkNumber)
                  $('#tj05').html(parkAddress)
                  $('#tj06').html(browseNumber)

                  var s1 = '<div class="tj_list tj_list' + i + '">'
                  var s2 = $('.tj_list').html()
                  var s3 = '</div>'
                  $('#js010').append(s1 + s2 + s3)
                }
              },
              error: function(err) {
                console.log(err.responseText)
              }
            })
          }
          process01()
          //园区列表推荐列表 E

          //园区信息栏目列表S
          function process02(currentPage) {
            var totalPage = 8
            $.ajax({
              type: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              url:
                '/api/aflc-portal/portalt/aflclogisticspark/v1/Gateway/Gatewaylist',
              dataType: 'json',
              async: false,
              data: JSON.stringify({
                currentPage: currentPage,
                pageSize: 21,

                vo: vo //JSON.stringify({})
              }),
              success: function(res) {
                $('#js005 .wlzx_list')
                  .not(':eq(0)')
                  .remove()
                if (res.data) {
                  totalPage = res.data.pages
                  console.log(totalPage)
                }

                if (!res.data || !res.data.total) {
                  console.log('内容为空')
                  $('.box').css('display', 'none')
                  $('.list_none').css('display', 'block')
                  return
                }
                var datas = res.data.list

                for (var i = 0; i < datas.length; i++) {
                  var id = datas[i].id
                  var parkName = datas[i].parkName
                  var parkAddress = datas[i].parkAddress
                  var transportNumber = datas[i].transportNumber
                  var parkSignPicture = datas[i].parkSignPicture
                  var browseNumber = datas[i].browseNumber
                  if (!transportNumber) {
                    transportNumber = 0
                  }
                  var url = '/wuliu/detail?id=' + id

                  $('#nr01').attr('href', url)
                  $('#nr02').attr('src', parkSignPicture)
                  $('#nr03').html(parkName)
                  $('#nr04').html(transportNumber)
                  $('#nr05').html(parkAddress)
                  $('#nr06').html(browseNumber)

                  var s1 = '<ul class="wlzx_list wlzx_list' + i + '">'
                  var s2 = $('.wlzx_list').html()
                  var s3 = '</ul>'
                  $('#js005').append(s1 + s2 + s3)
                }
              },
              error: function(err) {
                console.log(err.responseText)
              }
            })
            console.log('最终总页数：' + totalPage)
            return totalPage
          }
          process02(1)
          //园区信息栏目列表 E

          //园区底部感兴趣列表S
          function wlyq_interest(currentPage) {
            $.ajax({
              type: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              url:
                '/api/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getLogisticsPark',
              dataType: 'json',
              data: JSON.stringify({
                currentPage: currentPage,
                pageSize: 16,

                vo: vo //JSON.stringify({})
              }),
              success: function(res) {
                $('#js006 .bottom_wlyq_item')
                  .not(':eq(0)')
                  .remove()

                if (!res.data || !res.data.total) {
                  return
                }
                var datas = res.data.list
                for (var i = 0; i < datas.length; i++) {
                  var id = datas[i].id
                  var parkName = datas[i].parkName
                  var url = '/wuliu/detail?id=' + id

                  var s1 =
                    '<div class="bottom_wlyq_item bottom_wlyq_item' + i + '">'
                  var s2 = $('.bottom_wlyq_item').html()
                  var s3 = '</div>'
                  $('#js006').append(s1 + s2 + s3)
                  $('.bottom_wlyq_item' + i + ' #wlyq_item0').attr('href', url)
                  $('.bottom_wlyq_item' + i + ' #wlyq_item0').html(parkName)
                }
              },
              error: function(err) {
                console.log(err.responseText)
              }
            })
          }
          wlyq_interest(1)
          //园区底部感兴趣列表 E
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
</style>
