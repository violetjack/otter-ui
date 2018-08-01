<template>
  <div class="bk-input">
    <input
      v-model="currentValue"
      :placeholder="placeholder"
      :disabled="disabled"
      class="bk-input__inner">
  </div>
</template>

<script>
export default {
  name: 'BkInput',
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '',
    }
  },
  data() {
    return {
      currentValue: this.value,
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },

    currentValue(val) {
      this.$emit('input', val)
    },
  }
}
</script>

<style lang="stylus" scoped>
.bk-input
  font-family PingFangSC-Regular
  width 100%
  position relative
  font-size 16px
  display inline-block

  &__inner
    -webkit-appearance none
    background-color #fff
    background-image none
    padding 20px 25px
    border none
    box-sizing border-box
    color black
    display inline-block
    font-size inherit
    outline none
    transition border-color .2s cubic-bezier(.645,.045,.355,1)
    width 100%
</style>

