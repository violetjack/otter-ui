<template>
  <div class="home-container">
    <img class="logo" :src="Logo"/>
    <otter-cell
      v-for="(item, index) of list"
      :key="index"
      :label="item.label"
      :to="item.to"
      is-link/>
  </div>
</template>

<script>
import Logo from '@/assets/logo.png'
import { compRoutes } from '@/router.js'

export default {
  name: 'example-list',
  data () {
    return {
      Logo,
      list: []
    }
  },
  mounted () {
    this.list = compRoutes.map(item => {
      return {
        to: item.path,
        label: item.name
      }
    })
  },
  methods: {
    toPage(to) {
      this.$router.push(to)
    }
  }
}
</script>

<style lang="stylus" scoped>
.logo
  width 100%
</style>
