<template>
  <div class="flex_f h">
    <MyTop>
      <div class="flex_3 f-36 flex">货源详情</div>
    </MyTop>
    <div
      class="flex_1"
      style="background-color: #F4F4F4">
      <div class="padding_b_20 b_c_w">
        <div
          class="address flex_a"
          v-for="(item,index) in infoData.aflcLclOrderAddresses"
          :key="index">
          <div
            class="left flex p_r"
            v-if="index === 0">
            <div class="green_circle"/>
          </div>
          <div
            class="left flex p_r"
            v-if="index === infoData.aflcLclOrderAddresses.length - 1">
            <div class="red_circle"/>
            <div class="line" />
          </div>
          <div class="height_100 flex_f flex_saf padding_r_20 o_f">
            <div class="f-32 c-3 oneElisp">
              {{ item.province }}{{ item.city }}{{ item.area }}
            </div>
            <div class="f-28 c-9 oneElisp">
              {{ item.viaAddress }}
            </div>
            <div class="f-28 f_b oneElisp">
              {{ item.contacts }} {{ item.contactsPhone }}
            </div>
          </div>
        </div>
      </div>

      <div class="content margin_t_20">
        <div
          class="flex_a flex_sb"
          :class="[index !== 0 ?'margin_t_10':'']"
          v-for="(item,index) in infoData.aflcLclOrderGoodsList"
          :key="index">
          <div class="left">
            <div class="f-32 c-3">{{ item.goodsName }}</div>
            <div class="f-24 c-9">{{ item.goodsWeight?item.goodsWeight + '公斤/':'' }}{{ item.goodsVolume?item.goodsVolume + '方':'' }}</div>
          </div>
          <div class="f-28 c-3">X {{ item.goodsNum }}</div>
        </div>
      </div>
      <div class="b_c_w">
        <div class="divide"/>
      </div>

      <div
        class="b_c_w"
        style="padding-bottom: 0.3rem">
        <div class="content1 flex_r f-28">
          <div class="c-9 left">货物合计：</div>
          <div class="c-3">
            {{ infoData.aflcLclOrder.goodsWeight?infoData.aflcLclOrder.goodsWeight + '公斤/':'' }}
            {{ infoData.aflcLclOrder.goodsVolume?infoData.aflcLclOrder.goodsVolume + '立方/':'' }}
            {{ infoData.aflcLclOrder.goodsNum?infoData.aflcLclOrder.goodsNum + '件':'' }}
          </div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">出&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：</div>
          <div style="color: #FF4400">{{ infoData.aflcLclOrder.goodsPrice ? '￥'+ infoData.aflcLclOrder.goodsPrice:'价格面议' }}</div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">装货时间：</div>
          <div class="c-3">{{ infoData.aflcLclOrder.loadingTime }} {{ infoData.aflcLclOrder.loadingTimeFragment }}</div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">额外需求：</div>
          <div class="c-3">{{ infoData.aflcLclOrder.extraName?infoData.aflcLclOrder.extraName:'无' }}</div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">货源类型：</div>
          <div class="c-3">{{ infoData.aflcLclOrder.goodsTypeName?infoData.aflcLclOrder.goodsTypeName:'无' }}</div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">备注信息：</div>
          <div class="c-3">{{ infoData.aflcLclOrder.remark?infoData.aflcLclOrder.remark:'无' }}</div>
        </div>
      </div>

      <div
        class="b_c_w"
        style="padding-bottom: 0.3rem">
        <div class="content1 flex_a f-28 margin_t_20">
          <div class="c-9 left">货源单号：</div>
          <div class="c-3 flex_a ">
            <div> {{ infoData.aflcLclOrder.orderSerial }} </div>
            <div
              class="copy flex f-20 margin_l_20"
              v-clipboard="copyData"
              @success="handleSuccess"
              @error="handleError">复制</div>
          </div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">发布时间：</div>
          <div class="c-3">{{ infoData.aflcLclOrder.createTime }}</div>
        </div>
      </div>

    </div>
  </div>

</template>
<script>
import MyTop from '../../../components/m/myTop'
import Vue from 'vue'
import { Toast } from 'cube-ui'
import VueClipboards from 'vue-clipboards'
Vue.use(VueClipboards)
Vue.use(Toast)
export default {
  components: { MyTop },
  layout: 'm',
  data() {
    return {}
  },
  async asyncData({ $axios, app, query, error }) {
    const infoData = await $axios.get('/28-web/lclOrder/app/detail/' + query.id)
    if (infoData.data.status === 200) {
      let item = infoData.data.data
      let arr = (item.id || '').split('')
      let num = 0
      arr.forEach(el => {
        num += el.charCodeAt(0) || 0
      })
      infoData.data.data.num = (num % 30) + 1
    }
    return {
      copyData:
        infoData.data.status === 200
          ? infoData.data.data.aflcLclOrder.orderSerial
          : '',
      infoData: infoData.data.status === 200 ? infoData.data.data : {}
    }
  },
  methods: {
    handleSuccess(e) {
      this.$createToast({ txt: '复制成功', type: 'txt' }).show()
    },
    handleError(e) {
      this.$createToast({ txt: '复制失败', type: 'txt' }).show()
    }
  }
}
</script>
<style scoped lang="scss">
.h {
  height: inherit;
}
.address {
  line-height: 0.4rem;
  padding-top: 0.2rem;
  box-sizing: border-box;
  .left {
    min-width: 0.68rem;
  }
}
.green_circle {
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 0.18rem;
  background: rgba(29, 175, 1, 1);
}
.red_circle {
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 0.18rem;
  background: rgba(230, 69, 74, 1);
}
.line {
  position: absolute;
  top: -1.1rem;
  left: 50%;
  width: 0.01rem;
  height: 1rem;
  background: rgba(216, 216, 216, 1);
}
.content {
  padding: 0.3rem;
  background-color: white;
  .left {
    line-height: 0.45rem;
  }
}
.content1 {
  padding: 0.31rem 0.3rem 0 0.3rem;
  background-color: white;
  .left {
    min-width: 1.43rem;
  }
}
.divide {
  width: calc(100% - 0.6rem);
  margin: 0 auto;
  border-top: 1px solid rgba(238, 238, 238, 1);
}
.copy {
  width: 0.64rem;
  height: 0.32rem;
  border-radius: 0.04rem;
  border: 1px solid rgba(169, 169, 169, 1);
  color: rgba(169, 169, 169, 1);
}
</style>
