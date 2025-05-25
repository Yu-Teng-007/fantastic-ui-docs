# Toast 轻提示

轻提示组件，用于展示简短的消息反馈。

## 基础用法

通过 `showToast` 函数展示轻提示。

```js
import { showToast } from 'fantastic-ui';

// 基础用法
showToast('提示内容');
```

## 提示类型

提供 `text`、`success`、`error`、`warning`、`loading` 五种类型，默认为 `text`。

```js
// 文本提示
showToast('这是一条文本提示');

// 成功提示
showToast({
  type: 'success',
  message: '操作成功'
});

// 失败提示
showToast({
  type: 'error',
  message: '操作失败'
});

// 警告提示
showToast({
  type: 'warning',
  message: '警告信息'
});

// 加载提示
showToast({
  type: 'loading',
  message: '加载中...'
});
```

## 自定义图标

通过 `icon` 属性可以自定义图标。

```js
showToast({
  icon: 'star',
  message: '收藏成功'
});

// 使用图片URL作为图标
showToast({
  icon: 'https://example.com/icon.png',
  message: '自定义图标'
});
```

## 自定义位置

通过 `position` 属性可以自定义轻提示的位置，支持 `top`、`middle`、`bottom` 三个值。

```js
showToast({
  message: '顶部提示',
  position: 'top'
});

showToast({
  message: '中间提示',
  position: 'middle'
});

showToast({
  message: '底部提示',
  position: 'bottom'
});
```

## 显示遮罩层

通过 `overlay` 属性可以设置是否显示遮罩层，遮罩层可以防止用户点击。

```js
showToast({
  message: '显示遮罩层',
  overlay: true
});
```

## 自定义持续时间

通过 `duration` 属性可以自定义轻提示的展示时长，单位为毫秒，默认为 2000 毫秒。

```js
showToast({
  message: '提示内容',
  duration: 1000
});

// 设置为 0 表示不会自动关闭
showToast({
  message: '不会自动关闭',
  duration: 0
});
```

## 手动关闭

通过 `hideToast` 函数可以手动关闭轻提示。

```js
import { showToast, hideToast } from 'fantastic-ui';

// 显示提示
showToast({
  message: '这是一条提示',
  duration: 0
});

// 2秒后手动关闭
setTimeout(() => {
  hideToast();
}, 2000);
```

## 多个轻提示

如果同时调用多个 `showToast`，默认会自动关闭上一个轻提示。

```js
// 连续调用多次，只会显示最后一个
showToast('第一个提示');
showToast('第二个提示');
```

## 组件调用方式

除了函数调用外，还可以通过组件方式使用轻提示。

```vue
<template>
  <fanc-toast
    v-model:show="show"
    type="success"
    message="操作成功"
  />
  <fanc-button @click="showToast">显示提示</fanc-button>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);

const showToast = () => {
  show.value = true;
  
  // 2秒后自动关闭
  setTimeout(() => {
    show.value = false;
  }, 2000);
};
</script>
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showToast | 展示提示 | `string \| ToastOptions` | - |
| hideToast | 关闭提示 | - | - |

### ToastOptions

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型，可选值为 `text` `success` `error` `warning` `loading` | _string_ | `text` |
| message | 提示文本内容 | _string_ | - |
| duration | 展示时长(ms)，值为 0 时，toast 不会自动消失 | _number_ | `2000` |
| position | 位置，可选值为 `top` `middle` `bottom` | _string_ | `middle` |
| icon | 自定义图标，支持传入图标名称或图片链接 | _string_ | - |
| overlay | 是否显示遮罩层 | _boolean_ | `false` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| closeOnClick | 是否点击后关闭 | _boolean_ | `false` |
| customClass | 自定义类名 | _string_ | - |
| customStyle | 自定义样式 | _object_ | - |
| onOpen | 打开时的回调函数 | _Function_ | - |
| onClose | 关闭时的回调函数 | _Function_ | - |

### 组件Props

当以组件形式使用时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示提示 | _boolean_ | `false` |
| type | 提示类型，可选值为 `text` `success` `error` `warning` `loading` | _string_ | `text` |
| message | 提示文本内容 | _string_ | - |
| duration | 展示时长(ms)，值为 0 时，toast 不会自动消失 | _number_ | `2000` |
| position | 位置，可选值为 `top` `middle` `bottom` | _string_ | `middle` |
| icon | 自定义图标，支持传入图标名称或图片链接 | _string_ | - |
| overlay | 是否显示遮罩层 | _boolean_ | `false` |
| forbidClick | 是否禁止背景点击 | _boolean_ | `false` |
| closeOnClick | 是否点击后关闭 | _boolean_ | `false` |
| customClass | 自定义类名 | _string_ | - |
| customStyle | 自定义样式 | _object_ | - |

### 组件Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 打开提示时触发 | - |
| close | 关闭提示时触发 | - | 