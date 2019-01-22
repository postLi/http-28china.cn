$('.collapse').click(function () {
  $('.collapse').css('display', 'none');
  $('.expand').css('display', 'inline-block');
  $('.select_con').css('display', 'none');
})
$('.expand').click(function () {
  $('.collapse').css('display', 'inline-block');
  $('.expand').css('display', 'none');
  $('.select_con').css('display', 'block');
})


//获取参数的值
function GetQueryString(e) {
  var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"), s = window.location.search.substr(1).match(t);
  return null != s ? unescape(s[2]) : null
}

function GetUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = encodeURI(window.location.search).substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

//当前url追加参数 UrlUpdateParams(window.location.href, "mid", 11111)
function UrlUpdateParams(url, name, value) {
  var r = url;
  if (r != null && r != 'undefined' && r != "") {
    value = encodeURIComponent(value);
    var reg = new RegExp("(^|)" + name + "=([^&]*)(|$)");
    var tmp = name + "=" + value;
    if (url.match(reg) != null) {
      r = url.replace(eval(reg), tmp);
    }
    else {
      if (url.match("[\?]")) {
        r = url + "&" + tmp;
      } else {
        r = url + "?" + tmp;
      }
    }
  }
  return r;
}

function myCode(myname) {
  var mycode = 440100;
  $.ajax(
    {
      type: "get",
      headers: {
        'Content-Type': 'application/json'
      },
      url: "/templets/default/js/regions.json",
      async: false,
      success: function (res) {
        for (var i = 0; i < res.length; i++) {
          var code = res[i].code;
          var name = res[i].name;
          if (myname == name) {
            mycode = code;
          }
        }
      }, error: function (err) {
        console.log(err.responseText);


      }
    })
  // console.log('mycode:' + mycode)
  return mycode;
}


var startp1 = GetUrlParam("startp");
var endp1 = GetUrlParam("endp");
var startc1 = GetUrlParam("startc");
var endc1 = GetUrlParam("endc");
var starta1 = GetUrlParam("starta");
var enda1 = GetUrlParam("enda");
var departureTimeCode1 = GetUrlParam("departureTimeCode");
var belongBrandCode1 = GetUrlParam("belongBrandCode");
var otherServiceCode1 = GetUrlParam("otherServiceCode");
var companyName1 = GetUrlParam("companyName");
var parkId1 = GetUrlParam("parkId");
var parkName1 = GetUrlParam("parkName");
//var authStatus1=GetUrlParam("authStatus");

var orderNumber = GetUrlParam("orderNumber");
var transportAging = GetUrlParam("transportAging");
var weigthPrice = GetUrlParam("weigthPrice");
var lightPrice = GetUrlParam("lightPrice");

var startp = decodeURI(startp1)
var endp = decodeURI(endp1);
var startc = decodeURI(startc1);
var endc = decodeURI(endc1);
var starta = decodeURI(starta1);
var enda = decodeURI(enda1);
var departureTimeCode = decodeURI(departureTimeCode1);
var belongBrandCode = decodeURI(belongBrandCode1);
var otherServiceCode = decodeURI(otherServiceCode1);
var companyName = decodeURI(companyName1);
var parkId = decodeURI(parkId1);
var parkName = decodeURI(parkName1);
//var authStatus= decodeURI(authStatus1);

var orderNumber = decodeURI(orderNumber);
var transportAging = decodeURI(transportAging);
var weigthPrice = decodeURI(weigthPrice);
var lightPrice = decodeURI(lightPrice);
var currentAreaFullName = $.cookie('currentAreaFullName');
var currentProvinceFullName = $.cookie('currentProvinceFullName');


vo = new Object();
vo.startProvince = startp;
vo.startCity = startc;
vo.startArea = starta;
vo.endProvince = endp;
vo.endCity = endc;
vo.endArea = enda;
vo.companyName = companyName;
vo.parkId = parkId;


vo.departureTimeCode = departureTimeCode;
vo.belongBrandCode = belongBrandCode;
vo.otherServiceCode = otherServiceCode;
//vo.authStatus=authStatus;

vo.orderNumber = orderNumber;
vo.transportAging = transportAging;
vo.weigthPrice = weigthPrice;
vo.lightPrice = lightPrice;
vo.defaultSort = 1;

vo1 = new Object();
orderBy = new String;

console.log(orderBy, 'orderBy1');
if (lightPrice) {
  orderBy = lightPrice
  // console.log(orderBy, 'orderBy2');
}
if (weigthPrice) {
  orderBy = weigthPrice
  console.log(orderBy, 'orderBy3');
}
if (orderNumber) {
  var orderDesc = orderNumber
  orderBy = orderDesc
}
if (transportAging) {
  var transportAgingAsc = transportAging
  orderBy = transportAgingAsc
}


if (startp || startc) {
  if (!startp || startp == "null") {
    startp = "";
    delete vo.startProvince;
  }
  if (!startc || startc == "null") {
    startc = "";
    delete vo.startCity;
  }
}
if ((!startp || startp == "null") && (!startc || startc == "null")) {
  startc = currentAreaFullName;
  vo.startCity = startc;
  startp = currentProvinceFullName;
  vo.startProvince = startp;
  vo1.locationProvince = startp;
  vo1.locationCity = startc;

}

if (!starta || starta == "null") {
  starta = "";
  delete vo.startArea;
}
if (!endp || endp == "null") {
  endp = "";
  delete vo.endProvince;
}
if (!endc || endc == "null") {
  endc = "";
  delete vo.endCity;
}
if (!enda || enda == "null") {
  enda = "";
  delete vo.endArea;
}

if (!departureTimeCode || departureTimeCode == "null") {
  departureTimeCode = "";
  delete vo.departureTimeCode;
}
if (!belongBrandCode || belongBrandCode == "null") {
  belongBrandCode = "";
  delete vo.belongBrandCode;
}
if (!otherServiceCode || otherServiceCode == "null") {
  otherServiceCode = "";
  delete vo.otherServiceCode;
}
if (!companyName || companyName == "null") {
  companyName = "";
  delete vo.companyName;
}
if (!parkId || parkId == "null") {
  parkId = "";
  delete vo.parkId;
}
if (!parkName || parkName == "null") {
  parkName = "";
}
//if (!authStatus || authStatus== "null") {authStatus="";delete vo.authStatus;}


if (!orderNumber || orderNumber == "null") {
  orderNumber = "";
  delete vo.orderNumber;
}
if (!transportAging || transportAging == "null") {
  transportAging = "";
  delete vo.transportAging;
}
if (!weigthPrice || weigthPrice == "null") {
  weigthPrice = "";
  delete vo.weigthPrice;
}
if (!lightPrice || lightPrice == "null") {
  lightPrice = "";
  delete vo.lightPrice;
}
//vo.rangeIds=process01();
var code_c = myCode(startc);

$("#list_nav_a1").html(startp + "零担物流专线")
$("#list_nav_a2").html(startc + "零担物流专线")
$("#list_nav_a1").attr("href", '/templets/default/htm/' + code_c + '.htm');
$("#list_nav_a2").attr("href", '/templets/default/htm/' + code_c + '/' + code_c + '_1.htm');
$("#list_nav_a3").html(startc + starta + " 到 " + endc + enda + " 零担物流专线")
if ((!startc && !starta) || (!endc && !enda)) {
  $("#list_nav_a3").html(startc + starta + "  " + endc + enda + " 零担物流专线")
}

$("#wlLineFrom input").citypicker({
  province: startp,
  city: startc,
  district: starta
});
$("#wlLineTo input").citypicker({
  province: endp,
  city: endc,
  district: enda
});


$('#wlgs_name').val(companyName);
$('#select_wlyq').val(parkName);
$('#select_wlyq').attr("name", parkId);
$('#tjcx_00 .all').attr("href", UrlUpdateParams(window.location.href, "parkId", ""))
$('#tjcx_01 .all').attr("href", UrlUpdateParams(window.location.href, "departureTimeCode", ""))
$('#tjcx_02 .all').attr("href", UrlUpdateParams(window.location.href, "belongBrandCode", ""))
$('#tjcx_03 .all').attr("href", UrlUpdateParams(window.location.href, "otherServiceCode", ""))


$('body').click(function (e) {
  var _con = $('.js_yq'); // 设置目标区域(排除此元素)
  if (!_con.is(e.target) && _con.has(e.target).length === 0) {
    $('#list_wlzx_yq').css("display", "none");
  }
})

$('#js010').on('click', '.wlzx_yq_item', function (e) {


  var a = $(this).children("font").html();
  var b = $(this).children("font").attr("name");
  $("#select_wlyq").val(a);
  $("#select_wlyq").attr("name", b);

})

$('#select_wlyq').mousedown(function () {
  $("#list_wlzx_yq").css("display", "block")
})


//清空条件
$("#flush").click(
  function () {
    console.log("清空地址")
    // window.location.href='/plus/list.php?tid=4';
    window.location.reload();
  })
//清空条件

//排序点击 S
$("#seq0").click(
  function () {
    console.log("clear排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice;
    vo.defaultSort = 1;
    process02(1);

  })
$("#seq1").click(
  function () {
    console.log("orderNumber排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice;
    delete vo.defaultSort;
    vo.orderNumber = 1;
    process02(1);
  })
$("#seq2").click(
  function () {
    console.log("transportAging排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice;
    delete vo.defaultSort;
    vo.transportAging = 1;
    process02(1);
  })
$("#seq3").mouseenter(
  function () {
    console.log("弹出价格排序")
    $("#tj_price").css("display", "block")
  })
$("#seq3").mouseleave(
  function () {
    $("#tj_price").css("display", "none")
  })
$("#tj_price").mouseenter(
  function () {
    $("#tj_price").css("display", "block")
  })
$("#tj_price").mouseleave(
  function () {
    $("#tj_price").css("display", "none")
  })
$("#tj_price2").click(
  function () {
    $("#tj_price").css("display", "none")
    console.log("weigthPrice排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice;
    delete vo.defaultSort;
    vo.weigthPrice = 1;
    process02(1);
  })
$("#tj_price1").click(
  function () {
    $("#tj_price").css("display", "none")
    console.log("lightPrice排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice;
    delete vo.defaultSort;
    vo.lightPrice = 1;
    process02(1);
  })
//排序点击 E

//零担下单 S
$("#check-fee").click(
  function () {

    var start = $("#right-bar-form").val();
    var end = $("#right-bar-to").val();
    var startjw = $("#right-bar-form").attr("thepos");
    var startpcd = $("#right-bar-form").attr("thepcd");
    var startstreet = $("#right-bar-form").attr("thestreet");
    var endpcd = $("#right-bar-to").attr("thepcd");
    var endstreet = $("#right-bar-to").attr("thestreet");

    var startp = $("#right-bar-form").attr('theprovince')
    var startc = $("#right-bar-form").attr('thecity')
    var starta = $("#right-bar-form").attr('thearea')

    var endp = $("#right-bar-to").attr('theprovince')
    var endc = $("#right-bar-to").attr('thecity')
    var enda = $("#right-bar-to").attr('thearea')


    if (startjw) {
      var startj = startjw.split(",", 2)[0];
      var startw = startjw.split(",", 2)[1];
    }
    if (!startjw) {
      var startj = "";
      var startw = "";
    }


    var endjw = $("#right-bar-to").attr("thepos");
    if (endjw) {
      var endj = endjw.split(",", 2)[0];
      var endw = endjw.split(",", 2)[1];
    }
    if (!endjw) {
      var endj = "";
      var endw = "";
    }
    if (!startpcd) {
      startpcd = ""
    }
    if (!endpcd) {
      endpcd = ""
    }
    if (!startstreet) {
      startstreet = ""
    }
    if (!endstreet) {
      endstreet = ""
    }
    if (!startp) {
      startp = ""
    }
    if (!startc) {
      startc = ""
    }
    if (!starta) {
      starta = ""
    }
    if (!endp) {
      endp = ""
    }
    if (!endc) {
      endc = ""
    }
    if (!enda) {
      enda = ""
    }


    s1 = '/plus/list.php?tid=77&start=' + startpcd + '&end=' + endpcd + '&startstreet=' + startstreet + '&endstreet=' + endstreet;
    s2 = '&startj=' + startj + '&startw=' + startw + '&endj=' + endj + '&endw=' + endw + '&startp=' + startp + '&startc=' + startc + '&starta=' + starta + '&endp=' + endp + '&endc=' + endc + '&enda=' + enda;
    console.log(s1 + s2);
    window.open(s1 + s2);
//+


  })
//零担下单 E


//专线搜索 S

$("#search_wlLine").click(
  function () {

    var companyName = $('#wlgs_name').val();
    var parkName = $("#select_wlyq").val();
    var parkId = $('#select_wlyq').attr("name");

    var list1 = [], list2 = [];
    $('#wlLineFrom .select-item').each(function (i, e) {
      list1.push($(this).text())
    });
    var startp = list1[0];
    var startc = list1[1];
    var starta = list1[2];

    $('#wlLineTo .select-item').each(function (i, e) {
      list2.push($(this).text())
    });
    var endp = list2[0];
    var endc = list2[1];
    var enda = list2[2];
    if (!startp) {
      startp = ""
    }
    if (!startc) {
      startc = ""
    }
    if (!starta) {
      starta = ""
    }
    if (!endp) {
      endp = ""
    }
    if (!endc) {
      endc = ""
    }
    if (!enda) {
      enda = ""
    }
    if (!parkId) {
      parkId = ""
    }
    if (!parkName) {
      parkName = ""
    }
    if (!companyName) {
      companyName = ""
    }
    startp = encodeURI(startp)
    startc = encodeURI(startc)
    starta = encodeURI(starta)
    endp = encodeURI(endp)
    endc = encodeURI(endc)
    enda = encodeURI(enda)
    companyName = encodeURI(companyName)
    parkId = encodeURI(parkId)
    parkName = encodeURI(parkName)
    window.location = '/zhuanxian?tid=4&startp=' + startp + '&startc=' + startc + '&starta=' + starta + '&endp=' + endp + '&endc=' + endc + '&enda=' + enda + '&companyName=' + companyName + '&parkId=' + parkId + '&parkName=' + parkName;
  })


//专线搜索 E

//所属园区查询 S

$(".list_wlyq_cx").click(
  function () {
    var parkName = $('#wlyq_name').val();

    var list1 = [];
    $('#wlyq_pos .select-item').each(function (i, e) {
      list1.push($(this).text())
    });
    var locationProvince = list1[0];
    var locationCity = list1[1];
    var locationArea = list1[2];
    vo1.locationProvince = locationProvince;
    vo1.locationCity = locationCity;
    vo1.locationArea = locationArea;
    vo1.parkName = parkName;
    if (!locationProvince) {
      locationProvince = "";
      delete vo1.locationProvince;
    }
    if (!locationCity) {
      locationCity = "";
      delete vo1.locationCity;
    }
    if (!locationArea) {
      locationArea = "";
      delete vo1.locationArea;
    }
    if (!parkName) {
      parkName = "";
      delete vo1.parkName;
    }
    belong_wlyq(1);
  })


//所属园区查询 E

//专线数据字典 S
function tjcx00() {
  var myurl1 = UrlUpdateParams(window.location.href, "parkId", 1);
  var myurl2 = UrlUpdateParams(window.location.href, "parkId", 108);
  var myurl3 = UrlUpdateParams(window.location.href, "parkId", 107);
  var myurl4 = UrlUpdateParams(window.location.href, "parkId", 66);
  var myurl5 = UrlUpdateParams(window.location.href, "parkId", 2);
  var myurl6 = UrlUpdateParams(window.location.href, "parkId", 61);
  var myurl7 = UrlUpdateParams(window.location.href, "parkId", 100);
  var myurl8 = UrlUpdateParams(window.location.href, "parkId", 46);
  $('#parkId1').attr("href", myurl1)
  $('#parkId2').attr("href", myurl2)
  $('#parkId3').attr("href", myurl3)
  $('#parkId4').attr("href", myurl4)
  $('#parkId5').attr("href", myurl5)
  $('#parkId6').attr("href", myurl6)
  $('#parkId7').attr("href", myurl7)
  $('#parkId8').attr("href", myurl8)
  //选中状态 S
  if (parkId) {
    $("#tjcx_00 a").each(function () {
      var aaa = $(this).attr("href");
      if (aaa.split("&parkId=")[1] == parkId) {
        $("#tjcx_00 a").removeClass("now");
        $(this).addClass("now");
      }
    })

  }
}

tjcx00();

function tjcx01() {

  $.ajax(
    {
      type: "get",
      headers: {
        'Content-Type': 'application/json'
      },
      url: "/api/aflc-common/sysDict/getSysDictByCodeGet/AF026",

      success: function (res) {
        var datas = res.data;
        for (var i = 0; i < datas.length; i++) {

          var name = datas[i].name;
          var code = datas[i].code;
          var myurl = UrlUpdateParams(window.location.href, "departureTimeCode", code)
          var s1 = '<a  href=' + myurl + '>';
          var s3 = name + '</a>';
          $("#tjcx_01").append(s1 + s3);


        }
        //选中状态 S
        if (departureTimeCode) {

          $("#tjcx_01 a").each(function () {
            var aaa = $(this).attr("href");

            if (aaa.indexOf(departureTimeCode) != -1) {

              console.log(aaa);
              $("#tjcx_01 a").removeClass("now");
              $(this).addClass("now");
            }
          })
        }
        //选中状态 E
      }, error: function (err) {
        // console.log(err.responseText);


      }
    })
}

tjcx01();

function tjcx02() {

  $.ajax(
    {
      type: "get",
      headers: {
        'Content-Type': 'application/json'
      },
      url: "/api/aflc-common/sysDict/getSysDictByCodeGet/AF029",

      success: function (res) {
        var datas = res.data;
        for (var i = 0; i < datas.length; i++) {

          var name = datas[i].name;
          var code = datas[i].code;
          var myurl = UrlUpdateParams(window.location.href, "belongBrandCode", code)

          var s1 = '<a  href=' + myurl + '>';
          var s3 = name + '</a>';
          $("#tjcx_02").append(s1 + s3);

        }

        //选中状态 S
        if (belongBrandCode) {

          $("#tjcx_02 a").each(function () {
            var aaa = $(this).attr("href");

            if (aaa.indexOf(belongBrandCode) != -1) {

              console.log(aaa);
              $("#tjcx_02 a").removeClass("now");
              $(this).addClass("now");
            }
          })
        }
        //选中状态 E
      }, error: function (err) {
        // console.log(err.responseText);


      }
    })
}

tjcx02();

function tjcx03() {

  $.ajax(
    {
      type: "get",
      headers: {
        'Content-Type': 'application/json'
      },
      url: "/api/aflc-common/sysDict/getSysDictByCodeGet/AF025",

      success: function (res) {
        var datas = res.data;
        var myurl0 = UrlUpdateParams(window.location.href, "otherServiceCode", "AF0010403")
        $('.shiming').attr("href", myurl0)
        for (var i = 0; i < datas.length; i++) {

          var name = datas[i].name;
          var code = datas[i].code;
          var myurl = UrlUpdateParams(window.location.href, "otherServiceCode", code)
//       var s1='<a  href=/plus/list.php?tid=4&start='+start+'&end='+end;
//				 var s2='&otherServiceCode='+code+'>';
//				 var s3=name+'</a>';
          var s1 = '<a  href=' + myurl + '>';
          var s3 = name + '</a>';
          $("#tjcx_03").append(s1 + s3);

        }
        //选中状态 S


        if (otherServiceCode) {
          $("#tjcx_03 a").each(function () {
            var aaa = $(this).attr("href");

            if (aaa.indexOf(otherServiceCode) != -1) {

              $("#tjcx_03 a").removeClass("now");
              $(this).addClass("now");
            }
            if (aaa.indexOf('AF0010403') != -1) {
              $('.shiming').addClass("now");
            }
          })
        }


        //选中状态 E
      }, error: function (err) {
        // console.log(err.responseText);
      }
    })
}

tjcx03();


//专线数据字典 E

//物流专线 推荐列表S
function process01() {
//var rangeIds="";
  $.ajax(
    {
      type: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      url: "/api/aflc-portal/portalt/aflcRecommendTransportRange/v1/recommendRanges",
      dataType: "json",
      //async:false,
      data: JSON.stringify(
        {
          currentPage: 1,
          pageSize: 14,
          vo: vo		//JSON.stringify({})
        }
      ),
      success: function (res) {
        $("#js007 .tj_list").not(":eq(0)").remove();
        if (!res.data) {
          console.log("推荐内容为空")
          $(".tj_none").css("display", "block")
          return;
        }
        var datas = res.data;
        for (var i = 0; i < datas.length; i++) {
          var lightPrice = datas[i].lightPrice;
          if (lightPrice) {
            lightPrice = parseFloat(lightPrice).toFixed(1);
          }
          var heavyPrice = datas[i].heavyPrice;
          if (heavyPrice) {
            heavyPrice = parseFloat(heavyPrice).toFixed(1);
          }
          var assessNumber = datas[i].assessNumber;
          var browseNumber = datas[i].browseNumber;
          if (!assessNumber) {
            assessNumber = 0
          }
          if (!browseNumber) {
            browseNumber = 0
          }
          var recommendType = datas[i].recommendType;
          var rangeId = datas[i].id;
          var publishId = datas[i].publishId;
          // console.log(lightPrice + ":" + heavyPrice);
          var account = datas[i].account;
          var publishName = datas[i].publishName;
          var lowerPrice = datas[i].lowerPrice;
          if (lowerPrice) {
            lowerPrice = lowerPrice + "元"
          }
          if (!lowerPrice) {
            lowerPrice = "面议"
          }
          var startCity = datas[i].startCity;
          var startArea = datas[i].startArea;
          var endCity = datas[i].endCity;
          var endArea = datas[i].endArea;
          if (!startCity) {
            startCity = ""
          }
          if (!endCity) {
            endCity = ""
          }
          if (!startArea) {
            startArea = ""
          }
          if (!endArea) {
            endArea = ""
          }
          var start = startCity + startArea;
          var end = endCity + endArea;
          if (start && start.length > 6) {
            start = start.substring(0, 6) + ".."
          }
          if (end && end.length > 6) {
            end = end.substring(0, 6) + ".."
          }
          var publishName = datas[i].publishName;
          var transportAging = datas[i].transportAging;
          var transportAgingUnit = datas[i].transportAgingUnit.replace("多", "");
          var isVip = datas[i].isVip;
          var authStatus = datas[i].authStatus;
          var collateral = datas[i].collateral;
          var arcurl = "/wlzx/2018/0509/7?id=" + rangeId + "&publishId=" + publishId;
          $("#tj_a011").attr("href", "/member/" + account + ".html");
          $("#tj_a011").html(publishName);
          $("#tj102").html(assessNumber);
          $("#tj101").html(browseNumber);
          $("#tj011").html(start);
          $("#tj012").html(end);
          $("#tj013").html(heavyPrice);
          $("#tj014").html(lightPrice);
          $("#tj015").html(transportAging + transportAgingUnit);
          if (!transportAging || !transportAgingUnit) {
            $("#tj015").html("")
          }
          $("#tj016").html(lowerPrice);
          $("#tj017").attr("href", arcurl);
          $("#tj010").attr("href", arcurl);
          var s1 = '<div class="tj_list tj_list' + i + '">'
          var s2 = $(".tj_list").html();
          var s3 = '</div>'
          $("#js007").append(s1 + s2 + s3);
          if (isVip != 1) {
            // console.log("is not Vip");
            $('.tj_list' + i + '  #tj_xinyong').css("display", "none")
          }
          if (authStatus != "AF0010403") {
            // console.log("is not shiming");
            $('.tj_list' + i + '  #tj_shiming').css("display", "none")
          }
          if (!collateral || collateral == 0) {
            // console.log("is not danbao");
            $('.tj_list' + i + '  #tj_danbao').css("display", "none")
          }
          if (recommendType == 1) {
            $('.tj_list' + i + ' #tj_icon_2').css("display", "inline");
          }
          //rangeIds=rangeIds+","+rangeId;
          //rangeIds=rangeIds.substring(1,500)
        }

        //console.log("推荐专线ID"+rangeIds)
      }, error: function (err) {
        // console.log(err.responseText);


      }
    })
  //return rangeIds;

}

process01();
//物流专线 推荐列表 E

//物流专线 栏目列表S
console.log(belongBrandCode, 'belongBrandCode');

function process02(currentPage) {
  var totalPage = 8;
  // console.log(orderBy, 'orderByorderByorderBy');
  $.ajax(
    {
      type: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      url: "/api/28-web/range/list",
      dataType: "json",
      async: false,
      data: JSON.stringify(
        {
          currentPage: currentPage,
          pageSize: 20,
          startProvince: startp,
          startCity: startc,
          startArea: starta,
          endProvince: endp,
          endCity: endc,
          endArea: enda,
          belongBrandCode: belongBrandCode,
          departureTimeCode: departureTimeCode,
          otherServiceCode: otherServiceCode,
          parkId: parkId,
          companyName: companyName,
          orderBy: orderBy
//         vo = new Object();
//   vo.startProvince=startp;
//   vo.startCity=startc;
//   vo.startArea=starta;
//   vo.endProvince=endp;
//   vo.endCity=endc;
//   vo.endArea=enda;
//   vo.companyName=companyName;
//   vo.parkId=parkId;
//
//
//   vo.departureTimeCode=departureTimeCode;
//   vo.belongBrandCode=belongBrandCode;
//   vo.otherServiceCode=otherServiceCode;
// //vo.authStatus=authStatus;
//
//   vo.orderNumber=orderNumber;
//   vo.transportAging=transportAging;
//   vo.weigthPrice=weigthPrice;
//   vo.lightPrice=lightPrice;
        }
      ),
      success: function (res) {
        $("#js002 .wlzx_list").not(":eq(0)").remove();
        if (res.data) {
          totalPage = res.data.totalPage;
          // console.log(totalPage);
        }
        if (!res.data || !res.data.totalCount) {
          // console.log("内容为空")
          $(".box").css("display", "none")
          $(".list_none").css("display", "block")
        }

        if (!res.data) {
          return
        }
        var datas = res.data.list;
        for (var i = 0; i < datas.length; i++) {

          var primeryPrice0 = datas[i].primeryPrice0;
          var discountPrice0 = datas[i].discountPrice0;
          var primeryPrice1 = datas[i].primeryPrice1;
          var discountPrice1 = datas[i].discountPrice1;
          if (!discountPrice0) {
            qhjg = primeryPrice0
          }
          if (discountPrice0) {
            qhjg = discountPrice0
          }
          if (!discountPrice1) {
            zhjg = primeryPrice1
          }
          if (discountPrice1) {
            zhjg = discountPrice1
          }
          var recommendType = datas[i].recommendType;


          var orderNumber = datas[i].orderNumber;
          var assessNumber = datas[i].assessNumber;
          var collectNum = datas[i].collectNum;
          var browseNumber = datas[i].browseNumber;
          if (!browseNumber) {
            browseNumber = 0
          }
          if (!orderNumber) {
            orderNumber = 0
          }
          if (!assessNumber) {
            assessNumber = 0
          }
          var rangeId = datas[i].rangeId;
          var companyId = datas[i].companyId;
          var account = datas[i].account;
          var companyName = datas[i].companyName;
          var startCity = datas[i].startCity;
          var startArea = datas[i].startArea;
          var endCity = datas[i].endCity;
          var endArea = datas[i].endArea;
          if (!startCity) {
            startCity = ""
          }
          if (!endCity) {
            endCity = ""
          }
          if (!startArea) {
            startArea = ""
          }
          if (!endArea) {
            endArea = ""
          }
          var start = startCity + startArea;
          var end = endCity + endArea;
          if (start && start.length > 6) {
            start = start.substring(0, 6) + ".."
          }
          if (end && end.length > 6) {
            end = end.substring(0, 6) + ".."
          }

          var publishName = datas[i].publishName;
          var transportAging = datas[i].transportAging;
          var transportAgingUnit = datas[i].transportAgingUnit.replace("多", "");
          if (datas[i].transportRemark) {
            var transportRemark = datas[i].transportRemark.substring(0, 10);
          }
          if (!datas[i].transportRemark) {
            var transportRemark = "暂无"
          }
          var qq = datas[i].qq;
          var address = datas[i].address;
          if (address && address.length > 24) {
            address = address.substring(0, 24) + "..";
          }
          var departureHzData = datas[i].departureHzData;
          var departureHzTime = datas[i].departureHzTime;
          var isVip = datas[i].isVip;
          var authStatus = datas[i].authStatus;
          var collateral = datas[i].collateral;
          var rangeLogo1 = "";
          var arcurl = "/wlzx/2018/0509/7?id=" + rangeId + "&publishId=" + companyId;
          var orderurl = "/plus/list.php?tid=77&uid=" + account + "&id=" + rangeId + "&publishId=" + companyId;
          $("#nr_a21").attr("href", arcurl);
          $("#wlzx_list_view").attr("onclick", "window.open('" + arcurl + "')")
          $("#fahuo").attr("onclick", "window.open('" + orderurl + "')")
          var num0 = Math.random();
          var num = Math.ceil(num0 * 30);
          // console.log(num,'num');
          var src1 = "/zhuanxian/images/bg" + num + ".png";

          if (datas[i].rangeLogo) {
            if (datas[i].rangeLogo.indexOf(',')) {
              rangeLogo1 = datas[i].rangeLogo.split(',')[0]
              $(".nr_a21_img img").eq(i).attr("src", datas[i].rangeLogo.split(',')[0]);
            } else {
              rangeLogo1 = datas[i].rangeLogo
              $(".nr_a21_img img").eq[i].attr("src", rangeLogo1);
              // $(".nr_a21_img img").attr("src",src1);
            }
          }
          if (datas[i].rangeLogo.length == '') {
            $(".nr_a21_img img").eq[i].attr("src", src1);
          }
          $(".nr_a21_img img").attr("alt", companyName);
          // $("#nr01").attr("alt",companyName);
          $("#nr02_1").html(start);
          $("#nr02_2").html(end);
          $("#nr02").attr("href", arcurl);
          $("#nr03").attr("href", "/member/" + account + "");
          $("#nr04").html(companyName);
          $("#nr05").html(transportRemark);
          $("#nr06").html(address);
          $("#nr07").html(zhjg);
          $("#nr08").html(qhjg);
          $("#nr1001").html(browseNumber);
          $("#nr1002").html(assessNumber);
          $("#nr09").html(transportAging + transportAgingUnit);
          if (!transportAging || !transportAgingUnit) {
            $("#nr09").html("")
          }
          $("#nr10").html(departureHzData + "天" + departureHzTime + "次");
          if (!departureHzData || !departureHzTime) {
            $("#nr10").html("")
          }
          $("#nr11").attr("href", "tencent://message/?uin=" + qq + "&Site=&menu=yes");
          var s1 = '<ul class="wlzx_list wlzx_list' + i + '">'
          var s2 = $(".wlzx_list").html();
          var s3 = '</ul>'
          $("#js002").append(s1 + s2 + s3);
          if (!collateral || collateral == 0) {

            $('.wlzx_list' + i + ' #list_danbao').css("display", "none")
          }
          if (!isVip || isVip == 0) {

            $('.wlzx_list' + i + ' #list_xinyong').css("display", "none")
          }
          if (authStatus != "AF0010403") {
            $('.wlzx_list' + i + ' #list_shiming').css("display", "none")
          }

          if (!qq) {
            $('.wlzx_list' + i + ' #qq').css("display", "none");
          }

          if (recommendType == 1) {
            $('.wlzx_list' + i + ' #tj_icon_1').css("display", "inline");
          }

        }
      }, error: function (err) {
        // console.log(err.responseText);


      }
    })
  // console.log("最终总页数：" + totalPage)
  return totalPage;
}

// process02(1);
//物流专线栏目列表 E


//所属物流园区S
function belong_wlyq(currentPage) {
  $.ajax(
    {
      type: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      url: "/api/aflc-uc/usercenter/aflclogisticspark/v1/search",
      dataType: "json",
      data: JSON.stringify(
        {
          currentPage: currentPage,
          pageSize: 20,
          //vo:vo		//JSON.stringify({})
          vo: vo1
        }
      ),
      success: function (res) {
        $("#js010 .wlzx_yq_item").not(":eq(0)").remove();
        $("#js010 .wlzx_yq_none").css("display", "none");
        if (!res.data.list || res.data.list == "") {
          console.log("所属园区内容为空")
          $(".wlzx_yq_none").css("display", "block")
          return;
        }
        var datas = res.data.list;
        for (var i = 0; i < datas.length; i++) {
          var id = datas[i].id;
          var parkName = datas[i].parkName;
          var parkAddress = datas[i].parkAddress;
          if (parkName && parkName.length > 30) {
            parkName = parkName.substring(0, 30) + ".."
          }
          if (parkAddress && parkAddress.length > 30) {
            parkAddress = parkAddress.substring(0, 30) + ".."
          }

          $("#wlzx_yq_01").html(parkName);
          $("#wlzx_yq_01").attr("name", id)
          $("#wlzx_yq_02").html(parkAddress);
          var s1 = '<div class="wlzx_yq_item">'
          var s2 = $(".wlzx_yq_item").html();
          var s3 = '</div>'
          $("#js010").append(s1 + s2 + s3);


        }

        //console.log("推荐专线ID"+rangeIds)
      }, error: function (err) {
        console.log(err.responseText);


      }
    })
  //return rangeIds;

}

belong_wlyq(1);
//所属物流园区 E

