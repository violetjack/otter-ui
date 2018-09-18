<template>
  <div>
    <otter-cell label="只有label"/>
    <otter-cell label="带有值" value="VioletJack"/>
    <otter-cell label="带有占位符" placeholder="请选择"/>
    <otter-cell label="带有右侧箭头" is-link/>
    <otter-cell label="路由跳转" to="/"/>
    <otter-cell label="左侧图片" img="https://tse1-mm.cn.bing.net/th?id=OIP.ele7ZDeFScwjW1e76yZNLAHaNL&w=115&h=184&c=7&o=5&dpr=2&pid=1.7"/>
    <otter-cell label="无下划线" :has-line="false"/>
  </div>
</template>
