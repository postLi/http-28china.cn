<template>
  <div/>
</template>
<script>
export default {
  name: 'Hyzx',
  mounted() {
    if (process.client) {
      location.href = 'member.28china.cn'
    }
  }
}
</script>
