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
        <div class="b_c_w padding_l_20 padding_r_20 f-26 height_100 o_f">
          <div
            class="item flex"
            :class="[index === list.length -1 ?'':'b_b']"
            :style="{'color':$store.state.m.huoyuan.orderBy.value === item.value?'#54A7FF':''}"
            v-for="(item,index) in list"
            :key="index"
            @click="selectRelease(item)"
          >
            {{ item.name }}
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
  name: 'Release',
  props: {
    top: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      showMask: false,
      list: [
        { name: '最新发布', value: 'creditDesc' },
        { name: '价格最高', value: 'weightPriceAsc' }
      ]
    }
  },
  methods: {
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

<style scoped>
.item {
  height: 1rem;
}
.heightTran {
  transition: all 0.2s;
  position: absolute;
  top: 0;
  width: 100%;
  height: 2.1rem;
  z-index: 100;
}
</style>
