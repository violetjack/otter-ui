<template>
  <div>
    <otter-button @click="showLoading">js loading</otter-button>
    <otter-button @click="showLoading02">html loading</otter-button>
    <otter-loading text="HTML 加载中！"
      v-if="showHTMLLoading"
      keep-holder/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showHTMLLoading: false  
    }
  },
  mounted () {
    this.showHTMLLoading = false
  },
  methods: {
    showLoading() {
      this.$loading.open('JS 加载中!')
      setTimeout(() => {
        this.$loading.close()
      }, 3000)
    },
    showLoading02() {
      this.showHTMLLoading = true
      setTimeout(() => {
        this.showHTMLLoading = false
      }, 3000)
    }
  }
}
</script>

<style scoped>
  .otter-button {
    margin: 20px;
  }
</style>
