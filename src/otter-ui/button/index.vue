<template>
  <div
    :class="[`bk-button--${type}${plain?'-plain':''}`, 'bk-button--' + size]"
    class="bk-button"
    @click="handleClick">
    <div class="bk-button-text--base bk-button-text--color">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BkButton',
  props: {
    type: {
      type: String,
      default() {
        return 'primary'
      }
    },
    size: {
      type: String,
      default() {
        return 'normal'
      }
    },
    plain: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="stylus" scoped>
.bk-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.bk-button--small {
  height: 44px;
  border-radius: 4px;
}

.bk-button--normal {
  height: 50px;
  border-radius: 5px;
}

.bk-button-text--base {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  letter-spacing: 0;
  text-align: center;
}

.bk-button--primary {
  background-image: linear-gradient(148deg, #6898f8 0%, #2c68e0 100%);

  .bk-button-text--color {
    color: #FFFFFF;
  }
}

.bk-button--success {
  background-image: linear-gradient(147deg, #47CC95 0%, #26B478 100%);

  .bk-button-text--color {
    color: #FFFFFF;
  }
}

.bk-button--cancel {
  background: #F8F8F9;

  .bk-button-text--color {
    color: #9399A5;
  }
}

.bk-button--primary-plain {
  border: 1px solid #3072F6;

  .bk-button-text--color {
    color: #3072F6;
  }
}

.bk-button--success-plain {
  border: 1px solid #47CC95;

  .bk-button-text--color {
    color: #47CC95;
  }
}

.bk-button--cancel-plain {
  background #9399A5

  .bk-button-text--color {
    color: #F8F8F9;
  }
}
</style>
