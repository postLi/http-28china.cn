<template>
  <div class="side_left">
    <ul><li class="side_title"><span>客户服务</span></li>
      <li 
        :class="tpath.indexOf('order') !== -1 ? 'active' : ''" 
        class="side_memu"><a :href="mid + '-order'"><span>在线下单</span></a></li>
      <li 
        :class="tpath.indexOf('order') === -1 ? 'active' : ''" 
        class="side_memu"><span>查询服务</span></li>
      <ul class="side_submemu ">
        <li :class="tpath.indexOf('chajian') !== -1 ? 'now' : ''"><a :href="mid + '-chajian'"><span>查件（物流追踪）</span></a></li>
        <li :class="tpath.indexOf('line') !== -1 ? 'now' : ''"><a :href="mid + '-line'"><span>物流专线</span></a></li>
        <li :class="tpath.indexOf('wangdian') !== -1 ? 'now' : ''"><a :href="mid + '-wangdian'"><span>网点分布</span></a></li>
        <li :class="tpath.indexOf('huo') !== -1 ? 'now' : ''"><a :href="mid + '-huo'"><span>货源信息</span></a></li>
      </ul>
    </ul>	
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
