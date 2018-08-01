<template>
  <div
    class="bk-nav-container"
    @click="handleClick">
    <div :class="selected?'select':'unselect'">
      <slot/>
    </div>
    <div
      v-show="selected"
      class="select-line"/>
  </div>
</template>

<script>
export default {
  name: 'BkNav',
  props: {
    selected: {
      type: Boolean,
      default: false
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
.bk-nav-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: 50px;
  padding: 0 40px;
}

  .select {
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #3072f6;
    letter-spacing: 0;
    text-align: center;
    margin-top: 14px;
  }

  .unselect {
    font-family: PingFangSC-Regular;
    font-size: 16px;
    color: #9297a6;
    letter-spacing: 0;
    text-align: center;
    margin-top: 14px;
  }

  .select-line {
    margin-top: 4px;
    width: 20px;
    height: 3px;
    background: #3072f6;
    border-radius: 3px;
  }
</style>
