<template>
  <div class="hyq-sidebar">
    <i class="hyq-sidebar-icon"/>
    快速入口
    <ul class="hyq-sidebar-nav">
      <li><a 
        href="/create/order" 
        target="_blank" >发物流</a></li>
      <li><a 
        href="#" 
        target="_blank" >找大货车</a></li>
      <li><a 
        :href="xhcurl" 
        target="_blank" >找小货车</a></li>
      <li><a 
        href="/create/line" 
        target="_blank" >发布专线</a></li>
      <li><a 
        href="/create/huoyuan" 
        target="_blank" >发布货源</a></li>
      <li><a 
        href="/create/cheyuan" 
        target="_blank" >发布车源</a></li>
      <li><a 
        href="#" 
        target="_blank" >顶部<i class="icons icons-arrow"/></a></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xhcurl: 'http://biz.28china.cn//order1'
    }
  },
  mounted() {
    if (location.host.indexOf('192.168.1') !== -1) {
      this.xhcurl = 'http://192.168.1.157:8888/order1'
    }
  }
}
</script>
<style lang="scss" scoped>
.hyq-sidebar {
  position: fixed;
  width: 86px;
  left: 50%;
  margin-left: 720px;
  top: 200px;
  text-align: center;
  font-size: 12px;
  color: #ff720e;
  font-family: '微软雅黑';

  &-icon {
    background: url(../../static/images/sidebar/car.png) no-repeat 0 0;
    width: 42px;
    display: inline-block;
    height: 42px;
  }
  &-nav {
    border: 2px solid rgba(255, 199, 159, 1);
    padding: 8px;
    li {
      border-left: 1px solid rgba(255, 219, 193, 1);
      background: #fff;
      line-height: 40px;
      a {
        color: rgba(136, 132, 127, 1);
        display: block;
        width: 100%;
        height: 40px;
      }
      &:hover {
        background: #ff7717;
        a {
          color: #fff;
        }
      }
    }
  }
}
</style>
