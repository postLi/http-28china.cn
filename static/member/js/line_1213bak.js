
//获取参数的值
function GetQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(t);return null!=s?unescape(s[2]):null}
//var uid=GetQueryString("uid");
var uid=myurl.split(/member\/|-|.html/)[1];



//通过账号获取专线公司id S
function process1(currentPage){
var totalPage=10;
	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcLogisticsCompany/v1/findByAccount/"+uid,
		async:false,
		success:function(res){
		   
		   var datas = res.data;	
		   var id = datas.id;
		   if(id){ 
		   	totalPage=process02(id,currentPage);
		   }
		  
	

			

			
				 
							
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	console.log('totalPage:'+totalPage)
	return totalPage;
	}
process1(1);
//通过账号获取专线公司id E





//物流专线 栏目列表S
function process02(companyId,currentPage){
var totalPage=10;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcTransportRange/v1/findCompanyRanges",
		dataType: "json",
		async:false,
		data:JSON.stringify(
			{
			currentPage:currentPage,
			pageSize:10,
			vo:{
				"companyId": companyId
				//"companyId": "50a3c7ce87fe4a098bb56e1af0cde06e"
			}			//JSON.stringify({})
		}		
		),	
		success:function(res){
			$("#js003 .line_item").not(":eq(0)").remove();
			
					   if(res.data){
		  totalPage=res.data.totalPage;
		  console.log(totalPage);}

			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){
				var plength=datas[i].rangePrices.length;
				console.log(plength);
				for(var j=0;j<plength;j++){
					var qhjg;
					var zhjg;
					var ptype;
					var startVolume=datas[i].rangePrices[j].startVolume;
					if(startVolume==0){
						ptype=datas[i].rangePrices[j].type;
					if (ptype==0){
						qhjg=datas[i].rangePrices[j].discountPrice;
					}
					if (ptype==1){
						zhjg=datas[i].rangePrices[j].discountPrice;
					}
					}
					
						}
				
	
				var id=datas[i].id;
				var companyId=datas[i].companyId;
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
                var transportAging=datas[i].transportAging;
                var transportAgingUnit=datas[i].transportAgingUnit;
				var lowerPrice=datas[i].lowerPrice;
				var startLocationContacts=datas[i].startLocationContacts;
				var startLocationContactsMobile=datas[i].startLocationContactsMobile;
				var arcurl="/zhuanxian/detail?id="+id+"&publishId="+companyId; 
				var orderurl="/member/index.php?uid="+uid+"&action=order"+"&id="+id+"&publishId="+companyId;
				$("#fahuo").attr("onclick","window.open('"+orderurl+"')")
				$("#nr021").attr("href",arcurl);
				$("#nr029").attr("href",arcurl);
				$("#nr022").html(start);
				$("#nr023").html(end);
				$("#nr024").html(zhjg);
				$("#nr025").html(transportAging+transportAgingUnit);
				if(!transportAging||!transportAgingUnit){$("#nr025").html("暂无")}
				$("#nr026").html(qhjg);
				$("#nr027").html(lowerPrice);
				if(!lowerPrice || lowerPrice==0){$("#nr027").html("面议");}
				$("#nr0210").attr("href",arcurl);
				 var s1='<div class="line_item">'
				 var s2=$(".line_item").html();	
				 var s3='</div>'
				 $("#js003").append(s1+s2+s3);		 
			}				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	return totalPage;
	}
//process02();
//物流专线栏目列表 E


