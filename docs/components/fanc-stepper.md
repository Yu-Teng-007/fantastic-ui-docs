# fanc-stepper 步进器组件

## 组件介绍

`fanc-stepper` 是一个步进器组件，用于增加或减少数值，常用于商品数量选择、数值调整等场景。它提供了加减按钮和输入框，支持手动输入、长按连续调整等功能。

## 组件特性

- 支持设置最小值和最大值
- 支持设置步长
- 支持禁用状态和只读状态
- 支持自定义输入框宽度和按钮大小
- 支持长按连续调整数值
- 支持小数位数控制
- 支持方形和圆形两种主题样式
- 支持空值处理

## 组件用法

### 基础用法

```vue
<template>
  <fanc-stepper v-model="value"></fanc-stepper>
</template>

<script>
export default {
  data() {
    return {
      value: 1
    }
  }
}
</script>
```

### 步长设置

```vue
<fanc-stepper v-model="value" :step="2"></fanc-stepper>
```

### 限制范围

```vue
<fanc-stepper v-model="value" :min="5" :max="10"></fanc-stepper>
```

### 禁用状态

```vue
<!-- 完全禁用 -->
<fanc-stepper v-model="value" disabled></fanc-stepper>

<!-- 禁用输入框 -->
<fanc-stepper v-model="value" disable-input></fanc-stepper>

<!-- 禁用加号按钮 -->
<fanc-stepper v-model="value" disable-plus></fanc-stepper>

<!-- 禁用减号按钮 -->
<fanc-stepper v-model="value" disable-minus></fanc-stepper>
```

### 小数步进器

```vue
<fanc-stepper v-model="value" :step="0.1" :decimal-length="1"></fanc-stepper>
```

### 自定义大小

```vue
<fanc-stepper 
  v-model="value" 
  input-width="60px" 
  :button-size="20"
></fanc-stepper>
```

### 主题样式

```vue
<!-- 方形风格（默认） -->
<fanc-stepper v-model="value" theme="square"></fanc-stepper>

<!-- 圆形风格 -->
<fanc-stepper v-model="value" theme="round"></fanc-stepper>
```

### 允许空值

```vue
<fanc-stepper v-model="value" allow-empty></fanc-stepper>
```

### 隐藏输入框

```vue
<fanc-stepper v-model="value" :show-input="false"></fanc-stepper>
```

### 长按配置

```vue
<fanc-stepper 
  v-model="value" 
  :long-press-interval="300"
  :long-press-start-time="800"
></fanc-stepper>
```

### 事件监听

```vue
<fanc-stepper 
  v-model="value"
  @change="onChange"
  @plus="onPlus"
  @minus="onMinus"
  @focus="onFocus"
  @blur="onBlur"
></fanc-stepper>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前值 | Number \| String | `0` |
| min | 最小值 | Number \| String | `0` |
| max | 最大值 | Number \| String | `Infinity` |
| step | 步长，每次点击增加或减少的值 | Number \| String | `1` |
| disabled | 是否禁用步进器 | Boolean | `false` |
| input-width | 输入框宽度 | String | `40px` |
| button-size | 按钮图标大小 | Number \| String | `16` |
| show-input | 是否显示输入框 | Boolean | `true` |
| disable-input | 是否禁用输入框 | Boolean | `false` |
| decimal-length | 固定显示的小数位数 | Number \| String | `null` |
| disable-plus | 是否禁用增加按钮 | Boolean | `false` |
| disable-minus | 是否禁用减少按钮 | Boolean | `false` |
| allow-empty | 是否允许输入框为空 | Boolean | `false` |
| theme | 主题样式，可选值为 `round` `square` | String | `square` |
| placeholder | 输入框占位符 | String | - |
| long-press-interval | 长按按钮时触发变化的间隔，单位毫秒 | Number \| String | `200` |
| long-press-start-time | 长按按钮时变化速率加速的延迟，单位毫秒 | Number \| String | `600` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 输入框值变化时触发 | value: 当前值 |
| change | 当前值变化时触发 | value: 当前值 |
| focus | 输入框聚焦时触发 | value: 当前值 |
| blur | 输入框失焦时触发 | value: 当前值 |
| plus | 点击增加按钮时触发 | value: 当前值 |
| minus | 点击减少按钮时触发 | value: 当前值 |

## 注意事项

1. 使用 `v-model` 可以双向绑定步进器的值
2. 当值达到最小值时，减少按钮会自动禁用；当值达到最大值时，增加按钮会自动禁用
3. 设置 `step` 属性可以控制每次点击增加或减少的值，支持小数
4. 使用 `decimal-length` 属性可以控制显示的小数位数，如设置为 1 则显示一位小数
5. 长按按钮时，会持续增加或减少数值，且随着长按时间增加，变化速率会加快
6. 当设置 `allow-empty` 为 `true` 时，输入框可以为空，此时 `v-model` 绑定的值为空字符串
7. 使用 `disable-plus` 和 `disable-minus` 可以单独禁用增加或减少按钮 