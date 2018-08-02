<template>
  <div>
    <otter-search-bar
      v-model="searchValue"
      placeholder="请输入查询地址"
      @focus="log('focus')"
      @blur="log('blur')"
      show-clear/>
    <h1>输出结果：{{ searchValue }}</h1>
    <h1>当前事件：{{ status }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchValue: '',
      status: ''
    }
  },
  methods: {
    log(val) {
      this.status = val
    }
  }
}
</script>

<style>

</style>
