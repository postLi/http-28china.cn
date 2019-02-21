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


var start1=GetUrlParam("start");
var end1=GetUrlParam("end");
var departureTimeCode1=GetUrlParam("departureTimeCode");
var belongBrandCode1=GetUrlParam("belongBrandCode");
var otherServiceCode1=GetUrlParam("otherServiceCode");

var orderNumber=GetUrlParam("orderNumber");
var transportAging=GetUrlParam("transportAging");
var weigthPrice=GetUrlParam("weigthPrice");
var lightPrice=GetUrlParam("lightPrice");


var start= decodeURI(start1);
var end= decodeURI(end1);
var departureTimeCode= decodeURI(departureTimeCode1);
var belongBrandCode= decodeURI(belongBrandCode1);
var otherServiceCode= decodeURI(otherServiceCode1);

var orderNumber= decodeURI(orderNumber);
var transportAging= decodeURI(transportAging);
var weigthPrice= decodeURI(weigthPrice);
var lightPrice= decodeURI(lightPrice);



vo = new Object();
vo.startLocation=start;
vo.endLocation=end;
vo.departureTimeCode=departureTimeCode;
vo.belongBrandCode=belongBrandCode;
vo.otherServiceCode=otherServiceCode;

vo.orderNumber=orderNumber;
vo.transportAging=transportAging;
vo.weigthPrice=weigthPrice;
vo.lightPrice=lightPrice;





 if (!start || start== "null") {start="";delete vo.startLocation;}
 if (!end || end== "null") {end="";delete vo.endLocation;}
 if (!departureTimeCode || departureTimeCode == "null") {departureTimeCode="";delete vo.departureTimeCode;}
 if (!belongBrandCode || belongBrandCode== "null") {belongBrandCode="";delete vo.belongBrandCode;}
 if (!otherServiceCode || otherServiceCode== "null") {otherServiceCode="";delete vo.otherServiceCode;}
 
 if (!orderNumber || orderNumber== "null") {orderNumber="";delete vo.orderNumber;}
 if (!transportAging || transportAging== "null") {transportAging="";delete vo.transportAging;}
 if (!weigthPrice || weigthPrice== "null") {weigthPrice="";delete vo.weigthPrice;}
 if (!lightPrice || lightPrice== "null") {lightPrice="";delete vo.lightPrice;}
vo.rangeIds=process01();
 
$('#wlLineFrom').val(start);
$('#wlLineTo').val(end);
$('#tjcx_01 .all').attr("href",UrlUpdateParams(window.location.href, "departureTimeCode", ""))
$('#tjcx_02 .all').attr("href",UrlUpdateParams(window.location.href, "belongBrandCode", ""))
$('#tjcx_03 .all').attr("href",UrlUpdateParams(window.location.href, "otherServiceCode", ""))
//清空条件
$("#flush").click(	
    	function(){
    		console.log("清空地址")
    		window.location.href='/zhuanxian/list';
    })
//清空条件

//排序点击 S
 $("#seq0").click(	
    	function(){
    		console.log("clear排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice; 
    process02(1);
    
    })
  $("#seq1").click(	
    	function(){
    		console.log("orderNumber排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice; 
    vo.orderNumber=1;
    process02(1);
    })
    $("#seq2").click(	
    	function(){
    		console.log("transportAging排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice; 
    vo.transportAging=1;
    process02(1);
    })
        $("#seq3").mouseenter(	
    	function(){
    		console.log("弹出价格排序")
 $("#tj_price").css("display","block")
    })
                $("#seq3").mouseleave(	
    	function(){
 $("#tj_price").css("display","none")
    })
             $("#tj_price").mouseenter(	
    	function(){
 $("#tj_price").css("display","block")
    })  
                 $("#tj_price").mouseleave(	
    	function(){
 $("#tj_price").css("display","none")
    })
    $("#tj_price2").click(	
    	function(){
    		 $("#tj_price").css("display","none")
    		console.log("weigthPrice排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice; 
    vo.weigthPrice=1;
    process02(1);
    })
    $("#tj_price1").click(	
    	function(){
    		 $("#tj_price").css("display","none")
    		console.log("lightPrice排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice; 
    vo.lightPrice=1;
    process02(1);
    })
//排序点击 E



//专线搜索 S

    $("#search_wlLine").click(
    	
    	function(){
     var start=$("#wlLineFrom").val();
     var end=$("#wlLineTo").val();
     window.location='/zhuanxian/list?start='+start+'&end='+end;
    })


//专线搜索 E
//专线数据字典 S
function tjcx01(){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-common/sysDict/getSysDictByCodeGet/AF026",
		
		success:function(res){
			var datas = res.data;
			for(var i=0;i<datas.length;i++){
				
				var name=datas[i].name;	
				var code=datas[i].code;
				var myurl=UrlUpdateParams(window.location.href, "departureTimeCode", code)
				 var s1='<a  href='+myurl+'>';
				 var s3=name+'</a>';
				 $("#tjcx_01").append(s1+s3);
				 

				 
			}		
	//选中状态 S 
	if(departureTimeCode){
	
	$("#tjcx_01 a").each(function(){
		var aaa=$(this).attr("href");
		
		if(aaa.indexOf(departureTimeCode) !=-1){
			
			console.log(aaa);
			$("#tjcx_01 a").removeClass("now");
			$(this).addClass("now");}
	})
	}
	//选中状态 E
	},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
tjcx01();

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
			$('.shiming').attr("href",'/zhuanxian/list?start='+start+'&end='+end+'&otherServiceCode=AF0010403')
			for(var i=0;i<datas.length;i++){
				
				var name=datas[i].name;	
				var code=datas[i].code;
          var myurl=UrlUpdateParams(window.location.href, "otherServiceCode", code)
//       var s1='<a  href=/zhuanxian/list?start='+start+'&end='+end;
//				 var s2='&otherServiceCode='+code+'>';
//				 var s3=name+'</a>';
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


//专线数据字典 E

//物流专线 推荐列表S
function process01(){
var rangeIds="";
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcTransportRange/v1/recommendRanges",
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
				var plength=datas[i].rangePrices.length;
				for(var j=0;j<plength;j++){
					var ptype=datas[i].rangePrices[j].type;
					if (ptype==0){		
					var qhjg=datas[i].rangePrices[j].discountPrice;
					var qhjg0=datas[i].rangePrices[j].primeryPrice;
					}
					if (ptype==1){
						var zhjg=datas[i].rangePrices[j].discountPrice;
						var zhjg0=datas[i].rangePrices[j].primeryPrice;
					}				
				}	
				if(!qhjg){qhjg=qhjg0}
				if(!zhjg){zhjg=zhjg0}
				if(qhjg.indexOf('.')!=-1){qhjg=qhjg.split('.')[0]}
				var rangeId=datas[i].rangeId;
				var companyId=datas[i].companyId;
				console.log(qhjg+":"+zhjg);
				var account=datas[i].account;
				var companyName=datas[i].companyName;
				var lowerPrice=datas[i].lowerPrice;
				if(lowerPrice){lowerPrice=lowerPrice+"元"}
				if(!lowerPrice){lowerPrice="面议"}
				var startLocation = datas[i].startLocation;
				var endLocation = datas[i].endLocation;
				var publishName = datas[i].publishName;
				var transportAging = datas[i].transportAging;
				var transportAgingUnit = datas[i].transportAgingUnit.replace("多","");
				var isVip=datas[i].isVip;
		    var authStatus=datas[i].authStatus;
		    var collateral=datas[i].collateral;
				var arcurl="/zhuanxian/detail?id="+rangeId+"&publishId="+companyId; 
				$("#tj_a011").attr("href","/member/"+companyId+"");
				$("#tj_a011").html(companyName);
				$("#tj011").html( startLocation.substring(0,6));
				$("#tj012").html( endLocation.substring(0,6));
				$("#tj013").html(zhjg);
				$("#tj014").html(qhjg);
				$("#tj015").html(transportAging+transportAgingUnit);
				if(!transportAging||!transportAgingUnit){$("#tj015").html("")}
				$("#tj016").html(lowerPrice);
				$("#tj017").attr("href",arcurl);
				$("#tj010").attr("href",arcurl);
				 var s1='<div class="tj_list tj_list'+i+'">'
				 var s2=$(".tj_list").html();	
				 var s3='</div>'
				$("#js007").append(s1+s2+s3);	
				 if(isVip!=1){console.log("is not Vip");
		  $('.tj_list'+i+'  #tj_xinyong').css("display","none")}
		  if(authStatus!="AF0010403"){console.log("is not shiming");
		  $('.tj_list'+i+'  #tj_shiming').css("display","none")}
		  if(!collateral||collateral==0){console.log("is not danbao");
		  $('.tj_list'+i+'  #tj_danbao').css("display","none")}
		  
				rangeIds=rangeIds+","+rangeId;
				rangeIds=rangeIds.substring(1,500)
			}		
			
				console.log("推荐专线ID"+rangeIds)
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	return rangeIds;
	
	}
process01();
//物流专线 推荐列表 E

//物流专线 栏目列表S
function process02(currentPage){
var totalPage=8;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcTransportRange/v1/listRanges",
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
		  totalPage=res.data.totalPage;
		  console.log(totalPage);}
		   if(!res.data||!res.data.totalCount){ 
				console.log("内容为空")
				$(".box").css("display","none")
				$(".list_none").css("display","block")}
		  
		    if(!res.data){return }
			var datas = res.data.list;	
			for(var i=0;i<datas.length;i++){ 
		 
       var primeryPrice0=datas[i].primeryPrice0;
       var discountPrice0=datas[i].discountPrice0;
       var primeryPrice1=datas[i].primeryPrice1;
       var discountPrice1=datas[i].discountPrice1;
       if(!discountPrice0){qhjg=primeryPrice0}
       if(discountPrice0){qhjg=discountPrice0}
       if(!discountPrice1){zhjg=primeryPrice1}
       if(discountPrice1){zhjg=discountPrice1}
				
				
				
				var orderNumber=datas[i].orderNumber;
				var assessNumber=datas[i].assessNumber;
				if(!orderNumber){orderNumber=0}
				if(!assessNumber){assessNumber=0}
				var rangeId=datas[i].rangeId;
				var companyId=datas[i].companyId;
				var account=datas[i].account;
				var companyName=datas[i].companyName;
				
				var startLocation=datas[i].startLocation;
				var endLocation=datas[i].endLocation;
				if(startLocation.length>3){
				startLocation = startLocation.substring(3,10);
				}
				if(endLocation.length>3){
				var endLocation = endLocation.substring(3,10);
				}
				if(startLocation.indexOf('自治区')!=-1){startLocation=startLocation.split('自治区')[1]}
				if(endLocation.indexOf('自治区')!=-1){endLocation=endLocation.split('自治区')[1]}
				
				var publishName = datas[i].publishName;
				var transportAging = datas[i].transportAging;
				var transportAgingUnit = datas[i].transportAgingUnit.replace("多","");
				if(datas[i].transportRemark){
				var transportRemark = datas[i].transportRemark.substring(0,10);}
				var qq=datas[i].QQ;
				console.log(qq+"qq")
			
				if(datas[i].address){
				var address=datas[i].address.substring(0,10);}
				var departureHzData=datas[i].departureHzData;
				var departureHzTime=datas[i].departureHzTime;
				var isVip=datas[i].isVip;
				var authStatus=datas[i].authStatus;
		    var collateral=datas[i].collateral;
				var arcurl="/zhuanxian/detail?id="+rangeId+"&publishId="+companyId; 
				var orderurl="/plus/list.php?tid=77&uid="+account+"&id="+rangeId+"&publishId="+companyId;
				$("#nr_a21").attr("href",arcurl);
				$("#wlzx_list_view").attr("onclick","window.open('"+arcurl+"')")
				$("#fahuo").attr("onclick","window.open('"+orderurl+"')")
				if(!datas.rangeLogo){var rangeLogo1=""}
				if(datas.rangeLogo){ var rangeLogo1=datas[i].rangeLogo.split(",")[0]; }

		    var  num0=Math.random();
		    var num=Math.ceil(num0*30);
        console.log(num);
        var src1="/templets/default/images/pic/bg"+num+".png";
        if(!rangeLogo1){ $("#nr01").attr("src",src1);}
				if(rangeLogo1){ 
        $("#nr01").attr("src",rangeLogo1);
		                }

				$("#nr01").attr("alt",companyName);
				$("#nr02").html( startLocation+"&rarr;"+endLocation);
				$("#nr02").attr("href",arcurl);
		        $("#nr03").attr("href","/member/"+account+".html");
				$("#nr04").html(companyName);
				$("#nr05").html(transportRemark);
				$("#nr06").html(address);
				$("#nr07").html(zhjg);
				$("#nr08").html(qhjg);
				$("#nr1001").html(orderNumber);
				$("#nr1002").html(assessNumber);
				$("#nr09").html(transportAging+transportAgingUnit);
				if(!transportAging||!transportAgingUnit){$("#nr09").html("")}
				$("#nr10").html(departureHzData+"天"+departureHzTime+"次");
				if(!departureHzData||!departureHzTime){$("#nr10").html("")}
				$("#nr11").attr("href","http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes");
				 var s1='<ul class="wlzx_list wlzx_list'+i+'">'
				 var s2=$(".wlzx_list").html();	
				 var s3='</ul>'
				 $("#js002").append(s1+s2+s3);	
				  if(!collateral||collateral==0){
		console.log("is not danbao");
			$('.wlzx_list'+i+' .wlzx_list_4 .p3').css("display","none")}
				 if(!isVip||isVip==0){console.log("is not Vip");
		console.log('wlzx_list'+i+' .wlzx_list_4 .p2');
   	$('.wlzx_list'+i+' .wlzx_list_4 .p2').css("display","none")}
	  if(authStatus!="AF0010403"){
	  	console.log("is not shiming"+startLocation+endLocation);
  	$('.wlzx_list'+i+' .wlzx_list_4 .p1').css("display","none")}
	  	if(!qq){
					$('.wlzx_list'+i+' .wlzx_list_6 #qq').css("display","none");
					}
	  
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})	
	console.log("最终总页数："+totalPage)
	return totalPage;
	}
// process02(1);
//物流专线栏目列表 E


