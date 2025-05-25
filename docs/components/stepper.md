# Stepper 步进器

步进器组件，用于增加或减少数值，常用于商品数量选择。

## 基础用法

通过 `v-model` 绑定输入值，通过 `min` 和 `max` 属性限制可输入范围。

```vue
<template>
  <fanc-stepper v-model="value" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
```

## 步长设置

通过 `step` 属性设置每次点击增加或减少按钮时变化的值。

```vue
<template>
  <fanc-stepper v-model="value" :step="2" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
```

## 限制输入范围

通过 `min` 和 `max` 属性限制输入值的范围。

```vue
<template>
  <fanc-stepper v-model="value" :min="5" :max="10" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(5);
</script>
```

## 禁用状态

通过 `disabled` 属性设置步进器为禁用状态。

```vue
<template>
  <fanc-stepper v-model="value" disabled />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
```

## 禁用输入框

通过 `disable-input` 属性禁用输入框，使用户只能通过点击按钮修改值。

```vue
<template>
  <fanc-stepper v-model="value" disable-input />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
```

## 固定小数位数

通过 `decimal-length` 属性设置固定显示的小数位数。

```vue
<template>
  <fanc-stepper v-model="value" :step="0.2" :decimal-length="1" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
```

## 自定义大小

通过 `input-width` 和 `button-size` 属性自定义步进器的大小。

```vue
<template>
  <fanc-stepper v-model="value" input-width="60px" :button-size="20" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
```

## 圆角风格

通过 `theme` 属性设置步进器的风格，支持 `square` 和 `round` 两种风格。

```vue
<template>
  <fanc-stepper v-model="value" theme="round" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
```

## 允许输入为空

通过 `allow-empty` 属性设置是否允许输入框为空。

```vue
<template>
  <fanc-stepper v-model="value" allow-empty />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
```

## 禁用按钮

通过 `disable-plus` 和 `disable-minus` 属性禁用增加或减少按钮。

```vue
<template>
  <fanc-stepper v-model="value" disable-plus />
  <fanc-stepper v-model="value" disable-minus />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
```

## 长按自动变化

默认情况下，长按按钮时会自动变化值，可以通过 `long-press-interval` 和 `long-press-start-time` 属性设置变化的间隔和延迟。

```vue
<template>
  <fanc-stepper 
    v-model="value" 
    :long-press-interval="300" 
    :long-press-start-time="800" 
  />
</template>

<script setup>
import { ref } from 'vue';

const value = ref(1);
</script>
```

## 事件监听

步进器提供了多种事件，可以监听值的变化、输入框的聚焦和失焦等。

```vue
<template>
  <fanc-stepper 
    v-model="value" 
    @change="onChange" 
    @focus="onFocus" 
    @blur="onBlur" 
    @plus="onPlus" 
    @minus="onMinus" 
  />
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'fantastic-ui';

const value = ref(1);

const onChange = (val) => {
  showToast(`值变化：${val}`);
};

const onFocus = () => {
  showToast('输入框聚焦');
};

const onBlur = () => {
  showToast('输入框失焦');
};

const onPlus = () => {
  showToast('点击增加按钮');
};

const onMinus = () => {
  showToast('点击减少按钮');
};
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前值 | _number \| string_ | `0` |
| min | 最小值 | _number \| string_ | `0` |
| max | 最大值 | _number \| string_ | `Infinity` |
| step | 步长，每次点击增加或减少的值 | _number \| string_ | `1` |
| disabled | 是否禁用步进器 | _boolean_ | `false` |
| input-width | 输入框宽度 | _string_ | `40px` |
| button-size | 按钮图标大小 | _number \| string_ | `16` |
| show-input | 是否显示输入框 | _boolean_ | `true` |
| disable-input | 是否禁用输入框 | _boolean_ | `false` |
| decimal-length | 固定显示的小数位数 | _number \| string_ | - |
| disable-plus | 是否禁用增加按钮 | _boolean_ | `false` |
| disable-minus | 是否禁用减少按钮 | _boolean_ | `false` |
| allow-empty | 是否允许输入框为空 | _boolean_ | `false` |
| theme | 主题样式，可选值为 `square` `round` | _string_ | `square` |
| placeholder | 输入框占位符 | _string_ | - |
| long-press-interval | 长按按钮时触发变化的间隔，单位毫秒 | _number \| string_ | `200` |
| long-press-start-time | 长按按钮时变化速率加速的延迟，单位毫秒 | _number \| string_ | `600` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 值改变时触发 | _value: number \| string_ |
| focus | 输入框聚焦时触发 | _event: Event_ |
| blur | 输入框失焦时触发 | _event: Event_ |
| plus | 点击增加按钮时触发 | - |
| minus | 点击减少按钮时触发 | - | 