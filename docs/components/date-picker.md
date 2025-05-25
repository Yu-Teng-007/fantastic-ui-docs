# DatePicker 日期选择器

日期选择器组件，用于选择年、月、日，通常与弹出层组件配合使用。

## 基础用法

通过 `v-model:show` 控制选择器的显示与隐藏，通过 `@confirm` 事件获取选择的日期。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="选择日期"
    :value="date"
    placeholder="点击选择日期"
    @click="showPicker = true"
  />
  <fanc-date-picker
    v-model:show="showPicker"
    title="选择日期"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script setup>
import { ref } from "vue";

const showPicker = ref(false);
const date = ref("");

const onConfirm = (value) => {
  date.value = value;
  showPicker.value = false;
};

const onCancel = () => {
  showPicker.value = false;
};
</script>
```

## 选择器类型

通过 `type` 属性可以设置选择器类型，支持选择 `date`（年月日）、`year-month`（年月）、`month-day`（月日）和 `year`（年）。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="选择年月"
    :value="yearMonth"
    placeholder="点击选择年月"
    @click="showYearMonthPicker = true"
  />
  <fanc-date-picker
    v-model:show="showYearMonthPicker"
    type="year-month"
    title="选择年月"
    @confirm="onYearMonthConfirm"
  />

  <fanc-field
    readonly
    clickable
    label="选择月日"
    :value="monthDay"
    placeholder="点击选择月日"
    @click="showMonthDayPicker = true"
  />
  <fanc-date-picker
    v-model:show="showMonthDayPicker"
    type="month-day"
    title="选择月日"
    @confirm="onMonthDayConfirm"
  />

  <fanc-field
    readonly
    clickable
    label="选择年份"
    :value="year"
    placeholder="点击选择年份"
    @click="showYearPicker = true"
  />
  <fanc-date-picker
    v-model:show="showYearPicker"
    type="year"
    title="选择年份"
    @confirm="onYearConfirm"
  />
</template>

<script setup>
import { ref } from "vue";

const showYearMonthPicker = ref(false);
const showMonthDayPicker = ref(false);
const showYearPicker = ref(false);
const yearMonth = ref("");
const monthDay = ref("");
const year = ref("");

const onYearMonthConfirm = (value) => {
  yearMonth.value = value;
  showYearMonthPicker.value = false;
};

const onMonthDayConfirm = (value) => {
  monthDay.value = value;
  showMonthDayPicker.value = false;
};

const onYearConfirm = (value) => {
  year.value = value;
  showYearPicker.value = false;
};
</script>
```

## 自定义日期范围

通过 `minDate` 和 `maxDate` 属性可以设置可选的日期范围。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="选择日期"
    :value="date"
    placeholder="点击选择日期"
    @click="showPicker = true"
  />
  <fanc-date-picker
    v-model:show="showPicker"
    title="选择日期"
    :min-date="minDate"
    :max-date="maxDate"
    @confirm="onConfirm"
  />
</template>

<script setup>
import { ref } from "vue";

const showPicker = ref(false);
const date = ref("");
// 设置可选范围为当前日期的前后三个月
const now = new Date();
const minDate = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
const maxDate = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate());

const onConfirm = (value) => {
  date.value = value;
  showPicker.value = false;
};
</script>
```

## 自定义日期文案

通过 `yearSuffix`、`monthSuffix` 和 `daySuffix` 属性可以自定义年月日的后缀文案。

```vue
<template>
  <fanc-date-picker
    v-model:show="showPicker"
    title="选择日期"
    year-suffix="年"
    month-suffix="月"
    day-suffix="日"
    @confirm="onConfirm"
  />
</template>
```

## 设置默认选中日期

通过 `defaultDate` 属性可以设置默认选中的日期。

```vue
<template>
  <fanc-date-picker
    v-model:show="showPicker"
    title="选择日期"
    :default-date="defaultDate"
    @confirm="onConfirm"
  />
</template>

<script setup>
import { ref } from "vue";

const showPicker = ref(false);
const defaultDate = new Date(2023, 0, 1); // 2023年1月1日
</script>
```

## 自定义按钮文字

通过 `confirmText` 和 `cancelText` 属性可以自定义确认和取消按钮的文字。

```vue
<template>
  <fanc-date-picker
    v-model:show="showPicker"
    title="选择日期"
    confirm-text="确定"
    cancel-text="取消"
    @confirm="onConfirm"
  />
</template>
```

## 隐藏工具栏

通过 `showToolbar` 属性可以控制是否显示顶部工具栏。

```vue
<template>
  <fanc-date-picker
    v-model:show="showPicker"
    :show-toolbar="false"
    @confirm="onConfirm"
  />
</template>
```

## 指定挂载位置

通过 `teleport` 属性可以指定选择器挂载的位置。

```vue
<template>
  <fanc-date-picker
    v-model:show="showPicker"
    title="选择日期"
    teleport="body"
    @confirm="onConfirm"
  />
</template>
```

## API

### Props

| 参数                | 说明                                                        | 类型                | 默认值     |
| ------------------- | ----------------------------------------------------------- | ------------------- | ---------- |
| show                | 是否显示选择器                                              | _boolean_           | `false`    |
| type                | 选择器类型，可选值为 `date` `year-month` `month-day` `year` | _string_            | `date`     |
| title               | 选择器标题                                                  | _string_            | `选择日期` |
| confirmText         | 确认按钮文字                                                | _string_            | `确认`     |
| cancelText          | 取消按钮文字                                                | _string_            | `取消`     |
| showToolbar         | 是否显示顶部栏                                              | _boolean_           | `true`     |
| disabled            | 是否禁用                                                    | _boolean_           | `false`    |
| height              | 选择器高度                                                  | _string_            | `220px`    |
| overlay             | 是否显示遮罩层                                              | _boolean_           | `true`     |
| round               | 是否圆角                                                    | _boolean_           | `true`     |
| yearSuffix          | 年份后缀                                                    | _string_            | `年`       |
| monthSuffix         | 月份后缀                                                    | _string_            | `月`       |
| daySuffix           | 日期后缀                                                    | _string_            | `日`       |
| closeable           | 是否显示关闭图标                                            | _boolean_           | `false`    |
| duration            | 动画时长，单位为毫秒                                        | _number \| string_  | `300`      |
| minDate             | 可选的最小日期（时间戳或 YYYY-MM-DD 格式）                  | _number \| string_  | 十年前     |
| maxDate             | 可选的最大日期（时间戳或 YYYY-MM-DD 格式）                  | _number \| string_  | 十年后     |
| defaultDate         | 默认选中的日期（时间戳或 YYYY-MM-DD 格式）                  | _number \| string_  | 当前日期   |
| teleport            | 指定挂载的节点，等同于 Teleport 组件的 to 属性              | _string \| Element_ | -          |
| closeOnClickOverlay | 是否在点击遮罩层后关闭                                      | _boolean_           | `true`     |
| safeAreaInsetBottom | 是否开启底部安全区适配                                      | _boolean_           | `true`     |

### Events

| 事件名  | 说明               | 回调参数                                                     |
| ------- | ------------------ | ------------------------------------------------------------ |
| confirm | 点击确认按钮时触发 | _value: string, selectedValues: Array, selectedIndex: Array_ |
| cancel  | 点击取消按钮时触发 | -                                                            |
| change  | 选项变化时触发     | _value: string, selectedValues: Array, selectedIndex: Array_ |
| close   | 关闭时触发         | -                                                            |

### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 自定义选择器内容 |
| title   | 自定义标题内容   |
| toolbar | 自定义工具栏内容 |

```

```
