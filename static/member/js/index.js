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
//获取参数的值
function GetQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(t);return null!=s?unescape(s[2]):null}
var myurl=window.location.href;
var uid=myurl.split(/member\/|-|.html/)[1];
console.log('uid='+uid)

$('#btn_onlineTracking').click(function () {
console.log($("#txtbill").val());
var num=$("#txtbill").val();
if(num){
//window.open('/plus/list.php?tid=76&num='+num+'&uid='+uid)
window.open(uid+'-chajian.html?num='+num)
}
if(!num){alert("请先输入运单号查询！")}
})
console.log("新闻长度"+$('.news_item').length)
if($('.news_item').length<=2){$('.news_item0').css("display","block")}

//专线搜索 S
    $("#search_wlLine").click(
    	function(){
     var start=$("#wlLineFrom").val();
     var end=$("#wlLineTo").val();
     
     window.location=uid+'-line.html?start='+start+'&end='+end;
         

    })
//专线搜索 E

//网点搜索 S
    $("#search_wangdian").click(
    	function(){
     var wangdian=$("#wangdian").val();
     
     window.location=uid+'-wangdian.html?wangdian='+wangdian;
         

    })
//网点搜索 E

//通过账号获取专线公司id S
function member_01(){
var aid="";
var jwd="113.339865,23.138652";
	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcLogisticsCompany/v1/findByAccount/"+uid,
	    async:false,
		success:function(res){
			if(!res.data){return ;}
		   var datas = res.data;	
		   var id = datas.id;
		   var foundTime=datas.foundTime;
		   var companyName=datas.companyName;
		   var companyDes=datas.companyDes;
		   var qq=datas.qq;
		   var contactsName=datas.contactsName;
		   var corporation=datas.corporation;
		   var address=datas.address;
		   var collectNum=datas.collectNum;
		   var assessNumber=datas.assessNumber;
		   var collateral=datas.collateral;
		   var latitude=datas.latitude;
		   var longitude=datas.longitude;
		   if(latitude&&longitude)
		   {jwd=longitude+","+latitude}
		   if(collateral<=0){
		   	$('#bzj_1').html("该公司暂未缴纳保证金");
		   	$('#bzj_2').html("&nbsp");  	
		   }
		    if(collateral>0){
		   	$('#bzj_money').html(collateral); 	
		   }
		   var authStatus=datas.authStatus;
		   var isVip=datas.isVip;
		   if(authStatus=="AF0010403"){$('#shiming').css("display","block")}
		   if(isVip==1){$('#xinyong').css("display","block")}
		   
		   var credit=datas.credit;
		   if(credit>=0){$('.item01 img').css("display","block")}

		   if(address&&address.length>40){address=address.substring(0,40)+"..";}
		   var mobile=datas.mobile;
		   var serverPriceScore=datas.serverPriceScore;
		   var serverQualityScore=datas.serverQualityScore;
		   var transportAgingScore=datas.transportAgingScore;
		   if(!serverPriceScore){serverPriceScore=5}
		   if(!serverQualityScore){serverQualityScore=5}
		   if(!transportAgingScore){transportAgingScore=5}
		   if(qq){
		   	$('#qq').attr("href","http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes");
		   $('#box_qq').attr("href","http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes");
		   
		   }
		   if(companyDes){
		   	companyDes2=companyDes.substring(0,470)+"...";
		   	companyDes=companyDes.substring(0,2000);
		   }
		   if(companyName){companyName=companyName.substring(0,14)}
		   console.log(id);
		   
		   if(id){	
                aid=id;
		   	
				 $('.need_companyId').each(function(inx, ele){
					var href = $(this).attr('href');
					if(href.indexOf('&publishId=') === -1){
						$(this).attr('href',href + '&publishId=' + id);
					}
					
				 });
				 
		   	member_02(id);
		   	member_03(id);	
		   	$('#nr_name').html(contactsName);
		   	$('#nr092').html(contactsName);
		   	$('#nr_tel').html(mobile);
		   	$('#nr081').html(companyName);
		   	if(companyDes){
		   	$('#nr082').html(companyDes2);
		   	$('#nr083').html(companyDes);
		   	}
		   	$('#nr091').html(companyName);
		   	$('#nr096').html(companyName);
		   	$('#nr0914').html(companyName);
		   	
		   	$('#nr0913').html(mobile);
		   	$('#nr093').html(mobile);
		   	
		   	 $('#nr095').html(address);
		   	$('#nr0911').html(address);
		   	
		   	 $('#nr094').html(qq);
		   	 $('#nr098').html(corporation);
             $('#nr0912').html(corporation);
             
             $('#num001').html(serverPriceScore);
             $('#num002').html(serverQualityScore);
             $('#num003').html(transportAgingScore);
             $('#num004').html(collectNum);
             $('#num005').html(assessNumber);
             
            $('#box_lxr').html(contactsName);
            $('#box_address').html(address);
            $('#box_foundTime').html(foundTime); 
            
            
		   var productServiceCode=datas.productServiceCode;
		   var n = (productServiceCode.split(',')).length;
		   if(n==1){$('.cp_1').css("display","block")}
		   if(n==2){$('.cp_2').css("display","block")}
		   if(n==3){$('.cp_3').css("display","block")}
		   if(n==4){$('.cp_4').css("display","block")}
		   if(n>=5||n<1){$('.cp_5_8').css("display","block")}
		   for(var i=1;i<10;i++){  	
		  	if(productServiceCode){
		   if(productServiceCode.indexOf("AF0270"+i)!=-1){
		   	console.log("AF0270"+i);
		   	$('.main1_left .item'+i).css("display","block");
		   	$('#cp0'+i).css("display","block")
		   	
		   }
		   }
		   }
		   if(n==9){$('.main1_left .item9').css("display","none")}

           var otherServiceCode=datas.otherServiceCode;
		   var n = (otherServiceCode.split(',')).length;
		   if(n==1){$('.fw_1').css("display","block")}
		   if(n==2){$('.fw_2').css("display","block")}
		   if(n==3){$('.fw_3').css("display","block")}
		   if(n==4){$('.fw_4').css("display","block")}
		   if(n>=5||n<1){$('.fw_5_8').css("display","block")}
		   for(var i=1;i<9;i++){  	
		  	if(otherServiceCode){
		   if(otherServiceCode.indexOf("AF0250"+i)!=-1){
		   	console.log("AF0250"+i);
		   	$('.main1_right .item'+i).css("display","block");
		   	$('#fw0'+i).css("display","block")
		    $('#fw00'+i).css("display","block")
		   }
		   }
		   }
            
            
            
            
            
		   	if(!companyDes){$('#nr082').html("暂无内容");
		   	$('#nr083').html("暂无内容");
		   	}
		   	
		   }
						
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	return {aid:aid,jwd:jwd};
	}
member_01();
//通过账号获取专线公司id E

//网站主页网点列表S
function member_02(companyId){

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
			pageSize:8,
			vo:{

       "companyId":companyId
				
			}			//JSON.stringify({})
		}		
		),	
		success:function(res){
			var datas = res.data.list;
			if(!datas){
				$(".wd_item").css("display","block");
	            $(".wd_item").html("暂无内容");
			}
			for(var i=0;i<datas.length;i++){
	            var pointName=datas[i].pointName;
				var companyName=datas[i].companyName;
				var name=datas[i].name;
				var mobile=datas[i].mobile;
				var belongCityName=datas[i].belongCityName;
				var address=datas[i].address.substring(0,15);
				$("#nr011").html(pointName);
				$("#nr012").html(name);
				$("#nr013").html(mobile);
				$("#nr014").html(belongCityName);
		
				 var s1=' <div class="wd_item">'
				 var s2=$(".wd_item").html();	
				 var s3='</div>'
				 $("#js002").append(s1+s2+s3);	
				 
			}				
		},error:function(err){
			$(".wd_item").css("display","none");
	            $(".wd_item").html("暂无内容");
			console.log(err.responseText);
		

		}
		})
	}
//process02();
//网站主页网点列表 E


//网站物流专线 栏目列表S
function member_03(companyId2){
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcTransportRange/v1/findCompanyRanges",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:4,
			vo:{
				"companyId": companyId2
			}			//JSON.stringify({})
		}		
		),	
		success:function(res){
		
			var datas = res.data.list;		
			var orglink =$('#nr0007').attr('href');
			for(var i=0;i<datas.length;i++){
				var plength=datas[i].rangePrices.length;
				for(var j=0;j<plength;j++){
					var qhjg;
					var zhjg;
					var ptype;
					var startVolume=datas[i].rangePrices[j].startVolume;
					var discountPrice=datas[i].rangePrices[j].discountPrice;
					var primeryPrice=datas[i].rangePrices[j].primeryPrice;
					if(startVolume==0){
						ptype=datas[i].rangePrices[j].type;
					if (ptype==0){
						if(!discountPrice){
						qhjg=primeryPrice;
						}
					    if(discountPrice){
						qhjg=discountPrice;
						}
						
					}
					if (ptype==1){
						if(!discountPrice){
						zhjg=primeryPrice;
						}
					    if(discountPrice){
						zhjg=discountPrice;
						}
					}
					}
					
						}	
				var id=datas[i].id;
				var companyId=datas[i].companyId || companyId2;
				var account=datas[i].account;
				var companyName=datas[i].companyName;
			    var startCity=datas[i].startCity;  
				var startArea=datas[i].startArea;
				var endCity=datas[i].endCity;
				var endArea=datas[i].endArea;
				
				if(startCity==null){startCity="";console.log('startCity')}
				if(startArea==null){startArea="";console.log('startArea')}
				if(endCity==null){endCity="";console.log('endCity')}
				if(endArea==null){endArea="";console.log('endArea')}
				var start=startCity+startArea;
                var end=endCity+endArea;
                if(end&&end.length>8){end=end.substring(0,8)+".."}
				var publishName = datas[i].publishName;
				var transportAging = datas[i].transportAging;
				var transportAgingUnit = datas[i].transportAgingUnit;
				var lowerPrice=datas[i].lowerPrice;
				var companyFile =datas[i].companyFile;
				var transportRemark = datas[i].transportRemark;
				var QQ=datas[i].QQ;
				var address=datas[i].address;
				var departureHzData=datas[i].departureHzData;
				var departureHzTime=datas[i].departureHzTime;
				var arcurl="/wlzx/2018/0509/7.html?id="+id+"&publishId="+companyId; 
				
				$("#nr001").html(start);
				$("#nr002").html(end);
				$("#nr003").html( zhjg);
				$("#nr004").html( transportAging+transportAgingUnit);
				$("#nr005").html(qhjg);
				$("#nr006").html(lowerPrice);
				if(!lowerPrice || lowerPrice==0){$("#nr006").html("面议");}
					$("#nr0012").attr("href",arcurl);
				$('#nr0007').attr('href',orglink + '?id=' + id+'&publishId='+companyId);

				 var s1='<div class="zx_item">'
				 var s2=$(".zx_item").html();	
				 var s3='</div>'
				 $("#js001").append(s1+s2+s3);		 
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
//process03();
//网站物流专线栏目列表 E