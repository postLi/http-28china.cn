
var curIndex=1;
//时间间隔 单位毫秒 
changeImg();
var timeInterval=5000; 
setInterval(changeImg,timeInterval); 

	
	


function changeImg() 
{ 
	
	var num=$('.banner-item').size();

//数量为0开始
	if (num==0){
		$('.banner-box').html(
			'<a href="#" class="banner-item toZtts" style="display:none;"><img  src="/member/images/banner_01.png"></a>'+
			'<a href="#" class="banner-item toZtts" style="display:none;"><img  src="/member/images/banner_02.png"></a>'+
			'<a href="#" class="banner-item toZtts" style="display:none;"><img  src="/member/images/banner_03.png"></a>'+
			'<div class="banner-num"><span class="dot cur">1</span><span class="dot">2</span><span class="dot">3</span></div>'
		 );	
    $('.banner-item:nth-child(1)').fadeIn();
	$('.banner-item:nth-child(2)').fadeOut();
	$('.banner-item:nth-child(3)').fadeOut();
	$('.banner_text').css("display","block")
	
	}
//数量为0结束

//数量为1开始
	if (num==1){
	$('.banner-item').css('display','block');
	$('.banner-num').html();

}

//数量为1结束
	
//数量为2开始
	if (num==2){
		if (curIndex%2==1) {
	$('.banner-item:nth-child(1)').fadeIn();
	$('.banner-item:nth-child(2)').fadeOut();
		$('.banner-num').html(
			'<span class="dot cur">1</span><span class="dot">2</span>'	
		);	
		

}
        if (curIndex%2==0) {
	$('.banner-item:nth-child(1)').fadeOut();
	$('.banner-item:nth-child(2)').fadeIn();
	$('.banner-num').html(
			'<span class="dot">1</span><span class="dot cur">2</span>'	
		);
}
        
        		
	}
//数量为2结束
	
//数量为3开始
	if (num==3){
if (curIndex%3==1) {
	$('.banner-item:nth-child(1)').fadeIn();
	$('.banner-item:nth-child(2)').fadeOut();
	$('.banner-item:nth-child(3)').fadeOut();
	$('.banner-num').html(
	  '<span class="dot cur">1</span><span class="dot">2</span><span class="dot">3</span>'	
		);
}
if (curIndex%3==2) {
	$('.banner-item:nth-child(1)').fadeOut();
	$('.banner-item:nth-child(2)').fadeIn();
	$('.banner-item:nth-child(3)').fadeOut();
	$('.banner-num').html(
	  '<span class="dot">1</span><span class="dot cur">2</span><span class="dot">3</span>'	
		);
}
if (curIndex%3==0) {
	$('.banner-item:nth-child(1)').fadeOut();
	$('.banner-item:nth-child(2)').fadeOut();
	$('.banner-item:nth-child(3)').fadeIn();
	$('.banner-num').html(
	  '<span class="dot">1</span><span class="dot">2</span><span class="dot cur">3</span>'	
		);
}
}
//数量为3结束

curIndex+=1; 
  $(".dot:nth-child(1)").click(
	function(){
    $('.banner-item:nth-child(1)').fadeIn();
	$('.banner-item:nth-child(2)').fadeOut();
	$('.banner-item:nth-child(3)').fadeOut();
	$('.banner-num').html(
	  '<span class="dot cur">1</span><span class="dot">2</span><span class="dot">3</span>'	
		);
	}
)
$(".dot:nth-child(2)").click(
	function(){
    $('.banner-item:nth-child(2)').fadeIn();
	$('.banner-item:nth-child(1)').fadeOut();
	$('.banner-item:nth-child(3)').fadeOut();
	$('.banner-num').html(
	  '<span class="dot">1</span><span class="dot cur">2</span><span class="dot">3</span>'	
		);
	}
)
$(".dot:nth-child(3)").click(
	function(){
    $('.banner-item:nth-child(3)').fadeIn();
	$('.banner-item:nth-child(1)').fadeOut();
	$('.banner-item:nth-child(2)').fadeOut();
	$('.banner-num').html(
	  '<span class="dot">1</span><span class="dot">2</span><span class="dot cur">3</span>'	
		);
	}
)  

} 

