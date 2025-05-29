# fanc-icon 图标组件

## 组件介绍

`fanc-icon` 是一个功能丰富的图标组件，基于 Font Awesome 图标库实现，支持显示多种类型的图标，包括 Font Awesome 图标和自定义图片。组件提供了丰富的配置选项，如颜色、大小、徽标等，可以满足各种场景下的图标显示需求。

## 组件特性

- 支持 Font Awesome 图标库（solid、regular、brands 三种类型）
- 支持自定义图片作为图标（支持 URL、本地路径）
- 支持自定义图标颜色和大小
- 支持显示小红点和徽标
- 支持图标旋转动画
- 支持点击事件

## 组件用法

### 基础用法

```vue
<!-- 使用 Font Awesome 图标 -->
<fanc-icon name="home"></fanc-icon>
<fanc-icon name="user" type="regular"></fanc-icon>
<fanc-icon name="weixin" type="brands"></fanc-icon>

<!-- 使用图片作为图标 -->
<fanc-icon name="https://example.com/icon.png"></fanc-icon>
<fanc-icon name="/static/icons/custom.png"></fanc-icon>
```

### 图标颜色

```vue
<fanc-icon name="heart" color="#f56c6c"></fanc-icon>
<fanc-icon name="star" color="#f0ad4e"></fanc-icon>
<fanc-icon name="check" color="#67c23a"></fanc-icon>
```

### 图标大小

```vue
<fanc-icon name="home" size="16"></fanc-icon>
<fanc-icon name="home" size="24"></fanc-icon>
<fanc-icon name="home" size="32"></fanc-icon>
<fanc-icon name="home" size="48"></fanc-icon>
```

### 显示徽标

```vue
<!-- 显示小红点 -->
<fanc-icon name="bell" dot></fanc-icon>

<!-- 显示数字徽标 -->
<fanc-icon name="envelope" badge="5"></fanc-icon>
<fanc-icon name="shopping-cart" badge="99+"></fanc-icon>
```

### 旋转动画

```vue
<fanc-icon name="spinner" spin></fanc-icon>
<fanc-icon name="sync" spin></fanc-icon>
```

### 可点击图标

```vue
<fanc-icon name="thumbs-up" clickable @click="handleClick"></fanc-icon>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片URL | String | - |
| type | 图标类型，可选值为 `solid` `regular` `brands` | String | `solid` |
| size | 图标大小，单位为px | String \| Number | `24` |
| color | 图标颜色 | String | - |
| dot | 是否显示小红点 | Boolean | `false` |
| badge | 图标右上角的徽标内容 | String \| Number | - |
| spin | 是否启用旋转动画 | Boolean | `false` |
| clickable | 是否可点击 | Boolean | `false` |
| customStyle | 自定义样式 | Object \| String | `{}` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击图标时触发 | event: Event |

## 注意事项

1. 使用 Font Awesome 图标时，需要确保项目中已引入相应的 Font Awesome 图标库
2. 使用图片作为图标时，支持网络图片URL、本地图片路径，以及常见的图片格式（png、jpg、jpeg、gif、svg）
3. 当设置 `clickable` 为 `true` 时，才会触发点击事件
4. 使用 `badge` 属性显示数字徽标时，如果数值较大，可能需要考虑显示省略形式（如 "99+"） 