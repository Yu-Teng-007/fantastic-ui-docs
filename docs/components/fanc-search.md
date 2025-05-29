# fanc-search 搜索组件

## 组件介绍

`fanc-search` 是一个用于搜索场景的输入框组件，提供了搜索框的基本功能和样式。它支持自定义外观、图标、按钮等，可以满足各种搜索场景的需求。

## 组件特性

- 支持圆角和方形两种外观
- 支持自定义左侧图标和右侧图标
- 支持显示清除按钮
- 支持自定义右侧操作按钮
- 支持自定义输入框对齐方式
- 支持禁用和只读状态
- 支持自定义背景颜色和样式

## 组件用法

### 基础用法

```vue
<template>
  <fanc-search v-model="searchValue" placeholder="请输入搜索关键词"></fanc-search>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  }
}
</script>
```

### 搜索框形状

```vue
<!-- 圆角搜索框（默认） -->
<fanc-search shape="round"></fanc-search>

<!-- 方形搜索框 -->
<fanc-search shape="square"></fanc-search>
```

### 显示标签文本

```vue
<fanc-search label="地址" placeholder="请输入地址"></fanc-search>
```

### 自定义图标

```vue
<!-- 自定义左侧图标 -->
<fanc-search left-icon="map-marker-alt"></fanc-search>

<!-- 自定义右侧图标 -->
<fanc-search right-icon="sliders-h" @right-icon-click="onFilterClick"></fanc-search>

<!-- 自定义图标颜色和大小 -->
<fanc-search left-icon="search" icon-color="#1989fa" :icon-size="18"></fanc-search>
```

### 禁用和只读

```vue
<!-- 禁用状态 -->
<fanc-search disabled></fanc-search>

<!-- 只读状态 -->
<fanc-search read-only></fanc-search>
```

### 显示操作按钮

```vue
<fanc-search 
  v-model="searchValue" 
  show-action-button 
  action-text="搜索" 
  @action-click="onSearch"
></fanc-search>
```

### 自定义对齐方式

```vue
<!-- 左对齐（默认） -->
<fanc-search align="left"></fanc-search>

<!-- 居中对齐 -->
<fanc-search align="center"></fanc-search>

<!-- 右对齐 -->
<fanc-search align="right"></fanc-search>
```

### 自定义样式

```vue
<fanc-search 
  background="#f2f2f2" 
  placeholder-style="color: #999; font-size: 13px;"
></fanc-search>
```

### 监听事件

```vue
<fanc-search 
  v-model="searchValue"
  @focus="onFocus"
  @blur="onBlur"
  @search="onSearch"
  @clear="onClear"
></fanc-search>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 输入框当前值 | String | - |
| placeholder | 占位提示文本 | String | `请输入搜索关键词` |
| placeholder-style | 占位提示文本样式 | String | - |
| label | 搜索框左侧文本 | String | - |
| shape | 搜索框形状，可选值为 `square` `round` | String | `round` |
| background | 搜索框背景色 | String | - |
| input-type | 输入框类型，可选值为 `text` `number` `idcard` `digit` | String | `text` |
| clearable | 是否显示清除按钮 | Boolean | `true` |
| focus | 是否自动聚焦 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| read-only | 是否只读 | Boolean | `false` |
| left-icon | 左侧图标名称 | String | `search` |
| right-icon | 右侧图标名称 | String | - |
| icon-size | 图标大小 | String \| Number | `16` |
| icon-color | 图标颜色 | String | - |
| maxlength | 最大输入长度，-1为不限制 | String \| Number | `-1` |
| cursor-spacing | 指定光标与键盘的距离 | Number | `0` |
| adjust-position | 键盘弹起时是否自动上推页面 | Boolean | `true` |
| confirm-type | 键盘右下角按钮的文字，可选值为 `send` `search` `next` `go` `done` | String | `search` |
| show-action-button | 是否显示右侧按钮 | Boolean | `false` |
| action-text | 右侧按钮文字 | String | `搜索` |
| action-color | 右侧按钮颜色 | String | - |
| align | 输入框内容对齐方式，可选值为 `left` `center` `right` | String | `left` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 输入框内容变化时触发 | value: 输入框当前值 |
| search | 点击搜索按钮或确认按钮时触发 | value: 输入框当前值 |
| focus | 输入框聚焦时触发 | event: Event |
| blur | 输入框失焦时触发 | event: Event |
| clear | 点击清除按钮时触发 | - |
| right-icon-click | 点击右侧图标时触发 | - |
| action-click | 点击右侧按钮时触发 | value: 输入框当前值 |

### Slots

| 名称 | 说明 |
| --- | --- |
| rightIcon | 自定义右侧图标 |
| action | 自定义右侧按钮 |

## 注意事项

1. 使用 `v-model` 可以双向绑定输入框的值
2. 点击搜索按钮或键盘上的搜索按钮时，会触发 `search` 事件
3. 设置 `disabled` 为 `true` 时，整个搜索框将变为禁用状态
4. 设置 `read-only` 为 `true` 时，输入框为只读状态，但仍可以点击右侧图标和按钮
5. 可以通过 `left-icon` 和 `right-icon` 属性设置左右图标，或者使用 `rightIcon` 插槽自定义右侧图标 