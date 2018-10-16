<template>
  <div
    class="otter-cell"
    @click="handleClick">
    <div class="otter-cell-content">
      <div class="otter-cell-area otter-cell-area-left">
        <img
          v-show="img != ''"
          :src="img"
          class="otter-cell-icon">
        <div class="otter-cell-title">{{ label }}</div>
      </div>
      <div class="otter-cell-area otter-cell-area-right">
        <div
          v-if="showDefault"
          class="otter-cell-value-default">{{ placeholder }}</div>
        <div
          v-else
          class="otter-cell-value">
          <div class="otter-cell-value__text">{{ value }}</div>
          <slot/>
        </div>
        <img
          v-if="isLink"
          class="otter-cell-enter"
          src="./img/right.png">
      </div>
    </div>
    <div
      v-if="hasLine"
      class="otter-row-line-g"/>
  </div>
</template>

<script>
export default {
  name: 'OtterCell',
  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    img: {
      type: String,
      default() {
        return ''
      }
    },
    hasLine: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    isLink: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showDefault() {
      return this.placeholder && !this.value
    }
  },
  methods: {
    handleClick(event) {
      event.preventDefault()
      this.to && this.$router.push(this.to)
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="stylus" scoped>
.otter-cell {
  min-height: 60px;
  padding-left: 24px;
  padding-right: 24px;
  background: #ffffff;
}

.otter-cell:active {
  height: 60px;
  padding-left: 24px;
  padding-right: 24px;
  background: #f8f8f9;
}

.otter-cell-content {
  height: 59.5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.otter-cell-area {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
}

.otter-cell-area-left {
  min-width 80px
}

.otter-cell-area-right {
  flex: 1;
  justify-content flex-end
  height 100%
}

.otter-cell-line {
  height: 1px;
  background: #e4e6f0;
  transform: scaleY(0.5)
}

.otter-cell-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.otter-cell-enter {
  width: 16px;
  height: 16px;
  margin-left: 3px;
}

.otter-cell-title {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #101d37;
  letter-spacing: 0;
  margin-right: 10px;
}

.otter-cell-value
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content flex-end
  height 100%

  &__text
    max-height 40px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    line-height 20px
    color: #101d37;
    letter-spacing: 0;
    overflow: hidden;

.otter-cell-value-default {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #9399a5;
  letter-spacing: 0;
  text-align: right;
  flex: 1;
  line-height: 22px;
  height: 22px;
}
</style>
