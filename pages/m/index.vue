<template>
  <div class="home">
    <img
      class="top"
      src="/m/home/home_banner.png" >
    <div class="body flex_f">
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
              @click="toClick(item.name)">
              <img
                :src="item.url"
                style="height: 0.56rem">
              <div class="c-7 f-26">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="flex_sb f-16 p_r">
      <div
        class="circle_out flex"
        @click="showMask = true">
        <div class="circle_in flex">
          <img
            src="/m/home/home_fahuo.png"
            style="width: 50%">
        </div>
      </div>
      <div class="h flex_sb flex_f">
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
      <div class="h flex_sb flex_f">
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

    <div
      class="flex"
      :class="[showMask?'mask2':'']"
      v-if="showMask"
      @click="showMask = false">
      <div
        class="down_window flex_f"
        @click.stop.prevent="">
        <div class="flex_jfe">
          <img
            src="/images/login_close.png"
            @click="showMask = false">
        </div>
        <div class="f-46 t_c f_w">APP下单发货</div>
        <div class="f-32 t_c f_w">注册立送8200元，名满即止</div>
        <div class="f-32 t_c f_w">发货贵了，差价双倍返还</div>
        <img
          src="/m/home/u23.png"
          class="width_100">
        <div
          class="down f-32 f_w flex"
          @click="downApp()">前往下载</div>
        <div
          class="f-32 t_c f_w margin_t_20"
          @click="showMask = false">暂不</div>
      </div>
    </div>
  </div>

</template>
<script>
import SelectAddress from '../../components/m/selectAddress'
export default {
  components: { SelectAddress },
  layout: 'm',
  data() {
    return {
      showMask: false,
      navList: [
        { id: 0, name: '找专线' },
        { id: 1, name: '找货源' },
        { id: 2, name: '找车源' }
      ],
      content1List: [
        {
          name: '专线大厅',
          url: '/m/home/home_zhuanxian.png',
          bc: '#929DFB',
          to: '/m/pageView'
        },
        {
          name: '货源大厅',
          url: '/m/home/home_huoyuandt.png',
          bc: '#F77D5E',
          to: '/m/pageView'
        },
        {
          name: '车源大厅',
          url: '/m/home/home_cheyuandt.png',
          bc: '#F6CB43',
          to: '/m/pageView'
        },
        {
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
          to: '/m/huoyuan'
        },
        {
          name: 'APP下载',
          url: '/m/home/home_app.png',
          to: ''
        },
        {
          name: '活动中心',
          url: '/m/home/home_huodong.png',
          to: '/m/gongsi'
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
      console.log(this.$store.state.m)
    },
    toList(item, i) {
      this.$router.push(item.to)
      this.$store.commit('m/pageView/setData', {
        name: 'footerId',
        data: i
      })
      if (item.name === '专线大厅') {
        this.$store.commit('m/zhuanxian/setData', {
          name: 'currentPage',
          data: 1
        })
        this.$store.commit('m/zhuanxian/setData', {
          name: 'rangeList',
          data: []
        })
        this.$store.commit('m/zhuanxian/setData', {
          name: 'scrollTo',
          data: 0
        })
        let parm = {
          currentPage: this.$store.state.m.zhuanxian.currentPage,
          pageSize: 20,
          startProvince: this.$store.state.m.zhuanxian.startName[0],
          startCity: this.$store.state.m.zhuanxian.startName[1],
          startArea: this.$store.state.m.zhuanxian.startName[2],
          endProvince: this.$store.state.m.zhuanxian.endName[0],
          endCity: this.$store.state.m.zhuanxian.endName[1],
          endArea: this.$store.state.m.zhuanxian.endName[2]
        }
        // 专线列表
        this.$store.dispatch('m/zhuanxian/GETRANGELIST', {
          data: parm,
          name: 'rangeList'
        })
      }
      if (item.name === '货源大厅') {
        this.$store.commit('m/zhuanxian/setData', {
          name: 'currentPage',
          data: 1
        })
        this.$store.commit('m/zhuanxian/setData', {
          name: 'rangeList',
          data: []
        })
        this.$store.commit('m/zhuanxian/setData', {
          name: 'scrollTo',
          data: 0
        })
        let parm = {
          currentPage: this.$store.state.m.zhuanxian.currentPage,
          pageSize: 20,
          startProvince: this.$store.state.m.zhuanxian.startName[0],
          startCity: this.$store.state.m.zhuanxian.startName[1],
          startArea: this.$store.state.m.zhuanxian.startName[2],
          endProvince: this.$store.state.m.zhuanxian.endName[0],
          endCity: this.$store.state.m.zhuanxian.endName[1],
          endArea: this.$store.state.m.zhuanxian.endName[2]
        }
        // 专线列表
        this.$store.dispatch('m/zhuanxian/GETRANGELIST', {
          data: parm,
          name: 'rangeList'
        })
      }
      if (item.name === '物流公司') {
        this.$store.commit('m/gongsi/setData', {
          name: 'currentPage',
          data: 1
        })
        this.$store.commit('m/gongsi/setData', {
          name: 'rangeList',
          data: []
        })
        this.$store.commit('m/gongsi/setData', {
          name: 'scrollTo',
          data: 0
        })
        let parm = {
          currentPage: this.$store.state.m.gongsi.currentPage,
          pageSize: 20,
          startProvince: this.$store.state.m.gongsi.startName[0],
          startCity: this.$store.state.m.gongsi.startName[1],
          startArea: this.$store.state.m.gongsi.startName[2],
          endProvince: this.$store.state.m.gongsi.endName[0],
          endCity: this.$store.state.m.gongsi.endName[1],
          endArea: this.$store.state.m.gongsi.endName[2]
        }
        // 专线列表
        this.$store.dispatch('m/gongsi/GETRANGELIST', {
          data: parm,
          name: 'rangeList'
        })
      }
    },
    toClick(name) {
      if (name === '在线下单' || name === 'APP下载') {
        this.showMask = true
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
    },
    downApp() {
      window.location.href = 'http://h5.28tms.com/'
    }
  }
}
</script>
<style scoped lang="scss">
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
.mask2 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 13;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.down_window {
  width: 80%;
  height: 8.2rem;
  z-index: 100;
  background: #ee595a;
  padding: 0.2rem;
  .down {
    margin: 0 auto;
    width: 4.8rem;
    height: 0.9rem;
    background: #ffaa00;
  }
}
</style>
