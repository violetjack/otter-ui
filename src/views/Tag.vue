<template>
  <div>
    <bk-tag @click="selectNormal = !selectNormal" :selected="selectNormal">normal</bk-tag>
    <bk-tag @click="selectSmall = !selectSmall" :selected="selectSmall" size="small">small</bk-tag>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectSmall: false,
      selectNormal: false,
    }
  }
}
</script>

<style>

</style>
