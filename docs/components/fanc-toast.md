# fanc-toast 轻提示组件

## 组件介绍

`fanc-toast` 是一个轻量级的消息提示组件，用于在页面中显示简短的操作反馈、提示信息或加载状态。它支持多种类型、位置和自定义配置，可以满足各种场景下的提示需求。

## 组件特性

- 支持多种提示类型：文本、成功、错误、警告、加载中
- 支持多个显示位置：中间、顶部、底部
- 支持自定义显示时长
- 支持自定义图标
- 支持背景遮罩和点击遮罩关闭
- 支持锁定背景滚动
- 支持自定义样式和最大宽度

## 组件用法

### 基础用法

```vue
<template>
  <view>
    <fanc-button @click="showTextToast">文本提示</fanc-button>
  </view>
</template>

<script>
export default {
  methods: {
    showTextToast() {
      this.$toast('这是一条提示消息');
    }
  }
}
</script>
```

### 提示类型

```javascript
// 文本提示
this.$toast('这是一条文本提示');

// 成功提示
this.$toast.success('操作成功');

// 错误提示
this.$toast.error('操作失败');

// 警告提示
this.$toast.warning('警告信息');

// 加载提示
this.$toast.loading('加载中...');
```

### 显示位置

```javascript
// 中间显示（默认）
this.$toast({
  message: '这是一条提示消息',
  position: 'center'
});

// 顶部显示
this.$toast({
  message: '这是一条提示消息',
  position: 'top'
});

// 底部显示
this.$toast({
  message: '这是一条提示消息',
  position: 'bottom'
});
```

### 显示时长

```javascript
// 显示 5 秒后自动关闭
this.$toast({
  message: '这是一条提示消息',
  duration: 5000
});

// 不自动关闭（需手动关闭）
const toast = this.$toast({
  message: '这是一条提示消息',
  duration: 0
});

// 手动关闭
setTimeout(() => {
  toast.close();
}, 3000);
```

### 带遮罩层

```javascript
this.$toast({
  message: '这是一条提示消息',
  mask: true
});

// 点击遮罩可关闭
this.$toast({
  message: '点击遮罩关闭',
  mask: true,
  maskClosable: true
});

// 锁定背景滚动
this.$toast({
  message: '锁定背景',
  mask: true,
  lockBackground: true
});
```

### 自定义图标

```javascript
this.$toast({
  message: '自定义图标',
  iconName: 'star'
});
```

### 自定义样式

```javascript
this.$toast({
  message: '自定义样式',
  customStyle: {
    backgroundColor: 'rgba(76, 175, 80, 0.8)'
  },
  maxWidth: '90%'
});
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| this.$toast | 显示轻提示 | message 或 options | toast 实例 |
| this.$toast.text | 显示文本提示 | message 或 options | toast 实例 |
| this.$toast.success | 显示成功提示 | message 或 options | toast 实例 |
| this.$toast.error | 显示错误提示 | message 或 options | toast 实例 |
| this.$toast.warning | 显示警告提示 | message 或 options | toast 实例 |
| this.$toast.loading | 显示加载提示 | message 或 options | toast 实例 |
| this.$toast.clear | 关闭所有提示 | - | - |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 提示文本内容 | String | - |
| type | 提示类型，可选值为 `text` `success` `error` `warning` `loading` | String | `text` |
| position | 显示位置，可选值为 `center` `top` `bottom` | String | `center` |
| mask | 是否显示背景遮罩 | Boolean | `false` |
| maskClosable | 点击遮罩是否可关闭 | Boolean | `false` |
| lockBackground | 遮罩显示时是否锁定背景滚动 | Boolean | `false` |
| duration | 展示时长(ms)，值为 0 时不会自动关闭 | Number | `2000` |
| iconName | 自定义图标名称 | String | - |
| zIndex | 层级 | Number | `3000` |
| maxWidth | 最大宽度 | String | `70%` |
| customStyle | 自定义样式 | Object | `{}` |
| onClose | 关闭时的回调函数 | Function | - |

### 实例方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| close | 关闭当前提示 | - |

## 注意事项

1. 使用前需要先在项目中安装和注册 Toast 插件
2. 多次调用 Toast 方法时，默认会关闭之前的 Toast 实例，显示最新的提示
3. 当设置 `duration` 为 0 时，Toast 不会自动关闭，需要手动调用实例的 `close` 方法关闭
4. 使用 `loading` 类型时，通常需要设置 `duration` 为 0，并在加载完成后手动关闭
5. 当设置 `lockBackground` 为 `true` 时，页面背景将无法滚动，适用于需要用户专注于当前操作的场景 