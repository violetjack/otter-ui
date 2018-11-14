# otter-ui

基于公司的 otter 设计规范写的一套组件库。组件库中大量参考 mint-ui 的代码逻辑。主要用于组件库开发的学习。

## 安装

```bash
npm install otter-ui-ke -S
```

## 使用

导入所有组件。

```js
import Vue from 'vue'
import Otter from 'otter-ui-ke'

Vue.use(Otter)
```

## 项目开发

```bash
npm run dev
```

## 项目构建

```bash
npm run build
```

## 项目发布

```bash
npm login
npm publish
```

## 说明

鉴于现有组件库拥有更高的质量，所以减少不必要的重复造轮子，组件库中很多组件直接引用 mint-ui 的组件（只是改了名字 otter-button）。本组件库要实现的东西如下：

* 集成 mint-ui 组件库，支持单个组件加载。
* 使用 CSS，覆盖的方式将 mint-ui 中的一些样式进行修改成贝壳的规范。
* **重点：实现定制化界面组件和特殊功能组件。**

## 开发计划

* 发布到 knpm
* 清理冗余代码。
* 覆盖单元测试。
* 整理组件文档。

## License

MIT