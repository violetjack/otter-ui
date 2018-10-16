<template>
  <div>
    <mt-cell
      :icon="icon"
      :title="title"
      :to="to"
      :value="value"
      :label="label"
      :is-link="isLink">
      <slot></slot>
    </mt-cell>
    <div class="otter-cell-line"></div>
  </div>
</template>

<script>
import { Cell } from "mint-ui";

export default {
  name: 'otter-cell',
  props: ["icon", "title", "to", "value", "label", "isLink"],
  components: {
    "mt-cell": Cell
  }
}
</script>

<style>
.mint-cell {
  min-height: 59.5px;
}

.mint-cell-label {
  display: block;
  margin-top: 0px;
  font-family: PingFangSC-Medium;
  font-size: 16px;
  color: #101D37;
  letter-spacing: 0;
}

.mint-cell-wrapper {
  background-image: none;
  padding: 0 24px;
}

.mint-cell-value {
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #101D37;
  letter-spacing: 0;
  text-align: right;
}

.otter-cell-line {
  height: 1px;
  display: block;
  background: #000000;
  margin: 0 24px;
  transform: scaleY(.5)
}
</style>
