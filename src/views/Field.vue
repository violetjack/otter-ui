<template>
  <div>
    <otter-field
      label="手机号"
      v-model="inputValue"
      maxlength="20"
      placeholder="请输入"
      />
    <h3>输出结果：{{ inputValue }}</h3>
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
