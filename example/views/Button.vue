<template>
  <div class="button-container">
    <otter-button type="default" size="large">关注</otter-button>
    <otter-button type="primary" size="large">primary</otter-button>
    <otter-button type="danger" size="large">danger</otter-button>
    <otter-button type="default" size="large" plain>default</otter-button>
    <otter-button type="primary" size="large" plain>primary</otter-button>
    <otter-button type="danger" size="large" plain>danger</otter-button>
    <otter-button type="default">default</otter-button>
    <otter-button type="primary">primary</otter-button>
    <otter-button type="danger">danger</otter-button>
    <otter-button type="default" size="small">default</otter-button>
    <otter-button type="primary" size="small">primary</otter-button>
    <otter-button type="danger" size="small">danger</otter-button>
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
  
    .mint-button
      margin 10px 0
</style>
