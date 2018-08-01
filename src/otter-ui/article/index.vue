<template>
  <div class="bk-home-article-wrapper">
    <img :src="ImgUrl">
    <div class="sketch-content">{{ Sketch }}</div>
    <div
      v-show="HasLine"
      class="divider-line"/>
  </div>
</template>

<script>
export default {
  name: 'BkArticle',
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
  .bk-home-article-wrapper
    margin-top 27.5px
    img
      width 327px
      height 164px
    .sketch-content
      margin-top 8px
      margin-bottom 24px
      font-family PingFangSC-Medium
      font-size 16px
      color #222222
      letter-spacing 0.15px
    .divider-line
      height 1px
      width 327px
      background: #E4E6F0;
      transform:scaleY(0.5)
      -ms-transform rscaleY(0.5)
      -webkit-transform scaleY(0.5)
</style>
