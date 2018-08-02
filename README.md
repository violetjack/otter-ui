# otter-ui

![封面](http://git.lianjia.com/ptc-csd/otter-ui/raw/master/src/assets/logo.png)

贝壳生活项目中使用到的UI汇总，参照了 mint-ui 来进行设计和开发。

## 调试

```shell
npm install
npm run serve
```

## 使用方式

当前使用方式为将 otter-ui 目录拷贝到项目中，使用 `` 来安装这些组件。

```js
import Vue from 'vue'
import OtterUI from './otter-ui/index.js'

Vue.use(OtterUI)
```

## 组件库定位

解决基于 otter UI 设计规范的 UI 设计稿来快速搭建前端项目。而对于一些特殊组件库建议使用网络资源会更加稳定和可靠。

## 已完成组件

* article
* button
* cell
* cell-input
* input
* loading
* message
* nav
* point-item
* search-bar
* tag
* toast

## 之后计划

* 参照 mint-ui 将一些通用组件收入进来
* 推动 UI 一起规范更多组件规范
* 收集项目中用到了通用组件
* 将项目打包发布到链家 npm
* 不断迭代优化组件库
