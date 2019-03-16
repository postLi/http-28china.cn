<template>
  <div>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
    >
      <div
        class=" heightTran"
        v-if="showMask">
        <div class="b_c_w padding_20 f-26 height_100 o_f">
          <div class="c-3 flex_1 f_w_b">历史城市</div>
          <div class="f_f flex_a c-3 margin_t_20">
            <div
              class="code_box flex"
              v-for="(item,index) in list"
              :key="index">
              <div
                class="code_item oneElisp width_100 code_item_no_selected"
                @click="selectedHis(item)">{{ item.name === '全市'?item.name1:item.name }}</div>
            </div>
          </div>
          <div class="flex_a">
            <div
              class="c-3 flex_1 f_w_b"
              v-if="showAddr[0].show">选择城市</div>
            <div
              class="f_b flex_1 f_w_b"
              @click="back()"
              v-else>返回上一线</div>
            <div
              class="c-3 flex_2 f_w_b oneElisp"
              style="text-align: center">{{ showAddr[0].name }}{{ showAddr[1].name }}{{ showAddr[2].name === '全市'?'': showAddr[2].name }}</div>
            <div class="flex_1"/>
          </div>
          <!--省列表-->
          <div
            class="f_f flex_a c-3 margin_t_20"
            v-if="showAddr[0].show">
            <div
              class="code_box flex"
              v-for="(item,index) in $store.state.m.provinceList"
              :key="index">
              <div
                class="code_item oneElisp width_100"
                :class="[(item.code === showAddr[0].code)?'code_item_selected':'code_item_no_selected']"
                @click="selectProvince(item)">{{ item.name }}</div>
            </div>
          </div>
          <!--市列表-->
          <div
            class="f_f flex_a c-3 margin_t_20"
            v-if="showAddr[1].show">
            <div
              class="code_box flex"
              v-for="(item,index) in cityList"
              :key="index">
              <div
                class="code_item oneElisp width_100"
                :class="[(item.code === showAddr[1].code)?'code_item_selected':'code_item_no_selected']"
                @click="selectCity(item)">{{ item.name }}</div>
            </div>
          </div>
          <!--区列表-->
          <div
            class="f_f flex_a c-3 margin_t_20"
            v-if="showAddr[2].show">
            <div
              class="code_box flex"
              v-for="(item,index) in areaList"
              :key="index">
              <div
                class="code_item oneElisp width_100"
                :class="[(item.code === showAddr[2].code)?'code_item_selected':'code_item_no_selected']"
                @click="selectArea(item)">{{ item.name }}</div>
            </div>
          </div>
        </div>

      </div>
    </transition>
    <div
      :class="[showMask?'mask2':'']"
      @click="closeMask()"/>
  </div>
</template>

<script>
import localStorage from '../../pages/m/utils/localStorage'
export default {
  name: 'SelectAddress',
  data() {
    return {
      showMask: false,
      list: [],
      cityList: [],
      areaList: [],
      showAddr: [
        { code: '', name: '', show: true },
        { code: '', name: '', show: false },
        { code: '', name: '', show: false }
      ]
    }
  },
  watch: {
    showMask(n, o) {
      if (localStorage.get('mCityHistoryList') && n) {
        this.list = localStorage.get('mCityHistoryList')
      }
    }
  },
  methods: {
    selectedHis(item) {
      this.showMask = false
      this.$emit('setArea', [
        item.startProvince,
        item.startCity,
        item.name === '全市' ? '' : item.name
      ])
    },
    back() {
      if (this.showAddr[2].show) {
        this.$set(this.showAddr, 2, { code: '', name: '', show: false })
        this.$set(this.showAddr[1], 'show', true)
      } else {
        if (this.showAddr[1].show) {
          this.$set(this.showAddr, 1, { code: '', name: '', show: false })
          this.$set(this.showAddr[0], 'show', true)
        }
      }
    },
    selectProvince(item) {
      this.$axios
        .get(
          '/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code=' +
            item.code
        )
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            this.cityList = data.data ? data.data || [] : []
            this.showAddr = [
              { code: item.code, name: item.name, show: false },
              { code: '', name: '', show: true },
              { code: '', name: '', show: false }
            ]
          }
        })
        .catch(err => {})
    },
    selectCity(item) {
      this.$axios
        .get(
          '/aflc-common/common/aflcCommonPCA/v1/findAflcCommonPCAByCode?code=' +
            item.code
        )
        .then(res => {
          let data = res.data
          if (data.status === 200) {
            if (data.data) {
              data.data.unshift({
                code: item.code,
                name: '全市',
                name1: item.name,
                parentCode: item.code
              })
            } else {
              data.data = [
                {
                  code: item.code,
                  name: '全市',
                  name1: item.name,
                  parentCode: item.code
                }
              ]
            }
            this.areaList = data.data ? data.data || [] : []
            this.$set(this.showAddr, 1, {
              code: item.code,
              name: item.name,
              show: false
            })
            this.showAddr[2].show = true
          }
        })
        .catch(err => {})
    },
    selectArea(item) {
      this.showMask = false
      this.$set(this.showAddr, 2, {
        code: item.code,
        name: item.name,
        show: true
      })
      this.$emit('setArea', [
        this.showAddr[0].name,
        this.showAddr[1].name,
        item.name === '全市' ? '' : item.name
      ])
      item.startProvince = this.showAddr[0].name
      item.startCity = this.showAddr[1].name
      this.setHistory(item)
    },
    setHistory(data) {
      if (localStorage.get('mCityHistoryList')) {
        let list = localStorage.get('mCityHistoryList')
        let some = list.some(item => {
          return item.code === data.code
        })
        if (!some) {
          if (list.length >= 4) {
            list.splice(3, 1)
          }
          list.unshift(data)
        }
        localStorage.set('mCityHistoryList', list)
      } else {
        localStorage.set('mCityHistoryList', [data])
      }
    },
    beforeEnter(el) {
      el.style.height = '0'
    },
    enter(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
      } else {
        el.style.height = ''
      }
    },
    afterEnter(el) {
      el.style.height = ''
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = 0
      }
    },
    afterLeave(el) {
      el.style.height = ''
    },
    closeMask() {
      this.showMask = false
    }
  }
}
</script>

<style scoped lang="scss">
.code_box {
  width: 25%;
  padding: 0 0.1rem 0.2rem;
  box-sizing: border-box;
  .code_item {
    text-align: center;
    height: 0.6rem;
    line-height: 0.6rem;
  }
}
.code_item_selected {
  border: 0.01rem solid #2fb301;
  color: #2fb301;
  background-color: rgba(47, 179, 1, 0.5);
}
.code_item_no_selected {
  border: 0.01rem solid #999999;
}
.heightTran {
  transition: all 0.2s;
  position: absolute;
  top: 0;
  width: 100%;
  height: 9.3rem;
  z-index: 100;
}
.mask2 {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 13;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
