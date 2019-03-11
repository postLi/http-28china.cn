<template>
  <div class="navigation">
    <div class="menu">
      <ul class="nav">
        <li><a 
          id="menu_0" 
          :href="mid + ''" 
          :class="/\/[^-]*$/.test(tpath) ? 'nav-current' : ''">首页</a></li>

        <li><a 
          id="menu_1" 
          :href="mid + '-jianjie'"
          :class="tpath.indexOf('jianjie') !== -1 ? 'nav-current' : ''" >公司简介</a></li>
        <li><a 
          id="menu_2" 
          :href="mid + '-cpfw'" 
          :class="tpath.indexOf('cpfw') !== -1 ? 'nav-current' : ''">产品服务 </a></li>
        <li><a 
          id="menu_3" 
          :href="mid + '-wangdian'" 
          :class="tpath.indexOf('wangdian') !== -1 ? 'nav-current' : ''">网点分布</a></li>
            
        <li><a 
          id="menu_4" 
          :href="mid + '-line'" 
          :class="tpath.indexOf('line') !== -1 ? 'nav-current' : ''">物流专线</a></li>
            
        <li ><a 
          id="menu_huo" 
          :href="mid + '-huo'" 
          :class="tpath.indexOf('huo') !== -1 ? 'nav-current' : ''">货源信息</a></li>
        <li ><a 
          id="menu_online_order" 
          :href="mid + '-order?uid=' + mid + '&publishId=' + mid" 
          :class="tpath.indexOf('order') !== -1 ? 'nav-current' : ''" 
          target="_blank"
          class="need_companyId">在线下单</a></li>
        <li><a 
          id="menu_5" 
          :href="mid + '-webnotice'" 
          :class="tpath.indexOf('webnotice') !== -1 ? 'nav-current' : ''">公司动态</a></li>
            
        <li><a 
          id="menu_6" 
          :href="mid + '-contactus'" 
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
  computed: {
    mid() {
      return this.$store.state.member.id
    }
  },
  mounted() {
    this.tpath = window.location.pathname
  }
}
</script>
