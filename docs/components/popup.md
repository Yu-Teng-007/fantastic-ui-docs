# Popup 弹出层

弹出层组件，用于展示弹出内容，支持多个方向弹出。

## 基础用法

通过 `v-model:show` 控制弹出层是否展示。

```vue
<template>
  <fanc-button type="primary" @click="showPopup = true">显示弹出层</fanc-button>
  <fanc-popup v-model:show="showPopup">
    <view class="popup-content">这是弹出层内容</view>
  </fanc-popup>
</template>

<script setup>
import { ref } from 'vue';

const showPopup = ref(false);
</script>

<style>
.popup-content {
  padding: 30px 50px;
}
</style>
```

## 弹出位置

通过 `position` 属性设置弹出位置，支持 `center`、`top`、`bottom`、`left`、`right` 五个方向。

```vue
<template>
  <fanc-button @click="showCenter = true">居中弹出</fanc-button>
  <fanc-button @click="showTop = true">顶部弹出</fanc-button>
  <fanc-button @click="showBottom = true">底部弹出</fanc-button>
  <fanc-button @click="showLeft = true">左侧弹出</fanc-button>
  <fanc-button @click="showRight = true">右侧弹出</fanc-button>
  
  <fanc-popup v-model:show="showCenter" position="center">
    <view class="popup-content">居中弹出</view>
  </fanc-popup>
  
  <fanc-popup v-model:show="showTop" position="top">
    <view class="popup-content">顶部弹出</view>
  </fanc-popup>
  
  <fanc-popup v-model:show="showBottom" position="bottom">
    <view class="popup-content">底部弹出</view>
  </fanc-popup>
  
  <fanc-popup v-model:show="showLeft" position="left">
    <view class="popup-content">左侧弹出</view>
  </fanc-popup>
  
  <fanc-popup v-model:show="showRight" position="right">
    <view class="popup-content">右侧弹出</view>
  </fanc-popup>
</template>

<script setup>
import { ref } from 'vue';

const showCenter = ref(false);
const showTop = ref(false);
const showBottom = ref(false);
const showLeft = ref(false);
const showRight = ref(false);
</script>
```

## 圆角弹窗

通过 `round` 属性设置弹窗的圆角大小。

```vue
<template>
  <fanc-button @click="showRound = true">圆角弹窗</fanc-button>
  
  <fanc-popup v-model:show="showRound" position="bottom" round>
    <view class="popup-content">圆角弹窗</view>
  </fanc-popup>
</template>

<script setup>
import { ref } from 'vue';

const showRound = ref(false);
</script>
```

## 关闭图标

通过 `closeable` 属性展示关闭图标，通过 `close-icon-position` 属性设置图标位置。

```vue
<template>
  <fanc-button @click="showCloseable = true">显示关闭图标</fanc-button>
  
  <fanc-popup 
    v-model:show="showCloseable" 
    closeable 
    close-icon-position="top-right"
  >
    <view class="popup-content">显示关闭图标</view>
  </fanc-popup>
</template>

<script setup>
import { ref } from 'vue';

const showCloseable = ref(false);
</script>
```

## 点击遮罩层关闭

通过 `close-on-click-overlay` 属性设置是否点击遮罩层后关闭弹出层。

```vue
<template>
  <fanc-button @click="show1 = true">点击遮罩层关闭</fanc-button>
  <fanc-button @click="show2 = true">点击遮罩层不关闭</fanc-button>
  
  <fanc-popup v-model:show="show1" :close-on-click-overlay="true">
    <view class="popup-content">点击遮罩层关闭</view>
  </fanc-popup>
  
  <fanc-popup v-model:show="show2" :close-on-click-overlay="false">
    <view class="popup-content">点击遮罩层不关闭</view>
  </fanc-popup>
</template>

<script setup>
import { ref } from 'vue';

const show1 = ref(false);
const show2 = ref(false);
</script>
```

## 自定义遮罩层样式

通过 `overlay-style` 属性自定义遮罩层样式。

```vue
<template>
  <fanc-button @click="showCustomOverlay = true">自定义遮罩层</fanc-button>
  
  <fanc-popup 
    v-model:show="showCustomOverlay" 
    :overlay-style="{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }"
  >
    <view class="popup-content">自定义遮罩层</view>
  </fanc-popup>
</template>

<script setup>
import { ref } from 'vue';

const showCustomOverlay = ref(false);
</script>
```

## 自定义动画时长

通过 `duration` 属性设置动画时长，单位为毫秒。

```vue
<template>
  <fanc-button @click="showCustomDuration = true">自定义动画时长</fanc-button>
  
  <fanc-popup v-model:show="showCustomDuration" :duration="1000">
    <view class="popup-content">自定义动画时长</view>
  </fanc-popup>
</template>

<script setup>
import { ref } from 'vue';

const showCustomDuration = ref(false);
</script>
```

## 监听事件

弹出层提供了多个事件，可以监听弹出层的打开和关闭等事件。

```vue
<template>
  <fanc-button @click="showEvent = true">监听事件</fanc-button>
  
  <fanc-popup 
    v-model:show="showEvent" 
    @open="onOpen" 
    @close="onClose" 
    @opened="onOpened" 
    @closed="onClosed"
  >
    <view class="popup-content">监听事件</view>
  </fanc-popup>
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'fantastic-ui';

const showEvent = ref(false);

const onOpen = () => {
  showToast('打开弹出层');
};

const onClose = () => {
  showToast('关闭弹出层');
};

const onOpened = () => {
  showToast('打开动画结束');
};

const onClosed = () => {
  showToast('关闭动画结束');
};
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示弹出层 | _boolean_ | `false` |
| position | 弹出位置，可选值为 `center` `top` `bottom` `left` `right` | _string_ | `center` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| close-on-click-overlay | 是否点击遮罩层后关闭 | _boolean_ | `true` |
| duration | 动画时长，单位为毫秒 | _number \| string_ | `300` |
| round | 是否显示圆角 | _boolean_ | `false` |
| closeable | 是否显示关闭图标 | _boolean_ | `false` |
| close-icon | 关闭图标名称 | _string_ | `close` |
| close-icon-position | 关闭图标位置，可选值为 `top-left` `top-right` `bottom-left` `bottom-right` | _string_ | `top-right` |
| z-index | 弹出层层级 | _number \| string_ | `1000` |
| lock-scroll | 是否锁定背景滚动 | _boolean_ | `true` |
| lazy-render | 是否在显示弹层时才渲染节点 | _boolean_ | `true` |
| custom-style | 自定义弹出层样式 | _object_ | - |
| custom-class | 自定义弹出层类名 | _string_ | - |
| overlay-style | 自定义遮罩层样式 | _object_ | - |
| overlay-class | 自定义遮罩层类名 | _string_ | - |
| safe-area-inset-bottom | 是否开启底部安全区适配 | _boolean_ | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 打开弹出层时触发 | - |
| close | 关闭弹出层时触发 | - |
| opened | 打开动画结束时触发 | - |
| closed | 关闭动画结束时触发 | - |
| click-overlay | 点击遮罩层时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 弹出层内容 |
