$('#bx_lx1_label').click(function() {
  $('.bx_item').removeClass('bx_checked')
  $(this).addClass('bx_checked')
  $('#bx_sm1').css('display', 'block')
  $('#bx_sm2').css('display', 'none')
})
$('#bx_lx2_label').click(function() {
  $('.bx_item').removeClass('bx_checked')
  $(this).addClass('bx_checked')
  $('#bx_sm1').css('display', 'none')
  $('#bx_sm2').css('display', 'block')
})

$('.pay_input1').click(function() {
  $('.pay_input2').removeClass('pay_checked2')
  $(this).addClass('pay_checked1')
})
$('.pay_input2').click(function() {
  $('.pay_input1').removeClass('pay_checked1')
  $(this).addClass('pay_checked2')
})

$('.fapiao span').each(function() {
  $(this).click(function() {
    $('.fapiao span').removeClass('fapiao_checked')
    $(this).addClass('fapiao_checked')
  })
})

$('.tbr_lx label').each(function() {
  $(this).click(function() {
    $('.tbr_lx label').removeClass('bx_checked')
    $(this).addClass('bx_checked')
  })
})

$('.bbr_lx label').each(function() {
  $(this).click(function() {
    $('.bbr_lx label').removeClass('bx_checked')
    $(this).addClass('bx_checked')
  })
})

$('.agree_none').click(function() {
  $(this).toggleClass('agree_yes')
})

// 获取参数
function getRequest() {
  var url = location.search
  var theRequest = {}
  if (url.indexOf('?') !== -1) {
    var str = url.substr(1)
    var strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(
        decodeURI(strs[i].split('=')[1])
      )
    }
  }
  return theRequest
}
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
  postInfo: function(url, data) {
    return this._warpper(
      $.ajax({
        url: this.url + url,
        type: 'POST',
        dataType: 'json',
        // 如果用jq，必须设置以下三项，避免jq 的中间处理
        processData: false,
        cache: false,
        contentType: false,
        headers: {
          'Content-Type': 'application/json',
          user_token: $.cookie('user_token')
        },
        data: JSON.stringify(data),
        error: function(err) {
          if (JSON.parse(err.responseText).error === 'invalid_token') {
            $('body').toast({
              content: '您还未登录，请先登录',
              duration: 3000
            })
            $('.login_box').show()
          }
        }
      })
    )
  },
  getInfo: function(url) {
    return this._warpper(
      $.ajax({
        url: this.url + url,
        type: 'GET',
        dataType: 'json',
        // 如果用jq，必须设置以下三项，避免jq 的中间处理
        processData: false,
        cache: false,
        contentType: false,
        headers: {
          'Content-Type': 'application/json'
        },
        error: function(err) {
          if (JSON.parse(err.responseText).error === 'invalid_token') {
            $('body').toast({
              content: '您还未登录，请先登录',
              duration: 3000
            })
            $('.login_box').show()
          }
        }
      })
    )
  },
  getInfo1: function(url) {
    return this._warpper(
      $.ajax({
        url: this.url + url,
        type: 'GET',
        dataType: 'json',
        // 如果用jq，必须设置以下三项，避免jq 的中间处理
        processData: false,
        cache: false,
        contentType: false,
        headers: {
          'Content-Type': 'application/json'
        },
        error: function(err) {}
      })
    )
  },
  postInfo1: function(url, data) {
    return this._warpper(
      $.ajax({
        url: this.url + url,
        type: 'POST',
        dataType: 'json',
        // 如果用jq，必须设置以下三项，避免jq 的中间处理
        processData: false,
        cache: false,
        contentType: false,
        headers: {
          'Content-Type': 'application/json',
          user_token: $.cookie('user_token')
        },
        data: JSON.stringify(data),
        error: function(err) {}
      })
    )
  }
} //api

//validate
var insuranceValidate = (function() {
  var checkValidate = {
    checkInputText: function(e, validate) {
      if ($(e).val()) {
        if ((validate.reg || validate.regG) && validate.regMsg) {
          var reg
          if (validate.regG) {
            reg = new RegExp(validate.regG, 'g')
          }
          if (validate.reg) {
            reg = new RegExp(validate.reg)
          }
          if (reg.test($(e).val())) {
            $(e).removeClass('error')
            $(e)
              .next()
              .remove()
            $(e).after(
              "<img style='margin-left: 10px' src='../member/templets/img/u198861.png' alt=''>"
            )
          } else {
            $(e)
              .next()
              .remove()
            $(e).after(
              "<span style='margin-left: 10px'><img src='../member/templets/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>" +
                validate.regMsg +
                '</span></span>'
            )
            $(e).addClass('error')
          }
        } else {
          $(e).removeClass('error')
          $(e)
            .next()
            .remove()
          $(e).after(
            "<img style='margin-left: 10px' src='../member/templets/img/u198861.png' alt=''>"
          )
        }
      } else {
        $(e)
          .next()
          .remove()
        if (validate.msg) {
          $(e).after(
            "<span style='margin-left: 10px'><img src='../member/templets/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>" +
              validate.msg +
              '</span></span>'
          )
        } else {
          $(e).after(
            "<span style='margin-left: 10px'><img src='../member/templets/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>必填</span></span>"
          )
        }
        $(e).addClass('error')
      }
    },
    checkSelect: function(e, validate) {
      if (validate.msg !== $(e).val()) {
        $(e).removeClass('error')
        $(e)
          .next()
          .remove()
        $(e).after(
          "<img style='margin-left: 10px' src='../member/templets/img/u198861.png' alt=''>"
        )
      } else {
        $(e)
          .next()
          .remove()
        $(e).addClass('error')
        $(e).after(
          "<span style='margin-left: 10px'><img src='../member/templets/img/u198863.png' alt=''><span style='position: relative;top: -3px;left: 5px;'>" +
            validate.msg +
            '</span></span>'
        )
      }
    },
    init: function() {
      $('.validateForm input,select').each(function(i, e) {
        if ($(e).attr('validate')) {
          try {
            var validate = JSON.parse($(e).attr('validate'))
            if (validate.constructor === Object) {
              if ($(e)[0].tagName === 'INPUT') {
                $(e).blur(function() {
                  checkValidate.checkInputText(e, validate)
                })
              }
              if ($(e)[0].tagName === 'SELECT') {
                $(e).change(function() {
                  checkValidate.checkSelect(e, validate)
                })
              }
            } else {
              console.log('必须是Object')
            }
          } catch (e) {
            console.log(e)
          }
        }
      })
    },
    check: function() {
      $('.validateForm input,select').each(function(i, e) {
        if ($(e).attr('validate')) {
          try {
            var validate = JSON.parse($(e).attr('validate'))
            if (validate.constructor === Object) {
              if ($(e)[0].tagName === 'INPUT') {
                checkValidate.checkInputText(e, validate)
              }
              if ($(e)[0].tagName === 'SELECT') {
                checkValidate.checkSelect(e, validate)
              }
            } else {
              console.log('必须是Object')
            }
          } catch (e) {
            console.log(e)
          }
        }
      })

      if ($('.validateForm').find('.error').length === 0) {
        return true
      } else {
        return false
      }
    }
  }
  checkValidate.init()
  return {
    check: checkValidate.check
  }
})()
