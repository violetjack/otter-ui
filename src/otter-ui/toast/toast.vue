<template>
  <transition name="bk-toast">
    <div
      v-show="visible"
      class="pop"
      :class="'toast-place-' + position">
      <img
        v-if="iconType==='right'"
        src="./img/RightHook.png">
      <img
        v-if="iconType==='error'"
        src="./img/LoadingError.png">
      <div>{{ message }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BkToast',
  props: {
    message: {
      type: String,
      default: ''
    },
    iconType: {
      type: String,
      default: ''
    },
    holder: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'middle'
    }
  },
  data() {
    return {
      visible: true,
    }
  },
  created() {
    if (this.holder) {
      this.visible = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .toast-place-top {
    top: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }
  
  .toast-place-middle {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .toast-place-bottom {
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .pop
    background rgba(26, 26, 26, 0.95)
    box-shadow 0 5px 10px 0 rgba(0, 0, 0, 0.2)
    border-radius 4px
    max-width 195px
    max-height 40px
    padding 14px 18px
    display flex
    flex-direction row
    align-items center
    position fixed
    z-index 3200

    img
      width 24px
      height 24px
      margin-right 6px

    div
      font-family PingFangSC-Medium
      font-size 16px
      color #ffffff
      text-align left
      line-height 20px
      overflow hidden

.bk-toast-enter-active, .bk-toast-leave-active
  transition opacity 0.2s

.bk-toast-enter, .bk-toast-leave-to
  opacity 0
</style>
