<template>
  <div class="page-badge">
    <div class="page-title">Badge</div>

    <div class="page-badge-container">
      <div class="page-part">
        <otter-badge type="primary" size="large">30</otter-badge>
        <otter-badge type="error" size="large">10</otter-badge>
        <otter-badge type="success" size="large">10</otter-badge>
        <otter-badge type="warning" size="large">10</otter-badge>
      </div>

      <div class="page-part">
        <otter-badge type="primary">30</otter-badge>
        <otter-badge type="error">10</otter-badge>
        <otter-badge type="success">10</otter-badge>
        <otter-badge type="warning">10</otter-badge>
      </div>

      <div class="page-part">
        <otter-badge type="primary" size="small">30</otter-badge>
        <otter-badge type="error" size="small">10</otter-badge>
        <otter-badge type="success" size="small">10</otter-badge>
        <otter-badge type="warning" size="small">10</otter-badge>
      </div>

      <div class="page-part">
        <otter-badge size="small" color="#888">自定义颜色</otter-badge>
      </div>
    </div>

    <!-- <div class="page-part">
      <otter-cell title="徽章">
        <span style="margin-right: 5px;">未读消息</span>
        <otter-badge type="error" size="small">10</otter-badge>
      </otter-cell>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'page-badge'
};
</script>

<style lang="stylus">
  .page-badge-container
    padding: 0 10px;
</style>
