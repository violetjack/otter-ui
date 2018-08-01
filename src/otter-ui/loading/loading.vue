<template>
  <transition name="bk-loading">
    <div
      v-show="visible"
      class="bk-loading"
      @click="stopClick">
      <div class="bk-loading__pop">
        <img
          src="./img/Loading.png"
          class="bk-loading__loading">
        <div>{{ text }}</div>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
export default {
  name: 'BkLoading',
  props: {
    text: {
      type: String,
      default: ''
    },
    keepHolder: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false
    }
  },
  mounted () {
    if (this.keepHolder) this.visible = true
  },
  methods: {
    stopClick(e) {
      e.preventDefault()
    }
  }
}
</script>

<style lang="stylus" scoped>
.bk-loading
  z-index: 3000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &__pop
    background: rgba(26, 26, 26, 0.95);
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    max-width: 195px;
    max-height: 40px;
    padding: 14px 18px;
    display: flex;
    flex-direction: row;
    align-items: center;

    img
      width: 24px;
      height: 24px;
      margin-right: 6px;

    div
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #ffffff;
      text-align: left;
      line-height: 20px;
      overflow: hidden;

@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes rotate {
  from {
    -webkit-transform: rotate(0deg);
  }

  to {
    -webkit-transform: rotate(360deg);
  }
}

.bk-loading__loading {
  animation-name: rotate;
  -webkit-animation-name: rotate;
  animation-duration: 1.5s;
  -webkit-animation-duration: 1.5s;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-timing-function: linear;
  -webkit-animation-timing-function: linear;
}

.bk-loading-enter-active,
.bk-loading-leave-active {
  transition: opacity 0.2s;
}

.bk-loading-enter,
.bk-loading-leave-to {
  opacity: 0;
}
</style>
