# Signature 签名

签名组件，用于手写签名场景。

## 基础用法

基础的签名组件用法。

```vue
<template>
  <fanc-signature ref="signatureRef" />
  <view class="signature-actions">
    <fanc-button type="primary" size="small" @click="onConfirm"
      >确认</fanc-button
    >
    <fanc-button type="default" size="small" @click="onClear">清除</fanc-button>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "fantastic-ui";

const signatureRef = ref(null);

const onConfirm = async () => {
  const base64 = await signatureRef.value.generate();
  if (base64) {
    showToast("签名已保存");
    console.log("签名图片:", base64);
  } else {
    showToast("请先签名");
  }
};

const onClear = () => {
  signatureRef.value.clear();
};
</script>

<style>
.signature-actions {
  display: flex;
  justify-content: space-around;
  margin-top: 16px;
}
</style>
```

## 自定义画布大小

通过 `width` 和 `height` 属性可以自定义签名画布的大小。

```vue
<template>
  <fanc-signature width="300px" height="150px" />
</template>
```

## 自定义画笔颜色和宽度

通过 `penColor` 和 `penWidth` 属性可以自定义画笔的颜色和宽度。

```vue
<template>
  <fanc-signature pen-color="#1989fa" :pen-width="3" />
</template>
```

## 自定义背景色

通过 `background` 属性可以自定义画布的背景色。

```vue
<template>
  <fanc-signature background="#f5f5f5" />
</template>
```

## 禁用状态

通过 `disabled` 属性可以将签名组件设置为禁用状态。

```vue
<template>
  <fanc-signature disabled />
</template>
```

## 内置操作按钮

通过 `showActions` 属性可以显示内置的操作按钮，包括清除、确认和取消按钮。

```vue
<template>
  <fanc-signature
    show-actions
    @clear="onClear"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script setup>
import { showToast } from "fantastic-ui";

const onClear = () => {
  showToast("已清除");
};

const onConfirm = (base64) => {
  showToast("已确认");
  console.log("签名图片:", base64);
};

const onCancel = () => {
  showToast("已取消");
};
</script>
```

## 自定义按钮文本

通过 `clearText`、`confirmText` 和 `cancelText` 属性可以自定义按钮文本。

```vue
<template>
  <fanc-signature
    show-actions
    clear-text="重写"
    confirm-text="保存"
    cancel-text="返回"
  />
</template>
```

## 透明背景导出

通过 `isTransparent` 属性可以设置导出的签名图片是否使用透明背景。

```vue
<template>
  <fanc-signature ref="signatureRef" :is-transparent="true" />
  <fanc-button type="primary" @click="onExport">导出透明背景签名</fanc-button>
</template>

<script setup>
import { ref } from "vue";

const signatureRef = ref(null);

const onExport = async () => {
  const base64 = await signatureRef.value.generate();
  console.log("透明背景签名图片:", base64);
};
</script>
```

## 监听签名事件

可以通过 `start`、`signing` 和 `end` 事件监听签名过程。

```vue
<template>
  <fanc-signature @start="onStart" @signing="onSigning" @end="onEnd" />
</template>

<script setup>
const onStart = () => {
  console.log("开始签名");
};

const onSigning = () => {
  console.log("签名中");
};

const onEnd = () => {
  console.log("结束签名");
};
</script>
```

## API

### Props

| 参数          | 说明                 | 类型               | 默认值    |
| ------------- | -------------------- | ------------------ | --------- |
| penColor      | 画笔颜色             | _string_           | `#000000` |
| penWidth      | 画笔宽度             | _number_           | `2`       |
| width         | 画布宽度             | _string \| number_ | `100%`    |
| height        | 画布高度             | _string \| number_ | `200px`   |
| disabled      | 是否禁用             | _boolean_          | `false`   |
| showActions   | 是否显示操作按钮     | _boolean_          | `false`   |
| showClear     | 是否显示清除按钮     | _boolean_          | `true`    |
| showConfirm   | 是否显示确认按钮     | _boolean_          | `true`    |
| showCancel    | 是否显示取消按钮     | _boolean_          | `false`   |
| clearText     | 清除按钮文本         | _string_           | `清除`    |
| confirmText   | 确认按钮文本         | _string_           | `确认`    |
| cancelText    | 取消按钮文本         | _string_           | `取消`    |
| background    | 画布背景色           | _string_           | `#ffffff` |
| isTransparent | 导出图片是否透明背景 | _boolean_          | `false`   |
| customStyle   | 自定义样式           | _object_           | -         |
| customClass   | 自定义类名           | _string_           | -         |

### Events

| 事件名  | 说明           | 回调参数            |
| ------- | -------------- | ------------------- |
| clear   | 清除签名时触发 | -                   |
| confirm | 确认签名时触发 | _base64: string_    |
| cancel  | 取消签名时触发 | -                   |
| start   | 开始签名时触发 | _event: TouchEvent_ |
| signing | 签名过程中触发 | _event: TouchEvent_ |
| end     | 结束签名时触发 | _event: TouchEvent_ |

### 方法

通过 ref 可以获取到 Signature 实例并调用实例方法。

| 方法名   | 说明                                     | 参数 | 返回值                      |
| -------- | ---------------------------------------- | ---- | --------------------------- |
| generate | 生成签名图片，返回 base64 编码的图片数据 | -    | _Promise\<string \| null\>_ |
| clear    | 清除签名                                 | -    | -                           |
| isEmpty  | 判断签名是否为空                         | -    | _boolean_                   |
