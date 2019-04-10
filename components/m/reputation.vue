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
            :style="{'color':id === item.id?'#54A7FF':''}"
            v-for="(item,index) in list"
            :key="index"
            @click="selectReputation(item)"
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
  name: 'Reputation',
  props: {
    top: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      showMask: false,
      id: '',
      list: [
        { id: 0, name: '信誉最高', value: 'creditDesc' },
        { id: 1, name: '运输时效', value: 'transportAgingAsc' },
        { id: 2, name: '重货价格最低', value: 'weightPriceAsc' },
        { id: 3, name: '轻货价格最低', value: 'lightPriceAsc' }
      ]
    }
  },
  methods: {
    selectReputation(item) {
      this.id = item.id
      this.showMask = false
      this.$emit('setArea', item.value)
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

<style scoped>
.item {
  height: 1rem;
}
.heightTran {
  transition: all 0.2s;
  position: absolute;
  top: 0;
  width: 100%;
  height: 4.1rem;
  z-index: 100;
}
.mask2 {
  position: fixed;
  left: 0;
  z-index: 13;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
