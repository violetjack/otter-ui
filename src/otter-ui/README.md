# otter-ui

基于 otter 开发的组件库，但是以组件的形式引入，在项目开发过程中不断优化。之后将以 npm 的方式引入项目中。
完整项目地址在 http://git.lianjia.com/dingxiaojie001/otter-ui.git 中。

## 版本记录

0.0.1 搭建项目。
0.0.2 整理项目，创建演示项目。

## 开发方式

在项目中一边工作一边开发，当稳定到一定程度合并到 otter-ui 项目上。

## 组件

### article

文章列表项，特殊组件。

### button

按钮，需要完善更多的颜色。

### cell

列表行，左侧可现实图标。

### cell-input

列表行，右侧可输入文本。

### icon-cms

贝壳生活首页图标，不太通用的组件。

### input

文本框，需要实现 v-model

### loading

加载中提示，不可穿透点击。

### nav

导航栏

### point-item

右侧带点的文本条目项。

### search-bar

搜索框

### tag

标签类，有选中和未选中状态之分。

### toast

吐司，显示简短信息。TODO： 可穿透点击。

## z-index 排序记录

* message-box 2800
* loading 3000
* toast 3200