<template>
  <div class="list-box-r-news">
    <div
      v-if="gongsi_jryw01"
      style="margin-top: 10px;display: inline-block;border: solid 1px #deedfd;float:left;width:100%;"
      class="today_news"><div
        class="zx_sx"
        style="border-bottom: 1px solid #2577e3;"><span class=""/><span style="color: #2577e3;padding-left: 10px">今日要闻</span><a
          href="/zixun/"
          style="text-align: right;font-size: 14px;color: #666666;float: right;padding-right: 5px"
          target="_blank"
      >更多>></a></div>
      <div style="padding:10px;background:#fff">
        <p style="font-size: 15px;color: #333;padding-bottom:10px;font-weight: bold">{{ gongsi_jryw01.title }}
        </p>
        <div style="display: flex"><img
          style="width: 120px;height: 98px;display: inline-block;"
          width="120"
          height="98"
          :src="gongsi_jryw01.typeImg||'/gongsi/images/u1075.png'"
          alt=""><span style="padding-left: 5px">{{ (gongsi_jryw01.description || '').substr(0,28) + '...' }}<a
            :href="gongsi_jryw01.url"
            style="color: #0d91e9">[详细]</a></span>
        </div>

        <ul>
          <li
            v-for="(item, i) in gongsi_jryw"
            :key="i"
            style="padding-top: 15px"><a
              :href="item.url"
              target="_blank">{{ item.title }}</a>

          </li>
        </ul>
      </div>
    </div>
    <div
      v-if="gongsi_wlzx01"
      class="wuliu_news"
      style="margin-top: 10px;display: inline-block;border: solid 1px #deedfd;float:left;width:100%;">
      <div
        class="zx_sx"
        style="border-bottom: 1px solid #2577e3;"><span class=""/><span style="color: #2577e3;padding-left: 10px">物流资讯</span><a
          href="/zixun/"
          style="text-align: right;font-size: 14px;color: #666666;float: right;padding-right: 5px"
          target="_blank">更多>></a></div>
      <div style="padding:10px;background:#fff">
        <p style="font-size: 15px;color: #333;padding-bottom:10px;font-weight: bold">{{ gongsi_wlzx01.title }}
        </p>
        <div style="display: flex"><img
          width="120"
          height="98"
          :src="gongsi_wlzx01.typeImg||'/gongsi/images/u1075.png'"
          alt=""><span style="padding-left: 5px">{{ (gongsi_wlzx01.description || '').substr(0,28) + '...' }}<a
            :href="gongsi_wlzx01.url"
            style="color: #0d91e9">[详细]</a></span></div>
        <ul>
          <li
            v-for="(item, i) in gongsi_wlzx"
            :key="i"
            style="padding-top: 15px"><a
              :href="item.url"
              target="_blank">{{ item.title }}</a>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComNews',
  props: {
    info: {
      type: [Array, Object],
      default: () => {}
    },
    infos: {
      type: [Array, Object],
      default: () => {}
    },
    infoyw: {
      type: [Array, Object],
      default: () => {}
    },
    infosyw: {
      type: [Array, Object],
      default: () => {}
    }
  },
  data() {
    return {
      gongsi_wlzx: {},
      gongsi_jryw: {},
      gongsi_wlzx01: {},
      gongsi_jryw01: {}
    }
  },
  //
  watch: {
    info(n) {
      this.gongsi_jryw = n
    },
    infos(n) {
      this.gongsi_wlzx = n
    },
    infoyw(n) {
      this.gongsi_jryw01 = n
    },
    infosyw(n) {
      this.gongsi_wlzx01 = n
    }
  },
  mounted() {
    this.gongsi_jryw = this.info
    this.gongsi_wlzx = this.infos
    this.gongsi_jryw01 = this.infoyw
    this.gongsi_wlzx01 = this.infosyw
    console.log(this.infos, ' this.infos', this.gongsi_jryw01)
  }
}
</script>

<style scoped>
</style>
