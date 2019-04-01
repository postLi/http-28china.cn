<template>
  <div id="logininfo">登录成功，正在为您跳转...</div>
</template>
<script>
export default {
  layout: 'empty',
  head: {
    title: '登录成功，正在为您跳转...'
  },
  mounted() {
    ;(function() {
      var getParams = function(_keystr, url) {
        var keystr = _keystr || ''
        var args = url || location.search
        args = args.replace(/&amp;/gi, '&')
        if (!args) {
          return ''
        }
        var reg = new RegExp('[?&]' + keystr + '=([^&]*)[&$]?', 'i')
        var chk = args.match(reg)
        return chk ? decodeURIComponent(chk[1]) : ''
      }
      var ele = document.getElementById('logininfo')
      var code = getParams('code')
      var url = decodeURIComponent(getParams('url'))
      var goToUrl = function(url) {
        location.href =
          url + (url.indexOf('?') > 0 ? '&' : '?') + 'code=' + code
      }
      // 1.判断有没有code值，没有code值自动跳转到首页
      if (code) {
        ele.style.display = 'block'
        // 2.判断有没有传链接过来
        if (url) {
          goToUrl(url)
        } else {
          var chost = window.self
          var thost = window.top
          // 3.判断当前域名是否与上级域名一致
          if (chost === thost) {
            // 3.1如果一致，则触发事件并在5s后自动跳转到首页
            var jq = window.top.jQuery
            var fn = window.top.wxLoginSuccess
            if (jq) {
              jq('body').trigger('wxLoginSuccess', code)
            }
            if (fn) {
              fn(code)
            }
            setTimeout(function() {
              location.href = '/'
            }, 5000)
          } else {
            // 3.2不一致，则跳转到当前页面对应域名上
            // goToUrl("http://"+thost+'/plus/list.php?tid=78');
            // 3.3通过posmesage传递信息
            window.top.postMessage &&
              window.top.postMessage('code:' + code, '*')
          }
        }
      } else {
        location.href = '/'
        return false
      }
    })()
  }
}
</script>
<style>
#logininfo {
  text-align: center;
  color: #333;
  display: none;
}
</style>
