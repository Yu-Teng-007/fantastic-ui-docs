# Button 按钮

按钮组件，用于触发操作，如提交表单、确认操作等。

## 基础用法

按钮支持 `default`、`primary`、`success`、`warning`、`danger` 和 `info` 六种类型，默认为 `default`。

```vue
<template>
  <fanc-button>默认按钮</fanc-button>
  <fanc-button type="primary">主要按钮</fanc-button>
  <fanc-button type="success">成功按钮</fanc-button>
  <fanc-button type="warning">警告按钮</fanc-button>
  <fanc-button type="danger">危险按钮</fanc-button>
  <fanc-button type="info">信息按钮</fanc-button>
</template>
```

## 朴素按钮

通过 `plain` 属性可以设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

```vue
<template>
  <fanc-button plain>朴素按钮</fanc-button>
  <fanc-button type="primary" plain>主要按钮</fanc-button>
  <fanc-button type="success" plain>成功按钮</fanc-button>
  <fanc-button type="warning" plain>警告按钮</fanc-button>
  <fanc-button type="danger" plain>危险按钮</fanc-button>
</template>
```

## 禁用状态

通过 `disabled` 属性来禁用按钮，禁用状态下按钮不可点击。

```vue
<template>
  <fanc-button disabled>禁用按钮</fanc-button>
  <fanc-button type="primary" disabled>禁用按钮</fanc-button>
  <fanc-button type="success" disabled>禁用按钮</fanc-button>
</template>
```

## 加载状态

通过 `loading` 属性设置按钮为加载状态，加载状态下按钮同样不可点击。

```vue
<template>
  <fanc-button loading>加载中...</fanc-button>
  <fanc-button type="primary" loading>加载中...</fanc-button>
  <fanc-button type="success" loading loading-text="加载中">加载中</fanc-button>
</template>
```

## 按钮形状

通过 `square` 设置方形按钮，通过 `round` 设置圆角按钮。

```vue
<template>
  <fanc-button type="primary" square>方形按钮</fanc-button>
  <fanc-button type="success" round>圆角按钮</fanc-button>
</template>
```

## 图标按钮

通过 `icon` 属性设置按钮图标，支持图标名称或图片URL。

```vue
<template>
  <fanc-button icon="home">首页</fanc-button>
  <fanc-button icon="plus" type="primary">新增</fanc-button>
  <fanc-button icon="check" type="success">确认</fanc-button>
  <fanc-button icon="https://example.com/icon.png">图片图标</fanc-button>
</template>
```

## 按钮尺寸

按钮支持 `large`、`normal`、`small` 和 `mini` 四种尺寸，默认为 `normal`。

```vue
<template>
  <fanc-button type="primary" size="large">大号按钮</fanc-button>
  <fanc-button type="primary">普通按钮</fanc-button>
  <fanc-button type="primary" size="small">小型按钮</fanc-button>
  <fanc-button type="primary" size="mini">迷你按钮</fanc-button>
</template>
```

## 块级元素

按钮在默认情况下为行内块级元素，通过 `block` 属性可以将按钮设置为块级元素，宽度为 100%。

```vue
<template>
  <fanc-button type="primary" block>块级元素按钮</fanc-button>
</template>
```

## 页面导航

通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

```vue
<template>
  <fanc-button type="primary" url="/pages/home/index">URL 跳转</fanc-button>
  <fanc-button type="primary" :to="{ path: '/home' }">路由跳转</fanc-button>
</template>
```

## 自定义颜色

通过 `color` 属性可以自定义按钮的颜色。

```vue
<template>
  <fanc-button color="#8c67ec">单色按钮</fanc-button>
  <fanc-button color="#8c67ec" plain>单色按钮</fanc-button>
  <fanc-button color="#7232dd">单色按钮</fanc-button>
  <fanc-button color="#7232dd" plain>单色按钮</fanc-button>
</template>
```

## 细边框

通过 `hairline` 属性可以设置 0.5px 的细边框。

```vue
<template>
  <fanc-button type="primary" hairline plain>细边框按钮</fanc-button>
</template>
```

## 阴影效果

通过 `shadow` 属性可以为按钮添加阴影效果。

```vue
<template>
  <fanc-button type="primary" shadow>阴影按钮</fanc-button>
</template>
```

## 点击事件

通过 `@click` 事件监听按钮点击。

```vue
<template>
  <fanc-button type="primary" @click="onClick">点击按钮</fanc-button>
</template>

<script setup>
import { showToast } from 'fantastic-ui';

const onClick = () => {
  showToast('按钮被点击');
};
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型，可选值为 `default` `primary` `success` `warning` `danger` `info` | _string_ | `default` |
| plain | 是否为朴素按钮 | _boolean_ | `false` |
| disabled | 是否禁用按钮 | _boolean_ | `false` |
| loading | 是否显示为加载状态 | _boolean_ | `false` |
| loadingText | 加载状态文字 | _string_ | - |
| square | 是否为方形按钮 | _boolean_ | `false` |
| round | 是否为圆角按钮 | _boolean_ | `false` |
| icon | 按钮图标，支持图标名称或图片URL | _string_ | - |
| iconSize | 图标大小 | _string \| number_ | - |
| iconColor | 图标颜色 | _string_ | - |
| size | 按钮尺寸，可选值为 `large` `normal` `small` `mini` | _string_ | `normal` |
| block | 是否为块级元素 | _boolean_ | `false` |
| url | 跳转链接 | _string_ | - |
| to | 路由跳转对象，同 vue-router 的 to | _string \| object_ | - |
| color | 按钮颜色，支持十六进制颜色 | _string_ | - |
| hairline | 是否使用细边框 | _boolean_ | `false` |
| shadow | 是否显示阴影 | _boolean_ | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | _event: Event_ |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 按钮内容 |
