function getCookie(cookieName){
	    var cookieValue="";
		if (document.cookie && document.cookie != '') { 
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) { 
				 var cookie = cookies[i];
				 if (cookie.substring(0, cookieName.length + 2).trim() == cookieName.trim() + "=") {
					   cookieValue = cookie.substring(cookieName.length + 2, cookie.length); 
					   break;
				 }
			 }
		} 
		return cookieValue;
	}





//零担下单 S
    $("#order_01").click(
    	function(){
     
     var start=$("#zhidaFrom").val();
     var end=$("#zhidaTo").val();
		 var startjw=$("#zhidaFrom").attr("thepos");
		 var startpcd = $("#zhidaFrom").attr("thepcd");
		 var startstreet = $("#zhidaFrom").attr("thestreet");
		 var endpcd = $("#zhidaTo").attr("thepcd");
		 var endstreet = $("#zhidaTo").attr("thestreet");

		 var startp =$("#zhidaFrom").attr('theprovince')
		 var startc =$("#zhidaFrom").attr('thecity')
		 var starta =$("#zhidaFrom").attr('thearea')

		 var endp = $("#zhidaTo").attr('theprovince')
		 var endc = $("#zhidaTo").attr('thecity')
		 var enda = $("#zhidaTo").attr('thearea')

 
    if(startjw){
     var startj=startjw.split(",",2)[0];
     var startw=startjw.split(",",2)[1];
    }
    if(!startjw){
     var startj="";
     var startw="";
    }
     
   
     var endjw=$("#zhidaTo").attr("thepos");
     if(endjw){
     var endj=endjw.split(",",2)[0];
     var endw=endjw.split(",",2)[1];
     }
     if(!endjw){
     var endj="";
     var endw="";
     }
     if(!startpcd){startpcd=""}
     if(!endpcd){endpcd=""}
     if(!startstreet){startstreet=""}
     if(!endstreet){endstreet=""}
     if(!startp){startp=""}
     if(!startc){startc=""}
     if(!starta){starta=""}
     if(!endp){endp=""}
     if(!endc){endc=""}
     if(!enda){enda=""}
   
     
     s1='/plus/list.php?tid=77&start='+startpcd+'&end='+endpcd + '&startstreet='+startstreet + '&endstreet='+endstreet;
     s2='&startj='+startj+'&startw='+startw+'&endj='+endj+'&endw='+endw + '&startp=' + startp + '&startc=' + startc + '&starta=' + starta + '&endp=' + endp + '&endc=' + endc + '&enda=' + enda;
console.log(s1+s2);
window.open(s1+s2);
//+
         

    })
//零担下单 E
//运单查询 S
 $('.ydh').click(function(){
 $("#yd_nr").val("1809260061")
 })

 $("#yd_nr").keyup(
    	function(){
    	if( $("#yd_nr").val())	{
    		console.log("nr");
    	$("#yd_cx").css("background-color","#eb434d");
    	$("#yd_cx").css("color","#f9f9f9");
    	
    	

    	
    	
    	
    	
    	}
    	if( !$("#yd_nr").val())	{
    		console.log("nr");
    	$("#yd_cx").css("background-color","#fff");
    	$("#yd_cx").css("color","#f66618");
    	
    	}
    		
    	})
 
 
     	$('#yd_cx').click(function () {
console.log($("#yd_nr").val());
var num=$("#yd_nr").val();
if(num){
window.open('/ydcx&num='+num)
}
if(!num){alert("请先输入运单号查询！")}


})
 
 
//运单查询 E


//车源搜索 S
    $("#search_cheyuan").click(
    	function(){
     var start=$("#carLineFrom").val();
     var end=$("#carLineTo").val();
     
     //alert(start);
     window.location='/cheyuan?start='+start+'&end='+end;
         

    })
//车源搜索 E

//货源搜索 S
    $("#search_huoyuan").click(
    	function(){
     var start=$("#HuoyuanFrom").val();
     var end=$("#HuoyuanTo").val();
     
     //alert(start);
     window.location='/huoyuan?start='+start+'&end='+end;
         

    })
//货源搜索 E

//专线搜索 S
    $("#search_wlLine").click(
    	function(){
     var start=$("#wlLineFrom").val();
     var end=$("#wlLineTo").val();
     
     //alert(start);
     window.location='/zhuanxian/list?start='+start+'&end='+end;
         

    })
//专线搜索 E




//门户物流专线 S
function process1(vo1){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcTransportRange/v1/gatewayHomePageList",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:8,
			vo:vo1			//JSON.stringify({})
		}		
		),	
		success:function(res){
			//alert("success");
			 $("#js001 li").not(":eq(0)").remove();
			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){
				var plength=datas[i].rangePrices.length;
				//alert(plength);
				for(var j=0;j<plength;j++){
					var ptype=datas[i].rangePrices[j].type;				
					if (ptype==0){	
					var qhjg=datas[i].rangePrices[j].discountPrice;					
					}
					if (ptype==1){
						var zhjg=datas[i].rangePrices[j].discountPrice;					
					}				
				}	
				var id=datas[i].id;
				var publishId=datas[i].publishId;
				var account=datas[i].account;
				var startLocation = datas[i].startLocation.substring(3,10);
				var endLocation = datas[i].endLocation.substring(3,10);
				var publishName = datas[i].publishName;
				var transportAging = datas[i].transportAging;
				var transportAgingUnit = datas[i].transportAgingUnit.replace("多","");
				var url="/zhuanxian/detail?id="+id+"&publishId="+publishId;
		        $("#nr_a01").attr("href",url);
		        $("#nr_a02").attr("href",url);
		        $("#nr_a03").attr("href",url);
		        $("#nr_a04").attr("href",url);
		        $("#nr_a05").attr("href",url);
		        $("#nr001").html(startLocation+'&nbsp;&rarr;&nbsp;'+endLocation);
		        $("#nr002").html(zhjg);
		        $("#nr003").html(qhjg);
				$("#nr004").html(transportAging+transportAgingUnit);
				$("#nr005").attr("href","/member/index.php?uid="+account);
				$("#nr006").html(publishName);
				 var s1='<li>';
				 var s2=$("#js001 li").html();	
				 var s3='</li>'
				 $("#js001").append(s1+s2+s3);			 
			}
				
		},error:function(err){
			alert("error");
			console.log(err.responseText);
		}
		})
	}
process1({});
//门户物流专线 E

//门户车源信息 S
function process2(vo2){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcCarInfo/v1/getPortalHomePageList",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:8,
			vo:vo2			//JSON.stringify({})
		}		
		),	
		success:function(res){
			//alert("success");
			 $("#js003 li").not(":eq(0)").remove();
			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){
				var id=datas[i].id;	
				var driverId=datas[i].driverId;
				var strartAddress = datas[i].strartAddress.substring(3,10);
				var endAddress = datas[i].endAddress.substring(3,10);
				var carNum=datas[i].carNum;
				var carNum=carNum.substring(0,2)+"***"+carNum.substring(6,10);
				var carTypeName = datas[i].carTypeName;
				var carLength = datas[i].carLength;
				var carLoad = datas[i].carLoad;
				var expectPrice = datas[i].expectPrice;
		        var arcurl="/cyxx/2018/0508/5.html?id="+id+"&driverId="+driverId;
		        $("#nr_a11").attr("href",arcurl);
		        $("#nr_a12").attr("href",arcurl);
		        $("#nr_a13").attr("href",arcurl);
		        $("#nr_a14").attr("href",arcurl);
		        $("#nr_a15").attr("href",arcurl);
		        $("#nr_a16").attr("href",arcurl);
		        $("#nr_a17").attr("href",arcurl);
		        $("#nr021").html(strartAddress+'&nbsp;&rarr;&nbsp;'+endAddress);
		        $("#nr022").html(carNum);
		        $("#nr023").html(carTypeName);
				$("#nr024").html(carLength);
				$("#nr025").html(carLoad);
				$("#nr026").html(expectPrice);
				 var s1='<li>';
				 var s2=$("#js003 li").html();
				 var s3='</li>'
				 $("#js003").append(s1+s2+s3);	
				 
			}
				
		},error:function(err){
			//alert("error");
			console.log(err.responseText);
		}
		})
	}
process2({});
//门户车源信息 E

//门户货源信息 S
function process3(vo3){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/order/fclOrder/v1/getPortalHomePageList",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:8,
			vo:vo3			//JSON.stringify({})
		}		
		),	
		success:function(res){
			//alert("success");
			$("#js004 li").not(":eq(0)").remove();
			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){
				var id=datas[i].id;	
				var shipperId=datas[i].shipperId;
				var startProvinceCityArea=datas[i].startProvinceCityArea;
				if(startProvinceCityArea){
					startProvinceCityArea=datas[i].startProvinceCityArea.substring(3,10);}
				var endProvinceCityArea=datas[i].endProvinceCityArea;
				if(endProvinceCityArea){endProvinceCityArea=datas[i].endProvinceCityArea.substring(3,10);}	
				var orderTypeName=datas[i].orderTypeName;
				var goodsName=datas[i].goodsName.split(",")[0];
				var goodsWeight = datas[i].goodsWeight;
				var goodsVolume = datas[i].goodsVolume;
				var shipperName = datas[i].shipperName;
				var account=datas[i].account;
				var createTime = datas[i].createTime.substring(5,10);	    
		        var  url="/huoyuan/2018/0508/2.html?id="+id+"&shipperId="+shipperId;
                $("#nr_a31").attr("href",url);
                $("#nr_a32").attr("href","/member/index.php?uid="+account+"&shipperId="+shipperId);
                $("#nr_a33").attr("href",url);
                $("#nr_a34").attr("href",url);
                $("#nr_a35").attr("href",url);
                $("#nr_a36").attr("href",url);
                $("#nr_a37").attr("href",url);
                $("#nr_a38").attr("href",url);
		        $("#nr031").html(startProvinceCityArea+'&nbsp;&rarr;&nbsp;'+endProvinceCityArea);
		        $("#nr032").html(shipperName);
		        $("#nr033").html(goodsName);
				$("#nr034").html(goodsWeight+"公斤");
				$("#nr035").html(goodsVolume+"方");
				$("#nr036").html(orderTypeName);
				$("#nr037").html(createTime);
				 var s1='<li>';
				 var s2=$("#js004 li").html();
				 var s3='</li>'
				 $("#js004").append(s1+s2+s3);	
				 
			}
				
		},error:function(err){
			//alert("error");
			console.log(err.responseText);
		}
		})
	}
process3({"queryType":"2"});
//门户货源信息 E