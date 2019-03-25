<template>
  <div
    class="component_header flex_a"
    :style="{background:backColor,color:color}"
    :class="[showLine?'b_b':'']">
    <div class="flex_1 flex_a f-36">
      <i
        class="padding_l_20 cubeic-back"
        @click="$router.go(-1)"
      />
    </div>
    <slot/>
    <div class="flex_1"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { Style } from 'cube-ui'

Vue.use(Style)
export default {
  name: 'MyTop',
  props: {
    showLine: {
      type: Boolean,
      default: true
    },
    backColor: {
      type: String,
      default: '#ffffff'
    },
    color: {
      type: String,
      default: '#42474b'
    }
  }
}
</script>

<style scoped lang="scss">
.component_header {
  img {
    width: 0.2rem;
    height: 0.38rem;
  }
  min-height: 0.88rem;
}
</style>
