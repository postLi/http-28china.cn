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
          @click="toInput()"
        >001380</div>
      </div>

      <div
        class="button flex f_w f-36 margin_t_40"
        @click="search()"
      >查询</div>

      <div
        class="flex"
        v-if="showRes === 'no'"
      >
        <img
          class="no_res"
          src="/m/ydcx/yundancx_kong.png" >
      </div>
      <div
        class="gs"
        v-if="showRes === 'showGsList'">
        <div class="c-3 f-34 b_b gs_h flex_a">
          请选择物流公司
        </div>
        <div
          class="b_b gs_h flex_a"
          v-for="(item,index) in gsList"
          :key="index"
          @click="showDetail(item.id)"
        >
          <span class="c-3 f-30">{{ item.companyName }}</span>
          <span class="padding_l_20 c-9 f-26">{{ item.id }}</span>
        </div>
      </div>

      <div
        v-if="showRes === 'showDetail'"
        class="margin_t_20">
        <div class="f-34 c-3">物流跟踪：{{ list[0] ? list[0].trackNode : '' }}</div>

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
              :style="{height:lineHeight + 'rem'}"/>
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
            <div>{{ item.trackNode }}</div>
            <div>{{ item.trackInfo }}</div>
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
      showRes: '',
      lineHeight: 0,
      list: [], // 祥细
      gsList: []
    }
  },
  watch: {
    value: function(n, o) {
      this.showPlaceHolder = n.length <= 0
    }
  },
  mounted() {
    let resizeTask = null
    window.addEventListener('resize', () => {
      if (resizeTask !== null) {
        clearTimeout(resizeTask)
      }
      resizeTask = setTimeout(() => {
        resizeTask = null
        this.setSize()
      }, 500)
    })
  },
  methods: {
    toInput() {
      this.value = '001380'
    },
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
          if (res.data.status === 200 && res.data.data.length !== 0) {
            this.showRes = 'showGsList'
            this.gsList = res.data.data
          } else {
            this.showRes = 'no'
          }
        })
    },
    showDetail(id) {
      this.$axios
        .get('/aflc-portal/order/fclOrder/v1/queryWaybillStateById/' + id)
        .then(res1 => {
          if (res1.data.status === 200 && res1.data.data.length !== 0) {
            this.showRes = 'showDetail'
            res1.data.data.forEach(item => {
              item.t1 = item.createTime.split(' ')[0]
              item.t2 = item.createTime.split(' ')[1]
            })
            this.list = res1.data.data
            this.setSize()
          } else {
            this.showRes = 'no'
          }
        })
    },
    setSize() {
      this.$nextTick(() => {
        if (this.list.length !== 0) {
          let height = 0,
            widthList = []
          let fs = (
            document.querySelector('html').style.fontSize.replace('px', '') * 1
          ).toFixed(2)
          for (let i = 0; i < this.$refs.item.length - 1; i++) {
            height += this.$refs.item[i].clientHeight + (20 * fs) / 100
          }
          // (20 * fs) / 100 为 margin的px值
          this.lineHeight = ((height * 100) / fs) * 0.01 // rem值
          let left = document.querySelectorAll('.content .left')
          left.forEach(item => {
            item.style.minWidth = 'auto'
            widthList.push(item.clientWidth)
          })
          left.forEach(item => {
            item.style.minWidth = Math.max(...widthList) + 'px'
          })
        }
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
.gs {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0 0.04rem 0.2rem 0 rgba(180, 225, 242, 0.5);
  border-radius: 0.1rem;
}
.gs_h {
  height: 0.88rem;
  padding: 0 0.2rem;
}
</style>
