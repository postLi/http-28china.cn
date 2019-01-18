<template>
  <div>
    {{ id }}
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return {
      id: params.id
    }
  },
  layout: 'member',
  fetch({ store, params }) {
    store.commit('member/setId', params.id)
  }
}
</script>
