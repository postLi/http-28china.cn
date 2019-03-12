<template>
  <div class="topNam">
    <div class="top_com">
      <div class="collection_zx">
        <div 
          class="bt_close" 
          onclick="$('.collection_zx').hide()" ><img src="/member/images/article_wlzx/xxx.png"></div>	
        <div class="collection_zx_nr">
          <img src="/member/images/article_wlzx/yes.png">
          <span>成功加入</span><a 
            id="collection_url" 
            target="_blank" 
            href="#">收藏夹</a>
        </div>
      </div>
      <!--公司名称-->
      <div class="comHeader fl">
        <h1 class="comName cmne"><em id="nr081">{{ company.companyName }}</em></h1>
      </div>
      <div class="top_xiantiao fl"/>
      <div 
        class="top_num fl" 
        @mousemove="showCompany = true" 
        @mouseout="showCompany = false"> 
        <ul><li><span>服务质量</span></li><li><span>运输时效</span></li><li><span>收费价格</span></li></ul>
        <ul><li><i id="num001">{{ company.serverPriceScore || '5' }}</i></li><li><i id="num002">{{ company.serverQualityScore || '5' }}</i></li><li><i id="num003">{{ company.transportAgingScore || '5' }}</i></li></ul>
      </div>
      <div 
        id="collection_website" 
        class="top_shouchang fl"> <img src="/member/images/000shouchang.png"></div>
      <div class="top_right_num fr">
        <ul><li><span>收藏量</span></li><li><span>评价数</span></li></ul>
        <ul><li><i id="num004">{{ company.collectNumber || '0' }}</i></li><li><i id="num005">{{ company.assessNumber || '0' }}</i></li><li/></ul>
         	
      </div>
      <div class="clear"/>
      <div 
        :style="{display: showCompany ? 'block' : 'none'}"
        class="company_box" 
        @mousemove="showCompany = true" 
        @mouseout="showCompany = false">
        <ul>
          <li class="bzj">
            <img src="/member/images/box/baozhengjin.png" >
            <span id="bzj_1">{{ company.collateral > 0 ? '该公司已签署消费者保障协议' : '该公司暂未缴纳保证金' }}</span>
            <font 
              v-if="company.collateral > 0" 
              id="bzj_2">已缴纳<i id="bzj_money">¥<em>{{ company.collateral }}</em></i>保证金</font>
          </li>
          <li class="box_item">
            <div class="item_left">总信誉值</div>
            <div 
              v-if="company.credit >=0 " 
              class="item_right item01"><img 
                v-for="(item, index) in company.credit" 
                :key="index" 
                src="/member/images/box/xinyu.gif" ></div>
          </li>
          <li class="box_item">
            <div class="item_left">平台信用</div>
            <div class="item_right item02"><img 
              v-if="company.authStatus === 'AF0010403'"
              id="shiming" 
              src="/images/list_wlzx/10shiming.png" ><img 
                v-if="company.isVip === 1"
                id="xinyong" 
                src="/images/list_wlzx/11xinyong.png" ></div>
          </li>
          <li class="box_item box_zzfw" >
            <div class="item_left">增值服务</div>
            <div class="item_right item03">
              <span 
                v-if="opdata.indexOf('AF02501')!==-1" 
                id="fw001"><img src="/member/images/pic/item_zzfw1.png" >送货上门</span>
              <span 
                v-if="opdata.indexOf('AF02502')!==-1" 
                id="fw002"><img src="/member/images/pic/item_zzfw2.png" >保价运输</span>
              <span 
                v-if="opdata.indexOf('AF02503')!==-1" 
                id="fw003"><img src="/member/images/pic/item_zzfw3.png" >运费到付</span>
              <span 
                v-if="opdata.indexOf('AF02504')!==-1" 
                id="fw004"><img src="/member/images/pic/item_zzfw4.png" >代收货款</span>
              <span 
                v-if="opdata.indexOf('AF02505')!==-1" 
                id="fw005"><img src="/member/images/pic/item_zzfw5.png" >开发票</span>
              <span 
                v-if="opdata.indexOf('AF02506')!==-1" 
                id="fw006"><img src="/member/images/pic/item_zzfw6.png" >上门提货</span>
              <span 
                v-if="opdata.indexOf('AF02507')!==-1" 
                id="fw007"><img src="/member/images/pic/item_zzfw7.png" >签单回收</span>
              <span 
                v-if="opdata.indexOf('AF02508')!==-1" 
                id="fw008"><img src="/member/images/pic/item_zzfw8.png" >时效保障</span>
            </div>
          </li>
          <li class="box_item">
            <div class="item_left">成立时间</div>
            <div 
              id="box_foundTime" 
              class="item_right item04">{{ company.foundTime }}</div>
          </li>
          <li class="box_item box_item5">
            <div class="item_left">联系信息</div>
            <div class="item_right item04"><div class="item04_1"><i>联系人：</i><span id="box_lxr">{{ company.contactsName }}</span><font id="box_mobile"/></div> 
              <a 
                id="box_qq" 
                :href="'http://wpa.qq.com/msgrd?v=3&uin=' + company.qq + '&site=qq&menu=yes'" 
                target="_blank"><div class="item04_2"><img src="/member/images/box/qq.gif" >&nbsp;QQ交谈</div></a>
              <div class="item04_3"><i>地址：</i><span id="box_address">{{ company.address }}</span></div>
            </div>
          </li>
    		
        </ul>
    	
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showCompany: false
    }
  },
  computed: {
    company() {
      return this.$store.state.member.company
    },
    opdata() {
      return this.$store.state.member.company.otherServiceCodeList
    }
  }
}
</script>
