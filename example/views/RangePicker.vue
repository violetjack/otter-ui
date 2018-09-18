<template>
  <div class="page-datetime">
    <h1 class="page-title">Range Picker</h1>
    <div class="page-datetime-wrapper">
      <otter-button @click.native="open('picker1')">点击弹出 Day Picker</otter-button>
      <otter-button @click.native="open('picker2')">点击弹出 Week Picker</otter-button>
      <otter-button @click.native="open('picker3')">点击弹出 Mnoth Picker</otter-button>
    </div>
    <otter-range-picker
      ref="picker1"
      :default-date="value1"
      @visible-change="handleVisibleChange"
      @confirm="handleChange">
    </otter-range-picker>
    <otter-range-picker
      ref="picker2"
      type="week"
      :default-date="value2"
      @confirm="handleChange">
    </otter-range-picker>
    <otter-range-picker
      ref="picker3"
      type="month"
      :default-date="value3"
      @confirm="handleChange">
    </otter-range-picker>
  </div>
</template>

<style lang="stylus" scoped>
.otter-button
  margin: 20px 10px;

</style>

<script type="text/babel">
  export default {
    data () {
      return {
        value1: new Date(),  
        value2: new Date(),  
        value3: new Date()  
      }
    },

    methods: {
      open(picker) {
        this.$refs[picker].open();
      },

      handleChange(value) {
        console.log('final value',value)
      },

      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }
    }
  };
</script>
