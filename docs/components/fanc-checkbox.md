# fanc-checkbox 复选框组件

## 组件介绍

`fanc-checkbox` 是一个复选框组件，用于在一组选项中进行多选。它可以单独使用，也可以与 `fanc-checkbox-group` 组件配合使用，实现一组复选框的状态管理。

## 组件特性

- 支持自定义形状（方形、圆形）
- 支持自定义选中颜色
- 支持自定义图标
- 支持不同尺寸配置
- 支持禁用状态
- 支持与 checkbox-group 组合使用

## 组件用法

### 基础用法

```vue
<template>
  <view>
    <fanc-checkbox v-model="checked" label="复选框"></fanc-checkbox>
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
<fanc-checkbox v-model="checked1" shape="round" label="圆形复选框"></fanc-checkbox>

<!-- 方形 -->
<fanc-checkbox v-model="checked2" shape="square" label="方形复选框"></fanc-checkbox>
```

### 禁用状态

```vue
<!-- 禁用状态 -->
<fanc-checkbox v-model="checked" disabled label="禁用状态"></fanc-checkbox>

<!-- 禁用且选中 -->
<fanc-checkbox v-model="checked" disabled label="禁用且选中" :value="true"></fanc-checkbox>
```

### 自定义颜色

```vue
<fanc-checkbox v-model="checked" checked-color="#07c160" label="自定义颜色"></fanc-checkbox>
```

### 自定义图标

```vue
<fanc-checkbox v-model="checked" icon="check-circle" label="自定义图标"></fanc-checkbox>
```

### 复选框大小

```vue
<fanc-checkbox v-model="checked1" icon-size="small" label="小尺寸"></fanc-checkbox>
<fanc-checkbox v-model="checked2" icon-size="normal" label="默认尺寸"></fanc-checkbox>
<fanc-checkbox v-model="checked3" icon-size="large" label="大尺寸"></fanc-checkbox>
```

### 搭配复选框组使用

```vue
<template>
  <fanc-checkbox-group v-model="result">
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
  }
}
</script>
```

### 自定义内容

```vue
<fanc-checkbox v-model="checked">
  <view>
    <text class="checkbox-title">自定义内容</text>
    <text class="checkbox-desc">这里是自定义的描述信息</text>
  </view>
</fanc-checkbox>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 是否选中 | Boolean | `false` |
| shape | 复选框形状，可选值为 `square` `round` | String | `round` |
| label | 标签文本 | String | - |
| disabled | 是否禁用 | Boolean | `false` |
| checked-color | 选中状态颜色 | String | - |
| icon | 图标名称 | String | `check` |
| icon-size | 图标大小，可选值为 `small` `normal` `large` | String | `normal` |
| name | 标识符，用于在复选框组中使用 | String \| Number \| Boolean | - |

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

1. 单独使用时，通过 `v-model` 或 `value` 属性控制复选框的选中状态
2. 在 `fanc-checkbox-group` 内使用时，需要通过 `name` 属性设置唯一标识，复选框的选中状态由复选框组来管理
3. 禁用状态下，复选框不可点击
4. 可以通过 `checked-color` 属性自定义选中状态的颜色 