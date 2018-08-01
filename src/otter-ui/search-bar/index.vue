<template>
  <div class="bk-switch-search-wrapper">
    <img
      class="icon search"
      src="./img/search.png">
    <input
      v-model="currentValue"
      :placeholder="placeholder"
      class="input"
      @focus="$emit('focus')"
      @blur="$emit('blur')">
    <img
      v-show="currentValue !== '' && showClear"
      class="icon del"
      src="./img/delete.png"
      @click="currentValue = ''">
  </div>
</template>

<script>
export default {
  name: 'BkSearchBar',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    showClear: {
      type: Boolean,
      default: false
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
    }
  },
  methods: {
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    }
  }
}
</script>

<style lang="stylus" scoped>
.bk-switch-search-wrapper {
  background: #F8F8F9;
  border-radius: 100px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;

  .search {
    margin-left: 14px;
  }

  .del {
    margin-right: 14px;
  }

  .icon {
    width: 16px;
    height: 16px;
  }

  .input {
    width: 100%;
    height: 18px;
    -webkit-appearance: none;
    background: none;
    border: none;
    box-sizing: border-box;
    display: inline-block;
    outline: none;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #101D37;
    letter-spacing: 0;
  }
}
</style>
