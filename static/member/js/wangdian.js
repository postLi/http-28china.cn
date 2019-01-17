//获取参数的值
function GetQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(t);return null!=s?unescape(s[2]):null}
//var uid=GetQueryString("uid");
var uid=myurl.split(/member\/|-|.html/)[1];

console.log('uid='+uid)
function GetUrlParam(name){
          var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
          var r = encodeURI(window.location.search).substr(1).match(reg);
          if(r!=null)return unescape(r[2]); return null;
        }
var startp1=GetUrlParam("startp");
var startc1=GetUrlParam("startc");
var starta1=GetUrlParam("starta");
var address1=GetUrlParam("address");

var startp=decodeURI(startp1)
var startc= decodeURI(startc1);
var starta= decodeURI(starta1);
var address= decodeURI(address1);
vo=new Object();
vo.address=address;
 if (!startp || startp== "null") {startp="";}
 if (!startc || startc== "null") {startc="";}
 if (!starta || starta== "null") {starta="";}
 if (!address || address== "null") {address="";delete vo.address;}
 
 
 $(".search_input3 input").citypicker({
  province: startp,
  city: startc,
  district: starta
});
//网点搜索 S

    $(".search_search").click(
    	function(){ 

     
  	var list1 = [];
	$('.search_input3 .select-item').each(function (i,e) {
				list1.push($(this).text())
			});
			var startp =list1[0];
			var startc =list1[1];
			var starta =list1[2];
 if(!startp){startp=""}
 if(!startc){startc=""}
 if(!starta){starta=""}
   var pca='&startp='+startp+'&startc='+startc+'&starta='+starta;
    var address=startp+startc+starta;
    var address="&address="+address; 
       if(!address){address=""}
      address=encodeURI(address)
     window.location='/member/'+uid+'-wangdian.html?'+address+pca;
    })


//网点搜索 E



//通过账号获取专线公司id S
function process1(currentPage){
var totalPage=0;
	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcLogisticsCompany/v1/findByAccount/"+uid,
		
		success:function(res){
		   if(!res.data){return ;}
		   var datas = res.data;
		   
		   var id = datas.id;
		   if(id){ 
		   		totalPage=process02(id,currentPage,address);}
		  
	

			

			
				 
							
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	return totalPage;
	}
process1(1);
//通过账号获取专线公司id E


//物流专线 网点列表S
function process02(companyId,currentPage,address){
var totalPage=10;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcPointNetwork/v1/listDetailPointNetwork",
		dataType: "json",
	    async:false,
		data:JSON.stringify(
			{
			currentPage:currentPage,
			pageSize:10,
			vo:{

       "companyId":companyId,"address":address
				
			}			//JSON.stringify({})
		}		
		),	
		success:function(res){
			$("#js004 .wd_item").not(":eq(0)").remove();
			if(!res.data||res.data.list==""){
				
				$('.wd_none').css("display","block")
			}
			
			   if(res.data){
		  totalPage=res.data.totalPage;
		  console.log(totalPage);}
			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){
	            var pointName=datas[i].pointName;
	            if(pointName.length>10){pointName=pointName.substring(0,10)+".."}
				var companyName=datas[i].companyName;
				var name=datas[i].name;
				var mobile=datas[i].mobile;
				var belongCityName=datas[i].belongCityName;
				var address=datas[i].address;
				if(address.length>14){address=address.substring(0,14)+".."}
				var telNum=datas[i].telNum;
				var creater=datas[i].creater;
				$("#nr031").html(pointName);
				$("#nr032").html(belongCityName);
				$("#nr033").html(name);
				$("#nr034").html(mobile);
			 if(address.indexOf(belongCityName!=-1)){address=address.replace(belongCityName,'')}
				$("#nr035").html(address);
        
		
				 var s1='<div class="wd_item">'
				 var s2=$(".wd_item").html();	
				 var s3='</div>'
				 $("#js004").append(s1+s2+s3);		 
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	return totalPage;
	}
//process02();
//物流专线网点列表 E

