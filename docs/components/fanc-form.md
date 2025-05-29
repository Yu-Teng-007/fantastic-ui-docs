# fanc-form 表单组件

## 组件介绍

`fanc-form` 是一个功能完善的表单容器组件，用于收集、验证和提交表单数据。它支持表单验证、动态表单项、数据双向绑定等特性，可以与 `fanc-field` 等表单项组件配合使用，轻松构建各种复杂的表单界面。

## 组件特性

- 支持表单数据模型绑定
- 支持表单验证规则配置
- 支持多种验证触发方式
- 支持表单项禁用
- 支持表单验证错误自动滚动
- 支持表单项标签位置和宽度配置
- 支持内联表单布局

## 组件用法

### 基础用法

```vue
<template>
  <fanc-form :model="formData" :rules="rules" @submit="onSubmit">
    <fanc-field label="用户名" name="username" v-model="formData.username"></fanc-field>
    <fanc-field label="密码" type="password" name="password" v-model="formData.password"></fanc-field>
    <view class="form-button">
      <fanc-button type="primary" @click="submitForm">提交</fanc-button>
    </view>
  </fanc-form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名' },
          { min: 3, max: 20, message: '用户名长度在 3 到 20 个字符' }
        ],
        password: [
          { required: true, message: '请输入密码' },
          { min: 6, message: '密码至少 6 个字符' }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate().then(valid => {
        if (valid) {
          console.log('表单验证通过', this.formData);
        } else {
          console.log('表单验证失败');
        }
      });
    },
    onSubmit(formData) {
      console.log('表单提交', formData);
    }
  }
};
</script>
```

### 表单验证

```vue
<fanc-form :model="formData" :rules="rules" ref="form">
  <fanc-field 
    label="用户名" 
    name="username" 
    v-model="formData.username"
    placeholder="请输入用户名"
  ></fanc-field>
  <fanc-field 
    label="邮箱" 
    name="email" 
    v-model="formData.email"
    placeholder="请输入邮箱"
  ></fanc-field>
  <fanc-field 
    label="手机号" 
    name="phone" 
    v-model="formData.phone"
    placeholder="请输入手机号"
  ></fanc-field>
</fanc-form>
```

```javascript
data() {
  return {
    formData: {
      username: '',
      email: '',
      phone: ''
    },
    rules: {
      username: [
        { required: true, message: '请输入用户名' }
      ],
      email: [
        { required: true, message: '请输入邮箱' },
        { type: 'email', message: '请输入正确的邮箱格式' }
      ],
      phone: [
        { required: true, message: '请输入手机号' },
        { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }
      ]
    }
  };
}
```

### 表单项标签位置

```vue
<!-- 标签在左侧 -->
<fanc-form label-position="left" label-width="100px">
  <fanc-field label="用户名"></fanc-field>
  <fanc-field label="密码"></fanc-field>
</fanc-form>

<!-- 标签在顶部 -->
<fanc-form label-position="top">
  <fanc-field label="用户名"></fanc-field>
  <fanc-field label="密码"></fanc-field>
</fanc-form>
```

### 内联表单

```vue
<fanc-form :model="formData" inline>
  <fanc-field label="用户名" name="username" v-model="formData.username"></fanc-field>
  <fanc-field label="密码" type="password" name="password" v-model="formData.password"></fanc-field>
  <fanc-button type="primary" size="small">查询</fanc-button>
</fanc-form>
```

### 表单方法调用

```javascript
// 表单验证
this.$refs.form.validate().then(result => {
  if (result.valid) {
    console.log('表单验证通过');
  } else {
    console.log('表单验证失败', result.fields);
  }
});

// 重置表单
this.$refs.form.resetFields();

// 清除验证
this.$refs.form.clearValidate();

// 验证部分字段
this.$refs.form.validate(['username', 'email']).then(result => {
  console.log(result);
});
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model | 表单数据对象 | Object | `{}` |
| rules | 表单验证规则 | Object | `{}` |
| validate-on-change | 是否在表单域的值发生变化时立即验证 | Boolean | `true` |
| validate-trigger | 表单验证触发方式，可选值为 `onChange` `onBlur` `onSubmit` | String | `onChange` |
| disabled | 是否禁用表单内的所有组件 | Boolean | `false` |
| scroll-to-error | 是否在提交表单且校验不通过时滚动至错误的表单项 | Boolean | `true` |
| show-error-message | 是否显示验证错误信息 | Boolean | `true` |
| label-width | 表单项标签宽度 | String | `88px` |
| label-position | 表单项标签的位置，可选值为 `left` `top` | String | `left` |
| inline | 是否为内联表单 | Boolean | `false` |
| border | 是否有边框 | Boolean | `true` |
| padding | 表单内边距 | String | `12px` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| submit | 提交表单且验证通过后触发 | formData: 表单数据对象 |
| validate-error | 表单验证不通过时触发 | fields: 验证失败的表单项错误信息 |

### Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| validate | 验证整个表单 | fieldNames?: string[] (可选，指定验证的字段) | Promise<{valid: boolean, fields: object}> |
| resetFields | 重置表单值和验证状态 | fieldNames?: string[] (可选，指定重置的字段) | - |
| clearValidate | 清除验证错误信息 | fieldNames?: string[] (可选，指定清除的字段) | - |
| submit | 提交表单 | - | - |

## 注意事项

1. 表单验证基于 async-validator 库实现，规则格式请参考该库文档
2. 表单项组件需要设置 `name` 属性，并且与表单数据对象的属性名对应
3. 当使用表单验证时，需要给表单设置 `ref` 属性，以便调用表单方法
4. 内联表单适合简单的表单布局，对于复杂表单建议使用标准布局 