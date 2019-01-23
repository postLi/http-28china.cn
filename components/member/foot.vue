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
              v-if="psdata.indexOf('AF02701') !== -1"
              id="cp01" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw'">整车运输</a></li>
            <li 
              v-if="psdata.indexOf('AF02702') !== -1"
              id="cp02" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw'">零担运输</a></li>  
            <li 
              v-if="psdata.indexOf('AF02703') !== -1"
              id="cp03" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw'">专线运输</a></li>
            <li 
              v-if="psdata.indexOf('AF02704') !== -1"
              id="cp04" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw'">特大货物运输</a></li>
            <li 
              v-if="psdata.indexOf('AF02705') !== -1"
              id="cp05" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw'">大件运输</a></li>
            <li 
              v-if="psdata.indexOf('AF02706') !== -1"
              id="cp06" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw'">集装箱运输</a></li>  
            <li 
              v-if="psdata.indexOf('AF02707') !== -1"
              id="cp07" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw'">冷藏运输</a></li>
            <li 
              v-if="psdata.indexOf('AF02708') !== -1"
              id="cp08" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw'">危险品运输</a></li>
            <li 
              v-if="psdata.indexOf('AF02709') !== -1"
              id="cp09" 
              class="cp"> <a :href="$store.state.member.id + '-cpfw'">仓储</a></li>
          </ul>
          <ul>
            <h3>增值服务</h3>
            <span/>
            <li 
              v-if="opdata.indexOf('AF02501') !== -1"
              id="fw01" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2'">送货上门</a></li>
            <li 
              v-if="opdata.indexOf('AF02502') !== -1"
              id="fw02" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2'">保价运输</a></li>
            <li 
              v-if="opdata.indexOf('AF02503') !== -1"
              id="fw03" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2'">运费到付</a></li>
            <li 
              v-if="opdata.indexOf('AF02504') !== -1"
              id="fw04" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2'">代收货款</a></li>
            <li 
              v-if="opdata.indexOf('AF02505') !== -1"
              id="fw05" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2'">开发票</a></li>
            <li 
              v-if="opdata.indexOf('AF02506') !== -1"
              id="fw06" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2'">上门提货</a></li>
            <li 
              v-if="opdata.indexOf('AF02507') !== -1"
              id="fw07" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2'">签单回收</a></li>
            <li 
              v-if="opdata.indexOf('AF02508') !== -1"
              id="fw08" 
              class="fw"> <a :href="$store.state.member.id + '-cpfw2'">时效保障</a></li>
          </ul>
          <ul>
            <h3>客户服务</h3>
            <span/>
            <li><a :href="$store.state.member.id + '-chajian?uid=' + $store.state.member.id + '&publishId=' + $store.state.member.id">查件</a></li>
            <li><a :href="$store.state.member.id + '-order?uid=' + $store.state.member.id + '&publishId=' + $store.state.member.id">在线下单</a></li>
            <li><a :href="$store.state.member.id + '-line'">物流专线</a></li>
            <li><a :href="$store.state.member.id + '-wangdian'">网点分布</a></li>
          </ul>
          <ul>
            <h3>关于我们</h3>
            <span/>
            <li><a :href="$store.state.member.id + '-jianjie'" >公司简介</a></li>
            <li><a :href="$store.state.member.id + '-webnotice'">公司动态</a></li>
            <li><a :href="$store.state.member.id + '-contactus'">联系我们</a></li>
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
                :class="{actived: showwechat}"
                class="wechat" 
                @mouseover="wechat_block" 
                @mouseout="wechat_none"/></a>
              <div 
                v-show="showwechat" 
                class="img-box wechat-box">
                <img 
                  style="width: 138px;height: 138px;" 
                  src="/member/images/dingyuehao.png" 
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
<script>
export default {
  data() {
    return {
      showwechat: false
    }
  },
  computed: {
    opdata() {
      return this.$store.state.member.company.otherServiceCode
    },
    psdata() {
      return this.$store.state.member.company.productServiceCode
    }
  },
  methods: {
    wechat_block() {
      this.showwechat = true
    },
    wechat_none() {
      this.showwechat = false
    }
  }
}
</script>
