# fanc-message 消息提示组件

## 组件介绍

`fanc-message` 是一个全局消息提示组件，用于展示简短的提示信息，如操作反馈、系统通知等。它支持不同类型的消息样式、自动关闭、操作按钮等功能，可以在页面顶部以非阻塞的形式向用户传达重要信息。

## 组件特性

- 支持四种消息类型：信息、成功、警告、错误
- 支持自定义显示时长
- 支持显示/隐藏图标
- 支持关闭按钮
- 支持自定义操作按钮
- 支持内容横向滚动
- 支持富文本内容
- 支持自定义层级和位置
- 支持鼠标悬停暂停滚动

## 组件用法

### 基础用法

```js
// 导入消息组件
import { Message } from 'fantastic-ui';

// 显示普通消息
Message('这是一条消息提示');

// 显示成功消息
Message.success('操作成功');

// 显示警告消息
Message.warning('警告信息');

// 显示错误消息
Message.error('错误信息');

// 显示信息消息（与默认相同）
Message.info('提示信息');
```

### 自定义配置

```js
Message({
  message: '这是一条消息提示',
  type: 'success',
  duration: 3000,
  showIcon: true,
  closable: true
});
```

### 不自动关闭

```js
Message({
  message: '这条消息不会自动关闭',
  duration: 0,
  closable: true
});
```

### 带操作按钮

```js
Message({
  message: '这条消息带有操作按钮',
  actionText: '查看详情',
  closeOnAction: true,
  onAction: () => {
    console.log('点击了操作按钮');
    // 执行其他操作
  }
});
```

### 内容超长自动滚动

```js
Message({
  message: '这是一条很长的消息，内容超出显示区域时会自动横向滚动，以确保用户可以看到完整内容',
  scrollable: true,
  scrollSpeed: 60 // 滚动速度，单位像素/秒
});
```

### 使用富文本内容

```js
Message({
  message: '<span style="color: red;">红色文本</span> 和 <b>加粗文本</b>',
  useHtml: true
});
```

### 自定义层级和位置

```js
Message({
  message: '自定义层级和位置的消息',
  zIndex: 2000,
  offsetTop: 100
});
```

### 链式调用

```js
Message.success('操作成功')
  .then(() => {
    console.log('消息已关闭');
    // 可以在这里执行后续操作
  });
```

### 手动关闭

```js
const messageInstance = Message({
  message: '这条消息可以手动关闭',
  duration: 0
});

// 在需要的时候关闭消息
setTimeout(() => {
  messageInstance.close();
}, 5000);
```

## API

### 全局方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| Message | 显示消息，参数可以是字符串或配置对象 | String \| Object | 消息实例 |
| Message.info | 显示信息类型的消息 | String \| Object | 消息实例 |
| Message.success | 显示成功类型的消息 | String \| Object | 消息实例 |
| Message.warning | 显示警告类型的消息 | String \| Object | 消息实例 |
| Message.error | 显示错误类型的消息 | String \| Object | 消息实例 |
| Message.closeAll | 关闭所有消息 | - | - |

### 配置项

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 消息内容 | String | - |
| type | 消息类型，可选值为 `info` `success` `warning` `error` | String | `info` |
| showIcon | 是否显示图标 | Boolean | `true` |
| duration | 显示时长，单位为毫秒，设为0则不自动关闭 | Number | `3000` |
| closable | 是否显示关闭按钮 | Boolean | `false` |
| zIndex | 层级 | Number | `1010` |
| offsetTop | 顶部偏移量，单位为像素 | Number | `20` |
| actionText | 操作按钮文本，不为空时显示操作按钮 | String | - |
| closeOnAction | 点击操作按钮后是否自动关闭消息 | Boolean | `true` |
| scrollable | 是否启用横向滚动 | Boolean | `false` |
| scrollSpeed | 滚动速度，单位为像素/秒 | Number | `50` |
| useHtml | 是否启用富文本支持 | Boolean | `false` |
| onClose | 关闭时的回调函数 | Function | - |
| onAction | 点击操作按钮时的回调函数 | Function | - |

### 消息实例方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| close | 关闭当前消息 | - |

## 注意事项

1. 消息默认会在3秒后自动关闭，可以通过 `duration` 参数自定义显示时长
2. 设置 `duration` 为 0 可以禁用自动关闭功能
3. 当消息内容较长时，可以启用 `scrollable` 属性实现内容横向滚动
4. 鼠标悬停在滚动消息上时，滚动会暂停，方便用户阅读
5. 使用 `useHtml` 属性时需要注意内容安全性，避免XSS攻击
6. 多个消息会按照显示顺序在页面顶部垂直排列
7. 可以通过 `Message.closeAll()` 方法一次性关闭所有显示中的消息
8. 操作按钮和关闭按钮可以同时显示，分别位于消息的右侧 