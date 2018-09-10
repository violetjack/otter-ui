<template>
  <div class="otter-field">
    <div class="otter-field-container">
      <div class="otter-field-container--label">{{ label }}</div>
      <div class="otter-field-container--input-container">
        <input
          :placeholder="placeholder"
          v-model="currentValue"
          :maxlength="maxlength"
          class="otter-field-container--input"
          @focus="handleFocus"
          :onkeypress="onkeypress"
          @blur="handleBlur">
          <img v-show="currentValue !== ''" @click="currentValue = ''" class="otter-field-container--clear" src="./img/delete.png"/>
      </div>  
    </div>
    <div class="otter-field-line otter-row-line-g"/>
  </div>
</template>

<script>
export default {
  name: 'OtterField',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    maxlength: {
      type: String,
      default: '50'
    },
    onkeypress: {
      type: String,
      defalut: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
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
    handleInput(e) {
      this.currentValue = e.target.value
    },
    handleFocus(e) {
      this.$emit('focus', e)
    },
    handleBlur(e) {
      this.$emit('blur', e)
    },
    handleKeypress(e) {
      this.$emit('keypress', e)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .otter-field-container
    display flex
    justify-content space-between
    align-items center
    height 60px
    padding 0 24px

    &--label
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #101D37;
      letter-spacing: 0;

    &--input-container
      display flex
      flex-direction row
      align-items center

    &--input
      width: 130px;
      height: 30px;
      -weotterit-appearance: none;
      background: none;
      border: none;
      box-sizing: border-box;
      display: inline-block;
      outline: none;
      transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #101D37;
      letter-spacing: 0;
      text-align: right;

    &--clear
      width 14px
      height 14px

    ::-weotterit-input-placeholder
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #9399A5;
      letter-spacing: 0;
      text-align: right;

    :-moz-placeholder
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #9399A5;
      letter-spacing: 0;
      text-align: right;

    ::-moz-placeholder
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #9399A5;
      letter-spacing: 0;
      text-align: right;

    :-ms-input-placeholder
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #9399A5;
      letter-spacing: 0;
      text-align: right;

    ::-ms-input-placeholder
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #9399A5;
      letter-spacing: 0;
      text-align: right;

    ::placeholder
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #9399A5;
      letter-spacing: 0;
      text-align: right;

  .otter-field-line
    margin 0 24px

</style>
