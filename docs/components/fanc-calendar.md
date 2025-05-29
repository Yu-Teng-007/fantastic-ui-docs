# fanc-calendar 日历组件

## 组件介绍

`fanc-calendar` 是一个功能丰富的日历选择器组件，支持单选、多选和范围选择等多种模式。它提供了弹出式界面，可以方便地进行日期选择，适用于预约、日程安排、酒店入住离店日期选择等多种场景。

## 组件特性

- 支持单选、多选、日期范围选择三种模式
- 支持普通模式和滚动模式两种展示方式
- 支持自定义周起始日
- 支持设置日期选择范围
- 支持自定义日期文本显示
- 支持年月切换和仅月份切换两种工具栏模式
- 支持弹出位置和样式自定义
- 支持确认按钮控制
- 提供丰富的事件回调

## 组件用法

### 基础用法

```vue
<template>
  <view>
    <fanc-button @click="showCalendar = true">选择日期</fanc-button>
    <fanc-calendar
      v-model:show="showCalendar"
      @confirm="onConfirm"
      @close="onClose"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      showCalendar: false
    }
  },
  methods: {
    onConfirm(dates) {
      console.log('选中的日期:', dates);
    },
    onClose() {
      console.log('日历关闭');
    }
  }
}
</script>
```

### 选择类型

```vue
<!-- 单选模式（默认） -->
<fanc-calendar
  v-model:show="showSingleCalendar"
  type="single"
  @confirm="onConfirm"
/>

<!-- 多选模式 -->
<fanc-calendar
  v-model:show="showMultipleCalendar"
  type="multiple"
  @confirm="onConfirm"
/>

<!-- 范围选择模式 -->
<fanc-calendar
  v-model:show="showRangeCalendar"
  type="range"
  @confirm="onConfirm"
/>
```

### 自定义标题和按钮文字

```vue
<fanc-calendar
  v-model:show="showCalendar"
  title="请选择日期"
  subtitle="选择您的预约日期"
  confirm-text="完成"
/>
```

### 自定义周起始日

```vue
<!-- 以周一为一周的开始 -->
<fanc-calendar
  v-model:show="showCalendar"
  :first-day-of-week="1"
/>
```

### 设置日期范围

```vue
<fanc-calendar
  v-model:show="showCalendar"
  :min-date="minDate"
  :max-date="maxDate"
/>
```

```javascript
data() {
  return {
    showCalendar: false,
    // 设置最小日期为当前日期
    minDate: new Date(),
    // 设置最大日期为三个月后
    maxDate: new Date(new Date().setMonth(new Date().getMonth() + 3))
  }
}
```

### 默认选中日期

```vue
<!-- 单选模式下设置默认日期 -->
<fanc-calendar
  v-model:show="showCalendar"
  type="single"
  :default-date="defaultDate"
/>

<!-- 多选模式下设置默认日期 -->
<fanc-calendar
  v-model:show="showCalendar"
  type="multiple"
  :default-date="defaultDates"
/>

<!-- 范围选择模式下设置默认日期范围 -->
<fanc-calendar
  v-model:show="showCalendar"
  type="range"
  :default-date="defaultDateRange"
/>
```

```javascript
data() {
  return {
    showCalendar: false,
    // 单选默认日期
    defaultDate: '2023-05-01',
    // 多选默认日期
    defaultDates: ['2023-05-01', '2023-05-15', '2023-05-30'],
    // 范围选择默认日期
    defaultDateRange: ['2023-05-01', '2023-05-07']
  }
}
```

### 自定义日期文本

```vue
<fanc-calendar
  v-model:show="showCalendar"
  :text-formatter="textFormatter"
/>
```

```javascript
methods: {
  textFormatter(date) {
    const day = date.getDate();
    
    // 在特定日期下方显示文本
    if (day === 10) return '休息';
    if (day === 15) return '出差';
    if (day === 20) return '会议';
    
    // 周末显示"休"
    const weekday = date.getDay();
    if (weekday === 0 || weekday === 6) return '休';
    
    return '';
  }
}
```

### 滚动模式

```vue
<fanc-calendar
  v-model:show="showCalendar"
  :scroll="true"
  :show-toolbar="true"
  :scroll-with-animation="true"
  :scroll-animation-duration="300"
/>
```

### 工具栏模式

```vue
<!-- 年月切换模式 -->
<fanc-calendar
  v-model:show="showCalendar"
  mode="year-month"
/>

<!-- 仅月份切换模式（默认） -->
<fanc-calendar
  v-model:show="showCalendar"
  mode="month"
/>
```

### 弹出位置和样式

```vue
<!-- 从底部弹出（默认） -->
<fanc-calendar
  v-model:show="showCalendar"
  position="bottom"
  :round="true"
/>

<!-- 从中间弹出 -->
<fanc-calendar
  v-model:show="showCalendar"
  position="center"
  :round="false"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示日历 | Boolean | `false` |
| type | 选择类型，可选值为 `single` `multiple` `range` | String | `single` |
| mode | 工具栏模式，可选值为 `year-month` `month` | String | `month` |
| title | 日历标题 | String | - |
| subtitle | 日历副标题 | String | - |
| position | 弹出位置，可选值为 `center` `bottom` | String | `bottom` |
| round | 是否显示圆角 | Boolean | `true` |
| overlay | 是否显示遮罩层 | Boolean | `true` |
| closeable | 是否显示关闭图标 | Boolean | `true` |
| close-icon-position | 关闭图标位置 | String | `top-right` |
| z-index | 弹出层层级 | Number \| String | `1000` |
| overlay-closable | 是否点击遮罩层关闭弹窗 | Boolean | `true` |
| show-confirm | 是否显示确认按钮 | Boolean | `true` |
| confirm-text | 确认按钮文字 | String | `确认` |
| first-day-of-week | 周起始日，0表示周日，1-6表示周一至周六 | Number | `0` |
| scroll | 是否使用滚动模式 | Boolean | `false` |
| show-toolbar | 是否在滚动模式下显示年份切换工具栏 | Boolean | `true` |
| scroll-with-animation | 是否在滚动时使用动画效果 | Boolean | `true` |
| scroll-animation-duration | 滚动动画持续时间(毫秒) | Number | `100` |
| default-date | 默认选中的日期，type为single时为字符串，multiple/range时为数组 | String \| Array \| Date | - |
| min-date | 可选择的最小日期 | String \| Date | - |
| max-date | 可选择的最大日期 | String \| Date | - |
| text-formatter | 日期文案格式化函数 | Function | - |
| custom-class | 自定义类名 | String | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确认按钮时触发 | dates: 选中的日期数组 |
| change | 选择日期时触发 | dates: 选中的日期数组 |
| close | 关闭弹窗时触发 | - |
| update:show | 更新show属性时触发 | show: 是否显示 |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容，显示在日历下方 |

## 注意事项

1. 日期格式统一使用 `YYYY-MM-DD` 格式的字符串
2. 范围选择（`type="range"`）支持选择同一天作为起止日期
3. 滚动模式（`scroll=true`）下只支持切换年份，不支持切换月份
4. 多选模式（`type="multiple"`）下，可以通过再次点击已选中的日期来取消选择
5. 范围选择模式下，选择了开始日期后，会自动进入结束日期的选择状态
6. `text-formatter` 函数接收日期对象作为参数，返回的字符串会显示在日期下方
7. 设置 `first-day-of-week` 可以自定义一周的起始日，适应不同国家和地区的习惯
8. 在滚动模式下，可以通过 `show-toolbar` 控制是否显示年份切换工具栏
9. 默认情况下，日历会显示确认按钮，可以通过 `show-confirm` 来控制是否显示 