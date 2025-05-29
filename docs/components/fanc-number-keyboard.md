# fanc-number-keyboard 数字键盘组件

## 组件介绍

`fanc-number-keyboard` 是一个数字键盘组件，用于在移动端提供数字输入功能。它支持多种键盘布局，适用于数字密码、验证码、金额输入、身份证号码等不同场景。

## 组件特性

- 支持三种键盘主题：默认、身份证、自定义
- 支持随机数字键排序，增强安全性
- 支持自定义额外按键（如小数点）
- 支持右侧栏布局，可添加删除键和确认键
- 支持显示/隐藏删除键
- 支持点击外部区域自动关闭
- 支持自定义标题和样式
- 支持圆角和固定底部显示

## 组件用法

### 基础用法

```vue
<template>
  <fanc-button @click="showKeyboard = true">显示键盘</fanc-button>
  <fanc-number-keyboard
    v-model:show="showKeyboard"
    @input="onInput"
    @delete="onDelete"
    @close="onClose"
  />
</template>

<script>
export default {
  data() {
    return {
      showKeyboard: false,
      value: ''
    }
  },
  methods: {
    onInput(key) {
      this.value += key;
    },
    onDelete() {
      this.value = this.value.slice(0, -1);
    },
    onClose() {
      this.showKeyboard = false;
    }
  }
}
</script>
```

### 带标题的键盘

```vue
<fanc-number-keyboard
  v-model:show="showKeyboard"
  title="请输入支付密码"
  :show-header="true"
/>
```

### 身份证键盘

```vue
<fanc-number-keyboard
  v-model:show="showKeyboard"
  theme="idcard"
  @input="onInput"
/>
```

### 带额外按键的键盘

```vue
<fanc-number-keyboard
  v-model:show="showKeyboard"
  :show-extra-key="true"
  extra-key="."
  @function="onFunction"
/>
```

```javascript
methods: {
  onFunction(key) {
    // 处理额外按键点击，如小数点
    this.value += key;
  }
}
```

### 随机数字键盘

```vue
<fanc-number-keyboard
  v-model:show="showKeyboard"
  :random-key-order="true"
/>
```

### 自定义键盘带侧边栏

```vue
<fanc-number-keyboard
  v-model:show="showKeyboard"
  theme="custom"
  :show-sidebar="true"
  confirm-button-text="完成"
  @confirm="onConfirm"
/>
```

```javascript
methods: {
  onConfirm() {
    // 处理确认按钮点击
    this.showKeyboard = false;
    // 提交表单或其他操作
  }
}
```

### 禁用点击外部关闭

```vue
<fanc-number-keyboard
  v-model:show="showKeyboard"
  :hide-on-click-outside="false"
/>
```

### 自定义样式

```vue
<fanc-number-keyboard
  v-model:show="showKeyboard"
  :round="true"
  :z-index="1000"
  :fixed="true"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示键盘 | Boolean | `false` |
| title | 键盘标题 | String | `键盘标题` |
| z-index | 键盘层级 | Number \| String | `100` |
| round | 是否为圆角键盘 | Boolean | `true` |
| fixed | 是否固定在底部 | Boolean | `true` |
| show-delete-key | 是否显示删除键 | Boolean | `true` |
| hide-on-click-outside | 是否在点击外部时关闭键盘 | Boolean | `true` |
| random-key-order | 是否随机排序键盘按键 | Boolean | `false` |
| extra-key | 额外按键的内容 | String | `.` |
| show-extra-key | 是否显示额外按键 | Boolean | `false` |
| show-header | 是否显示键盘头部 | Boolean | `false` |
| theme | 键盘主题，可选值为 `default` `idcard` `custom` | String | `default` |
| show-sidebar | 是否显示右侧栏，仅在 theme 为 `custom` 时有效 | Boolean | `false` |
| confirm-button-text | 确认按钮文字，仅在 theme 为 `custom` 且 showSidebar 为 true 时有效 | String | `确认` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 点击数字按键时触发 | key: 按键值 |
| delete | 点击删除键时触发 | - |
| close | 点击关闭按钮时触发 | - |
| blur | 键盘关闭时触发 | - |
| function | 点击功能键时触发 | key: 按键值 |
| confirm | 点击确认按钮时触发，仅在 theme 为 `custom` 且 showSidebar 为 true 时有效 | - |
| update:show | 键盘显示状态变化时触发 | show: 是否显示 |

## 注意事项

1. 使用 `v-model:show` 可以双向绑定键盘的显示状态
2. 随机数字键盘功能仅对数字 1-9 进行随机排序，底部一行按键（额外键、0、删除键）保持固定位置
3. 身份证键盘（`theme="idcard"`）会在键盘上显示"X"键，方便输入身份证号码
4. 自定义主题（`theme="custom"`）配合 `showSidebar` 可以实现右侧栏布局，包含删除键和确认键
5. 当设置 `hideOnClickOutside` 为 `true` 时，点击键盘外部区域会自动关闭键盘
6. 使用 `showHeader` 和 `title` 可以在键盘顶部显示标题
7. 键盘会自动添加进入和离开的动画效果 