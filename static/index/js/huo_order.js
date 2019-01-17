
// 发布专线
;(function $($) {
  if(!$){
    console.error('需要传jq库');
    return false
  }
  var order = {
    data:{
      startLocation: '', // 出发地
      startProvince: '',
      startCity: '',
      startArea: '',
      startLocationContacts: '', // 出发地联系人
      startLocationContactsMobile: '', // 出发地联系人电话
      endLocation: '', // 到达地
      endProvince: '',
      endCity: '',
      endArea: '',
      endLocationContacts: '', // 到达地联系人
      endLocationContactsMobile: '', // 到达地联系人电话
      transportAging: '', // 运输时效
      transportAgingUnit: '天', // 运输时效单位
      departureHzData: '', // 发车频率天数
      departureHzTime: '', // 发车频率车次
      rangePrices: [],
      lowerPrice: '', // 最低一票价
      rangeType: 'AF03301',
      rangeTypeName: '普通线路',
      departureTimeCode: '', // 发车时间code
      departureTime: '', // 发车时间
      transportRemark: '', // 线路说明
      publishName: '',
      publishId: '',
      rangeLogo: '' // 专线图片
    },
    init:function(){
      //运输时效
      this.$transportAging = $(":input[name='time']")[0]

      //天数
      this.$transportAgingUnit = $('.order_top').find('.minbox')
      console.log($('.order_top').find('.minbox'))
      //点击天数
      $('.order_top .minbox').click(function () {
        $('.order_top .minbox').removeClass("checked");
        $(this).addClass('checked')
      });
      //发车时间
      console.log(document.getElementById('order_buttom'))
      $('.order_buttom .minbox').click(function(){
        $('.order_buttom .minbox').removeClass("checked");
        $(this).addClass("checked")
      })
      //价格时效添加按钮
      
      $(".add1").on("click", function(){
        var tr = document.createComment('tr')
        const tbody = document.createElement('tbody')
        var Str = ''
        // var html = $(".box1").data(tr);
        // console.log(html)
        // $(".box1").append(html)
        // new_obj = $("<input type='text'>");
        // $(this).before(new_obj);
        Str = `<tr class="box1_list">
        <td colspan="2">
          <div class="inputbox">
            <input maxlength="40" type="text"><label>------</label>
            <input maxlength="40" class="del" type="text"><label>元/公斤</label>
          </div>
          
        </td>
        <td colspan="2">
          <div class="inputbox">
            <input maxlength="40" type="text"><label>元/公斤</label>
          </div>
        </td>
        <td colspan="2">
          <div class="inputbox">
            <input maxlength="40" type="text"><label>元/公斤</label>
          </div>
        </td>
    </tr>`

        tbody.innerHTML = Str
        $('.table1').append(tbody)
        // console.log($(".box1_list")[0])
        // var html = $(".box1_list").html();
        // $(".box1").append(html)
      })
      
      
    }

  };
  order.init()
  window.AFLCORDER = order;
})(window.jQuery)