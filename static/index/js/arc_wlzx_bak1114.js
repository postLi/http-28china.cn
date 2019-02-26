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
function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
//找专线/货源/车源 S
$('.arc_input3').click(function(){
var search_type=$('#search_type option:selected').attr("name");
var start=$('.arc_input1').val();
var end=$('.arc_input2').val();
console.log("搜索类型："+search_type+"出发地："+start+"到达地："+end);	
if(search_type=='zx'){
	window.open('/zhuanxian/list?start='+start+'&end='+end);
}
if(search_type=='huo'){
	window.open('/huoyuan?start='+start+'&end='+end);
}
if(search_type=='che'){
	window.open('/cheyuan?start='+start+'&end='+end);
}
	
})


//找专线/货源/车源 E



//客户评价效果处理 S
var src1="/templets/default/images/article_wlzx/stars01.png";
var src2="/templets/default/images/article_wlzx/stars02.png";
var fen1="1分&nbsp非常不满意";
var fen2="2分&nbsp不满意";
var fen3="3分&nbsp一般";
var fen4="4分&nbsp满意";
var fen5="5分&nbsp非常满意";
var defen="";
var defen1="差评";
var defen2="中评";
var defen3="好评";

//第一行
$('#pjxx1_1').click(function () {

	$('#pj_f1').html(fen1);
	$('#pj_f1').css("display","block");
	$('#pjxx1_1').attr("src",src2);
	$('#pjxx1_2').attr("src",src1);
	$('#pjxx1_3').attr("src",src1);
	$('#pjxx1_4').attr("src",src1);
	$('#pjxx1_5').attr("src",src1);
	
})
$('#pjxx1_2').click(function () {

	$('#pj_f1').html(fen2);
	$('#pj_f1').css("display","block");
	$('#pjxx1_1').attr("src",src2);
	$('#pjxx1_2').attr("src",src2);
	$('#pjxx1_3').attr("src",src1);
	$('#pjxx1_4').attr("src",src1);
	$('#pjxx1_5').attr("src",src1);	
})
$('#pjxx1_3').click(function () {

	$('#pj_f1').html(fen3);
	$('#pj_f1').css("display","block");
	$('#pjxx1_1').attr("src",src2);
	$('#pjxx1_2').attr("src",src2);
	$('#pjxx1_3').attr("src",src2);
	$('#pjxx1_4').attr("src",src1);
	$('#pjxx1_5').attr("src",src1);	
})
$('#pjxx1_4').click(function () {

	$('#pj_f1').html(fen4);
	$('#pj_f1').css("display","block");
	$('#pjxx1_1').attr("src",src2);
	$('#pjxx1_2').attr("src",src2);
	$('#pjxx1_3').attr("src",src2);
	$('#pjxx1_4').attr("src",src2);
	$('#pjxx1_5').attr("src",src1);	
})
$('#pjxx1_5').click(function () {

	$('#pj_f1').html(fen5);
	$('#pj_f1').css("display","block");
	$('#pjxx1_1').attr("src",src2);
	$('#pjxx1_2').attr("src",src2);
	$('#pjxx1_3').attr("src",src2);
	$('#pjxx1_4').attr("src",src2);
	$('#pjxx1_5').attr("src",src2);	
})
//第二行
$('#pjxx2_1').click(function () {

	$('#pj_f2').html(fen1);
	$('#pj_f2').css("display","block");
	$('#pjxx2_1').attr("src",src2);
	$('#pjxx2_2').attr("src",src1);
	$('#pjxx2_3').attr("src",src1);
	$('#pjxx2_4').attr("src",src1);
	$('#pjxx2_5').attr("src",src1);
	
})
$('#pjxx2_2').click(function () {

	$('#pj_f2').html(fen2);
	$('#pj_f2').css("display","block");
	$('#pjxx2_1').attr("src",src2);
	$('#pjxx2_2').attr("src",src2);
	$('#pjxx2_3').attr("src",src1);
	$('#pjxx2_4').attr("src",src1);
	$('#pjxx2_5').attr("src",src1);	
})
$('#pjxx2_3').click(function () {

	$('#pj_f2').html(fen3);
	$('#pj_f2').css("display","block");
	$('#pjxx2_1').attr("src",src2);
	$('#pjxx2_2').attr("src",src2);
	$('#pjxx2_3').attr("src",src2);
	$('#pjxx2_4').attr("src",src1);
	$('#pjxx2_5').attr("src",src1);	
})
$('#pjxx2_4').click(function () {

	$('#pj_f2').html(fen4);
	$('#pj_f2').css("display","block");
	$('#pjxx2_1').attr("src",src2);
	$('#pjxx2_2').attr("src",src2);
	$('#pjxx2_3').attr("src",src2);
	$('#pjxx2_4').attr("src",src2);
	$('#pjxx2_5').attr("src",src1);	
})
$('#pjxx2_5').click(function () {

	$('#pj_f2').html(fen5);
	$('#pj_f2').css("display","block");
	$('#pjxx2_1').attr("src",src2);
	$('#pjxx2_2').attr("src",src2);
	$('#pjxx2_3').attr("src",src2);
	$('#pjxx2_4').attr("src",src2);
	$('#pjxx2_5').attr("src",src2);	
})
//第三行
$('#pjxx3_1').click(function () {

	$('#pj_f3').html(fen1);
	$('#pj_f3').css("display","block");
	$('#pjxx3_1').attr("src",src2);
	$('#pjxx3_2').attr("src",src1);
	$('#pjxx3_3').attr("src",src1);
	$('#pjxx3_4').attr("src",src1);
	$('#pjxx3_5').attr("src",src1);
	
})
$('#pjxx3_2').click(function () {

	$('#pj_f3').html(fen2);
	$('#pj_f3').css("display","block");
	$('#pjxx3_1').attr("src",src2);
	$('#pjxx3_2').attr("src",src2);
	$('#pjxx3_3').attr("src",src1);
	$('#pjxx3_4').attr("src",src1);
	$('#pjxx3_5').attr("src",src1);	
})
$('#pjxx3_3').click(function () {

	$('#pj_f3').html(fen3);
	$('#pj_f3').css("display","block");
	$('#pjxx3_1').attr("src",src2);
	$('#pjxx3_2').attr("src",src2);
	$('#pjxx3_3').attr("src",src2);
	$('#pjxx3_4').attr("src",src1);
	$('#pjxx3_5').attr("src",src1);	
})
$('#pjxx3_4').click(function () {

	$('#pj_f3').html(fen4);
	$('#pj_f3').css("display","block");
	$('#pjxx3_1').attr("src",src2);
	$('#pjxx3_2').attr("src",src2);
	$('#pjxx3_3').attr("src",src2);
	$('#pjxx3_4').attr("src",src2);
	$('#pjxx3_5').attr("src",src1);	
})
$('#pjxx3_5').click(function () {

	$('#pj_f3').html(fen5);
	$('#pj_f3').css("display","block");
	$('#pjxx3_1').attr("src",src2);
	$('#pjxx3_2').attr("src",src2);
	$('#pjxx3_3').attr("src",src2);
	$('#pjxx3_4').attr("src",src2);
	$('#pjxx3_5').attr("src",src2);	
})
//评价积分处理
$('.pj_box3 img').click(function(){
if($('#pj_f1').html()!=""&&$('#pj_f2').html()!=""&&$('#pj_f3').html()!=""){
	var pj_f1= parseInt($('#pj_f1').html().substring(0,1));
	var pj_f2= parseInt($('#pj_f2').html().substring(0,1));
	var pj_f3= parseInt($('#pj_f3').html().substring(0,1));
	var pj_fen=pj_f1+pj_f2+pj_f3;
	if(pj_fen>=3&&pj_fen<=6){$('#pj_box_zh').css("display","block");
$('#pj_box_zh').html(defen1);}
	if(pj_fen>=7&&pj_fen<=9){$('#pj_box_zh').css("display","block");
$('#pj_box_zh').html(defen2);}
    if(pj_fen>=10&&pj_fen<=15){$('#pj_box_zh').css("display","block");
$('#pj_box_zh').html(defen3);}

}
}
)

 $('#pj_nr').keyup(function() {

        var len=this.value.length
                    
                    var limit=400-len;
               $('#pj_limit').html(limit); 
           

        })
 


//客户评价效果处理 E




//获取参数的值
function GetQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(t);return null!=s?unescape(s[2]):null}
var aid=GetQueryString("id");
var publishId=GetQueryString("publishId");


vo = new Object();
var assessLevel=""
vo.assessLevel=assessLevel;
vo.transportRangeId=aid;
 if (!assessLevel || assessLevel== "null") {delete vo.assessLevel;}
 $(".arc_pjbt_item input").click(function() {
 var val = $("[name=radio]:checked").attr("value");
 console.log(val);
 vo.assessLevel=val;
 process04();
 })
 


//物流专线详情页 S
function process1(){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcTransportRange/v1/"+aid,
		
		success:function(res){
		   
		   var datas = res.data;	
		   var companyId = datas.companyId;
		   var orderNumber= datas.orderNumber;
		   var startLocation=datas.startLocation.substring(0,15);
		   var endLocation=datas.endLocation.substring(0,15);
		   var endProvince=datas.endProvince;
		   var endCity=datas.endCity;
		   var startCity=datas.startCity;
		   var startProvince=datas.startProvince;
		   var start=startProvince+startCity;
		   var end=endProvince+endCity;
		   process08(startCity,endCity);
		   process3(startCity,endCity);
		   console.log(startCity+":"+endCity);
		   
		   //获取目的地城市
		   var code=getcode(endProvince);
		   getcity_zx(code,startCity);
		   
		   var departureHzData=datas.departureHzData;
		   var departureHzTime=datas.departureHzTime;
		   if(!departureHzData){ var departureHzData=""}
		   if(!departureHzTime){ var departureHzTime=""}
		   var transportAgingUnit=datas.transportAgingUnit;
		   var transportAging=datas.transportAging;
		   var lowerPrice=datas.lowerPrice;
		   if(!lowerPrice){lowerPrice=""}
		   var startLocationContacts=datas.startLocationContacts;
		   var endLocationContacts=datas.endLocationContacts;
		   var startLocationContactsMobile=datas.startLocationContactsMobile;
		   var endLocationContactsMobile=datas.endLocationContactsMobile;
		   var plength=datas.rangePrices.length;	
		   if(datas.rangeLogo){
		   var rangeLogo1=datas.rangeLogo.split(",")[0]; 
		   var rangeLogo2=datas.rangeLogo.split(",")[1];
		   var rangeLogo3=datas.rangeLogo.split(",")[2];
		   }
		   var num0=Math.random();
		   var num=Math.ceil(num0*30);
           console.log(num);
           var src1="/templets/default/images/pic/bg"+num+".png";
		   if(!rangeLogo1){ 
		   //$("#nr0714").css("display","none");
           //$("#nr0715").css("display","none");
           $("#nr0714").attr("src",src1);
           $("#nr0715").attr("src",src1);
           
		               }
		   if(!rangeLogo2){$("#nr0716").css("display","none");}
		   if(!rangeLogo3){$("#nr0717").css("display","none");}
		   
		   if(rangeLogo1){ 
		   $("#nr0714").attr("src",rangeLogo1);
           $("#nr0715").attr("src",rangeLogo1);
		               }
		   if(rangeLogo2){$("#nr0716").attr("src",rangeLogo2);}
		   if(rangeLogo3){$("#nr0717").attr("src",rangeLogo3);}
		   
		   	for(var j=0;j<plength;j++){
					var ptype=datas.rangePrices[j].type;
					if (ptype==0){	
						
					var qhjg0=datas.rangePrices[j].primeryPrice;
					var qhjg=datas.rangePrices[j].discountPrice;
					var endVolume1=datas.rangePrices[j].endVolume;
					var startVolume1=datas.rangePrices[j].startVolume;
					if(startVolume1==0){
					var qhjg0_1=datas.rangePrices[j].primeryPrice;
					var qhjg_1=datas.rangePrices[j].discountPrice;
					var endVolume1_1=datas.rangePrices[j].endVolume;
					var startVolume1_1=datas.rangePrices[j].startVolume;
					}
					if(!qhjg){qhjg=""}
					if(!qhjg0){qhjg0=""}
					if(!endVolume1&&endVolume1!=0){endVolume1=""}
					if(!startVolume1&&startVolume1!=0){startVolume1=""}
					
					if(!qhjg_1){qhjg_1=""}
					if(!qhjg0_1){qhjg0_1=""}
					if(!endVolume1_1&&endVolume1_1!=0){endVolume1_1=""}
					if(!startVolume1_1&&startVolume1_1!=0){startVolume1_1=""}
					
					
					if(qhjg){ 
						console.log("轻货价格："+qhjg)
				 $("#nr0730").html(qhjg+"元/立方");
			     $("#nr0731").html(qhjg0);
				$("#nr075").html("&yen;&nbsp;"+qhjg_1);
			    $("#nr076").html("&yen;&nbsp;"+qhjg0_1);
					}
					if(!qhjg){
						console.log("原轻货价格："+qhjg0)
			$("#nr075").html("&yen;&nbsp;"+qhjg0_1);
			$("#nr076").html("&nbsp;");
			$("#nr076").css("text-decoration","none");
			 $("#nr0730").html(qhjg0+"元/立方");
			 $("#nr0731").html("&nbsp;");
			 $("#nr0731").css("text-decoration","none");
			 $("#nr07310").html("&nbsp;");
			 
			 
			
			}
					if(qhjg_1){$("#nr075").html("&yen;&nbsp;"+qhjg_1);
					$("#nr076").html("&yen;&nbsp;"+qhjg0_1);
			$("#nr076").css("text-decoration","line-through");
				
					}
	                

			     $("#nr0742").html("0-"+endVolume1_1+"立方");
			     $("#nr0744").html(startVolume1+"-"+endVolume1+"立方(不包括)");
			     if(!endVolume1_1){$("#nr0742").html(startVolume1_1+"立方以上");
			     $("#nr0744").html(startVolume1+"立方以上"+"(不包括)"); }
				 var s1='<div class="price_box_item2">'
				 var s2=$(".price_box_item2").html();	
				 var s3='</div>'
				 $("#js019").append(s1+s2+s3);	     
					
					}
					if (ptype==1){
						
						var zhjg0=datas.rangePrices[j].primeryPrice;
						var zhjg=datas.rangePrices[j].discountPrice;
						var endVolume2=datas.rangePrices[j].endVolume;
					    var startVolume2=datas.rangePrices[j].startVolume;
					    if(startVolume2==0){
					    var zhjg0_1=datas.rangePrices[j].primeryPrice;
						var zhjg_1=datas.rangePrices[j].discountPrice;
						var endVolume2_1=datas.rangePrices[j].endVolume;
					    var startVolume2_1=datas.rangePrices[j].startVolume;
					    }
							if(!zhjg0){zhjg0=""}
					        if(!zhjg){zhjg=""}
					        if(!endVolume2&&endVolume2!=0){endVolume2=""}
					        if(!startVolume2&&startVolume2!=0){startVolume2=""}
					        
					        if(!zhjg0_1){zhjg0_1=""}
					        if(!zhjg_1){zhjg_1=""}
					        if(!endVolume2_1&&endVolume2_1!=0){endVolume2_1=""}
					        if(!startVolume2_1&&startVolume2_1!=0){startVolume2_1=""}
					        

				 $("#nr0741").html(0+"-"+endVolume2_1+"公斤");	
				 $("#nr0743").html(startVolume2+"-"+endVolume2+"公斤(不包括)"); 
				 if(!endVolume2_1){
				 	 $("#nr0741").html(startVolume2_1+"公斤以上");
				 	 $("#nr0743").html(startVolume2+"公斤以上"+"(不包括)"); 
				 }
	         if(zhjg){ $("#nr0720").html(zhjg+"元/公斤");
				 $("#nr0721").html(zhjg0);
				$("#nr074").html("&yen;&nbsp;"+zhjg0_1);
				$("#nr073").html("&yen;&nbsp;"+zhjg_1);
				 console.log("重货价格："+zhjg)}
			 if(!zhjg){	
			$("#nr073").html("&yen;&nbsp;"+zhjg0_1);
			$("#nr074").html("&nbsp;");
			$("#nr074").css("text-decoration","none");
			 $("#nr0720").html(zhjg0+"元/公斤");
			 $("#nr0721").html("&nbsp;");
			 $("#nr07210").html("&nbsp;");
			  $("#nr0721").css("text-decoration","none");
			 console.log("原重货价格"+$("#nr0720").html())
			
			 
			}

				
				 if(zhjg_1){
				 	$("#nr073").html("&yen;&nbsp;"+zhjg_1);
			$("#nr074").html("&yen;&nbsp;"+zhjg0_1);
			$("#nr074").css("text-decoration","line-through");	
				 }

			
			    
			     
			     
				 var s1='<div class="price_box_item1">'
				 var s2=$(".price_box_item1").html();	
				 var s3='</div>'
				 $("#js018").append(s1+s2+s3);	     
					        
					        
					}	
					else {
						var zhjg0="";
						var zhjg="";
						var qhjg0="";
						var qhjg="";
						var endVolume1="";
					    var startVolume1="";
						var endVolume2="";
					    var startVolume2="";
					}
					
					
					
					
				}
		  

		    $("#nr071_1").html(startLocation);
		    $("#nr071_2").html(endLocation);
			//$("#nr071").html( startLocation+"&nbsp;&rarr;&nbsp;"+endLocation);
			$("#nr072").html( startLocation+"&nbsp;&rarr;&nbsp;"+endLocation);
			
			
			
			
		
			
			$("#nr077").html(transportAging+transportAgingUnit);
			$("#nr078").html(departureHzData+"天"+departureHzTime+"次");
			if(!departureHzData||!departureHzTime){$("#nr078").html("")}
			$("#nr079").html("&yen;&nbsp;"+lowerPrice+"元");
			if(!lowerPrice){$("#nr079").html("面议");}
			$("#nr0710").html(startLocationContacts);
			$("#nr0711").html(startLocationContactsMobile);
			$("#nr0712").html(endLocationContacts);
			$("#nr0713").html(endLocationContactsMobile);
            $("#nr0746").html(orderNumber);
            
    var aaa=$(".price_box_item1").length;
	var bbb=$('.price_box_item2').length;
	
	console.log("重货"+aaa+":轻货"+bbb);
	if(aaa<3){
		$("#zh_price").css("display","none");}
	if(bbb<3){$("#qh_price").css("display","none");}
				 
							
	},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
process1();
//物流专线详情页 E


//物流专线 网点列表S
function process02(){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcPointNetwork/v1/listDetailPointNetwork",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:6,
			vo:{
	 
				"companyId":publishId
			}			//JSON.stringify({})
		}		
		),	
		success:function(res){
			var datas = res.data.list;	
			if(datas==""){$(".tjwd_list").css("display","block");$(".tjwd_list").html("<br/>&nbsp;&nbsp;&nbsp;暂无网点内容！");}
			for(var i=0;i<datas.length;i++){
	            var pointName=datas[i].pointName;
	            if(pointName.length>12){pointName=pointName.substring(0,12)+".."}
				var companyName=datas[i].companyName;
				var name=datas[i].name;
				var mobile=datas[i].mobile;
				var belongCityName=datas[i].belongCityName;
				var address=datas[i].address.substring(0,17);
				var creater=datas[i].creater;
				$("#nr1011").html(pointName);
				$("#nr1012").html(companyName);
				$("#nr1013").html(name);
				$("#nr1014").html(mobile);
				$("#nr1015").html(belongCityName);
			   if(address.indexOf(belongCityName!=-1)){address=address.replace(belongCityName,'')}
				$("#nr1016").html(address);
		        $("#nr1012").attr("href","/member/"+creater+".html");
		
				 var s1='<div class="tjwd_list">'
				 var s2=$(".tjwd_list").html();	
				 var s3='</div>'
				 $("#js013").append(s1+s2+s3);		 
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
process02();
//物流专线网点列表 E


//物流专线公司  S
function process3(startCity,endCity){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcLogisticsCompany/v1/"+publishId,
		
		success:function(res){
		   
		   var datas = res.data;	
		  
		   var account = datas.account;
		   var qq=datas.qq;
		   if(!qq){$('#qq').css("display","none");}
		   var companyName=datas.companyName;
		   var contactsName=datas.contactsName;
		   var mobile=datas.mobile;
		   var companyDes=datas.companyDes;
		   var credit=datas.credit;
		   
		   if(credit>=0&&credit<=3){
		   	$('.xy_zuan:eq(0)').css("display","inline")
		   	}
		   if(credit>=4&&credit<=10){
		   	$('.xy_zuan:eq(0)').css("display","inline")
		   	$('.xy_zuan:eq(1)').css("display","inline")
		   	}
		   if(credit>=11&&credit<=40){
		   	$('.xy_zuan:eq(0)').css("display","inline")
		   	$('.xy_zuan:eq(1)').css("display","inline")
		   	$('.xy_zuan:eq(2)').css("display","inline")
		   	}
		   if(credit>=41&&credit<=90){
		    $('.xy_zuan:eq(0)').css("display","inline")
		   	$('.xy_zuan:eq(1)').css("display","inline")
		   	$('.xy_zuan:eq(2)').css("display","inline")
		   	$('.xy_zuan:eq(3)').css("display","inline")
		   	}
		   if(credit>=91&&credit<=150){
		   	$('.xy_zuan').css("display","inline")
		   	}
		   
		   
		   if(credit>=151&&credit<=250){
		   	$('.xy_guan:eq(0)').css("display","inline")
		   	}
		   if(credit>=251&&credit<=500){
		   	$('.xy_guan:eq(0)').css("display","inline")
		   	$('.xy_guan:eq(1)').css("display","inline")
		   	}
		   if(credit>=500&&credit<=1000){
		   	$('.xy_guan:eq(0)').css("display","inline")
		   	$('.xy_guan:eq(1)').css("display","inline")
		   	$('.xy_guan:eq(2)').css("display","inline")
		   	}
		   if(credit>=1001&&credit<=2000){
		    $('.xy_guan:eq(0)').css("display","inline")
		   	$('.xy_guan:eq(1)').css("display","inline")
		   	$('.xy_guan:eq(2)').css("display","inline")
		   	$('.xy_guan:eq(3)').css("display","inline")
		   	}
		   if(credit>=2001){
		   	$('.xy_guan').css("display","inline")
		   	}

		   
		   
		   
		   var isVip=datas.isVip;
		   var authStatus=datas.authStatus;  
		   if(!isVip||isVip==0){console.log("is not Vip");
		   	$('#right_xinyong').css("display","none")}
		    if(authStatus!="AF0010403"){console.log("is not shiming");
		   	$('#right_shiming').css("display","none")}
		   if(companyDes){companyDes=companyDes.substring(0,500)}
		   if(!companyDes){companyDes='暂无专线说明。点击为您推荐<a target="_blank" href="/zhuanxian/list?start='+startCity+'&end='+endCity+'">更多专线</a>'}
		   var collateral=datas.collateral;
		   $("#nr1037").html(collateral+"元");
		   if(!collateral || collateral==0){
		        
		   	$("#block_bzj").css("display","none");
		   	$("#none_bzj").css("display","block");
		   	$("#right_baozhengjin").css("display","none");
		   	$("#nr1037").html("");
		   }
            if(authStatus!="AF0010403"&&(!isVip||isVip==0)&&(!collateral|| collateral==0)){
            	$('.arc_right07').html("<br/>暂无认证信息")}
		   var otherServiceCode=datas.otherServiceCode;
		  for(var i=1;i<9;i++){
		  	if(otherServiceCode){
		   if(otherServiceCode.indexOf("AF0250"+i)!=-1){
		   	console.log("AF0250"+i);
		   	$('.item_zzfw'+i).css("display","block");
		   	$('.item_fw'+i).css("display","block");	
		   }
		   }
		   }
            var orderurl="/create/order?&uid="+account+"&id="+aid+"&publishId="+publishId;
            $("#order_arc").click(function(){
            	window.open(orderurl);
            })
            $("#nr1020").html(companyName);
			$("#nr1021").html(contactsName);
			$("#nr1022").html(mobile);
			$("#nr1023").attr("href","http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes");
            $("#nr1024").attr("href","/member/"+account+".html");	
            $("#wd_more").attr("href","/member/"+account+"-wangdian.html");	
            $("#nr1035").html(companyDes);
            $("#nr1036").html(collateral);
           
           
            
		
							
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}

//物流专线公司 E

//专线评价列表列表S
function process04(currentPage){
var totalPage=8;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portal/aflcTransportEvaluation/v1/rangeEvaluationlist",
		dataType: "json",
		async:false,
		data:JSON.stringify(
			{
			currentPage:currentPage,
			pageSize:10,
			vo:vo			//JSON.stringify({})
		}		
		),	
		success:function(res){
			$("#js014 .arc_pjnr_item").not(":eq(0)").remove();
			if(res.data){
		  totalPage=res.data.totalPage;
		  console.log(totalPage);}
			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){
	            var evaluationName=datas[i].evaluationName;
	            var evaluationDes=datas[i].evaluationDes;
	            var replyDes=datas[i].replyDes;
	      
	         
	            	var createTime = datas[i].createTime;
				   if(!evaluationDes||evaluationDes=="\n"){
				    console.log("暂无评价内容")
				   	evaluationDes="此用户没有评论"}
				    
				    
				$("#nr1031").html(evaluationName);
				$("#nr1032").html(evaluationDes);
				
				$("#nr1033").html(createTime);
				$("#nr1034").html(replyDes);
				var s1='<div class="arc_pjnr_item'+' pj_item'+i+'">'
				 var s2=$(".arc_pjnr_item").html();	
				 var s3='</div>'
				 $("#js014").append(s1+s2+s3);		
		              
		         if(replyDes){
	            	$(".pj_item"+i+" #item_p5").css("display","block");
	            }
		
				  
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
		return totalPage;
	}

//专线评价列表 E


//专线评价数量  S
function process5(){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portal/aflcTransportEvaluation/v1/rangeEvaluationCount/"+aid,
		
		success:function(res){
		   
		   var datas = res.data;	
		   var count = datas.count;
		   var good = datas.good;
		   var medium = datas.medium;
		   var bad = datas.bad;
		   var serverQualityStarNum=datas.serverQualityStarNum;
		   var transportAgingStarNum=datas.transportAgingStarNum;
		   var serverPriceStarNum=datas.serverPriceStarNum;
		
			$("#nr1041").html(serverQualityStarNum);
			$("#nr1042").html(transportAgingStarNum);		
			$("#nr1043").html(serverPriceStarNum);
			$("#nr1044").html("("+count+")");
			$("#nr1045").html("("+good+")");
			$("#nr1046").html("("+medium+")");
			$("#nr1047").html("("+bad+")");
			$("#nr1048").html(count);
			$("#nr0745").html(count);
			
			
			
		 
							
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
process5();
//物流评价数量 E
//物流专线 其他列表S
function process08(startCity,endCity){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcTransportRange/v1/findOtherRanges",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:8,
			vo:{"startLocation":startCity,"endLocation":endCity}			//JSON.stringify({})
		}		
		),	
		success:function(res){
			$("#js017 .tj_list").not(":eq(0)").remove();
			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){
				var plength=datas[i].rangePrices.length;
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
				var companyId=datas[i].companyId;
				var lowerPrice=datas[i].lowerPrice;
				var account=datas[i].account;
				var publishName=datas[i].publishName;
				var startLocation = datas[i].startLocation;
				var endLocation = datas[i].endLocation;
				var publishName = datas[i].publishName;
				var transportAging = datas[i].transportAging;
				var transportAgingUnit = datas[i].transportAgingUnit;
			    var isVip=datas[i].isVip;
		        var authStatus=datas[i].authStatus;
		        var collateral=datas[i].collateral;
				var arcurl="/zhuanxian/detail?id="+id+"&publishId="+companyId; 
				$("#tj023").attr("href","/member/"+account+".html");
				$("#tj023").html(publishName);
				$("#tj021").html( startLocation.substring(0,6));
				$("#tj022").html( endLocation.substring(0,6));
				$("#tj024").html(zhjg);
				$("#tj025").html(qhjg);
				$("#tj026").html(transportAging+transportAgingUnit);
				$("#tj027").html(lowerPrice+"元");
				if(!lowerPrice){$("#tj027").html("面议");}
				$("#tj028").attr("href",arcurl);
				$("#tj020").attr("href",arcurl);
				 var s1='<div class="tj_list tj_list'+i+'">'
				 var s2=$(".tj_list").html();	
				 var s3='</div>'
				$("#js017").append(s1+s2+s3);	
				
						 if(isVip!=1){console.log("is not Vip");
		  $('.tj_list'+i+'  #tj_xinyong').css("display","none")}
		  if(authStatus!="AF0010403"){console.log("is not shiming");
		  $('.tj_list'+i+'  #tj_shiming').css("display","none")}
		  if(!collateral||collateral==0){console.log("is not danbao");
		  $('.tj_list'+i+'  #tj_danbao').css("display","none")}
			}	
			console.log($('.tj_list').length)
			if($('.tj_list').length>=10){
				$('.arc_bottom_more').css("display","block");
				$('#arc_bottom_more').attr("href","/zhuanxian/list?start="+startCity+"&end="+endCity)
				}
				if($('.tj_list').length==1){
				$('.arc_bottom').css("display","none");
				}
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
//process08();
//物流专线 其他列表 E


//专线数据字典 S
function tjcx01(){
	
   
 return	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-common/sysDict/getSysDictByCodeGet/AF0360301",
		
		success:function(res){
		
			 var datas = res.data;
			for(var i=0;i<datas.length;i++){
		   
			var value=datas[i].value;
			var code=datas[i].code;
		
				 
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}






//专线数据字典 E



//专线详情评价S
function process06(evaluationDes,evaluationId,evaluationName,serverPriceStarLevel,serverQualityStarLevel,transportAgingStarLevel,transportRangeId,assessLevel){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portal/aflcTransportEvaluation/v1/add",
		dataType: "json",
		data:JSON.stringify(
			{
		
 
  "evaluationDes":evaluationDes,
  "evaluationId": evaluationId,
  "evaluationName": evaluationName,
  "serverPriceStarLevel":serverPriceStarLevel ,
  "serverQualityStarLevel": serverQualityStarLevel,
  "transportAgingStarLevel": transportAgingStarLevel,
  "transportRangeId": transportRangeId,
  "assessLevel": assessLevel

 
  

		}		
		),	
		success:function(res){
			var datas = res.data.list;	
			process04(1);
			process5();
						
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
//process06();
//专线详情评价 E

//手机号获取用户ID（物流公司）
function wuliu(account){
var id="";
var name=""
   
$.ajax(
 	
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		async:false,
		url:"/api/aflc-portal/portalt/aflcLogisticsCompany/v1/findByAccount/"+account,
		
		success:function(res){
			console.log("success");
		
			 var datas = res.data;
			var id0=datas.id;
			var contactsName=datas.contactsName;
			
			
			id=id0;
			name=contactsName;
			console.log(id+":"+name);
	
			
			
		
				 
							
		},error:function(err){
			console.log(err.responseText);
		}
		})
return {id:id,name:name}

	}

//手机号获取用户ID（车主）
function che(account,token){
var id="";
var name=""
   
$.ajax(
 	
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		async:false,
		url:"/api/aflc-common/common/aflcMemberCenter/v1/getDriverInfoByMobile?access_token="+token+"&mobile="+account,
		
		success:function(res){
			console.log("success");
		
			 var datas = res.data;
			var id0=datas.driverId;
			var contactsName=datas.driverName;
			
			
			id=id0;
			name=contactsName;
			console.log(id+":"+name);
	
			
			
		
				 
							
		},error:function(err){
			console.log(err.responseText);
		}
		})
return {id:id,name:name}

	}

//手机号获取用户ID（货主）
function huo(account,token){
var id="";
var name=""
   
$.ajax(
 	
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		async:false,
		url:"/api/aflc-common/common/aflcMemberCenter/v1/getShipperInfoByMobile?access_token="+token+"&mobile="+account,
		
		success:function(res){
			console.log("success");
		
			 var datas = res.data;
			var id0=datas.shipperId;
			var contactsName=datas.contacts;
			
			
			id=id0;
			name=contactsName;
			console.log(id+":"+name);
	
			
			
		
				 
							
		},error:function(err){
			console.log(err.responseText);
		}
		})
return {id:id,name:name}

	}


//提交评价 S
 $('#pj_submit').click(function(){
        var login_mobile = getCookie("login_mobile");
        var login_type= getCookie("login_type");
        var access_token=getCookie("access_token");

        var assessLevel="";
        var transportRangeId=aid;
        var evaluationDes=$("#pj_nr").val();
        var pj_f1= parseInt($('#pj_f1').html().substring(0,1));
        var pj_f2= parseInt($('#pj_f1').html().substring(0,1));
        var pj_f3= parseInt($('#pj_f1').html().substring(0,1));
        var pj_zh= $('#pj_box_zh').html();
        var serverPriceStarLevel="AF03603010"+pj_f1;
        var serverQualityStarLevel="AF03603020"+pj_f2;
        var transportAgingStarLevel="AF03603030"+pj_f3;
        if(pj_zh=="好评"){var assessLevel="AF0360101";}
        if(pj_zh=="中评"){var assessLevel="AF0360102";}
        if(pj_zh=="差评"){var assessLevel="AF0360103";}
     
       
        

        var login_mobile = getCookie("login_mobile");
        var login_type= getCookie("login_type");
        var access_token=getCookie("access_token");
        if(login_type=="aflc-1"){
        	var obj2=new Object();
        	obj2=che(login_mobile,access_token);
        	console.log(obj2);
        	var evaluationId=obj2.id;
        	var evaluationName=obj2.name;
            console.log(evaluationId);
            console.log(evaluationName);
        }
        if(login_type=="aflc-2"){
        	var obj3=new Object();
        	obj3=huo(login_mobile,access_token);
        	console.log(obj3);
        	var evaluationId=obj3.id;
        	var evaluationName=obj3.name;
            console.log(evaluationId);
            console.log(evaluationName);
        		
        }
        if(login_type=="aflc-5"){
        	
        	var obj=new Object();
        	obj=wuliu(login_mobile);
        	console.log(obj);
        	var evaluationId=obj.id;
        	var evaluationName=obj.name;
            console.log(evaluationId);
            console.log(evaluationName);
   
        }
        
     console.log(serverPriceStarLevel+":"+serverQualityStarLevel+":"+transportAgingStarLevel+":"+assessLevel+":"+evaluationDes+transportRangeId+evaluationName+evaluationId);    
       if(!pj_zh){alert("请完善评价信息！");return false;}
       if(pj_zh){if (!login_mobile||!login_type||!access_token){
        $('.pj_box').hide();
        $('body').toast({
			content:'您还未登录，请先登录',
			duration:3000
		});
        $('.login_box').css("display","block");
        	

      //window.location='/login';
      return false;
                                                }}
        
       
        
        
       process06(evaluationDes,evaluationId,evaluationName,serverPriceStarLevel,serverQualityStarLevel,transportAgingStarLevel,transportRangeId,assessLevel);
       	
       	$('.pj_box').hide();
       	
       	alert("评价成功！");
       	
	//window.location.reload();
});


//提交评价 E