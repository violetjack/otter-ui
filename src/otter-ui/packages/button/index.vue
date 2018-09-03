<template>
  <div
    class="otter-button"
    :class="[`otter-button--${type}${plain?'-plain':''}`, 'otter-button--' + size]"
    @click="handleClick"
    :disabled="disabled">
    <div class="otter-button-text--base otter-button-text--color">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtterButton',
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
    },
    disabled: Boolean,
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="stylus" scoped>
.otter-button {
  display: flex;
  justify-content: center;
  align-items: center;
}

.otter-button--small {
  height: 44px;
  border-radius: 4px;
}

.otter-button--normal {
  height: 50px;
  border-radius: 5px;
}

.otter-button-text--base {
  font-family: PingFangSC-Medium;
  font-size: 16px;
  letter-spacing: 0;
  text-align: center;
}

.otter-button--primary {
  background-image: linear-gradient(148deg, #6898f8 0%, #2c68e0 100%);

  .otter-button-text--color {
    color: #FFFFFF;
  }
}

.otter-button--success {
  background-image: linear-gradient(147deg, #47CC95 0%, #26B478 100%);

  .otter-button-text--color {
    color: #FFFFFF;
  }
}

.otter-button--cancel {
  background: #F8F8F9;

  .otter-button-text--color {
    color: #9399A5;
  }
}

.otter-button--primary-plain {
  border: 1px solid #3072F6;

  .otter-button-text--color {
    color: #3072F6;
  }
}

.otter-button--success-plain {
  border: 1px solid #47CC95;

  .otter-button-text--color {
    color: #47CC95;
  }
}

.otter-button--cancel-plain {
  background #9399A5

  .otter-button-text--color {
    color: #F8F8F9;
  }
}
</style>
