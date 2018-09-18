<template>
  <div
    @click="$emit('click')"
    class="otter-tag"
    :class="[selected?`otter-tag-container--selected otter-tag-container-${size}--selected`:`otter-tag-container otter-tag-container-${size}`]">
    <div :class="'otter-tag-text-' + size">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OtterTag',
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
.otter-tag-container
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F8F8F9;
  border-radius: 2px;

.otter-tag-container--selected
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(26,26,26,0.95);
  border-radius: 2px;

.otter-tag-container-small
  height: 35px;
  width: 70.5px;

.otter-tag-container-small--selected
  height: 33px;
  width: 68.5px;

.otter-tag-container-normal
  height: 44px;
  width: 99px;

.otter-tag-container-normal--selected
  height: 42px;
  width: 97px;

.otter-tag-text
  font-family: PingFangSC-Regular;
  color: #101D37;
  text-align: center;

.otter-tag-text-small
  @extend .otter-tag-text
  font-size: 12px;
  letter-spacing: 0.14px;

.otter-tag-text-normal
  @extend .otter-tag-text
  font-size: 16px;
  letter-spacing: 0.19px;
</style>
