<template>
  <div>
    <span 
      class="star star_1"
      v-if="startNum===1"/>
    <span 
      class="star star_2"
      v-else-if="startNum===2"/>
    <span 
      class="star star_3"
      v-else-if="startNum===3"/>
    <span 
      class="star star_4"
      v-else-if="startNum===4"/>
    <span 
      class="star star_5"
      v-else-if="startNum===5"/>
    <span 
      class="star"
      v-else/>
  </div>
</template>
<script>
export default {
  name: 'Star',
  props: {
    startNum: {
      type: Number,
      default: 0
    }
  }
}
</script>
<style lang="scss" scoped>
.star {
  display: block;
  width: 96px;
  height: 16px;
  background-image: url('icon_star.png');
  background-repeat: no-repeat;
  background-position: 0 0;
}
.star_1 {
  background-position: 0 -16px;
}
.star_2 {
  background-position: 0 -32px;
}
.star_3 {
  background-position: 0 -48px;
}
.star_4 {
  background-position: 0 -64px;
}

.star_5 {
  background-position: 0 -80px;
}
</style>
