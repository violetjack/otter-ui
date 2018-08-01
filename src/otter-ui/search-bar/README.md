# search-bar

搜索栏组件

## props

| 属性 | 类型 | 描述 | 默认值 |
| --- | --- | --- | --- |
| placeholder | String | 占位符文本 | '' |
| showClear | Boolean | 显示清空按钮 | false |

## events

| 事件名 | 参数 | 描述 |
| --- | --- | --- | --- |
| input | value 文本框值 | 文本框内容发生改变时触发 |
| focus | event 事件对象 | 文本框获取焦点时触发 |
| blur | event 事件对象 | 文本框失去焦点时触发 |
| clear | event 事件对象 | 清空文本时触发 |