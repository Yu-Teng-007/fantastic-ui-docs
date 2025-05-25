# Field 输入框

输入框组件，支持文本输入、密码输入、数字输入等多种输入方式。

## 基础用法

通过 `v-model` 绑定输入框的值，通过 `placeholder` 设置占位提示文字。

```vue
<template>
  <fanc-field v-model="value" placeholder="请输入文本" />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
```

## 自定义类型

通过 `type` 属性可以设置不同类型的输入框，支持 `text`、`password`、`number`、`digit`、`textarea` 等类型。

```vue
<template>
  <fanc-cell-group title="自定义类型">
    <fanc-field v-model="text" label="文本" placeholder="请输入文本" />
    <fanc-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
    <fanc-field v-model="number" type="number" label="数字" placeholder="请输入数字" />
    <fanc-field v-model="digit" type="digit" label="整数" placeholder="请输入整数" />
    <fanc-field
      v-model="textarea"
      type="textarea"
      label="多行文本"
      placeholder="请输入多行文本"
      rows="3"
    />
  </fanc-cell-group>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('');
const password = ref('');
const number = ref('');
const digit = ref('');
const textarea = ref('');
</script>
```

## 禁用和只读

通过 `readonly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

```vue
<template>
  <fanc-cell-group title="禁用和只读">
    <fanc-field v-model="readonly" label="只读" placeholder="输入框只读" readonly />
    <fanc-field v-model="disabled" label="禁用" placeholder="输入框禁用" disabled />
  </fanc-cell-group>
</template>

<script setup>
import { ref } from 'vue';

const readonly = ref('只读状态');
const disabled = ref('禁用状态');
</script>
```

## 显示图标

通过 `left-icon` 和 `right-icon` 属性可以在输入框两侧显示图标。

```vue
<template>
  <fanc-cell-group title="显示图标">
    <fanc-field
      v-model="username"
      label="用户名"
      placeholder="请输入用户名"
      left-icon="user"
    />
    <fanc-field
      v-model="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
      left-icon="lock"
      right-icon="eye-off"
      @click-right-icon="showPassword = !showPassword"
    />
  </fanc-cell-group>
</template>

<script setup>
import { ref, computed } from 'vue';

const username = ref('');
const password = ref('');
const showPassword = ref(false);

const passwordType = computed(() => {
  return showPassword.value ? 'text' : 'password';
});
</script>
```

## 错误提示

通过 `error` 或 `error-message` 属性可以显示错误提示。

```vue
<template>
  <fanc-cell-group title="错误提示">
    <fanc-field
      v-model="username"
      label="用户名"
      placeholder="请输入用户名"
      error
    />
    <fanc-field
      v-model="phone"
      label="手机号"
      placeholder="请输入手机号"
      error-message="手机号格式错误"
    />
  </fanc-cell-group>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const phone = ref('');
</script>
```

## 插入按钮

通过 `button` 插槽可以在输入框尾部插入按钮。

```vue
<template>
  <fanc-cell-group title="插入按钮">
    <fanc-field
      v-model="sms"
      label="短信验证码"
      placeholder="请输入短信验证码"
    >
      <template #button>
        <fanc-button size="small" type="primary">发送验证码</fanc-button>
      </template>
    </fanc-field>
  </fanc-cell-group>
</template>

<script setup>
import { ref } from 'vue';

const sms = ref('');
</script>
```

## 格式化输入

通过 `formatter` 属性可以对输入内容进行格式化，通过 `format-trigger` 属性可以指定执行格式化的时机。

```vue
<template>
  <fanc-cell-group title="格式化输入">
    <fanc-field
      v-model="text"
      label="文本"
      placeholder="在输入时格式化"
      :formatter="formatter"
      format-trigger="input"
    />
    <fanc-field
      v-model="text2"
      label="文本"
      placeholder="在失焦时格式化"
      :formatter="formatter"
      format-trigger="blur"
    />
  </fanc-cell-group>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('');
const text2 = ref('');

const formatter = (value) => {
  return value.replace(/\d/g, '');
};
</script>
```

## 显示字数统计

通过设置 `maxlength` 和 `show-word-limit` 属性可以显示字数统计。

```vue
<template>
  <fanc-cell-group title="显示字数统计">
    <fanc-field
      v-model="message"
      label="留言"
      type="textarea"
      placeholder="请输入留言"
      rows="2"
      maxlength="50"
      show-word-limit
    />
  </fanc-cell-group>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('');
</script>
```

## 输入框对齐方式

通过 `input-align` 属性可以设置输入框内容的对齐方式。

```vue
<template>
  <fanc-cell-group title="输入框对齐方式">
    <fanc-field
      v-model="value1"
      label="文本"
      placeholder="输入框内容左对齐"
      input-align="left"
    />
    <fanc-field
      v-model="value2"
      label="文本"
      placeholder="输入框内容居中对齐"
      input-align="center"
    />
    <fanc-field
      v-model="value3"
      label="文本"
      placeholder="输入框内容右对齐"
      input-align="right"
    />
  </fanc-cell-group>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 输入框内容 | _string \| number_ | - |
| label | 输入框左侧文本 | _string_ | - |
| name | 名称，提交表单的标识符 | _string_ | - |
| type | 输入框类型，可选值为 `text` `password` `number` `digit` `textarea` | _string_ | `text` |
| size | 输入框大小，可选值为 `large` | _string_ | - |
| maxlength | 输入的最大字符数 | _number \| string_ | - |
| placeholder | 输入框占位提示文字 | _string_ | - |
| border | 是否显示内边框 | _boolean_ | `true` |
| disabled | 是否禁用输入框 | _boolean_ | `false` |
| readonly | 是否只读 | _boolean_ | `false` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| required | 是否显示表单必填星号 | _boolean_ | `false` |
| center | 是否使内容垂直居中 | _boolean_ | `false` |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | _boolean_ | `false` |
| clear-trigger | 显示清除图标的时机，`always` 表示输入框不为空时展示，`focus` 表示输入框聚焦且不为空时展示 | _string_ | `focus` |
| clickable | 是否开启点击反馈 | _boolean_ | `false` |
| is-link | 是否展示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| autofocus | 是否自动聚焦，iOS 系统不支持该属性 | _boolean_ | `false` |
| show-word-limit | 是否显示字数统计，需要设置 `maxlength` 属性 | _boolean_ | `false` |
| error | 是否将输入内容标红 | _boolean_ | `false` |
| error-message | 底部错误提示文案 | _string_ | - |
| formatter | 输入内容格式化函数 | _(val: string) => string_ | - |
| format-trigger | 格式化函数触发的时机，可选值为 `input` `blur` | _string_ | `input` |
| arrow-direction | 箭头方向，可选值为 `up` `down` `left` | _string_ | `right` |
| label-class | 左侧文本额外类名 | _string_ | - |
| label-width | 左侧文本宽度，默认单位为 `px` | _number \| string_ | `6.2em` |
| label-align | 左侧文本对齐方式，可选值为 `center` `right` | _string_ | `left` |
| input-align | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| left-icon | 左侧图标名称或图片链接 | _string_ | - |
| right-icon | 右侧图标名称或图片链接 | _string_ | - |
| autosize | 是否自适应内容高度，只对 textarea 有效，可传入对象，如 { maxHeight: 100, minHeight: 50 } | _boolean \| object_ | `false` |
| rows | textarea 的行数 | _number \| string_ | `2` |
| show-confirm-bar | 是否显示键盘上方的完成按钮，只对 textarea 有效 | _boolean_ | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 输入框内容变化时触发 | _value: string_ |
| change | 输入框内容变化时触发 | _value: string_ |
| focus | 输入框获得焦点时触发 | _event: Event_ |
| blur | 输入框失去焦点时触发 | _event: Event_ |
| clear | 点击清除按钮时触发 | _event: Event_ |
| click | 点击输入区域时触发 | _event: Event_ |
| click-input | 点击输入区域时触发 | _event: Event_ |
| click-left-icon | 点击左侧图标时触发 | _event: Event_ |
| click-right-icon | 点击右侧图标时触发 | _event: Event_ |

### Slots

| 名称 | 说明 |
| --- | --- |
| label | 自定义输入框左侧文本 |
| input | 自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效 |
| left-icon | 自定义输入框左侧图标 |
| right-icon | 自定义输入框右侧图标 |
| button | 自定义输入框尾部按钮 | 