<template>
  <div class="otter-switch-tag-wrapper">
    <div class="area text">{{ area }}</div>
    <div class="address text">{{ address }}</div>
  </div>
</template>

<script>
export default {
  name: 'SwitchTag',
  props: {
    area: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
  }
}
</script>

<style lang="stylus" scoped>
	.otter-switch-tag-wrapper
		display flex
		justify-content center
		align-items center
		flex-direction column
		width 150px
		height 60px
		background #F3F4F5
		border-radius 2px

		.area
			font-family PingFangSC-Medium
			color #101D37

		.address
			font-family PingFangSC-Regular
			color #9399A5

		.text
			line-height 17px
			font-size 12px
			height 17px
			width 120px
			font-size 12px
			letter-spacing 0.14px
			overflow hidden
			white-space nowrap
			text-overflow ellipsis
			-ms-text-overflow ellipsis
			-o-text-overflow ellipsis

</style>
