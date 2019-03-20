<template>
  <div class="w1400 center clear" >
    <div class="hyq_banner">
      <img 
        src="/images/ydcx/banner.jpg" 
        alt="">
    </div>
    <div class="find_order clearfix">
      <!-- 左边栏	 -->
      <div class="find_order_left">
        <div class="find_order_tab">
          <div class="find_order_tab_title">常见问题</div>
          <ul>
            <li 
              v-for="(item, index) in $store.state.news.cjwt"
              :key="index">
              <a 
                :title="item.title" 
                :href="item.url" 
                target="_blank">{{ item.title }}</a>
            </li>
          </ul>
        </div>
        <div class="find_order_tab find_order_quesiton">
          <div class="find_order_tab_title">查单遇到问题？</div>
          <ul>
            <li>客服热线：     <span class="findo_ico_mobile">400-9992828</span></li>
            <li>在线客服：<span class="find_ico_qq">QQ交谈</span></li>
          </ul>
        </div>
        <div class="find_order_tab find_order_tab_tip">
          <div class="find_order_tab_title">温馨提示</div>
          <ul>
            <li>目前仅支持查询平台下单的运单哦</li>
          </ul>
        </div>
        <a 
          href="/help/tsjy/index.jhtml" 
          class="find_order_tousu" 
          target="_blank">投诉建议</a>
        <a 
          href="/create/order?" 
          class="find_order_xiadan" 
          target="_blank">我要下单</a>
      </div>
      <!-- 右边栏 -->
      <div class="find_order_right find_order_tip">
        <h3 class="find_order_title">货物追踪</h3>
        <div class="find_order_search"><div class="find_order_search_tip">请输入运单号,例如：<div id="ydh">1809260061</div></div>	<input 
          id="find_order_input" 
          type="text"><span class="find_order_search_btn">查询</span></div>
        <!-- 没有内容 -->
        <div class="find_order_default find_order_con hide">
          <p>
            无内容真可怕<br>你试试查个运单号就有了！
          </p>
        </div>
        <!-- 有内容 -->
        <div class="find_order_content find_order_content_info find_order_con hide">
          <div class="find_order_tabs">
            <a 
              href="javascript:;" 
              class="active">运单详情</a>
            <a 
            href="javascript:;">轨迹跟踪</a>
          </div>
          <div id="find_order_map"/>
          <span class="return_search">返回搜索列表</span>
          <div class="find_order_company find_order_desc"/>
          <div class="find_order_list find_order_desc">
            <ul>
            <!-- <li class="find_order_sign">
						<span class="find_order_date">2018-070120011</span>
						<span class="find_order_line"></span>
						<span class="find_order-info">
							【广东广州怡新路分部】已签收，签收人是本人
						</span>
					</li>
					<li class="find_order_create">
						<span class="find_order_date">2018-070120011</span>
						<span class="find_order_line"></span>
						<span class="find_order-info">
							【广东广州怡新路分部】已签收，签收人是本人
						</span>
					</li> -->
            </ul>
          </div>
        </div>
        <!-- 选择公司 -->
        <div class="find_order_search_list find_order_con find_order_content hide">
          <div class="find_order_company">为您找到“<span title="11111111">111111</span>”相关结果<i>2</i>个</div>
          <div class="find_order_company_list">
            <ol>
            <!-- <li><span class="find_company_order">3487458493874599
						广州运力公司
					</span></li> -->
            </ol>
          </div>
        </div>
        <!-- 查无运单 -->
        <div class="find_order_none find_order_con hide">
          <div class="none_tip_text">抱歉暂无查询记录</div>
          <div class="none_tip_desc">请您仔细核对物流公司名称和运单号码</div>
        </div>
      </div>
    </div>	
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: '运单查询',
      // meta: [{ hid: 'description', name: 'description', content: this.desc }],
      link: [{ rel: 'stylesheet', href: '/index/css/find_order.css' }],
      script: [{ src: 'js/domap.js' }]
    }
  },
  async fetch({ store, params, $axios, error }) {
    await store.dispatch('news/GETNEWSINFO', {
      params: {
        channelIds: '113,114,115,116',
        count: '6',
        // checked: 'true',
        // recommend: '1',
        orderBy: '9',
        channelOption: '0'
      },
      name: 'cjwt',
      preFn: data => {
        return data.map(el => {
          el.url = el.url.replace('http://192.168.1.79/anfacms', '/help')
          return el
        })
      }
    })
  },
  mounted() {
    seajs.use(
      [
        'https://webapi.amap.com/maps?v=1.4.8&key=e61aa7ddc6349acdb3b57c062080f730&plugin=AMap.Autocomplete,AMap.PlaceSearch,AMap.Geocoder&callback=loadedGaodeMap'
      ],
      function() {
        ;(function($) {
          if (!$) {
            return
          }
          // 初始化地图-轨迹跟踪
          initDoMap('find_order_map', 'control')

          // 点击运单号
          $('#ydh').click(function() {
            $('#find_order_input').val('1809260061')
            $('.find_order_search_tip').css('display', 'none')
          })
          //判断输入内容
          $('#find_order_input').keyup(function() {
            if (!$('#find_order_input').val()) {
              $('.find_order_search_tip').css('display', 'block')
            }
            if ($('#find_order_input').val()) {
              $('.find_order_search_tip').css('display', 'none')
            }
          })
          // 控制输入框行为

          $('#find_order_input').on({
            keyup: function() {
              if (this.value) {
                $('.find_order_search').addClass('hide_search_tip')
              } else {
                $('.find_order_search').removeClass('hide_search_tip')
              }
            },
            focus: function() {
              //$('.find_order_search').addClass('hide_search_tip');
            },
            blur: function() {
              if (!this.value) {
                $('.find_order_search').removeClass('hide_search_tip')
              } else {
                $('.find_order_search').addClass('hide_search_tip')
              }
            }
          })

          var AFWL_API = {
            url: '/api',
            findByNum: function(num) {
              return $.get(
                this.url +
                  '/aflc-portal/order/fclOrder/v1/queryCompanyBySerial/' +
                  num
              )
            },
            getInfoById: function(id) {
              return $.get(
                this.url +
                  '/aflc-portal/order/fclOrder/v1/queryWaybillStateById/' +
                  id
              )
            },
            getCompanyOrder: function(cid, num) {
              return $.get(
                this.url +
                  '/aflc-portal/order/fclOrder/v1/queryCurrentCompanyWaybillInfoBySerial',
                {
                  userName: cid,
                  serial: num
                }
              )
            }
          }
          function findByCompany(queryuid, querynum) {
            return AFWL_API.getCompanyOrder(queryuid, querynum)
              .done(function(res) {
                $('.find_order_con').addClass('hide')
                var data = res.data
                if (res.status === 200 && data.length) {
                  $('.return_search').hide()
                  render(data)
                  $('.find_order_content_info').removeClass('hide')
                } else {
                  $('.return_search').show()
                  $('.find_order_none').removeClass('hide')
                }
              })
              .fail(function() {
                alert('请求出错了~')
              })
          }
          function findById(id) {
            return AFWL_API.getInfoById(id)
              .done(function(res) {
                if (res.status === 200) {
                  $('.find_order_con').addClass('hide')
                  render(res.data)
                  $('.find_order_content_info').removeClass('hide')
                } else {
                  alert('查询出错了:' + (res.errorInfo || res.text))
                  //$('.find_order_none').removeClass('hide');
                }
              })
              .fail(function() {
                alert('请求出错了~')
              })
          }
          function findByNum(querynum) {
            return AFWL_API.findByNum(querynum)
              .done(function(res) {
                $('.find_order_con').addClass('hide')
                if (res.status === 200 && res.data.length) {
                  if (res.data.length === 1) {
                    $('.return_search').hide()
                    findById(res.data[0].id)
                    getOrderLine(res.data[0].orgId, res.data[0].shipSn)
                  } else {
                    $('.return_search').show()
                    var data = res.data
                    var title = $('.find_order_search_list .find_order_company')
                    title.find('span').text(querynum)
                    title.find('span').attr('title', querynum)
                    title.find('i').text(data.length)

                    var str = ''
                    var len = data.length

                    for (var i = 0; i < len; i++) {
                      str +=
                        '<li><span rel="' +
                        data[i].id +
                        '" data-name="' +
                        data[i].orgId +
                        '" data-ship="' +
                        data[i].shipSn +
                        '" class="find_company_order">' +
                        data[i].shipSn +
                        ' <i>' +
                        data[i].companyName +
                        '</i> </span></li>'
                    }

                    $('.find_order_search_list ol').html(str)
                    $('.find_order_search_list').removeClass('hide')
                  }
                } else {
                  $('.find_order_none').removeClass('hide')
                }
              })
              .fail(function() {
                alert('请求出错了~')
              })
          }
          function render(data) {
            if (data[0].orgName) {
              $('.find_order_content_info .find_order_company').text(
                data[0].orgName
              )
            }
            var tpl =
              '<li class="{class}"> <span class="find_order_date">{date}</span> <span class="find_order_line"><i></i></span> <span class="find_order-info"><b>{trackNode}</b> {trackInfo} </span> </li>'
            var str = ''
            var len = data.length
            for (var i = 0; i < len; i++) {
              str += tpl
                .replace(
                  '{class}',
                  i === 0 &&
                  data[i].trackNode === '签收' &&
                  data[i].trackType === 0
                    ? 'find_order_sign'
                    : i === len - 1
                      ? 'find_order_create'
                      : ''
                )
                .replace('{date}', data[i].createTime)
                .replace('{trackNode}', data[i].trackNode)
                .replace('{trackInfo}', data[i].trackInfo)
            }

            $('.find_order_list').html(str)
          }
          // 如果传了参数，则进行判断
          var querynum = $.getParams('num')
          var queryuid = $.getParams('uid')
          // 1.传了uid跟num值
          if (querynum && queryuid) {
            $('#find_order_input')
              .val(querynum)
              .trigger('blur')
            findByCompany(queryuid, querynum)
          } else if (querynum) {
            $('#find_order_input')
              .val(querynum)
              .trigger('blur')
            // 2.只传num值
            findByNum(querynum)
          } else {
            // 3.什么都没传
            $('.find_order_default').removeClass('hide')
          }

          // 搜索按钮
          $('.find_order_search_btn').on({
            click: function() {
              var querynum = $.trim($('#find_order_input').val())
              if (querynum) {
                var queryuid = $.getParams('uid')
                if (queryuid) {
                  findByCompany(queryuid, querynum)
                } else {
                  findByNum(querynum)
                }
              } else {
                alert('请输入你要搜索的值')
              }
            }
          })

          // 列表点击公司
          $('.find_order_company_list').on('click', 'span', function() {
            findById($(this).attr('rel'))
            getOrderLine($(this).attr('data-name'), $(this).attr('data-ship'))
          })
          // 返回公司列表
          $('.return_search').on('click', function() {
            $('.find_order_content_info').addClass('hide')
            $('.find_order_search_list').removeClass('hide')
          })
          // 切换tab详情及轨迹
          $('.find_order_tabs a').on('click', function() {
            $('.find_order_tabs a').removeClass('active')
            $(this).addClass('active')
            if (
              $(this)
                .text()
                .indexOf('轨迹跟踪') !== -1
            ) {
              $('.find_order_desc').hide()
              $('#find_order_map').show()

              if (window.pathSimplifierIns && pathNavigs && pathNavigs.length) {
                console.log('pathNavigs', pathNavigs, window.pathSimplifierIns)
                window.pathSimplifierIns.setFitView()
              }
            } else {
              $('#find_order_map').hide()
              $('.find_order_desc').show()
            }
          })
        })(window.jQuery)
      }
    )
  }
}
</script>
