# SwipeCell 滑动单元格

滑动单元格组件，用于实现左右滑动显示操作按钮的单元格。

## 基础用法

`SwipeCell` 组件提供了 `left` 和 `right` 两个插槽，分别用于定义左侧和右侧滑动区域的内容。

```vue
<template>
  <fanc-swipe-cell>
    <template #left>
      <view class="left-slot">收藏</view>
    </template>
    <view class="content">单元格内容</view>
    <template #right>
      <view class="right-slot">删除</view>
    </template>
  </fanc-swipe-cell>
</template>

<style>
.left-slot {
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2979ff;
  color: white;
}

.content {
  width: 100%;
  padding: 15px;
  background-color: white;
}

.right-slot {
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff3b30;
  color: white;
}
</style>
```

## 自定义滑动区域宽度

通过 `left-width` 和 `right-width` 属性可以自定义左右滑动区域的宽度。

```vue
<template>
  <fanc-swipe-cell :left-width="100" :right-width="120">
    <template #left>
      <view class="left-slot">收藏</view>
    </template>
    <view class="content">单元格内容</view>
    <template #right>
      <view class="right-slot">删除</view>
    </template>
  </fanc-swipe-cell>
</template>
```

## 禁用滑动

通过 `disabled` 属性可以禁用滑动功能。

```vue
<template>
  <fanc-swipe-cell disabled>
    <template #left>
      <view class="left-slot">收藏</view>
    </template>
    <view class="content">禁用滑动</view>
    <template #right>
      <view class="right-slot">删除</view>
    </template>
  </fanc-swipe-cell>
</template>
```

## 点击事件

`SwipeCell` 组件提供了 `click` 事件，可以在点击单元格时触发。

```vue
<template>
  <fanc-swipe-cell @click="onClick">
    <view class="content">点击单元格</view>
    <template #right>
      <view class="right-slot">删除</view>
    </template>
  </fanc-swipe-cell>
</template>

<script setup>
import { showToast } from 'fantastic-ui';

const onClick = () => {
  showToast('点击单元格');
};
</script>
```

## 阈值设置

通过 `threshold` 属性可以设置滑动阈值，即滑动多少比例才会触发菜单展示，取值范围为 0-1。

```vue
<template>
  <fanc-swipe-cell :threshold="0.5">
    <view class="content">需要滑动超过一半才会展开菜单</view>
    <template #right>
      <view class="right-slot">删除</view>
    </template>
  </fanc-swipe-cell>
</template>
```

## 监听开关状态

通过 `open` 和 `close` 事件可以监听单元格打开和关闭状态。

```vue
<template>
  <fanc-swipe-cell @open="onOpen" @close="onClose">
    <view class="content">监听开关状态</view>
    <template #right>
      <view class="right-slot">删除</view>
    </template>
  </fanc-swipe-cell>
</template>

<script setup>
import { showToast } from 'fantastic-ui';

const onOpen = (event) => {
  showToast(`打开 ${event.position} 侧菜单`);
};

const onClose = () => {
  showToast('关闭菜单');
};
</script>
```

## 禁止自动关闭

默认情况下，点击单元格内容会自动关闭侧边菜单。通过 `auto-close` 属性可以控制是否启用该功能。

```vue
<template>
  <fanc-swipe-cell :auto-close="false">
    <view class="content">点击内容不会自动关闭菜单</view>
    <template #right>
      <view class="right-slot">删除</view>
    </template>
  </fanc-swipe-cell>
</template>
```

## 指定禁止自动关闭的元素

通过 `disable-close-names` 属性可以指定哪些元素点击时不会自动关闭菜单。

```vue
<template>
  <fanc-swipe-cell :disable-close-names="['no-close']">
    <view class="content">
      <view>正常点击区域</view>
      <view class="no-close">点击此处不会关闭菜单</view>
    </view>
    <template #right>
      <view class="right-slot">删除</view>
    </template>
  </fanc-swipe-cell>
</template>
```

## 与列表组件结合使用

`SwipeCell` 组件通常与列表组件结合使用。

```vue
<template>
  <view class="list">
    <fanc-swipe-cell v-for="(item, index) in list" :key="index">
      <view class="list-item">{{ item.title }}</view>
      <template #right>
        <view class="delete" @click="onDelete(index)">删除</view>
      </template>
    </fanc-swipe-cell>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'fantastic-ui';

const list = ref([
  { title: '项目 1' },
  { title: '项目 2' },
  { title: '项目 3' },
]);

const onDelete = (index) => {
  list.value.splice(index, 1);
  showToast('删除成功');
};
</script>

<style>
.list-item {
  padding: 15px;
  background-color: white;
  border-bottom: 1px solid #eee;
}

.delete {
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff3b30;
  color: white;
}
</style>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用滑动 | _boolean_ | `false` |
| leftWidth | 左侧滑动区域宽度 | _number \| string_ | `0` |
| rightWidth | 右侧滑动区域宽度 | _number \| string_ | `0` |
| autoClose | 点击时是否自动关闭 | _boolean_ | `true` |
| threshold | 开始显示菜单的拖动比例阈值 | _number_ | `0.3` |
| disableCloseNames | 禁止自动关闭菜单的点击事件名称 | _array_ | `[]` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击单元格时触发 | _event: Event_ |
| open | 打开菜单时触发 | _{ position: string }_ |
| close | 关闭菜单时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义显示内容 |
| left | 左侧滑动区域 |
| right | 右侧滑动区域 |

### 方法

通过 ref 可以获取到 SwipeCell 实例并调用实例方法。

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| open | 打开单元格侧边栏 | position: 'left' \| 'right' |
| close | 收起单元格侧边栏 | - | 