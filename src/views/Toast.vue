<template>
  <div>
    <bk-button @click="show01">文字 toast（中部）</bk-button>
    <bk-button @click="show02">成功 toast（底部）</bk-button>
    <bk-button @click="show03">警报 toast（顶部）</bk-button>
  </div>
</template>

<script>
export default {
  methods: {
    show01() {
      this.$bktoast('hello world!')
    },
    show02() {
      this.$bktoast({
        message: 'success!',
        iconType: 'right',
        position: 'bottom'
      })
    },
    show03() {
      this.$bktoast({
        message: 'error!',
        iconType: 'error',
        position: 'top'
      })
    }
  }
}
</script>

<style scoped>
  .bk-button {
    margin: 20px;
  }
</style>
