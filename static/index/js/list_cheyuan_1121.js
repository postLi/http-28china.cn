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


var start1=GetUrlParam("start");
var end1=GetUrlParam("end");
var carType1=GetUrlParam("carType");
var carSourceType1=GetUrlParam("carSourceType");
var carLength1=GetUrlParam("carLength1");
var carLength2=GetUrlParam("carLength2");
var carLoad1=GetUrlParam("carLoad1");
var carLoad2=GetUrlParam("carLoad2");



var start= decodeURI(start1);
var end= decodeURI(end1);
var carType= decodeURI(carType1);
var carSourceType= decodeURI(carSourceType1);
var carLength1= decodeURI(carLength1);
var carLength2= decodeURI(carLength2);
var carLoad1= decodeURI(carLoad1);
var carLoad2= decodeURI(carLoad2);

vo=new Object();
 vo.strartAddress=start;
 vo.endAddress=end;
 vo.carType=carType;
 vo.carSourceType=carSourceType;
 vo.carLengthLower=carLength1;
 vo.carLengthUpper=carLength2;
 vo.carLoadLower=carLoad1;
 vo.carLoadUpper=carLoad2;
 
 
 if (!start || start == "null") {start="";delete vo.strartAddress;}
 if (!end || end   == "null") {end="";delete vo.endAddress;}
 if (!carType || carType == "null") {carType=""; delete vo.carType;}
 if (!carSourceType || carSourceType == "null") {carSourceType=""; delete vo.carSourceType;}
 if (!carLength1 || carLength1== "null") {carLength1="";delete vo.carLengthLower;}
 if (!carLength2 || carLength2== "null") {carLength2="";delete vo.carLengthUpper;}
 if (!carLoad1 ||carLoad1== "null") {carLoad1="";delete vo.carLoadLower;}
 if (!carLoad2 ||carLoad2== "null") {carLoad2="";delete vo.carLoadUpper;}
 
$('#carLineFrom').val(start);
$('#carLineTo').val(end);
$('#tjcx_01 .all').attr("href",UrlUpdateParams(window.location.href, "carType", ""));
$('#tjcx_02 .all').attr("href",UrlUpdateParams(window.location.href, "carSourceType", ""));
$('#tjcx_03 .all').attr("href",UrlUpdateParams(window.location.href, "carSourceType", ""));
$('#tjcx_04 .all').attr("href",UrlUpdateParams(UrlUpdateParams(window.location.href, "carLength1", ""), "carLength2", ""));
$('#tjcx_05 .all').attr("href",UrlUpdateParams(UrlUpdateParams(window.location.href, "carLoad1", ""), "carLoad2", ""));
//清空条件
$("#flush").click(	
    	function(){
    		console.log("清空地址")
    		window.location.href='/cheyuan?';
    })
//清空条件
//车源搜索 S

    $("#search_cheyuan").click(
    	function(){
     var start=$("#carLineFrom").val();
     var end=$("#carLineTo").val();
     window.location='/cheyuan?start='+start+'&end='+end;
    })


//车源搜索 E


//车源数据字典 S
function tjcx01(){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-common/sysDict/getSysDictByCodeGet/AF018",
		
		success:function(res){
			var datas = res.data;
			for(var i=0;i<datas.length;i++){
				
				var name=datas[i].name;	
				var code=datas[i].code;
        var myurl=UrlUpdateParams(window.location.href, "carType",code);
//       var s1='<a  href=/cheyuan?start='+start+'&end='+end;
//				 var s2='&carType='+code+'>';
//				 var s3=name+'</a>';
         var s1='<a href='+myurl+'>';
         var s3=name+'</a>';
				 $("#tjcx_01").append(s1+s3);	
				 
			}			
			//选中状态 S 
	if(carType){
	
	$("#tjcx_01 a").each(function(){
		var aaa=$(this).attr("href");
		
		if(aaa.indexOf(carType) !=-1){
			
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
	var myurl1=UrlUpdateParams(window.location.href, "carSourceType", 'AF01802');
	var myurl2=UrlUpdateParams(window.location.href, "carSourceType", 'AF01801');
	$("#tjcx_02 a:eq(1)").attr("href",myurl1);
	$("#tjcx_02 a:eq(2)").attr("href",myurl2);
		$("#tjcx_02 a").each(function(){
		var aaa=window.location.href;
		
		if(aaa.indexOf('carSourceType=AF01802')!=-1){
			$("#tjcx_02 a").removeClass("now");
			$("#tjcx_02 a:eq(1)").addClass("now");}
		if(aaa.indexOf('carSourceType=AF01801')!=-1){
			$("#tjcx_02 a").removeClass("now");
			$("#tjcx_02 a:eq(2)").addClass("now");}
	})
	}
tjcx02();
function tjcx03(){
	var myurl1=UrlUpdateParams(window.location.href, "carSourceType", 'AF01802');
	var myurl2=UrlUpdateParams(window.location.href, "carSourceType", 'AF01801');
	$("#tjcx_03 a:eq(1)").attr("href",myurl1);
	$("#tjcx_03 a:eq(2)").attr("href",myurl2);
		$("#tjcx_03 a").each(function(){
		var aaa=window.location.href;
		
		if(aaa.indexOf('carSourceType=AF01802')!=-1){
			$("#tjcx_03 a").removeClass("now");
			$("#tjcx_03 a:eq(1)").addClass("now");}
		if(aaa.indexOf('carSourceType=AF01801')!=-1){
			$("#tjcx_03 a").removeClass("now");
			$("#tjcx_03 a:eq(2)").addClass("now");}
	})
	}
tjcx03();
function tjcx04(){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-common/sysDict/getSysDictByCodeGet/AF031",
		
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
					var name2=99999;
				}
				else {
					var name1=name.split("-",2)[0];
					var name2=name.split("-",2)[1];
				}
				
				
				
				var code=datas[i].code;
        var myurl=UrlUpdateParams(UrlUpdateParams(window.location.href, "carLength1", name1), "carLength2", name2);
//       var s1='<a  href=/cheyuan?start='+start+'&end='+end;
//				 var s2='&carLength1='+name1+'&carLength2='+name2+'>';
//				 var s3=name+'米</a>';
         var s1='<a href='+myurl+'>';
         var s3=name+'米</a>';
				 $("#tjcx_04").append(s1+s3);	
				 
			}	
			//选中状态 S 
	if(carLength1&&carLength2){
	
	$("#tjcx_04 a").each(function(){
		var aaa=$(this).attr("href");
		
		if(aaa.indexOf('carLength1='+carLength1)!=-1&&aaa.indexOf('carLength2='+carLength2)!=-1){
			
			//console.log(aaa+":"+goodsWeight1+":"+goodsWeight2);
			$("#tjcx_04 a").removeClass("now");
			$(this).addClass("now");}
	})
	}
		//选中状态 E		 
	},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
tjcx04();
function tjcx05(){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-common/sysDict/getSysDictByCodeGet/AF032",
		
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
					var name2=9999;
				}
				else {
					var name1=name.split("-",2)[0];
					var name2=name.split("-",2)[1];
				}
				
				
				
				var code=datas[i].code;
        var myurl=UrlUpdateParams(UrlUpdateParams(window.location.href, "carLoad1", name1), "carLoad2", name2);
//       var s1='<a  href=/cheyuan?start='+start+'&end='+end;
//				 var s2='&carLoad1='+name1+'&carLoad2='+name2+'>';
//				 var s3=name+'吨</a>';
         var s1='<a href='+myurl+'>';
         var s3=name+'吨</a>';
				 $("#tjcx_05").append(s1+s3);	
				 
			}		
			//选中状态 S 
	if(carLoad1&&carLoad2){
	
	$("#tjcx_05 a").each(function(){
		var aaa=$(this).attr("href");
		
		if(aaa.indexOf('carLoad1='+carLoad1)!=-1&&aaa.indexOf('carLoad2='+carLoad2)!=-1){
			
			//console.log(aaa+":"+goodsWeight1+":"+goodsWeight2);
			$("#tjcx_05 a").removeClass("now");
			$(this).addClass("now");}
	})
	}
		//选中状态 E		 
	},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
tjcx05();
//车源数据字典 E


//车源列表 推荐列表S
function process01(){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcCarInfo/v1/getPortalRecommendlist",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:14,
			vo:vo		//JSON.stringify({})
		}		
		),	
		success:function(res){
			$("#js009 .tj_list").not(":eq(0)").remove();
				if(!res.data||res.data==""){ 
				console.log("推荐内容为空")
				$(".tj_none").css("display","block")}
			var datas = res.data;	
			for(var i=0;i<datas.length;i++){
			
                var id=datas[i].id;	
				var driverId=datas[i].driverId;
				var carLoad=datas[i].carLoad;
				var carLength=datas[i].carLength;
				var carSourceTypeName=datas[i].carSourceTypeName;
				var carTypeName=datas[i].carTypeName;
				var driverStatus=datas[i].driverStatus;
			if(!datas[i].usualPlace){var usualPlace=""}
				var usualPlace=datas[i].usualPlace.substring(0,12);
				
	      var strartAddress0=datas[i].strartAddress;
				var endAddress0=datas[i].endAddress;
				var strartAddress = strartAddress0.substring(3,10);
				var endAddress = endAddress0.substring(3,10);
				if(strartAddress0.indexOf('自治区')!=-1){strartAddress=strartAddress0.split('自治区')[1]}
				if(endAddress0.indexOf('自治区')!=-1){endAddress=endAddress0.split('自治区')[1]}
				
				    var createTime1 = datas[i].createTime;
				    var createTime2 =new Date(createTime1);
				    var year=createTime2.getFullYear();
				    var mouth=createTime2.getMonth();
				    var day=createTime2.getDay();
				    var  Hours=createTime2.getHours();
				    var Minutes=createTime2.getMinutes();
				    var createTime=year+"-"+mouth+"-"+day+" "+Hours+":"+Minutes;
				    
				var arcurl="/cyxx/2018/0508/5.html?id="+id+"&driverId="+driverId;
				
				$("#nr0511").html( strartAddress.substring(0,6));
				$("#nr0512").html( endAddress.substring(0,6));			
				$("#nr0513").html(carLoad+"吨");
				$("#nr0514").html(carLength+"米");
				$("#nr0515").html(carSourceTypeName);
				$("#nr0516").html(carTypeName);
				$("#nr0517").html(usualPlace);
				$("#nr0518").html(createTime);
				$("#nr0519").attr("href",arcurl);
				$("#nr0500").attr("href",arcurl);
				var s1='<ul class="tj_list tj_list'+i+'">'
				var s2=$(".tj_list").html();	
				var s3='</div>'
				$("#js009").append(s1+s2+s3);		
				if(driverStatus!="AF0010403"){console.log("is not shiming");
		  $('.tj_list'+i+' .p5').css("display","none")}
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
process01();
//车源列表 推荐列表 E



//车源信息栏目列表S
function process02(currentPage){
var totalPage=8;

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcCarInfo/v1/getPortalCardInfolist",
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
		success:function(res){
			$("#js006 .wlzx_list").not(":eq(0)").remove();
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
				
				var driverId=datas[i].driverId;
				var carLoad=datas[i].carLoad;
				var carNum=datas[i].carNum;
				var createrName=datas[i].createrName;
				if(!createrName){createrName=""}
				var carNum=carNum.substring(0,2)+"***"+carNum.substring(6,10);
				if(datas[i].remark){var remark=datas[i].remark.substring(0,19)+"...";}
				var carLength=datas[i].carLength;
				var carSourceTypeName=datas[i].carSourceTypeName;
				var browseNumber=datas[i].browseNumber;
				if(!browseNumber){browseNumber=0}
				
				var carTypeName=datas[i].carTypeName;
				if(!datas[i].usualPlace){var usualPlace=""}
				var usualPlace=datas[i].usualPlace.substring(0,12);
				var title=datas[i].title;
				
          	var strartAddress0=datas[i].strartAddress;
				var endAddress0=datas[i].endAddress;
				var strartAddress = strartAddress0.substring(3,10);
				var endAddress = endAddress0.substring(3,10);
				if(strartAddress0.indexOf('自治区')!=-1){strartAddress=strartAddress0.split('自治区')[1]}
				if(endAddress0.indexOf('自治区')!=-1){endAddress=endAddress0.split('自治区')[1]}
				
				var expectPrice=datas[i].expectPrice;
				var qq=datas[i].qq;
				
			var credit28=datas[i].credit28;
		  var driverStatus=datas[i].driverStatus;
		 
				
				var createTime1 = datas[i].createTime;
			  var createTime=formatDate(new Date(createTime1));
			   if(!datas[i].carFile){var carFile1=""}
				if(datas[i].carFile){ var carFile1=datas[i].carFile.split(",")[0]; }
				$("#car_pic").attr("src",carFile1);

		       var arcurl="/cyxx/2018/0508/5.html?id="+id+"&driverId="+driverId;
                $("#nr_a51").attr("href",arcurl);
                $("#nr_a54").attr("href",arcurl);
                $("#nr_a51").html(strartAddress+"&rarr;"+ endAddress);
                $("#nr_a52").attr("href",arcurl);
                $("#nr051").html(carNum);
                $("#nr052").html(carTypeName);
                $("#nr053").html("长"+carLength+"米");
                $("#nr054").html("载重"+carLoad+"吨");
                $("#nr055").html(carSourceTypeName);
                $("#nr056").html(usualPlace);
                $("#nr057").html(expectPrice+"元");
                if(!expectPrice){$("#nr057").html("面议");}
                $("#nr058").html(remark);
                $("#nr059").html(createrName);
                $("#nr0510").html("发布时间："+createTime); 
                $("#nr0521").html(browseNumber);
                $("#nr_a53").attr("href","http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes");
				var s1='<ul class="wlzx_list wlzx_list'+i+'">'
				 var s2=$(".wlzx_list").html();	
				 var s3='</ul>'
				 $("#js006").append(s1+s2+s3);	
				 if(!qq){$('.wlzx_list'+i+' #qq').css("display","none");}
				  //if(!credit28){console.log("is not Vip");
		  //$('.wlzx_list'+i+' .cy_list_3 .p2').css("display","none")}
		  if(driverStatus!="AF0010403"){console.log("is not shiming");
		  $('.wlzx_list'+i+' .cy_list_3 .p1').css("display","none")}
				 
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	console.log("最终总页数："+totalPage)
	return totalPage;
	}
//process02(1);
//车源信息栏目列表 E


