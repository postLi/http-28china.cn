<template>
  <div class="body flex_f">
    <MyTop :show-line="false">
      <div class="flex_3 f-36 flex">{{ footerList[$store.state.m.pageView.footerId].name }}</div>
    </MyTop>
    <pageZhuanXian v-if="$store.state.m.pageView.footerId === 0"/>
    <pageHuoYuan v-if="$store.state.m.pageView.footerId === 1"/>
    <footer class="f-20">
      <div
        class="flex_a"
        style="height: 0.62rem;">
        <div
          class="flex flex_1 p_r"
          v-for="(item,index) in footerList"
          @click="footerNav(item)"
          :key="index">
          <div
            class="circle flex"
            v-if="item.id === 2">
            <img
              src="/m/home/home_fahuo.png"
              style="width: 0.76rem">
          </div>
          <img
            v-else
            :src="item.img"
            style="width: 0.46rem"
          >
        </div>

      </div>
      <div class="flex_a">
        <div
          class="flex flex_1"
          :class="[item.id === $store.state.m.pageView.footerId ? 'f_g': 'c-9']"
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
export default {
  components: { MyTop, pageZhuanXian, pageHuoYuan },
  layout: 'm',
  data() {
    return {
      footerList: [
        { id: 0, name: '专线大厅', img: '/m/home/lobby_icon_activity.png' },
        { id: 1, name: '货源大厅', img: '/m/home/lobby_icon_activity.png' },
        { id: 2, name: '发货', img: '' },
        { id: 3, name: '车源大厅', img: '/m/home/lobby_icon_activity.png' },
        { id: 4, name: '物流公司', img: '/m/home/lobby_icon_activity.png' }
      ]
    }
  },
  methods: {
    footerNav(item) {
      if (item.id === 2) {
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
    top: -0.74rem;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 0.9rem;
    background-color: #0d79ff;
    z-index: 10;
  }
}
</style>
