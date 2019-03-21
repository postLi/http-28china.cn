<template>
  <div
    class="component_header flex_a b_c_w"
    :class="[showLine?'b_b':'']">
    <div class="flex_1 flex_a">
      <img
        class="padding_l_20"
        src="/m/common/nav_back_black.png"
        @click="$router.go(-1)"
      >
    </div>
    <slot/>
    <div class="flex_1"/>
  </div>
</template>

<script>
export default {
  name: 'MyTop',
  props: {
    showLine: {
      type: Boolean,
      default: true
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
  color: #42474b;
}
</style>
