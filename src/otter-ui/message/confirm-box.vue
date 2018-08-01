<template>
  <transition name="bk-message">
    <message-popup v-show="visible">
      <div class="bk-message">
        <img
          class="bk-message__btn-close"
          src="./img/Close.png"
          @click="handleClose">
        <div class="bk-message__title">{{ title }}</div>
        <input
          v-model="currentValue"
          :placeholder="placeholder"
          :type="inputType"
          :maxlength="maxlength"
          class="bk-message__input">
        <div class="bk-message__line"/>
        <div class="bk-message-button-group">
          <bk-button
            type="cancel"
            size="small"
            @click="handleCancel">{{ cancelText }}</bk-button>
          <bk-button
            type="primary"
            size="small"
            @click="handleConfirm">{{ confirmText }}</bk-button>
        </div>
      </div>
    </message-popup>
  </transition>
</template>

<script>
import MessagePopup from '../message-popup'

export default {
  name: 'BkConfirmBox',
  components: {
    MessagePopup
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    },
    maxlength: {
      type: String,
      default: '50'
    },
    placeholder: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue(val) {
      this.$emit('input', val)
    },
  },
  methods: {
    handleConfirm() {
      this.$emit('confirm', this.currentValue)
      this.currentValue = ''
    },
    handleClose() {
      this.$emit('close')
      this.currentValue = ''
    },
    handleCancel() {
      this.$emit('cancel')
      this.currentValue = ''
    }
   },
}
</script>

<style lang="stylus" scoped>
.bk-message
  width 275px
  display flex
  flex-direction column
  margin-left 40px
  z-index 2800

  &__btn-close
    width 24px
    height 24px
    align-self flex-end
    margin 18px 16px 21px 0

  &__title
    font-family: PingFangSC-Medium;
    font-size: 24px;
    line-height 30px
    color: #030303;
    letter-spacing: -0.58px;

  &__input
    width 235px
    height 44px
    margin-top 30px
    -webkit-appearance none
    background-color transparent
    background-image none
    border none
    box-sizing border-box
    color black
    display inline-block
    font-size inherit
    outline none
    transition border-color .2s cubic-bezier(.645,.045,.355,1)
    width 100%

  ::-webkit-input-placeholder
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

  &__line
    width 235px
    height 1px
    transform scaleY(.5)
    margin-bottom 24px
    background #E4E6F0

  &-button-group
    display flex
    flex-direction row

    .bk-button
      width 113.5px
      margin-right 8.5px

.bk-message-enter-active, .bk-message-leave-active
  transition opacity 0.2s

.bk-message-enter, .bk-message-leave-to
  opacity 0
</style>
