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
var startc1=GetUrlParam("startc");
var starta1=GetUrlParam("starta");
var address1=GetUrlParam("address");
var companyName1=GetUrlParam("companyName");
var authStatus1=GetUrlParam("authStatus");
var belongBrandCode1=GetUrlParam("belongBrandCode");
var otherServiceCode1=GetUrlParam("otherServiceCode");

var orderNumber=GetUrlParam("orderNumber");
var transportAging=GetUrlParam("transportAging");
var weigthPrice=GetUrlParam("weigthPrice");
var lightPrice=GetUrlParam("lightPrice");

var startp=decodeURI(startp1)
var startc= decodeURI(startc1);
var starta= decodeURI(starta1);
var address= decodeURI(address1);
var companyName= decodeURI(companyName1);
var authStatus= decodeURI(authStatus1);
var belongBrandCode= decodeURI(belongBrandCode1);
var otherServiceCode= decodeURI(otherServiceCode1);

var orderNumber= decodeURI(orderNumber);
var transportAging= decodeURI(transportAging);
var weigthPrice= decodeURI(weigthPrice);
var lightPrice= decodeURI(lightPrice);

var currentAreaFullName = $.cookie('currentAreaFullName');
var currentProvinceFullName=$.cookie('currentProvinceFullName');

vo = new Object();
vo.startProvince=startp;
vo.startCity=startc;
vo.startArea=starta;
vo.address=address;
vo.companyName=companyName;
vo.authStatus=authStatus;
vo.belongBrandCode=belongBrandCode;
vo.otherServiceCode=otherServiceCode;

vo.orderNumber=orderNumber;
vo.transportAging=transportAging;
vo.weigthPrice=weigthPrice;
vo.lightPrice=lightPrice;




 if(startp||startc){
 	if(!startp || startp== "null")  {startp="";delete vo.startProvince;}
 	if(!startc || startc== "null")  {startc="";delete vo.startCity;}
 }
 if ((!startp || startp== "null")&&(!startc || startc== "null")) {
 	startc=currentAreaFullName;vo.startCity=startc;startp=currentProvinceFullName;vo.startProvince=startp; }

 if (!starta || starta== "null") {starta="";delete vo.startArea;}
 if (!address || address== "null") {address="";delete vo.address;}
 if (!companyName || companyName== "null") {companyName="";delete vo.companyName;}
 if (!authStatus || authStatus == "null") {authStatus="";delete vo.authStatus;}
 if (!belongBrandCode || belongBrandCode== "null") {belongBrandCode="";delete vo.belongBrandCode;}
 if (!otherServiceCode || otherServiceCode== "null") {otherServiceCode="";delete vo.otherServiceCode;}
 
 if (!orderNumber || orderNumber== "null") {orderNumber="";delete vo.orderNumber;}
 if (!transportAging || transportAging== "null") {transportAging="";delete vo.transportAging;}
 if (!weigthPrice || weigthPrice== "null") {weigthPrice="";delete vo.weigthPrice;}
 if (!lightPrice || lightPrice== "null") {lightPrice="";delete vo.lightPrice;}
//vo.rangeIds=process01();
 
$("#address input").citypicker({
  province: startp,
  city: startc,
  district: starta
});
$("#list_nav_a").html(startc+starta+"物流公司")
$('#companyName').val(companyName);
if(authStatus){$('.shiming').addClass("now");}
$('#tjcx_02 .all').attr("href",UrlUpdateParams(window.location.href, "belongBrandCode", ""))
$('#tjcx_03 .all').attr("href",UrlUpdateParams(window.location.href, "otherServiceCode", ""))
//清空条件
$("#flush").click(	
    	function(){
    		console.log("清空地址")
    		window.location.href='/gongsi?';
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



//物流公司搜索 S

    $("#search_wlgs").click(
    	
    	function(){
    			var list1 = [],list2 = [];
			$('#address .select-item').each(function (i,e) {
				list1.push($(this).text())
			});
			var startp =list1[0];
			var startc =list1[1];
			var starta =list1[2];
		if(!startp){startp=""}
		 if(!startc){startc=""}
		 if(!starta){starta=""}
      startp=encodeURI(startp)
      startc=encodeURI(startc)
      starta=encodeURI(starta)
      companyName=encodeURI(companyName);
     var address=startp+startc+starta;
     var companyName=$("#companyName").val();
      window.location='/gongsi?startp='+startp+'&startc='+startc+'&starta='+starta+'&address='+address+'&companyName='+companyName;
    })


//物流公司搜索 E
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
			if(!datas){return ;}
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
			$('.shiming').attr("href",'/gongsi?address='+address+'&companyName='+companyName+'&authStatus=AF0010403')
		    if(!datas){return ;}
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
	
	$("#tjcx_03 a").not('.shiming').each(function(){
		var aaa=$(this).attr("href");
		
		if(aaa.indexOf(otherServiceCode) !=-1){
			
			console.log(aaa);
			$("#tjcx_03 a").not('.shiming').removeClass("now");
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
		/*async:false,*/
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
			  if(!res.data){return }
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
                var  credit=datas[i].credit;
				var contactsName = datas[i].contactsName;

				var isVip=datas[i].isVip;
		    var authStatus=datas[i].authStatus;
		    var collateral=datas[i].collateral;
                $("#tj010").attr("href","/member/"+companyId+"");
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
		   	$('.tj_list'+i+' .xy_zuan').css("display","inline")
		  
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
		   	$('.tj_list'+i+' .xy_guan').css("display","inline")
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

//物流公司 栏目列表S
function process02(currentPage){
var totalPage=8;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcLogisticsCompany/v1/listCompanys",
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
				$(".list_none").css("display","block")
				return;
		   }
		  
		  
			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){ 
	    var id=datas[i].id;
				var companyId=datas[i].companyId;
				var account=datas[i].account;
				var companyName=datas[i].companyName;
				if(companyName.length>8){companyName=companyName.substring(0,8)+'..'}
				var contactsName = datas[i].contactsName;
				if(contactsName&&contactsName.length>3){contactsName=contactsName.substring(0,3)+".."}
				
				var contactsTel=datas[i].contactsTel;
				if(!contactsTel){contactsTel=''}
				if(contactsTel.length>12){contactsTel=contactsTel.substring(0,12)+'..'}
				var mobile=datas[i].mobile;
				if(!mobile){mobile=''}
				var reg0=new RegExp(",","g")
				var reg1=new RegExp('\"',"g")
				if (datas[i].productService){
				var productService0=datas[i].productService.replace(reg0," ");
				var productService1=productService0.replace(reg1,"")
				var productService2=productService1.replace("[","")
				var productService=productService2.replace("]","")
				if(productService.length>18){
				 productService=productService.substring(0,18)+".."
				}
				}
				if(!datas[i].productService){var productService=""; }
				if (datas[i].otherService){
				var otherService0=datas[i].otherService.replace(reg0," ");
				var otherService1=otherService0.replace(reg1,"")
				var otherService2=otherService1.replace("[","")
				var otherService=otherService2.replace("]","")
				if(otherService.length>18){
				 otherService=otherService.substring(0,18)+".."
				}
				}
				if(!datas[i].otherService){var otherService=""; }
			    var credit=datas[i].credit;
		   

		
				var qq=datas[i].qq;
				var address=datas[i].address;
				if(address&&address.length>16){
				address=address.substring(0,16)+"..";}
				var isVip=datas[i].isVip;
				var authStatus=datas[i].authStatus;
		    var collateral=datas[i].collateral;
				//var orderurl="/create/order?&uid="+account+"&publishId="+companyId;
				var orderurl="/member/"+companyId+"?action=order"+"&publishId="+companyId;
				var companyFacadeFile=datas[i].companyFacadeFile;
				if(companyFacadeFile){
		   var   companyFacadeFile=datas[i].companyFacadeFile.split(",")[0]; 
		  }
		    var  num0=Math.random();
		    var num=Math.ceil(num0*30);
        var src1="/templets/default/images/pic/bg"+num+".png";
        if(!companyFacadeFile){ $("#nr01").attr("src",src1);}
				if(companyFacadeFile){ 
        $("#nr01").attr("src",companyFacadeFile);
		                }
                  $('#nr02').html(companyName);
                  $('#nr04').html(contactsName);
		          $('#nr05').html(contactsTel+' '+mobile);
		          $('#nr06').html(address);
		          $('#nr07').html(productService);
		          $('#nr08').html(otherService);
		          $('#nr02').attr('href','/member/'+companyId+'')
		          $('#nr_a21').attr('href','/member/'+companyId+'')
		        $("#wlzx_list_view").attr("onclick","window.open('/member/"+account+".html')")
				$("#fahuo").attr("onclick","window.open('"+orderurl+"')")
				$("#nr11").attr("href","http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes");
				 var s1='<ul class="wlzx_list wlzx_list'+i+'">'
				 var s2=$(".wlzx_list").html();	
				 var s3='</ul>'
				 $("#js002").append(s1+s2+s3);	

				 		   if(credit>=0&&credit<=3){
		   	$('.wlzx_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	}
		   if(credit>=4&&credit<=10){
		   	$('.wlzx_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(1)').css("display","inline")
		   	}
		   if(credit>=11&&credit<=40){
		   	$('.wlzx_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(1)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(2)').css("display","inline")
		   	}
		   if(credit>=41&&credit<=90){
		    $('.wlzx_list'+i+' .xy_zuan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(1)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(2)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_zuan:eq(3)').css("display","inline")
		   	}
		   if(credit>=91&&credit<=150){
		   	$('.wlzx_list'+i+' .xy_zuan').css("display","inline")
		   	}
		   
		   
		   if(credit>=151&&credit<=250){
		   	$('.wlzx_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	}
		   if(credit>=251&&credit<=500){
		   	$('.wlzx_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(1)').css("display","inline")
		   	}
		   if(credit>=500&&credit<=1000){
		   	$('.wlzx_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(1)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(2)').css("display","inline")
		   	}
		   if(credit>=1001&&credit<=2000){
		    $('.wlzx_list'+i+' .xy_guan:eq(0)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(1)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(2)').css("display","inline")
		   	$('.wlzx_list'+i+' .xy_guan:eq(3)').css("display","inline")
		   	}
		   if(credit>=2001){
		   	$('.wlzx_list'+i+' .xy_guan').css("display","inline")
		   	}
				 
				 
				 
				  if(collateral>0){
			$('.wlzx_list'+i+' .wlgs_danbao').css("display","inline")}
				 if(isVip==1){
			$('.wlzx_list'+i+' .wlgs_xinyong').css("display","inline")}
	  if(authStatus=="AF0010403"){
	  	console.log("is  shiming");
			$('.wlzx_list'+i+' .wlgs_shiming').css("display","inline")}
	  	if(!qq){
					$('.wlzx_list'+i+' .wlzx_list_2 #nr11 img').css("display","none");
					}
	  
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})	
	console.log("最终总页数："+totalPage)
	return totalPage;
	}
//process02(1);
//物流公司栏目列表 E


