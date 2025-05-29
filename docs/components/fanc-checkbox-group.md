# fanc-checkbox-group 复选框组组件

## 组件介绍

`fanc-checkbox-group` 是一个复选框组容器组件，用于管理一组 `fanc-checkbox` 复选框的选中状态。它提供了统一的状态管理、最大可选数量限制等功能，使得一组复选框的操作更加便捷。

## 组件特性

- 支持复选框组选中状态的统一管理
- 支持设置最大可选数量
- 支持统一设置选中颜色
- 支持统一禁用所有复选框
- 支持水平和垂直两种排列方式
- 支持统一设置复选框形状

## 组件用法

### 基础用法

```vue
<template>
  <fanc-checkbox-group v-model="result" @change="onChange">
    <fanc-checkbox name="a" label="选项 A"></fanc-checkbox>
    <fanc-checkbox name="b" label="选项 B"></fanc-checkbox>
    <fanc-checkbox name="c" label="选项 C"></fanc-checkbox>
  </fanc-checkbox-group>
</template>

<script>
export default {
  data() {
    return {
      result: ['a', 'b']
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

### 限制最大可选数

```vue
<fanc-checkbox-group v-model="result" :max="2" @exceed-max="onExceedMax">
  <fanc-checkbox name="a" label="选项 A"></fanc-checkbox>
  <fanc-checkbox name="b" label="选项 B"></fanc-checkbox>
  <fanc-checkbox name="c" label="选项 C"></fanc-checkbox>
</fanc-checkbox-group>
```

```javascript
methods: {
  onExceedMax(max) {
    this.$toast(`最多只能选择 ${max} 项`);
  }
}
```

### 全部禁用

```vue
<fanc-checkbox-group v-model="result" disabled>
  <fanc-checkbox name="a" label="选项 A"></fanc-checkbox>
  <fanc-checkbox name="b" label="选项 B"></fanc-checkbox>
  <fanc-checkbox name="c" label="选项 C"></fanc-checkbox>
</fanc-checkbox-group>
```

### 自定义选中颜色

```vue
<fanc-checkbox-group v-model="result" checked-color="#07c160">
  <fanc-checkbox name="a" label="选项 A"></fanc-checkbox>
  <fanc-checkbox name="b" label="选项 B"></fanc-checkbox>
  <fanc-checkbox name="c" label="选项 C"></fanc-checkbox>
</fanc-checkbox-group>
```

### 设置形状

```vue
<fanc-checkbox-group v-model="result" shape="square">
  <fanc-checkbox name="a" label="选项 A"></fanc-checkbox>
  <fanc-checkbox name="b" label="选项 B"></fanc-checkbox>
  <fanc-checkbox name="c" label="选项 C"></fanc-checkbox>
</fanc-checkbox-group>
```

### 垂直排列

```vue
<fanc-checkbox-group v-model="result" direction="vertical">
  <fanc-checkbox name="a" label="选项 A"></fanc-checkbox>
  <fanc-checkbox name="b" label="选项 B"></fanc-checkbox>
  <fanc-checkbox name="c" label="选项 C"></fanc-checkbox>
</fanc-checkbox-group>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中的值 | Array | `[]` |
| disabled | 是否禁用所有复选框 | Boolean | `false` |
| checked-color | 选中状态颜色 | String | - |
| max | 最大可选数量，0 表示不限制 | Number | `0` |
| shape | 形状，可选值为 `square` `round` | String | `round` |
| direction | 排列方向，可选值为 `horizontal` `vertical` | String | `horizontal` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 选中值变化时触发 | value: Array |
| change | 选中值变化时触发 | value: Array |
| exceed-max | 超出最大可选数量时触发 | max: Number |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽，用于放置 fanc-checkbox 组件 |

## 注意事项

1. `fanc-checkbox-group` 需要与 `fanc-checkbox` 组件配合使用
2. 每个 `fanc-checkbox` 组件需要设置唯一的 `name` 属性，作为选中值的标识
3. 通过 `v-model` 可以双向绑定复选框组的选中值，值为一个数组，包含所有选中项的 `name` 值
4. 设置 `max` 属性后，当选中数量达到最大值时，未选中的复选框会自动变为不可点击状态
5. 当设置 `disabled` 为 `true` 时，所有复选框都会变为禁用状态，无法进行交互 