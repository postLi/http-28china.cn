<template>
  <div class="navigation">
    <div class="menu">
      <ul class="nav">
        <li><a 
          id="menu_0" 
          :href="$store.state.member.id + ''" 
          :class="/\/[^-]*$/.test(tpath) ? 'nav-current' : ''">首页</a></li>

        <li><a 
          id="menu_1" 
          :href="$store.state.member.id + '-jianjie'"
          :class="tpath.indexOf('jianjie') !== -1 ? 'nav-current' : ''" >公司简介</a></li>
        <li><a 
          id="menu_2" 
          :href="$store.state.member.id + '-cpfw'" 
          :class="tpath.indexOf('cpfw') !== -1 ? 'nav-current' : ''">产品服务 </a></li>
        <li><a 
          id="menu_3" 
          :href="$store.state.member.id + '-wangdian'" 
          :class="tpath.indexOf('wangdian') !== -1 ? 'nav-current' : ''">网点分布</a></li>
            
        <li><a 
          id="menu_4" 
          :href="$store.state.member.id + '-line'" 
          :class="tpath.indexOf('line') !== -1 ? 'nav-current' : ''">物流专线</a></li>
            
        <li ><a 
          id="menu_huo" 
          :href="$store.state.member.id + '-huo'" 
          :class="tpath.indexOf('huo') !== -1 ? 'nav-current' : ''">货源信息</a></li>
        <li ><a 
          id="menu_online_order" 
          :href="$store.state.member.id + '-order?uid=' + $store.state.member.id" 
          :class="tpath.indexOf('order') !== -1 ? 'nav-current' : ''" 
          target="_blank"
          class="need_companyId">在线下单</a></li>
        <li><a 
          id="menu_5" 
          :href="$store.state.member.id + '-webnotice'" 
          :class="tpath.indexOf('webnotice') !== -1 ? 'nav-current' : ''">公司动态</a></li>
            
        <li><a 
          id="menu_6" 
          :href="$store.state.member.id + '-contactus'" 
          :class="tpath.indexOf('contactus') !== -1 ? 'nav-current' : ''">联系我们</a></li>
      </ul>
    </div>
    <div class="clear"/>
    

  </div>

</template>
<script>
export default {
  data() {
    return {
      tpath: ''
    }
  },
  mounted() {
    this.tpath = window.location.pathname
  }
}
</script>
