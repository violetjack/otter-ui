<template>
  <mt-popup v-model="visible" :closeOnClickModal="closeOnClickModal" position="bottom" class="mint-datetime">
    <mt-picker
      :slots="dateSlots"
      @change="onChange"
      :visible-item-count="visibleItemCount"
      class="mint-datetime-picker"
      ref="picker"
      show-toolbar>
      <span class="mint-datetime-action mint-datetime-cancel" @click="visible = false;$emit('cancel')">{{ cancelText }}</span>
      <span class="mint-datetime-action mint-datetime-confirm" @click="confirm">{{ confirmText }}</span>
    </mt-picker>
  </mt-popup>
</template>

<style lang="stylus">
  @import "../../src/style/var.styl";

  .mint-datetime {
    width: 100%;

    .picker-slot-wrapper, .picker-item {
      backface-visibility: hidden;
    }

    .picker-toolbar {
      border-bottom: solid 1px #eaeaea;
    }

    &-action {
      display: inline-block;
      width: 50%;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      color: $color-blue;
    }

    &-cancel {
      float: left;
    }

    &-confirm {
      float: right;
    }
  }
</style>

<script type="text/babel">
  import picker from '../picker/index.js';
  import popup from '../popup/index.vue';
  import { format } from 'date-fns'

  if (process.env.NODE_ENV === 'component') {
    require('../picker/style.css');
    require('../popup/style.css');
  }

  export default {
    name: 'otter-range-picker',

    props: {
      cancelText: {
        type: String,
        default: '取消'
      },
      confirmText: {
        type: String,
        default: '确定'
      },
      // day week and month
      type: {
        type: String,
        default: 'day'
      },
      startDate: {
        type: Date,
        default() {
          return new Date(new Date().getFullYear() - 10, 0, 1);
        }
      },
      endDate: {
        type: Date,
        default() {
          return new Date(new Date().getFullYear() + 10, 11, 31);
        }
      },
      visibleItemCount: {
        type: Number,
        default: 7
      },
      closeOnClickModal: {
        type: Boolean,
        default: true
      },
      // 初始时间
      defaultDate: null
    },

    data() {
      return {
        // show or not
        visible: false,
        // picker 值
        currentValue: null,
        // slots
        dateSlots: []
      };
    },

    components: {
      'mt-picker': picker,
      'mt-popup': popup
    },

    methods: {
      // 通过 refs 获取组件实例，执行 open 和 close 方法
      open() {
        this.visible = true;
      },
      close() {
        this.visible = false;
      },

      isLeapYear(year) {
        return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
      },

      isShortMonth(month) {
        return [4, 6, 9, 11].indexOf(month) > -1;
      },

      getMonthEndDay(year, month) {
        if (this.isShortMonth(month)) {
          return 30;
        } else if (month === 2) {
          return this.isLeapYear(year) ? 29 : 28;
        } else {
          return 31;
        }
      },

      onChange(picker, values) {
        if (!values.length) return
        if (this.type === 'day') {
          this.currentValue = new Date(
            parseInt(values[0], 10),
            parseInt(values[1], 10) - 1,
            parseInt(values[2], 10)
          )
        }
        if (this.type === 'week') {
          const year = parseInt(values[0], 10)
          const month = parseInt(values[1].substring(0, 2), 10)
          const day = parseInt(values[1].substring(3, 5), 10)
          this.currentValue = new Date(year, month - 1, day)
        }
        if (this.type === 'month') {
          this.currentValue = new Date(
            parseInt(values[0], 10),
            parseInt(values[1], 10) - 1
          )
        }
      },

      generateSlots() {
        console.log('generateSlots')
        let dateSlots = [];
        const INTERVAL_MAP = {
          Y: this.rims.year,
          M: this.rims.month,
          D: this.rims.date
        };

        if (this.type === 'day') {
          dateSlots.push({
            defaultIndex: 0,
            flex: 1,
            values: this.fillValues(INTERVAL_MAP.Y)
          })
          dateSlots.push({
            divider: true,
            content: '-',
          })
          dateSlots.push({
            defaultIndex: 0,
            flex: 1,
            values: this.fillValues(INTERVAL_MAP.M)
          })
          dateSlots.push({
            divider: true,
            content: '-',
          })
          dateSlots.push({
            defaultIndex: 0,
            flex: 1,
            values: this.fillValues(INTERVAL_MAP.D)
          })
        } else if (this.type === 'week') {
          dateSlots.push({
            defaultIndex: 0,
            flex: 1,
            values: this.fillValues(INTERVAL_MAP.Y)
          })
          dateSlots.push({
            divider: true,
            content: '-',
          })
          dateSlots.push({
            defaultIndex: 0,
            flex: 1,
            values: this.getWeeksAllYear(this.currentValue.getFullYear())
          })
        } else if (this.type === 'month') {
          dateSlots.push({
            defaultIndex: 0,
            flex: 1,
            values: this.fillValues(INTERVAL_MAP.Y)
          })
          dateSlots.push({
            divider: true,
            content: '-',
          })
          dateSlots.push({
            defaultIndex: 0,
            flex: 1,
            values: this.fillValues(INTERVAL_MAP.M)
          })
        }
        this.setSlotsByValues(dateSlots)
      },

      fillValues(range) {
        const start = range[0]
        const end = range[1]
        const result = []
        for (let i = start; i <= end; i++) {
          if (i < 10) {
            result.push(`0${i}`)
          } else {
            result.push(`${i}`)
          }
        }
        return result
      },

      setSlotsByValues(dateSlots) {
        if (!dateSlots) return

        const dateArr = format(this.currentValue, 'YYYY-MM-DD').split('-')
        if (this.type === 'day') {
          if (dateSlots[0].values.indexOf(dateArr[0]) >= 0) {
            dateSlots[0].defaultIndex = dateSlots[0].values.indexOf(dateArr[0])
          }
          if (dateSlots[2].values.indexOf(dateArr[1]) >= 0) {
            dateSlots[2].defaultIndex = dateSlots[2].values.indexOf(dateArr[1])
          }
          if (dateSlots[4].values.indexOf(dateArr[2]) >= 0) {
            dateSlots[4].defaultIndex = dateSlots[4].values.indexOf(dateArr[2])
          }
        }
        if (this.type === 'week') {
          const year = `${this.currentValue.getFullYear()}`
          const weekRange = this.getWeeksByDate(this.currentValue)
          const week = `${format(weekRange[0], 'MM/DD')} ~ ${format(weekRange[1], 'MM/DD')}`

          if (dateSlots[0].values.indexOf(year) >= 0) {
            dateSlots[0].defaultIndex = dateSlots[0].values.indexOf(year)
          }
          if (dateSlots[2].values.indexOf(week) >= 0) {
            dateSlots[2].defaultIndex = dateSlots[2].values.indexOf(week)
          }
        }
        if (this.type === 'month') {
          if (dateSlots[0].values.indexOf(dateArr[0]) >= 0) {
            dateSlots[0].defaultIndex = dateSlots[0].values.indexOf(dateArr[0])
          }
          if (dateSlots[2].values.indexOf(dateArr[1]) >= 0) {
            dateSlots[2].defaultIndex = dateSlots[2].values.indexOf(dateArr[1])
          }
        }
        this.dateSlots = dateSlots;
      },

      confirm() {
        this.visible = false;
        let result
        if (this.type === 'day') {
          result = [this.currentValue, new Date(this.currentValue.getFullYear(), this.currentValue.getMonth(), this.currentValue.getDate() + 1)]
        }
        if (this.type === 'week') {
          result = [this.currentValue, new Date(this.currentValue.getTime() + 7 * 24 * 60 * 60 * 1000)]
        }
        if (this.type === 'month') {
          result = [this.currentValue, new Date(this.currentValue.getFullYear(), this.currentValue.getMonth() + 1)]
        }
        if (result) {
          this.$emit('confirm', result);
        }
      },

      // 根据日期获取当前周时间段
      getWeeksByDate(date) {
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()
        const start = new Date(year, month, day + (1 - date.getDay()))
        const end = new Date(year, month, day + (7 - date.getDay()))
        return [start, end]
      },
      // 处理一年内所有周时间段
      getWeeksAllYear(year) {
        let arr = []
        for (let i = 0; i < 12; i++) {
          const monthWeek = this.getWeeks(year, i)
          arr = arr.concat(monthWeek)
        }
        return arr
      },
      // 获取某月的周时间段
      getWeeks(year, month) {
        year = parseInt(year, 10)
        month = parseInt(month, 10)
        const dateCount = new Date(year, month, 0).getDate()
        let now = 1
        const weekRanges = []
        while (now < dateCount) {
          const weekDay = new Date(year, month, now)
          const start = this.getWeeksByDate(weekDay)[0]
          const end = this.getWeeksByDate(weekDay)[1]
          if (start.getMonth() === month) { weekRanges.push(`${format(start, 'MM/DD')} ~ ${format(end, 'MM/DD')}`) }
          now += (7 - weekDay.getDay())
        }
        return weekRanges
      },

      initDate() {
        if (this.defaultDate) {
          if (this.type === 'day') {
            this.currentValue = new Date(this.defaultDate.getFullYear(), this.defaultDate.getMonth(), this.defaultDate.getDate())
          } else if (this.type === 'week') {
            this.currentValue = this.getWeeksByDate(this.defaultDate)[0]
          } else if (this.type === 'month') {
            this.currentValue = new Date(this.defaultDate.getFullYear(), this.defaultDate.getMonth())
          } else {
            return
          }
        }
      },

      isDateString(str) {
        return /\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}/.test(str);
      },

      getYear(value) {
        return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[0] : value.getFullYear();
      },

      getMonth(value) {
        return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[1] : value.getMonth() + 1;
      },

      getDate(value) {
        return this.isDateString(value) ? value.split(' ')[0].split(/-|\/|\./)[2] : value.getDate();
      }
    },

    computed: {
      rims() {
        if (!this.currentValue) return { year: [], month: [], date: [] };
        let result = {
          year: [this.startDate.getFullYear(), this.endDate.getFullYear()],
          month: [1, 12],
          date: [1, this.getMonthEndDay(this.getYear(this.currentValue), this.getMonth(this.currentValue))]
        };
        return result;
      }
    },

    watch: {
      defaultDate(val) {
        this.initDate()
      },

      rims() {
        this.generateSlots();
      },

      visible(val) {
        this.$emit('visible-change', val);
      }
    },

    mounted() {
      this.initDate()
    }
  };
</script>
