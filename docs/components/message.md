# Message 消息提示

消息提示组件，用于展示操作反馈或提示信息。

## 基础用法

通过 `showMessage` 函数展示消息提示。

```js
import { showMessage } from "fantastic-ui";

// 基础用法
showMessage("这是一条消息提示");
```

## 提示类型

提供 `info`、`success`、`warning`、`error` 四种类型，默认为 `info`。

```js
// 信息提示
showMessage({
  type: "info",
  message: "这是一条信息提示",
});

// 成功提示
showMessage({
  type: "success",
  message: "操作成功",
});

// 警告提示
showMessage({
  type: "warning",
  message: "警告信息",
});

// 错误提示
showMessage({
  type: "error",
  message: "操作失败",
});
```

## 自定义图标

通过 `icon` 属性可以自定义图标。

```js
showMessage({
  message: "自定义图标",
  icon: "star",
});

// 使用图片URL作为图标
showMessage({
  message: "图片图标",
  icon: "https://example.com/icon.png",
});
```

## 自定义位置

通过 `position` 属性可以自定义消息的位置，支持 `top`、`middle`、`bottom` 三个值。

```js
showMessage({
  message: "顶部消息",
  position: "top",
});

showMessage({
  message: "中间消息",
  position: "middle",
});

showMessage({
  message: "底部消息",
  position: "bottom",
});
```

## 自定义持续时间

通过 `duration` 属性可以自定义消息的展示时长，单位为毫秒，默认为 3000 毫秒。

```js
showMessage({
  message: "短暂消息",
  duration: 1000,
});

// 设置为 0 表示不会自动关闭
showMessage({
  message: "不会自动关闭",
  duration: 0,
});
```

## 手动关闭

通过 `hideMessage` 函数可以手动关闭消息提示。

```js
import { showMessage, hideMessage } from "fantastic-ui";

// 显示消息
showMessage({
  message: "这是一条消息",
  duration: 0,
});

// 2秒后手动关闭
setTimeout(() => {
  hideMessage();
}, 2000);
```

## 可关闭的消息

通过 `closable` 属性可以设置消息是否可手动关闭。

```js
showMessage({
  message: "点击右侧按钮关闭消息",
  closable: true,
});
```

## 带操作的消息

通过 `action` 属性可以设置消息的操作按钮。

```js
showMessage({
  message: "发现新版本",
  action: {
    text: "更新",
    callback: () => {
      console.log("点击了更新按钮");
    },
  },
});
```

## 组件调用方式

除了函数调用外，还可以通过组件方式使用消息提示。

```vue
<template>
  <fanc-message v-model:show="show" type="success" message="操作成功" />
  <fanc-button @click="showMsg">显示消息</fanc-button>
</template>

<script setup>
import { ref } from "vue";

const show = ref(false);

const showMsg = () => {
  show.value = true;

  // 3秒后自动关闭
  setTimeout(() => {
    show.value = false;
  }, 3000);
};
</script>
```

## API

### 方法

| 方法名      | 说明     | 参数                       | 返回值 |
| ----------- | -------- | -------------------------- | ------ |
| showMessage | 展示消息 | `string \| MessageOptions` | -      |
| hideMessage | 关闭消息 | -                          | -      |

### MessageOptions

| 参数        | 说明                                                  | 类型                                           | 默认值  |
| ----------- | ----------------------------------------------------- | ---------------------------------------------- | ------- |
| type        | 消息类型，可选值为 `info` `success` `warning` `error` | _string_                                       | `info`  |
| message     | 消息文本内容                                          | _string_                                       | -       |
| duration    | 展示时长(ms)，值为 0 时，消息不会自动消失             | _number_                                       | `3000`  |
| position    | 位置，可选值为 `top` `middle` `bottom`                | _string_                                       | `top`   |
| icon        | 自定义图标，支持传入图标名称或图片链接                | _string_                                       | -       |
| closable    | 是否显示关闭按钮                                      | _boolean_                                      | `false` |
| action      | 操作按钮配置                                          | _object: { text: string, callback: Function }_ | -       |
| customClass | 自定义类名                                            | _string_                                       | -       |
| customStyle | 自定义样式                                            | _object_                                       | -       |
| onOpen      | 打开时的回调函数                                      | _Function_                                     | -       |
| onClose     | 关闭时的回调函数                                      | _Function_                                     | -       |

### 组件 Props

当以组件形式使用时，支持以下 Props：

| 参数        | 说明                                                  | 类型      | 默认值  |
| ----------- | ----------------------------------------------------- | --------- | ------- |
| show        | 是否显示消息                                          | _boolean_ | `false` |
| type        | 消息类型，可选值为 `info` `success` `warning` `error` | _string_  | `info`  |
| message     | 消息文本内容                                          | _string_  | -       |
| duration    | 展示时长(ms)，值为 0 时，消息不会自动消失             | _number_  | `3000`  |
| position    | 位置，可选值为 `top` `middle` `bottom`                | _string_  | `top`   |
| icon        | 自定义图标，支持传入图标名称或图片链接                | _string_  | -       |
| closable    | 是否显示关闭按钮                                      | _boolean_ | `false` |
| customClass | 自定义类名                                            | _string_  | -       |
| customStyle | 自定义样式                                            | _object_  | -       |

### 组件 Events

| 事件名 | 说明               | 回调参数       |
| ------ | ------------------ | -------------- |
| open   | 打开消息时触发     | -              |
| close  | 关闭消息时触发     | -              |
| click  | 点击消息时触发     | _event: Event_ |
| action | 点击操作按钮时触发 | -              |

```

```
