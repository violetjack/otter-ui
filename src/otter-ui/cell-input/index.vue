<template>
  <div class="bk-cell-input">
    <div class="bk-cell-container">
      <div class="title">{{ label }}</div>
      <div class="cell-input-container">
        <input
          :placeholder="placeholder"
          v-model="currentValue"
          :maxlength="maxlength"
          :ng-pattern="ngPattern"
          class="cell-input"
          @focus="handleFocus"
          :onkeypress="onkeypress"
          @blur="handleBlur">
          <img v-show="currentValue !== ''" @click="currentValue = ''" class="cell-input-clear" src="./img/delete.png"/>
      </div>  
    </div>
    <div class="bk-cell-line"/>
  </div>
</template>

<script>
export default {
  name: 'BkCellInput',
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
    ngPattern: {
      type: String,
      default: ''
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
  .bk-cell-container
    display flex
    justify-content space-between
    align-items center
    height 60px
    padding 0 24px

    .title
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #101D37;
      letter-spacing: 0;

    .cell-input-container
      display flex
      flex-direction row
      align-items center

    .cell-input
      width: 130px;
      height: 30px;
      -webkit-appearance: none;
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

    .cell-input-clear
      width 14px
      height 14px

    ::-webkit-input-placeholder
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

    .label-container
      display flex
      flex-direction row
      justify-content flex-end
      align-items center

      .label
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #101D37;
        letter-spacing: 0;
        text-align: right;

      .label__placeholder
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #9399A5;
        letter-spacing: 0;
        text-align: right;

      img
        width 16px
        height 16px

  .bk-cell-line
    height 1px
    transform scaleY(0.5)
    margin 0 24px
    background: #E4E6F0;

</style>
