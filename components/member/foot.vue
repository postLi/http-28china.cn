<template>
  <div 
    id="about" 
    class="js-footer">
    <div class="about-main">
      <div class="about">
        <div class="about-font">
          <ul>
            <h3>主营产品</h3>
            <span/>
                       
            <li 
              id="cp01" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw.html'">整车运输</a></li>
            <li 
              id="cp02" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw.html'">零担运输</a></li>  
            <li 
              id="cp03" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw.html'">专线运输</a></li>
            <li 
              id="cp04" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw.html'">特大货物运输</a></li>
            <li 
              id="cp05" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw.html'">大件运输</a></li>
            <li 
              id="cp06" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw.html'">集装箱运输</a></li>  
            <li 
              id="cp07" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw.html'">冷藏运输</a></li>
            <li 
              id="cp08" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw.html'">危险品运输</a></li>
            <li 
              id="cp09" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw.html'">仓储</a></li>
          </ul>
          <ul>
            <h3>增值服务</h3>
            <span/>
            <li 
              id="fw01" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2.html'">送货上门</a></li>
            <li 
              id="fw02" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2.html'">保价运输</a></li>
            <li 
              id="fw03" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2.html'">运费到付</a></li>
            <li 
              id="fw04" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2.html'">代收货款</a></li>
            <li 
              id="fw05" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2.html'">开发票</a></li>
            <li 
              id="fw06" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2.html'">上门提货</a></li>
            <li 
              id="fw07" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2.html'">签单回收</a></li>
            <li 
              id="fw08" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2.html'">时效保障</a></li>
          </ul>
          <ul>
            <h3>客户服务</h3>
            <span/>
            <li><a href="#">查件</a></li>
            <li><a href="#">在线下单</a></li>
            <li><a :href="$store.state.member.id + '-line.html'">物流专线</a></li>
            <li><a :href="$store.state.member.id + '-wangdian.html'">网点分布</a></li>
          </ul>
          <ul>
            <h3>关于我们</h3>
            <span/>
            <li><a :href="$store.state.member.id + '-jianjie.html'" >公司简介</a></li>
            <li><a :href="$store.state.member.id + '-webnotice.html'">公司动态</a></li>
            <li><a :href="$store.state.member.id + '-contactus.html'">联系我们</a></li>
          </ul>

        </div>
        <div class="about-img">
                   
          <div style="float: left;"> 
            <div style="float: left;"><img 
              src="space/company/images/tel.png" 
              style="width:50px;height: 40px;" 
              alt="全国统一客服热线"></div>
            <div style="color:#169BD5; font-size: 24px; float: left; margin-top: 10px;"> &nbsp;400-9992828</div>
          </div>
                    
          <ul class="friendLink">
            <li id="btn_foorterWechat">
              <a><span 
                class="wechat" 
                onmouseover="wechat_block();" 
                onmouseout="wechat_none();"/></a>
              <div class="img-box wechat-box">
                <img 
                  style="width: 138px;height: 138px;" 
                  src="space/company/images/dingyuehao.png" 
                  class="wechat-img detail-img">
              </div>
            </li>

          </ul>
                   
        </div>
      </div>
    </div>
        
    <div class="foot_xiantiao"/>
    <div class="foot_text">
      <p>技术支持：广州安发网络</p>
      <p>免责声明：本站只起到信息平台作用，内容的真实性，准确性和合法性由发布企业负责。</p>
    </div>
  </div>
    

</template>
