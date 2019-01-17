$('.digg').find('a').click(function(){
  $('.digg').find('a').removeClass('current');
  $(this).addClass('current');
  if($(this).attr("id")==="quedingbtn"){
    console.log(999999)
    var num = Number($("#everypage").val());
    var code = $(this).attr("code");
    var total = Number($("#totalpage").html());
    console.log(typeof num ,total)
    if(1<=num&&num<=total){
      location.href = code + '_' + num + '.htm';
    }else{
      alert('页数不符合');
      $("#everypage").val('');
    }
  }
  
})

//点击事件
$('.btn_search').click(function(){
  $('.btn_search').removeClass('active');
  $(this).addClass('active')
})

