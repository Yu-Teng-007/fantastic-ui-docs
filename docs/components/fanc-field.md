# fanc-field 输入框组件

## 组件介绍

`fanc-field` 是一个功能完善的表单输入框组件，用于收集用户输入的信息。它支持多种输入类型、表单验证、状态展示等功能，通常与 `fanc-form` 组件配合使用，构建完整的表单界面。

## 组件特性

- 支持多种输入类型：文本、密码、数字、多行文本等
- 支持表单验证功能
- 支持左右图标配置
- 支持清除按钮和密码可见切换
- 支持只读和禁用状态
- 支持字数统计
- 支持自定义标签宽度和位置
- 支持错误提示信息展示

## 组件用法

### 基础用法

```vue
<fanc-field label="用户名" v-model="username" placeholder="请输入用户名"></fanc-field>
<fanc-field label="密码" type="password" v-model="password" placeholder="请输入密码"></fanc-field>
```

### 输入框类型

```vue
<!-- 文本输入框 -->
<fanc-field label="文本" v-model="text"></fanc-field>

<!-- 密码输入框 -->
<fanc-field label="密码" type="password" v-model="password"></fanc-field>

<!-- 数字输入框 -->
<fanc-field label="数字" type="number" v-model="number"></fanc-field>

<!-- 多行文本输入框 -->
<fanc-field label="多行文本" type="textarea" v-model="textarea"></fanc-field>
```

### 禁用和只读

```vue
<fanc-field label="禁用" v-model="value" disabled></fanc-field>
<fanc-field label="只读" v-model="value" readonly></fanc-field>
```

### 显示图标

```vue
<fanc-field label="用户名" v-model="username" left-icon="user"></fanc-field>
<fanc-field label="搜索" v-model="keyword" right-icon="search" @click-right-icon="onSearch"></fanc-field>
```

### 错误提示

```vue
<fanc-field label="用户名" v-model="username" error error-message="用户名格式不正确"></fanc-field>
```

### 字数统计

```vue
<fanc-field 
  label="留言" 
  type="textarea" 
  v-model="message" 
  maxlength="100" 
  show-word-limit
></fanc-field>
```

### 清除按钮

```vue
<fanc-field label="用户名" v-model="username" clearable></fanc-field>
```

### 表单验证

```vue
<fanc-form :model="formData" :rules="rules">
  <fanc-field 
    label="用户名" 
    name="username" 
    v-model="formData.username"
  ></fanc-field>
  <fanc-field 
    label="邮箱" 
    name="email" 
    v-model="formData.email"
  ></fanc-field>
</fanc-form>
```

### 标签位置

```vue
<!-- 标签在左侧 -->
<fanc-field label="用户名" v-model="username"></fanc-field>

<!-- 标签在顶部 -->
<fanc-field label="用户名" v-model="username" label-position="top"></fanc-field>
```

### 自定义标签宽度

```vue
<fanc-field label="用户名" v-model="username" label-width="120px"></fanc-field>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 输入框类型，支持 `text` `password` `textarea` `number` `digit` 等 | String | `text` |
| value | 输入框的值 | String \| Number | - |
| label | 输入框的描述名称 | String | - |
| label-width | 标签宽度 | String | `88px` |
| required | 是否必填 | Boolean | `false` |
| placeholder | 占位提示文字 | String | `请输入` |
| placeholder-style | 占位提示文字样式 | String | - |
| left-icon | 输入框左侧图标名称 | String | - |
| right-icon | 输入框右侧图标名称 | String | - |
| clearable | 是否显示清除按钮 | Boolean | `false` |
| readonly | 是否只读 | Boolean | `false` |
| disabled | 是否禁用 | Boolean | `false` |
| border | 是否显示边框 | Boolean | `true` |
| maxlength | 最大输入长度 | String \| Number | `-1` |
| autosize | 是否根据内容自动调整高度 (textarea模式下有效) | Boolean | `false` |
| error | 是否错误状态 | Boolean | `false` |
| error-message | 错误提示信息 | String | - |
| show-word-limit | 是否显示字数统计 | Boolean | `false` |
| clickable | 是否可点击 | Boolean | `false` |
| center | 是否垂直居中 | Boolean | `false` |
| adjust-position | 输入框聚焦时是否上推页面 | Boolean | `true` |
| cursor-spacing | 输入框聚焦时光标与键盘的距离 | Number | `0` |
| focus | 是否自动聚焦 | Boolean | `false` |
| confirm-type | 设置键盘右下角按钮的文字，仅在type='text'时生效 | String | `done` |
| confirm-hold | 点击键盘右下角按钮时是否保持键盘不收起 | Boolean | `false` |
| cursor | 指定focus时的光标位置 | Number | `-1` |
| name | 表单字段名称，与表单model对应的属性名 | String | - |
| rules | 表单验证规则 | Object \| Array | `[]` |
| label-position | 标签位置，可选值为 `top` 或 `left` | String | `left` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 输入框内容变化时触发 | value: 输入框的值 |
| change | 输入框内容变化时触发 | value: 输入框的值 |
| focus | 输入框获得焦点时触发 | event: Event |
| blur | 输入框失去焦点时触发 | event: Event |
| confirm | 点击完成按钮时触发 | event: Event |
| clear | 点击清除按钮时触发 | - |
| click-right-icon | 点击右侧图标时触发 | - |
| click-icon | 点击图标时触发 | position: 图标位置，'clear'/'password'/'right' |
| keyboardheightchange | 键盘高度变化时触发 | event: Event |

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| resetField | 重置字段值和验证状态 | - | - |
| clearValidate | 清除校验状态 | - | - |
| validateField | 验证字段 | - | Promise |

### Slots

| 名称 | 说明 |
| --- | --- |
| label | 自定义标签 |
| left-icon | 自定义左侧图标 |
| right-icon | 自定义右侧图标 |

## 注意事项

1. 当与 `fanc-form` 组件一起使用时，需要设置 `name` 属性，并且与表单数据对象的属性名对应
2. 使用 `rules` 属性进行表单验证时，验证规则格式与 async-validator 库一致
3. 使用 `type="textarea"` 时，可以通过 `autosize` 属性实现高度自适应
4. 当设置 `clearable` 为 `true` 时，输入框聚焦且有内容时会显示清除按钮
5. 当设置 `type="password"` 时，输入框会自动显示密码可见切换按钮 