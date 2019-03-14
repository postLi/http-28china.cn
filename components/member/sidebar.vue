<template>
  <div class="side_left">
    <ul><li class="side_title"><span>关于我们</span></li>
      <li 
        :class="tpath.indexOf('jianjie') !== -1 ? 'active' : ''" 
        class="side_memu"><a :href="mid + '-jianjie'"><span>公司简介</span></a></li>
      <!-- <li 
        :class="tpath.indexOf('webnotice') !== -1 ? 'active' : ''" 
        class="side_memu"><a :href="mid + '-webnotice'"><span>公司动态</span></a></li> -->
      <li 
        :class="tpath.indexOf('contactus') !== -1 ? 'active' : ''" 
        class="side_memu"><a :href="mid + '-contactus'"><span>联系我们</span></a></li>
      <li 
        :class="tpath.indexOf('cpfw') !== -1 ? 'active' : ''" 
        class="side_memu"><a :href="mid + '-cpfw'"><span>产品服务</span></a></li>
      <ul 
        v-if="tpath.indexOf('cpfw') !== -1" 
        class="side_submemu">
        <li :class="tpath.indexOf('cpfw2') === -1 ? 'now' : ''" ><a :href="mid + '-cpfw'"><span>主营产品</span></a></li>
        <li :class="tpath.indexOf('cpfw2') !== -1 ? 'now' : ''"><a :href="mid + '-cpfw2'"><span>增值服务</span></a></li>
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
