# fanc-date-picker 日期选择器组件

## 组件介绍

`fanc-date-picker` 是一个日期选择器组件，用于选择年、月、日等日期信息。它支持多种日期格式，可以设置日期范围，并提供了丰富的自定义选项，适用于表单、预约、日程安排等场景。

## 组件特性

- 支持四种选择模式：年月日、年月、月日、年
- 支持设置日期范围
- 支持自定义日期后缀
- 支持圆角样式
- 支持自定义标题和按钮文本
- 支持禁用状态
- 支持设置默认选中日期
- 支持自定义选择器高度
- 与弹出层组件结合使用

## 组件用法

### 基础用法

```vue
<template>
  <view>
    <fanc-button @click="showPicker = true">选择日期</fanc-button>
    <fanc-date-picker
      v-model:show="showPicker"
      @confirm="onConfirm"
      @cancel="onCancel"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      showPicker: false
    }
  },
  methods: {
    onConfirm(value) {
      console.log('选中日期:', value.text);
      console.log('时间戳:', value.value);
      console.log('年份:', value.year);
      console.log('月份:', value.month);
      console.log('日期:', value.day);
    },
    onCancel() {
      console.log('取消选择');
    }
  }
}
</script>
```

### 选择不同类型的日期

```vue
<!-- 选择年月日 -->
<fanc-date-picker
  v-model:show="showDatePicker"
  type="date"
  title="选择年月日"
  @confirm="onConfirm"
/>

<!-- 选择年月 -->
<fanc-date-picker
  v-model:show="showYearMonthPicker"
  type="year-month"
  title="选择年月"
  @confirm="onConfirm"
/>

<!-- 选择月日 -->
<fanc-date-picker
  v-model:show="showMonthDayPicker"
  type="month-day"
  title="选择月日"
  @confirm="onConfirm"
/>

<!-- 选择年份 -->
<fanc-date-picker
  v-model:show="showYearPicker"
  type="year"
  title="选择年份"
  @confirm="onConfirm"
/>
```

### 设置日期范围

```vue
<fanc-date-picker
  v-model:show="showPicker"
  :min-date="minDate"
  :max-date="maxDate"
  @confirm="onConfirm"
/>
```

```javascript
data() {
  return {
    showPicker: false,
    // 设置最小日期为2020年1月1日
    minDate: new Date(2020, 0, 1).getTime(),
    // 设置最大日期为2025年12月31日
    maxDate: new Date(2025, 11, 31).getTime()
  }
}
```

### 设置默认选中日期

```vue
<fanc-date-picker
  v-model:show="showPicker"
  :default-date="defaultDate"
  @confirm="onConfirm"
/>
```

```javascript
data() {
  return {
    showPicker: false,
    // 设置默认选中日期为2023年5月1日
    defaultDate: new Date(2023, 4, 1).getTime()
    // 也可以使用字符串格式
    // defaultDate: '2023-05-01'
  }
}
```

### 自定义日期后缀

```vue
<fanc-date-picker
  v-model:show="showPicker"
  year-suffix=""
  month-suffix="月"
  day-suffix="号"
  @confirm="onConfirm"
/>
```

### 自定义样式

```vue
<fanc-date-picker
  v-model:show="showPicker"
  :round="true"
  height="250px"
  confirm-text="完成"
  cancel-text="返回"
  title="请选择日期"
  @confirm="onConfirm"
/>
```

### 监听选择变化

```vue
<fanc-date-picker
  v-model:show="showPicker"
  @change="onChange"
  @confirm="onConfirm"
/>
```

```javascript
methods: {
  onChange(event) {
    console.log('选择变化:', event.detail.value);
  },
  onConfirm(value) {
    console.log('确认选择:', value);
  }
}
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示选择器 | Boolean | `false` |
| type | 选择器类型，可选值为 `date` `year-month` `month-day` `year` | String | `date` |
| title | 选择器标题 | String | `选择日期` |
| confirm-text | 确认按钮文字 | String | `确认` |
| cancel-text | 取消按钮文字 | String | `取消` |
| show-toolbar | 是否显示顶部栏 | Boolean | `true` |
| disabled | 是否禁用 | Boolean | `false` |
| height | 选择器高度 | String | `220px` |
| overlay | 是否显示遮罩层 | Boolean | `true` |
| round | 是否圆角 | Boolean | `true` |
| year-suffix | 年份后缀 | String | `年` |
| month-suffix | 月份后缀 | String | `月` |
| day-suffix | 日期后缀 | String | `日` |
| closeable | 是否显示关闭图标 | Boolean | `false` |
| duration | 动画时长，单位为毫秒 | Number \| String | `300` |
| min-date | 可选的最小日期（时间戳或YYYY-MM-DD格式） | Number \| String | 当前日期的前10年 |
| max-date | 可选的最大日期（时间戳或YYYY-MM-DD格式） | Number \| String | 当前日期的后10年 |
| default-date | 默认选中的日期（时间戳或YYYY-MM-DD格式） | Number \| String | 当前日期 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确认按钮时触发 | value: { value, text, year, month, day } |
| cancel | 点击取消按钮时触发 | - |
| change | 选项变化时触发 | event: { detail: { value } } |
| close | 关闭时触发 | - |
| update:show | 更新show属性时触发 | show: 是否显示 |

### 回调参数说明

| 参数 | 说明 |
| --- | --- |
| value | 选中日期的时间戳 |
| text | 选中日期的文本表示，格式根据type不同而变化 |
| year | 选中的年份 |
| month | 选中的月份（1-12） |
| day | 选中的日期（1-31） |

## 注意事项

1. 日期选择器需要配合弹出层组件使用，通过 `v-model:show` 控制显示状态
2. 选择器类型 `type` 决定了日期的展示格式：
   - `date`: 年月日选择器，返回格式为 `YYYY-MM-DD`
   - `year-month`: 年月选择器，返回格式为 `YYYY-MM`
   - `month-day`: 月日选择器，返回格式为 `MM-DD`
   - `year`: 年份选择器，返回格式为 `YYYY`
3. `min-date` 和 `max-date` 可以限制可选日期的范围，支持时间戳或 `YYYY-MM-DD` 格式
4. `default-date` 用于设置默认选中的日期，如果不设置则默认选中当前日期
5. 月份和日期在内部会自动补零，例如 `2023-01-01`
6. 在 `month-day` 模式下，年份会使用当前年份
7. 选择器会根据当前选中的年月自动计算可选的天数，避免出现无效日期
8. 可以通过自定义后缀来适应不同的语言和地区习惯 