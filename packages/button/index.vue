<template>
  <mt-button>

  </mt-button>
</template>

<script>
export default {
  name: 'otter-button',

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },

  props: {
    icon: String,
    disabled: Boolean,
    nativeType: String,
    plain: Boolean,
    type: {
      type: String,
      default: 'default',
      validator(value) {
        return [
          'default',
          'danger',
          'primary'
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return [
          'small',
          'normal',
          'large'
        ].indexOf(value) > -1;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
vendor(prop, args)
  -webkit-{prop} args
  -moz-{prop} args
  -ms-{prop} args
  {prop} args

.otter-button
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction row
  vendor('user-select', none)

  &:active
    opacity: .6

  &-icon
    vertical-align: middle;
    display: inline-block;

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
  background: #3072F6;

  .otter-button-text--color {
    color: #FFFFFF;
  }
}

.otter-button--success {
  background: #3BC48B;

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

.is-disabled {
  opacity: .3

  &:active {
    opacity: .3
  }
}
</style>
