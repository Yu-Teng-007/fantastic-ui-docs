# fanc-radio 单选框组件

## 组件介绍

`fanc-radio` 是一个单选框组件，用于在一组选项中进行单选。它可以单独使用，也可以与 `fanc-radio-group` 组件配合使用，实现一组单选框的状态管理。

## 组件特性

- 支持自定义形状（方形、圆形）
- 支持自定义选中颜色
- 支持不同尺寸配置
- 支持禁用状态
- 支持多种选中样式（点状、勾选）
- 支持与 radio-group 组合使用

## 组件用法

### 基础用法

```vue
<template>
  <view>
    <fanc-radio v-model="checked" label="单选框"></fanc-radio>
  </view>
</template>

<script>
export default {
  data() {
    return {
      checked: false
    }
  }
}
</script>
```

### 自定义形状

```vue
<!-- 圆形（默认） -->
<fanc-radio v-model="checked1" shape="round" label="圆形单选框"></fanc-radio>

<!-- 方形 -->
<fanc-radio v-model="checked2" shape="square" label="方形单选框"></fanc-radio>
```

### 禁用状态

```vue
<!-- 禁用状态 -->
<fanc-radio v-model="checked" disabled label="禁用状态"></fanc-radio>

<!-- 禁用且选中 -->
<fanc-radio v-model="checked" disabled label="禁用且选中" :value="true"></fanc-radio>
```

### 自定义颜色

```vue
<fanc-radio v-model="checked" checked-color="#07c160" label="自定义颜色"></fanc-radio>
```

### 单选框大小

```vue
<fanc-radio v-model="checked1" icon-size="small" label="小尺寸"></fanc-radio>
<fanc-radio v-model="checked2" icon-size="normal" label="默认尺寸"></fanc-radio>
<fanc-radio v-model="checked3" icon-size="large" label="大尺寸"></fanc-radio>
```

### 选中样式

```vue
<!-- 点状（默认） -->
<fanc-radio v-model="checked1" check-type="dot" label="点状样式"></fanc-radio>

<!-- 勾选 -->
<fanc-radio v-model="checked2" check-type="check" label="勾选样式"></fanc-radio>
```

### 搭配单选框组使用

```vue
<template>
  <fanc-radio-group v-model="result">
    <fanc-radio name="a" label="选项 A"></fanc-radio>
    <fanc-radio name="b" label="选项 B"></fanc-radio>
    <fanc-radio name="c" label="选项 C"></fanc-radio>
  </fanc-radio-group>
</template>

<script>
export default {
  data() {
    return {
      result: 'a'
    }
  }
}
</script>
```

### 自定义内容

```vue
<fanc-radio v-model="checked">
  <view>
    <text class="radio-title">自定义内容</text>
    <text class="radio-desc">这里是自定义的描述信息</text>
  </view>
</fanc-radio>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 是否选中 | Boolean | `false` |
| label | 标签文本 | String | - |
| disabled | 是否禁用 | Boolean | `false` |
| checked-color | 选中状态颜色 | String | - |
| icon-size | 图标大小，可选值为 `small` `normal` `large` | String | `normal` |
| name | 标识符，用于在单选框组中使用 | String \| Number \| Boolean | - |
| shape | 形状，可选值为 `square` `round` | String | `round` |
| check-type | 选中样式类型，可选值为 `dot` `check` | String | `dot` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 选中状态变化时触发 | value: Boolean |
| change | 选中状态变化时触发 | value: Boolean |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义文本内容 |

## 注意事项

1. 单独使用时，通过 `v-model` 或 `value` 属性控制单选框的选中状态
2. 在 `fanc-radio-group` 内使用时，需要通过 `name` 属性设置唯一标识，单选框的选中状态由单选框组来管理
3. 禁用状态下，单选框不可点击
4. 可以通过 `checked-color` 属性自定义选中状态的颜色
5. 单选框组中同时只能有一个选项被选中 