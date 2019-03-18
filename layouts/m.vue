<template>
  <div class="layout_main">
    <nuxt/>
  </div>
</template>
<script>
const rem =
  '!function(e){var t,n=document,i=window,o=n.documentElement;function u(){var t=o.getBoundingClientRect().width/e*100;o.style.fontSize=t+"px"}u(),i.addEventListener("resize",function(){clearTimeout(t),t=setTimeout(u,300)},!1),i.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(t),t=setTimeout(u,300))},!1)}(750);'

export default {
  head: {
    script: [
      { innerHTML: rem, type: 'text/javascript', charset: 'utf-8' },
      {
        src:
          'https://webapi.amap.com/maps?v=1.4.10&key=e61aa7ddc6349acdb3b57c062080f730'
      }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  beforeMount() {
    AMap.plugin('AMap.CitySearch', () => {
      let citySearch = new AMap.CitySearch()
      citySearch.getLocalCity((status, result) => {
        if (status === 'complete' && result.info === 'OK') {
          this.$store.dispatch('m/SETDATA', {
            data: [result.province, result.city, ''],
            name: 'startName'
          })
        }
      })
    })
  },
  mounted() {}
}
</script>
<style>
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
.f-16 {
  font-size: 0.16rem;
}
.f-20 {
  font-size: 0.2rem;
}
.f-22 {
  font-size: 0.22rem;
}
.f-26 {
  font-size: 0.26rem;
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
a {
  text-decoration: none;
}
</style>
