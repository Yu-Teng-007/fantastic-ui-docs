# Popover 弹出气泡

弹出气泡组件，用于展示临时的提示信息或操作菜单。

## 基础用法

通过 `v-model:show` 控制气泡的显示与隐藏，通过 `reference` 指定触发元素。

```vue
<template>
  <view class="demo-popover">
    <fanc-popover
      v-model:show="showPopover"
      :reference="() => $refs.reference"
      content="这是一个简单的气泡"
    >
      <template #reference>
        <fanc-button ref="reference" type="primary">点击显示</fanc-button>
      </template>
    </fanc-popover>
  </view>
</template>

<script setup>
import { ref } from "vue";

const showPopover = ref(false);
</script>
```

## 弹出位置

通过 `placement` 属性设置气泡的弹出位置，支持 `top`、`bottom`、`left`、`right` 及其组合方向。

```vue
<template>
  <view class="demo-popover">
    <fanc-popover v-model:show="showTop" placement="top" content="顶部弹出">
      <template #reference>
        <fanc-button>顶部弹出</fanc-button>
      </template>
    </fanc-popover>

    <fanc-popover
      v-model:show="showBottom"
      placement="bottom"
      content="底部弹出"
    >
      <template #reference>
        <fanc-button>底部弹出</fanc-button>
      </template>
    </fanc-popover>

    <fanc-popover v-model:show="showLeft" placement="left" content="左侧弹出">
      <template #reference>
        <fanc-button>左侧弹出</fanc-button>
      </template>
    </fanc-popover>

    <fanc-popover v-model:show="showRight" placement="right" content="右侧弹出">
      <template #reference>
        <fanc-button>右侧弹出</fanc-button>
      </template>
    </fanc-popover>
  </view>
</template>

<script setup>
import { ref } from "vue";

const showTop = ref(false);
const showBottom = ref(false);
const showLeft = ref(false);
const showRight = ref(false);
</script>
```

## 触发方式

通过 `trigger` 属性设置触发方式，支持 `click`、`hover` 和 `manual` 三种方式。

```vue
<template>
  <view class="demo-popover">
    <fanc-popover trigger="click" content="点击触发">
      <template #reference>
        <fanc-button>点击触发</fanc-button>
      </template>
    </fanc-popover>

    <fanc-popover trigger="hover" content="悬停触发">
      <template #reference>
        <fanc-button>悬停触发</fanc-button>
      </template>
    </fanc-popover>
  </view>
</template>
```

## 自定义内容

通过默认插槽可以自定义气泡内容。

```vue
<template>
  <view class="demo-popover">
    <fanc-popover v-model:show="showCustom">
      <template #reference>
        <fanc-button>自定义内容</fanc-button>
      </template>

      <view class="custom-content">
        <view class="custom-title">标题</view>
        <view class="custom-desc">这是一段自定义内容</view>
        <fanc-button size="small" type="primary" @click="showCustom = false">
          确认
        </fanc-button>
      </view>
    </fanc-popover>
  </view>
</template>

<script setup>
import { ref } from "vue";

const showCustom = ref(false);
</script>

<style>
.custom-content {
  padding: 16px;
  width: 200px;
}
.custom-title {
  font-weight: bold;
  margin-bottom: 8px;
}
.custom-desc {
  margin-bottom: 16px;
}
</style>
```

## 操作菜单

通过 `actions` 属性可以设置操作菜单列表。

```vue
<template>
  <view class="demo-popover">
    <fanc-popover
      v-model:show="showActions"
      :actions="actions"
      @select="onSelect"
    >
      <template #reference>
        <fanc-button>操作菜单</fanc-button>
      </template>
    </fanc-popover>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "fantastic-ui";

const showActions = ref(false);
const actions = [
  { text: "选项一", icon: "edit" },
  { text: "选项二", icon: "share" },
  { text: "选项三", icon: "delete", color: "#ee0a24" },
];

const onSelect = (action, index) => {
  showToast(`选择了${action.text}`);
};
</script>
```

## 自定义气泡样式

通过 `theme` 属性设置气泡的主题风格，支持 `light` 和 `dark` 两种风格，通过 `custom-style` 可以自定义气泡样式。

```vue
<template>
  <view class="demo-popover">
    <fanc-popover theme="dark" content="深色主题">
      <template #reference>
        <fanc-button>深色主题</fanc-button>
      </template>
    </fanc-popover>

    <fanc-popover theme="light" content="浅色主题">
      <template #reference>
        <fanc-button>浅色主题</fanc-button>
      </template>
    </fanc-popover>

    <fanc-popover
      content="自定义样式"
      :custom-style="{
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white',
      }"
    >
      <template #reference>
        <fanc-button>自定义样式</fanc-button>
      </template>
    </fanc-popover>
  </view>
</template>
```

## API

### Props

| 参数                | 说明                                                                                                                                                     | 类型                       | 默认值   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | -------- |
| show                | 是否显示气泡                                                                                                                                             | _boolean_                  | `false`  |
| reference           | 触发元素的引用，可以是一个函数，返回元素引用                                                                                                             | _Element \| () => Element_ | -        |
| placement           | 气泡弹出位置，可选值为 `top` `bottom` `left` `right` `top-start` `top-end` `bottom-start` `bottom-end` `left-start` `left-end` `right-start` `right-end` | _string_                   | `bottom` |
| trigger             | 触发方式，可选值为 `click` `hover` `manual`                                                                                                              | _string_                   | `click`  |
| content             | 气泡内容                                                                                                                                                 | _string_                   | -        |
| theme               | 主题风格，可选值为 `light` `dark`                                                                                                                        | _string_                   | `light`  |
| actions             | 操作菜单列表                                                                                                                                             | _Action[]_                 | `[]`     |
| offset              | 出现位置的偏移量                                                                                                                                         | _[number, number]_         | `[0, 8]` |
| showArrow           | 是否显示箭头                                                                                                                                             | _boolean_                  | `true`   |
| arrowOffset         | 箭头偏移量                                                                                                                                               | _number_                   | `0`      |
| closeOnClickAction  | 是否在点击选项后关闭                                                                                                                                     | _boolean_                  | `true`   |
| closeOnClickOutside | 是否在点击外部元素后关闭                                                                                                                                 | _boolean_                  | `true`   |
| customStyle         | 自定义气泡样式                                                                                                                                           | _object_                   | -        |
| customClass         | 自定义气泡类名                                                                                                                                           | _string_                   | -        |

### Action 数据结构

| 键名      | 说明                     | 类型      |
| --------- | ------------------------ | --------- |
| text      | 选项文字                 | _string_  |
| icon      | 选项图标                 | _string_  |
| color     | 选项文字颜色             | _string_  |
| disabled  | 是否为禁用状态           | _boolean_ |
| className | 为对应选项添加额外的类名 | _string_  |

### Events

| 事件名        | 说明               | 回调参数                        |
| ------------- | ------------------ | ------------------------------- |
| open          | 打开气泡时触发     | -                               |
| close         | 关闭气泡时触发     | -                               |
| select        | 点击选项时触发     | _action: Action, index: number_ |
| click-outside | 点击外部元素时触发 | _event: Event_                  |

### Slots

| 名称      | 说明               |
| --------- | ------------------ |
| default   | 自定义气泡内容     |
| reference | 触发气泡显示的元素 |
