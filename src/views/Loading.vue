<template>
  <div>
    <bk-button @click="showLoading">js loading</bk-button>
    <bk-button @click="showLoading02">html loading</bk-button>
    <bk-loading text="HTML 加载中！"
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
      this.$bkloading.open('JS 加载中!')
      setTimeout(() => {
        this.$bkloading.close()
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
  .bk-button {
    margin: 20px;
  }
</style>
