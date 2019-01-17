var Calculator = {

}


$(".calculator").one("click", function(){
	var $this = $(this);
	var html = $(".cal-box").html();
	$this.data("data", html);
})

$(".caladd").on("click", function(){
	var html = $(".calculator").data("data");
	$(".cal-box").append(html)
})


//打开计算器
$(".calculator").on("click", function(){
	$(".cal-all").slideToggle();
})

//收起打开
$(document).on("click", ".calstop", function(){
	var $this = $(this);
	if($this.text()== "收起"){
		$this.text("打开")
	} else {
		$this.text("收起")
	}
	$this.parent().siblings(".cal-body").slideToggle();
})

//删除计算器
$(document).on("click", ".caldel" , function(){
	var $this = $(this);
	$this.closest(".cal-panel").remove();
	Calculator._sum_cal();
	
})



	
	// 预计总费用


//辅助计算器_单位体积计算
Calculator._volume_cal = function (obj){
	var _parent_obj = $(obj).parent("#_volume");
	var _unit_length = _parent_obj.children("#_unit_length").val();
	var _unit_width = _parent_obj.children("#_unit_width").val();
	var _unit_higth = _parent_obj.children("#_unit_higth").val();
	var _unit_volume0 = parseFloat(_unit_length)*parseFloat(_unit_width)*parseFloat(_unit_higth);
    var _unit_volume=_unit_volume0.toFixed(2);
	_parent_obj.children("#_unit_volume").html(_unit_volume);
		if(!_unit_volume0){
	_parent_obj.children("#_unit_volume").html("");	
}
}

//确认计算结果,并赋值在总重量和总体积Input输入框上
Calculator._confirm_cal = function (obj){
	var _parent_div =  $(obj).closest(".cal-panel");
	var _total_package = _parent_div.find("#_total_package").val();
	var _unit_weight = _parent_div.find("#_unit_weight").val();
	_parent_div.find("#_cal_weight").html(_unit_weight*_total_package);
	
	var _unit_volume = _parent_div.find("#_unit_volume").html();
	_parent_div.find("#_cal_volume").html(_unit_volume*_total_package);
	
	
	_parent_div.find("#_cal_package").html(_total_package);
	
	Calculator._sum_cal();
	_parent_div.find(".cal-body").slideToggle();

	
	$(obj).closest(".cal-body").siblings(".cal-hs").find(".calstop").text("打开")
	price();
}

//总重量和总体积Input输入框上
Calculator._sum_cal = function (){
	var _goodsweight = 0.0;
	 $("span[name='_cal_weight']").each(function(){
		var _current_val = $(this).html(); 
		_goodsweight += parseFloat(_current_val);
	 });
	 
	 $("#goodsweight").val(_goodsweight);

	 var _goodsvolume = 0.0;
	 $("span[name='_cal_volume']").each(function(){
		var _current_val = $(this).html(); 
		_goodsvolume += parseFloat(_current_val);
	 });
	 $("#goodsvolume").val(_goodsvolume);
    
	 if($("#goodspackages").val() != 'undefined' && $("#goodspackages").val() != undefined){
		 var _goodspackages = 0.0;
		 $("span[name='_cal_package']").each(function(){
			var _current_val = $(this).html(); 
			_goodspackages += parseFloat(_current_val);
		 });
		 $("#goodspackages").val(_goodspackages);
	 }
	  if(isNaN(_goodsweight)){
	  	$("#goodsweight").val("");}
	  if(isNaN(_goodsvolume)){ $("#goodsvolume").val("");} 
}
//专线价格 S
function process07(transportRangeId,weight,volume){
	var forecastPrice="";
	 $.ajax(
		{
		type:"post",
		headers:{
		'Content-Type': 'application/json'
		},
		url:"/api/aflc-portal/order/fclOrder/v1/getEstimateTotalPieces?transportRangeId="+transportRangeId+"&weight="+weight+"&volume="+volume,
		async:false,
		success:function(res){

			var datas = res.data;
			if (datas){forecastPrice=datas.forecastPrice;}

			
		},error:function(err){

			
			console.log(err.responseText);
			
			
		

		}
		})
	 console.log(forecastPrice);
	 return forecastPrice;
	}

//专线价格 E



//试算价格 S
function price(){

    		var price_zl=$('#goodsweight').val();
    		var price_tj=$('#goodsvolume').val();
    		if(!price_zl||price_zl==0){
    			price_zl =0;
    			$('#_totalFee').html("0.00");
    		}
    		if(!price_tj||price_tj==0){
    			price_tj =0;
    			$('#_totalFee').html("0.00");
    		}
if(price_zl!=0&&price_tj!=0)	{
var _totalFee=process07(aid,price_zl,price_tj);
$('#_totalFee').html(_totalFee);
if(!_totalFee){
	$('#_totalFee').html("面议");
	
}

console.log(_totalFee);
  }  
}
    $(".item-form  input").keyup(
    	function(){
    		console.log("试算价格：")
    	price();
 }
      )
//试算价格 E

