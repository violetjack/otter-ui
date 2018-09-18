# BkToast

toast 提示消息组件。

## option

| 属性 | 类型 | 描述 |
| --- | --- | --- |
| message | String | toast 文本内容 |
| iconType | String | 左侧图标，默认不显示。参数：error 错误；right 成功打钩；|
| duration | Number | Toast 显示时间，默认 3000 毫秒 |
| position | String | 显示位置，可选：top、middle、bottom.默认 middle |
| onFinsish | Function | 当 Toast 结束后触发的回调函数 |

## api

| 属性  | 描述 |
| --- | --- |
| close | 关闭当前 toast 实例 |

## 示例

```js
this.$bktoast('Hello')
const instance = this.$bktoast({
    message: 'hello',
    iconType: 'loading',
    duration: 4000,
    onFinish(){
        console.log('hello world')
    }
})
instance.close()
```