# NumberKeyboard 数字键盘

数字键盘组件，用于输入数字、密码等场景。

## 基础用法

通过 `v-model:show` 控制键盘是否展示，通过 `@input` 事件可以监听到输入的值。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="数字键盘"
    :value="value"
    placeholder="点击输入"
    @click="showKeyboard = true"
  />
  <fanc-number-keyboard
    v-model:show="showKeyboard"
    @input="onInput"
    @close="onClose"
  />
</template>

<script setup>
import { ref } from "vue";

const value = ref("");
const showKeyboard = ref(false);

const onInput = (key) => {
  value.value = value.value + key;
};

const onClose = () => {
  showKeyboard.value = false;
};
</script>
```

## 带右侧栏的键盘

通过 `extra-key` 属性可以设置键盘的右侧栏按键内容。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="带右侧栏的键盘"
    :value="value"
    placeholder="点击输入"
    @click="showKeyboard = true"
  />
  <fanc-number-keyboard
    v-model:show="showKeyboard"
    extra-key="."
    @input="onInput"
    @close="onClose"
  />
</template>
```

## 身份证号键盘

将 `extra-key` 设置为 `X`，可以输入身份证号码。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="身份证号键盘"
    :value="value"
    placeholder="点击输入"
    @click="showKeyboard = true"
  />
  <fanc-number-keyboard
    v-model:show="showKeyboard"
    extra-key="X"
    @input="onInput"
    @close="onClose"
  />
</template>
```

## 带标题的键盘

通过 `title` 属性可以设置键盘标题。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="带标题的键盘"
    :value="value"
    placeholder="点击输入"
    @click="showKeyboard = true"
  />
  <fanc-number-keyboard
    v-model:show="showKeyboard"
    title="数字键盘"
    extra-key="."
    @input="onInput"
    @close="onClose"
  />
</template>
```

## 配置多个按键

通过 `extra-key` 属性配置两个按键，组件会自动将按键拆分为两个按键。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="配置多个按键"
    :value="value"
    placeholder="点击输入"
    @click="showKeyboard = true"
  />
  <fanc-number-keyboard
    v-model:show="showKeyboard"
    :extra-key="['00', '.']"
    @input="onInput"
    @close="onClose"
  />
</template>
```

## 随机数字键盘

通过 `random-key-order` 属性可以随机排序数字键盘，常用于安全等级较高的场景。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="随机数字键盘"
    :value="value"
    placeholder="点击输入"
    @click="showKeyboard = true"
  />
  <fanc-number-keyboard
    v-model:show="showKeyboard"
    random-key-order
    @input="onInput"
    @close="onClose"
  />
</template>
```

## 键盘完成按钮文字

通过 `close-button-text` 属性可以设置键盘右下角按钮的文字，通过 `close-button-loading` 属性可以将完成按钮设置为加载状态。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="键盘完成按钮文字"
    :value="value"
    placeholder="点击输入"
    @click="showKeyboard = true"
  />
  <fanc-number-keyboard
    v-model:show="showKeyboard"
    close-button-text="完成"
    @input="onInput"
    @close="onClose"
  />
</template>
```

## 键盘遮罩层

通过 `show-overlay` 属性可以控制是否显示遮罩层，通过 `close-on-click-overlay` 属性控制是否在点击遮罩层后关闭键盘。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="键盘遮罩层"
    :value="value"
    placeholder="点击输入"
    @click="showKeyboard = true"
  />
  <fanc-number-keyboard
    v-model:show="showKeyboard"
    :show-overlay="true"
    :close-on-click-overlay="true"
    @input="onInput"
    @close="onClose"
  />
</template>
```

## 指定挂载位置

通过 `teleport` 属性可以指定键盘挂载的位置。

```vue
<template>
  <fanc-field
    readonly
    clickable
    label="指定挂载位置"
    :value="value"
    placeholder="点击输入"
    @click="showKeyboard = true"
  />
  <fanc-number-keyboard
    v-model:show="showKeyboard"
    teleport="body"
    @input="onInput"
    @close="onClose"
  />
</template>
```

## API

### Props

| 参数                   | 说明                                                         | 类型                 | 默认值    |
| ---------------------- | ------------------------------------------------------------ | -------------------- | --------- |
| v-model:show           | 是否显示键盘                                                 | _boolean_            | `false`   |
| title                  | 键盘标题                                                     | _string_             | -         |
| theme                  | 样式风格，可选值为 `default` `custom`                        | _string_             | `default` |
| maxlength              | 输入值最大长度                                               | _number \| string_   | -         |
| transition             | 是否开启过场动画                                             | _boolean_            | `true`    |
| z-index                | 键盘 z-index 层级                                            | _number \| string_   | `100`     |
| extra-key              | 底部额外按键的内容                                           | _string \| string[]_ | `''`      |
| close-button-text      | 关闭按钮文字，空则不展示                                     | _string_             | -         |
| delete-button-text     | 删除按钮文字                                                 | _string_             | `删除`    |
| close-button-loading   | 是否将关闭按钮设置为加载中状态，仅在 `theme="custom"` 时有效 | _boolean_            | `false`   |
| show-delete-key        | 是否展示删除图标                                             | _boolean_            | `true`    |
| blur-on-close          | 是否在点击关闭按钮时让输入框失焦                             | _boolean_            | `true`    |
| hide-on-click-outside  | 是否在点击外部时收起键盘                                     | _boolean_            | `true`    |
| teleport               | 指定挂载的节点，等同于 Teleport 组件的 to 属性               | _string \| Element_  | -         |
| show-overlay           | 是否显示遮罩层                                               | _boolean_            | `true`    |
| close-on-click-overlay | 是否在点击遮罩层后关闭键盘                                   | _boolean_            | `true`    |
| safe-area-inset-bottom | 是否开启底部安全区适配                                       | _boolean_            | `true`    |
| random-key-order       | 是否将数字键盘的按键顺序随机打乱                             | _boolean_            | `false`   |

### Events

| 事件名 | 说明                       | 回调参数      |
| ------ | -------------------------- | ------------- |
| input  | 点击按键时触发             | _key: string_ |
| delete | 点击删除键时触发           | -             |
| close  | 点击关闭按钮或遮罩层时触发 | -             |
| blur   | 点击关闭按钮或遮罩层时触发 | -             |
| show   | 键盘完全弹出时触发         | -             |
| hide   | 键盘完全收起时触发         | -             |

### Slots

| 名称      | 说明                 |
| --------- | -------------------- |
| default   | 自定义键盘内容       |
| title     | 自定义标题内容       |
| extra-key | 自定义左下角按键内容 |
| delete    | 自定义删除按键内容   |
