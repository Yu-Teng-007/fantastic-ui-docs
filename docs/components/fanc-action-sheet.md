# fanc-action-sheet 动作面板组件

## 组件介绍

`fanc-action-sheet` 是一个动作面板组件，用于从底部弹出菜单，给用户提供多个操作选项。它支持列表模式和宫格模式两种展示方式，可以满足不同场景下的操作需求。

## 组件特性

- 支持列表模式和宫格模式两种展示方式
- 支持自定义标题和描述文本
- 支持自定义操作项图标和样式
- 支持操作项禁用和加载状态
- 支持分页功能，适合大量操作项的场景
- 支持自定义关闭按钮和取消按钮
- 支持自定义样式和类名

## 组件用法

### 基础用法

```vue
<template>
  <fanc-button @click="show = true">显示动作面板</fanc-button>
  <fanc-action-sheet
    v-model:show="show"
    :actions="actions"
    @select="onSelect"
    @cancel="onCancel"
  />
</template>

<script>
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: '选项一' },
        { name: '选项二' },
        { name: '选项三' }
      ]
    }
  },
  methods: {
    onSelect(item, index) {
      console.log('选中项：', item, index);
    },
    onCancel() {
      console.log('取消');
    }
  }
}
</script>
```

### 带标题和描述

```vue
<fanc-action-sheet
  v-model:show="show"
  title="标题"
  description="这是一段描述文本"
  :actions="actions"
/>
```

### 展示取消按钮

```vue
<fanc-action-sheet
  v-model:show="show"
  :actions="actions"
  cancel-text="取消"
/>
```

### 展示关闭图标

```vue
<fanc-action-sheet
  v-model:show="show"
  :actions="actions"
  :show-close="true"
/>
```

### 自定义操作项

```vue
<fanc-action-sheet
  v-model:show="show"
  :actions="[
    { name: '选项一', subname: '描述信息' },
    { name: '选项二', icon: 'star', iconColor: '#1989fa' },
    { name: '选项三', disabled: true },
    { name: '选项四', loading: true },
    { name: '危险选项', type: 'danger' }
  ]"
/>
```

### 宫格模式

```vue
<fanc-action-sheet
  v-model:show="show"
  :actions="gridActions"
  :grid-mode="true"
  :column-number="3"
/>
```

```javascript
data() {
  return {
    gridActions: [
      { name: '拍照', icon: 'camera' },
      { name: '相册', icon: 'image' },
      { name: '文件', icon: 'file' },
      { name: '联系人', icon: 'user' },
      { name: '位置', icon: 'map-marker-alt' },
      { name: '收藏', icon: 'star' }
    ]
  }
}
```

### 分页功能

```vue
<fanc-action-sheet
  v-model:show="show"
  :actions="manyActions"
  :grid-mode="true"
  :pagination-enabled="true"
  :page-size="8"
  @page-change="onPageChange"
/>
```

```javascript
data() {
  return {
    manyActions: Array.from({ length: 20 }, (_, i) => ({
      name: `选项${i + 1}`,
      icon: 'star'
    }))
  }
},
methods: {
  onPageChange(page) {
    console.log('当前页:', page);
  }
}
```

### 禁止点击遮罩层关闭

```vue
<fanc-action-sheet
  v-model:show="show"
  :actions="actions"
  :close-on-click-overlay="false"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示动作面板 | Boolean | `false` |
| actions | 操作项数组 | Array | `[]` |
| title | 面板标题 | String | - |
| description | 面板描述文字 | String | - |
| cancel-text | 取消按钮文字，不设置则不显示取消按钮 | String | `取消` |
| overlay | 是否显示遮罩层 | Boolean | `true` |
| close-on-click-overlay | 是否点击遮罩层后关闭 | Boolean | `true` |
| show-close | 是否显示关闭按钮 | Boolean | `false` |
| duration | 动画时长，单位为毫秒 | Number \| String | `300` |
| z-index | 面板的z-index值 | Number \| String | `1000` |
| custom-style | 自定义面板样式 | String \| Object | - |
| custom-class | 自定义面板类名 | String | - |
| grid-mode | 是否使用宫格模式 | Boolean | `false` |
| column-number | 宫格列数 | Number \| String | `4` |
| pagination-enabled | 是否启用分页功能 | Boolean | `false` |
| pages-count | 分页总数，如果不传入则根据actions长度和pageSize自动计算 | Number | `1` |
| page-size | 每页显示的项目数量 | Number | `8` |

### Action 数据结构

操作项数组中的选项对象结构如下：

| 键名 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 标题 | String | - |
| subname | 二级标题，仅在列表模式下显示 | String | - |
| disabled | 是否为禁用状态 | Boolean | `false` |
| loading | 是否为加载状态 | Boolean | `false` |
| icon | 图标名称 | String | - |
| iconSize | 图标大小 | String \| Number | 列表模式：`18`，宫格模式：`28` |
| iconColor | 图标颜色 | String | - |
| type | 按钮类型，可选值为 `primary` `success` `warning` `danger` | String | - |
| style | 自定义样式 | Object | - |
| closeOnSelect | 是否在点击后关闭菜单 | Boolean | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 选中选项时触发 | item: 选项对象, index: 选项索引 |
| cancel | 点击取消按钮时触发 | - |
| close | 面板关闭时触发 | - |
| open | 面板打开时触发 | - |
| click-overlay | 点击遮罩层时触发 | - |
| page-change | 分页变化时触发 | page: 当前页码（从0开始） |
| update:show | 更新show属性时触发 | value: Boolean |

## 注意事项

1. 使用 `v-model:show` 可以双向绑定面板的显示状态
2. 操作项数组中的每个选项必须包含 `name` 属性
3. 宫格模式适合展示有图标的操作项，列表模式适合展示有详细描述的操作项
4. 当操作项数量较多时，建议启用分页功能
5. 可以通过 `type` 属性设置操作项的样式类型，支持 `primary`、`success`、`warning` 和 `danger` 四种类型
6. 设置 `closeOnSelect: false` 可以阻止点击操作项后自动关闭面板
7. 使用 `loading` 和 `disabled` 属性可以控制操作项的状态 