function gotoline() {
  var code = $.cookie('currentArea')
  window.location.href = '/zhuanxian/' + code + '.htm'
}

function memu_on() {
  var myhref = window.location.href
  if (myhref.indexOf('tid=2') != -1) {
    console.log('#hy')
    $('#hy').addClass('nav-active')
  }
  if (myhref.indexOf('tid=3') != -1) {
    $('.header_bottom li').removeClass('nav-active')
    $('#cy').addClass('nav-active')
  }
  if (myhref.indexOf('tid=80') != -1) {
    $('.header_bottom li').removeClass('nav-active')
    $('#gs').addClass('nav-active')
  }
  if (myhref.indexOf('tid=81') != -1) {
    $('.header_bottom li').removeClass('nav-active')
    $('#wd').addClass('nav-active')
  }
  if (myhref.indexOf('tid=82') != -1) {
    $('.header_bottom li').removeClass('nav-active')
    $('#sx').addClass('nav-active')
  }
  if (myhref.indexOf('tid=1') != -1 && myhref.indexOf('tid=10') == -1) {
    $('.header_bottom li').removeClass('nav-active')
    $('#wlyq').addClass('nav-active')
  }
  if (myhref.indexOf('tid=12') != -1) {
    $('.header_bottom li').removeClass('nav-active')
    $('#news').addClass('nav-active')
  }
  if (myhref.indexOf('/default/htm/') != -1 || myhref.indexOf('tid=4') != -1) {
    $('.header_bottom li').removeClass('nav-active')
    $('#wlzx').addClass('nav-active')
  }
}
memu_on()
