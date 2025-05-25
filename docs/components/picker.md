# Picker 选择器

选择器组件，支持单列选择和多列选择，通常与弹出层组件配合使用。

## 基础用法

通过 `v-model:show` 控制选择器的显示与隐藏，通过 `@confirm` 事件获取选择的值。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="选择城市"
    :value="value"
    placeholder="点击选择城市"
    @click="showPicker = true"
  />
  <fanc-picker
    v-model:show="showPicker"
    title="选择城市"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script setup>
import { ref } from "vue";

const showPicker = ref(false);
const value = ref("");
const columns = [
  { text: "北京", value: "beijing" },
  { text: "上海", value: "shanghai" },
  { text: "广州", value: "guangzhou" },
  { text: "深圳", value: "shenzhen" },
  { text: "杭州", value: "hangzhou" },
];

const onConfirm = (val, index) => {
  value.value = val.text;
  showPicker.value = false;
};

const onCancel = () => {
  showPicker.value = false;
};
</script>
```

## 默认选中项

通过 `defaultIndex` 属性可以设置默认选中项的索引。

```vue
<template>
  <fanc-picker
    v-model:show="showPicker"
    title="选择城市"
    :columns="columns"
    :default-index="2"
    @confirm="onConfirm"
  />
</template>
```

## 多列选择

通过二维数组的形式配置 `columns` 可以实现多列选择。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="选择时间"
    :value="value"
    placeholder="点击选择时间"
    @click="showPicker = true"
  />
  <fanc-picker
    v-model:show="showPicker"
    title="选择时间"
    :columns="columns"
    @confirm="onConfirm"
  />
</template>

<script setup>
import { ref } from "vue";

const showPicker = ref(false);
const value = ref("");

const columns = [
  // 第一列
  [
    { text: "上午", value: "morning" },
    { text: "下午", value: "afternoon" },
  ],
  // 第二列
  [
    { text: "1点", value: "1" },
    { text: "2点", value: "2" },
    { text: "3点", value: "3" },
    { text: "4点", value: "4" },
    { text: "5点", value: "5" },
  ],
];

const onConfirm = (val, index) => {
  value.value = `${val[0].text} ${val[1].text}`;
  showPicker.value = false;
};
</script>
```

## 级联选择

通过 `cascade` 属性可以开启级联选择模式，此时 `columns` 的数据结构需要包含 `children` 字段。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="选择地区"
    :value="value"
    placeholder="点击选择地区"
    @click="showPicker = true"
  />
  <fanc-picker
    v-model:show="showPicker"
    title="选择地区"
    cascade
    :columns="columns"
    @confirm="onConfirm"
  />
</template>

<script setup>
import { ref } from "vue";

const showPicker = ref(false);
const value = ref("");

const columns = [
  {
    text: "广东省",
    value: "guangdong",
    children: [
      {
        text: "广州市",
        value: "guangzhou",
        children: [
          { text: "天河区", value: "tianhe" },
          { text: "海珠区", value: "haizhu" },
        ],
      },
      {
        text: "深圳市",
        value: "shenzhen",
        children: [
          { text: "南山区", value: "nanshan" },
          { text: "福田区", value: "futian" },
        ],
      },
    ],
  },
  {
    text: "浙江省",
    value: "zhejiang",
    children: [
      {
        text: "杭州市",
        value: "hangzhou",
        children: [
          { text: "西湖区", value: "xihu" },
          { text: "余杭区", value: "yuhang" },
        ],
      },
    ],
  },
];

const onConfirm = (val, index) => {
  value.value = val.map((item) => item.text).join("/");
  showPicker.value = false;
};
</script>
```

## 自定义选项高度

通过 `itemHeight` 属性可以自定义选项的高度。

```vue
<template>
  <fanc-picker
    v-model:show="showPicker"
    title="选择城市"
    :columns="columns"
    :item-height="60"
    @confirm="onConfirm"
  />
</template>
```

## 加载状态

通过 `loading` 属性可以显示加载状态。

```vue
<template>
  <fanc-picker
    v-model:show="showPicker"
    title="选择城市"
    :columns="columns"
    loading
    @confirm="onConfirm"
  />
</template>
```

## 自定义按钮文字

通过 `confirmText` 和 `cancelText` 属性可以自定义按钮文字。

```vue
<template>
  <fanc-picker
    v-model:show="showPicker"
    title="选择城市"
    :columns="columns"
    confirm-text="确定"
    cancel-text="取消"
    @confirm="onConfirm"
  />
</template>
```

## 自定义列标题

通过 `columnsTitle` 属性可以设置每列的标题。

```vue
<template>
  <fanc-picker
    v-model:show="showPicker"
    title="选择时间"
    :columns="columns"
    :columns-title="['时段', '时间']"
    @confirm="onConfirm"
  />
</template>
```

## API

### Props

| 参数                | 说明                                           | 类型                     | 默认值     |
| ------------------- | ---------------------------------------------- | ------------------------ | ---------- |
| show                | 是否显示选择器                                 | _boolean_                | `false`    |
| title               | 选择器标题                                     | _string_                 | -          |
| confirmText         | 确认按钮文字                                   | _string_                 | `确认`     |
| cancelText          | 取消按钮文字                                   | _string_                 | `取消`     |
| columns             | 对象数组，配置每一列显示的数据                 | _Column[] \| Column[][]_ | `[]`       |
| columnsTitle        | 列标题                                         | _string[]_               | `[]`       |
| defaultIndex        | 单列选择时，默认选中项的索引                   | _number \| number[]_     | `0`        |
| itemHeight          | 选项高度，单位为 px                            | _number_                 | `44`       |
| visibleItemCount    | 可见的选项个数                                 | _number_                 | `5`        |
| cascade             | 是否开启级联选择                               | _boolean_                | `false`    |
| loading             | 是否显示加载状态                               | _boolean_                | `false`    |
| showToolbar         | 是否显示顶部栏                                 | _boolean_                | `true`     |
| valueKey            | 选项对象中，文字对应的键名                     | _string_                 | `text`     |
| textKey             | 选项对象中，文字对应的键名                     | _string_                 | `text`     |
| childrenKey         | 选项对象中，子选项对应的键名                   | _string_                 | `children` |
| closeOnClickOverlay | 是否在点击遮罩层后关闭                         | _boolean_                | `true`     |
| teleport            | 指定挂载的节点，等同于 Teleport 组件的 to 属性 | _string \| Element_      | -          |

### Events

| 事件名  | 说明               | 回调参数                                                |
| ------- | ------------------ | ------------------------------------------------------- |
| confirm | 点击确认按钮时触发 | _value: any, index: number \| number[]_                 |
| cancel  | 点击取消按钮时触发 | -                                                       |
| change  | 选项改变时触发     | _value: any, index: number \| number[], column: number_ |
| close   | 关闭时触发         | -                                                       |

### Slots

| 名称    | 说明             |
| ------- | ---------------- |
| default | 自定义选择器内容 |
| title   | 自定义标题内容   |
| toolbar | 自定义工具栏内容 |

### Column 数据结构

| 键名     | 说明             | 类型       |
| -------- | ---------------- | ---------- |
| text     | 选项文字         | _string_   |
| value    | 选项对应的值     | _any_      |
| disabled | 是否禁用选项     | _boolean_  |
| children | 级联选择的子选项 | _Column[]_ |
