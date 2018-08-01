<template>
  <div
    @click="$emit('click')"
    class="bk-tag"
    :class="[selected?`bk-tag-container--selected bk-tag-container-${size}--selected`:`bk-tag-container bk-tag-container-${size}`]">
    <div :class="'bk-tag-text-' + size">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BkTag',
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="stylus" scoped>
.bk-tag-container
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F8F8F9;
  border-radius: 2px;

.bk-tag-container--selected
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(26,26,26,0.95);
  border-radius: 2px;

.bk-tag-container-small
  height: 35px;
  width: 70.5px;

.bk-tag-container-small--selected
  height: 33px;
  width: 68.5px;

.bk-tag-container-normal
  height: 44px;
  width: 99px;

.bk-tag-container-normal--selected
  height: 42px;
  width: 97px;

.bk-tag-text
  font-family: PingFangSC-Regular;
  color: #101D37;
  text-align: center;

.bk-tag-text-small
  @extend .bk-tag-text
  font-size: 12px;
  letter-spacing: 0.14px;

.bk-tag-text-normal
  @extend .bk-tag-text
  font-size: 16px;
  letter-spacing: 0.19px;
</style>
