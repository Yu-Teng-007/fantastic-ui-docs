# fanc-popup 弹出层组件

## 组件介绍

`fanc-popup` 是一个通用的弹出层组件，用于在页面中弹出一个浮层，可以从上、下、左、右、中间等多个方向弹出。它通常作为其他组件的基础，如对话框、动作面板、选择器等，也可以单独使用来展示自定义内容。

## 组件特性

- 支持多个方向弹出：中间、顶部、底部、左侧、右侧
- 支持自定义内容
- 支持显示遮罩层
- 支持关闭图标配置
- 支持圆角设置
- 支持自定义样式和动画时长
- 支持点击遮罩层关闭

## 组件用法

### 基础用法

```vue
<template>
  <view>
    <fanc-button @click="showPopup">显示弹出层</fanc-button>
    <fanc-popup v-model:show="popupVisible">
      <view class="popup-content">这是弹出层内容</view>
    </fanc-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      popupVisible: false
    };
  },
  methods: {
    showPopup() {
      this.popupVisible = true;
    }
  }
};
</script>

<style>
.popup-content {
  padding: 20px;
  min-width: 200px;
  text-align: center;
}
</style>
```

### 弹出位置

```vue
<!-- 中间弹出 -->
<fanc-popup v-model:show="show" position="center">
  <view class="popup-content">中间弹出</view>
</fanc-popup>

<!-- 顶部弹出 -->
<fanc-popup v-model:show="show" position="top">
  <view class="popup-content">顶部弹出</view>
</fanc-popup>

<!-- 底部弹出 -->
<fanc-popup v-model:show="show" position="bottom">
  <view class="popup-content">底部弹出</view>
</fanc-popup>

<!-- 左侧弹出 -->
<fanc-popup v-model:show="show" position="left">
  <view class="popup-content">左侧弹出</view>
</fanc-popup>

<!-- 右侧弹出 -->
<fanc-popup v-model:show="show" position="right">
  <view class="popup-content">右侧弹出</view>
</fanc-popup>
```

### 关闭图标

```vue
<fanc-popup v-model:show="show" closeable>
  <view class="popup-content">显示关闭图标</view>
</fanc-popup>

<!-- 自定义关闭图标位置 -->
<fanc-popup v-model:show="show" closeable close-icon-position="top-left">
  <view class="popup-content">左上角关闭图标</view>
</fanc-popup>
```

### 圆角设置

```vue
<fanc-popup v-model:show="show" round>
  <view class="popup-content">圆角弹出层</view>
</fanc-popup>
```

### 禁用遮罩层点击关闭

```vue
<fanc-popup v-model:show="show" :overlay-closable="false">
  <view class="popup-content">点击遮罩层不会关闭</view>
</fanc-popup>
```

### 自定义样式

```vue
<fanc-popup 
  v-model:show="show" 
  :custom-style="{ backgroundColor: '#f0f0f0' }"
  custom-class="my-popup"
>
  <view class="popup-content">自定义样式的弹出层</view>
</fanc-popup>
```

### 动画时长

```vue
<fanc-popup v-model:show="show" :duration="500">
  <view class="popup-content">自定义动画时长</view>
</fanc-popup>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示弹出层 | Boolean | `false` |
| position | 弹出位置，可选值为 `center` `top` `bottom` `left` `right` | String | `center` |
| overlay | 是否显示遮罩层 | Boolean | `true` |
| closeable | 是否显示关闭图标 | Boolean | `false` |
| close-icon-position | 关闭图标位置，可选值为 `top-right` `top-left` `bottom-right` `bottom-left` | String | `top-right` |
| close-icon-class | 关闭图标自定义类名 | String | - |
| round | 是否显示圆角 | Boolean | `true` |
| duration | 动画时长，单位为毫秒 | Number \| String | `300` |
| z-index | 弹出层的z-index值 | Number \| String | `1000` |
| overlay-closable | 是否点击遮罩层后关闭弹出层 | Boolean | `true` |
| custom-style | 自定义弹出层样式 | String \| Object | - |
| custom-class | 自定义弹出层类名 | String | - |
| mount-to-body | 是否挂载到页面根元素 | Boolean | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:show | 更新show属性值 | show: 是否显示弹出层 |
| open | 弹出层打开时触发 | - |
| close | 弹出层关闭时触发 | - |
| clickOverlay | 点击遮罩层时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 弹出层内容 |

## 注意事项

1. 使用 `v-model:show` 可以实现弹出层显示状态的双向绑定
2. 弹出层默认会挂载到页面根元素，可以通过 `mount-to-body` 属性控制
3. 不同的弹出位置会有不同的默认样式，如顶部弹出会占满屏幕宽度
4. 当设置 `position` 为 `left` 或 `right` 时，弹出层会占满屏幕高度
5. 使用 `custom-style` 和 `custom-class` 可以自定义弹出层的样式 