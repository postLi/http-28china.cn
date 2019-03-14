<template>
  <div 
    :id="id" 
    class="jtabcon">
    <template 
      v-for="(item, index) in list" 
    >
      <a 
        v-if="index === 0" 
        :href="item.url" 
        :title="item.title"
        :key="'a'+index" 
        target="_blank">
        <img 
          :src="item.typeImg || '/images/index/28w.png'" 
          :alt="item.title" >
      </a>
      <a 
        v-if="index === 0" 
        :href="item.url" 
        :title="item.title" 
        :key="'b'+index" 
        target="_blank">
        <span>{{ item.title }}</span>
      </a>
      <a 
        v-if="index !== 0" 
        :href="item.url" 
        :title="item.title" 
        :key="'c'+index" 
        target="_blank">
        {{ item.title }}
      </a>
      <br :key="index" >
      <div 
        v-if="index === 0" 
        :key="'d'+index" 
        class="h18" />
    </template>
 
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    id: {
      type: String,
      default: ''
    }
  }
}
</script>
