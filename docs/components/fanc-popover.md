# fanc-popover 气泡弹出框组件

## 组件介绍

`fanc-popover` 是一个气泡弹出框组件，用于在点击或悬停元素时，弹出简洁的气泡卡片，承载辅助信息或操作菜单。它支持多种弹出位置和触发方式，适用于提示说明、功能引导、菜单展示等场景。

## 组件特性

- 支持亮色和暗色两种主题
- 支持12种弹出位置，满足各种布局需求
- 支持点击和悬停两种触发方式
- 支持自定义标题和内容
- 支持自动关闭功能
- 支持自定义内容插槽
- 提供手动控制显示和隐藏的方法
- 自带平滑的动画效果

## 组件用法

### 基础用法

```vue
<template>
  <fanc-popover content="这是一个简单的气泡提示">
    <fanc-button type="primary">点击显示气泡</fanc-button>
  </fanc-popover>
</template>
```

### 设置不同主题

```vue
<!-- 亮色主题（默认） -->
<fanc-popover content="亮色主题气泡" theme="light">
  <fanc-button>亮色主题</fanc-button>
</fanc-popover>

<!-- 暗色主题 -->
<fanc-popover content="暗色主题气泡" theme="dark">
  <fanc-button>暗色主题</fanc-button>
</fanc-popover>
```

### 不同触发方式

```vue
<!-- 点击触发（默认） -->
<fanc-popover content="点击触发的气泡" trigger="click">
  <fanc-button>点击触发</fanc-button>
</fanc-popover>

<!-- 悬停触发 -->
<fanc-popover content="悬停触发的气泡" trigger="hover">
  <fanc-button>悬停触发</fanc-button>
</fanc-popover>
```

### 设置弹出位置

```vue
<!-- 顶部居中（默认） -->
<fanc-popover content="顶部居中" placement="top">
  <fanc-button>顶部居中</fanc-button>
</fanc-popover>

<!-- 底部居中 -->
<fanc-popover content="底部居中" placement="bottom">
  <fanc-button>底部居中</fanc-button>
</fanc-popover>

<!-- 左侧居中 -->
<fanc-popover content="左侧居中" placement="left">
  <fanc-button>左侧居中</fanc-button>
</fanc-popover>

<!-- 右侧居中 -->
<fanc-popover content="右侧居中" placement="right">
  <fanc-button>右侧居中</fanc-button>
</fanc-popover>

<!-- 顶部靠左 -->
<fanc-popover content="顶部靠左" placement="top-left">
  <fanc-button>顶部靠左</fanc-button>
</fanc-popover>

<!-- 顶部靠右 -->
<fanc-popover content="顶部靠右" placement="top-right">
  <fanc-button>顶部靠右</fanc-button>
</fanc-popover>
```

### 带标题的气泡

```vue
<fanc-popover title="标题" content="这是带标题的气泡内容">
  <fanc-button>带标题</fanc-button>
</fanc-popover>
```

### 自动关闭

```vue
<fanc-popover content="3秒后自动关闭" :duration="3000">
  <fanc-button>自动关闭</fanc-button>
</fanc-popover>
```

### 使用插槽自定义内容

```vue
<fanc-popover>
  <template #content>
    <view class="custom-content">
      <view class="title">自定义内容</view>
      <view class="desc">这里可以放置任意内容</view>
      <fanc-button size="mini" type="primary">操作按钮</fanc-button>
    </view>
  </template>
  <fanc-button>自定义内容</fanc-button>
</fanc-popover>
```

### 手动控制显示和隐藏

```vue
<template>
  <view>
    <fanc-button @click="showPopover">显示气泡</fanc-button>
    <fanc-button @click="hidePopover">隐藏气泡</fanc-button>
    
    <fanc-popover ref="popover" content="手动控制的气泡">
      <fanc-button>参考元素</fanc-button>
    </fanc-popover>
  </view>
</template>

<script>
export default {
  methods: {
    showPopover() {
      this.$refs.popover.open();
    },
    hidePopover() {
      this.$refs.popover.close();
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 气泡显示的内容 | String | - |
| title | 气泡标题 | String | - |
| theme | 气泡主题，可选值为 `light` `dark` | String | `dark` |
| trigger | 触发方式，可选值为 `click` `hover` | String | `click` |
| placement | 气泡位置，可选值为 `top` `bottom` `left` `right` `top-left` `top-right` `bottom-left` `bottom-right` `left-top` `left-bottom` `right-top` `right-bottom` | String | `top` |
| duration | 自动关闭延时，单位毫秒，0表示不自动关闭 | Number | `0` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 触发气泡显示的元素 |
| content | 自定义气泡内容 |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| open | 气泡显示时触发 | - |
| close | 气泡隐藏时触发 | - |

### 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| open | 显示气泡 | - |
| close | 隐藏气泡 | - |
| toggle | 切换气泡显示状态 | - |

## 注意事项

1. 气泡组件需要一个参考元素作为触发点，通过默认插槽提供
2. 在移动端，`hover` 触发方式通过触摸事件模拟实现
3. 气泡内容较多时，建议使用自定义内容插槽，并控制好内容宽度
4. 在小屏幕设备上，气泡最大宽度会自动限制为240px
5. 点击气泡外部区域会自动关闭气泡（仅在H5平台生效）
6. 设置 `duration` 属性可以控制气泡自动关闭的时间
7. 12种不同的 `placement` 值可以满足各种布局场景下的需求
8. 使用 `ref` 获取组件实例，可以通过方法手动控制气泡的显示和隐藏 