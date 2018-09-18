<template>
  <div>
    <otter-button @click="show01">文字 toast（中部）</otter-button>
    <otter-button @click="show02">成功 toast（底部）</otter-button>
    <otter-button @click="show03">警报 toast（顶部）</otter-button>
  </div>
</template>

<script>
export default {
  methods: {
    show01() {
      this.$toast('hello world!')
    },
    show02() {
      this.$toast({
        message: 'success!',
        iconType: 'right',
        position: 'bottom'
      })
    },
    show03() {
      this.$toast({
        message: 'error!',
        iconType: 'error',
        position: 'top'
      })
    }
  }
}
</script>

<style scoped>
  .otter-button {
    margin: 20px;
  }
</style>
