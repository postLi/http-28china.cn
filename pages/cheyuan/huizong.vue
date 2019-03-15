<template>
  <div>
    <div class="grid_c1 category">
      <div class="col1">1</div>
      <div class="col2">2</div>
      <div class="col3">3</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/common.scss';
.grid_c1 {
  margin: 0 auto;
  width: $w_1440;
}
/*车源专线*/
.category {
  .col {
    @extend .fl;
  }
}
</style>
