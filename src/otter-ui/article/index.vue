<template>
  <div class="otter-article">
    <img class="otter-article-img" :src="ImgUrl">
    <div class="otter-article-sketch">{{ Sketch }}</div>
    <div
      v-show="HasLine"
      class="otter-article-line otter-row-line-g"/>
  </div>
</template>

<script>
export default {
  name: 'OtterArticle',
  props: {
    ImgUrl: {
      type: String,
      default: ''
    },
    Sketch: {
      type: String,
      default: ''
    },
    HasLine: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .otter-article
    margin-top 27.5px
    &-img
      width 327px
      height 164px
    &-sketch
      margin-top 8px
      margin-bottom 24px
      font-family PingFangSC-Medium
      font-size 16px
      color #222222
      letter-spacing 0.15px
    &-line
      width 327px
</style>
