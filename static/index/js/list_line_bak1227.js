//点击事件
$('.btn_search').click(function(){
  $('.btn_search').removeClass('active');
  $(this).addClass('active')
})
//清空条件搜索重置
$("#btn2").click(	
  function(){
    console.log("清空地址")
    // window.location.href='/templets/default/htm/list_line.htm';
    window.location.reload();
})

// var code = $.cookie('currentArea')
// var cookie1 = $.cookie('currentProvinceFullName');
// var cookie3 = $.cookie('currentAreaFullName')
// console.log('cookie值',cookie1,cookie2,cookie3)
// window.location.href='/templets/default/htm/'+code+'.htm';
// console.log(code,7777777777777777777)
//零担下单 S
$("#check-fee").click(
  function(){
 
 var start=$("#right-bar-form").val();
 var end=$("#right-bar-to").val();
 var startjw=$("#right-bar-form").attr("thepos");
 var startpcd = $("#right-bar-form").attr("thepcd");
 var startstreet = $("#right-bar-form").attr("thestreet");
 var endpcd = $("#right-bar-to").attr("thepcd");
 var endstreet = $("#right-bar-to").attr("thestreet");

 var startp =$("#right-bar-form").attr('theprovince')
 var startc =$("#right-bar-form").attr('thecity')
 var starta =$("#right-bar-form").attr('thearea')

 var endp = $("#right-bar-to").attr('theprovince')
 var endc = $("#right-bar-to").attr('thecity')
 var enda = $("#right-bar-to").attr('thearea')


if(startjw){
 var startj=startjw.split(",",2)[0];
 var startw=startjw.split(",",2)[1];
}
if(!startjw){
 var startj="";
 var startw="";
}
 

 var endjw=$("#right-bar-to").attr("thepos");
 if(endjw){
 var endj=endjw.split(",",2)[0];
 var endw=endjw.split(",",2)[1];
 }
 if(!endjw){
 var endj="";
 var endw="";
 }
 if(!startpcd){startpcd=""}
 if(!endpcd){endpcd=""}
 if(!startstreet){startstreet=""}
 if(!endstreet){endstreet=""}
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
 startpcd=encodeURI(startpcd)
 endpcd=encodeURI(endpcd)
 startstreet=encodeURI(startstreet)
 endstreet=encodeURI(endstreet)
 s1='/plus/list.php?tid=77&start='+startpcd+'&end='+endpcd + '&startstreet='+startstreet + '&endstreet='+endstreet;
 s2='&startj='+startj+'&startw='+startw+'&endj='+endj+'&endw='+endw + '&startp=' + startp + '&startc=' + startc + '&starta=' + starta + '&endp=' + endp + '&endc=' + endc + '&enda=' + enda;
console.log(s1+s2);
window.open(s1+s2);
//+
     

})
//零担下单 E



//零担下单 S查询零担运费
$("#btn1").click(
  function(){
 
 var start=$("#carLineFrom").val();
 var end=$("#carLineTo").val();
 var startjw=$("#carLineFrom").attr("thepos");
 var startpcd = $("#carLineFrom").attr("thepcd");
 var startstreet = $("#carLineFrom").attr("thestreet");
 var endpcd = $("#carLineTo").attr("thepcd");
 var endstreet = $("#carLineTo").attr("thestreet");

 var startp =$("#carLineFrom").attr('theprovince')
 var startc =$("#carLineFrom").attr('thecity')
 var starta =$("#carLineFrom").attr('thearea')

 var endp = $("#carLineTo").attr('theprovince')
 var endc = $("#carLineTo").attr('thecity')
 var enda = $("#carLineTo").attr('thearea')


if(startjw){
 var startj=startjw.split(",",2)[0];
 var startw=startjw.split(",",2)[1];
}
if(!startjw){
 var startj="";
 var startw="";
}
 
 var endjw=$("#carLineTo").attr("thepos");
 if(endjw){
 var endj=endjw.split(",",2)[0];
 var endw=endjw.split(",",2)[1];
 }
 if(!endjw){
 var endj="";
 var endw="";
 }
 if(!startpcd){startpcd=""}
 if(!endpcd){endpcd=""}
 if(!startstreet){startstreet=""}
 if(!endstreet){endstreet=""}
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
 startpcd=encodeURI(startpcd)
 endpcd=encodeURI(endpcd)
 startstreet=encodeURI(startstreet)
 endstreet=encodeURI(endstreet)
 
 s1='/zhuanxian/list?start='+startpcd+'&end='+endpcd + '&startstreet='+startstreet + '&endstreet='+endstreet;
 s2='&startj='+startj+'&startw='+startw+'&endj='+endj+'&endw='+endw + '&startp=' + startp + '&startc=' + startc + '&starta=' + starta + '&endp=' + endp + '&endc=' + endc + '&enda=' + enda;
console.log(s1+s2);
window.open(s1+s2);
//+
// window.location='/zhuanxian/list?start='+start+'&end='+end;
// window.location = '/zhuanxian/list?startp='+startp+'&startc='+startc+'&starta='+starta+'&endp='+endp+'&endc='+endc+'&enda='+enda

})
//零担下单 E查询零担运费



//物流专线 推荐列表S
function process01(){
  //var rangeIds="";
  var startProvince = $.cookie('currentProvinceFullName');
  var startCity = $.cookie('currentAreaFullName');
  console.log(startProvince,startCity)
  // vo.attr(startProvince)
  // vo.attr(startCity)
  // var data = {
  //   currentPage:1,
  //   pageSize:14,
  //   vo:{}		//JSON.stringify({})
  //   }	
    $.ajax(
      {
      type:"post",
      headers:{
      'Content-Type': 'application/json'
      },
      url:"/api/aflc-portal/portalt/aflcRecommendTransportRange/v1/recommendRanges",
      // http://192.168.1.79:7010/aflc-portal/portalt/aflcRecommendTransportRange/v1/recommendRanges
      dataType: "json",
      //async:false,
      data:JSON.stringify(
        {
        currentPage:1,
        pageSize:14,
        vo:{
          startProvince:startProvince,
          startCity:startCity
        }		//JSON.stringify({})
      }		
      ),	
      success:function(res){
         $("#js007 .list-right-advice").not(":eq(0)").remove();
          if(!res.data){ 
          console.log("推荐内容为空")
          $(".tj_none").css("display","block")}
          // <h3 class="layer-title zx_title">专线推荐</h3
          if(res.data){
            $("#h3_title").css("display","block")
          }
        var datas = res.data;	
        if(!datas){return;}
        for(var i=0;i<datas.length;i++){
              var lightPrice=datas[i].lightPrice;
          var heavyPrice=datas[i].heavyPrice;
  
          var rangeId=datas[i].id;
          var companyId=datas[i].companyId;
          console.log(lightPrice+":"+heavyPrice);
          var account=datas[i].account;
          var companyName=datas[i].companyName;
          var lowerPrice=datas[i].lowerPrice;
          if(lowerPrice){lowerPrice=lowerPrice+"元"}
          if(!lowerPrice){lowerPrice="面议"}
          // var startLocation = datas[i].startLocation;
          var startCity = datas[i].startCity
          var startArea = datas[i].startArea ? datas[i].startArea : ''
          var endCity = datas[i].endCity
          var endArea = datas[i].endArea ? datas[i].endArea : ''
          var endLocation = datas[i].endLocation;
          var publishName = datas[i].publishName;
          var transportAging = datas[i].transportAging;
          var transportAgingUnit = datas[i].transportAgingUnit.replace("多","");
          var isVip=datas[i].isVip;
          var authStatus=datas[i].authStatus;
          var collateral=datas[i].collateral;
          var arcurl="/zhuanxian/detail?id="+rangeId+"&publishId="+companyId; 
          $("#tj03").attr("href","/member/"+account+".html");
          $("#tj03").html(companyName);
          // $("#tj01").html( startLocation.substring(0,6));
          // $("#tj02").html( endLocation.substring(0,6));
          $('#tj01').html(startCity + startArea)
          $("#tj02").html(endCity + endArea)
          $("#tj04").html(lightPrice);
          $("#tj05").html(heavyPrice);
          $("#tj06").html(transportAging+transportAgingUnit);
          if(!transportAging||!transportAgingUnit){$("#tj015").html("")}
          $("#tj07").html(lowerPrice);
          $("#tj09").attr("href",arcurl);
          // $("#tj010").attr("href",arcurl);
           var s1='<div class="list-right-advice list-right-advice'+i+'">'
           var s2=$(".list-right-advice").html();	
           var s3='</div>'
          $("#js007").append(s1+s2+s3);	
           if(isVip!=1){console.log("is not Vip");
        $('.list-right-advice'+i+'  #tj_xinyong').css("display","none")}
        if(authStatus!="AF0010403"){console.log("is not shiming");
        $('.list-right-advice'+i+'  #tj_shiming').css("display","none")}
        if(!collateral||collateral==0){console.log("is not danbao");
        $('.list-right-advice'+i+'  #tj_danbao').css("display","none")}
        
          //rangeIds=rangeIds+","+rangeId;
          //rangeIds=rangeIds.substring(1,500)
        }		
        
          //console.log("推荐专线ID"+rangeIds)
      },error:function(err){
        console.log(err.responseText);
      
      }
      })
    //return rangeIds;
    
    }
  process01();
  //物流专线 推荐列表 E