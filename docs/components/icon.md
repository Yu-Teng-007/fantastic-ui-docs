# Icon 图标

图标组件，基于 Font Awesome 图标库，支持自定义颜色、大小等属性。

## 基础用法

通过 `name` 属性设置图标名称。

```vue
<template>
  <fanc-icon name="home" />
  <fanc-icon name="user" />
  <fanc-icon name="search" />
  <fanc-icon name="heart" />
</template>
```

## 图标类型

通过 `type` 属性设置图标类型，支持 `solid`、`regular` 和 `brands` 三种类型。

```vue
<template>
  <fanc-icon name="heart" type="solid" />
  <fanc-icon name="heart" type="regular" />
  <fanc-icon name="github" type="brands" />
</template>
```

## 图标大小

通过 `size` 属性设置图标大小，支持数值或带单位的字符串。

```vue
<template>
  <fanc-icon name="star" size="16" />
  <fanc-icon name="star" size="24" />
  <fanc-icon name="star" size="32" />
  <fanc-icon name="star" size="48px" />
</template>
```

## 图标颜色

通过 `color` 属性设置图标颜色。

```vue
<template>
  <fanc-icon name="heart" color="#ff5252" />
  <fanc-icon name="star" color="#ffb300" />
  <fanc-icon name="check" color="#4caf50" />
  <fanc-icon name="info" color="#2196f3" />
</template>
```

## 图片图标

当 `name` 属性是一个图片 URL 时，会渲染为图片图标。

```vue
<template>
  <fanc-icon name="https://example.com/icon.png" size="32" />
  <fanc-icon name="/assets/icon.svg" size="32" />
</template>
```

## 显示徽标

通过 `dot` 属性显示小红点，通过 `badge` 属性显示徽标。

```vue
<template>
  <fanc-icon name="bell" dot />
  <fanc-icon name="envelope" badge="5" />
  <fanc-icon name="cart" badge="99+" />
</template>
```

## 旋转动画

通过 `spin` 属性设置图标旋转动画。

```vue
<template>
  <fanc-icon name="sync" spin />
  <fanc-icon name="spinner" spin />
  <fanc-icon name="circle-notch" spin />
</template>
```

## 点击事件

通过 `clickable` 属性设置图标是否可点击，点击时会触发 `click` 事件。

```vue
<template>
  <fanc-icon name="heart" clickable @click="onClick" />
</template>

<script setup>
import { showToast } from 'fantastic-ui';

const onClick = () => {
  showToast('图标被点击');
};
</script>
```

## 自定义样式

通过 `custom-style` 属性设置图标自定义样式。

```vue
<template>
  <fanc-icon 
    name="star" 
    :custom-style="{ 
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      padding: '8px',
      borderRadius: '4px'
    }" 
  />
</template>
```

## 图标组合

可以将多个图标组合使用，实现更复杂的图标效果。

```vue
<template>
  <view class="icon-group">
    <fanc-icon name="camera" size="32" />
    <fanc-icon name="plus" size="16" color="#4caf50" :custom-style="{ position: 'absolute', right: '-5px', bottom: '-5px' }" />
  </view>
</template>

<style>
.icon-group {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片URL | _string_ | - |
| type | 图标类型，可选值为 `solid` `regular` `brands` | _string_ | `solid` |
| size | 图标大小，单位为px | _string \| number_ | `24` |
| color | 图标颜色 | _string_ | - |
| dot | 是否显示小红点 | _boolean_ | `false` |
| badge | 图标右上角的徽标内容 | _string \| number_ | - |
| spin | 是否启用旋转动画 | _boolean_ | `false` |
| clickable | 是否可点击 | _boolean_ | `false` |
| customStyle | 自定义样式 | _object \| string_ | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击图标时触发 | _event: Event_ |
``` 