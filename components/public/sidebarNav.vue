<template>
  <div 
    v-if="show" 
    class="hyq-sidebar">
    <i class="hyq-sidebar-icon"/>
    快速入口
    <ul class="hyq-sidebar-nav">
      <li><a 
        href="/create/order" 
        target="_blank" >发物流</a></li>
      <li><a 
        href="#"
        @click.stop.prevent="showTip" 
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
      <li class="hyq-sidebar-nav-last"><a 
        href="#"
        @click.stop.prevent="goToTop" 
        target="_blank" >顶部<i class="icons icons-arrow"/></a></li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xhcurl: 'http://biz.28china.cn//order1',
      show: false
    }
  },
  mounted() {
    if (location.host.indexOf('192.168.1') !== -1) {
      this.xhcurl = 'http://192.168.1.157:8888/order1'
    }
    let $el = $('.hyq-sidebar')
    let $win = $(window)
    let timer
    let fn = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        if ($win.scrollTop() > 500) {
          this.show = true
        } else {
          this.show = false
        }
      }, 50)
    }
    $win.on('scroll', fn)
  },
  methods: {
    goToTop() {
      $('body,html').animate({
        scrollTop: 0
      })
    },
    showTip() {
      let msg = '功能正在开发中。敬请期待！'
      if (window.layer) {
        layer.msg(msg)
      } else {
        alert(msg)
      }
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
    display: block;
    margin: 0 auto;
    height: 42px;
    margin-bottom: 3px;
  }
  &-nav {
    margin-top: 9px;
    border: 2px solid rgba(255, 199, 159, 1);
    padding: 8px;
    li {
      border-left: 1px solid rgba(255, 219, 193, 1);
      border-right: 1px solid rgba(255, 219, 193, 1);
      background: #fff;
      line-height: 40px;
      a {
        color: rgba(136, 132, 127, 1);
        display: block;
        width: 100%;
        height: 40px;
        border-bottom: 1px dashed #ffcfad;
      }
      &:hover {
        background: #ff7717;
        a {
          color: #fff;
        }
      }

      &:first-child {
        border-top: 1px solid rgba(255, 219, 193, 1);
      }
      &:last-child {
        border-bottom: 1px solid rgba(255, 219, 193, 1);
        a {
          border-bottom: none;
        }
      }

      &.hyq-sidebar-nav-last:hover {
        background: #fff;

        a {
          color: #ff7717;
        }
        .icons-arrow {
          background-position: 0 -13px;
        }
      }
    }
  }
  .icons-arrow {
    display: inline-block;
    width: 12px;
    height: 13px;
    background: url(../../static/images/sidebar/arrow.png) no-repeat 0 0;
    margin-left: 3px;
  }
}
</style>
