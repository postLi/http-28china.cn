$('.collapse').click(function(){
	$('.collapse').css('display','none');
	$('.expand').css('display','inline-block');
	$('.select_con').css('display','none');
})
$('.expand').click(function(){
	$('.collapse').css('display','inline-block');
	$('.expand').css('display','none');
	$('.select_con').css('display','block');
})
//点击事件
$('.list_tiaoj').find('span').click(function(){
  $('.list_tiaoj').find('span').removeClass('active');
  $(this).addClass('active')
})

var startCity = $.cookie('currentProvinceFullName');
var startArea = $.cookie('currentAreaFullName')
// console.log(cookie1,cookie3)
//排序点击 S
$("#seq1").click(	
  function(){
    console.log("clear排序")
    vo.filterSign = 1
    process02(1);
})
$("#seq2").click(	
  function(){
    console.log("clear排序")
    vo.filterSign = 2
  process02(1);

})
$(".search").click(
     	function(){
			var list1 = [],list2 = [];
			$('#carLineFrom .select-item').each(function (i,e) {
				list1.push($(this).text())
			});
			var startp =list1[0];
			var startc =list1[1];
			var starta =list1[2];

			$('#carLineTo .select-item').each(function (i,e) {
				list2.push($(this).text())
			});
			var endp = list2[0];
			var endc = list2[1];
			var enda = list2[2];
		 if(!startp){startp=""}
		 if(!startc){startc=""}
		 if(!starta){starta=""}
		 if(!endp){endp=""}
		 if(!endc){endc=""}
		 if(!enda){enda=""}
      startp=encodeURI(startp)
      startc=encodeURI(startc)
      starta=encodeURI(starta)
      endp=encodeURI(endp)
      endc=encodeURI(endc)
      enda=encodeURI(enda)


 window.location='/plus/list.php?tid=82&startp='+startp+'&startc='+startc+'&starta='+starta+'&endp='+endp+'&endc='+endc+'&enda='+enda;
     

    })

//车源搜索 E
//获取参数的值
function GetQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(t);return null!=s?unescape(s[2]):null}
function GetUrlParam(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = encodeURI(window.location.search).substr(1).match(reg);
  if(r!=null)return unescape(r[2]); return null;
}
//当前url追加参数 UrlUpdateParams(window.location.href, "mid", 11111)
 function  UrlUpdateParams(url, name, value) {
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
function  formatDate(objD)   {
    var str,colorhead,colorfoot;
    var yy = objD.getYear();
    if(yy<1900) yy = yy+1900;
    var MM = objD.getMonth()+1;
    if(MM<10) MM = '0' + MM;
    var dd = objD.getDate();
    if(dd<10) dd = '0' + dd;
    var hh = objD.getHours();
    if(hh<10) hh = '0' + hh;
    var mm = objD.getMinutes();
    if(mm<10) mm = '0' + mm;
    var ss = objD.getSeconds();
    if(ss<10) ss = '0' + ss;
    str =  yy + "-" + MM + "-" + dd + " " + hh + ":" + mm;
    return(str);
}

//获取url传过来的参数
var filterSign1 = GetUrlParam("filterSign")
var startp1 = GetUrlParam("startp");
var startc1 = GetUrlParam("startc");
var starta1 = GetUrlParam("starta");
var endp1 = GetUrlParam("endp");
var endc1 = GetUrlParam("endc");
var enda1 = GetUrlParam("enda");

//将参数转码
var filterSign = decodeURI(filterSign1)
var startp = decodeURI(startp1)
var startc = decodeURI(startc1)
var starta = decodeURI(starta1)
var endp = decodeURI(endp1)
var endc = decodeURI(endc1)
var enda = decodeURI(enda1)

var currentAreaFullName = $.cookie('currentAreaFullName');
var currentProvinceFullName=$.cookie('currentProvinceFullName');
//创建一个vo对象，将需要传的参数放在vo中
vo=new Object();
vo.filterSign = filterSign;
vo.startProvince = startp;
vo.startCity = startc;
vo.startArea = starta;
vo.endProvince = endp;
vo.endCity = endc;
vo.endArea = enda;


if (!filterSign || filterSign  == 'null') {vo.filterSign = 1}
 if(startp||startc){
 	if(!startp || startp== "null")  {startp="";delete vo.startProvince;}
 	if(!startc || startc== "null")  {startc="";delete vo.startCity;}
 }
 if ((!startp || startp== "null")&&(!startc || startc== "null")) {
 	startc=currentAreaFullName;vo.startCity=startc;startp=currentProvinceFullName;vo.startProvince=startp; }

 if (!starta || starta== "null") {starta="";delete vo.startArea;}
 if (!endp || endp== "null") {endp="";delete vo.endProvince;}
 if (!endc || endc== "null") {endc="";delete vo.endCity;}
 if (!enda || enda== "null") {enda="";delete vo.endArea;}

//$("#list_nav_a").attr("href",'/plus/list.php?tid=82'+'&starp='+startp+'&startc='+startc+'&starta='+starta+'&endp='+endp+'&endc='+endc+'&enda='+enda);
$("#list_nav_a").html(startc+starta+" 到 "+endc+enda+" 专线时效")
if((!startc&&!starta)||(!endc&&!enda)){$("#list_nav_a").html(startc+starta+"  "+endc+enda+"专线时效")}
//搜索赋input框的初始值

$("#carLineFrom input").citypicker({
  province: startp,
  city: startc,
  district: starta
});
$("#carLineTo input").citypicker({
  province: endp,
  city: endc,
  district: enda
});


$('.qiehuan').click(function(){

	var list1 = [],list2 = [];
			$('#carLineFrom .select-item').each(function (i,e) {
				list1.push($(this).text())
			});
			var startp =list1[0];
			var startc =list1[1];
			var starta =list1[2];
			$('#carLineTo .select-item').each(function (i,e) {
				list2.push($(this).text())
			});
			var endp = list2[0];
			var endc = list2[1];
			var enda = list2[2];
$("#carLineFrom input").citypicker({
  province: endp,
  city: endc,
  district: enda
});
$("#carLineTo input").citypicker({
  province: startp,
  city: startc,
  district: starta
});




})
//车源信息栏目列表S
function process02(currentPage){
  var totalPage=8;
    $.ajax(
      {
      type:"post",
      headers:{
      'Content-Type': 'application/json'
      },
      // url:"/api2/aflc-portal/portalt/aflcTransportRange/v1/listRangesAging",
      url:"/api/aflc-portal/portalt/aflcTransportRange/v1/listRangesAging",
      dataType: "json",
      async:false,
      data:JSON.stringify(
        {
        currentPage:currentPage,
        pageSize:20,
        //vo:{	"strartAddress":start,"endAddress":end,"carType":carType,"carLengthLower":carLength1,"carLengthUpper":carLength2,"carLoadLower":carLoad1,"carLoadUpper":carLoad2}			//JSON.stringify({})
          vo:vo
        }
      ),	
      //列表的显示请求接口
      success:function(res){
        $("#js006 .wzl_box").not(":eq(0)").remove();
        if(res.data){
          totalPage=res.data.totalPage;
          // console.log(totalPage,88888);
        }
        if(!res.data||!res.data.totalCount){ 
          console.log("内容为空")
          $(".box").css("display","none")
          $(".list_none").css("display","block")
          return;
        }
        
        //后台返回的参数赋值给datas
        var datas = res.data.list;
        // console.log(res)
        for(var i=0;i<datas.length;i++){
        // var  startLocation=datas[i].startLocation ? datas[i].startLocation : '';
        // var endLocation = datas[i].endLocation ? datas[i].endLocation : '';
        var startCity = datas[i].startCity ? datas[i].startCity : '';
        var startArea = datas[i].startArea ? datas[i].startArea : '';
        var endCity = datas[i].endCity ? datas[i].endCity : '';
        var endArea = datas[i].endArea ? datas[i].endArea : '';
        var zhPrice = datas[i].zhPrice ? datas[i].zhPrice + '元/公斤' :'0'
        var qhPrice = datas[i].qhPrice ? datas[i].qhPrice + '元/m³' :'0'
        var transportAging = datas[i].transportAging ? datas[i].transportAging : '0'
        var departureHzData = datas[i].departureHzData ? datas[i].departureHzData + '天' :'' 
        var departureHzTime = datas[i].departureHzTime ? datas[i].departureHzTime + '次':''
        var browseNumber = datas[i].browseNumber ? datas[i].browseNumber : '无'
        var assessNumber = datas[i].assessNumber ? datas[i].assessNumber + '条' : '无'
        var companyName = datas[i].companyName ? datas[i].companyName : '无'
        var transportRemark = datas[i].transportRemark ? datas[i].transportRemark : '无'
        var transportAgingUnit = datas[i].transportAgingUnit ? datas[i].transportAgingUnit : ''
        var authStatus = datas[i].authStatus 
        var isVip = datas[i].isVip
        var collateral = datas[i].collateral
        // if(transportRemark.length>20){
        //   transportRemark=transportRemark.substring(0,20)}
        var address = datas[i].address ? datas[i].address : '无'
        var companyId = datas[i].companyId
        var id = datas[i].id
        var account=datas[i].account;
        //前三个添加颜色
        $('.wzl_box0 span').addClass('bgr')
        $('.wzl_box1 span').addClass('bgr')
        $('.wzl_box2 span').addClass('bgr')
        //给每一个添加数字12345序号
        var list_index = i+(res.data.currentPage-1)*res.data.pageSize + 1
        // console.log(i, res.data.currentPage, list_index)
        if(list_index > 20){
          $('.wzl_log').css("display","none")
        }else {
          $('.wzl_log').css("display","block")
        }
        $('#num').html(list_index);
        $('#startLocation').html(startCity + startArea);
        $('#endLocation').html(endCity + endArea)
        $('#zhPrice').html(zhPrice)
        $('#qhPrice').html(qhPrice)
        $('#shixiao').html(transportAging  + transportAgingUnit)
        $('#pinglv').html(departureHzData + departureHzTime)
        $('#orderNumber').html(browseNumber)
        $('#assessNumber').html(assessNumber)
        $('#nr055').html(companyName)
        $('#nr056').html(transportRemark)
        $('#nr058').html(address)
        //  $('#list_shiming')
          // console.log($('#qinghuo'),datas[i].zhPrice)
        var qq=datas[i].qq;
        if(!qq){$('#qq').css("display","none");}
        var credit28=datas[i].credit28;
        var driverStatus=datas[i].driverStatus;

        var arcurl="/wlzx/2018/0509/7.html?id="+id+"&publishId="+companyId; //下单
        var orderurl="/plus/list.php?tid=77&uid="+account+"&id="+id+"&publishId="+companyId; //查看详情
        $("#nr_a521").attr("onclick","window.open('"+orderurl+"')")
        $("#nr_a522").attr("onclick","window.open('"+arcurl+"')")
        $('#nr_a51').attr("onclick","window.open('"+arcurl+"')")
        var s1='<div class="wzl_box wzl_box'+i+'">'
        var s2=$(".wzl_box").html();	
        var s3='</div>'
        $("#js006").append(s1+s2+s3);	
          if(!collateral||collateral==0){
          //实名认证，28信用，担保交易，后台返回authStatus有值就显示，没有值就隐藏
            $('.wzl_box'+i+' #list_danbao').css("display","none")
          }
          if(!isVip||isVip==0){console.log("is not Vip");
          // console.log('wlzx_list'+i+' .wlzx_list_4 .p2');
            $('.wzl_box'+i+' #list_xinyong').css("display","none")
          }
          if(authStatus!="AF0010403"){
            // console.log("is not shiming"+startLocation+endLocation);
            $('.wzl_box'+i+' #list_shiming').css("display","none")
          }
        }				
      },error:function(err){
        console.log(err.responseText);
      }
      })
    // console.log("最终总页数："+totalPage)
    return totalPage;
    }
  // process02(1);
  //车源信息栏目列表 E
  