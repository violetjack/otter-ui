<template>
  <div class="otter-input">
    <input
      v-model="currentValue"
      :placeholder="placeholder"
      :disabled="disabled"
      class="otter-input__inner">
  </div>
</template>

<script>
export default {
  name: 'OtterInput',
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
.otter-input
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
    color: #101D37;
    letter-spacing: 0;

  &__clear
    width 14px
    height 14px

  ::-weotterit-input-placeholder
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #9399A5;
    letter-spacing: 0;

  :-moz-placeholder
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #9399A5;
    letter-spacing: 0;

  ::-moz-placeholder
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #9399A5;
    letter-spacing: 0;

  :-ms-input-placeholder
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #9399A5;
    letter-spacing: 0;

  ::-ms-input-placeholder
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #9399A5;
    letter-spacing: 0;

  ::placeholder
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #9399A5;
    letter-spacing: 0;
</style>

