<template>
  <div class="step1">
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
            <tr><div class="main_bt"><span>基本信息</span><i/></div></tr>
            <tr class="bx_lx"><td>险种：</td><td>
              <input 
                id="bx_lx1" 
                type="radio" 
                checked="checked" 
                name="a" 
                value="综合险" 
                class="display_none">
              <label 
                id="bx_lx1_label" 
                for="bx_lx1" 
                class="bx_item input01">综合险</label>
              <input 
                id="bx_lx2" 
                type="radio" 
                name="a" 
                value="基本险" 
                class="display_none">
              <label 
                id="bx_lx2_label" 
                for="bx_lx2" 
                class="bx_item input01">基本险</label>
              <br >
              <span id="bx_sm1">承保基本款所有保障范围+运输中碰撞、挤压、雨淋+盗窃哄抢</span>
              <span id="bx_sm2">承保火灾、爆炸、车辆碰撞倾覆事故及暴雨等自然灾害造成的货物损失+装卸货损失+施救费用+盗窃哄抢</span>
            </td>

            </tr>
            <tr class="tbr_lx"><td><i>*</i>投保人类型：</td><td>
              <input 
                id="bx_lx3" 
                type="radio" 
                checked="checked" 
                name="b" 
                value="0" 
                class="display_none">
              <label 
                id="bx_lx3_label" 
                for="bx_lx3" 
                class="input01">个人</label>
              <input 
                id="bx_lx4" 
                type="radio" 
                name="b" 
                value="1" 
                class="display_none">
              <label 
                id="bx_lx4_label" 
                for="bx_lx4" 
                class="input01">团体</label>
            </td></tr>
            <tr class="tbr"><td><i>*</i>投保人：</td><td>
              <input 
                id="bx_lx5" 
                maxlength="30" 
                class="input02" 
                validate="{&quot;msg&quot;:&quot;请输入投保人！&quot;,&quot;reg&quot;:&quot;^[a-zA-Z\u4e00-\u9fa5 ]{1,30}$&quot;,&quot;regMsg&quot;:&quot;请输入中文或英文&quot;}" 
                placeholder="投保人公司/个人名称" >
            </td></tr>
            <tr class="tbr_id"><td><i>*</i>证件号：</td><td>
              <input 
                id="bx_lx6" 
                maxlength="30" 
                class="input02" 
                validate="{&quot;msg&quot;:&quot;请输入证件号！&quot;}" 
                placeholder="组织机构代码/身份证" >
            </td></tr>
            <tr class="bbr_lx"><td><i>*</i>被保人类型：</td><td>
              <input 
                id="bx_lx7" 
                type="radio" 
                checked="checked" 
                name="c" 
                value="0" 
                class="display_none">
              <label 
                id="bx_lx7_label" 
                for="bx_lx7" 
                class="input01">个人</label>
              <input 
                id="bx_lx8" 
                type="radio" 
                name="c" 
                value="1" 
                class="display_none">
              <label 
                id="bx_lx8_label" 
                for="bx_lx8" 
                class="input01">团体</label>
            </td></tr>

            <tr class="bbr"><td><i>*</i>被保人：</td><td>
              <input 
                id="bx_lx9" 
                maxlength="30" 
                class="input02" 
                validate="{&quot;msg&quot;:&quot;请输入被投保人！&quot;,&quot;reg&quot;:&quot;^[a-zA-Z\u4e00-\u9fa5 ]{1,30}$&quot;,&quot;regMsg&quot;:&quot;请输入中文或英文&quot;}" 
                placeholder="投保人公司/个人名称" >
            </td></tr>
            <tr class="bbr_id"><td><i>*</i>被保人证件号：</td><td>
              <input 
                id="bx_lx10" 
                maxlength="30" 
                validate="{&quot;msg&quot;:&quot;请输入证件号！&quot;}" 
                class="input02" 
                placeholder="组织机构代码/身份证" >
            </td></tr>
            <tr class="next_step"><td/><td><input 
              onclick="next()" 
              class="next_button" 
              readonly="" 
              value="下一步" ></td></tr>
          </table>
		
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Step1',
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/insuranceStep1.css' },
      { rel: 'stylesheet', href: '/css/insuranceComon.css' }
    ]
  },
  layout: 'subLayout',
  mounted() {
    seajs.use(['/js/insurance.js'], function() {
      $(function() {
        if (window.sessionStorage.getItem('step0')) {
          if (window.sessionStorage.getItem('step0') === '综合险') {
            $('#bx_lx1').attr('checked', 'checked')
            $('#bx_lx2').removeAttr('checked')
          } else {
            $('#bx_lx2').attr('checked', 'checked')
            $('#bx_lx1').removeAttr('checked')
          }
          window.sessionStorage.removeItem('step0')
        }
        var obj = {
          insuranceType: $("input[name='a']:checked").val(), //"基本险"
          policyHolderType: $("input[name='b']:checked").val(), //投保人类型0个人，1团险
          policyHolderName: $('#bx_lx5').val(), //投保人姓名
          policyHolderNum: $('#bx_lx6').val(), //投保人证件号
          theInsuredType: $("input[name='c']:checked").val(), //被投保人类型0个人，1团险
          theInsuredName: $('#bx_lx9').val(), //被投保人
          theInsuredNum: $('#bx_lx10').val() //被投保人证件号
        }

        if ($("input[name='a']:checked").val() === '综合险') {
          $('#bx_lx1_label').addClass('bx_checked')
          $('#bx_sm1').css('display', 'block')
          $('#bx_sm2').css('display', 'none')
        } else {
          $('#bx_lx2_label').addClass('bx_checked')
          $('#bx_sm1').css('display', 'none')
          $('#bx_sm2').css('display', 'block')
        }

        if ($("input[name='b']:checked").val() === '0') {
          $('#bx_lx3_label').addClass('bx_checked')
        } else {
          $('#bx_lx4_label').addClass('bx_checked')
        }

        if ($("input[name='c']:checked").val() === '0') {
          $('#bx_lx7_label').addClass('bx_checked')
        } else {
          $('#bx_lx8_label').addClass('bx_checked')
        }
        window.sessionStorage.setItem('step1', JSON.stringify(obj))
        $('.next_button').click(function() {
          next()
        })
        function next() {
          if (insuranceValidate.check()) {
            obj.insuranceType = $("input[name='a']:checked").val()
            obj.policyHolderType = $("input[name='b']:checked").val()
            obj.theInsuredType = $("input[name='c']:checked").val()
            obj.policyHolderName = $('#bx_lx5').val()
            obj.policyHolderNum = $('#bx_lx6').val()
            obj.theInsuredName = $('#bx_lx9').val()
            obj.theInsuredNum = $('#bx_lx10').val()
            window.sessionStorage.setItem('step1', JSON.stringify(obj))
            if (window.history.length === 1) {
              window.location.href = '/Insurance/step2'
            } else {
              window.history.forward()
            }
          }
        }
      })
    })
  }
}
</script>
