<template>
  <div class="input-demo-container">
    <otter-input v-model="inputValue" placeholder="请输入" />
    <h1>输出结果：{{ inputValue }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.input-demo-container
  height 100%
  padding-top 30px
  background #F8F8F9

</style>

