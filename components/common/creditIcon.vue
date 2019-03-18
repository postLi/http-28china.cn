<template>
  <span v-if="thecredit>0">
    <img 
      v-for="(item, index) in zuanshicredit" 
      :key="index"
      title="钻石" 
      src="/member/images/box/blue.gif" >
    <img 
      v-for="(item, index) in huangguancredit" 
      :key="index"
      title="皇冠" 
      src="/member/images/box/xinyu.gif" >
  </span>
</template>
<script>
export default {
  props: {
    credit: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    thecredit() {
      return Number(this.credit) || 0
    },
    zuanshicredit() {
      let c = this.thecredit
      let i = 0
      if (c <= 3) {
        i = 1
      } else if (c <= 10) {
        i = 2
      } else if (c <= 40) {
        i = 3
      } else if (c <= 90) {
        i = 4
      } else if (c <= 150) {
        i = 5
      }
      return i
    },
    huangguancredit() {
      let c = this.thecredit
      let i = 0
      if (c > 150) {
        if (c <= 250) {
          i = 1
        } else if (c <= 500) {
          i = 2
        } else if (c <= 1000) {
          i = 3
        } else if (c <= 2000) {
          i = 4
        } else if (c > 2000) {
          i = 5
        }
      }
      return i
    }
  }
}
</script>
