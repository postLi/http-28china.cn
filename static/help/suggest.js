 var SUG_API = {
 
    url: '/api',
checkVcode: function(code){
      return $.get(this.url + '/aflc-common/common/aflcMemberCenter/v1/checkImageCode/' + code)
    }
}
//更换图形验证码 S
var src='/api/aflc-common/common/aflcMemberCenter/v1/getImageCode?imageWidth=90&imageHeight=25'
$('#form_yzm').attr("src",src);
//alert(1);
$('#form_yzm').click(function(){
	$('#form_yzm').attr("src",src)
})
$('#change_yzm').click(function(){
	$('#form_yzm').attr("src",src)
})

$('#jy_tj').click(function(){
	var nr1= $("#form_bt").val();
    var nr3= $("input[type='radio']:checked").val();
    if(nr3=="建议"){nr2=0}
    if(nr3=="投诉"){nr2=1}
    var nr4= $("#form_name").val();
    var nr5= $("#form_phone").val();
    var nr6= $("#form_email").val();
    var nr7= $("#form_orderSerial").val();
    var nr8= $("#form_nr").val();
    var nr9= $("#form_yzm_nr").val();
    if(!nr1){layer.msg('标题不能为空'); return;}
    if(!nr3){layer.msg('请选择留言类型');return;}
    if(!nr8){layer.msg('请输入留言内容');return;}
    if(!nr9){layer.msg('请输入验证码');return;}
    
    
    if(nr1&&nr8&&nr3&&nr9){
    	console.log(nr1+":"+nr2+":"+nr3+":"+nr4+":"+nr5+":"+nr6+":"+nr7+":"+nr8);
    	 SUG_API.checkVcode($('#form_yzm_nr').val()).always(function(res){
      	 	var status=res.status;
    	  if($('#form_yzm_nr').val()){
       
        	if(status === 200){
    process01(nr1,nr2,nr3,nr4,nr5,nr6,nr7,nr8);
	alert("提交成功！")
	window.location.reload();}
        	else { 
    
        console.log('status:'+status)
 
        $('#form_yzm').attr("src",src);
                layer.msg('请输入正确的验证码');
         //alert('请输入正确的验证码');
        	
        	}    
        
      } else {
        $('#form_yzm').attr("src",src);
         layer.msg('请输入验证码');
        
       
      }
    	})	
	}	
})

//更换图形验证码 E


 $("#form_bt").keyup(
    	function(){
    		var nr1= $("#form_bt").val();
    		if(nr1.length>60){
    			nr1=nr1.substring(0,60);
    			$("#form_bt").val(nr1);
    			$("#form_bt_sm").css("display","inline");
    			$("#form_bt").css("border-color","#eb434d");	
    		}
	    		if(nr1.length<60){
	    		$("#form_bt_sm").css("display","none");
    			$("#form_bt").css("border-color","#e2e2e2");	
    		}
    		
    	})


//提交按钮颜色
 $(".jy_form input,.jy_form textarea").keyup(
    	function(){
    		var nr1= $("#form_bt").val();
    		var nr2= $("#form_nr").val();
    		var nr3= $("input[type='radio']:checked").val();
    		var nr4= $("#form_yzm_nr").val();
    		//alert(nr3)
    		if(nr1&&nr2&&nr3&&nr4){
    			//alert("有内容");
    			$("#jy_tj").css("background-color","#eb434d");
    			
    			
    		}
    		if(!nr1||!nr2||!nr3||!nr4){
    			//alert("有内容");
    			$("#jy_tj").css("background-color","#ccc");
    
    			
    		}
    				
    		
    	})

//新增投诉建议 S
function process01(title,platformOrderType,complainTypeName,complainName,phone,email,orderSerial,complainDes){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcOrderComplain/v1/addComplain/99999",
		dataType: "json",
		data:JSON.stringify(
			{
			"title":title,"platformOrderType":platformOrderType,"complainTypeName":complainTypeName,"complainName":complainName,"phone":phone,"email":email,"orderSerial":orderSerial,"complainDes":complainDes
		}		
		),	
		success:function(res){
		
		//alert("提交成功!");
				  
						
		},error:function(err){
			//alert("error");
			console.log(err.responseText);
		

		}
		})
	}

//新增投诉建议 E

//投诉列表 S
function process02(currentPage){
var totalPage=8;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcOrderComplain/v1/listComplain",
		async:false,
		dataType: "json",
		data:JSON.stringify(
			{
			currentPage:currentPage,
			pageSize:20,
			vo:{}			//JSON.stringify({})
		}		
		),	
		success:function(res){
			//alert("success");
			 $("#js020 .jy_nr_item").not(":eq(0)").remove();

		  if(!res.data){return;}
		  totalPage=res.data.totalPage;
		  console.log(totalPage);
			var datas = res.data.list;			
			for(var i=0;i<datas.length;i++){
				
				//alert(1);
	
	
var orderSerial=datas[i].orderSerial;
if(orderSerial){orderSerial=orderSerial.substring(0,20);
	if(orderSerial.length>7){orderSerial=orderSerial.substring(0,4)+"****"+orderSerial.substring(8,20)}
	
	
	
}
//if(orderSerial.length){console.log(orderSerial.length)}
var complainName=datas[i].complainName;
if(complainName){complainName=complainName.substring(0,1)+"*"+complainName.substring(2,3)}
var complainDes=datas[i].complainDes;
var complainStatusName=datas[i].complainStatusName;
var reply=datas[i].reply;
var complainTime=datas[i].complainTime;
var platformTime=datas[i].platformTime;
$("#nr1101").html("运单号："+orderSerial);
$("#nr1102").html(complainName);
$("#nr1103").html(complainDes);
$("#nr1106").html("状态："+complainStatusName);
$("#nr1104").html(complainTime);
$("#nr1105").html(reply);
$("#nr1107").html(platformTime);

	
				 var s1='<div class="jy_nr_item jy_nr_item_'+i+'">';
				 var s2=$(".jy_nr_item").html();	
				 var s3='</div>'
				$("#js020").append(s1+s2+s3);	
if(reply){
$(".jy_nr_item_"+i+" .jy_nr_item4").css("display","block");
//alert(".jy_nr_item_"+i+" .jy_nr_item4");
}
			}				
		},error:function(err){
			alert("error");
			console.log(err.responseText);
		

		}
		})
	console.log("最终总页数："+totalPage)
	return totalPage;
	}
process02(1);
//投诉列表 E