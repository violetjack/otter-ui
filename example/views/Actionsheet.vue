<template>
  <div class="page-actionsheet">
    <h1 class="page-title">Action Sheet</h1>
    <div class="page-actionsheet-wrapper">
      <otter-button @click.native="sheetVisible = true">点击上拉 action sheet</otter-button>
      <otter-button @click.native="sheetVisible2 = true">不带取消按钮的 action sheet</otter-button>
    </div>
    <otter-actionsheet :actions="actions" v-model="sheetVisible"></otter-actionsheet>
    <otter-actionsheet :actions="actions2" v-model="sheetVisible2" cancel-text=""></otter-actionsheet>
  </div>
</template>

<style lang="stylus" scoped>
  .page-actionsheet
    &-wrapper
      position: absolute
      top 50%
      width: 100%;
      transform: translateY(-50%);

      .otter-button
        margin: 10px 20px;

</style>

<script type="text/babel">
  export default {
    data() {
      return {
        sheetVisible: false,
        sheetVisible2: false,
        actions: [],
        actions2: []
      };
    },

    methods: {
      takePhoto() {
        console.log('taking photo');
      },

      openAlbum() {
        console.log('opening album');
      },

      goBack() {
        history.go(-1);
      }
    },

    mounted() {
      this.actions = [{
        name: '拍照',
        method: this.takePhoto
      }, {
        name: '从相册中选择',
        method: this.openAlbum
      }];
      this.actions2 = [{
        name: '确定'
      }, {
        name: '返回上一步',
        method: this.goBack
      }];
    }
  };
</script>
