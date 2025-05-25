# Calendar 日历

日历组件，用于日期选择、日期范围选择、展示日期等。

## 基础用法

通过 `v-model:show` 控制日历的显示与隐藏，通过 `@confirm` 事件获取选择的日期。

```vue
<template>
  <fanc-button type="primary" @click="showCalendar = true">选择单个日期</fanc-button>
  <fanc-calendar 
    v-model:show="showCalendar" 
    type="single" 
    @confirm="onConfirm" 
  />
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'fantastic-ui';

const showCalendar = ref(false);

const onConfirm = (date) => {
  showToast(`选择的日期：${date}`);
};
</script>
```

## 选择多个日期

将 `type` 属性设置为 `multiple` 可以选择多个日期。

```vue
<template>
  <fanc-button type="primary" @click="showCalendar = true">选择多个日期</fanc-button>
  <fanc-calendar 
    v-model:show="showCalendar" 
    type="multiple" 
    @confirm="onConfirm" 
  />
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'fantastic-ui';

const showCalendar = ref(false);

const onConfirm = (dates) => {
  showToast(`选择了 ${dates.length} 个日期`);
};
</script>
```

## 选择日期范围

将 `type` 属性设置为 `range` 可以选择日期范围。

```vue
<template>
  <fanc-button type="primary" @click="showCalendar = true">选择日期范围</fanc-button>
  <fanc-calendar 
    v-model:show="showCalendar" 
    type="range" 
    @confirm="onConfirm" 
  />
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'fantastic-ui';

const showCalendar = ref(false);

const onConfirm = (dates) => {
  const [start, end] = dates;
  showToast(`选择的日期范围：${start} 至 ${end}`);
};
</script>
```

## 自定义日历标题

通过 `title` 和 `subtitle` 属性可以自定义日历的标题和副标题。

```vue
<template>
  <fanc-calendar 
    v-model:show="showCalendar" 
    title="请选择日期" 
    subtitle="2023年5月" 
  />
</template>

<script setup>
import { ref } from 'vue';

const showCalendar = ref(false);
</script>
```

## 自定义工具栏模式

通过 `mode` 属性可以设置工具栏模式，支持 `month` 和 `year-month` 两种模式。

```vue
<template>
  <fanc-button @click="showMonthMode = true">月份模式</fanc-button>
  <fanc-button @click="showYearMonthMode = true">年月模式</fanc-button>
  
  <fanc-calendar 
    v-model:show="showMonthMode" 
    mode="month" 
  />
  
  <fanc-calendar 
    v-model:show="showYearMonthMode" 
    mode="year-month" 
  />
</template>

<script setup>
import { ref } from 'vue';

const showMonthMode = ref(false);
const showYearMonthMode = ref(false);
</script>
```

## 自定义周起始日

通过 `firstDayOfWeek` 属性可以自定义周起始日，默认为 `0`（周日），可选值为 `0-6`。

```vue
<template>
  <fanc-calendar 
    v-model:show="showCalendar" 
    :first-day-of-week="1" 
  />
</template>

<script setup>
import { ref } from 'vue';

const showCalendar = ref(false);
</script>
```

## 滚动模式

通过 `scroll` 属性可以设置日历为滚动模式，适用于需要展示大量日期的场景。

```vue
<template>
  <fanc-calendar 
    v-model:show="showCalendar" 
    scroll 
  />
</template>

<script setup>
import { ref } from 'vue';

const showCalendar = ref(false);
</script>
```

## 设置默认选中日期

通过 `defaultDate` 属性可以设置默认选中的日期。

```vue
<template>
  <fanc-calendar 
    v-model:show="showSingleCalendar" 
    type="single" 
    :default-date="singleDate" 
  />
  
  <fanc-calendar 
    v-model:show="showRangeCalendar" 
    type="range" 
    :default-date="rangeDate" 
  />
</template>

<script setup>
import { ref } from 'vue';

const showSingleCalendar = ref(false);
const showRangeCalendar = ref(false);

const singleDate = ref('2023-05-01');
const rangeDate = ref(['2023-05-01', '2023-05-07']);
</script>
```

## 限制可选日期范围

通过 `minDate` 和 `maxDate` 属性可以限制可选的日期范围。

```vue
<template>
  <fanc-calendar 
    v-model:show="showCalendar" 
    :min-date="minDate" 
    :max-date="maxDate" 
  />
</template>

<script setup>
import { ref } from 'vue';

const showCalendar = ref(false);
const minDate = ref('2023-05-01');
const maxDate = ref('2023-05-31');
</script>
```

## 自定义日期文案

通过 `textFormatter` 属性可以自定义日期文案。

```vue
<template>
  <fanc-calendar 
    v-model:show="showCalendar" 
    :text-formatter="textFormatter" 
  />
</template>

<script setup>
import { ref } from 'vue';

const showCalendar = ref(false);

const textFormatter = (date) => {
  const day = new Date(date).getDate();
  if (day === 1) {
    return '初一';
  }
  if (day === 15) {
    return '中旬';
  }
  return '';
};
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示日历 | _boolean_ | `false` |
| type | 选择类型，可选值为 `single` `multiple` `range` | _string_ | `single` |
| mode | 工具栏模式，可选值为 `year-month` `month` | _string_ | `month` |
| title | 日历标题 | _string_ | `日期选择` |
| subtitle | 日历副标题 | _string_ | - |
| position | 弹出位置，可选值为 `center` `bottom` | _string_ | `bottom` |
| round | 是否显示圆角 | _boolean_ | `true` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| closeable | 是否显示关闭图标 | _boolean_ | `true` |
| closeIconPosition | 关闭图标位置 | _string_ | `top-right` |
| zIndex | 弹出层层级 | _number \| string_ | `1000` |
| overlayClosable | 是否点击遮罩层关闭弹窗 | _boolean_ | `true` |
| showConfirm | 是否显示确认按钮 | _boolean_ | `true` |
| confirmText | 确认按钮文字 | _string_ | `确认` |
| firstDayOfWeek | 周起始日，0 表示周日，1-6 表示周一至周六 | _number_ | `0` |
| scroll | 是否使用滚动模式 | _boolean_ | `false` |
| showToolbar | 是否在滚动模式下显示年份切换工具栏 | _boolean_ | `true` |
| scrollWithAnimation | 是否在滚动时使用动画效果 | _boolean_ | `true` |
| scrollAnimationDuration | 滚动动画持续时间(ms) | _number_ | `100` |
| defaultDate | 默认选中的日期，type 为 single 时为字符串，multiple/range 时为数组 | _string \| array_ | - |
| minDate | 可选择的最小日期 | _string \| array_ | - |
| maxDate | 可选择的最大日期 | _string \| array_ | - |
| textFormatter | 日期文案格式化函数 | _function_ | - |
| customClass | 自定义类名 | _string_ | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选择日期时触发 | _value: string \| array_ |
| confirm | 点击确认按钮时触发 | _value: string \| array_ |
| close | 关闭弹窗时触发 | - | 