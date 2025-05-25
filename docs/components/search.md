# Search 搜索框

搜索框组件，用于搜索场景的输入框组件。

## 基础用法

通过 `v-model` 可以双向绑定输入的值，`placeholder` 属性设置占位提示文字。

```vue
<template>
  <fanc-search v-model="searchValue" placeholder="请输入搜索关键词" />
</template>

<script setup>
import { ref } from "vue";

const searchValue = ref("");
</script>
```

## 搜索框形状

通过 `shape` 属性设置搜索框形状，可选值为 `square`（方形）和 `round`（圆形）。

```vue
<template>
  <fanc-search shape="square" placeholder="方形搜索框" />
  <fanc-search shape="round" placeholder="圆形搜索框" />
</template>
```

## 搜索框背景色

通过 `background` 属性可以设置搜索框的背景色。

```vue
<template>
  <fanc-search background="#f2f2f2" placeholder="自定义背景色" />
</template>
```

## 搜索框标签

通过 `label` 属性可以设置搜索框左侧的文本标签。

```vue
<template>
  <fanc-search label="商品" placeholder="请输入商品名称" />
</template>
```

## 禁用状态

通过 `disabled` 属性可以将搜索框设置为禁用状态。

```vue
<template>
  <fanc-search disabled placeholder="禁用状态" />
</template>
```

## 只读状态

通过 `readOnly` 属性可以将搜索框设置为只读状态。

```vue
<template>
  <fanc-search readOnly value="只读状态" />
</template>
```

## 自定义图标

通过 `leftIcon` 和 `rightIcon` 属性可以自定义搜索框左右两侧的图标。

```vue
<template>
  <fanc-search leftIcon="search" rightIcon="close" placeholder="自定义图标" />
</template>
```

## 显示操作按钮

通过 `showActionButton` 属性可以显示搜索框右侧的操作按钮，通过 `actionText` 属性设置按钮文字。

```vue
<template>
  <fanc-search
    v-model="searchValue"
    placeholder="请输入搜索关键词"
    showActionButton
    actionText="搜索"
    @action="onSearch"
  />
</template>

<script setup>
import { ref } from "vue";
import { showToast } from "fantastic-ui";

const searchValue = ref("");

const onSearch = () => {
  showToast(`搜索: ${searchValue.value}`);
};
</script>
```

## 自动聚焦

通过 `focus` 属性可以控制搜索框是否自动聚焦。

```vue
<template>
  <fanc-search focus placeholder="自动聚焦" />
</template>
```

## 最大输入长度

通过 `maxlength` 属性可以限制搜索框的最大输入长度。

```vue
<template>
  <fanc-search maxlength="10" placeholder="最多输入10个字符" />
</template>
```

## 自定义样式

通过 `customStyle` 和 `customClass` 属性可以自定义搜索框的样式。

```vue
<template>
  <fanc-search
    placeholder="自定义样式"
    :customStyle="{
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    }"
    customClass="custom-search"
  />
</template>

<style>
.custom-search {
  margin: 10px;
}
</style>
```

## API

### Props

| 参数             | 说明                                                              | 类型               | 默认值    |
| ---------------- | ----------------------------------------------------------------- | ------------------ | --------- |
| value            | 搜索框当前值                                                      | _string_           | -         |
| placeholder      | 占位提示文字                                                      | _string_           | `搜索`    |
| placeholderStyle | 占位提示文字样式                                                  | _string_           | -         |
| label            | 搜索框左侧文本                                                    | _string_           | -         |
| shape            | 搜索框形状，可选值为 `square` `round`                             | _string_           | `round`   |
| background       | 搜索框背景色                                                      | _string_           | `#f5f5f5` |
| inputType        | 输入框类型，可选值为 `text` `number` `idcard` `digit`             | _string_           | `text`    |
| clearable        | 是否显示清除按钮                                                  | _boolean_          | `true`    |
| focus            | 是否自动聚焦                                                      | _boolean_          | `false`   |
| disabled         | 是否禁用                                                          | _boolean_          | `false`   |
| readOnly         | 是否只读                                                          | _boolean_          | `false`   |
| leftIcon         | 左侧图标名称                                                      | _string_           | `search`  |
| rightIcon        | 右侧图标名称                                                      | _string_           | -         |
| iconSize         | 图标大小                                                          | _string \| number_ | `16`      |
| iconColor        | 图标颜色                                                          | _string_           | `#969799` |
| maxlength        | 最大输入长度，-1 为不限制                                         | _string \| number_ | `-1`      |
| cursorSpacing    | 指定光标与键盘的距离                                              | _number_           | `0`       |
| adjustPosition   | 键盘弹起时是否自动上推页面                                        | _boolean_          | `true`    |
| confirmType      | 键盘右下角按钮的文字，可选值为 `send` `search` `next` `go` `done` | _string_           | `search`  |
| showActionButton | 是否显示右侧按钮                                                  | _boolean_          | `false`   |
| actionText       | 右侧按钮文字                                                      | _string_           | `搜索`    |
| customStyle      | 自定义样式                                                        | _object_           | -         |
| customClass      | 自定义类名                                                        | _string_           | -         |

### Events

| 事件名 | 说明                 | 回调参数        |
| ------ | -------------------- | --------------- |
| input  | 输入框内容变化时触发 | _value: string_ |
| focus  | 输入框获得焦点时触发 | _event: Event_  |
| blur   | 输入框失去焦点时触发 | _event: Event_  |
| clear  | 点击清除按钮时触发   | -               |
| search | 确认搜索时触发       | _value: string_ |
| action | 点击右侧按钮时触发   | _value: string_ |
| click  | 点击搜索框时触发     | _event: Event_  |

### Slots

| 名称      | 说明               |
| --------- | ------------------ |
| left      | 自定义左侧内容     |
| leftIcon  | 自定义左侧图标     |
| rightIcon | 自定义右侧图标     |
| action    | 自定义右侧按钮内容 |

```

```
