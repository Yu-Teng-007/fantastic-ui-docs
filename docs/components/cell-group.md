# CellGroup 单元格组

单元格组件件，用于将多个单元格组合在一起，提供统一的外观和间距。

## 基础用法

将多个 `Cell` 组件包裹在 `CellGroup` 组件内。

```vue
<template>
  <fanc-cell-group>
    <fanc-cell title="单元格" content="内容" />
    <fanc-cell title="单元格" content="内容" />
  </fanc-cell-group>
</template>
```

## 分组标题

通过 `title` 属性可以设置分组标题。

```vue
<template>
  <fanc-cell-group title="基础信息">
    <fanc-cell title="姓名" content="张三" />
    <fanc-cell title="电话" content="13800138000" />
  </fanc-cell-group>

  <fanc-cell-group title="其他信息">
    <fanc-cell title="地址" content="广州市天河区" />
    <fanc-cell title="邮编" content="510000" />
  </fanc-cell-group>
</template>
```

## 分组描述

通过 `description` 属性可以设置分组描述。

```vue
<template>
  <fanc-cell-group title="基础信息" description="用户的基本个人信息">
    <fanc-cell title="姓名" content="张三" />
    <fanc-cell title="电话" content="13800138000" />
  </fanc-cell-group>
</template>
```

## 卡片风格

通过 `card` 属性可以设置卡片风格，卡片风格的单元格组会有圆角和外边距。

```vue
<template>
  <fanc-cell-group title="卡片风格" card>
    <fanc-cell title="单元格" content="内容" />
    <fanc-cell title="单元格" content="内容" />
  </fanc-cell-group>
</template>
```

## 自定义样式

通过 `custom-class` 属性可以自定义单元格组的样式。

```vue
<template>
  <fanc-cell-group title="自定义样式" custom-class="custom-cell-group">
    <fanc-cell title="单元格" content="内容" />
    <fanc-cell title="单元格" content="内容" />
  </fanc-cell-group>
</template>

<style>
.custom-cell-group {
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(100, 101, 102, 0.12);
}
</style>
```

## 可折叠的分组

通过 `collapsible` 属性可以设置分组是否可折叠，通过 `collapsed` 属性控制初始状态。

```vue
<template>
  <fanc-cell-group
    title="可折叠分组"
    collapsible
    :collapsed="collapsed"
    @toggle="onToggle"
  >
    <fanc-cell title="单元格" content="内容" />
    <fanc-cell title="单元格" content="内容" />
  </fanc-cell-group>
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "fantastic-ui";

const collapsed = ref(false);

const onToggle = (status) => {
  collapsed.value = status;
  showToast(`分组已${status ? "折叠" : "展开"}`);
};
</script>
```

## API

### Props

| 参数        | 说明             | 类型      | 默认值  |
| ----------- | ---------------- | --------- | ------- |
| title       | 分组标题         | _string_  | -       |
| description | 分组描述         | _string_  | -       |
| border      | 是否显示外边框   | _boolean_ | `true`  |
| card        | 是否使用卡片风格 | _boolean_ | `false` |
| collapsible | 是否可折叠       | _boolean_ | `false` |
| collapsed   | 是否默认折叠     | _boolean_ | `false` |
| customClass | 自定义类名       | _string_  | -       |
| customStyle | 自定义样式       | _object_  | -       |

### Events

| 事件名 | 说明               | 回调参数             |
| ------ | ------------------ | -------------------- |
| toggle | 点击折叠按钮时触发 | _collapsed: boolean_ |

### Slots

| 名称        | 说明                         |
| ----------- | ---------------------------- |
| default     | 默认插槽，用于放置 Cell 组件 |
| title       | 自定义标题                   |
| description | 自定义描述                   |
| right       | 自定义右侧内容               |
