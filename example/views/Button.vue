<template>
  <div class="button-container">
    <otter-button>primary</otter-button>
    <otter-button type="success">success</otter-button>
    <otter-button type="cancel">cancel</otter-button>
    <otter-button type="primary" plain>primary</otter-button>
    <otter-button type="success" plain>success</otter-button>
    <otter-button type="cancel" plain>cancel</otter-button>
    <otter-button size="small">small</otter-button>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$toast('hello world!')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .button-container
    padding 25px;
  
    .otter-button
      margin 10px 0
</style>
