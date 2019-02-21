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


var address1=GetUrlParam("address");
var detail1=GetUrlParam("detail");
var longitude1=GetUrlParam("longitude");
var latitude1=GetUrlParam("latitude");
var companyName1=GetUrlParam("companyName");
var belongBrandCode1=GetUrlParam("belongBrandCode");
var otherServiceCode1=GetUrlParam("otherServiceCode");
var filterSign1=GetUrlParam("filterSign");


var address= decodeURI(address1);
var detail=decodeURI(detail1);
var longitude= decodeURI(longitude1);
var latitude= decodeURI(latitude1);
var companyName=decodeURI(companyName1);
var belongBrandCode= decodeURI(belongBrandCode1);
var otherServiceCode= decodeURI(otherServiceCode1);
var filterSign= decodeURI(filterSign1);

var areaname = $.cookie('currentAreaName')



vo=new Object();
vo.address=address;
vo.detail=detail;
vo.longitude=longitude;
vo.latitude=latitude;
vo.companyName=companyName;
vo.belongBrandCode=belongBrandCode;
vo.otherServiceCode=otherServiceCode;
vo.filterSign=filterSign;





 if (!address || address== "null")  {address="";delete vo.address;}
 if (!detail || detail== "null")  {detail="";delete vo.detail;}
 if (!longitude || longitude== "null") {longitude="";delete vo.longitude;}
 if (!latitude || latitude== "null") {latitude="";delete vo.latitude;}
 if (!companyName || companyName== "null")  {companyName="";delete vo.companyName;}
 if (!belongBrandCode || belongBrandCode== "null") {belongBrandCode="";delete vo.belongBrandCode;}
 if (!otherServiceCode || otherServiceCode== "null") {otherServiceCode="";delete vo.otherServiceCode;}
 if (!filterSign || filterSign== "null") {filterSign="";delete vo.filterSign;}
//排序点击 S
 $("#seq1").click(	
    	function(){
    		console.log("clear排序")
    		vo.filterSign=1;
    process02(1);
    
    })
 
  $("#seq2").click(	
    	function(){
    		console.log("clear排序")
    		vo.filterSign=2;
    process02(1);
    
    })
//排序点击 E

$('#address').val(address);
$('#jwd').val(detail);
$('#tjcx_01 .all').attr("href",UrlUpdateParams(window.location.href, "belongBrandCode", ""))
$('#tjcx_02 .all').attr("href",UrlUpdateParams(window.location.href, "otherServiceCode", ""))

//清空条件
$("#flush").click(	
    	function(){
    		console.log("清空地址")
    		window.location.href='/plus/list.php?tid=81';
    })
//清空条件
//网点搜索 S

    $("#search_wangdian").click(
    	function(){
     var address=$("#address").val();
     var detail=$("#jwd").val();
    var jwd=$("#jwd").attr("thepos");
        if(jwd){
     var longitude=jwd.split(",",2)[0];
     var latitude=jwd.split(",",2)[1];
    }
    if(!jwd){
     var longitude="";
     var latitude="";
    }
    var address="&address="+address;
    var detail="&detail="+detail;
    var longitude="&longitude="+longitude;
    var latitude="&latitude="+latitude;
     window.location='/plus/list.php?tid=81'+address+detail+longitude+latitude;
    })


//网点搜索 E





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
			$('.shiming').attr("href",'/plus/list.php?tid=81&address='+address+'&companyName='+companyName+'&authStatus=AF0010403')
			for(var i=0;i<datas.length;i++){
				
				var name=datas[i].name;	
				var code=datas[i].code;
          var myurl=UrlUpdateParams(window.location.href, "otherServiceCode", code)
				 var s1='<a  href='+myurl+'>';
				 var s3=name+'</a>';
				 $("#tjcx_03").append(s1+s3);	
				 
			}	
			//选中状态 S 
	if(otherServiceCode){
	
	$("#tjcx_03 a").each(function(){
		var aaa=$(this).attr("href");
		
		if(aaa.indexOf(otherServiceCode) !=-1){
			
			console.log(aaa);
			$("#tjcx_03 a").removeClass("now");
			$(this).addClass("now");}
	})
	}
	//选中状态 E
	},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
tjcx03();

//数据字典 E

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
			pageSize:14,
			vo:vo		//JSON.stringify({})
		}		
		),	
		success:function(res){
			 $("#js007 .tj_list").not(":eq(0)").remove();
			  if(!res.data||!res.data.totalCount){ 
				console.log("推荐内容为空")
				$(".tj_none").css("display","block")}
			var datas = res.data.list;			
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

//网点栏目列表S
function process02(currentPage){
var totalPage=8;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcPointNetwork/v1/listNetworks",
		dataType: "json",
		async:false,
		data:JSON.stringify(
			{
			currentPage:currentPage,
			pageSize:20,
			//vo:{"queryType":"2","startAddress":start,"endAddress":end,"goodsWeightLower":goodsWeight1,"goodsWeightUpper":goodsWeight2,"goodsVolumeLower":goodsVolume1,"goodsVolumeUpper":goodsVolume2}			//JSON.stringify({})
		  vo:vo		//JSON.stringify({})

			}
		),	
		success:function(res){
			 $("#js002 .wlzx_list").not(":eq(0)").remove();
			 if(res.data){
			 totalPage=res.data.totalPage;
		   console.log(totalPage);}
			 if(!res.data||!res.data.totalCount){ 
				console.log("内容为空")
				$(".box").css("display","none")
				$(".list_none").css("display","block")}
			var datas = res.data.list;	
			for(var i=0;i<datas.length;i++){	
				var id=datas[i].id;
				var companyId=datas[i].companyId;
				var account=datas[i].account;
				var pointName=datas[i].pointName;
				if(pointName.length>16){pointName=pointName.substring(0,16)}
				var address=datas[i].address;
				if(address.length>16){address=address.substring(0,16)}
				var contactsName=datas[i].contactsName;
				var contactsTel=datas[i].contactsTel;
				var mobile=datas[i].mobile;
				if(!contactsTel){contactsTel=''}
				if(!mobile){mobile=''}
				var distance=datas[i].distance;

				

				var companyName =datas[i].companyName;	
					if(companyName){companyName=companyName.substring(0,12)}
	
				if(!companyName){companyName="普通货主"}
			
                var isVip=datas[i].isVip;
		        var authStatus=datas[i].authStatus;
	            var collateral=datas[i].collateral;
                var orderurl="/create/order?&uid="+account+"&publishId="+companyId;
						 
								
                $("#nr01").attr("href","/member/"+companyId+"");
                $("#nr01_1").attr("href","/member/"+companyId+"");
                $("#nr01").html(pointName);
                $("#nr02").html(companyName);
                $("#nr03").html(address);
                $("#nr04").html(distance);
                $("#nr05").html(contactsName);
                $("#nr06").html(contactsTel+""+mobile);
                $("#nr07").html(pointName);
                $("#nr08").html(companyName);
   		        $("#nr_a01").attr("onclick","window.open('/member/"+account+".html')")
				$("#fahuo").attr("onclick","window.open('"+orderurl+"')")

				 var s1='<ul class="wlzx_list wlzx_list'+i+'">'
				 var s2=$(".wlzx_list").html();	
				 var s3='</ul>'
				 $("#js002").append(s1+s2+s3);		
				if(distance==0 ||!distance){
					 $('.wlzx_list'+i+' .p4').css("display","none")
				}
				  if(!isVip||isVip==0){console.log("is not Vip");
		  $('.wlzx_list'+i+' #list_xinyong').css("display","none")}
		  if(authStatus!="AF0010403"){console.log("is not shiming");
		  $('.wlzx_list'+i+' #list_shiming').css("display","none")}
		  	  if(!collateral||collateral==0){console.log("is not danbao");
		  $('.wlzx_list'+i+'  #list_danbao').css("display","none")}

			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	console.log("最终总页数："+totalPage)
	return totalPage;
	}
//process02(1);
//网点栏目列表 E

