$("#collection_url").attr("href","http://192.168.1.157:9526/carrier/collection")

//收藏 S
function collection_zx(userType,mobile,collectId){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcCollect/v1/collect",
		dataType: "json",
		data:JSON.stringify(
			{
		
 
  "userType":userType,
  "mobile": mobile,
  "collectType": 4,
  "collectId":collectId 
		}		
		),	
		success:function(res){
			if(res.status!=40001){
		$('.collection_zx').css("display","block")
       }
			if(res.status==40001){
					  $('.arc_middle').toast({
			content:'抱歉!系统忙,请稍后再试',
			duration:3000
		});	
			}
						
		},error:function(err){
			
			console.log(err.responseText);
		

		}
		})
	}
function collection_wlgs(userType,mobile,collectId){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcCollect/v1/collect",
		dataType: "json",
		data:JSON.stringify(
			{
		
 
  "userType":userType,
  "mobile": mobile,
  "collectType": 1,
  "collectId":collectId 
		}		
		),	
		success:function(res){
	$('.collection_zx').css("display","block")

						
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}



function collection_hz(userType,mobile,collectId){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcCollect/v1/collect",
		dataType: "json",
		data:JSON.stringify(
			{
		
 
  "userType":userType,
  "mobile": mobile,
  "collectType": 3,
  "collectId":collectId 
		}		
		),	
		success:function(res){
	$('.collection_zx').css("display","block")

						
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}

function collection_cz(userType,mobile,collectId){

	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/portalt/aflcCollect/v1/collect",
		dataType: "json",
		data:JSON.stringify(
			{
		
 
  "userType":userType,
  "mobile": mobile,
  "collectType": 2,
  "collectId":collectId 
		}		
		),	
		success:function(res){
	$('.collection_zx').css("display","block")

						
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	}

function is_collection_zx(userType,mobile,collectId){

var collection_status=0;
var collectNum=0;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
	    async:false,
		url:"/api/aflc-portal/portalt/aflcCollect/v1/checkIsCollect",
		dataType: "json",
		data:JSON.stringify(
			{
		
 
  "userType":userType,
  "mobile": mobile,
  "collectType": 4,
  "collectId":collectId 
		}		
		),	
		success:function(res){
			if(!res.data){return ;}
			var datas = res.data;	
			collection_status=datas.isCollect;
			collectNum=datas.collectNum;

						
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	console.log('collection_status='+is_collection_zx)
	return {collection_status:collection_status,collectNum:collectNum}
	}

function is_collection_wlgs(userType,mobile,collectId){
var collection_status=0;
var collectNum=0;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
	    async:false,
		url:"/api/aflc-portal/portalt/aflcCollect/v1/checkIsCollect",
		dataType: "json",
		data:JSON.stringify(
			{
		
 
  "userType":userType,
  "mobile": mobile,
  "collectType": 1,
  "collectId":collectId 
		}		
		),	
		success:function(res){
			var datas = res.data;	
			collection_status=datas.isCollect;
			collectNum=datas.collectNum;

						
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	console.log('collection_status='+is_collection_zx)
	return {collection_status:collection_status,collectNum:collectNum}
	}

function is_collection_hz(userType,mobile,collectId){
var collection_status=0;
var collectNum=0;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
	    async:false,
		url:"/api/aflc-portal/portalt/aflcCollect/v1/checkIsCollect",
		dataType: "json",
		data:JSON.stringify(
			{
		
 
  "userType":userType,
  "mobile": mobile,
  "collectType": 3,
  "collectId":collectId 
		}		
		),	
		success:function(res){
			if(!res.data){return ;}
			var datas = res.data;	
			collection_status=datas.isCollect;
			collectNum=datas.collectNum;

						
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	console.log('collection_status='+is_collection_zx)
	return {collection_status:collection_status,collectNum:collectNum}
	}

function is_collection_cz(userType,mobile,collectId){
var collection_status=0;
var collectNum=0;
	$.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
	    async:false,
		url:"/api/aflc-portal/portalt/aflcCollect/v1/checkIsCollect",
		dataType: "json",
		data:JSON.stringify(
			{
		
 
  "userType":userType,
  "mobile": mobile,
  "collectType": 2,
  "collectId":collectId 
		}		
		),	
		success:function(res){
			if(!res.data){return ;}
			var datas = res.data;	
			collection_status=datas.isCollect;
			collectNum=datas.collectNum;

						
		},error:function(err){
			console.log(err.responseText);
		

		}
		})
	console.log('collection_status='+is_collection_zx)
	return {collection_status:collection_status,collectNum:collectNum}
	}

$('#collection_zx').click(function(){
	var userType=$.cookie("login_type");
	if(userType=='aflc-5'){
		userType=1
	}
	if(userType=='aflc-2'){
		userType=3
	}
	if(userType=='aflc-1'){
		userType=2
	}
	var mobile=$.cookie("login_mobile");
	var collectId=aid;
	if(!userType||!mobile){
		  $('.arc_middle').toast({
			content:'您还未登录，请先登录',
			duration:3000
		});
        $('.login_box').css("display","block");
	}
	else {	
		var mystatus0=new Object();
		mystatus0=is_collection_zx(userType,mobile,collectId);
		var mystatus=mystatus0.collection_status;
		
		console.log("mystatus="+mystatus)
		if(mystatus==1){		
			$('.arc_middle').toast({
			content:'您已收藏过此专线',
			duration:3000
		});}
		if(mystatus!=1){collection_zx(userType,mobile,collectId)}
		
	}

})

$('#collection_wlgs').click(function(){
	var userType=$.cookie("login_type");
	if(userType=='aflc-5'){
		userType=1
	}
	if(userType=='aflc-2'){
		userType=3
	}
	if(userType=='aflc-1'){
		userType=2
	}
	var mobile=$.cookie("login_mobile");
	var collectId=publishId;
	if(!userType||!mobile){
		  $('.arc_middle').toast({
			content:'您还未登录，请先登录',
			duration:3000
		});
        $('.login_box').css("display","block");
	}
	else {	
		var mystatus0=new Object();
		mystatus0=is_collection_wlgs(userType,mobile,collectId);
		var mystatus=mystatus0.collection_status;
		console.log("mystatus="+mystatus)
		if(mystatus==1){		
			$('.arc_middle').toast({
			content:'您已收藏过此物流公司',
			duration:3000
		});}
		if(mystatus!=1){collection_wlgs(userType,mobile,collectId)}
		
	}

})


$('#collection_website').click(function(){
	var userType=$.cookie("login_type");
	if(userType=='aflc-5'){
		userType=1
	}
	if(userType=='aflc-2'){
		userType=3
	}
	if(userType=='aflc-1'){
		userType=2
	}
	var mobile=$.cookie("login_mobile");
	var obj2=new Object();
	obj2=member_01();
	var publishId=obj2.aid;
	var collectId=publishId;
	
	if(!userType||!mobile){
		  $('.top_com').toast({
			content:'您还未登录，请先登录',
			duration:3000
		});
        $('.login_box').css("display","block");
	}
	else {	
		var mystatus0=new Object();
		mystatus0=is_collection_wlgs(userType,mobile,collectId);
		//alert(mystatus0.collection_status)
		var mystatus=mystatus0.collection_status;
		console.log("mystatus="+mystatus)
		if(mystatus==1){		
			$('.top_com').toast({
			content:'您已收藏过此物流公司',
			duration:3000
		});}
		if(mystatus!=1){collection_wlgs(userType,mobile,collectId)}
		
	}

})


$('.collection_hz').click(function(){
	var userType=$.cookie("login_type");
	if(userType=='aflc-5'){
		userType=1
	}
	if(userType=='aflc-2'){
		userType=3
	}
	if(userType=='aflc-1'){
		userType=2
	}
	var mobile=$.cookie("login_mobile");
	var collectId=aid;
	if(!userType||!mobile){
		  $('.arc_middle').toast({
			content:'您还未登录，请先登录',
			duration:3000
		});
        $('.login_box').css("display","block");
	}
	else {	
		var mystatus0=new Object();
		mystatus0=is_collection_hz(userType,mobile,collectId);
		var mystatus=mystatus0.collection_status;
		console.log("mystatus="+mystatus)
		if(mystatus==1){		
			$('.arc_left_2_2').toast({
			content:'您已收藏过此货源',
			duration:3000
		});}
		if(mystatus!=1){collection_hz(userType,mobile,collectId)}
		
	}

})

$('.collection_cz').click(function(){
	var userType=$.cookie("login_type");
	if(userType=='aflc-5'){
		userType=1
	}
	if(userType=='aflc-2'){
		userType=3
	}
	if(userType=='aflc-1'){
		userType=2
	}
	var mobile=$.cookie("login_mobile");
	var collectId=aid;
	if(!userType||!mobile){
		  $('.arc_middle').toast({
			content:'您还未登录，请先登录',
			duration:3000
		});
        $('.login_box').css("display","block");
	}
	else {	
		var mystatus0=new Object();
		mystatus0=is_collection_cz(userType,mobile,collectId);
		var mystatus=mystatus0.collection_status;
		console.log("mystatus="+mystatus)
		if(mystatus==1){		
			$('.arc_middle').toast({
			content:'您已收藏过此车源',
			duration:3000
		});}
		if(mystatus!=1){collection_cz(userType,mobile,collectId)}
		
	}

})


var aid=aid;




var zx_num=new Object();
zx_num=is_collection_zx('','',aid);
var my_zx_num=zx_num.collectNum;
$('.my_zx_num').html(my_zx_num)

var hz_num=new Object();
hz_num=is_collection_hz('','',aid);
var my_hz_num=hz_num.collectNum;
$('.my_hz_num').html(my_hz_num)

var cz_num=new Object();
cz_num=is_collection_cz('','',aid);
var my_cz_num=cz_num.collectNum;
$('.my_cz_num').html(my_cz_num)

//收藏 E