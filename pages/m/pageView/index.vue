<template>
  <div class="body flex_f">
    <MyTop :show-line="false">
      <div class="flex_3 f-36 flex">{{ footerList[$store.state.m.pageView.footerId].name }}</div>
    </MyTop>
    <pageZhuanXian v-if="$store.state.m.pageView.footerId === 0"/>
    <pageHuoYuan v-if="$store.state.m.pageView.footerId === 1"/>
    <pageGongSi v-if="$store.state.m.pageView.footerId === 3"/>
    <footer class="f-20">
      <div
        class="flex_a"
        style="height: 0.62rem;">
        <div
          class="flex flex_1 p_r height_100"
          v-for="(item,index) in footerList"
          @click="footerNav(item)"
          :key="index">
          <div
            class="circle flex"
            v-if="item.id === 4">
            <img
              src="/m/home/home_fahuo.png"
              style="width: 0.76rem">
          </div>
          <img
            v-else
            :src="item.id === $store.state.m.pageView.footerId ? item.img_selected: item.img"
            style="height: 90%"
          >
        </div>

      </div>
      <div class="flex_a">
        <div
          class="flex flex_1"
          :class="[item.id === $store.state.m.pageView.footerId ? 'f_b': 'c-9']"
          v-for="(item, index) in footerList"
          :key="index">{{ item.name }}</div>
      </div>
    </footer>
  </div>
</template>
<script>
import MyTop from '../../../components/m/myTop'
import pageZhuanXian from '../zhuanxian'
import pageHuoYuan from '../huoyuan'
import pageGongSi from '../gongsi'
export default {
  components: { MyTop, pageZhuanXian, pageHuoYuan, pageGongSi },
  layout: 'm',
  data() {
    return {
      footerList: [
        {
          id: 0,
          name: '专线大厅',
          img: '/m/home/lobby_icon_cargo_h.png',
          img_selected: '/m/home/lobby_icon_cargo_l.png'
        },
        {
          id: 1,
          name: '货源大厅',
          img: '/m/home/lobby_icon_zhuanxian_h.png',
          img_selected: '/m/home/lobby_icon_zhuanxian_l.png'
        },
        { id: 4, name: '发货', img: '' },
        {
          id: 2,
          name: '车源大厅',
          img: '/m/home/lobby_icon_car_h.png',
          img_selected: '/m/home/lobby_icon_car_l.png'
        },
        {
          id: 3,
          name: '物流公司',
          img: '/m/home/lobby_icon_activity_h.png',
          img_selected: '/m/home/lobby_icon_activity_l.png'
        }
      ]
    }
  },
  methods: {
    footerNav(item) {
      if (item.id === 4) {
        return
      }
      this.$store.commit('m/pageView/setData', {
        name: 'footerId',
        data: item.id
      })
    }
  }
}
</script>
<style scoped lang="scss">
.body {
  background: #f4f4f4;
  height: inherit;
}
footer {
  min-height: 1rem;
  .circle {
    position: absolute;
    top: -70%;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 0.9rem;
    background-color: #0d79ff;
    z-index: 10;
  }
}
</style>
<style>
.page_view_top {
  height: 0.55rem;
}
.page_view_triangle-down-g {
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 5px solid #2fb301;
}
.page_view_triangle-down-9 {
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 5px solid #999999;
}
</style>
