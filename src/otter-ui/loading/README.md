# Loading

加载中弹窗。避免在加载数据时用户瞎点。

## 方法

### open

```js
this.$loading.open('加载中……')
```

### close

```js
this.$loading.close()
```

## 当做组件使用

```html
<otter-loading text="加载中！"
  v-show="showLoading"
  keep-holder/>
```
