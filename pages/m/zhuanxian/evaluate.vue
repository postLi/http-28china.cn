<template>
  <div>
    <MyTop>
      <div class="flex_3 f-36 flex">专线详情</div>
    </MyTop>
    <div class="body">
      <div class="top flex_a">
        <div
          class="item f-24 flex oneElisp"
          :class="[(item.id === id) ? 'item_selected' :'item_no_selected',(index === list.length -1)? '':'margin_r_20']"
          v-for="(item,index) in list"
          @click="clickEvaluate(item.id)"
          :key="index">{{ item.name }}</div>
      </div>

      <div
        class="content"
        v-for="(item,index) in dataList"
        :key="index">
        <div class="flex_a">
          <span class="c-3 f-30 margin_r_20 f_w_b">
            {{ item.phone }}
          </span>
          <img
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
          <img
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
          <img
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
          <img
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
          <img
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
        </div>
        <div class="f-24 c-9"> {{ item.time }}</div>
        <div class="f-28 c-3">{{ item.content }} </div>
        <div class="answer">
          <div class="f-24 c-9">[回复]：</div>
          <div class="f-28 c-3">
            {{ item.answer }}
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import MyTop from '../../../components/m/myTop'
export default {
  layout: 'm',
  name: 'Evaluate',
  components: { MyTop },
  data() {
    return {
      id: 0,
      list: [
        { id: 0, name: '全部(4512)' },
        { id: 1, name: '好评(4512)' },
        { id: 2, name: '中评(4512)' },
        { id: 3, name: '差评(4512)' }
      ],
      dataList: [
        {
          phone: '159****1592',
          time: '2018-12-04 18:33:12',
          content: '这家公司还挺好的，时效快，价格合理，经常找这家。',
          answer: ' 感谢您的光临，期待与您的下次合作！'
        },
        {
          phone: '159****1592',
          time: '2018-12-04 18:33:12',
          content: '这家公司还挺好的，时效快，价格合理，经常找这家。',
          answer: ' 感谢您的光临，期待与您的下次合作！'
        }
      ]
    }
  },
  methods: {
    clickEvaluate(id) {
      this.id = id
    }
  }
}
</script>

<style scoped lang="scss">
.body {
  padding: 0 0.3rem;
  .top {
    height: 0.94rem;
    .item {
      height: 0.54rem;
      border-radius: 0.47rem;
      padding: 0 0.18rem;
    }
  }
  .content {
    line-height: 0.4rem;
    padding: 0.28rem 0;
    .answer {
      background: rgba(246, 248, 250, 1);
      border-radius: 0.1rem;
      padding: 0.1rem 0.2rem 0.2rem 0.2rem;
      margin-top: 0.3rem;
    }
  }
}
.item_selected {
  border: 0.02rem solid #54a7ff;
  color: #54a7ff;
  background: rgba(224, 239, 255, 1);
}
.item_no_selected {
  border: 0.02rem solid rgba(238, 238, 238, 1);
  color: #8a8d8f;
}
.img-star {
  width: 0.28rem;
  height: 0.28rem;
  margin-right: 0.08rem;
}
</style>
