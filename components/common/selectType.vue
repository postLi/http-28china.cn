<template>
  <span>
    <a 
      @click.stop.prevent="setVal('','', '')"
      class="all"
      :class="current === '' ? 'now' : ''" 
      href="#">不限</a>
    <a 
      v-for="(item, index) in list"
      :key="index"
      :class="current === index ? 'now' : ''" 
      @click.stop.prevent="setVal(item.code, item.name, index)"
      :rel="item.code"
      href="#">{{ item.name }}</a>
  </span>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    getCode: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      current: ''
    }
  },
  methods: {
    setVal(code, name, index) {
      this.current = index
      let val = name.replace(/>(.*)/, '$1-').split('-')

      if (this.getCode) {
        val = code
      }
      this.$emit('input', val)
    }
  }
}
</script>
