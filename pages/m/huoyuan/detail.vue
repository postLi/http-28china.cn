<template>
  <div class="flex_f h">
    <MyTop>
      <div class="flex_3 f-36 flex">货源详情</div>
    </MyTop>
    <div
      class="flex_1"
      style="background-color: #F4F4F4">
      <div class="padding_b_20 b_c_w">
        <div class="address flex_a">
          <div class="left flex">
            <div class="green_circle"/>
          </div>
          <div class="height_100 flex_f flex_saf padding_r_20 o_f">
            <div class="f-32 c-3 oneElisp">
              广州白云
            </div>
            <div class="f-28 c-9 oneElisp">
              猎德村复建房五区广东省广州市天河区猎德fff
            </div>
            <div class="f-28 f_b oneElisp">
              罗志超 13888888888
            </div>
          </div>
        </div>
        <div class="address flex_a">
          <div class="left flex p_r">
            <div class="red_circle"/>
            <div class="line" />
          </div>
          <div class="height_100 flex_f flex_saf padding_r_20 o_f">
            <div class="f-32 c-3">
              广州白云
            </div>
            <div class="f-28 c-9">
              猎德村复建房五区广东省广州市天河区猎德fff
            </div>
            <div class="f-28 f_b">
              罗志超 13888888888
            </div>
          </div>
        </div>
      </div>

      <div class="content margin_t_20">
        <div
          class="flex_a flex_sb"
          :class="[index !== 0 ?'margin_t_10':'']"
          v-for="(item,index) in list"
          :key="index">
          <div class="left">
            <div class="f-32 c-3">{{ item.name1 }}</div>
            <div class="f-24 c-9">{{ item.name2 }}</div>
          </div>
          <div class="f-28 c-3">{{ item.name3 }}</div>
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
          <div class="c-3">300公斤/50立方/210件</div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">出&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价：</div>
          <div style="color: #FF4400">￥1325.00</div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">装货时间：</div>
          <div class="c-3">2019/01/15 全天（00:00-24:00）</div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">额外需求：</div>
          <div class="c-3">回单(传真)/回款20000元/需要发票/送货上门</div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">货源类型：</div>
          <div class="c-3">9.6米、加长/单次急发货物</div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">其他服务：</div>
          <div class="c-3">额外保障服务</div>
        </div>
      </div>

      <div
        class="b_c_w"
        style="padding-bottom: 0.3rem">
        <div class="content1 flex_a f-28 margin_t_20">
          <div class="c-9 left">货源单号：</div>
          <div class="c-3 flex_a">AFWL12099763217841345 <div class="copy flex f-20 margin_l_20">复制</div></div>
        </div>
        <div class="content1 flex_r f-28">
          <div class="c-9 left">发布时间：</div>
          <div class="c-3">2018/05/15 16:35:08</div>
        </div>
      </div>

    </div>
  </div>

</template>
<script>
import MyTop from '../../../components/m/myTop'
export default {
  components: { MyTop },
  layout: 'm',
  data() {
    return {
      list: [
        { name1: '外星人笔记本电脑', name2: '36公斤/0.2方', name3: 'X 385' },
        { name1: '外星人笔记本电脑', name2: '36公斤/0.2方', name3: 'X 385' }
      ]
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
