# fanc-dialog 对话框组件

## 组件介绍

`fanc-dialog` 是一个模态对话框组件，用于显示重要信息或请求用户进行操作确认。它支持多种类型的对话框，如确认框、成功提示、警告提示、错误提示等，可以满足各种交互场景的需求。

## 组件特性

- 支持多种对话框类型：默认、成功、警告、错误、信息
- 支持自定义标题、内容和按钮
- 支持显示图片
- 支持自定义按钮布局和样式
- 支持异步关闭
- 支持圆角和自定义样式
- 支持显示关闭图标

## 组件用法

### 基础用法

```vue
<template>
  <view>
    <fanc-button @click="showDialog">显示对话框</fanc-button>
    <fanc-dialog
      v-model:show="dialogVisible"
      title="提示"
      message="这是一个基础对话框"
      @confirm="onConfirm"
      @cancel="onCancel"
    ></fanc-dialog>
  </view>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    showDialog() {
      this.dialogVisible = true;
    },
    onConfirm() {
      console.log('点击确认');
    },
    onCancel() {
      console.log('点击取消');
    }
  }
};
</script>
```

### 对话框类型

```vue
<!-- 默认对话框 -->
<fanc-dialog v-model:show="show" title="默认对话框" message="这是一个默认对话框"></fanc-dialog>

<!-- 成功对话框 -->
<fanc-dialog v-model:show="show" type="success" title="成功提示" message="操作成功完成"></fanc-dialog>

<!-- 警告对话框 -->
<fanc-dialog v-model:show="show" type="warning" title="警告提示" message="此操作可能有风险"></fanc-dialog>

<!-- 错误对话框 -->
<fanc-dialog v-model:show="show" type="error" title="错误提示" message="操作失败，请重试"></fanc-dialog>

<!-- 信息对话框 -->
<fanc-dialog v-model:show="show" type="info" title="信息提示" message="这是一条信息"></fanc-dialog>
```

### 显示图片

```vue
<fanc-dialog
  v-model:show="show"
  title="图片对话框"
  message="这是一个带图片的对话框"
  image-url="/static/images/example.png"
></fanc-dialog>
```

### 自定义按钮布局

```vue
<!-- 水平按钮布局 -->
<fanc-dialog
  v-model:show="show"
  button-layout="horizontal"
  confirm-text="确定"
  cancel-text="取消"
></fanc-dialog>

<!-- 垂直按钮布局 -->
<fanc-dialog
  v-model:show="show"
  button-layout="vertical"
  confirm-text="确定"
  cancel-text="取消"
></fanc-dialog>
```

### 多按钮配置

```vue
<fanc-dialog
  v-model:show="show"
  title="多按钮对话框"
  message="请选择一个操作"
  button-layout="vertical"
  :buttons="[
    { text: '选项一', type: 'primary', callback: () => console.log('选项一') },
    { text: '选项二', type: 'default', callback: () => console.log('选项二') },
    { text: '选项三', type: 'danger', callback: () => console.log('选项三') }
  ]"
  @buttonClick="onButtonClick"
></fanc-dialog>
```

### 异步关闭

```vue
<fanc-dialog
  v-model:show="show"
  title="异步关闭"
  message="点击按钮后会执行异步操作"
  async-close
  @confirm="onAsyncConfirm"
></fanc-dialog>
```

```javascript
methods: {
  onAsyncConfirm() {
    // 执行异步操作
    setTimeout(() => {
      // 操作完成后手动关闭对话框
      this.show = false;
    }, 1000);
  }
}
```

### 自定义内容

```vue
<fanc-dialog v-model:show="show" title="自定义内容">
  <view class="custom-content">
    <text>这里可以放置任何自定义内容</text>
    <fanc-field label="姓名" v-model="name"></fanc-field>
    <fanc-field label="电话" v-model="phone"></fanc-field>
  </view>
</fanc-dialog>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示对话框 | Boolean | `false` |
| title | 对话框标题 | String | `提示` |
| message | 对话框内容 | String | - |
| image-url | 对话框图片URL | String | - |
| image-style | 图片样式 | String \| Object | - |
| image-position | 图片位置，可选值为 `top` `default` `bottom` | String | `default` |
| type | 对话框类型，可选值为 `default` `success` `warning` `error` `info` | String | `default` |
| position | 对话框位置，可选值为 `center` `top` `bottom` | String | `center` |
| show-title | 是否显示标题 | Boolean | `true` |
| show-buttons | 是否显示按钮 | Boolean | `true` |
| show-confirm-button | 是否显示确认按钮 | Boolean | `true` |
| show-cancel-button | 是否显示取消按钮 | Boolean | `true` |
| confirm-text | 确认按钮文本 | String | `确定` |
| cancel-text | 取消按钮文本 | String | `取消` |
| button-layout | 按钮布局方式，可选值为 `horizontal` `vertical` | String | `horizontal` |
| buttons | 多按钮配置 | Array | `[]` |
| message-align | 内容对齐方式，可选值为 `left` `center` `right` | String | `left` |
| show-close | 是否显示关闭图标 | Boolean | `false` |
| close-icon-position | 关闭图标位置，可选值为 `inside` `outside` | String | `inside` |
| mask | 是否显示遮罩 | Boolean | `true` |
| mask-click-close | 点击遮罩是否可关闭 | Boolean | `true` |
| round | 是否使用圆角 | Boolean | `true` |
| lock-scroll | 锁定页面滚动 | Boolean | `true` |
| custom-class | 自定义样式类 | String | - |
| custom-style | 自定义样式 | String \| Object | - |
| confirm-button-style | 自定义确认按钮样式 | String \| Object | - |
| cancel-button-style | 自定义取消按钮样式 | String \| Object | - |
| async-close | 是否异步关闭 | Boolean | `false` |
| duration | 弹出动画时长 | Number | `300` |
| z-index | z-index层级 | Number | `2000` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:show | 更新show属性值 | show: 是否显示对话框 |
| open | 对话框打开时触发 | - |
| close | 对话框关闭时触发 | - |
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |
| buttonClick | 点击自定义按钮时触发 | {button, index}: 按钮信息和索引 |
| clickOverlay | 点击遮罩层时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| header | 自定义标题区域 |
| footer | 自定义底部按钮区域 |
| bottom | 自定义底部额外内容 |

## 注意事项

1. 使用 `v-model:show` 可以实现对话框显示状态的双向绑定
2. 当设置 `async-close` 为 `true` 时，需要手动控制对话框的关闭
3. 使用 `buttons` 属性可以配置多个按钮，每个按钮可以设置文本、类型和回调函数
4. 对话框默认居中显示，可以通过 `position` 属性调整位置
5. 使用插槽可以完全自定义对话框的内容和样式 