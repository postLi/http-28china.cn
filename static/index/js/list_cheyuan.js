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


var startp1=GetUrlParam("startp");
var endp1=GetUrlParam("endp");
var startc1=GetUrlParam("startc");
var endc1=GetUrlParam("endc");
var starta1=GetUrlParam("starta");
var enda1=GetUrlParam("enda");
var carType1=GetUrlParam("carType");
var carSourceType1=GetUrlParam("carSourceType");
var carLength1=GetUrlParam("carLength1");
var carLength2=GetUrlParam("carLength2");
var carLoad1=GetUrlParam("carLoad1");
var carLoad2=GetUrlParam("carLoad2");
var isLongCar1=GetUrlParam('isLongCar');


var startp=decodeURI(startp1)
var endp= decodeURI(endp1);
var startc= decodeURI(startc1);
var endc= decodeURI(endc1);
var starta= decodeURI(starta1);
var enda= decodeURI(enda1);
var carType= decodeURI(carType1);
var carSourceType= decodeURI(carSourceType1);
var carLength1= decodeURI(carLength1);
var carLength2= decodeURI(carLength2);
var carLoad1= decodeURI(carLoad1);
var carLoad2= decodeURI(carLoad2);
var isLongCar=decodeURI(isLongCar1);

var currentAreaFullName = $.cookie('currentAreaFullName');
var currentProvinceFullName=$.cookie('currentProvinceFullName');


vo=new Object();
vo.startProvince=startp;
vo.startCity=startc;
vo.startArea=starta;
vo.endProvince=endp;
vo.endCity=endc;
vo.endArea=enda;
 vo.carType=carType;
 vo.carSourceType=carSourceType;
 vo.carLengthLower=carLength1;
 vo.carLengthUpper=carLength2;
 vo.carLoadLower=carLoad1;
 vo.carLoadUpper=carLoad2;
 vo.isLongCar=isLongCar;
 
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
 if (!carType || carType == "null") {carType=""; delete vo.carType;}
 if (!carSourceType || carSourceType == "null") {carSourceType=""; delete vo.carSourceType;}
 if (!carLength1 || carLength1== "null") {carLength1="";delete vo.carLengthLower;}
 if (!carLength2 || carLength2== "null") {carLength2="";delete vo.carLengthUpper;}
 if (!carLoad1 ||carLoad1== "null") {carLoad1="";delete vo.carLoadLower;}
 if (!carLoad2 ||carLoad2== "null") {carLoad2="";delete vo.carLoadUpper;}
 if (!isLongCar ||isLongCar== "null") {isLongCar="";delete vo.isLongCar;}
 
 $("#list_nav_a").html(startc+starta+" 到 "+endc+enda+" 车源信息")
if((!startc&&!starta)||(!endc&&!enda)){$("#list_nav_a").html(startc+starta+"  "+endc+enda+"车源信息")}

 $("#carLineFrom input").citypicker({
  province: startp,
  city: startc,
  district: starta
});
$("#carLineTo input").citypicker({
  province: endp,
  city: endc,
  district: enda
}); 
$('#tjcx_01 .all').attr("href",UrlUpdateParams(window.location.href, "carType", ""));
$('#tjcx_02 .all').attr("href",UrlUpdateParams(window.location.href, "carSourceType", ""));
$('#tjcx_03 .all').attr("href",UrlUpdateParams(window.location.href, "isLongCar", ""));
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
			var list1 = [],list2 = [];
			$('#carLineFrom .select-item').each(function (i,e) {
				list1.push($(this).text())
			});
			var startp =list1[0];
			var startc =list1[1];
			var starta =list1[2];

			$('#carLineTo .select-item').each(function (i,e) {
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


 window.location='/cheyuan?startp='+startp+'&startc='+startc+'&starta='+starta+'&endp='+endp+'&endc='+endc+'&enda='+enda;
     

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
	var myurl1=UrlUpdateParams(window.location.href, "isLongCar", '1');
	var myurl2=UrlUpdateParams(window.location.href, "isLongCar", '0');
	$("#tjcx_03 a:eq(1)").attr("href",myurl1);
	$("#tjcx_03 a:eq(2)").attr("href",myurl2);
		$("#tjcx_03 a").each(function(){
		var aaa=window.location.href;
		
		if(aaa.indexOf('isLongCar=1')!=-1){
			$("#tjcx_03 a").removeClass("now");
			$("#tjcx_03 a:eq(1)").addClass("now");}
		if(aaa.indexOf('isLongCar=0')!=-1){
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
				var browseNumber=datas[i].browseNumber;
				var collectNum=datas[i].collectNum;
				if(!browseNumber){browseNumber=0}
				if(!collectNum){collectNum=0}
			if(!datas[i].usualPlace){var usualPlace=""}
				var usualPlace=datas[i].usualPlace.substring(0,12);
				
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
				
				    var startTime = datas[i].startTime;
				    if(startTime){startTime=startTime.substring(0,10)}

				    
				var arcurl="/cyxx/2018/0508/5.html?id="+id+"&driverId="+driverId;
				
				$("#nr0511").html(start);
				$("#nr0512").html(end);			
				$("#nr0513").html('<b>'+carLoad+'</b>吨');
				$("#nr0514").html('<b>'+carLength+'</b>米');
				$("#nr0515").html(carSourceTypeName);
				$("#nr0516").html(carTypeName);
				$("#nr0517").html(usualPlace);
				$("#nr0518").html(startTime);
				$("#nr0519").attr("href",arcurl);
				$("#nr0500").attr("href",arcurl);
				$("#tj101").html(collectNum);
				$("#tj102").html(browseNumber);
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
				var collectNum=datas[i].collectNum;
				if(!collectNum){collectNum=0}
				var driverId=datas[i].driverId;
				var carLoad=datas[i].carLoad;
				var carNum=datas[i].carNum;
				var createrName=datas[i].createrName;
				if(!createrName){createrName=""}
				var carNum=carNum.substring(0,2)+"***"+carNum.substring(6,10);
				var remark=datas[i].remark;
				if(remark&&remark.length>19){var remark=datas[i].remark.substring(0,19)+"...";}
				var carLength=datas[i].carLength;
				var carSourceTypeName=datas[i].carSourceTypeName;
				var browseNumber=datas[i].browseNumber;
				if(!browseNumber){browseNumber=0}
				
				var carTypeName=datas[i].carTypeName;
				if(!datas[i].usualPlace){var usualPlace=""}
				var usualPlace=datas[i].usualPlace.substring(0,12);
				var title=datas[i].title;
				
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
                $("#nr_a51_1").html(start);
                $("#nr_a51_2").html(end);
                $("#nr_a52").attr("href",arcurl);
                $("#nr051").html(carNum);
                $("#nr052").html(carTypeName);
                $("#nr053").html("长"+'<b>'+carLength+'</b>米');
                $("#nr054").html("载重"+'<b>'+carLoad+'</b>吨');
                $("#nr055").html(carSourceTypeName);
                $("#nr056").html(usualPlace);
                $("#nr057").html(expectPrice+"元");
                if(!expectPrice){$("#nr057").html("面议");}
                $("#nr058").html(remark);
                $("#nr059").html(createrName);
                $("#nr0510").html("发布时间："+createTime); 
                $("#nr0520").html(collectNum);
                $("#nr0521").html(browseNumber);
                $("#nr_a53").attr("href","tencent://message/?uin="+qq+"&Site=&menu=yes");
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


