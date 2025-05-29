# fanc-radio-group 单选框组组件

## 组件介绍

`fanc-radio-group` 是一个单选框组容器组件，用于管理一组 `fanc-radio` 单选框的选中状态。它提供了统一的状态管理和样式配置功能，使得一组单选框的操作更加便捷。

## 组件特性

- 支持单选框组选中状态的统一管理
- 支持统一设置选中颜色
- 支持统一禁用所有单选框
- 支持水平和垂直两种排列方式
- 支持统一设置单选框形状和选中样式

## 组件用法

### 基础用法

```vue
<template>
  <fanc-radio-group v-model="result" @change="onChange">
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
  },
  methods: {
    onChange(value) {
      console.log('当前选中值:', value);
    }
  }
}
</script>
```

### 全部禁用

```vue
<fanc-radio-group v-model="result" disabled>
  <fanc-radio name="a" label="选项 A"></fanc-radio>
  <fanc-radio name="b" label="选项 B"></fanc-radio>
  <fanc-radio name="c" label="选项 C"></fanc-radio>
</fanc-radio-group>
```

### 自定义选中颜色

```vue
<fanc-radio-group v-model="result" checked-color="#07c160">
  <fanc-radio name="a" label="选项 A"></fanc-radio>
  <fanc-radio name="b" label="选项 B"></fanc-radio>
  <fanc-radio name="c" label="选项 C"></fanc-radio>
</fanc-radio-group>
```

### 设置形状

```vue
<fanc-radio-group v-model="result" shape="square">
  <fanc-radio name="a" label="选项 A"></fanc-radio>
  <fanc-radio name="b" label="选项 B"></fanc-radio>
  <fanc-radio name="c" label="选项 C"></fanc-radio>
</fanc-radio-group>
```

### 设置选中样式

```vue
<fanc-radio-group v-model="result" check-type="check">
  <fanc-radio name="a" label="选项 A"></fanc-radio>
  <fanc-radio name="b" label="选项 B"></fanc-radio>
  <fanc-radio name="c" label="选项 C"></fanc-radio>
</fanc-radio-group>
```

### 垂直排列

```vue
<fanc-radio-group v-model="result" direction="vertical">
  <fanc-radio name="a" label="选项 A"></fanc-radio>
  <fanc-radio name="b" label="选项 B"></fanc-radio>
  <fanc-radio name="c" label="选项 C"></fanc-radio>
</fanc-radio-group>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 | String \| Number \| Boolean | - |
| disabled | 是否禁用所有单选框 | Boolean | `false` |
| checked-color | 选中状态颜色 | String | - |
| direction | 排列方向，可选值为 `horizontal` `vertical` | String | `horizontal` |
| shape | 形状，可选值为 `square` `round` | String | `round` |
| check-type | 选中样式类型，可选值为 `dot` `check` | String | `dot` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 选中值变化时触发 | value: 当前选中的值 |
| change | 选中值变化时触发 | value: 当前选中的值 |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽，用于放置 fanc-radio 组件 |

## 注意事项

1. `fanc-radio-group` 需要与 `fanc-radio` 组件配合使用
2. 每个 `fanc-radio` 组件需要设置唯一的 `name` 属性，作为选中值的标识
3. 通过 `v-model` 可以双向绑定单选框组的选中值，值为当前选中项的 `name` 值
4. 单选框组中同时只能有一个选项被选中
5. 当设置 `disabled` 为 `true` 时，所有单选框都会变为禁用状态，无法进行交互
6. 单选框组的 `shape`、`check-type` 和 `checked-color` 属性会被应用到所有子单选框，除非单选框自身有明确设置 