//获取参数的值
function GetQueryString(e) {
  var t = new RegExp('(^|&)' + e + '=([^&]*)(&|$)'),
    s = window.location.search.substr(1).match(t)
  return null != s ? unescape(s[2]) : null
}
var aid = GetQueryString('id')
var driverId = GetQueryString('driverId')

//找专线/货源/车源 S
$('.arc_input3').click(function() {
  var search_type = $('#search_type option:selected').attr('name')
  var start = $('.arc_input1').val()
  var end = $('.arc_input2').val()
  console.log(
    '搜索类型：' + search_type + '出发地：' + start + '到达地：' + end
  )
  if (search_type == 'zx') {
    window.open('/plus/list.php?tid=4&start=' + start + '&end=' + end)
  }
  if (search_type == 'huo') {
    window.open('/huoyuan?start=' + start + '&end=' + end)
  }
  if (search_type == 'che') {
    window.open('/cheyuan?start=' + start + '&end=' + end)
  }
})
