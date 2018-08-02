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
import 'otter-ui/index.css'

Vue.use(OtterUI)
```

## TODO

* 完成几个弹出框的逻辑实现。
* 将搜索框和扫码按钮归入 otter-ui
* 为组件都写上 README
* 整理属性命名。
* 对比参照 mint-ui 进行一轮优化
* 发布 0.1 版本
