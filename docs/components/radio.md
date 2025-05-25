# Radio 单选框

单选框组件，用于在一组备选项中进行单选。

## 基础用法

通过 `v-model` 绑定单选框的选中状态。

```vue
<template>
  <fanc-radio v-model="checked">单选框</fanc-radio>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
```

## 禁用状态

通过 `disabled` 属性可以禁用单选框。

```vue
<template>
  <fanc-radio v-model="checked1" disabled>禁用未选中</fanc-radio>
  <fanc-radio v-model="checked2" disabled>禁用已选中</fanc-radio>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(true);
</script>
```

## 自定义形状

通过 `shape` 属性可以设置单选框的形状，支持 `square` 和 `round` 两种形状。

```vue
<template>
  <fanc-radio v-model="checked1" shape="square">方形单选框</fanc-radio>
  <fanc-radio v-model="checked2" shape="round">圆形单选框</fanc-radio>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(false);
const checked2 = ref(false);
</script>
```

## 自定义颜色

通过 `checkedColor` 属性可以自定义单选框选中状态的颜色。

```vue
<template>
  <fanc-radio v-model="checked" checkedColor="#07c160">自定义颜色</fanc-radio>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(true);
</script>
```

## 自定义大小

通过 `iconSize` 属性可以自定义单选框的大小，支持 `small`、`normal` 和 `large` 三种大小。

```vue
<template>
  <fanc-radio v-model="checked1" iconSize="small">小号单选框</fanc-radio>
  <fanc-radio v-model="checked2" iconSize="normal">普通单选框</fanc-radio>
  <fanc-radio v-model="checked3" iconSize="large">大号单选框</fanc-radio>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
</script>
```

## 选中样式

通过 `checkType` 属性可以设置单选框选中样式，支持 `dot` 和 `check` 两种样式。

```vue
<template>
  <fanc-radio v-model="checked1" checkType="dot">点状样式</fanc-radio>
  <fanc-radio v-model="checked2" checkType="check">勾选样式</fanc-radio>
</template>

<script setup>
import { ref } from 'vue';

const checked1 = ref(true);
const checked2 = ref(true);
</script>
```

## 单选框组

单选框可以与 `fanc-radio-group` 组件一起使用，实现单选框组。

```vue
<template>
  <fanc-radio-group v-model="result">
    <fanc-radio name="a">选项 A</fanc-radio>
    <fanc-radio name="b">选项 B</fanc-radio>
    <fanc-radio name="c">选项 C</fanc-radio>
  </fanc-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const result = ref('a');
</script>
```

## 单选框组配置

可以在单选框组上统一设置单选框的属性。

```vue
<template>
  <fanc-radio-group 
    v-model="result" 
    shape="square" 
    checkType="check" 
    checkedColor="#ff5722"
  >
    <fanc-radio name="a">选项 A</fanc-radio>
    <fanc-radio name="b">选项 B</fanc-radio>
    <fanc-radio name="c">选项 C</fanc-radio>
  </fanc-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const result = ref('a');
</script>
```

## 禁用单选框组

通过在单选框组上设置 `disabled` 属性，可以禁用整个单选框组。

```vue
<template>
  <fanc-radio-group v-model="result" disabled>
    <fanc-radio name="a">选项 A</fanc-radio>
    <fanc-radio name="b">选项 B</fanc-radio>
    <fanc-radio name="c">选项 C</fanc-radio>
  </fanc-radio-group>
</template>

<script setup>
import { ref } from 'vue';

const result = ref('a');
</script>
```

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 是否选中 | _boolean_ | `false` |
| label | 标签文本 | _string_ | - |
| disabled | 是否禁用 | _boolean_ | `false` |
| checkedColor | 选中状态颜色 | _string_ | - |
| iconSize | 图标大小，可选值为 `small` `normal` `large` | _string_ | `normal` |
| name | 标识符，用于在单选框组中使用 | _string \| number \| boolean_ | - |
| shape | 单选框形状，可选值为 `square` `round` | _string_ | `round` |
| checkType | 选中样式类型，可选值为 `dot` `check` | _string_ | `dot` |

### Radio Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 单选框状态变化时触发 | _value: boolean_ |
| change | 单选框状态变化时触发 | _value: boolean_ |

### Radio Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义文本内容 |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前选中项的标识符 | _string \| number \| boolean_ | - |
| disabled | 是否禁用所有单选框 | _boolean_ | `false` |
| checkedColor | 所有单选框的选中状态颜色 | _string_ | - |
| shape | 所有单选框的形状，可选值为 `square` `round` | _string_ | `round` |
| checkType | 所有单选框的选中样式类型，可选值为 `dot` `check` | _string_ | `dot` |

### RadioGroup Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 单选框组状态变化时触发 | _value: string \| number \| boolean_ |
| change | 单选框组状态变化时触发 | _value: string \| number \| boolean_ | 