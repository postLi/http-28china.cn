<template>
  <div class="flex_f h">
    <MyTop>
      <div class="flex_3 f-36 flex">专线详情</div>
    </MyTop>
    <div class="body">
      <div class="top flex_a">
        <div
          class="item f-24 flex oneElisp"
          :class="[(item.id === id) ? 'item_selected' :'item_no_selected',(index === linedataG.length -1)? '':'margin_r_20']"
          v-for="(item,index) in linedataG"
          @click="clickEvaluate(item.id)"
          :key="index">{{ item.name }}</div>
      </div>
    </div>

    <div
      class="content"
      v-if="linedataAll.length === 0 && id === 0">
      <div class="c-3 f-30 flex"> 此用户没有评论</div>
    </div>
    <cube-scroll
      v-if="linedataAll.length !== 0 && id === 0"
      ref="scrollAll"
      :scroll-events="['scroll-end']"
      class="mScroll flex_1 body"
      :data="linedataAll"
      :options="options"
      @pulling-up="onPullingUpAll"
      @scroll-end="getScrollAll"
    >
      <div
        class="content"
        v-for="(item,index) in linedataAll"
        :key="index">
        <div class="flex_a">
          <span class="c-3 f-30 margin_r_20 f_w_b">
            {{ item.evaluationName }}
          </span>
          <img
            v-for="( item, index ) in 4"
            :key="index"
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
        </div>
        <div class="f-24 c-9"> {{ item.createTime }}</div>
        <div class="f-28 c-3">{{ item.evaluationDes }} </div>
        <div class="answer">
          <div class="f-24 c-9">[回复]：</div>
          <div class="f-28 c-3">
            {{ item.replyDes }}
          </div>
        </div>
      </div>
    </cube-scroll>

    <div
      class="content"
      v-if="linedataGood.length === 0 && id === 1">
      <div class="c-3 f-30 flex"> 此用户没有评论</div>
    </div>
    <cube-scroll
      v-if="linedataGood.length !== 0 && id === 1"
      ref="scrollGood"
      :scroll-events="['scroll-end']"
      class="mScroll flex_1 body"
      :data="linedataGood"
      :options="options"
      @pulling-up="onPullingUpGood"
      @scroll-end="getScrollGood"
    >
      <div
        class="content"
        v-for="(item,index) in linedataGood"
        :key="index">
        <div class="flex_a">
          <span class="c-3 f-30 margin_r_20 f_w_b">
            {{ item.evaluationName }}
          </span>
          <img
            v-for="( item, index ) in 4"
            :key="index"
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
        </div>
        <div class="f-24 c-9"> {{ item.createTime }}</div>
        <div class="f-28 c-3">{{ item.evaluationDes }} </div>
        <div class="answer">
          <div class="f-24 c-9">[回复]：</div>
          <div class="f-28 c-3">
            {{ item.replyDes }}
          </div>
        </div>
      </div>
    </cube-scroll>

    <div
      class="content"
      v-if="linedataMiddle.length === 0 && id === 2">
      <div class="c-3 f-30 flex"> 此用户没有评论</div>
    </div>
    <cube-scroll
      v-if="linedataMiddle.length !== 0 && id === 2"
      ref="scrollMiddle"
      :scroll-events="['scroll-end']"
      class="mScroll flex_1 body"
      :data="linedataMiddle"
      :options="options"
      @pulling-up="onPullingUpMiddle"
      @scroll-end="getScrollMiddle"
    >
      <div
        class="content"
        v-for="(item,index) in linedataMiddle"
        :key="index">
        <div class="flex_a">
          <span class="c-3 f-30 margin_r_20 f_w_b">
            {{ item.evaluationName }}
          </span>
          <img
            v-for="( item, index ) in 4"
            :key="index"
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
        </div>
        <div class="f-24 c-9"> {{ item.createTime }}</div>
        <div class="f-28 c-3">{{ item.evaluationDes }} </div>
        <div class="answer">
          <div class="f-24 c-9">[回复]：</div>
          <div class="f-28 c-3">
            {{ item.replyDes }}
          </div>
        </div>
      </div>
    </cube-scroll>

    <div
      class="content"
      v-if="linedataBad.length === 0 && id === 3">
      <div class="c-3 f-30 flex"> 此用户没有评论</div>
    </div>
    <cube-scroll
      v-if="linedataBad.length !== 0 && id === 3"
      ref="scrollBad"
      :scroll-events="['scroll-end']"
      class="mScroll flex_1 body"
      :data="linedataBad"
      :options="options"
      @pulling-up="onPullingUpBad"
      @scroll-end="getScrollBad"
    >
      <div
        class="content"
        v-for="(item,index) in linedataBad"
        :key="index">
        <div class="flex_a">
          <span class="c-3 f-30 margin_r_20 f_w_b">
            {{ item.evaluationName }}
          </span>
          <img
            v-for="( item, index ) in 4"
            :key="index"
            class="img-star"
            src="/m/zhuanxian/rate_star_yellow.png" >
        </div>
        <div class="f-24 c-9"> {{ item.createTime }}</div>
        <div class="f-28 c-3">{{ item.evaluationDes }} </div>
        <div class="answer">
          <div class="f-24 c-9">[回复]：</div>
          <div class="f-28 c-3">
            {{ item.replyDes }}
          </div>
        </div>
      </div>
    </cube-scroll>
  </div>
</template>

<script>
let getLinedataF = async ($axios, query, currentPage, assessLevel = '') => {
  return await $axios.post(`/28-web/rangeEva/range/list`, {
    currentPage: currentPage,
    pageSize: 20,
    transportRangeId: query.id,
    assessLevel
  })
}
import Vue from 'vue'
import { Scroll } from 'cube-ui'
Vue.use(Scroll)
import MyTop from '../../../components/m/myTop'
export default {
  layout: 'm',
  name: 'Evaluate',
  components: { MyTop },
  data() {
    return {
      id: 0,
      currentPageAll: 1,
      currentPageGood: 1,
      currentPageMiddle: 1,
      currentPageBad: 1,
      scrollToAll: 0,
      scrollToGood: 0,
      scrollToMiddle: 0,
      scrollToBad: 0,
      options: {
        // pullDownRefresh: { txt: ' ' },
        pullUpLoad: { txt: { more: '', noMore: '没有更多数据了' } },
        scrollbar: true
      }
    }
  },
  async asyncData({ $axios, app, query, error }) {
    let list = []
    // 专线好中差总评价次数
    let linedataG = await $axios.get(
      `/28-web/rangeEva/range/assessLevel/count?rangeId=${query.id}`
    )
    // 专线评价列表
    let linedataAll = await getLinedataF($axios, query, 1)
    let linedataGood = await getLinedataF($axios, query, 1, 'AF0360101')
    let linedataMiddle = await getLinedataF($axios, query, 1, 'AF0360102')
    let linedataBad = await getLinedataF($axios, query, 1, 'AF0360103')
    if (linedataG.data.status === 200) {
      list = [
        { id: 0, name: `全部(${linedataG.data.data.all})` },
        { id: 1, name: `好评(${linedataG.data.data.good})` },
        { id: 2, name: `中评(${linedataG.data.data.middle})` },
        { id: 3, name: `差评(${linedataG.data.data.bad})` }
      ]
    } else {
      //error({ statusCode: 500, message: '查找不到该专线信息' })
    }
    return {
      linedataAll:
        linedataAll.data.status === 200 ? linedataAll.data.data.list : [],
      pagesAll:
        linedataAll.data.status === 200 ? linedataAll.data.data.pages : 0,
      linedataGood:
        linedataGood.data.status === 200 ? linedataGood.data.data.list : [],
      pagesGood:
        linedataGood.data.status === 200 ? linedataGood.data.data.pages : 0,
      linedataMiddle:
        linedataMiddle.data.status === 200 ? linedataMiddle.data.data.list : [],
      pagesMiddle:
        linedataMiddle.data.status === 200 ? linedataMiddle.data.data.pages : 0,
      linedataBad:
        linedataBad.data.status === 200 ? linedataBad.data.data.list : [],
      pagesBad:
        linedataBad.data.status === 200 ? linedataBad.data.data.pages : 0,
      linedataG: linedataG.data.status === 200 ? list : []
    }
  },
  methods: {
    getScrollAll(obj) {
      this.scrollToAll = obj.y
    },
    getScrollGood(obj) {
      this.scrollToGood = obj.y
    },
    getScrollMiddle(obj) {
      this.scrollToMiddle = obj.y
    },
    getScrollBad(obj) {
      this.scrollToBad = obj.y
    },
    onPullingUpBad: async function() {
      if (this.currentPageBad >= this.pagesBad) {
        this.$refs.scrollBad.forceUpdate()
        return
      } else {
        this.currentPageBad++
      }
      let linedataBad = await getLinedataF(
        this.$axios,
        this.$route.query,
        this.currentPageBad,
        'AF0360103'
      )
      if (linedataBad.data.status === 200) {
        this.linedataBad = this.linedataBad.concat(linedataBad)
      }
    },
    onPullingUpMiddle: async function() {
      if (this.currentPageMiddle >= this.pagesMiddle) {
        this.$refs.scrollMiddle.forceUpdate()
        return
      } else {
        this.currentPageMiddle++
      }
      let linedataMiddle = await getLinedataF(
        this.$axios,
        this.$route.query,
        this.currentPageMiddle,
        'AF0360102'
      )
      if (linedataMiddle.data.status === 200) {
        this.linedataMiddle = this.linedataMiddle.concat(linedataMiddle)
      }
    },
    onPullingUpGood: async function() {
      if (this.currentPageGood >= this.pagesGood) {
        this.$refs.scrollGood.forceUpdate()
        return
      } else {
        this.currentPageGood++
      }
      let linedataGood = await getLinedataF(
        this.$axios,
        this.$route.query,
        this.currentPageGood,
        'AF0360101'
      )
      if (linedataGood.data.status === 200) {
        this.linedataGood = this.linedataGood.concat(linedataGood)
      }
    },
    onPullingUpAll: async function() {
      if (this.currentPageAll >= this.pagesAll) {
        this.$refs.scrollAll.forceUpdate()
        return
      } else {
        this.currentPageAll++
      }
      let linedataAll = await getLinedataF(
        this.$axios,
        this.$route.query,
        this.currentPageAll
      )
      if (linedataAll.data.status === 200) {
        this.linedataAll = this.linedataAll.concat(linedataAll)
      }
    },
    clickEvaluate(id) {
      this.id = id
      this.$nextTick(() => {
        if (id === 0 && this.linedataAll.length !== 0) {
          this.$refs.scrollAll.scrollTo(0, this.scrollToAll)
        }
        if (id === 1 && this.linedataGood.length !== 0) {
          this.$refs.scrollGood.scrollTo(0, this.scrollToGood)
        }
        if (id === 2 && this.linedataMiddle.length !== 0) {
          this.$refs.scrollMiddle.scrollTo(0, this.scrollToMiddle)
        }
        if (id === 3 && this.linedataBad.length !== 0) {
          this.$refs.scrollBad.scrollTo(0, this.scrollToBad)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.h {
  height: inherit;
}
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
