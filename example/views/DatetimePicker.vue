<template>
  <div class="page-datetime">
    <h1 class="page-title">Datetime Picker</h1>
    <div class="page-datetime-wrapper">
      <otter-button @click.native="open('picker1')">点击弹出 DateTime Picker</otter-button>
      <otter-button @click.native="open('picker2')">点击弹出 Date Picker</otter-button>
      <otter-button @click.native="open('picker3')">点击弹出 Time Picker</otter-button>
      <otter-button @click.native="open('picker4')">自定义模板</otter-button>
      <otter-button @click.native="open('picker5')">设定初始值</otter-button>
    </div>
    <otter-datetime-picker
      ref="picker1"
      v-model="value"
      :closeOnClickModal="false"
      @visible-change="handleVisibleChange"
      @confirm="handleChange">
    </otter-datetime-picker>
    <otter-datetime-picker
      ref="picker2"
      type="date"
      v-model="value2"
      @confirm="handleChange">
    </otter-datetime-picker>
    <otter-datetime-picker
      ref="picker3"
      type="time"
      v-model="value3"
      @confirm="handleChange">
    </otter-datetime-picker>
    <otter-datetime-picker
      ref="picker4"
      type="date"
      v-model="value4"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleChange">
    </otter-datetime-picker>
    <otter-datetime-picker
      ref="picker5"
      type="time"
      v-model="value5"
      @confirm="handleChange">
    </otter-datetime-picker>
  </div>
</template>

<style lang="stylus" scoped>
.otter-button
  margin: 20px 10px;

</style>

<script type="text/babel">
  export default {
    data() {
      return {
        value: null,
        value2: null,
        value3: null,
        value4: null,
        value5: '04:32',
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false
      };
    },

    methods: {
      open(picker) {
        this.$refs[picker].open();
      },

      handleChange(value) {
        this.$toast({
          message: '已选择 ' + value.toString(),
          position: 'bottom'
        });
      },

      handleVisibleChange(isVisible) {
        console.log('弹窗是否展示:', isVisible);
      }
    }
  };
</script>
