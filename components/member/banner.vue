<template>
  <div class="banner-box"><img :src="url"></div>
</template>
<script>
export default {
  props: {
    url: {
      type: String,
      default: '/member/images/banner_gsjj.jpg'
    }
  }
}
</script>
