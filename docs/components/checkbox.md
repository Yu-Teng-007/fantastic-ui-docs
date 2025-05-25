# Checkbox 复选框

复选框组件，用于在一组备选项中进行多选。

## 基础用法

通过 `v-model` 绑定复选框的选中状态。

```vue
<template>
  <fanc-checkbox v-model="checked">复选框</fanc-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
```

## 禁用状态

通过 `disabled` 属性可以禁用复选框。

```vue
<template>
  <fanc-checkbox v-model="checked1" disabled>禁用未选中</fanc-checkbox>
  <fanc-checkbox v-model="checked2" disabled>禁用已选中</fanc-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
</script>
```

## 自定义形状

通过 `shape` 属性可以设置复选框的形状，支持 `square` 和 `round` 两种形状。

```vue
<template>
  <fanc-checkbox v-model="checked1" shape="square">方形复选框</fanc-checkbox>
  <fanc-checkbox v-model="checked2" shape="round">圆形复选框</fanc-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
</script>
```

## 自定义颜色

通过 `checkedColor` 属性可以自定义复选框选中状态的颜色。

```vue
<template>
  <fanc-checkbox v-model="checked" checkedColor="#07c160">自定义颜色</fanc-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(true);
</script>
```

## 自定义大小

通过 `iconSize` 属性可以自定义复选框的大小，支持 `small`、`normal` 和 `large` 三种大小。

```vue
<template>
  <fanc-checkbox v-model="checked1" iconSize="small">小号复选框</fanc-checkbox>
  <fanc-checkbox v-model="checked2" iconSize="normal">普通复选框</fanc-checkbox>
  <fanc-checkbox v-model="checked3" iconSize="large">大号复选框</fanc-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
</script>
```

## 复选框组

复选框可以与 `fanc-checkbox-group` 组件一起使用，实现复选框组。

```vue
<template>
  <fanc-checkbox-group v-model="result">
    <fanc-checkbox name="a">选项 A</fanc-checkbox>
    <fanc-checkbox name="b">选项 B</fanc-checkbox>
    <fanc-checkbox name="c">选项 C</fanc-checkbox>
  </fanc-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';

const result = ref(['a', 'b']);
</script>
```

## 限制最大可选数

通过 `max` 属性可以限制复选框组的最大可选数。

```vue
<template>
  <fanc-checkbox-group v-model="result" :max="2">
    <fanc-checkbox name="a">选项 A</fanc-checkbox>
    <fanc-checkbox name="b">选项 B</fanc-checkbox>
    <fanc-checkbox name="c">选项 C</fanc-checkbox>
    <fanc-checkbox name="d">选项 D</fanc-checkbox>
  </fanc-checkbox-group>
</template>

<script setup>
import { ref } from 'vue';

const result = ref(['a']);
</script>
```

## 全选与反选

可以通过复选框组的方法实现全选与反选。

```vue
<template>
  <fanc-checkbox-group v-model="result" ref="checkboxGroup">
    <fanc-checkbox name="a">选项 A</fanc-checkbox>
    <fanc-checkbox name="b">选项 B</fanc-checkbox>
    <fanc-checkbox name="c">选项 C</fanc-checkbox>
  </fanc-checkbox-group>
  
  <view style="margin-top: 16px;">
    <fanc-button size="small" type="primary" @click="selectAll">全选</fanc-button>
    <fanc-button size="small" @click="toggleAll">反选</fanc-button>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const result = ref([]);
const checkboxGroup = ref(null);

const selectAll = () => {
  checkboxGroup.value.selectAll();
};

const toggleAll = () => {
  checkboxGroup.value.toggleAll();
};
</script>
```

## API

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 是否选中 | _boolean_ | `false` |
| shape | 复选框形状，可选值为 `square` `round` | _string_ | `round` |
| label | 标签文本 | _string_ | - |
| disabled | 是否禁用 | _boolean_ | `false` |
| checkedColor | 选中状态颜色 | _string_ | - |
| icon | 图标名称 | _string_ | `check` |
| iconSize | 图标大小，可选值为 `small` `normal` `large` | _string_ | `normal` |
| name | 标识符，用于在复选框组中使用 | _string \| number \| boolean_ | - |

### Checkbox Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 复选框状态变化时触发 | _value: boolean_ |
| change | 复选框状态变化时触发 | _value: boolean_ |

### Checkbox Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义文本内容 |

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 所有选中项的标识符 | _array_ | `[]` |
| disabled | 是否禁用所有复选框 | _boolean_ | `false` |
| max | 最大可选数，0 表示无限制 | _number_ | `0` |
| checkedColor | 所有复选框的选中状态颜色 | _string_ | - |

### CheckboxGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 复选框组状态变化时触发 | _value: array_ |
| change | 复选框组状态变化时触发 | _value: array_ |

### CheckboxGroup Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| selectAll | 全选所有复选框 | - | - |
| toggleAll | 反选所有复选框 | - | - | 