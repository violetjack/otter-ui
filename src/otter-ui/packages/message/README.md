# Message

Messbox 消息框显示内容。

## confirm-box

### 用法

输入文本的确认框，使用 html 引入的方式使用。

```html
  <otter-confirm-box
    :visible="showOrderBox"
    title="请输入快递单号查询"
    maxlength="30"
    placeholder="请输入"
    cancel-text="取消"
    confirm-text="下一步"
    @confirm="handleOrderConfirm"
    @cancel="showOrderBox = false"
    @close="showOrderBox = false"/>
```

### 参数

| 属性  | 描述 |
| --- | --- |
| visible | 控制 dialog 的显示和隐藏 |
| title | 弹框标题 |
| value | 文本框中默认值（v-model） |
| inputType | 文本框输入内容 |
| maxlength | 最大文本长度 |
| placeholder | 文本框占位符 |
| cancel-text | 取消按钮文本 |
| confirm-text | 确定按钮文本 |

### 事件

| 属性  | 描述 | 参数 |
| --- | --- | --- |
| input | 文本框输入文本变化 | 文本框文本内容 |
| close | 关闭按钮点击事件 ||
| cancel | 取消按钮点击事件 ||
| confrim | 确认按钮点击事件 | 文本框文本内容 |