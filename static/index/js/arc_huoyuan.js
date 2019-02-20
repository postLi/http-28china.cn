
//获取参数的值
function GetQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(t);return null!=s?unescape(s[2]):null}

var aid=GetQueryString("id");

var shipperId=GetQueryString("shipperId");

//找专线/货源/车源 S
$('.arc_input3').click(function(){
var search_type=$('#search_type option:selected').attr("name");
var start=$('.arc_input1').val();
var end=$('.arc_input2').val();
console.log("搜索类型："+search_type+"出发地："+start+"到达地："+end);	
if(search_type=='zx'){
	window.open('/plus/list.php?tid=4&start='+start+'&end='+end);
}
if(search_type=='huo'){
	window.open('/plus/list.php?tid=2&start='+start+'&end='+end);
}
if(search_type=='che'){
	window.open('/plus/list.php?tid=3&start='+start+'&end='+end);
}
	
})


//找专线/货源/车源 E


//货源信息详情页S
function process01(){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/order/fclOrder/v1/getDetails/"+aid,
		
		success:function(res){
			var datas = res.data;	
	            
				var id=datas.id;
				var shipperId=datas.shipperId;
			var startProvince=datas.startProvince;
			var endProvince=datas.endProvince;		
			var startCity=datas.startCity;
			var endCity=datas.endCity;
			var startArea=datas.startArea;
			var endArea=datas.endArea;
			//获取目的地城市	
		  var code=getcode(endProvince);
		   getcity_huo(code,startCity);
				var orderClass=datas.orderClass;
			    if(orderClass==0){orderClass="单次急发货源"}
				if(orderClass==1){orderClass="长期稳定货源"}
				var goodsName=datas.goodsName;
				var goodsNum=datas.goodsNum;
				var goodsWeight=datas.goodsWeight;
				var goodsVolume=datas.goodsVolume;
				var useTime=datas.useTime;
				var browseNumber=datas.browseNumber;
					if(!browseNumber){browseNumber=0}
				var startProvinceCityArea=datas.startProvinceCityArea
				var endProvinceCityArea=datas.endProvinceCityArea
			    if(startProvinceCityArea&&startProvinceCityArea.length>15){startProvinceCityArea=startProvinceCityArea.substring(0,15)+".."}
				if(endProvinceCityArea&&endProvinceCityArea.length>15){endProvinceCityArea=endProvinceCityArea.substring(0,15)+".."}
				var shipperName=datas.shipperName;
				var consignorPhone=datas.consignorPhone;
				var companyName=datas.companyName;
				console.log(companyName);
				if(!companyName){companyName="货主档案"}
				var consignor=datas.consignor;
				var consignorPhone=datas.consignorPhone;
				var consignee=datas.consignee;
				var consigneePhone=datas.consigneePhone;
				
				var isEnable=datas.isEnable;
		   
		   if(isEnable>=0&&isEnable<=3){
		   	$('.xy_zuan:eq(0)').css("display","inline")
		   	}
		   if(isEnable>=4&&isEnable<=10){
		   	$('.xy_zuan:eq(0)').css("display","inline")
		   	$('.xy_zuan:eq(1)').css("display","inline")
		   	}
		   if(isEnable>=11&&isEnable<=40){
		   	$('.xy_zuan:eq(0)').css("display","inline")
		   	$('.xy_zuan:eq(1)').css("display","inline")
		   	$('.xy_zuan:eq(2)').css("display","inline")
		   	}
		   if(isEnable>=41&&isEnable<=90){
		    $('.xy_zuan:eq(0)').css("display","inline")
		   	$('.xy_zuan:eq(1)').css("display","inline")
		   	$('.xy_zuan:eq(2)').css("display","inline")
		   	$('.xy_zuan:eq(3)').css("display","inline")
		   	}
		   if(isEnable>=91&&isEnable<=150){
		   	$('.xy_zuan').css("display","inline")
		   	}
		   
		   
		   if(isEnable>=151&&isEnable<=250){
		   	$('.xy_guan:eq(0)').css("display","inline")
		   	}
		   if(isEnable>=251&&isEnable<=500){
		   	$('.xy_guan:eq(0)').css("display","inline")
		   	$('.xy_guan:eq(1)').css("display","inline")
		   	}
		   if(isEnable>=500&&isEnable<=1000){
		   	$('.xy_guan:eq(0)').css("display","inline")
		   	$('.xy_guan:eq(1)').css("display","inline")
		   	$('.xy_guan:eq(2)').css("display","inline")
		   	}
		   if(isEnable>=1001&&isEnable<=2000){
		    $('.xy_guan:eq(0)').css("display","inline")
		   	$('.xy_guan:eq(1)').css("display","inline")
		   	$('.xy_guan:eq(2)').css("display","inline")
		   	$('.xy_guan:eq(3)').css("display","inline")
		   	}
		   if(isEnable>=2001){
		   	$('.xy_guan').css("display","inline")
		   	}
				
				
				var qq=datas.qq;
				if(!qq){$('#qq').css("display","none");}
				var createTime=datas.createTime.substring(0,19);
				var consignorAddress=datas.consignorAddress;
				if(consignorAddress){consignorAddress=consignorAddress.substring(0,10)}
				 if(datas.shipperDesc==null)
				{var shipperDesc="暂未填写简介信息！"}
				else{var shipperDesc=datas.shipperDesc.substring(0,400);}
		         var  url="/huoyuan/2018/0508/2.html?id="+id+"&shipperId="+shipperId;
		   var isVip=datas.isVip;
		   var authStatus=datas.authStatus;
		   if(!isVip){console.log("is not Vip");
		   $('#right_xinyong').css("display","none")}
		   if(authStatus!="AF0010403"){console.log("is not shiming");
		   $('#right_shiming').css("display","none")}
		    if(authStatus!="AF0010403"&&(!isVip||isVip==0)){
            	$('.arc_right07').html("<br/>暂无认证信息")}
                $("#nr081").html(startProvinceCityArea+"	&rarr;"+endProvinceCityArea);
                $("#nr082").html(startProvinceCityArea+"	&rarr;"+endProvinceCityArea);
                $("#nr083").html(goodsName);
                $("#nr084").html(goodsNum+"件");
                if(!goodsNum){$("#nr084").html("");}
                $("#nr085").html(goodsWeight+"公斤");
                $("#nr086").html(goodsVolume+"立方米");
                $("#nr087").html(orderClass);
                $("#nr088").html(startProvinceCityArea);
                $("#nr089").html(endProvinceCityArea);
                $("#nr0810").html(consignor);
                $("#nr0811").html(consignorPhone);
                $("#nr0812").html(createTime);
                $("#nr0813").html(companyName);
                $("#nr0814").html("4.7");
                $("#nr0815").html("4.8");
                $("#nr0816").html("4.9");
                $("#nr0817").html(consignor);
                $("#nr0818").html(consignorPhone);
                $("#nr0819").attr("href","http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes");   
                $("#nr0820").html(consignorAddress);
                $("#nr0821").html(shipperDesc);
                $("#nr0899").html(browseNumber);
                
                $("#nr_a41").attr("href",url);
                
                
            $('#arc_nav_a1').html(startCity+"到"+endCity+"货源信息")
            $('#arc_nav_a2').html(startCity+startArea+"到"+endCity+endArea+"货源信息")
            $('#arc_nav_a1').attr("href",'/plus/list.php?tid=2'+'&startp='+startProvince+'&startc='+startCity+'&endp='+endProvince+'&endc='+endCity)
            $('#arc_nav_a2').attr("href",'/plus/list.php?tid=2'+'&startp='+startProvince+'&startc='+startCity+'&starta='+startArea+'&endp='+endProvince+'&endc='+endCity+'&enda='+endArea)
				process03(startCity,endCity); 
							
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
process01();
//货源信息详情页 E


//货源其他求货信息S
function process02(current){
var totalPage=8;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/order/fclOrder/v1/getOtherInfoList",
		dataType: "json",
		async:false,
		data:JSON.stringify(
			{
			currentPage:current,
			pageSize:5,
			vo:{ 
            "id": aid,
            "shipperId":shipperId,
          	"queryType":"2"	
			}			//JSON.stringify({})
		}		
		),	
		success:function(res){
			$("#arc_nr2 .arc_list_item").not(":eq(0)").remove();
			if(res.data){
		  totalPage=res.data.totalPage;
		  console.log(totalPage);
		 }
             
			if(!res.data||!res.data.totalCount){ 
				console.log("内容为空")
				$(".box").css("display","none")
				$("#arc_nr2").html("<div class='arc_none'>暂无其他求车信息</div>");}
			var datas = res.data.list;	
			
			for(var i=0;i<datas.length;i++){	
	            var id=datas[i].id;
				var shipperId=datas[i].shipperId;
				var startProvinceCityArea=datas[i].startProvinceCityArea;
				if(startProvinceCityArea){startProvinceCityArea=startProvinceCityArea.substring(0,10)}
				var endProvinceCityArea=datas[i].endProvinceCityArea;
				if(endProvinceCityArea){endProvinceCityArea=endProvinceCityArea.substring(0,10)}
				var goodsName=datas[i].goodsName;
				var goodsNum=datas[i].goodsNum;
				var goodsWeight=datas[i].goodsWeight;
				var goodsVolume=datas[i].goodsVolume;
				var createTime=datas[i].createTime.substring(0,16);
		        var  url="/huoyuan/2018/0508/2.html?id="+id+"&shipperId="+shipperId;
		        $("#nr091").html(startProvinceCityArea+"	&rarr;"+endProvinceCityArea);
		        if(!startProvinceCityArea||!endProvinceCityArea){$("#nr091").html("")}
		        $("#nr092").html(goodsName);
		        $("#nr093").html(goodsNum);
		        $("#nr094").html(goodsWeight);
		        $("#nr095").html(goodsVolume);
		        $("#nr096").html(createTime);
                $("#nr097").attr("href",url);
                $("#nr090").attr("href",url);
                 var s1='<div class="arc_list_item">';
				 var s2=$("#arc_nr2 .arc_list_item").html();
				 var s3='</div>';
				 $("#arc_nr2").append(s1+s2+s3);
				
			
				
				 
			}	
			
		},error:function(err){

			console.log(err.responseText);
		

		}
		})
		console.log("最终总页数："+totalPage)
	return totalPage;
	}
process02();
//货源其他求货信息  E

//路线其他求货信息S
function process03(startCity,endCity){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/order/fclOrder/v1/getOtherOrderList",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:7,
			vo:{ 
		    "shipperId":shipperId,
            "queryType": "2",
           "startAddress": startCity,
           "endAddress": endCity
}			//JSON.stringify({})
		}		
		),	
		success:function(res){

			if(res.data){
			var datas = res.data.list;	

			for(var i=0;i<datas.length;i++){	
	            var id=datas.id;
				var shipperId=datas[i].shipperId;
				var startAddress=datas[i].startAddress.substring(3,9);
				var endAddress=datas[i].endAddress.substring(3,9);
				var wlName=datas[i].wlName;
				var account=datas[i].account;
				var goodsName=datas[i].goodsName;
				var goodsNum=datas[i].goodsNum;
				if(!goodsNum){goodsNum=0}
				var goodsWeight=datas[i].goodsWeight;
				var goodsVolume=datas[i].goodsVolume;
				var companyId = datas[i].companyId
				var createTime=datas[i].createTime.substring(0,19);
		        var  url="/huoyuan/2018/0508/2.html?id="+aid+"&shipperId="+shipperId;
		        $("#nr0911").html(startAddress);
		        $("#nr0912").html(endAddress);
		        $("#nr0913").html(wlName);
		        $("#nr0913").attr("href","/member/"+companyId+"");
		        $("#nr0914").html(goodsName);
		        $("#nr0915").html(goodsWeight+"吨");
		        $("#nr0916").html(goodsVolume+"立方米");
		        $("#nr0917").html(goodsNum+"件");
		        if(!goodsNum){ $("#nr0917").html("");}
                $("#nr0918").attr("href",url);
                $("#nr0910").attr("href",url);
			     var s1='<div class="tj_list">';
				 var s2=$(".tj_list").html();
				 var s3='</div>';
				 $("#js011").append(s1+s2+s3);	
				 
			}	
			}
			console.log("长度"+$('.tj_list').length);
					if($('.tj_list').length>=10){
				$('.arc_bottom_more').css("display","block");
				$('#arc_bottom_more').attr("href","/plus/list.php?tid=2&start="+startCity+"&end="+endCity)
				}
				if($('.tj_list').length==1||!res.data){
				$('.arc_bottom').css("display","none");
				}
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
//process03();
//路线其他求货信息  E
