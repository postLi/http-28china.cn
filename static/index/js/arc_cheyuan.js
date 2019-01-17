//获取参数的值
function GetQueryString(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),s=window.location.search.substr(1).match(t);return null!=s?unescape(s[2]):null}
var aid=GetQueryString("id");
var driverId=GetQueryString("driverId");

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

//找专线/货源/车源 S
$('.arc_input3').click(function(){
var search_type=$('#search_type option:selected').attr("name");
var start=$('.arc_input1').val();
var end=$('.arc_input2').val();
console.log("搜索类型："+search_type+"出发地："+start+"到达地："+end);	
if(search_type=='zx'){
	window.open('/plus/list.php?tid=4&start='+start+'&end='+end);
}
if(search_type=='huo'){
	window.open('/plus/list.php?tid=2&start='+start+'&end='+end);
}
if(search_type=='che'){
	window.open('/plus/list.php?tid=3&start='+start+'&end='+end);
}
	
})


//找专线/货源/车源 E

//车源信息详情页 S
function cy1(){

	$.ajax(
		{
		type:"get",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcCarInfo/v1/getDetail/"+aid,
		
		success:function(res){

			var datas = res.data;
			var startProvince=datas.startProvince;
			var endProvince=datas.endProvince;		
			var startCity=datas.startCity;
			var endCity=datas.endCity;
			var startArea=datas.startArea;
			var endArea=datas.endArea;
			//获取目的地城市
		  var code=getcode(endProvince);
		   getcity_che(code,startCity);

	  var isLongCar=datas.isLongCar;
	  if(isLongCar==1){isLongCar=" (即时车源)"}
	  if(isLongCar==0){isLongCar=" (长期车源)"}
	  $("#nr0641").html(isLongCar);
	
		var createTime1 = datas.startTime;
			  var updateTime=formatDate(new Date(createTime1));
				if (updateTime.indexOf("1970")!=-1){updateTime=""}

			var strartAddress=datas.strartAddress.substring(0,17);
			var endAddress=datas.endAddress.substring(0,17);
			
		    var title=startCity+startArea+"&nbsp;&rarr;&nbsp;"+endCity+endArea;
				
			var expectPrice=datas.expectPrice;
			var carSourceTypeName=datas.carSourceTypeName;
			var carTypeName=datas.carTypeName;
			var carLoad=datas.carLoad;
			var carLength=datas.carLength;
			var viaAddress=datas.viaAddress;
			if(!viaAddress){viaAddress="暂无"}
			var belongDriver=datas.belongDriver;
			var phone=datas.phone;
			var creater=datas.creater;
			var browseNumber=datas.browseNumber;
				if(!browseNumber){browseNumber=0}
			var carTagName=datas.carTagName;
			if(!carTagName){carTagName=""}
			var remark=datas.remark;
			if(!remark){remark=""}
			var carNum=datas.carNum;
			var carNum=carNum.substring(0,2)+"***"+carNum.substring(6,10);
			var usualPlace=datas.usualPlace;
			if(usualPlace){usualPlace=usualPlace.substring(0,10)}
			var qq=datas.qq;
			if(!qq){$('#qq').css("display","none");}
			var driverStatus=datas.driverStatus;
	       if(driverStatus!="AF0010403"){console.log("is not shiming");
		   $('#right_shiming').css("display","none")}
	           if(driverStatus!="AF0010403"){
            	$('.arc_right07').html("<br/>暂无认证信息")}
			
		  var carFile=datas.carFile;
		  var carFile1=datas.carFile.split(",")[0]; 
		  var carFile2=datas.carFile.split(",")[1];
		  var carFile3=datas.carFile.split(",")[2];
		  if(carFile1=="vestCarSourceFile"){carFile1=""}
		  var src1="/templets/default/images/pic/bg1.png";
		  if(!carFile1){
		  $("#nr0631").attr("src",src1);$("#nr0632").attr("src",src1);
		  }
		  if(!carFile2){ $("#nr0633").css("display","none");}
		  if(!carFile3){ $("#nr0634").css("display","none");}
		  if(carFile1){$("#nr0631").attr("src",carFile1);$("#nr0632").attr("src",carFile1);}
		  if(carFile2){$("#nr0633").attr("src",carFile2);}
          if(carFile3){$("#nr0634").attr("src",carFile3);}
			
			if(datas.driverDesc==null)
				{var driverDesc="暂未填写简介信息！"}
				else{var driverDesc=datas.driverDesc.substring(0,400);}
	
           
           
           
			$("#nr060").html(title);
			$("#nr061").html(strartAddress+"&nbsp;&rarr;&nbsp;"+endAddress);
            $("#nr062").html("&yen;&nbsp;"+expectPrice);
            if(!expectPrice){$("#nr062").html("面议")}
            $("#nr063").html(carSourceTypeName);
            $("#nr064").html(carTypeName);
            $("#nr065").html(carLoad+"吨");
            $("#nr066").html(carLength+"米");
            $("#nr067").html(viaAddress);
            $("#nr068").html(updateTime);
            $("#nr069").html(belongDriver);
            $("#nr0610").html(phone);
            $("#nr0611").html(carTagName+'|'+remark.substring(0,30));
            $("#nr0612").html(carNum);
            $("#nr0613").html(usualPlace);
            $("#nr0614").html(carLength+"米");
            $("#nr0615").html(carTypeName);
            $("#nr0616").html(carLoad+"吨");
            $("#nr0617").html(belongDriver);
            $("#nr0618").html(phone);
            $("#nr0619").attr("href","http://wpa.qq.com/msgrd?v=3&uin="+qq+"&site=qq&menu=yes");
            $("#nr0629").html(driverDesc);
            $("#nr0699").html(browseNumber);
            
            $('#arc_nav_a1').html(startCity+"到"+endCity+"车源信息")
            $('#arc_nav_a2').html(startCity+startArea+"到"+endCity+endArea+"车源信息")
            $('#arc_nav_a1').attr("href",'/plus/list.php?tid=3'+'&startp='+startProvince+'&startc='+startCity+'&endp='+endProvince+'&endc='+endCity)
            $('#arc_nav_a2').attr("href",'/plus/list.php?tid=3'+'&startp='+startProvince+'&startc='+startCity+'&starta='+startArea+'&endp='+endProvince+'&endc='+endCity+'&enda='+endArea)
            cy2(driverId,endCity,startCity);

				
				
			
				
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}
cy1();
//车源信息详情页 E

//路线其他车源信息 S
function cy2(driverId,endCity,startCity){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcCarInfo/v1/getOtherCarSourceList",
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:1,
			pageSize:7,
			vo:{
	"noId":aid,
  	"endAddress":endCity,
  	"strartAddress":startCity
			}			//JSON.stringify({})
		}		
		),	
		success:function(res){
			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){
				var id=datas[i].id;	
				var driverId=datas[i].driverId;
				    var createTime1 = datas[i].createTime;
				    var createTime2 =new Date(createTime1);
				    var year=createTime2.getFullYear();
				    var mouth=createTime2.getMonth()+1;
				    var day=createTime2.getDay();
				    var  Hours=createTime2.getHours();
				    var Minutes=createTime2.getUTCMinutes();
				    var createTime=year+"-"+mouth+"-"+day+" "+Hours+":"+Minutes;
				var startCity=datas[i].startCity;
				var endCity=datas[i].endCity;

				
				if(startCity==null){startCity="";console.log('startCity')}
				if(endCity==null){endCity="";console.log('endCity')}

				var carLoad = datas[i].carLoad;
			    var carLength = datas[i].carLength;
				var carSourceTypeName=datas[i].carSourceTypeName;
				var carTypeName = datas[i].carTypeName;
                var usualPlace=datas[i].usualPlace;
                if(usualPlace.length>11){
                	var usualPlace=usualPlace.substring(0,11)+".."
                }
                
                var driverStatus=datas[i].driverStatus;
		        var arcurl="/cyxx/2018/0508/5.html?id="+id+"&driverId="+driverId;
		        

		        $("#nr0620").html(startCity);
		        $("#nr0621").html(endCity);
		        $("#nr0622").html(carLoad+"吨");
		        $("#nr0623").html(carLength+"米");
		        $("#nr0624").html(carSourceTypeName);
		        $("#nr0625").html(carTypeName);
		        $("#nr0626").html(usualPlace);
		        $("#nr0627").html(createTime);
		        $("#nr0628").attr("href",arcurl);

				 var s1='<div class="tj_list tj_list'+i+'">'
				 var s2=$("#js008 .tj_list").html();
				 var s3='</div>'
				 $("#js008").append(s1+s2+s3);	
				  if(driverStatus!="AF0010403"){console.log("is not shiming");
		  $('.tj_list'+i+'  #tj_shiming').css("display","none")}
			}
			    console.log("长度"+$('.tj_list').length);
					if($('.tj_list').length>=10){
				$('.arc_bottom_more').css("display","block");
				$('#arc_bottom_more').attr("href","/plus/list.php?tid=3&start="+startCity+"&end="+endCity)
				}
				if($('.tj_list').length==1){
				$('.arc_bottom').css("display","none");
				}
							
	     
				
		},error:function(err){
			console.log(err.responseText);
		}
		})
	}
//cy2();
//路线其他车源信息 E



//车主其他求货信息 S
function cy3(current){
var totalPage=8;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcCarInfo/v1/getOtherCarInfoList",
		dataType: "json",
		async:false,
		data:JSON.stringify(
			{
			currentPage:current,
			pageSize:5,
			vo:{

    "driverId": driverId,
    "id":aid
			}			//JSON.stringify({})
		}		
		),	
		success:function(res){
			$("#js012 .arc_list_item").not(":eq(0)").remove();

		  if(!res.data||!res.data.totalCount){ 
				console.log("内容为空")
				$(".box").css("display","none")
				$("#js012").html("<div class='arc_none'>暂无其他求货信息</div>");
				return ;
		  }
		  
		  totalPage=res.data.totalPage;
		  console.log(totalPage);
			var datas = res.data.list;	
			for(var i=0;i<datas.length;i++){
				var id=datas[i].id;	
				var driverId=datas[i].driverId;
				    var startTime= datas[i].startTime;
				    if(!datas[i].startTime){var startTime="" }
				var strartAddress = datas[i].strartAddress.substring(0,10);
				var endAddress = datas[i].endAddress.substring(0,10);
				var carNum=datas[i].carNum;
			    var carNum=carNum.substring(0,2)+"***"+carNum.substring(6,10);
				var carLoad = datas[i].carLoad;
			    var carLength = datas[i].carLength;
				var carSourceTypeName=datas[i].carSourceTypeName;
				var carTypeName = datas[i].carTypeName;
                var usualPlace=datas[i].usualPlace;
                
		        var arcurl="/cyxx/2018/0508/5.html?id="+id+"&driverId="+driverId;
		        
		        $("#nr1000").html(strartAddress+"&nbsp;&rarr;&nbsp;"+endAddress);
		         
		        $("#nr1002").html(carNum);
		        $("#nr1003").html(carTypeName);
		       
		        $("#nr1004").html("长"+carLength+"米");
		        $("#nr1005").html("载重"+carLoad+"吨");
		        $("#nr1006").html(carSourceTypeName);
		        $("#nr1007").html(startTime);
		        $("#nr1008").attr("href",arcurl);
                $("#nr1000").attr("href",arcurl);
				 var s1='<div class="arc_list_item">';
				 var s2=$("#js012 .arc_list_item").html();
				 var s3='</div>';
				 $("#js012").append(s1+s2+s3);	
				 
			}
				
		},error:function(err){
			console.log(err.responseText);
		}
		})
	console.log("最终总页数："+totalPage)
	return totalPage;
	}
//cy3(1);
//车主其他求货信息 E