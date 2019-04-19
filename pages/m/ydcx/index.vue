<template>
  <div>
    <div class="p_r">
      <img
        class="width_100"
        src="/m/ydcx/Bitmap.png" >
      <div class="title flex_r width_100 f_w f-36">
        <div class="flex_1 flex_a">
          <i
            class="padding_l_20 cubeic-back"
            @click="$router.go(-1)"
          />
        </div>
        <div class="flex_1 flex">28快运</div>
        <div class="flex_1"/>
      </div>
    </div>
    <div class="body">
      <div class="search flex_a p_r f-26">
        <img
          class="left"
          src="/m/ydcx/fahuodz_nav_search.png">
        <input
          type="text"
          class="flex_1"
          placeholder="请输入运单号，例如："
          v-model="value"
        >
        <div
          class="placeHolder f_b"
          v-if="showPlaceHolder"
        >18030405063</div>
      </div>

      <div
        class="button flex f_w f-36 margin_t_40"
        @click="search()"
      >查询</div>

      <div
        class="flex"
        v-if="showNoRes"
      >
        <img
          class="no_res"
          src="/m/ydcx/yundancx_kong.png" >
      </div>
      <div class="margin_t_20">
        <div class="f-34 c-3">物流跟踪：广东分拨中心</div>

        <div
          class="flex_r margin_t_20 content"
          ref="item"
          :class="[index === 0 ? 'f_b':'c-9']"
          v-for="(item,index) in list"
          :key="index">
          <div class="f-22 left">
            <div>{{ item.t1 }}</div>
            <div>{{ item.t2 }}</div>
          </div>
          <div
            class="p_r flex_r"
            v-if="index === 0">
            <img
              class="circle"
              src="/m/ydcx/dindanxq_current.png">
            <div
              class="line"
              :style="{height:lineHeight + 'px'}"/>
          </div>
          <div
            class="p_r flex_r"
            v-if="index !== 0 && index !== list.length - 1">
            <img
              class="circle"
              src="/m/ydcx/current.png">
          </div>
          <div
            class="p_r flex_r"
            v-if="index === list.length - 1">
            <img
              class="circle"
              src="/m/ydcx/start.png">
          </div>
          <div class="f-24">
            <div>{{ item.n1 }}</div>
            <div>{{ item.n2 }}</div>
          </div>
        </div>


      </div>


    </div>

  </div>
</template>
<script>
import Vue from 'vue'
import { Style, Toast } from 'cube-ui'
Vue.use(Style)
Vue.use(Toast)
export default {
  layout: 'm',
  data() {
    return {
      value: '',
      showPlaceHolder: true,
      showNoRes: false,
      lineHeight: 0,
      list: [
        {
          t1: '2019-05-06',
          t2: '03:15:23',
          n1: '送货上门',
          n2: '送货中，送货人：毛思111111吉，电话：1384858485'
        },
        {
          t1: '2019-05-26',
          t2: '03:15:23',
          n1: '送货上门',
          n2: '已到货，客户电话：1939495649，上一站：南昌网点'
        },
        {
          t1: '2019-05-01',
          t2: '03:15:23',
          n1: '送货上门',
          n2: '已到货，客户电话：1939495649，上一站：南昌网点'
        }
      ]
    }
  },
  watch: {
    value: function(n, o) {
      this.showPlaceHolder = n.length <= 0
    }
  },
  mounted() {
    let height = 0,
      widthList = []
    for (let i = 0; i < this.$refs.item.length - 1; i++) {
      height += this.$refs.item[i].clientHeight + 10
    }
    this.lineHeight = height
    let left = document.querySelectorAll('.content .left')
    left.forEach(item => {
      widthList.push(item.clientWidth)
    })
    left.forEach(item => {
      item.style.minWidth = Math.max(...widthList) + 'px'
    })
  },
  methods: {
    search() {
      if (this.value === '') {
        this.$createToast({ txt: '请输入你要搜索的值', type: 'txt' }).show()
        return
      }
      this.$axios
        .get(
          '/aflc-portal/order/fclOrder/v1/queryCompanyBySerial/' + this.value
        )
        .then(res => {
          //
        })
    }
  }
}
</script>
<style scoped lang="scss">
.title {
  position: absolute;
  top: 0.3rem;
  left: 0;
}
.body {
  margin: 0.3rem;
  .search {
    height: 0.8rem;
    background: rgba(229, 229, 229, 1);
    border-radius: 0.18rem;
    .left {
      width: 0.5rem;
      margin: 0 0.14rem 0 0.2rem;
    }
    input {
      border: none;
      outline: none;
      background-color: transparent;
    }
    .placeHolder {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%);
    }
  }
  .no_res {
    width: 4.42rem;
    height: 2.55rem;
    margin-top: 1.41rem;
  }
}
.button {
  height: 0.96rem;
  background: rgba(74, 144, 226, 1);
  border-radius: 0.16rem;
}
.circle {
  width: 0.33rem;
  height: 0.33rem;
  margin: 0 0.09rem;
  z-index: 100;
}
.content {
  line-height: 0.3rem;
  .left {
    white-space: nowrap;
  }
}
.line {
  position: absolute;
  left: 50%;
  top: 0.16rem;
  transform: translateX(-50%);
  width: 1px;
  background-color: #cccccc;
}
</style>
