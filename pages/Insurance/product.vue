<template>
  <div class="product">
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
    <div class="main_bg center">	
      <div class="baoxian">
        <ul>
          <li class="bx_01">平安保险</li>
          <li class="bx_02">
            <i>货运运输保险</i>
            <font>投保<em id="insuranceNumber"/></font>
            <span>浏览<em id="browseNumber"/></span>
          </li>
          <li class="bx_03"><font>5</font>元起</li>
          <li class="bx_04">
            <span>险种：</span>
            <input 
              id="bx_lx1" 
              type="radio" 
              checked="checked" 
              name="a" 
              value="综合险" 
              class="display_none" >
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
          </li>
          <li class="bx_05">
            <span id="bx_sm1">承保基本款所有保障范围+运输中碰撞、挤压、雨淋+盗窃哄抢</span>
            <span id="bx_sm2">承保火灾、爆炸、车辆碰撞倾覆事故及暴雨等自然灾害造成的货物损失+装卸货损失+施救费用+盗窃哄抢</span>
          </li>
          <li class="bx_06"><input 
            id="toubao" 
            onclick="next()" 
            readonly 
            value="立即投保"></li>
        </ul>
		
		
      </div>
    </div>

    <div class="main center">
      <div class="item1">
        <div class="item1_bt"><img src="/Insurance/images/cpxx.png" ></div>
        <div class="item1_nr">
          <ul>
            <li>
              <font>保单类型：</font>
              <span>电子保单   纸质保单</span>
            </li>
            <li>
              <font>承保公司：</font>
              <span>中国平安财产保险股份有限公司安徽分公司</span>
            </li>
            <li>
              <font>运输范围：</font>
              <span>全国范围（不包括西藏、香港、澳门、台湾地区）</span>
            </li>
            <li>
              <font>保费依据：</font>
              <span>以货物种类区分不同保费费率</span>
            </li>
          </ul>
        </div>
		
      </div>
	
      <div class="item2">
        <div class="item2_bt"><img src="/Insurance/images/bzxm.png" ></div>
        <div class="item2_nr">
          <table>
            <tr>
              <th>保障项目</th>
              <th>保障说明</th>
            </tr>
            <tr>
              <td>平安险</td>
              <td>承保被保险人货物在运输途中因恶劣气候、雷电、海啸、地震、洪水等自然灾害造成的货物全损；因运输工具搁浅、触礁、沉没、互撞，与流冰或其他物体碰撞以及失火、爆炸等意外事故造成的货物部分损失；装卸、转船过程中，被保险货物落海所造成的全损或部分损失；运输工具在中途港或避难港停靠引起的装卸货、存仓及运送货物产生的费用；共同海损引起的牺牲、公摊费、救助费用、合理施救费用。</td>
            </tr>
            <tr>
              <td>水渍险</td>
              <td>水渍险在承保"平安险"的各项责任外，还负责被保险货物在运输过程中由于恶劣气候、雷电、海啸、地震、洪水等自然灾害所造成的部分损失。</td>
            </tr>
            <tr>
              <td>一切险</td>
              <td>一切险在承保“平安险”、“水渍险”的所有责任外，还负责被保险货物在运输过程中，因一般外来风险所造成保险货物的损失，如被窃、雨淋、渗漏、碰损、破碎、串味、受潮受热、钩损等。</td>
            </tr>
            <tr>
              <td>航空险</td>
              <td>航空险承保被保险货物在运输途中遭受雷电、火灾或爆炸或由于飞机遭受恶劣气候或其它危难事故而被抛弃，或由于飞机遭受碰撞、倾覆、坠落或失踪意外事故所造成的全部或部分损失；被保险人对遭受承保责任内危险的货物采取抢救，防止或减少货损的措施而支付的合理费用，但以不超过该批被救货物的保险金额为限。</td>
            </tr>
            <tr>
              <td>航空一切险</td>
              <td>航空一切险除包括“航空运输险”的责任外，还负责被保险货物由于外来原因所致的全部或部分损失。</td>
            </tr>
            <tr>
              <td>陆运险</td>
              <td>陆运险承保被保险货物在运输途中遭受暴风、雷电、洪水、地震等自然灾害，或因运输工具遭受碰撞、倾覆、出轨，或在驳运过程中因驳运工具遭受搁浅、触礁、沉没、碰撞，或由于遭受隧道坍塌、崖崩，或失火、爆炸意外事故所造成的全部或部分损失；被保险人对遭受承保责任内危险的货物采取抢救、防止或减少货损的措施而支付的合理费用。</td>
            </tr>
            <tr>
              <td>陆运一切险</td>
              <td>陆运一切险除包括“陆运险”的责任外，还负责被保险货物在运输途中由于外来原因所致的全部或部分损失。</td>
            </tr>
          </table>
        </div>
		
      </div>
	
      <div class="item3">
        <div class="item3_bt"><img src="/Insurance/images/lpzn.png" ></div>
        <div class="item3_nr">
          <table>
            <tr>
              <td>第一条</td>
              <td>经中国货运保险网购买本产品的顾客，保险期间内发生保险责任内事故，可直接拨打平安财险客服电话95511报案、理赔，也可拨打智慧保险网客服热线4007797711，中国货运保险网将提供全程协助理赔服务。</td>
            </tr>
            <tr>
              <td/><td>索赔资料</td>
            </tr>
            <tr>
              <td>第二条</td>
              <td>
                国内水路、陆路货物运输保险理赔所需单证<br>
                1、保险凭证：保单正本；<br>
                2、索赔资料：出险通知书、索赔函、索赔清单；<br>
                3、事故证明资料：交通事故责任认定书、公安证明、消防证明、行驶证、驾驶证复印件、运输合同或运输协议等；<br>
                4、损失证明资料：承运部门签发的货运记录、运单(货票)、发货票、装箱单、磅码单、提单、托运单、交接验收记录、收货人入库记录、收货人货损货差证明、货物发票总价复印件、受损货物的维修发票或维修/更换项目清单（报价）、鉴定书或第三方检验报告；<br>
              5、其他材料：如涉及第三者责任还须提供向责任方追偿的有关函电及其他必要单证或文件、照片、赔款收据及权益转让书等保险公司要求提供的材料</td>
            </tr>
            <tr>
              <td>第三条</td>
              <td>
                进出口货运险理赔所需单证<br>
                1、保单原件一份；<br>
                2、提单原件一份（电放可提供复印件，但需正本的电放通知函）；<br>
                3、装箱单；<br>
                4、发票；<br>
                5、出口报关单退税联复印件；<br>
                6、运输过程中使用的单据（比如集装箱设备交接单，拼箱货的拆箱报告等）；<br>
                7、货损货差证明（资料的具体要求视案件情况再细化，具体根据个案告知）；<br>
                8、索赔函；<br>
                9、出险通知书；<br>
                10、受损标的清单；<br>
                11、赔款收据及权益转让书；<br>
                12、照片。
              </td>
            </tr>
          </table>
        </div>
      </div>
	
      <div class="item4">
        <div class="item4_bt"><img src="/Insurance/images/bxtk.png" ></div>
        <div class="item4_nr">
          <table>
            <tr><td>第一条</td><td>国内水路、陆路货物运输保险条款</td></tr>
            <tr><td>第二条</td><td>陆上运输货物保险（火车、汽车）条款</td></tr>
            <tr><td>第三条</td><td>航空运输货物保险条款</td></tr>
            <tr><td>第四条</td><td>海洋运输货物保险条款</td></tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/insuranceProduct.css' },
      { rel: 'stylesheet', href: '/css/insuranceComon.css' }
    ]
  },
  layout: 'Sublayout',
  mounted() {
    seajs.use(['/js/insurance.js'], function() {
      $(function() {
        var theRequest = getRequest()
        if ($("input[name='a']:checked").val() === '综合险') {
          $('#bx_lx1_label').addClass('bx_checked')
          $('#bx_sm1').css('display', 'block')
          $('#bx_sm2').css('display', 'none')
        } else {
          $('#bx_lx2_label').addClass('bx_checked')
          $('#bx_sm1').css('display', 'none')
          $('#bx_sm2').css('display', 'block')
        }
        $('#toubao').click(function() {
          next()
        })
        function next() {
          window.sessionStorage.setItem(
            'step0',
            $("input[name='a']:checked").val()
          )
          window.open('/Insurance/step1')
        }
        let url = '/aflc-portal/portalt/aflcinsurancepolicy/v1/' + theRequest.id
        $.ajax({
          url: '/api' + url,
          type: 'GET',
          dataType: 'json',
          // 如果用jq，必须设置以下三项，避免jq 的中间处理
          processData: false,
          cache: false,
          contentType: false,
          headers: {
            'Content-Type': 'application/json'
          },
          success: function(res) {
            $('#insuranceNumber').html(res.data.insuranceNumber)
            $('#browseNumber').html(res.data.browseNumber)
          },
          error: function(err) {
            if (JSON.parse(err.responseText).error === 'invalid_token') {
              $('body').toast({
                content: '您还未登录，请先登录',
                duration: 3000
              })
              $('.login_box').show()
            }
          }
        })
      })
    })
  }
}
</script>
