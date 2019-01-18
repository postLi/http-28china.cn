
//获取参数的值
function GetQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(t);return null!=s?unescape(s[2]):null}
var uid=myurl.split(/member\/|-|.html/)[1];

//获取参数的值
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





var startp= decodeURI(startp1);
var endp= decodeURI(endp1);
var startc= decodeURI(startc1);
var endc= decodeURI(endc1);
var starta= decodeURI(starta1);
var enda= decodeURI(enda1);






vo = new Object();
vo.startProvince=startp;
vo.startCity=startc;
vo.startArea=starta;
vo.endProvince=endp;
vo.endCity=endc;
vo.endArea=enda;
vo.queryType=2;

var obj2=new Object();
obj2=get_huo(1);
vo.shipperId=obj2.shipperId;

 if (!startp || startp== "null") {startp="";delete vo.startProvince;}
 if (!startc || startc== "null") {startc="";delete vo.startCity;}
 if (!starta || starta== "null") {starta="";delete vo.startArea;}
 if (!endp || endp== "null") {endp="";delete vo.endProvince;}
 if (!endc || endc== "null") {endc="";delete vo.endCity;}
 if (!enda || enda== "null") {enda="";delete vo.endArea;}
 



 
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


//排序点击 S
 $("#seq0").click(	
    	function(){
    		console.log("clear排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice; 
    huo_list(1);
    
    })
  $("#seq1").click(	
    	function(){
    		console.log("orderNumber排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice; 
    delete vo.defaultSort;
    vo.orderNumber=1;
    huo_list(1);
    })
    $("#seq2").click(	
    	function(){
    		console.log("transportAging排序")
    delete vo.orderNumber;
    delete vo.transportAging;
    delete vo.weigthPrice;
    delete vo.lightPrice; 
    delete vo.defaultSort;
    vo.transportAging=1;
    huo_list(1);
    })


//货源搜索 S
    $("#search_huoyuan1").click(
    	
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
     window.location=uid+'-huo.html?startp='+startp+'&startc='+startc+'&starta='+starta+'&endp='+endp+'&endc='+endc+'&enda='+enda;
    })


    $("#search_huoyuan2").click(
    	
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
     window.open('/plus/list.php?tid=2&startp='+startp+'&startc='+startc+'&starta='+starta+'&endp='+endp+'&endc='+endc+'&enda='+enda);
    })


//搜索 E

 //通过账号获取专线公司id S
function get_huo(currentPage){
var totalPage=10;
var shipperId;
	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
	    async:false,
		url:"/api/aflc-portal/portalt/aflcLogisticsCompany/v1/findByAccount/"+uid,
		
		success:function(res){
		   
		   var datas = res.data;	
		   var id = datas.id;
		   if(id){ 
		   	shipperId=id;
		   	totalPage=huo_list(id,currentPage);
		
		   
		   }
		  console.log('totalPage='+totalPage)
	

			

			
				 
							
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
return {totalPage:totalPage,shipperId:shipperId};
	}
//get_huo(1);
//通过账号获取专线公司id E
//物流公司网站货源列表S
function huo_list(shipperId,currentPage){
var totalPage=1;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/order/fclOrder/v1/getLogisticsCompanyOrderList",
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
			$("#js005 .hy_item").not(":eq(0)").remove();
		 if(res.data){
		  totalPage=res.data.totalPage;
		  console.log(totalPage);}
					if(!res.data||res.data.list==""){
				$('.huo_none').css("display","block")
				var totalPage=1;
				return}
			var datas = res.data.list;	
			for(var i=0;i<datas.length;i++){	
				var id=datas[i].id;
				var shipperId=datas[i].shipperId;
				var account=datas[i].account;
				var qq=datas[i].qq;
				var goodsNum=datas[i].goodsNum;
				var totalAmount=datas[i].totalAmount;
				var startProvinceCityArea=datas[i].startProvinceCityArea.substring(3,9);
				var endProvinceCityArea=datas[i].endProvinceCityArea.substring(3,9);
				var goodsName=datas[i].goodsName;
				if(goodsName.length>4){goodsName=goodsName.substring(0,4)+".."}
				var goodsWeight = datas[i].goodsWeight;
				var goodsVolume = datas[i].goodsVolume;
				if(goodsNum.length>4){goodsNum=goodsNum.substring(0,4)+".."}
				if(goodsWeight.length>4){goodsWeight=goodsWeight.substring(0,4)+".."}
				if(goodsVolume.length>4){goodsVolume=goodsVolume.substring(0,4)+".."}
				var companyName =datas[i].companyName;
				var orderTypeName=datas[i].orderTypeName;
				
				var wlName=datas[i].wlName;
				var shipperName=datas[i].shipperName;
				var updateTime1 = datas[i].updateTime;
				var updateTime2 =new Date(updateTime1);
				var mouth=updateTime2.getMonth();
				var day=updateTime2.getDay();
				var updateTime=mouth+"-"+day;
				var browseNumber=datas[i].browseNumber;
				if(!browseNumber){browseNumber=0}	    
		        var  url="/huoyuan/2018/0508/2.html?id="+id+"&shipperId="+shipperId;
		       
                $("#nr041").attr("href",url);
                $("#nr042").html(startProvinceCityArea);
                $("#nr043").html(endProvinceCityArea);
                 $("#nr044").html(goodsName);
                 $("#nr045").html(goodsNum);
                 $("#nr046").html(goodsWeight);
                 $("#nr047").html(goodsVolume+"立方");
                 $("#nr0410").attr("href",url);
                 $("#nr048").html(browseNumber);

                
                
				 var s1='<div class="hy_item">'
				 var s2=$(".hy_item").html();	
				 var s3='</div>'
				 $("#js005").append(s1+s2+s3);		 
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	return totalPage;
	}
//huo_list();
//物流公司网站货源列表 E

