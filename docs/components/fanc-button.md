# fanc-button 按钮组件

## 组件介绍

`fanc-button` 是一个功能完善的按钮组件，用于触发操作，如提交表单、确认操作等。它支持多种类型、尺寸和状态，可以满足各种交互场景的需求。

## 组件特性

- 支持多种按钮类型：默认、主要、成功、警告、危险和信息
- 支持多种按钮尺寸：大、中、小、迷你
- 支持朴素按钮、禁用状态、加载状态
- 支持圆角、方形、块级按钮
- 支持自定义颜色
- 支持图标按钮和文字按钮
- 支持细边框和阴影效果

## 组件用法

### 基础用法

```vue
<fanc-button>默认按钮</fanc-button>
<fanc-button type="primary">主要按钮</fanc-button>
<fanc-button type="success">成功按钮</fanc-button>
<fanc-button type="warning">警告按钮</fanc-button>
<fanc-button type="danger">危险按钮</fanc-button>
<fanc-button type="info">信息按钮</fanc-button>
```

### 朴素按钮

```vue
<fanc-button plain>朴素按钮</fanc-button>
<fanc-button type="primary" plain>主要按钮</fanc-button>
<fanc-button type="success" plain>成功按钮</fanc-button>
```

### 禁用状态

```vue
<fanc-button disabled>禁用按钮</fanc-button>
<fanc-button type="primary" disabled>禁用主要按钮</fanc-button>
```

### 加载状态

```vue
<fanc-button loading>加载中...</fanc-button>
<fanc-button type="primary" loading loadingText="加载中">加载中</fanc-button>
```

### 按钮尺寸

```vue
<fanc-button size="large">大号按钮</fanc-button>
<fanc-button>默认按钮</fanc-button>
<fanc-button size="small">小型按钮</fanc-button>
<fanc-button size="mini">迷你按钮</fanc-button>
```

### 图标按钮

```vue
<fanc-button icon="home">首页</fanc-button>
<fanc-button icon="plus" type="primary">新增</fanc-button>
<fanc-button icon="https://example.com/icon.png">图片图标</fanc-button>
```

### 按钮形状

```vue
<fanc-button round>圆角按钮</fanc-button>
<fanc-button square>方形按钮</fanc-button>
```

### 块级按钮

```vue
<fanc-button block>块级按钮</fanc-button>
<fanc-button type="primary" block>块级主要按钮</fanc-button>
```

### 自定义颜色

```vue
<fanc-button color="#7232dd">单色按钮</fanc-button>
<fanc-button color="#7232dd" plain>单色朴素按钮</fanc-button>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 按钮类型，可选值为 `default` `primary` `success` `warning` `danger` `info` | String | `default` |
| plain | 是否为朴素按钮 | Boolean | `false` |
| disabled | 是否禁用按钮 | Boolean | `false` |
| loading | 是否显示为加载状态 | Boolean | `false` |
| loadingText | 加载状态文字 | String | - |
| square | 是否为方形按钮 | Boolean | `false` |
| round | 是否为圆角按钮 | Boolean | `false` |
| icon | 按钮图标，支持图标名称或图片URL | String | - |
| iconSize | 图标大小 | String \| Number | - |
| iconColor | 图标颜色 | String | - |
| size | 按钮尺寸，可选值为 `large` `normal` `small` `mini` | String | `normal` |
| block | 是否为块级元素 | Boolean | `false` |
| url | 跳转链接 | String | - |
| to | 路由跳转对象，同vue-router的to | String \| Object | - |
| color | 按钮颜色，支持十六进制颜色 | String | - |
| hairline | 是否使用细边框 | Boolean | `false` |
| shadow | 是否显示阴影 | Boolean | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击按钮时触发 | event: Event |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 按钮内容 |

## 注意事项

1. 使用 `loading` 属性时，按钮会进入加载状态，此时点击事件不会触发
2. 使用 `url` 或 `to` 属性时，点击按钮会自动跳转到对应页面
3. 当按钮处于 `disabled` 状态时，所有点击事件和跳转都不会生效 