# ActionSheet 动作面板

动作面板组件，用于从底部弹出菜单给用户选择操作。

## 基础用法

通过 `v-model:show` 控制动作面板的显示与隐藏，通过 `actions` 属性设置菜单选项。

```vue
<template>
  <fanc-button type="primary" @click="showActionSheet = true">显示动作面板</fanc-button>
  <fanc-action-sheet 
    v-model:show="showActionSheet" 
    :actions="actions"
    @select="onSelect"
    @cancel="onCancel"
  />
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'fantastic-ui';

const showActionSheet = ref(false);

const actions = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' }
];

const onSelect = (item, index) => {
  showToast(`选中了${item.name}，索引为${index}`);
};

const onCancel = () => {
  showToast('取消操作');
};
</script>
```

## 展示标题和描述

通过 `title` 和 `description` 属性可以设置动作面板的标题和描述。

```vue
<template>
  <fanc-action-sheet 
    v-model:show="showActionSheet" 
    title="标题"
    description="这是一段描述文字"
    :actions="actions"
  />
</template>

<script setup>
import { ref } from 'vue';

const showActionSheet = ref(false);
const actions = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' }
];
</script>
```

## 选项状态

选项可以设置 `disabled` 和 `loading` 状态。

```vue
<template>
  <fanc-action-sheet 
    v-model:show="showActionSheet" 
    :actions="actions"
  />
</template>

<script setup>
import { ref } from 'vue';

const showActionSheet = ref(false);
const actions = [
  { name: '正常选项' },
  { name: '禁用选项', disabled: true },
  { name: '加载中选项', loading: true }
];
</script>
```

## 选项类型

通过 `type` 属性可以设置选项的类型，支持 `default`、`primary`、`success`、`warning`、`danger` 五种类型。

```vue
<template>
  <fanc-action-sheet 
    v-model:show="showActionSheet" 
    :actions="actions"
  />
</template>

<script setup>
import { ref } from 'vue';

const showActionSheet = ref(false);
const actions = [
  { name: '默认选项', type: 'default' },
  { name: '主要选项', type: 'primary' },
  { name: '成功选项', type: 'success' },
  { name: '警告选项', type: 'warning' },
  { name: '危险选项', type: 'danger' }
];
</script>
```

## 带图标的选项

通过 `icon` 属性可以为选项设置图标，通过 `iconSize` 和 `iconColor` 属性可以设置图标的大小和颜色。

```vue
<template>
  <fanc-action-sheet 
    v-model:show="showActionSheet" 
    :actions="actions"
  />
</template>

<script setup>
import { ref } from 'vue';

const showActionSheet = ref(false);
const actions = [
  { name: '拍照', icon: 'camera' },
  { name: '相册', icon: 'image', iconSize: '20', iconColor: '#07c160' },
  { name: '文件', icon: 'file-text' }
];
</script>
```

## 带副标题的选项

通过 `subname` 属性可以为选项设置副标题。

```vue
<template>
  <fanc-action-sheet 
    v-model:show="showActionSheet" 
    :actions="actions"
  />
</template>

<script setup>
import { ref } from 'vue';

const showActionSheet = ref(false);
const actions = [
  { name: '选项一', subname: '副标题一' },
  { name: '选项二', subname: '副标题二' },
  { name: '选项三', subname: '副标题三' }
];
</script>
```

## 宫格模式

通过 `gridMode` 属性可以设置动作面板为宫格模式，通过 `columnNumber` 属性可以设置宫格的列数。

```vue
<template>
  <fanc-action-sheet 
    v-model:show="showActionSheet" 
    :actions="actions"
    gridMode
    :columnNumber="3"
  />
</template>

<script setup>
import { ref } from 'vue';

const showActionSheet = ref(false);
const actions = [
  { name: '拍照', icon: 'camera' },
  { name: '相册', icon: 'image' },
  { name: '文件', icon: 'file-text' },
  { name: '位置', icon: 'location' },
  { name: '联系人', icon: 'user' },
  { name: '收藏', icon: 'star' }
];
</script>
```

## 分页功能

通过 `paginationEnabled` 属性可以启用分页功能，通过 `pageSize` 属性可以设置每页显示的选项数量。

```vue
<template>
  <fanc-action-sheet 
    v-model:show="showActionSheet" 
    :actions="actions"
    gridMode
    :columnNumber="4"
    paginationEnabled
    :pageSize="8"
    @pageChange="onPageChange"
  />
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'fantastic-ui';

const showActionSheet = ref(false);
const actions = Array.from({ length: 16 }, (_, index) => ({
  name: `选项${index + 1}`,
  icon: ['star', 'heart', 'bell', 'location'][index % 4]
}));

const onPageChange = (page) => {
  showToast(`切换到第 ${page + 1} 页`);
};
</script>
```

## 自定义样式

通过 `customStyle` 和 `customClass` 属性可以设置动作面板的自定义样式和类名。

```vue
<template>
  <fanc-action-sheet 
    v-model:show="showActionSheet" 
    :actions="actions"
    :customStyle="{ maxHeight: '60vh' }"
    customClass="custom-action-sheet"
  />
</template>

<script setup>
import { ref } from 'vue';

const showActionSheet = ref(false);
const actions = [
  { name: '选项一' },
  { name: '选项二' },
  { name: '选项三' },
  { name: '选项四', style: { color: '#ff5722' } }
];
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示动作面板 | _boolean_ | `false` |
| actions | 操作项数组 | _array_ | `[]` |
| title | 面板标题 | _string_ | - |
| description | 面板描述文字 | _string_ | - |
| cancelText | 取消按钮文字，不设置则不显示取消按钮 | _string_ | `取消` |
| overlay | 是否显示遮罩层 | _boolean_ | `true` |
| closeOnClickOverlay | 是否点击遮罩层后关闭 | _boolean_ | `true` |
| showClose | 是否显示关闭按钮 | _boolean_ | `false` |
| duration | 动画时长，单位为毫秒 | _number \| string_ | `300` |
| zIndex | 面板的z-index值 | _number \| string_ | `1000` |
| customStyle | 自定义面板样式 | _string \| object_ | - |
| customClass | 自定义面板类名 | _string_ | - |
| gridMode | 是否使用宫格模式 | _boolean_ | `false` |
| columnNumber | 宫格列数 | _number \| string_ | `4` |
| paginationEnabled | 是否启用分页功能 | _boolean_ | `false` |
| pagesCount | 分页总数，不传入则根据actions长度和pageSize自动计算 | _number_ | `1` |
| pageSize | 每页显示的项目数量 | _number_ | `8` |

### Action 数据结构

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| name | 标题 | _string_ |
| subname | 二级标题 | _string_ |
| disabled | 是否为禁用状态 | _boolean_ |
| loading | 是否为加载状态 | _boolean_ |
| icon | 图标名称 | _string_ |
| iconSize | 图标大小 | _string \| number_ |
| iconColor | 图标颜色 | _string_ |
| type | 选项类型，可选值为 `default` `primary` `success` `warning` `danger` | _string_ |
| style | 自定义样式 | _object_ |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 选中选项时触发 | _item: object, index: number_ |
| cancel | 点击取消按钮时触发 | - |
| close | 面板关闭时触发 | - |
| open | 面板打开时触发 | - |
| clickOverlay | 点击遮罩层时触发 | - |
| pageChange | 分页变化时触发 | _page: number_ | 