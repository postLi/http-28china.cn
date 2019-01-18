<template>
  <div class="step2">
    <div class="top_bg">
      <div class="top center">
        <ul>
          <li class="top_1"><a 
            href="/" 
            target="_blank"><img src="/images/index_files/logor.png"></a></li>
          <li class="top_2"><span>保险商城</span></li>
          <li class="top_3">
            <img src="/images/insurance/phone-bx.png">
          <span>免费热线</span><font>400-999-2828</font></li>
        </ul>
	
      </div>
    </div>
    <div class="main center">	
      <div class="m_border center">
        <form class="center validateForm">
          <table>
            <tr><div class="main_bt"><span>货物类型</span><i/></div></tr>

            <tr class="tbr"><td><i>*</i>货物类型：</td><td>
              <select 
                id="data1" 
                class="select01" 
                validate="{&quot;msg&quot;:&quot;请选择货物类型&quot;}">
                <option name="">请选择货物类型</option>
                <option name="">工业类、纺织服装类</option>
                <option name="">手机办公、家用电器类</option>
                <option name="">全新机器设备、普货</option>
                <option name="">普通家具、食品</option>
              </select>
            </td></tr>
            <tr class="tbr_id"><td><i>*</i>货物名称：</td><td>
              <input 
                id="data2" 
                maxlength="30" 
                class="input02" 
                validate="{&quot;msg&quot;:&quot;请输入货物名称&quot;}" 
                placeholder="请输入承保货物名称" >
            </td></tr>
            <tr class="bbr_lx"><td><i>*</i>货物包装：</td><td>
              <select 
                id="data3" 
                class="select01" 
                validate="{&quot;msg&quot;:&quot;请选择货物包装&quot;}">
                <option name="">请选择货物包装</option>
                <option name="">袋装</option>
                <option name="">散装、裸装</option>
                <option name="">罐装</option>
                <option name="">复合式包装</option>
                <option name="">箱装</option>
                <option name="">桶装</option>
                <option name="">其他</option>
              </select>
            </td></tr>
            <tr class="bbr"><td><i>*</i>货物数量：</td><td>
              <input 
                id="data4" 
                maxlength="10" 
                class="input02" 
                validate="{&quot;msg&quot;:&quot;请输入货物数量&quot;,&quot;regG&quot;:&quot;^[1-9][0-9]*$&quot;,&quot;regMsg&quot;:&quot;请输入正整数&quot;}" 
                placeholder="请输入货物数量" >
            </td></tr>
            <tr class="bbr_id"><td><i>*</i>货物价值：</td><td>
              <input 
                id="data5" 
                maxlength="7" 
                oninput="checkValue(this)" 
                class="input02" 
                validate="{&quot;msg&quot;:&quot;请输入货物价值&quot;,&quot;regG&quot;:&quot;^[1-9][0-9]*$&quot;,&quot;regMsg&quot;:&quot;请输入正整数&quot;}" 
                placeholder="(300万以内）" >
            </td></tr>
            <tr class="next_step"><td><a 
              target="_self" 
              class="pointer" 
              onclick="window.history.go(-1)">上一步</a></td><td>
                <input 
                  onclick="next()" 
                  class="next_button" 
                  readonly="" 
                  value="下一步" >
            </td></tr>
          </table>
		
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Step2',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/insuranceStep2.css' },
      { rel: 'stylesheet', href: '/css/insuranceComon.css' }
    ],
    script: [{ src: '/js/insurance.js' }]
  },
  layout: 'subLayout',
  mounted() {
    $(function() {
      var url1 = location.search.substr(1)
      var obj = {
        goodsType: $('#data1').val(), //货物类型
        goodsName: $('#data2').val(), //货物名称
        goodsPack: $('#data3').val(), //货物包装
        goodsNumber: $('#data4').val(), //货物数量
        goodsValue: $('#data5').val() //货物价值
      }
      function checkValue(v) {
        if (v.value * 1 > 3000000) {
          v.value = 3000000
        }
      }
      window.sessionStorage.setItem('step2', JSON.stringify(obj))
      function next() {
        if (insuranceValidate.check()) {
          obj.goodsType = $('#data1').val()
          obj.goodsName = $('#data2').val()
          obj.goodsPack = $('#data3').val()
          obj.goodsNumber = $('#data4').val()
          obj.goodsValue = $('#data5').val()
          window.sessionStorage.setItem('step2', JSON.stringify(obj))
          if (window.history.length === 2) {
            window.location.href = '/Insurance/step3'
          } else {
            window.history.forward()
          }
        }
      }
    })
  }
}
</script>
