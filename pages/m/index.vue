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
              :class="[($store.state.m.startName[1]==='' && $store.state.m.startName[2]==='')?'c-9':'c-3']"
              @click="clickStart()">{{ ($store.state.m.startName[1]==='' && $store.state.m.startName[2]==='')? '选那儿送' : $store.state.m.startName[2]===''?$store.state.m.startName[1]:$store.state.m.startName[2] }}</div>
            <div class="flex_1 flex">
              <img
                src="/m/home/home_wangfan.png"
                class="change"
                @click="clickChange($store.state.m.startName,$store.state.m.endName)">
            </div>
            <div
              class="f-46 flex_1 oneElisp"
              style="text-align: end"
              :class="[($store.state.m.endName[1]==='' && $store.state.m.endName[2]==='')?'c-9':'c-3']"
              @click="clickEnd()">{{ ($store.state.m.endName[1]==='' && $store.state.m.endName[2]==='')? '往那儿运' : $store.state.m.endName[2]===''?$store.state.m.endName[1]:$store.state.m.endName[2] }}</div>
          </div>

          <div
            class="buttom f_w f-34 flex"
            @click="search()">立即搜索</div>

        </div>
      </div>
      <div class="content1 margin_t_20 flex_sb">
        <nuxt-link
          v-for="(item,index) in content1List"
          :key="index"
          :to="item.to">
          <div
            class="content1_circle flex"
            :style="{'background':item.bc}">
            <img
              :src="item.url"
              style="width: 60%">
          </div>
          <div class="c-3 f-26">{{ item.name }}</div>
        </nuxt-link>
      </div>
      <div class="content2 margin_t_20 flex_as">
        <div class="flex_sb width_100">
          <div
            class=""
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
    <footer class="flex_sb f-16">
      <div class="flex_f flex_a">
        <img
          src="/m/home/home_home.png"
          style="width: 0.46rem">
        <div>首页</div>
      </div>
      <div class="flex_f flex_a middle">
        <div class="circle flex">
          <img
            src="/m/home/home_fahuo.png"
            style="width: 0.76rem">
        </div>
        <div>发货</div>
      </div>
      <div class="flex_f flex_a">
        <img
          src="/m/home/lobby_icon_activity.png"
          style="width: 0.46rem"
        >
        <div>公告</div>
      </div>
    </footer>
    <SelectAddress
      ref="selectStartAddress"
      @setArea="getStartArea"/>
    <SelectAddress
      ref="selectEndAddress"
      @setArea="getEndArea"/>
  </div>

</template>
<script>
import SelectAddress from '../../components/m/selectAddress'
export default {
  components: { SelectAddress },
  layout: 'm',
  data() {
    return {
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
          to: '/m/zhuanxian'
        },
        {
          name: '货源大厅',
          url: '/m/home/home_huoyuandt.png',
          bc: '#F77D5E',
          to: '/m/huoyuan'
        },
        {
          name: '车源大厅',
          url: '/m/home/home_cheyuandt.png',
          bc: '#F6CB43',
          to: '/m/cheyuan'
        },
        {
          name: '物流公司',
          url: '/m/home/home_wuliugs.png',
          bc: '#5592F7',
          to: '/m/gongsi'
        }
      ],
      content2List: [
        {
          name: '在线下单',
          url: '/m/home/home_xiadan.png',
          to: '/m/zhuanxian'
        },
        {
          name: '运单查询',
          url: '/m/home/home_chaxun.png',
          to: '/m/huoyuan'
        },
        {
          name: 'APP下载',
          url: '/m/home/home_app.png',
          to: '/m/cheyuan'
        },
        {
          name: '活动中心',
          url: '/m/home/home_huodong.png',
          to: '/m/gongsi'
        }
      ]
    }
  },
  async fetch({ $axios, app, query, store }) {
    await store.dispatch('m/GETPROVINCELIST', {
      data: '',
      name: 'provinceList'
    })
  },
  created() {
    //
  },
  mounted() {
    //
  },
  methods: {
    getEndArea(data) {
      this.$store.dispatch('m/SETDATA', {
        data: data,
        name: 'endName'
      })
    },
    getStartArea(data) {
      this.$store.dispatch('m/SETDATA', {
        data: data,
        name: 'startName'
      })
    },
    search() {
      console.log(this.$store.state.m)
    },
    toClick(name) {
      //
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
      background-color: white;
      padding: 0 0.59rem;
      .content1_circle {
        width: 1rem;
        height: 1rem;
        border-radius: 1rem;
        margin-bottom: 0.1rem;
      }
    }
    .content2 {
      background-color: white;
      padding: 0 0.59rem;
      height: 4.27rem;
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
    .middle {
      position: relative;
      top: -0.34rem;
    }
    .circle {
      width: 1.16rem;
      height: 1.16rem;
      border-radius: 1.16rem;
      background-color: #3f94ee;
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
