<template>
  <div>
    <MemberBanner />
    <div class="main">
      <MemberSidebar />
      <div class="contact main_nr" >
        <div class="nr_bt">
          <div class="nr_bt1"><span>联系我们</span></div>
        </div>	
        <ul style="">
          <li class="contact1">
            <p 
              id="nr091" 
              class="p1"/>
            <p>联系人：<em id="nr092"/></p>
            <p>联系电话：<em id="nr093"/></p>
            <p>QQ：<em id="nr094"/></p>
            <p>公司地址：<em id="nr095"/></p>
    		
          </li>
          <li class="contact2">
            <p class="p1">企业信息</p>
            <p>公司名称：<em id="nr096"/></p>
            <p>营业执照：<em id="nr097"/></p>
            <p>法人/负责人：<em id="nr098"/></p>
            <p>公司成立时间：<em id="nr099"/></p>
            <p>代收货款：<em id="nr0910"/></p>
    		
        </li></ul>
        <div class="map" >
          <div 
            id="allmap" 
            style="overflow: hidden; position: relative; z-index: 0; background-color: rgb(243, 241, 236); color: rgb(0, 0, 0); text-align: left;"/>
          <div class="detail">
            <div class="detail-main">
              <dl class="address">
                <dt>
                  <div class="bg-img first"/>
                  <p>地址</p>
                </dt>
                <dd id="nr0911"/>
              </dl>
              <dl>
                <dt class="postal-code">
                  <div class="bg-img"/>
                  <p>法人代表</p>
                </dt>
                <dd id="nr0912"/>
              </dl>
              <dl class="server-phone">
                <dt>
                  <div class="bg-img"/>
                  <p>全国统一客服热线</p>
                </dt>
                <dd id="nr0913"/>
              </dl>
              <dl class="website">
                <dt>
                  <div class="bg-img"/>
                  <p>公司名称</p>
                </dt>
                <dd id="nr0914"/>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import MemberBanner from '~/components/member/banner'
import MemberSidebar from '~/components/member/sidebar'

export default {
  components: {
    MemberBanner,
    MemberSidebar
  },
  layout: 'member',
  head: {
    link: [
      { rel: 'stylesheet', href: '/member/css/list.css' },
      { rel: 'stylesheet', href: '/member/css/contactUs.css' }
    ]
  },
  mounted() {
    seajs.use(
      [
        'http://api.map.baidu.com/getscript?v=2.0&ak=e0abRWFWOrgmN7emYjQGPj4Z0vyTVTfo&services=&t=20190102133327',
        '/member/js/index.js',
        '/index/js/collection.js'
      ],
      function() {
        var map = new BMap.Map('allmap')
        var obj3 = new Object()
        obj3 = member_01()
        var jwd = obj3.jwd
        var newLoc = jwd.split(',')
        var point = new BMap.Point(parseFloat(newLoc[0]), parseFloat(newLoc[1]))
        map.centerAndZoom(point, 17)
        var marker = new BMap.Marker(point) // 创建标注
        map.addOverlay(marker) // 将标注添加到地图中
        marker.setAnimation(BMAP_ANIMATION_BOUNCE) //跳动的动画

        //添加地图类型控件

        map.addControl(
          new BMap.MapTypeControl({
            mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
          })
        )
        map.setCurrentCity('广州') // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放
        var opts = { type: BMAP_NAVIGATION_CONTROL_SMALL }
        map.addControl(new BMap.NavigationControl(opts))
      }
    )
  },
  fetch({ store, params }) {
    store.commit('member/setId', params.id)
  }
}
</script>
