<template>
  <div>
    <otter-tag @click="selectNormal = !selectNormal" :selected="selectNormal">normal</otter-tag>
    <otter-tag @click="selectSmall = !selectSmall" :selected="selectSmall" size="small">small</otter-tag>
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
