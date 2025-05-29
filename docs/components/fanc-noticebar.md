# fanc-noticebar 公告栏组件

## 组件介绍

`fanc-noticebar` 是一个公告栏组件，用于展示系统公告、消息通知、活动提醒等重要信息。它支持多种展示方式，包括滚动播放、多行显示、自动轮播等功能。

## 组件特性

- 支持四种类型：信息、成功、警告、错误
- 支持文字滚动播放
- 支持多条消息自动轮播
- 支持自定义图标
- 支持多行文本显示
- 支持关闭按钮
- 支持自定义操作按钮
- 支持播放控制
- 支持 HTML 内容渲染

## 组件用法

### 基础用法

```vue
<template>
  <fanc-noticebar text="这是一条公告信息，请注意查看"></fanc-noticebar>
</template>
```

### 不同类型

```vue
<!-- 信息类型（默认） -->
<fanc-noticebar text="这是一条普通信息" type="info"></fanc-noticebar>

<!-- 成功类型 -->
<fanc-noticebar text="这是一条成功信息" type="success"></fanc-noticebar>

<!-- 警告类型 -->
<fanc-noticebar text="这是一条警告信息" type="warning"></fanc-noticebar>

<!-- 错误类型 -->
<fanc-noticebar text="这是一条错误信息" type="error"></fanc-noticebar>
```

### 滚动播放

```vue
<fanc-noticebar 
  text="这是一条很长的公告信息，超出显示范围后会自动滚动播放，以确保用户可以看到完整内容" 
  :scrollable="true"
></fanc-noticebar>
```

### 多行显示

```vue
<fanc-noticebar 
  text="这是一条很长的公告信息，设置多行显示后会自动换行，不会以滚动方式展示" 
  :multi-line="true"
></fanc-noticebar>
```

### 可关闭公告

```vue
<fanc-noticebar 
  text="这是一条可以关闭的公告" 
  :closable="true"
  @close="onClose"
></fanc-noticebar>
```

### 自定义图标

```vue
<fanc-noticebar 
  text="使用自定义图标的公告" 
  icon-name="bell"
></fanc-noticebar>

<!-- 不显示图标 -->
<fanc-noticebar 
  text="不显示图标的公告" 
  :show-icon="false"
></fanc-noticebar>
```

### 操作按钮

```vue
<fanc-noticebar 
  text="这条公告带有操作按钮" 
  action-text="查看详情"
  @action="onAction"
></fanc-noticebar>
```

### 多条消息轮播

```vue
<fanc-noticebar 
  :text="['第一条公告信息', '第二条公告信息', '第三条公告信息']" 
  :auto-play="true"
  :play-interval="3000"
></fanc-noticebar>
```

### 带播放控制按钮

```vue
<fanc-noticebar 
  :text="['第一条公告信息', '第二条公告信息', '第三条公告信息']" 
  :auto-play="true"
  :show-play-btn="true"
></fanc-noticebar>
```

### 自定义滚动速度

```vue
<fanc-noticebar 
  text="这是一条很长的公告信息，可以自定义滚动速度" 
  :scrollable="true"
  :scroll-speed="100"
></fanc-noticebar>
```

### 支持HTML内容

```vue
<fanc-noticebar 
  text="<span style='color: red;'>这是红色文字</span>，<b>这是加粗文字</b>" 
  :enable-html="true"
></fanc-noticebar>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 公告内容，可以是字符串或字符串数组 | String \| Array | - |
| type | 公告类型，可选值为 `info` `success` `warning` `error` | String | `info` |
| show-icon | 是否显示图标 | Boolean | `true` |
| icon-name | 自定义图标名称 | String | - |
| closable | 是否显示关闭按钮 | Boolean | `false` |
| scrollable | 是否开启滚动播放 | Boolean | `false` |
| scroll-speed | 滚动速度，单位为像素/秒 | Number | `50` |
| auto-play | 是否自动播放，仅在text为数组时有效 | Boolean | `true` |
| play-interval | 播放间隔，单位为毫秒 | Number | `3000` |
| show-play-btn | 是否显示播放控制按钮 | Boolean | `false` |
| multi-line | 是否支持多行展示 | Boolean | `false` |
| action-text | 操作按钮文本 | String | - |
| enable-html | 是否支持HTML内容 | Boolean | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击公告内容时触发 | event: Event |
| close | 关闭公告时触发 | event: Event |
| action | 点击操作按钮时触发 | event: Event |

## 注意事项

1. 当设置 `scrollable` 为 `true` 时，只有当内容超出容器宽度才会滚动
2. 当 `text` 为数组时，可以通过 `auto-play` 控制是否自动轮播
3. `multi-line` 和 `scrollable` 不建议同时使用，多行模式下不会滚动
4. 使用 `enable-html` 时需要注意内容安全性，避免XSS攻击
5. 鼠标悬停在公告栏上时，滚动和自动播放会暂停
6. 设置 `show-play-btn` 为 `true` 时，可以通过按钮控制轮播的暂停和播放
7. 默认情况下，图标会根据 `type` 类型自动选择，也可以通过 `icon-name` 自定义 