<template>
  <div
    class="bk-cell"
    @click="handleClick">
    <div class="bk-cell-content">
      <div class="bk-cell-area bk-cell-area-left">
        <img
          v-show="img != ''"
          :src="img"
          class="bk-cell-icon">
        <div class="bk-cell-title">{{ label }}</div>
      </div>
      <div class="bk-cell-area bk-cell-area-right">
        <div
          v-if="showDefault"
          class="bk-cell-value-default">{{ placeholder }}</div>
        <div
          v-else
          class="bk-cell-value">
          <div class="bk-cell-value__text">{{ value }}</div>
          <slot/>
        </div>
        <img
          v-if="isLink"
          class="bk-cell-enter"
          src="./img/right.png">
      </div>
    </div>
    <div
      v-if="hasLine"
      class="bk-cell-line"/>
  </div>
</template>

<script>
export default {
  name: 'BkCell',
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
.bk-cell {
  height: 60px;
  padding-left: 24px;
  padding-right: 24px;
  background: #ffffff;
}

.bk-cell:active {
  height: 60px;
  padding-left: 24px;
  padding-right: 24px;
  background: #f8f8f9;
}

.bk-cell-content {
  height: 59px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.bk-cell-area {
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
}
.bk-cell-area-left {
  min-width 80px
}
.bk-cell-area-right {
  flex: 1;
  justify-content flex-end
}

.bk-cell-line {
  height: 1px;
  background: #e4e6f0;
  transform: scaleY(0.5)
}

.bk-cell-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.bk-cell-enter {
  width: 16px;
  height: 16px;
  margin-left: 3px;
}

.bk-cell-title {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #101d37;
  letter-spacing: 0;
  margin-right: 10px;
}

.bk-cell-value
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content flex-end
  height: 49px;

  &__text
    min-height: 19px;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    line-height 20px
    color: #101d37;
    letter-spacing: 0;
    overflow: auto;

.bk-cell-value-default {
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
