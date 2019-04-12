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
          <div v-if="form === 'huoyuan'">
            <div class="f-28 c-3 f_w_b">
              货源类型
            </div>
            <div class="f_f flex_a c-3 margin_t_20 b_b">
              <div
                class="code_box flex"
                v-for="(item,index) in $store.state.m.AF0491801List"
                :key="index">
                <div
                  class="code_item oneElisp width_100"
                  :class="[(item.code === AF0491801Code)?'code_item_selected':'code_item_no_selected']"
                  @click="selectAF0491801(item)">{{ item.name }}</div>
              </div>
            </div>
          </div>

          <div v-if="form === 'huoyuan'">
            <div class="f-28 c-3 f_w_b margin_t_20">
              装货时间
            </div>
            <div class="f_f flex_a c-3 margin_t_20 b_b">
              <div
                class="code_box flex"
                v-for="(item,index) in $store.state.m.AF0491802List"
                :key="index">
                <div
                  class="code_item oneElisp width_100"
                  :class="[(item.code === AF0491802Code)?'code_item_selected':'code_item_no_selected']"
                  @click="selectAF0491802(item)">{{ item.name }}</div>
              </div>
            </div>
          </div>

          <div v-if="form === 'huoyuan'">
            <div class="f-28 c-3 f_w_b margin_t_20">
              用车类型
            </div>
            <div class="f_f flex_a c-3 margin_t_20 b_b">
              <div
                class="code_box flex"
                v-for="(item,index) in $store.state.m.AF0491803List"
                :key="index">
                <div
                  class="code_item oneElisp width_100"
                  :class="[(item.code === AF0491803Code)?'code_item_selected':'code_item_no_selected']"
                  @click="selectAF0491803(item)">{{ item.name }}</div>
              </div>
            </div>
          </div>

          <div v-if="form === 'cheyuan'">
            <div class="f-28 c-3 f_w_b margin_t_20">
              车辆类型
            </div>
            <div class="f_f flex_a c-3 margin_t_20">
              <div
                class="code_box flex"
                v-for="(item,index) in $store.state.m.AF018List"
                :key="index">
                <div
                  class="code_item oneElisp width_100"
                  :class="[(item.code === AF018Code)?'code_item_selected':'code_item_no_selected']"
                  @click="selectAF018(item)">{{ item.name }}</div>
              </div>
            </div>
          </div>

          <div>
            <div class="f-28 c-3 f_w_b margin_t_20">
              车辆规格
            </div>
            <div class="f_f flex_a c-3 margin_t_20">
              <div
                class="code_box flex"
                v-for="(item,index) in $store.state.m.AF009List"
                :key="index">
                <div
                  class="code_item oneElisp width_100"
                  :class="[(item.code === AF009Code)?'code_item_selected':'code_item_no_selected']"
                  @click="selectAF009(item)">{{ item.name }}</div>
              </div>
            </div>
          </div>


          <div
            class="button flex f_w f-36 margin_t_40"
            @click="success()">
            确 认
          </div>

        </div>
      </div>
    </transition>
    <div
      :class="[showMask?'mask2':'']"
      :style="{'top':top}"
      @click="closeMask()"/>
  </div>
</template>

<script>
export default {
  name: 'Screen',
  props: {
    top: {
      type: String,
      default: '0'
    },
    form: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showMask: false,
      AF0491801Code: '',
      AF0491802Code: '',
      AF0491803Code: '',
      AF009Code: '',
      AF018Code: ''
    }
  },
  methods: {
    success() {
      this.showMask = false
      this.$emit('setArea', {
        AF0491801Code: this.AF0491801Code,
        AF0491802Code: this.AF0491802Code,
        AF0491803Code: this.AF0491803Code,
        AF009Code: this.AF009Code,
        AF018Code: this.AF018Code
      })
    },
    selectAF018(item) {
      this.AF018Code = item.code
    },
    selectAF009(item) {
      this.AF009Code = item.code
    },
    selectAF0491803(item) {
      this.AF0491803Code = item.code
    },
    selectAF0491802(item) {
      this.AF0491802Code = item.code
    },
    selectAF0491801(item) {
      this.AF0491801Code = item.code
    },
    selectRelease(item) {
      this.showMask = false
      this.$emit('setArea', item)
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
      this.$emit('setArea', false)
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  height: 0.96rem;
  background: rgba(84, 167, 255, 1);
  border-radius: 0.16rem;
}
.item {
  height: 1rem;
}
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
  border: 1px solid #54a7ff;
  color: #54a7ff;
  background-color: rgba(84, 167, 255, 0.5);
}
.code_item_no_selected {
  border: 1px solid #999999;
}
.heightTran {
  transition: all 0.2s;
  position: absolute;
  top: 0;
  width: 100%;
  /*height: 9.1rem;*/
  z-index: 100;
}
</style>
