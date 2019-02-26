$('#echart_price').click(function() {
  alert('此功能正在开发者，敬请期待！')
})
$('#echart_sx').click(function() {
  alert('此功能正在开发者，敬请期待！')
})
function line_cx() {
  var list1 = [],
    list2 = []
  $('#cx_start .select-item').each(function(i, e) {
    list1.push($(this).text())
  })
  var startp = list1[0]
  var startc = list1[1]
  var starta = list1[2]

  $('#cx_end .select-item').each(function(i, e) {
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
  window.open(
    '/zhuanxian/list?startp=' +
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
  )
}

$(function() {
  var api = {
    url: '/api',
    _warpper: function(pro) {
      var defer = $.Deferred()
      pro
        .done(function(res) {
          if (res.status === 200) {
            defer.resolve(res)
          } else {
            defer.reject(res)
          }
        })
        .fail(function() {
          defer.reject({
            text: '网络出错了。',
            status: 100
          })
        })

      return defer.promise()
    },
    getInfo: function(start, end) {
      return this._warpper(
        $.get(this.url + '/api-plugin/cms/cmspricetrend/v1/getPriceLists', {
          fromadd: start,
          toadd: end
        })
      )
    }
  }

  var lis = $('.line-list-ul li')
  lis.on('mouseenter', function() {
    lis.removeClass('current')
    $(this).addClass('current')
    $('.line-list-echart').css('display', 'block')
    var start = $(this)
      .find('.linestart')
      .text()
    var end = $(this)
      .find('.lineend')
      .text()
    var echart_url =
      '/create/order?&start=' +
      start +
      '&end=' +
      end +
      '&startc=' +
      start +
      '&endc=' +
      end
    $('#echart_order').attr('href', echart_url)
    showBigEchart(start, end)
  })
  $('.line-list-echart').mouseleave(function() {
    $('.line-list-echart').css('display', 'none')
    lis.removeClass('current')
  })

  $('.linelist').mouseleave(function() {
    $('.line-list-echart').css('display', 'none')
    lis.removeClass('current')
  })
  $('.line-list-echart').mouseenter(function() {
    $('.line-list-echart').css('display', 'block')
    lis.removeClass('current')
  })

  var mybigchart
  function showBigEchart(start, end) {
    // 还没有echart对象，则先进行初始化
    if (!mybigchart) {
      mybigchart = echarts.init($('.echartbox')[0])
    }
    mybigchart.showLoading()
    api
      .getInfo(start, end)
      .done(function(res) {
        var data = res.data[0] || []
        var zhong = []
        var qing = []
        var week = []

        data.reverse()
        $.each(data, function(index, ele) {
          zhong.push(ele.heavyCargo)
          qing.push(ele.lightGoods)
          week.push(ele.week)
        })

        var option = {
          title: {
            text: start + ' - ' + end,
            subtext: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['重货', '轻货']
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: false },
              dataView: { show: false, readOnly: false },
              magicType: { show: true, type: ['line', 'bar'] },
              restore: { show: false },
              saveAsImage: { show: false }
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: week
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '重货',
              type: 'bar',
              data: zhong,
              itemStyle: {
                normal: {
                  color: '#169bd5',
                  areaStyle: { color: '#169bd5' }
                }
              },
              markPoint: {
                data: [
                  { type: 'max', name: '最大值' },
                  { type: 'min', name: '最小值' }
                ]
              },
              markLine: {
                data: [{ type: 'average', name: '平均值' }]
              }
            },
            {
              name: '轻货',
              type: 'bar',
              data: qing,
              itemStyle: {
                normal: {
                  color: '#333',
                  areaStyle: { color: '#333' }
                }
              },
              markPoint: {
                data: [
                  { name: '年最高', type: 'max' },
                  { name: '年最低', type: 'min' }
                ]
              },
              markLine: {
                data: [{ type: 'average', name: '平均值' }]
              }
            }
          ]
        }

        mybigchart.hideLoading()
        mybigchart.setOption(option)
      })
      .fail(function() {
        // mybigchart.hideLoading();
        // alert('加载数据失败了！')
      })
  }

  var start = $('.current')
    .find('.linestart')
    .text()
  var end = $('.current')
    .find('.lineend')
    .text()
  $('.current').append($('.echartbox2'))
  showSmallEchart(start, end)
  var lis2 = $('.line-list-ul2 li')
  lis2.on('mouseenter', function() {
    lis2.removeClass('current')
    $(this).addClass('current')
    var start = $(this)
      .find('.linestart')
      .text()
    var end = $(this)
      .find('.lineend')
      .text()
    $(this).append($('.echartbox2'))
    showSmallEchart(start, end)
  })

  var mysmallchart
  function showSmallEchart(start, end) {
    if (!mysmallchart) {
      mysmallchart = echarts.init($('.echartwrapper')[0])
    }
    mysmallchart.showLoading()
    api
      .getInfo(start, end)
      .done(function(res) {
        var data = res.data[0] || []
        var zhong = []
        var qing = []
        var week = []

        data.reverse()
        $.each(data, function(index, ele) {
          zhong.push(ele.heavyCargo)
          qing.push(ele.lightGoods)
          week.push(ele.week)
        })
        var option = {
          /*  title : {
            text: start + ' - '+ end,
            subtext: ''
        }, */
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['重货', '轻货']
          },
          grid: [
            {
              left: '50',
              bottom: '20',
              top: '20'
            }
          ],
          toolbox: {
            show: false,
            feature: {
              mark: { show: true },
              dataView: { show: false, readOnly: false },
              magicType: {
                show: true,
                type: ['line', 'bar', 'stack', 'tiled']
              },
              restore: { show: false },
              saveAsImage: { show: false }
            }
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: week
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '重货',
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: 'solid',
                    color: '#169bd5'
                  }
                }
              },
              type: 'line',
              data: zhong
            },
            {
              name: '轻货',
              itemStyle: {
                normal: {
                  lineStyle: {
                    type: 'solid',
                    color: '#333'
                  }
                }
              },
              type: 'line',
              data: qing
            }
          ]
        }

        mysmallchart.hideLoading()
        mysmallchart.setOption(option)
      })
      .fail(function() {
        //alert('加载数据出错了。')
        mysmallchart.hideLoading()
      })
  }
})
