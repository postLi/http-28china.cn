<template>
  <div class="home">
    <img
      class="top"
      v-if="$store.state.m.showHome === 0"
      src="/m/home/home_banner.png" >
    <div
      class="body flex_f"
      v-if="$store.state.m.showHome === 0">
      <div class="nav flex_f">
        <div class="nav_top flex_a f-34">
          <div
            class="flex_1 flex height_100"
            v-for="(item,index) in navList"
            :class="[(item.id === $store.state.m.navId)?'nav_top_selected':'']"
            :key="index"
            @click="clickNav(item.id)">{{ item.name }}</div>
        </div>
        <div class="flex_1 nav_down padding_20 flex_f flex_sb">
          <div class="flex_sb f-22 width_100">
            <div><span class="circle b_c_g"/>出发地</div>
            <div><span class="circle b_c_r"/>到达地</div>
          </div>
          <div class="flex_sb width_100">
            <div
              class="f-46 flex_1 oneElisp"
              :class="[($store.state.m.startName[0]!=='' && $store.state.m.startName[1]==='' && $store.state.m.startName[2]==='')?'c-9':'c-3']"
              @click="clickStart()">{{ $store.state.m.startName[0]===''?'全国': ($store.state.m.startName[1]==='' && $store.state.m.startName[2]==='')? '选那儿送' : $store.state.m.startName[2]===''?$store.state.m.startName[1]:$store.state.m.startName[2] }}</div>
            <div class="flex_1 flex">
              <img
                src="/m/home/home_wangfan.png"
                class="change"
                @click="clickChange($store.state.m.startName,$store.state.m.endName)">
            </div>
            <div
              class="f-46 flex_1 oneElisp"
              style="text-align: end"
              :class="[($store.state.m.endName[0]!=='' && $store.state.m.endName[1]==='' && $store.state.m.endName[2]==='')?'c-9':'c-3']"
              @click="clickEnd()">{{ $store.state.m.endName[0]===''?'全国': ($store.state.m.endName[1]==='' && $store.state.m.endName[2]==='')? '往那儿运' : $store.state.m.endName[2]===''?$store.state.m.endName[1]:$store.state.m.endName[2] }}</div>
          </div>

          <div
            class="buttom f_w f-34 flex"
            @click="search()">立即搜索</div>

        </div>
      </div>
      <div class="content1 margin_t_20 flex_saf">
        <div
          class="flex_f flex"
          v-for="(item,index) in content1List"
          :key="index"
          @click="toList(item,index)">
          <div
            class="content1_circle flex"
            :style="{'background':item.bc}">
            <img
              :src="item.url"
              style="width: 60%">
          </div>
          <div class="c-3 f-26">{{ item.name }}</div>
        </div>
      </div>
      <div class="content2 flex_as">
        <div class="flex_saf width_100">
          <div
            class="flex_f flex"
            v-for="(item,index) in content2List"
            :key="index">
            <div
              class="flex_a flex_f"
              @click="toClick(item)">
              <img
                :src="item.url"
                style="height: 0.56rem">
              <div class="c-7 f-26">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$store.state.m.showHome === 1">
      <img
        class="top"
        src="/m/home/banner.png" >
      <div
        class="flex_a b_c_w gg_item"
        v-for="(item, index) in $store.state.m.NoticeList"
        @click="toNotice(item)"
        :key="index">
        <img
          src="/m/home/gonggao_huozhu.png"
          v-if="index % 2 === 0">
        <img
          src="/m/home/gonggao_fuli.png"
          v-if="index % 2 !== 0">
        <div class="margin_l_20 right">
          <div class="c-3 f-32">{{ item.name }}</div>
          <div class="c-9 f-26">{{ item.title }}</div>
        </div>
      </div>
      <!--      <div class="flex_a b_c_w gg_item">-->
      <!--        <img src="/m/home/gonggao_miji.png">-->
      <!--        <div class="margin_l_20 right">-->
      <!--          <div class="c-3 f-32">接单秘籍</div>-->
      <!--          <div class="c-9 f-26">排除这些问题，比小心开车还省油！</div>-->
      <!--        </div>-->
      <!--      </div>-->
      <div
        class="flex_a b_c_w gg_item"
        @click="$router.push('/m/gg/ggList?adcode=' + $store.state.m.adcode)">
        <img src="/m/home/gonggao_miji.png">
        <div class="margin_l_20 right">
          <div class="c-3 f-32">货主公告</div>
          <div class="c-9 f-26">{{ $store.state.m.HZGGList[0].title }}</div>
        </div>
      </div>
    </div>
    <footer class="flex_sb f-16 p_r">
      <div
        class="circle_out flex"
        @click="$refs.downApp.showMask = true">
        <div class="circle_in flex">
          <img
            src="/m/home/home_fahuo.png"
            style="width: 50%">
        </div>
      </div>
      <div
        class="h flex_sb flex_f"
        @click="toHome(0)">
        <img
          src="/m/home/home_home.png"
          style="width: 0.46rem">
        <div class="f-16">首页</div>
      </div>
      <div
        class="h flex_sb flex_f"
        @click="showMask = true"
      >
        <div class="circle flex">
          <div class="circle"/>
        </div>
        <div class="f-16">发货</div>
      </div>
      <div
        class="h flex_sb flex_f"
        @click="toHome(1)">
        <img
          src="/m/home/lobby_icon_activity.png"
          style="width: 0.46rem"
        >
        <div class="f-16">公告</div>
      </div>
    </footer>
    <SelectAddress
      ref="selectStartAddress"
      @setArea="getStartArea"/>
    <SelectAddress
      ref="selectEndAddress"
      @setArea="getEndArea"/>

    <down-app ref="downApp"/>
  </div>

</template>
<script>
import SelectAddress from '../../components/m/selectAddress'
import DownApp from '../../components/m/downApp'
export default {
  components: { DownApp, SelectAddress },
  layout: 'm',
  data() {
    return {
      navList: [
        { id: 0, name: '找专线' },
        { id: 1, name: '找货源' },
        { id: 3, name: '找车源' }
      ],
      content1List: [
        {
          id: 0,
          name: '专线大厅',
          url: '/m/home/home_zhuanxian.png',
          bc: '#929DFB',
          to: '/m/pageView'
        },
        {
          id: 1,
          name: '货源大厅',
          url: '/m/home/home_huoyuandt.png',
          bc: '#F77D5E',
          to: '/m/pageView'
        },
        {
          id: 3,
          name: '车源大厅',
          url: '/m/home/home_cheyuandt.png',
          bc: '#F6CB43',
          to: '/m/pageView'
        },
        {
          id: 4,
          name: '物流公司',
          url: '/m/home/home_wuliugs.png',
          bc: '#5592F7',
          to: '/m/pageView'
        }
      ],
      content2List: [
        {
          name: '在线下单',
          url: '/m/home/home_xiadan.png',
          to: ''
        },
        {
          name: '运单查询',
          url: '/m/home/home_chaxun.png',
          to: '/m/ydcx'
        },
        {
          name: 'APP下载',
          url: '/m/home/home_app.png',
          to: ''
        },
        {
          name: '活动中心',
          url: '/m/home/home_huodong.png',
          to: ''
        }
      ]
    }
  },
  async fetch({ $axios, app, query, store }) {},
  created() {
    //
  },
  mounted() {
    //
  },
  methods: {
    toHome(int) {
      this.$store.commit('m/setData', {
        name: 'showHome',
        data: int
      })
    },
    toNotice(item) {
      this.$router.push(
        `/m/gg/ggList?name=${item.name ? item.name : ''}&noticeGroupCode=${
          item.code
        }`
      )
    },
    getEndArea(data) {
      if (data) {
        this.$store.dispatch('m/SETDATA', {
          data: data,
          name: 'endName'
        })
      }
    },
    getStartArea(data) {
      if (data) {
        this.$store.dispatch('m/SETDATA', {
          data: data,
          name: 'startName'
        })
      }
    },
    search() {
      this.$store.commit('m/pageView/setData', {
        name: 'footerId',
        data: this.$store.state.m.navId
      })
      this.$router.push('/m/pageView')
      let startName = [
        this.$store.state.m.startName[0],
        this.$store.state.m.startName[1],
        this.$store.state.m.startName[2]
      ]
      let endName = [
        this.$store.state.m.endName[0],
        this.$store.state.m.endName[1],
        this.$store.state.m.endName[2]
      ]
      if (this.$store.state.m.navId === 0) {
        this.$store.commit('m/zhuanxian/resetData')
        this.$store.commit('m/zhuanxian/setData', {
          name: 'startName',
          data: startName
        })
        this.$store.commit('m/zhuanxian/setData', {
          name: 'endName',
          data: endName
        })
        let parm = {
          currentPage: this.$store.state.m.zhuanxian.currentPage,
          pageSize: 20,
          startProvince: this.$store.state.m.zhuanxian.startName[0],
          startCity: this.$store.state.m.zhuanxian.startName[1],
          startArea: this.$store.state.m.zhuanxian.startName[2],
          endProvince: this.$store.state.m.zhuanxian.endName[0],
          endCity: this.$store.state.m.zhuanxian.endName[1],
          endArea: this.$store.state.m.zhuanxian.endName[2],
          orderBy: this.$store.state.m.zhuanxian.orderBy.value
        }
        // 专线列表
        this.$store.dispatch('m/zhuanxian/GETRANGELIST', {
          data: parm,
          name: 'rangeList'
        })
      }
      if (this.$store.state.m.navId === 1) {
        this.$store.commit('m/huoyuan/resetData')
        this.$store.commit('m/huoyuan/setData', {
          name: 'startName',
          data: startName
        })
        this.$store.commit('m/huoyuan/setData', {
          name: 'endName',
          data: endName
        })
        let parm = {
          currentPage: this.$store.state.m.huoyuan.currentPage,
          pageSize: 20,
          startProvince: this.$store.state.m.huoyuan.startName[0],
          startCity: this.$store.state.m.huoyuan.startName[1],
          startArea: this.$store.state.m.huoyuan.startName[2],
          endProvince: this.$store.state.m.huoyuan.endName[0],
          endCity: this.$store.state.m.huoyuan.endName[1],
          endArea: this.$store.state.m.huoyuan.endName[2],
          queryOrderType: this.$store.state.m.huoyuan.queryOrderType.value,
          orderType: this.$store.state.m.huoyuan.screen.orderType,
          loadTimeType: this.$store.state.m.huoyuan.screen.loadTimeType,
          useCarType: this.$store.state.m.huoyuan.screen.useCarType,
          specName: this.$store.state.m.huoyuan.screen.specName
        }
        // 货源列表
        this.$store.dispatch('m/huoyuan/GETRANGELIST', {
          data: parm,
          name: 'rangeList'
        })
      }
      if (this.$store.state.m.navId === 3) {
        this.$store.commit('m/cheyuan/resetData')
        this.$store.commit('m/cheyuan/setData', {
          name: 'startName',
          data: startName
        })
        this.$store.commit('m/cheyuan/setData', {
          name: 'endName',
          data: endName
        })
        let parm = {
          currentPage: this.$store.state.m.cheyuan.currentPage,
          pageSize: 20,
          startProvince: this.$store.state.m.cheyuan.startName[0],
          startCity: this.$store.state.m.cheyuan.startName[1],
          startArea: this.$store.state.m.cheyuan.startName[2],
          endProvince: this.$store.state.m.cheyuan.endName[0],
          endCity: this.$store.state.m.cheyuan.endName[1],
          endArea: this.$store.state.m.cheyuan.endName[2],
          orderBy: this.$store.state.m.cheyuan.orderBy.value,
          carSpec: this.$store.state.m.cheyuan.carSpec,
          carType: this.$store.state.m.cheyuan.carType
        }
        // 车源列表
        this.$store.dispatch('m/cheyuan/GETRANGELIST', {
          data: parm,
          name: 'rangeList'
        })
      }
    },
    toList(item) {
      this.$router.push(item.to)
      this.$store.commit('m/pageView/setData', {
        name: 'footerId',
        data: item.id
      })
      if (item.name === '专线大厅') {
        this.$store.commit('m/zhuanxian/resetData')
        this.$store.commit('m/zhuanxian/setData', {
          name: 'startName',
          data: [
            this.$store.state.m.startName0[0],
            this.$store.state.m.startName0[1],
            ''
          ]
        })
        let parm = {
          currentPage: this.$store.state.m.zhuanxian.currentPage,
          pageSize: 20,
          startProvince: this.$store.state.m.zhuanxian.startName[0],
          startCity: this.$store.state.m.zhuanxian.startName[1],
          startArea: this.$store.state.m.zhuanxian.startName[2],
          endProvince: this.$store.state.m.zhuanxian.endName[0],
          endCity: this.$store.state.m.zhuanxian.endName[1],
          endArea: this.$store.state.m.zhuanxian.endName[2],
          orderBy: this.$store.state.m.zhuanxian.orderBy.value
        }
        // 专线列表
        this.$store.dispatch('m/zhuanxian/GETRANGELIST', {
          data: parm,
          name: 'rangeList'
        })
      }
      if (item.name === '货源大厅') {
        this.$store.commit('m/huoyuan/resetData')
        this.$store.commit('m/huoyuan/setData', {
          name: 'startName',
          data: [
            this.$store.state.m.startName0[0],
            this.$store.state.m.startName0[1],
            ''
          ]
        })
        let parm = {
          currentPage: this.$store.state.m.huoyuan.currentPage,
          pageSize: 20,
          startProvince: this.$store.state.m.huoyuan.startName[0],
          startCity: this.$store.state.m.huoyuan.startName[1],
          startArea: this.$store.state.m.huoyuan.startName[2],
          endProvince: this.$store.state.m.huoyuan.endName[0],
          endCity: this.$store.state.m.huoyuan.endName[1],
          endArea: this.$store.state.m.huoyuan.endName[2],
          queryOrderType: this.$store.state.m.huoyuan.queryOrderType.value,
          orderType: this.$store.state.m.huoyuan.screen.orderType,
          loadTimeType: this.$store.state.m.huoyuan.screen.loadTimeType,
          useCarType: this.$store.state.m.huoyuan.screen.useCarType,
          specName: this.$store.state.m.huoyuan.screen.specName
        }
        // 货源列表
        this.$store.dispatch('m/huoyuan/GETRANGELIST', {
          data: parm,
          name: 'rangeList'
        })
      }
      if (item.name === '车源大厅') {
        this.$store.commit('m/cheyuan/resetData')
        this.$store.commit('m/cheyuan/setData', {
          name: 'startName',
          data: [
            this.$store.state.m.startName0[0],
            this.$store.state.m.startName0[1],
            ''
          ]
        })
        let parm = {
          currentPage: this.$store.state.m.cheyuan.currentPage,
          pageSize: 20,
          startProvince: this.$store.state.m.cheyuan.startName[0],
          startCity: this.$store.state.m.cheyuan.startName[1],
          startArea: this.$store.state.m.cheyuan.startName[2],
          endProvince: this.$store.state.m.cheyuan.endName[0],
          endCity: this.$store.state.m.cheyuan.endName[1],
          endArea: this.$store.state.m.cheyuan.endName[2],
          orderBy: this.$store.state.m.cheyuan.orderBy.value,
          carSpec: this.$store.state.m.cheyuan.carSpec,
          carType: this.$store.state.m.cheyuan.carType
        }
        // 车源列表
        this.$store.dispatch('m/cheyuan/GETRANGELIST', {
          data: parm,
          name: 'rangeList'
        })
      }
      if (item.name === '物流公司') {
        this.$store.commit('m/gongsi/resetData')
        this.$store.commit('m/gongsi/setData', {
          name: 'startName',
          data: [
            this.$store.state.m.startName0[0],
            this.$store.state.m.startName0[1]
          ]
        })
        let parm = {
          currentPage: this.$store.state.m.gongsi.currentPage,
          pageSize: 20,
          province: this.$store.state.m.gongsi.startName[0],
          city: this.$store.state.m.gongsi.startName[1],
          orderBy: this.$store.state.m.gongsi.orderBy.value,
          companyName: this.$store.state.m.gongsi.companyName
        }
        // 物流公司列表
        this.$store.dispatch('m/gongsi/GETRANGELIST', {
          data: parm,
          name: 'rangeList'
        })
      }
    },
    toClick(item) {
      if (item.name === '在线下单') {
        this.$refs.downApp.showMask = true
      }
      if (item.name === 'APP下载') {
        window.location.href = 'http://h5.28tms.com/'
      }
      if (item.name === '运单查询') {
        this.$router.push(item.to)
      }
      if (item.name === '活动中心') {
        this.$store.commit('m/setData', {
          name: 'showHome',
          data: 1
        })
      }
    },
    clickEnd() {
      this.$refs.selectEndAddress.showMask = true
    },
    clickStart() {
      this.$refs.selectStartAddress.showMask = true
    },
    clickChange(startName, endName) {
      this.$store.dispatch('m/SETDATA', {
        data: endName,
        name: 'startName'
      })
      this.$store.dispatch('m/SETDATA', {
        data: startName,
        name: 'endName'
      })
    },
    clickNav(id) {
      this.$store.dispatch('m/SETDATA', {
        data: id,
        name: 'navId'
      })
    }
  }
}
</script>
<style scoped lang="scss">
.gg_item {
  height: 1.2rem;
  padding-left: 0.3rem;
  img {
    width: 0.78rem;
    height: 0.78rem;
  }
  .right {
    line-height: 0.37rem;
  }
}
.home {
  height: inherit;
  background: #f4f4f4;
  .top {
    width: 100%;
  }
  .body {
    position: relative;
    top: -1.3rem;
    .nav {
      width: 90%;
      margin: 0 auto;
      height: 3.68rem;
      .nav_top {
        height: 0.88rem;
        background-color: rgba(51, 51, 51, 0.5);
        border-top-left-radius: 0.16rem;
        border-top-right-radius: 0.16rem;
        color: white;
      }
      .nav_down {
        background-color: white;
        border-bottom-left-radius: 0.16rem;
        border-bottom-right-radius: 0.16rem;
        .circle {
          display: inline-block;
          width: 0.18rem;
          height: 0.18rem;
          border-radius: 0.18rem;
          margin-right: 0.14rem;
        }
        .change {
          width: 0.68rem;
          height: 0.68rem;
        }
        .buttom {
          width: 95%;
          height: 0.8rem;
          background: linear-gradient(
            90deg,
            rgba(97, 174, 255, 1) 0%,
            rgba(52, 151, 255, 1) 100%
          );
          border-radius: 0.16rem;
        }
      }
    }
    .content1 {
      height: 1.88rem;
      width: 90%;
      background-color: white;
      margin: 0.2rem auto 0;
      border-radius: 0.16rem;
      .content1_circle {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        margin-bottom: 0.1rem;
      }
    }
    .content2 {
      background-color: white;
      height: 4.27rem;
      width: 90%;
      border-radius: 0.16rem;
      margin: 0.2rem auto 0;

      img {
        margin: 0.3rem 0 0.1rem 0;
      }
    }
  }
  footer {
    position: fixed;
    width: 100%;
    bottom: 0;
    height: 0.98rem;
    padding: 0 1.31rem;
    background: rgba(246, 248, 250, 1);
    box-shadow: 0 -0.02rem 0.08rem 0 rgba(20, 20, 20, 0.05),
      0 0 0.06rem 0 rgba(20, 20, 20, 0.05);
    color: #42474b;
    box-sizing: border-box;
    .h {
      height: 0.8rem;
    }
    .middle {
      position: relative;
      top: -0.34rem;
    }
    .circle {
      width: 0.46rem;
      height: 0.46rem;
    }
    .circle_out {
      width: 1rem;
      height: 1rem;
      background-color: white;
      position: absolute;
      top: -0.5rem;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 0.5rem;
      box-shadow: 0px -2px 2px 0px rgba(158, 158, 158, 0.5);
      .circle_in {
        width: 85%;
        height: 85%;
        border-radius: 1.16rem;
        background-color: #3f94ee;
      }
    }
  }
}
.nav_top_selected {
  background-color: white;
  border-top-left-radius: 0.16rem;
  border-top-right-radius: 0.16rem;
  color: #000000;
}
</style>
