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


var locationProvince1=GetUrlParam("locationProvince");
var locationCity1=GetUrlParam("locationCity");
var locationArea1=GetUrlParam("locationArea");
var parkName1=GetUrlParam("parkName");




var locationProvince= decodeURI(locationProvince1);
var locationCity= decodeURI(locationCity1);
var locationArea= decodeURI(locationArea1);
var parkName= decodeURI(parkName1);

var currentProvinceFullName=$.cookie('currentProvinceFullName')
var currentAreaFullName = $.cookie('currentAreaFullName')


 
vo=new Object();

vo.locationProvince=locationProvince;
vo.locationCity=locationCity;
vo.locationArea=locationArea;
vo.parkName=parkName;

 if (!locationProvince || locationProvince== "null")  {
 	locationProvince=currentProvinceFullName;
 	vo.locationProvince=locationProvince;}
 if (!locationCity || locationCity== "null")  {
 	locationCity=currentAreaFullName;
 	vo.locationCity=locationCity;}
 if (!locationArea || locationArea== "null")  {
 	locationArea="";delete vo.locationArea;}
 if (!parkName || parkName== "null")  {
 	parkName="";delete vo.parkName;}


$("#parkAddress input").citypicker({
  province: locationProvince,
  city: locationCity,
  district: locationArea
});
//$("#list_nav_a").attr("href",'/wuliu?'+'&locationProvince='+locationProvince+'&locationCity='+locationCity+'&locationArea='+locationArea);
$("#list_nav_a").html(locationCity+locationArea+"物流园区")


$('#parkName').val(parkName);


//清空条件
$("#flush").click(	
    	function(){
    		console.log("清空地址")
    		window.location.href='/wuliu?';
    })
//清空条件
//园区搜索 S

    $("#search_wlyq").click(
    	function(){
            var list1 = []
			$('#parkAddress .select-item').each(function (i,e) {
				list1.push($(this).text())
			});
			var locationProvince =list1[0];
			var locationCity =list1[1];
			var locationArea =list1[2];
	  if(!locationProvince){locationProvince=''}
	  if(!locationCity){locationCity=''}
	  if(!locationArea){locationArea=''}
      locationProvince=encodeURI(locationProvince)
      locationCity=encodeURI(locationCity)
      locationArea=encodeURI(locationArea)

      var parkName=$("#parkName").val();
      var parkAddress='&locationProvince='+locationProvince+'&locationCity='+locationCity+'&locationArea='+locationArea;
      
   if(!parkAddress){parkAddress=""}
   if(!parkName){parkName=""}

      parkName=encodeURI(parkName)

      
     window.location='/wuliu?'+parkAddress+'&parkName='+parkName;
    })


//园区搜索 E




//园区列表推荐列表S
function process01(){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflclogisticspark/v1/Gateway/RecommendParklist",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:14,
			vo:vo			//JSON.stringify({})
		}		
		),	
		success:function(res){
			if(!res.data||res.data.list==""){ 
				console.log("推荐内容为空")
				$(".tj_none").css("display","block")
				return;
			}
			var datas = res.data.list;	

			for(var i=0;i<datas.length;i++){	
				
					var  id=datas[i].id;
                 var parkName=datas[i].parkName;
                 var parkAddress=datas[i].parkAddress;
                 var transportNumber=datas[i].transportNumber;
                    if(!transportNumber){transportNumber=0}
                 var browseNumber=datas[i].browseNumber;
                 if(!browseNumber){browseNumber=0}
                 var netWorkNumber=datas[i].netWorkNumber;
	      if(!netWorkNumber){netWorkNumber=0}
		        var  url="/wlyq/2018/1120/392.html?id="+id;
                 
                 $('#tj01').attr("href",url);
                 $('#tj02').html(parkName);
                 $('#tj03').html(transportNumber);
                 $('#tj04').html(netWorkNumber);
                 $('#tj05').html(parkAddress);
                 $('#tj06').html(browseNumber);
               

				 var s1='<div class="tj_list tj_list'+i+'">'
				 var s2=$(".tj_list").html();	
				 var s3='</div>'
				 $("#js010").append(s1+s2+s3);	
				 
				 
		  
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
process01();
//园区列表推荐列表 E

//园区信息栏目列表S
function process02(currentPage){
var totalPage=8;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflclogisticspark/v1/Gateway/Gatewaylist",
		dataType: "json",
		async:false,
		data:JSON.stringify(
			{
			currentPage:currentPage,
			pageSize:21,
			
		  vo:vo		//JSON.stringify({})

			}
		),	
		success:function(res){
			 $("#js005 .wlzx_list").not(":eq(0)").remove();
			 if(res.data){
			 totalPage=res.data.pages;
		   console.log(totalPage);}

			 if(!res.data||!res.data.total){ 
				console.log("内容为空")
				$(".box").css("display","none")
				$(".list_none").css("display","block")
				return;
				}
			var datas = res.data.list;	

			for(var i=0;i<datas.length;i++){
				var  id=datas[i].id;
                 var parkName=datas[i].parkName;
                 var parkAddress=datas[i].parkAddress;
                 var transportNumber=datas[i].transportNumber;
                 var parkSignPicture=datas[i].parkSignPicture;
                 var browseNumber=datas[i].browseNumber;
	             if(!transportNumber){transportNumber=0}
		        var  url="/wlyq/2018/1120/392.html?id="+id;
                 
                 $('#nr01').attr("href",url);
                 $('#nr02').attr("src",parkSignPicture);
                 $('#nr03').html(parkName);
                 $('#nr04').html(transportNumber);
                 $('#nr05').html(parkAddress);
                 $('#nr06').html(browseNumber);
 
 
				 var s1='<ul class="wlzx_list wlzx_list'+i+'">'
				 var s2=$(".wlzx_list").html();	
				 var s3='</ul>'
				 $("#js005").append(s1+s2+s3);		
				 

			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	console.log("最终总页数："+totalPage)
	return totalPage;
	}
//process02(1);
//园区信息栏目列表 E

//园区底部感兴趣列表S
function wlyq_interest(currentPage){
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflclogisticspark/v1/Gateway/getLogisticsPark",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:currentPage,
			pageSize:16,
			
		  vo:vo		//JSON.stringify({})

			}
		),	
		success:function(res){
			 $("#js006 .bottom_wlyq_item").not(":eq(0)").remove();

			 if(!res.data||!res.data.total){ 
				return;
				}
			var datas = res.data.list;	
			for(var i=0;i<datas.length;i++){
				var  id=datas[i].id;
                 var parkName=datas[i].parkName;
		        var  url="/wlyq/2018/1120/392.html?id="+id;
                 
                
 
 
				 var s1='<div class="bottom_wlyq_item bottom_wlyq_item'+i+'">'
				 var s2=$('.bottom_wlyq_item').html();	
				 var s3='</div>'
				 $("#js006").append(s1+s2+s3);	
				 $('.bottom_wlyq_item'+i+' #wlyq_item0').attr("href",url);
                 $('.bottom_wlyq_item'+i+' #wlyq_item0').html(parkName);
				 

			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
wlyq_interest(1);
//园区底部感兴趣列表 E