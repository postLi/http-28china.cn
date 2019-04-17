<template>
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
</template>

<script>
export default {
  name: 'DownApp',
  data() {
    return {
      showMask: false
    }
  },
  methods: {
    downApp() {
      window.location.href = 'http://h5.28tms.com/'
    }
  }
}
</script>

<style scoped lang="scss">
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
