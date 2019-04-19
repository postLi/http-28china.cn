<template>
  <div class="layout_main">
    <nuxt/>
  </div>
</template>
<script>
const rem =
  '!function(e){var t,n=document,i=window,o=n.documentElement;function u(){var t=o.getBoundingClientRect().width/e*100;o.style.fontSize=t+"px"}u(),i.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(u,300)},!1),i.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(t),t=setTimeout(u,300))},!1)}(750);'
Date.prototype.format = function(fmt) {
  var o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  return fmt
}
export default {
  head: {
    meta: [{ name: 'format-detection', content: 'telephone=yes' }],
    script: [
      { innerHTML: rem, type: 'text/javascript', charset: 'utf-8' },
      {
        src:
          'https://webapi.amap.com/maps?v=1.4.10&key=e61aa7ddc6349acdb3b57c062080f730'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  beforeCreate() {
    console.log(123132)
    //省列表
    if (this.$store.state.m.provinceList.length === 0) {
      this.$store.dispatch('m/GETPROVINCELIST', {
        data: '',
        name: 'provinceList'
      })
    }
    //货源类型
    this.$store.dispatch('m/GETDICT', {
      data: 'AF0491801',
      name: 'AF0491801List'
    })
    //装货时间
    this.$store.dispatch('m/GETDICT', {
      data: 'AF0491802',
      name: 'AF0491802List'
    })
    //用车类型
    this.$store.dispatch('m/GETDICT', {
      data: 'AF0491803',
      name: 'AF0491803List'
    })
    //车辆规格
    this.$store.dispatch('m/GETDICT', {
      data: 'AF009',
      name: 'AF009List'
    })
    //车辆类型
    this.$store.dispatch('m/GETDICT', {
      data: 'AF018',
      name: 'AF018List'
    })
  },
  beforeMount() {
    // 因为要获取坐标，所以列表接口放在这里
    AMap.plugin('AMap.CitySearch', () => {
      let citySearch = new AMap.CitySearch()
      citySearch.getLocalCity((status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          // 热点通知
          this.$store.dispatch('m/GETNOTICELIST', {
            data: result.adcode,
            name: 'NoticeList'
          })
          // 首页开始地 原始值
          this.$store.dispatch('m/SETDATA', {
            data: [result.province, result.city, ''],
            name: 'startName0'
          })
          // 首页开始地
          this.$store.dispatch('m/SETDATA', {
            data: [result.province, result.city, ''],
            name: 'startName'
          })
          // 专线页开始地
          this.$store.dispatch('m/zhuanxian/SETDATA', {
            data: [result.province, result.city, ''],
            name: 'startName'
          })
          // 货源页开始地
          this.$store.dispatch('m/huoyuan/SETDATA', {
            data: [result.province, result.city, ''],
            name: 'startName'
          })
          // 车源页开始地
          this.$store.dispatch('m/cheyuan/SETDATA', {
            data: [result.province, result.city, ''],
            name: 'startName'
          })
          // 公司页开始地
          this.$store.dispatch('m/gongsi/SETDATA', {
            data: [result.province, result.city, ''],
            name: 'startName'
          })
          // 专线列表
          this.$store.dispatch('m/zhuanxian/GETRANGELIST', {
            data: {
              currentPage: this.$store.state.m.zhuanxian.currentPage,
              pageSize: 20,
              startProvince: result.province,
              startCity: result.city,
              startArea: '',
              endProvince: '',
              endCity: '',
              endArea: '',
              orderBy: this.$store.state.m.zhuanxian.orderBy.value
            },
            name: 'rangeList'
          })
          // 货源列表
          this.$store.dispatch('m/huoyuan/GETRANGELIST', {
            data: {
              currentPage: this.$store.state.m.huoyuan.currentPage,
              pageSize: 20,
              startProvince: result.province,
              startCity: result.city,
              startArea: '',
              endProvince: '',
              endCity: '',
              endArea: '',
              queryOrderType: this.$store.state.m.huoyuan.queryOrderType.value,
              orderType: this.$store.state.m.huoyuan.screen.orderType,
              loadTimeType: this.$store.state.m.huoyuan.screen.loadTimeType,
              useCarType: this.$store.state.m.huoyuan.screen.useCarType,
              specName: this.$store.state.m.huoyuan.screen.specName
            },
            name: 'rangeList'
          })
          //车源列表
          this.$store.dispatch('m/cheyuan/GETRANGELIST', {
            data: {
              currentPage: this.$store.state.m.cheyuan.currentPage,
              pageSize: 20,
              startProvince: result.province,
              startCity: result.city,
              startArea: '',
              endProvince: '',
              endCity: '',
              endArea: '',
              orderBy: this.$store.state.m.cheyuan.orderBy.value,
              carSpec: this.$store.state.m.cheyuan.carSpec,
              carType: this.$store.state.m.cheyuan.carType
            },
            name: 'rangeList'
          })
          //公司列表
          this.$store.dispatch('m/gongsi/GETRANGELIST', {
            data: {
              currentPage: this.$store.state.m.gongsi.currentPage,
              pageSize: 20,
              province: result.province,
              city: result.city,
              orderBy: this.$store.state.m.gongsi.orderBy.value,
              companyName: this.$store.state.m.gongsi.companyName
            },
            name: 'rangeList'
          })
        }
      })
    })
  },
  mounted() {}
}
</script>
<style>
/*cube-scroll样式*/
.mScroll .cube-pullup-wrapper .before-trigger {
  padding: 0;
  display: flex;
}
.mScroll .cube-pullup-wrapper .before-trigger span {
  font-size: 16px;
}
html,
body {
  margin: 0;
  padding: 0;
}
.layout_main {
  height: fill-available;
}
.width_0 {
  width: 0;
}
.width_100 {
  width: 100%;
}
.height_100 {
  height: 100%;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex_a {
  display: flex;
  align-items: center;
}
.flex_j {
  display: flex;
  justify-content: center;
}
.flex_r {
  display: flex;
}
.flex_f {
  display: flex;
  flex-direction: column;
}
.flex_as {
  display: flex;
  align-items: flex-start;
}
.flex_ae {
  display: flex;
  align-items: flex-end;
}
.flex_d_c {
  display: flex;
  flex-direction: column;
}
.flex_d_r {
  display: flex;
  flex-direction: row;
}
.flex_js {
  justify-content: space-between;
}
.flex_je {
  justify-content: space-evenly;
}
.f_f {
  flex-flow: wrap;
}
.flex_fe {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.flex_ce {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.flex_sc {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.flex_sb {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex_sa {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.flex_saf {
  display: flex;
  justify-content: space-around;
}
.flex_ec {
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.flex_es {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.flex_f_c {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.flex_jfe {
  display: flex;
  justify-content: flex-end;
}
.flex_1 {
  flex: 1;
}
.flex_2 {
  flex: 2;
}
.flex_3 {
  flex: 3;
}
.margin_10 {
  margin: 0.1rem;
}
.margin_l_10 {
  margin-left: 0.1rem;
}
.margin_r_10 {
  margin-right: 0.1rem;
}
.margin_t_10 {
  margin-top: 0.1rem;
}
.margin_b_10 {
  margin-bottom: 0.1rem;
}
.margin_20 {
  margin: 0.2rem;
}
.margin_40 {
  margin: 0.4rem;
}
.margin_t_20 {
  margin-top: 0.2rem;
}
.margin_t_40 {
  margin-top: 0.4rem;
}
.margin_b_40 {
  margin-bottom: 0.4rem;
}
.margin_b_20 {
  margin-bottom: 0.2rem;
}
.margin_tm_20 {
  margin: 0.2rem 0;
}
.margin_l_20 {
  margin-left: 0.2rem;
}
.margin_l_40 {
  margin-left: 0.4rem;
}
.margin_r_20 {
  margin-right: 0.2rem;
}
.margin_r_40 {
  margin-right: 0.4rem;
}
.padding_10 {
  padding: 0.1rem;
}
.padding_20 {
  padding: 0.2rem;
}
.padding_40 {
  padding: 0.4rem;
}
.padding_20_40 {
  padding: 0.2rem 0.4rem;
}
.padding_t_20 {
  padding-top: 0.2rem;
}
.padding_l_20 {
  padding-left: 0.2rem;
}
.padding_b_20 {
  padding-bottom: 0.2rem;
}
.padding_r_20 {
  padding-right: 0.2rem;
}
.padding_l_40 {
  padding-left: 0.4rem;
}
.padding_t_40 {
  padding-top: 0.4rem;
}
.pointer {
  cursor: pointer;
}
.t_u {
  text-decoration: underline;
}
.width_max {
  width: max-content;
}
.b_c_w {
  background-color: white;
}
.b_c_g {
  background-color: #1eb002;
}
.b_c_r {
  background-color: #e5444a;
}
.b_f5 {
  background-color: #f5f5f5;
}
.lemonchiffon {
  background-color: lemonchiffon;
}
.f_b {
  color: #409eff;
}
.f_r {
  color: #ff300d;
}
.f_w {
  color: #ffffff;
}
.f_g {
  color: #2fb301;
}
.f_gg {
  color: #876f00;
}
.f_197 {
  color: #ffe197;
}
.f_d8 {
  color: #d8d8d8;
}
.f_40 {
  color: #ff4400;
}
.my-input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 0.24rem;
  background-color: transparent;
}

.o_f {
  overflow: auto;
}
.p_r {
  position: relative;
}
.f_w_b {
  font-weight: bold;
}
.t_c {
  text-align: center;
}
.f-16 {
  font-size: 0.16rem;
}
.f-20 {
  font-size: 0.2rem;
}
.f-22 {
  font-size: 0.22rem;
}
.f-24 {
  font-size: 0.24rem;
}
.f-26 {
  font-size: 0.26rem;
}
.f-28 {
  font-size: 0.28rem;
}
.f-29 {
  font-size: 0.29rem;
}
.f-30 {
  font-size: 0.3rem;
}
.f-32 {
  font-size: 0.32rem;
}
.f-34 {
  font-size: 0.34rem;
}
.f-36 {
  font-size: 0.36rem;
}
.f-42 {
  font-size: 0.42rem;
}
.f-46 {
  font-size: 0.46rem;
}
.c-3 {
  color: #333333;
}
.c-7 {
  color: #777777;
}
.c-9 {
  color: #999999;
}
.c-f {
  color: #ff300d;
}
.c-0 {
  color: #000000;
}

.b-s {
  box-shadow: 0 0 0.2rem 0 grey;
}

.wk-touch {
  -webkit-overflow-scrolling: touch;
}
input::-webkit-input-placeholder {
  color: #999999;
}
.twoElisp {
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  /*! autoprefixer: off */
  -webkit-box-orient: vertical;
  /* autoprefixer: on */
  line-height: 0.26rem;
}
.oneElisp {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.b_t {
  border-top: 0.02rem solid rgba(216, 216, 216, 1);
}
.b_b {
  border-bottom: 0.02rem solid rgba(216, 216, 216, 1);
}
a {
  text-decoration: none;
}
.mask2 {
  position: fixed;
  left: 0;
  z-index: 13;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
.page_view_top {
  height: 0.55rem;
}
.page_view_triangle-down-g {
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 5px solid #409eff;
}
.page_view_triangle-down-9 {
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-top: 5px solid #999999;
}
</style>
