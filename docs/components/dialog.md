# Dialog 对话框

对话框组件，用于模态弹窗、消息提示、确认操作等交互场景。

## 基础用法

通过 `showDialog` 方法显示对话框。

```js
import { showDialog } from 'fantastic-ui';

showDialog({
  title: '标题',
  message: '这是一条消息提示',
  showCancelButton: true
}).then(() => {
  // 点击确认按钮时的回调
}).catch(() => {
  // 点击取消按钮时的回调
});
```

## 确认弹窗

通过 `showConfirmDialog` 方法显示确认类型的对话框。

```js
import { showConfirmDialog } from 'fantastic-ui';

showConfirmDialog({
  title: '确认操作',
  message: '您确定要执行此操作吗？'
}).then(() => {
  // 点击确认按钮时的回调
}).catch(() => {
  // 点击取消按钮时的回调
});
```

## 提示弹窗

通过 `showAlertDialog` 方法显示提示类型的对话框，只有一个按钮。

```js
import { showAlertDialog } from 'fantastic-ui';

showAlertDialog({
  title: '提示',
  message: '这是一条提示消息'
}).then(() => {
  // 点击确认按钮时的回调
});
```

## 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在关闭前进行特定操作。

```js
import { showConfirmDialog } from 'fantastic-ui';

const beforeClose = (action, done) => {
  if (action === 'confirm') {
    // 点击确认按钮时，显示加载状态，2秒后关闭
    const loading = showLoading('加载中...');
    setTimeout(() => {
      loading.close();
      done();
    }, 2000);
  } else {
    // 点击取消按钮时，直接关闭
    done();
  }
};

showConfirmDialog({
  title: '异步关闭',
  message: '点击确认按钮后，将会等待2秒才关闭',
  beforeClose
});
```

## 自定义内容

通过组件形式使用时，可以通过默认插槽自定义内容。

```vue
<template>
  <fanc-button type="primary" @click="showCustomDialog">显示自定义对话框</fanc-button>
  
  <fanc-dialog v-model:show="show" title="自定义内容" :show-cancel-button="true">
    <div class="custom-content">
      <fanc-image src="https://example.com/image.jpg" width="100%" />
      <p>这是一段自定义内容</p>
      <fanc-field v-model="value" label="输入框" placeholder="请输入内容" />
    </div>
  </fanc-dialog>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);
const value = ref('');

const showCustomDialog = () => {
  show.value = true;
};
</script>

<style>
.custom-content {
  padding: 16px;
}
</style>
```

## 自定义按钮

通过 `confirmButtonText` 和 `cancelButtonText` 属性可以自定义按钮文字，通过 `confirmButtonColor` 和 `cancelButtonColor` 属性可以自定义按钮颜色。

```js
import { showDialog } from 'fantastic-ui';

showDialog({
  title: '自定义按钮',
  message: '自定义按钮文字和颜色',
  confirmButtonText: '同意',
  confirmButtonColor: '#07c160',
  cancelButtonText: '拒绝',
  cancelButtonColor: '#ff5252'
});
```

## 圆角风格

通过 `round` 属性可以设置圆角风格。

```js
import { showDialog } from 'fantastic-ui';

showDialog({
  title: '圆角风格',
  message: '这是一个圆角风格的对话框',
  round: true
});
```

## 垂直布局按钮

通过 `buttonLayout` 属性可以设置按钮的布局方式，支持 `horizontal` 和 `vertical` 两种布局方式。

```js
import { showDialog } from 'fantastic-ui';

showDialog({
  title: '垂直布局按钮',
  message: '按钮将垂直排列',
  buttonLayout: 'vertical',
  showCancelButton: true
});
```

## 组件用法

除了函数调用外，还可以使用组件形式。

```vue
<template>
  <fanc-button type="primary" @click="show = true">显示对话框</fanc-button>
  
  <fanc-dialog
    v-model:show="show"
    title="组件用法"
    message="这是使用组件形式的对话框"
    show-cancel-button
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'fantastic-ui';

const show = ref(false);

const onConfirm = () => {
  showToast('点击了确认按钮');
};

const onCancel = () => {
  showToast('点击了取消按钮');
};
</script>
```

## API

### 方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| showDialog | 显示对话框 | `options` | `Promise` |
| showConfirmDialog | 显示确认对话框 | `options` | `Promise` |
| showAlertDialog | 显示提示对话框 | `options` | `Promise` |

### Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | _string_ | - |
| message | 文本内容，支持通过 `\n` 换行 | _string_ | - |
| messageAlign | 内容对齐方式，可选值为 `left` `right` `center` | _string_ | `center` |
| showConfirmButton | 是否显示确认按钮 | _boolean_ | `true` |
| showCancelButton | 是否显示取消按钮 | _boolean_ | `false` |
| confirmButtonText | 确认按钮文字 | _string_ | `确认` |
| confirmButtonColor | 确认按钮颜色 | _string_ | - |
| cancelButtonText | 取消按钮文字 | _string_ | `取消` |
| cancelButtonColor | 取消按钮颜色 | _string_ | - |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| overlayClosable | 是否点击遮罩层后关闭 | _boolean_ | `false` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| beforeClose | 关闭前的回调函数 | _(action, done) => void_ | - |
| round | 是否显示圆角 | _boolean_ | `false` |
| buttonLayout | 按钮布局，可选值为 `horizontal` `vertical` | _string_ | `horizontal` |
| width | 弹窗宽度，默认单位为 `px` | _number \| string_ | - |
| zIndex | 弹窗层级 | _number \| string_ | `2000` |
| className | 自定义类名 | _string_ | - |
| customStyle | 自定义样式 | _object_ | - |

### Props

通过组件调用 `Dialog` 时，支持以下 Props：

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示对话框 | _boolean_ | `false` |
| title | 标题 | _string_ | - |
| message | 文本内容，支持通过 `\n` 换行 | _string_ | - |
| messageAlign | 内容对齐方式，可选值为 `left` `right` `center` | _string_ | `center` |
| showConfirmButton | 是否显示确认按钮 | _boolean_ | `true` |
| showCancelButton | 是否显示取消按钮 | _boolean_ | `false` |
| confirmButtonText | 确认按钮文字 | _string_ | `确认` |
| confirmButtonColor | 确认按钮颜色 | _string_ | - |
| cancelButtonText | 取消按钮文字 | _string_ | `取消` |
| cancelButtonColor | 取消按钮颜色 | _string_ | - |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| overlayClosable | 是否点击遮罩层后关闭 | _boolean_ | `false` |
| closeOnPopstate | 是否在页面回退时自动关闭 | _boolean_ | `true` |
| lockScroll | 是否锁定背景滚动 | _boolean_ | `true` |
| beforeClose | 关闭前的回调函数 | _(action, done) => void_ | - |
| round | 是否显示圆角 | _boolean_ | `false` |
| buttonLayout | 按钮布局，可选值为 `horizontal` `vertical` | _string_ | `horizontal` |
| width | 弹窗宽度，默认单位为 `px` | _number \| string_ | - |
| zIndex | 弹窗层级 | _number \| string_ | `2000` |
| className | 自定义类名 | _string_ | - |
| customStyle | 自定义样式 | _object_ | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确认按钮时触发 | - |
| cancel | 点击取消按钮时触发 | - |
| open | 打开对话框时触发 | - |
| close | 关闭对话框时触发 | - |
| opened | 打开动画结束时触发 | - |
| closed | 关闭动画结束时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| title | 自定义标题 |
| footer | 自定义底部按钮区域 | 