# fanc-swipe-cell 滑动单元格组件

## 组件介绍

`fanc-swipe-cell` 是一个可滑动的单元格组件，通过左右滑动可以展示隐藏的操作按钮，常用于列表中的编辑、删除等操作场景。

## 组件特性

- 支持左右两侧滑动展示操作区域
- 支持自定义左右侧操作区域的宽度
- 支持点击自动关闭操作区域
- 支持禁用滑动功能
- 支持自定义滑动阈值
- 支持指定不触发自动关闭的元素

## 组件用法

### 基础用法

```vue
<template>
  <fanc-swipe-cell right-width="80">
    <template #right>
      <view class="delete-btn" @click="handleDelete">删除</view>
    </template>
    <fanc-cell title="单元格" value="内容"></fanc-cell>
  </fanc-swipe-cell>
</template>

<script>
export default {
  methods: {
    handleDelete() {
      // 处理删除操作
      console.log('删除');
    }
  }
}
</script>

<style>
.delete-btn {
  height: 100%;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ee0a24;
  color: #fff;
}
</style>
```

### 左右两侧都可滑动

```vue
<fanc-swipe-cell left-width="80" right-width="80">
  <template #left>
    <view class="collect-btn" @click="handleCollect">收藏</view>
  </template>
  <template #right>
    <view class="delete-btn" @click="handleDelete">删除</view>
  </template>
  <fanc-cell title="单元格" value="左右都可滑动"></fanc-cell>
</fanc-swipe-cell>
```

### 禁用滑动

```vue
<fanc-swipe-cell disabled>
  <fanc-cell title="单元格" value="禁用滑动"></fanc-cell>
</fanc-swipe-cell>
```

### 自定义滑动阈值

```vue
<!-- 设置滑动超过50%才会自动展开 -->
<fanc-swipe-cell right-width="80" :threshold="0.5">
  <template #right>
    <view class="delete-btn" @click="handleDelete">删除</view>
  </template>
  <fanc-cell title="单元格" value="自定义滑动阈值"></fanc-cell>
</fanc-swipe-cell>
```

### 禁止自动关闭

```vue
<fanc-swipe-cell right-width="120" :auto-close="false">
  <template #right>
    <view class="btn-group">
      <view class="edit-btn" @click="handleEdit">编辑</view>
      <view class="delete-btn" @click="handleDelete">删除</view>
    </view>
  </template>
  <fanc-cell title="单元格" value="点击内容不会自动关闭"></fanc-cell>
</fanc-swipe-cell>
```

### 指定不触发自动关闭的元素

```vue
<fanc-swipe-cell 
  right-width="80" 
  :disable-close-names="['no-close']"
>
  <template #right>
    <view class="delete-btn" @click="handleDelete">删除</view>
  </template>
  <fanc-cell title="单元格">
    <template #value>
      <view>
        内容
        <view class="no-close" @click="handleNoClose">点击不关闭</view>
      </view>
    </template>
  </fanc-cell>
</fanc-swipe-cell>
```

### 使用实例方法控制

```vue
<template>
  <view>
    <fanc-button @click="openLeft">打开左侧</fanc-button>
    <fanc-button @click="openRight">打开右侧</fanc-button>
    <fanc-button @click="closeCell">关闭</fanc-button>
    
    <fanc-swipe-cell ref="swipeCell" left-width="80" right-width="80">
      <template #left>
        <view class="collect-btn">收藏</view>
      </template>
      <template #right>
        <view class="delete-btn">删除</view>
      </template>
      <fanc-cell title="单元格" value="使用实例方法控制"></fanc-cell>
    </fanc-swipe-cell>
  </view>
</template>

<script>
export default {
  methods: {
    openLeft() {
      this.$refs.swipeCell.open('left');
    },
    openRight() {
      this.$refs.swipeCell.open('right');
    },
    closeCell() {
      this.$refs.swipeCell.close();
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 是否禁用滑动 | Boolean | `false` |
| left-width | 左侧滑动区域宽度，单位为px | Number \| String | `0` |
| right-width | 右侧滑动区域宽度，单位为px | Number \| String | `0` |
| auto-close | 点击时是否自动关闭 | Boolean | `true` |
| threshold | 滑动阈值比例，超过该比例时自动展开，取值范围为 0-1 | Number | `0.3` |
| disable-close-names | 禁止自动关闭的元素类名数组 | Array | `[]` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽，显示内容区域 |
| left | 左侧滑动区域 |
| right | 右侧滑动区域 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击单元格内容时触发 | event: Event |
| open | 打开操作区域时触发 | { position: 'left' \| 'right' } |
| close | 关闭操作区域时触发 | - |

### 方法

通过 ref 可以获取到 SwipeCell 实例并调用实例方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| open | 打开操作区域 | position: 'left' \| 'right' |
| close | 关闭操作区域 | - |

## 注意事项

1. 左右侧操作区域的宽度需要通过 `left-width` 和 `right-width` 属性设置，单位为 px
2. 默认情况下，点击内容区域会自动关闭已打开的操作区域，可以通过 `auto-close` 属性控制
3. 可以通过 `disable-close-names` 属性指定不触发自动关闭的元素类名，这些元素被点击时不会关闭操作区域
4. 滑动超过阈值（默认为30%）时，会自动展开操作区域，可以通过 `threshold` 属性调整阈值
5. 可以通过获取组件实例，调用 `open` 和 `close` 方法来手动控制操作区域的展开和关闭 