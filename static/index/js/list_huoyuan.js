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


var startp1=GetUrlParam("startp");
var endp1=GetUrlParam("endp");
var startc1=GetUrlParam("startc");
var endc1=GetUrlParam("endc");
var starta1=GetUrlParam("starta");
var enda1=GetUrlParam("enda");
var goodsWeight1=GetUrlParam("goodsWeight1");
var goodsWeight2=GetUrlParam("goodsWeight2");
var goodsVolume1=GetUrlParam("goodsVolume1");
var goodsVolume2=GetUrlParam("goodsVolume2");
var orderClass1=GetUrlParam("orderClass");



var startp=decodeURI(startp1)
var endp= decodeURI(endp1);
var startc= decodeURI(startc1);
var endc= decodeURI(endc1);
var starta= decodeURI(starta1);
var enda= decodeURI(enda1);
var goodsWeight1= decodeURI(goodsWeight1);
var goodsWeight2= decodeURI(goodsWeight2);
var goodsVolume1= decodeURI(goodsVolume1);
var goodsVolume2= decodeURI(goodsVolume2);
var orderClass=decodeURI(orderClass1);


var currentAreaFullName = $.cookie('currentAreaFullName');
var currentProvinceFullName=$.cookie('currentProvinceFullName');




vo=new Object();
vo.queryType="2";
vo.startProvince=startp;
vo.startCity=startc;
vo.startArea=starta;
vo.endProvince=endp;
vo.endCity=endc;
vo.endArea=enda;
vo.goodsWeightLower=parseFloat(goodsWeight1).toFixed(0);
vo.goodsWeightUpper=parseFloat(goodsWeight2).toFixed(0);
vo.goodsVolumeLower=parseFloat(goodsVolume1).toFixed(1);
vo.goodsVolumeUpper=parseFloat(goodsVolume2).toFixed(1);
vo.orderClass=orderClass;





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
 
 if (!goodsWeight1 || goodsWeight1 == "null") {goodsWeight1="";delete vo.goodsWeightLower;}
 if (!goodsWeight2 || goodsWeight2 == "null") {goodsWeight2="";delete vo.goodsWeightUpper;}
 if (!goodsVolume1 || goodsVolume1 == "null") {goodsVolume1="";delete vo.goodsVolumeLower;}
 if (!goodsVolume2 || goodsVolume2 == "null") {goodsVolume2="";delete vo.goodsVolumeUpper}
 if (!orderClass || orderClass == "null") {orderClass="";delete vo.orderClass}
 
 $("#list_nav_a").html(startc+starta+" 到 "+endc+enda+" 货源信息")
if((!startc&&!starta)||(!endc&&!enda)){$("#list_nav_a").html(startc+starta+"  "+endc+enda+"货源信息")}

$("#HuoyuanFrom input").citypicker({
  province: startp,
  city: startc,
  district: starta
});
$("#HuoyuanTo input").citypicker({
  province: endp,
  city: endc,
  district: enda
});
$('#tjcx_01 .all').attr("href",UrlUpdateParams(UrlUpdateParams(window.location.href, "goodsWeight1", ""), "goodsWeight2", ""))
$('#tjcx_02 .all').attr("href",UrlUpdateParams(UrlUpdateParams(window.location.href, "goodsVolume1", ""), "goodsVolume2", ""))
$('#tjcx_03 .all').attr("href",UrlUpdateParams(window.location.href, "orderClass",""))
//清空条件
$("#flush").click(	
    	function(){
    		console.log("清空地址")
    		window.location.href='/huoyuan';
    })
//清空条件
//货源搜索 S
/*
    $("#search_huoyuan").click(
    	function(){
     var start=$("#HuoyuanFrom").val();
     var end=$("#HuoyuanTo").val();
     
     
     
     
    if(!start){start=""}
    if(!end){end=""}
    
    
    start=encodeURI(start)
    end=encodeURI(end)	
    var sstart="&start="+start;
    var send="&end="+end;

     window.location='/huoyuan?'+sstart+send;
    })
*/
    $("#search_huoyuan").click(
    	function(){
			var list1 = [],list2 = [];
			$('#HuoyuanFrom .select-item').each(function (i,e) {
				list1.push($(this).text())
			});
			var startp =list1[0];
			var startc =list1[1];
			var starta =list1[2];

			$('#HuoyuanTo .select-item').each(function (i,e) {
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


 window.location='/huoyuan?startp='+startp+'&startc='+startc+'&starta='+starta+'&endp='+endp+'&endc='+endc+'&enda='+enda;
     

    })
//货源搜索 E


//货源数据字典 S

function tjcx01(){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-common/sysDict/getSysDictByCodeGet/AF03801",
		
		success:function(res){
			var datas = res.data;
			for(var i=0;i<datas.length;i++){
				
				var name=datas[i].name;	
				if(name.indexOf("<")!=-1){
					var name1=0;
					var name2=name.substring(1,20);
				}
				else if(name.indexOf(">")!=-1){
					var name1=name.substring(1,20);
					var name2=100000;
				}
				else {
					var name1=name.split("-",2)[0];
					var name2=name.split("-",2)[1];
				}
				
				
				
				var code=datas[i].code;
        var myurl=UrlUpdateParams(UrlUpdateParams(window.location.href, "goodsWeight1",name1), "goodsWeight2",name2);
//       var s1='<a  href=/huoyuan?'+sstart+send;
//				 var s2='&goodsWeight1='+name1+'&goodsWeight2='+name2+'>';
//				 var s3=name+'公斤</a>';
         var s1='<a  href='+myurl+'>';
				 var s3=name+'公斤</a>';
				 $("#tjcx_01").append(s1+s3);	
				 
	
			}		
			//选中状态 S 
	if(goodsWeight1&&goodsWeight2){
	
	$("#tjcx_01 a").each(function(){
		var aaa=$(this).attr("href");
		
		if(aaa.indexOf('goodsWeight1='+goodsWeight1)!=-1&&aaa.indexOf('goodsWeight2='+goodsWeight2)!=-1){
			
			//console.log(aaa+":"+goodsWeight1+":"+goodsWeight2);
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
		url:"/api/aflc-common/sysDict/getSysDictByCodeGet/AF03802",
		
		success:function(res){
			var datas = res.data;
			for(var i=0;i<datas.length;i++){
				
				var name=datas[i].name;	
				if(name.indexOf("<")!=-1){
					var name1=0;
					var name2=name.substring(1,20);
				}
				else if(name.indexOf(">")!=-1){
					var name1=name.substring(1,20);
					var name2=100000;
				}
				else {
					var name1=name.split("-",2)[0];
					var name2=name.split("-",2)[1];
				}
				
				
				
				var code=datas[i].code;
        var myurl=UrlUpdateParams(UrlUpdateParams(window.location.href, "goodsVolume1", name1), "goodsVolume2", name2);
//       var s1='<a  href=/huoyuan?'+sstart+send;
//				 var s2='&goodsVolume1='+name1+'&goodsVolume2='+name2+'>';
//				 var s3=name+'立方</a>';
         var s1='<a  href='+myurl+'>';
				 var s3=name+'立方</a>';
				 $("#tjcx_02").append(s1+s3);	
				 
			}		
			
			//选中状态 S 
	if(goodsVolume1&&goodsVolume2){
	
	$("#tjcx_02 a").each(function(){
		var aaa=$(this).attr("href");
		
		if(aaa.indexOf('goodsVolume1='+goodsVolume1)!=-1&&aaa.indexOf('goodsVolume2='+goodsVolume2)!=-1){
			
			//console.log(aaa+":"+goodsVolume1+":"+goodsVolume2);
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
        var myurl1=UrlUpdateParams(window.location.href, "orderClass", 0);
	    var myurl2=UrlUpdateParams(window.location.href, "orderClass", 1);
	    $('#seq1').attr("href",myurl1)
		$('#seq2').attr("href",myurl2)
			//选中状态 S 
if(orderClass){
	$("#tjcx_03 a").each(function(){
		var aaa=$(this).attr("href");
		
		if(aaa.indexOf('orderClass='+orderClass)!=-1){
			$("#tjcx_03 a").removeClass("now");
			$(this).addClass("now");}
	})

}
	}
tjcx03();
//货源数据字典 E

//货源列表推荐列表S
function process01(){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/order/fclOrder/v1/getPortalRecommendList",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:14,
			vo:vo			//JSON.stringify({})
		}		
		),	
		success:function(res){
			if(!res.data||res.data==""){ 
				console.log("推荐内容为空")
				$(".tj_none").css("display","block")}
			var datas = res.data;	
            if(!datas){return ;}
			for(var i=0;i<datas.length;i++){	
				var id=datas[i].id;
				var shipperId=datas[i].shipperId;
				var account=datas[i].account;	
                var browseNumber=datas[i].browseNumber;
                var collectNum=datas[i].collectNum;
                if(!browseNumber){browseNumber=0}
                if(!collectNum){collectNum=0}
				var startCity = datas[i].startCity;
				var startArea=datas[i].startArea;
				var endCity = datas[i].endCity;
				var endArea=datas[i].endArea;
				if(!startCity){startCity=""}
				if(!endCity){endCity=""}
				if(!startArea){startArea=""}
				if(!endArea){endArea=""}
				var start=startCity+startArea;
				var end=endCity+endArea;
				if(start&&start.length>6){start=start.substring(0,6)+".."}
				if(end&&end.length>6){end=end.substring(0,6)+".."}
				
				var companyName=datas[i].companyName;
				if(companyName&&companyName>12){companyName=companyName.substring(0,12)+".."}
				if(!companyName){companyName="普通货主"}
				var goodsName=datas[i].goodsName.replace(/\,/g," ");
				if(goodsName.length>6){var goodsName=goodsName.substring(0,6)+'..';}	
				var goodsWeight = datas[i].goodsWeight;
				if(goodsWeight.length>5){goodsWeight=goodsWeight.substring(0,5)+'..'}
				var goodsVolume = datas[i].goodsVolume;
				if(goodsVolume.length>5){goodsVolume=goodsVolume.substring(0,5)+'..'}
				var goodsNum=datas[i].goodsNum;
        var isVip=datas[i].isVip;
		    var authStatus=datas[i].authStatus;
				//var companyName =datas[i].companyName;	

	
                var  url="/huoyuan/2018/0508/2.html?id="+id+"&shipperId="+shipperId;
                $("#nr0410").html(start);
                $("#nr0411").html(end);
                $("#nr0412").html(companyName);
                //$("#nr0412").attr("href","/member/index.php?uid="+account);     
                $("#nr0413").html(goodsName);
                $("#nr0414").html(goodsWeight);
                $("#nr0415").html(goodsVolume);
                $("#nr0416").html(goodsNum+"件");
                $("#tj101").html(browseNumber);
                $("#tj102").html(collectNum);
                if(!goodsNum){$("#nr0416").html("");}
                $("#nr04170").attr("href",url);
                $("#tj010").attr("href",url);
                $("#nr_a41").attr("href",url);
                $("#tj017").attr("href",url);
				 var s1='<div class="tj_list tj_list'+i+'">'
				 var s2=$(".tj_list").html();	
				 var s3='</div>'
				 $("#js010").append(s1+s2+s3);	
				 
				  if(!isVip||isVip==0){console.log("is not Vip");
		  $('.tj_list'+i+'  #tj_xinyong').css("display","none")}
		  if(authStatus!="AF0010403"){console.log("is not shiming");
		  $('.tj_list'+i+'  #tj_shiming').css("display","none")}
		  
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
process01();
//货源列表推荐列表 E

//货源信息栏目列表S
function process02(currentPage){
var totalPage=8;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/order/fclOrder/v1/getPortalOrderList",
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
			 $("#js005 .wlzx_list").not(":eq(0)").remove();
	
			 if(res.data){
			 totalPage=res.data.totalPage;
		   console.log(totalPage);}

			 if(!res.data||!res.data.totalCount){ 
				console.log("内容为空")
				$(".box").css("display","none")
				$(".list_none").css("display","block")
							           				
				return;
				}

            var datas = res.data.list;	
			for(var i=0;i<datas.length;i++){	
				
				var id=datas[i].id;
					
				var shipperId=datas[i].shipperId;
				var account=datas[i].account;
				var qq=datas[i].qq;
				var distance=datas[i].distance;
			
				distance=parseFloat(distance/1000).toFixed(1)
				var startCoordinate=datas[i].startCoordinate;
				var endCoordinate=datas[i].endCoordinate;
				var createTime=datas[i].createTime;
				 
				if(createTime){createTime=createTime.substring(0,19)}
				var orderClass=datas[i].orderClass;
			    if(orderClass==0){orderClass="单次急发货源"}
				if(orderClass==1){orderClass="长期稳定货源"}
				var goodsNum=datas[i].goodsNum;
							 
				console.log("goodsNum0:"+goodsNum)
				      if(goodsNum<=0){
                	console.log("goodsNum1:"+goodsNum)
                	$("#nr042").html(""); $("#nr0420").html("");}
				var startCity = datas[i].startCity;
				var startArea=datas[i].startArea;
				var endCity = datas[i].endCity;
				var endArea=datas[i].endArea;
				if(!startCity){startCity=""}
				if(!endCity){endCity=""}
				if(!startArea){startArea=""}
				if(!endArea){endArea=""}
				var start=startCity+startArea;
				var end=endCity+endArea;
				if(start&&start.length>6){start=start.substring(0,6)+".."}
				if(end&&end.length>6){end=end.substring(0,6)+".."}

					var goodsName=datas[i].goodsName.replace(/\,/g," ");
				if(goodsName.length>14){var goodsName=goodsName.substring(0,14)+'..';}	
				var goodsWeight = datas[i].goodsWeight;
				var goodsVolume = datas[i].goodsVolume;
				var companyName =datas[i].companyName;	
					if(companyName&&companyName.length>8){companyName=companyName.substring(0,8)+".."}
				var wlName=datas[i].wlName;
				if(!companyName){companyName="普通货主"}
				var shipperName=datas[i].shipperName;
				var createTime = datas[i].createTime.substring(0,16);
       var isVip=datas[i].isVip;
		   var authStatus=datas[i].authStatus;
                var browseNumber=datas[i].browseNumber;
                var collectNum=datas[i].collectNum;
                if(!browseNumber){browseNumber=0}
                if(!collectNum){collectNum=0}
		   		    
		        var  url="/huoyuan/2018/0508/2.html?id="+id+"&shipperId="+shipperId;
                $("#nr_a41").attr("href",url);
                $("#nr_a41_1").html(start);
                $("#nr_a41_2").html(end);
                $("#nr_a42").attr("href",url);
                $("#nr_a43").attr("href","/member/index.php?uid="+account);              
                $("#nr041").html(goodsName);
                if(goodsNum>0){
                $("#nr042").html(goodsNum); $("#nr0420").html("件");}

                $("#nr043").html(goodsWeight);
                $("#nr044").html(goodsVolume);
                $("#nr045").html(companyName);
                $("#nr046").html(shipperName);
                
                $("#nr051").html(orderClass);
                $("#nr052").html(createTime);
                $("#nr048").attr("href","tencent://message/?uin="+qq+"&Site=&menu=yes");
                $("#nr049").attr("href",url);
                $("#nr0499").html(browseNumber);
                $("#nr0500").html(collectNum);
                $("#nr_distance").html(distance)
				 var s1='<ul class="wlzx_list wlzx_list'+i+'">'
				 var s2=$(".wlzx_list").html();	
				 var s3='</ul>'

				 $("#js005").append(s1+s2+s3);		
				 
				  if(!isVip||isVip==0){console.log("is not Vip");
		  $('.wlzx_list'+i+' #list_xinyong').css("display","none")}
		  if(authStatus!="AF0010403"){console.log("is not shiming");
		  $('.wlzx_list'+i+' #list_shiming').css("display","none")}
		  	  	if(!qq){
					$('.wlzx_list'+i+' .wlzx_list_6 #qq').css("display","none");
					}
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	console.log("最终货源总页数："+totalPage)
	return totalPage;
	}
//process02(1);
//货源信息栏目列表 E

