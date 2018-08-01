<template>
  <div
    class="bk-message-popup">
    <div class="bk-message-popup__pop">
      <slot/>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.bk-message-popup
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index 2999

  &__pop
    background: #fcfcfc;
    border-radius: 5px;
    width: 315px;
    height 289px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
</style>
