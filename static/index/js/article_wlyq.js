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

  function map_none() {
  $('#allmap').css("display","none");
}
    	function map_block() {
  $('#allmap').css("display","block");}
function map_init(){
// 百度地图API功能
	var map = new BMap.Map("allmap");
	var jwd=wlyq();
    var newLoc=jwd.split(",");
	var point = new BMap.Point(parseFloat(newLoc[0]),parseFloat(newLoc[1]));
	map.centerAndZoom(point, 17);
	var marker = new BMap.Marker(point);  // 创建标注
	map.addOverlay(marker);               // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
	

		//添加地图类型控件
		
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("广州");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL}    
    map.addControl(new BMap.NavigationControl(opts));	
	
}
    	
    	
    	
  $("#mymap").click(
  	function(){
  		map_block();
  		map_init();
  	}
)



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
var myid=GetUrlParam("id");

var address1=GetUrlParam("address");
var companyName1=GetUrlParam("companyName");
var authStatus1=GetUrlParam("authStatus");
var belongBrandCode1=GetUrlParam("belongBrandCode");
var otherServiceCode1=GetUrlParam("otherServiceCode");

var orderNumber=GetUrlParam("orderNumber");
var transportAging=GetUrlParam("transportAging");
var weigthPrice=GetUrlParam("weigthPrice");
var lightPrice=GetUrlParam("lightPrice");


var address= decodeURI(address1);
var companyName= decodeURI(companyName1);
var authStatus= decodeURI(authStatus1);
var belongBrandCode= decodeURI(belongBrandCode1);
var otherServiceCode= decodeURI(otherServiceCode1);

var orderNumber= decodeURI(orderNumber);
var transportAging= decodeURI(transportAging);
var weigthPrice= decodeURI(weigthPrice);
var lightPrice= decodeURI(lightPrice);



vo = new Object();
vo.address=address;
vo.companyName=companyName;
vo.authStatus=authStatus;
vo.belongBrandCode=belongBrandCode;
vo.otherServiceCode=otherServiceCode;
vo.parkId=myid;

vo.orderNumber=orderNumber;
vo.transportAging=transportAging;
vo.weigthPrice=weigthPrice;
vo.lightPrice=lightPrice;
vo.defaultSort=1;




 if (!address || address== "null") {address="";delete vo.address;}
 if (!companyName || companyName== "null") {companyName="";delete vo.companyName;}
 if (!authStatus || authStatus == "null") {authStatus="";delete vo.authStatus;}
 if (!belongBrandCode || belongBrandCode== "null") {belongBrandCode="";delete vo.belongBrandCode;}
 if (!otherServiceCode || otherServiceCode== "null") {otherServiceCode="";delete vo.otherServiceCode;}
 
 if (!orderNumber || orderNumber== "null") {orderNumber="";delete vo.orderNumber;}
 if (!transportAging || transportAging== "null") {transportAging="";delete vo.transportAging;}
 if (!weigthPrice || weigthPrice== "null") {weigthPrice="";delete vo.weigthPrice;}
 if (!lightPrice || lightPrice== "null") {lightPrice="";delete vo.lightPrice;}
//vo.rangeIds=process01();

var locationProvince=$.cookie('currentProvinceFullName')
var locationCity = $.cookie('currentAreaFullName')
$("#arc_nav_a1").attr("href",'/wuliu?'+'&locationProvince='+locationProvince+'&locationCity='+locationCity);
$("#arc_nav_a1").html(locationCity+"物流园区")
$('#address').val(address);
$('#companyName').val(companyName);
//$('#tjcx_02 .all').attr("href",UrlUpdateParams(window.location.href, "belongBrandCode", ""))
//$('#tjcx_03 .all').attr("href",UrlUpdateParams(window.location.href, "otherServiceCode", ""))
//清空条件
$("#flush").click(	
    	function(){
    		console.log("清空地址")
    		window.location.href='/gongsi?';
    })
//清空条件 S
//切换内容 S
$('#checked_zx').click(function(){
	$('.list_left_zx').css("display","block");
	$('.list_left_wangdian').css("display","none");
})
$('#checked_wangdian').click(function(){
	$('.list_left_zx').css("display","none");
	$('.list_left_wangdian').css("display","block");
})
//切换内容 E

//排序点击 S
 $("#seq0").click(	
    	function(){
    		console.log("clear排序")
    vo = new Object();
    vo.defaultSort=1;
    process03(1);
    			$("#tjcx_04 a").removeClass("now");
			$(this).addClass("now");
    })
  $("#seq1").click(	
    	function(){
    		console.log("orderNumber排序")
    vo = new Object(); 
    vo.orderNumber=1;
    process03(1);
     			$("#tjcx_04 a").removeClass("now");
			$(this).addClass("now");
    })
    $("#seq2").click(	
    	function(){
    		console.log("transportAging排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice; 
    vo.transportAging=1;
    process03(1);
     			$("#tjcx_04 a").removeClass("now");
			$(this).addClass("now");
    })

    $("#tj_price2").click(	
    	function(){
    		console.log("weigthPrice排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice; 
    vo.weigthPrice=1;
    process03(1);
     			$("#tjcx_04 a").removeClass("now");
			$(this).addClass("now");
    })

//排序点击 E

//物流专线搜索 S
    $("#search_wlLine").click(
    	
    	function(){
     var companyName=$("#wlgs_name").val();
      	var list1 = [],list2 = [];
	$('#wlLineFrom .select-item').each(function (i,e) {
				list1.push($(this).text())
			});
			var startp =list1[0];
			var startc =list1[1];
			var starta =list1[2];

	$('#wlLineTo .select-item').each(function (i,e) {
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
   if(!companyName){companyName=""}
//    startp=encodeURI(startp)
//    startc=encodeURI(startc)
//    starta=encodeURI(starta)
//    endp=encodeURI(endp)
//    endc=encodeURI(endc)
//    enda=encodeURI(enda)
//    companyName=encodeURI(companyName)
   vo = new Object();
   vo.startProvince=startp;
   vo.startCity=startc;
   vo.startArea=starta;
   vo.endProvince=endp;
   vo.endCity=endc;
   vo.endArea=enda;
   vo.companyName=companyName;
   process03(1);
//   window.location='/zhuanxian/list?startp='+startp+'&startc='+startc+'&starta='+starta+'&endp='+endp+'&endc='+endc+'&enda='+enda+'&companyName='+companyName;
    })
//物流专线搜索 E

//物流网点搜索 S
    $("#search_wangdian").click(
    	
    	function(){
     var wangdian=$("#wangdian").val();
     window.location='/gongsi?&wangdian='+wangdian;
    })
//物流公司搜索 E
//数据字典 S


function tjcx02(){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-common/sysDict/getSysDictByCodeGet/AF029",
		
		success:function(res){
			var datas = res.data;
			for(var i=0;i<datas.length;i++){
				
				var name=datas[i].name;	
				var code=datas[i].code;
        var myurl=UrlUpdateParams(window.location.href, "belongBrandCode", code)
				 var s1='<a  href='+myurl+'>';
				 var s3=name+'</a>';
				 $("#tjcx_02").append(s1+s3);	
				 
			}	
			
				//选中状态 S 
	if(belongBrandCode){
	
	$("#tjcx_02 a").each(function(){
		var aaa=$(this).attr("href");
		
		if(aaa.indexOf(belongBrandCode) !=-1){
			
			console.log(aaa);
			$("#tjcx_02 a").removeClass("now");
			$(this).addClass("now");}
	})
	}
	//选中状态 E
	},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
tjcx02();

function tjcx03(){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-common/sysDict/getSysDictByCodeGet/AF025",
		
		success:function(res){
			var datas = res.data;
//			$('.shiming').attr("href",'/gongsi?address='+address+'&companyName='+companyName+'&authStatus=AF0010403')
			for(var i=0;i<datas.length;i++){
				
				var name=datas[i].name;	
				var code=datas[i].code;
//        var myurl=UrlUpdateParams(window.location.href, "otherServiceCode", code)
				 var s1='<a   name='+code+'>';
				 var s3=name+'</a>';
				 $("#tjcx_03").append(s1+s3);	
				 
			}	
//			选中状态 S 
	if(otherServiceCode){
	
	$("#tjcx_03 a").each(function(){
		var aaa=$(this).attr("name");
		
		if(aaa.indexOf(otherServiceCode) !=-1){
			
			console.log(aaa);	
			$("#tjcx_03 a").removeClass("now");
			$(this).addClass("now");
		
		
		}
	})
	}
//	选中状态 E
	},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
tjcx03();


//数据字典 E
$('#tjcx_03').on('click', 'a', function (e) {
	var aaa=$(this).attr("name");
			$("#tjcx_03 a").removeClass("now");
			$(this).addClass("now");
vo = new Object();
vo.otherServiceCode=aaa;
process03(1);		
}
     
)

//物流园区 S
function wlyq(){
var jwd="113.339865,23.138652"
	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflclogisticspark/v1/Gateway/"+myid,
	    async:false,
		success:function(res){
			var datas = res.data;
		    var parkName=datas.parkName;
		    var parkContact=datas.parkContact;
		    var parkMobile=datas.parkMobile;
		    var parkNum=datas.parkNum;
		    if(parkMobile&&parkMobile.length>23){parkMobile=parkMobile.substring(0,23)+".."}
		    if(parkNum&&parkNum.length>23){parkNum=parkNum.substring(0,23)+".."}
		    var contactQq=datas.contactQq;
		    if(!contactQq||contactQq=="null"){$("#yq_qq span").css("background","none")}
		    var locationProvince=datas.locationProvince;
		    var locationCity=datas.locationCity;
		    var locationArea=datas.locationArea;
		    var parkAddress=datas.parkAddress;
		    var longitude=datas.longitude;
		    var latitude=datas.latitude;
		    if(longitude&&latitude){
		    	jwd=longitude+","+latitude;
		    }
		    var parkSignPicture=datas.parkSignPicture;
		    var parkIntroduce=datas.parkIntroduce;
		    $('#yq_01').attr("src",parkSignPicture);
		    $('#yq_00').html(parkName);
		    $('#arc_nav_a2').html(parkName);
		    $('#yq_02').html(parkContact);
		    $('#yq_03').html(parkMobile);
		    $('#yq_04').html(parkNum);
		    $('#yq_05').html(contactQq);
		    $("#yq_qq").attr("href","http://wpa.qq.com/msgrd?v=3&uin="+contactQq+"&site=qq&menu=yes");
		    $('#yq_06').html(locationProvince+locationCity+locationArea);
		    $('#yq_07').html(parkAddress);
		    $('#yq_08').html(parkIntroduce)
		       
	

	//选中状态 E
	},error:function(err){
			console.log(err.responseText);
		

		}
		})
	return jwd;
	}
wlyq();
//物流园区 E

//物流公司 推荐列表S
function process01(){
var rangeIds="";
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcLogisticsCompany/v1/recommendCompanys",
		dataType: "json",
		async:false,
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:8,
			vo:{
				"parkId":myid
			}		//JSON.stringify({})
		}		
		),	
		success:function(res){
			 $("#js007 .tj_list").not(":eq(0)").remove();
			  if(!res.data||!res.data.totalCount){ 
				console.log("推荐内容为空")
				$(".tj_none").css("display","block")}
			var datas = res.data.list;	
			if(!datas){return }
			for(var i=0;i<datas.length;i++){

	

		
				var id=datas[i].id;
				var companyId=datas[i].companyId;
                var mobile=datas[i].mobile;
                if(!mobile){mobile=''}
                var contactsTel=datas[i].contactsTel;
                if(!contactsTel){contactsTel=''}
				var account=datas[i].account;
				var companyName=datas[i].companyName;
               	var address="";
				if(datas[i].address){
				address=datas[i].address.substring(0,16);}
                var credit=datas[i].credit;
				var contactsName = datas[i].contactsName;

				var isVip=datas[i].isVip;
		    var authStatus=datas[i].authStatus;
		    var collateral=datas[i].collateral;

				var companyId = datas[i].companyId
				$("#tj_05").attr("href","/member/"+companyId+"");
				$("#tj_01").html(companyName);
				$("#tj_02").html(contactsName);
				$("#tj_03").html(contactsTel+" "+mobile);
				$("#tj_04").html(address);

				 var s1='<div class="tj_list tj_list'+i+'">'
				 var s2=$(".tj_list").html();	
				 var s3='</div>'
				$("#js007").append(s1+s2+s3);	
				  if(credit>=0&&credit<=3){
		   	$('.tj_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	}
		   if(credit>=4&&credit<=10){
		   	$('.tj_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	$('.tj_list'+i+' .xy_zuan:eq(1)').css("display","inline")
		   	}
		   if(credit>=11&&credit<=40){
		   	$('.tj_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	$('.tj_list'+i+' .xy_zuan:eq(1)').css("display","inline")
		   	$('.tj_list'+i+' .xy_zuan:eq(2)').css("display","inline")
		   	}
		   if(credit>=41&&credit<=90){
		    $('.tj_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	$('.tj_list'+i+' .xy_zuan:eq(1)').css("display","inline")
		   	$('.tj_list'+i+' .xy_zuan:eq(2)').css("display","inline")
		   	$('.tj_list'+i+' .xy_zuan:eq(3)').css("display","inline")
		   	}
		   if(credit>=91&&credit<=150){
		   	$('.tj_list .xy_zuan').css("display","inline")
		   	}
		   
		   
		   if(credit>=151&&credit<=250){
		   	$('.tj_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	}
		   if(credit>=251&&credit<=500){
		   	$('.tj_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	$('.tj_list'+i+' .xy_guan:eq(1)').css("display","inline")
		   	}
		   if(credit>=500&&credit<=1000){
		   	$('.tj_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	$('.tj_list'+i+' .xy_guan:eq(1)').css("display","inline")
		   	$('.tj_list'+i+' .xy_guan:eq(2)').css("display","inline")
		   	}
		   if(credit>=1001&&credit<=2000){
		    $('.tj_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	$('.tj_list'+i+' .xy_guan:eq(1)').css("display","inline")
		   	$('.tj_list'+i+' .xy_guan:eq(2)').css("display","inline")
		   	$('.tj_list'+i+' .xy_guan:eq(3)').css("display","inline")
		   	}
		   if(credit>=2001){
		   	$('.tj_list .xy_guan').css("display","inline")
		   	}
				 
				
				 if(isVip!=1){console.log("is not Vip");
		  $('.tj_list'+i+'  #tj_xinyong').css("display","none")}
		  if(authStatus!="AF0010403"){console.log("is not shiming");
		  $('.tj_list'+i+'  #tj_shiming').css("display","none")}
		  if(!collateral||collateral==0){console.log("is not danbao");
		  $('.tj_list'+i+'  #tj_danbao').css("display","none")}

			}		

		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	return rangeIds;
	
	}
process01();
//物流公司 推荐列表 E

//物流网点 栏目列表S
function process02(currentPage){
var totalPage=8;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getLogisticsCompany/"+myid,
		dataType: "json",
		async:false,
		data:JSON.stringify(
			{
			currentPage:currentPage,
			pageSize:20,
			vo:vo			//JSON.stringify({})
		}		
		),	
		success:function(res){
		  $("#js002 .wlzx_list").not(":eq(0)").remove();
		   if(res.data){
		  totalPage=res.data.pages;
		  console.log(totalPage);}
		   if(!res.data||!res.data.total){ 
				console.log("内容为空")
				$(".box").css("display","none")
				$("#js002 .list_none").css("display","block")
				return;
		   }
		  
		  
			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){ 
		 
     
				
			    var id=datas[i].id;
				var companyId=datas[i].companyId;
				var account=datas[i].account;
				var companyName=datas[i].companyName;
				if(companyName.length>6){companyName=companyName.substring(0,6)}
				var contactsName = datas[i].contactsName;
				if(contactsName&&contactsName.length>3){contactsName=datas[i].contactsName.substring(0,3)}
				var pointName=datas[i].pointName;
				var contactsTel=datas[i].contactsTel;
				if(!contactsTel){contactsTel=''}
				var mobile=datas[i].mobile;
				if(!mobile){mobile=''}
				var reg0=new RegExp(",","g")
				var reg1=new RegExp('\"',"g")
				if (datas[i].productService){
				var productService0=datas[i].productService.replace(reg0," ");
				var productService1=productService0.replace(reg1,"")
				var productService2=productService1.replace("[","")
				var productService3=productService2.replace("]","")
				var productService=productService3.substring(0,15)
				}
				if(!datas[i].productService){var productService=""; }
				if (datas[i].otherService){
				var otherService0=datas[i].otherService.replace(reg0," ");
				var otherService1=otherService0.replace(reg1,"")
				var otherService2=otherService1.replace("[","")
				var otherService3=otherService2.replace("]","")
				var otherService=otherService3.substring(0,15)
				}
				if(!datas[i].otherService){var otherService=""; }
			    var credit=datas[i].credit;
		   

		
				var qq=datas[i].qq;
				var address="";
				if(datas[i].address){
				address=datas[i].address.substring(0,16);}
				var isVip=datas[i].isVip;
				var authStatus=datas[i].authStatus;
		    var collateral=datas[i].collateral;
				var orderurl="/plus/list.php?tid=77&uid="+account+"&publishId="+companyId;

				var companyFacadeFile=datas[i].companyFacadeFile;
				if(companyFacadeFile){
		   var   companyFacadeFile=datas[i].companyFacadeFile.split(",")[0]; 
		  }
		    var  num0=Math.random();
		    var num=Math.ceil(num0*30);
        var src1="/images/pic/bg"+num+".png";
        if(!companyFacadeFile){ $("#nr01").attr("src",src1);}
				if(companyFacadeFile){ 
        $("#nr01").attr("src",companyFacadeFile);
		                }
				  $('#nr_wd').html(pointName);
                  $('#nr02').html(companyName);
                  $('#nr04').html(contactsName);
		          $('#nr05').html(contactsTel+' '+mobile);
		          $('#nr06').html(address);
		          $('#nr07').html(productService);
		          $('#nr08').html(otherService);
		          $('#nr_a21').attr('href','/member/'+companyId+'')
		        $("#wlzx_list_view").attr("onclick","window.open('/member/"+companyId+"')")
				$("#fahuo").attr("onclick","window.open('"+orderurl+"')")
				$("#nr11").attr("href","http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes");
				 var s1='<ul class="wlzx_list wlzx_list'+i+'">'
				 var s2=$(".wlzx_list").html();	
				 var s3='</ul>'
				 $("#js002").append(s1+s2+s3);	

				 		   if(credit>=0&&credit<=3){
		   	$('.wlzx_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	}
		   if(credit>=4&&credit<=10){
		   	$('.wlzx_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(1)').css("display","inline")
		   	}
		   if(credit>=11&&credit<=40){
		   	$('.wlzx_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(1)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(2)').css("display","inline")
		   	}
		   if(credit>=41&&credit<=90){
		    $('.wlzx_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(1)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(2)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(3)').css("display","inline")
		   	}
		   if(credit>=91&&credit<=150){
		   	$('.wlzx_list .xy_zuan').css("display","inline")
		   	}
		   
		   
		   if(credit>=151&&credit<=250){
		   	$('.wlzx_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	}
		   if(credit>=251&&credit<=500){
		   	$('.wlzx_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(1)').css("display","inline")
		   	}
		   if(credit>=500&&credit<=1000){
		   	$('.wlzx_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(1)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(2)').css("display","inline")
		   	}
		   if(credit>=1001&&credit<=2000){
		    $('.wlzx_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(1)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(2)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(3)').css("display","inline")
		   	}
		   if(credit>=2001){
		   	$('.wlzx_list .xy_guan').css("display","inline")
		   	}
				 
				 
				 
				  if(collateral>0){
			$('.wlzx_list'+i+' .wlgs_danbao').css("display","inline")}
				 if(isVip==1){
			$('.wlzx_list'+i+' .wlgs_xinyong').css("display","inline")}
	  if(authStatus=="AF0010403"){
	  	console.log("is  shiming");
			$('.wlzx_list'+i+' .wlgs_shiming').css("display","inline")}
	  	if(!qq){
					$('.wlzx_list'+i+' .wlzx_list_2 #nr11 img').css("display","none");
					}
	  
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})	
	console.log("最终总页数："+totalPage)
	return totalPage;
	}
//process02(1);
//物流网点栏目列表 E


//物流专线 栏目列表S
function process03(currentPage){
var totalPage=8;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getTransportRange/"+myid,
		dataType: "json",
		async:false,
		data:JSON.stringify(
			{
			currentPage:currentPage,
			pageSize:20,
			vo:vo			//JSON.stringify({})
		}		
		),	
		success:function(res){
		  $("#js003 li").not(":eq(0)").remove();
		   if(res.data){
		  totalPage=res.data.pages;
		  console.log(totalPage);}
		   if(!res.data||!res.data.total){ 
				console.log("内容为空2")
				$("#js003 .box").css("display","none")
				$("#js003 .list_none").css("display","block")}
		  
		  
			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){ 
				var primeryPrice0=datas[i].primeryPrice0;
				var discountPrice0=datas[i].discountPrice0;
				var primeryPrice1=datas[i].primeryPrice1;
				var discountPrice1=datas[i].discountPrice1;
				var qhjg=primeryPrice0;
				if(discountPrice0){qhjg=discountPrice0}
				var zhjg=primeryPrice1;
				if(discountPrice1){zhjg=discountPrice1}
                 
	
				var rangeId=datas[i].rangeId;
				var companyId=datas[i].companyId;
				var account=datas[i].account;
				var startCity=datas[i].startCity;
			  
				var startArea=datas[i].startArea;
				var endCity=datas[i].endCity;
				var endArea=datas[i].endArea;
				
				if(startCity==null){startCity="";}
				if(startArea==null){startArea="";}
				if(endCity==null){endCity="";}
				if(endArea==null){endArea="";}
                var start=startCity+startArea;
                var end=endCity+endArea;
				var companyName = datas[i].companyName;
				var transportAging = datas[i].transportAging;
				var transportAgingUnit = datas[i].transportAgingUnit.replace("多","");
				var url="/zhuanxian/detail?id="+rangeId+"&publishId="+companyId;
		        $("#nr_a01").attr("href",url);
		        $("#nr_a02").attr("href",url);
		        $("#nr_a03").attr("href",url);
		        $("#nr_a04").attr("href",url);
		        $("#nr_a05").attr("href",url);
		        $("#nr001").html(start+'&nbsp;&rarr;&nbsp;'+end);
		        if(!start && !end)
		        {$("#nr001").html("")}
		        $("#nr002").html(qhjg);
		        $("#nr003").html(zhjg);
				$("#nr004").html(transportAging+transportAgingUnit);
				var companyId = datas[i].companyId
				$("#nr005").attr("href","/member/"+companyId+"");
				$("#nr006").html(companyName);
				 var s1='<li>';
				 var s2=$("#js003 li").html();	
				 var s3='</li>'
				 $("#js003").append(s1+s2+s3);			 


	  
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})	
	console.log("最终总页数："+totalPage)
	return totalPage;
	}
//process03(1);
//物流专线栏目列表 E


