# fanc-signature 签名组件

## 组件介绍

`fanc-signature` 是一个手写签名组件，用于在应用中实现电子签名功能。它提供了画布和操作按钮，支持手写输入、清除、确认等功能，可以导出签名为图片格式。

## 组件特性

- 支持手写签名输入
- 支持自定义画笔颜色和宽度
- 支持自定义画布尺寸和背景色
- 支持导出签名为 PNG 图片（Base64格式）
- 支持透明背景导出
- 提供清除、确认、取消等操作按钮
- 支持禁用状态
- 兼容多平台（H5、App、小程序等）

## 组件用法

### 基础用法

```vue
<template>
  <fanc-signature @confirm="onConfirm" @clear="onClear" @cancel="onCancel"></fanc-signature>
</template>

<script>
export default {
  methods: {
    onConfirm(base64) {
      console.log('签名确认', base64);
      // 这里可以处理签名图片，如上传到服务器等
    },
    onClear() {
      console.log('签名已清除');
    },
    onCancel() {
      console.log('签名已取消');
    }
  }
}
</script>
```

### 自定义画笔样式

```vue
<fanc-signature 
  pen-color="#1989fa" 
  :pen-width="5"
></fanc-signature>
```

### 自定义画布尺寸

```vue
<fanc-signature 
  width="100%" 
  :height="300"
></fanc-signature>
```

### 自定义背景颜色

```vue
<fanc-signature background="#f2f2f2"></fanc-signature>
```

### 透明背景导出

```vue
<fanc-signature :is-transparent="true"></fanc-signature>
```

### 禁用状态

```vue
<fanc-signature disabled></fanc-signature>
```

### 自定义按钮文本

```vue
<fanc-signature 
  clear-text="重写" 
  confirm-text="完成" 
  cancel-text="放弃"
></fanc-signature>
```

### 隐藏部分按钮

```vue
<fanc-signature 
  :show-clear="true" 
  :show-confirm="true" 
  :show-cancel="false"
></fanc-signature>
```

### 隐藏所有按钮

```vue
<fanc-signature :show-actions="false"></fanc-signature>
```

### 监听签名过程

```vue
<fanc-signature 
  @start="onSignStart" 
  @signing="onSigning" 
  @end="onSignEnd"
></fanc-signature>
```

```javascript
methods: {
  onSignStart() {
    console.log('开始签名');
  },
  onSigning() {
    console.log('签名中');
  },
  onSignEnd() {
    console.log('结束签名');
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| pen-color | 画笔颜色 | String | `#000000` |
| pen-width | 画笔宽度 | Number | `3` |
| width | 画布宽度 | String \| Number | `100%` |
| height | 画布高度 | String \| Number | `200` |
| disabled | 是否禁用 | Boolean | `false` |
| show-actions | 是否显示操作按钮 | Boolean | `true` |
| show-clear | 是否显示清除按钮 | Boolean | `true` |
| show-confirm | 是否显示确认按钮 | Boolean | `true` |
| show-cancel | 是否显示取消按钮 | Boolean | `true` |
| clear-text | 清除按钮文本 | String | `清除` |
| confirm-text | 确认按钮文本 | String | `确认` |
| cancel-text | 取消按钮文本 | String | `取消` |
| background | 画布背景色 | String | `#ffffff` |
| is-transparent | 导出图片是否透明背景 | Boolean | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| start | 开始签名时触发 | event: Event |
| signing | 签名过程中触发 | event: Event |
| end | 结束签名时触发 | event: Event |
| clear | 清除签名时触发 | - |
| confirm | 确认签名时触发 | base64: 签名图片的base64编码 |
| cancel | 取消签名时触发 | - |

### 方法

可以通过 ref 获取组件实例并调用其方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| clear | 清除签名 | - |

## 注意事项

1. 组件会自动适应不同平台（H5、App、小程序）的差异，但在某些平台可能存在兼容性问题
2. 在小程序环境中，导出的图片可能是临时文件路径而非 Base64 格式
3. 设置 `is-transparent` 为 `true` 可以导出透明背景的签名图片，但在某些平台可能不支持
4. 画布尺寸可以设置为固定像素值或百分比，但高度建议使用固定像素值以获得更好的体验
5. 在移动设备上使用时，建议设置适当的画布高度，以便用户有足够的空间进行签名
6. 确认签名后，会通过 `confirm` 事件返回签名图片的 Base64 编码或临时文件路径，可以用于后续处理（如上传到服务器） 