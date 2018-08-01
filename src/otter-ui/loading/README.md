# Loading

加载中弹窗。避免在加载数据时用户瞎点。

## 方法

### open

```js
this.$bkloading.open('加载中……')
```

### close

```js
this.$bkloading.close()
```

## 当做组件使用

```html
<bk-loading text="加载中！"
  v-show="showLoading"
  keep-holder/>
```
