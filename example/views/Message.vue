<template>
  <div>
    <otter-button @click="showMessage = true">显示 message box</otter-button>
    <otter-confirm-box
      :visible="showMessage"
      title="请输入快递单号查询"
      maxlength="30"
      placeholder="请输入"
      cancel-text="取消"
      confirm-text="下一步"
      @confirm="handleOrderConfirm"
      @cancel="showMessage = false"
      @close="showMessage = false"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMessage: false
    }
  },
  methods: {
    handleOrderConfirm(val) {
      this.$toast(val)
      this.showMessage = false
    }
  }
}
</script>

<style scoped>
  .otter-button {
    margin: 20px;
  }
</style>
