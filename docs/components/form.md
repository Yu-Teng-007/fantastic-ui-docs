# Form 表单

表单组件，用于数据收集、校验和提交，支持输入框、单选框、复选框、文件上传等类型。

## 基础用法

在表单中，每个 `fanc-field` 代表一个表单项，使用 `fanc-form` 作为表单项的父级组件。

```vue
<template>
  <fanc-form>
    <fanc-field v-model="username" label="用户名" placeholder="请输入用户名" />
    <fanc-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
  </fanc-form>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
</script>
```

## 表单校验

通过 `rules` 定义表单校验规则，通过 `validate` 方法可以触发表单校验。

```vue
<template>
  <fanc-form ref="formRef" :model="formData" :rules="rules">
    <fanc-field
      v-model="formData.username"
      name="username"
      label="用户名"
      placeholder="请输入用户名"
      :rules="[
        { required: true, message: '请填写用户名' },
        { pattern: /^\w{3,20}$/, message: '用户名格式不正确' }
      ]"
    />
    <fanc-field
      v-model="formData.password"
      name="password"
      type="password"
      label="密码"
      placeholder="请输入密码"
    />
    <fanc-field
      v-model="formData.email"
      name="email"
      label="邮箱"
      placeholder="请输入邮箱"
    />
    <view class="form-button">
      <fanc-button type="primary" @click="submitForm">提交</fanc-button>
      <fanc-button @click="resetForm">重置</fanc-button>
    </view>
  </fanc-form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { showToast } from 'fantastic-ui';

const formRef = ref(null);
const formData = reactive({
  username: '',
  password: '',
  email: ''
});

const rules = {
  username: [
    { required: true, message: '请填写用户名' },
    { pattern: /^\w{3,20}$/, message: '用户名格式不正确' }
  ],
  password: [
    { required: true, message: '请填写密码' },
    { min: 6, message: '密码不能少于6位' }
  ],
  email: [
    { required: true, message: '请填写邮箱' },
    { type: 'email', message: '邮箱格式不正确' }
  ]
};

const submitForm = () => {
  formRef.value.validate().then(valid => {
    if (valid) {
      showToast('提交成功');
      console.log('表单数据', formData);
    }
  }).catch(errors => {
    showToast('表单校验失败');
    console.log('校验失败', errors);
  });
};

const resetForm = () => {
  formRef.value.resetFields();
};
</script>

<style>
.form-button {
  margin-top: 16px;
  display: flex;
  gap: 10px;
}
</style>
```

## 校验规则

通过 `rules` 定义表单校验规则，支持多种校验类型。

```vue
<template>
  <fanc-form ref="formRef" :model="formData">
    <fanc-field
      v-model="formData.field1"
      name="field1"
      label="必填字段"
      placeholder="请输入"
      :rules="[{ required: true, message: '请填写该字段' }]"
    />
    <fanc-field
      v-model="formData.field2"
      name="field2"
      label="正则校验"
      placeholder="请输入手机号"
      :rules="[{ pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' }]"
    />
    <fanc-field
      v-model="formData.field3"
      name="field3"
      label="自定义校验"
      placeholder="请输入"
      :rules="[{ validator: customValidator, message: '自定义校验失败' }]"
    />
    <fanc-field
      v-model="formData.field4"
      name="field4"
      label="异步校验"
      placeholder="请输入"
      :rules="[{ validator: asyncValidator, message: '异步校验失败' }]"
    />
  </fanc-form>
</template>

<script setup>
import { ref, reactive } from 'vue';

const formRef = ref(null);
const formData = reactive({
  field1: '',
  field2: '',
  field3: '',
  field4: ''
});

const customValidator = (val) => {
  return val === 'fantastic';
};

const asyncValidator = (val) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val.length > 5);
    }, 1000);
  });
};
</script>
```

## 表单项类型

表单支持各种类型的表单项，如单选框、复选框、开关等。

```vue
<template>
  <fanc-form ref="formRef" :model="formData">
    <fanc-field
      v-model="formData.switch"
      name="switch"
      label="开关"
    >
      <template #input>
        <fanc-switch v-model="formData.switch" />
      </template>
    </fanc-field>
    
    <fanc-field
      name="radio"
      label="单选框"
    >
      <template #input>
        <fanc-radio-group v-model="formData.radio">
          <fanc-radio name="1">选项一</fanc-radio>
          <fanc-radio name="2">选项二</fanc-radio>
        </fanc-radio-group>
      </template>
    </fanc-field>
    
    <fanc-field
      name="checkbox"
      label="复选框"
    >
      <template #input>
        <fanc-checkbox-group v-model="formData.checkbox">
          <fanc-checkbox name="1">选项一</fanc-checkbox>
          <fanc-checkbox name="2">选项二</fanc-checkbox>
        </fanc-checkbox-group>
      </template>
    </fanc-field>
    
    <fanc-field
      v-model="formData.stepper"
      name="stepper"
      label="步进器"
    >
      <template #input>
        <fanc-stepper v-model="formData.stepper" />
      </template>
    </fanc-field>
    
    <fanc-field
      v-model="formData.rate"
      name="rate"
      label="评分"
    >
      <template #input>
        <fanc-rate v-model="formData.rate" />
      </template>
    </fanc-field>
  </fanc-form>
</template>

<script setup>
import { reactive } from 'vue';

const formData = reactive({
  switch: false,
  radio: '1',
  checkbox: [],
  stepper: 1,
  rate: 3
});
</script>
```

## 表单布局

通过 `label-width`、`label-align`、`input-align` 等属性可以控制表单的布局。

```vue
<template>
  <fanc-form label-width="100px" label-align="right">
    <fanc-field v-model="username" label="用户名" placeholder="请输入用户名" />
    <fanc-field v-model="password" type="password" label="密码" placeholder="请输入密码" />
  </fanc-form>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
</script>
```

## 动态增减表单项

可以动态增加或删除表单项。

```vue
<template>
  <fanc-form ref="formRef" :model="formData">
    <fanc-field
      v-for="(item, index) in formData.items"
      :key="index"
      v-model="item.value"
      :label="`项目${index + 1}`"
      placeholder="请输入"
      :rules="[{ required: true, message: '请填写该字段' }]"
    >
      <template #button>
        <fanc-icon name="delete" @click="removeItem(index)" />
      </template>
    </fanc-field>
    
    <view class="form-button">
      <fanc-button type="primary" @click="addItem">添加项目</fanc-button>
      <fanc-button @click="submitForm">提交</fanc-button>
    </view>
  </fanc-form>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { showToast } from 'fantastic-ui';

const formRef = ref(null);
const formData = reactive({
  items: [{ value: '' }]
});

const addItem = () => {
  formData.items.push({ value: '' });
};

const removeItem = (index) => {
  formData.items.splice(index, 1);
};

const submitForm = () => {
  formRef.value.validate().then(valid => {
    if (valid) {
      showToast('提交成功');
      console.log('表单数据', formData);
    }
  }).catch(errors => {
    showToast('表单校验失败');
    console.log('校验失败', errors);
  });
};
</script>

<style>
.form-button {
  margin-top: 16px;
  display: flex;
  gap: 10px;
}
</style>
```

## API

### Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model | 表单数据对象 | _object_ | - |
| rules | 表单验证规则 | _object_ | - |
| label-width | 表单项 label 宽度，默认单位为 `px` | _number \| string_ | - |
| label-align | 表单项 label 对齐方式，可选值为 `center` `right` | _string_ | `left` |
| input-align | 输入框对齐方式，可选值为 `center` `right` | _string_ | `left` |
| error-message-align | 错误提示文案对齐方式，可选值为 `center` `right` | _string_ | `left` |
| colon | 是否在 label 后面添加冒号 | _boolean_ | `false` |
| validate-trigger | 表单校验触发时机，可选值为 `blur` `change` `submit` | _string_ | `submit` |
| validate-first | 是否在某一项校验不通过时停止校验 | _boolean_ | `false` |
| scroll-to-error | 是否在提交表单且校验不通过时滚动至错误的表单项 | _boolean_ | `false` |
| show-error | 是否在校验不通过时标红输入框 | _boolean_ | `true` |
| show-error-message | 是否在校验不通过时在输入框下方展示错误提示 | _boolean_ | `true` |

### Form Methods

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| submit | 提交表单，与点击提交按钮的效果等价 | - | - |
| validate | 验证表单，支持传入 `name` 来验证单个或部分表单项 | _name?: string \| string[]_ | _Promise_ |
| resetValidation | 重置表单项的验证提示，支持传入 `name` 来重置单个或部分表单项 | _name?: string \| string[]_ | - |
| resetFields | 重置表单项为初始值，并移除校验结果 | - | - |
| getValues | 获取所有表单项当前的值 | - | _object_ |
| scrollToField | 滚动到对应表单项 | _name: string, options?: ScrollIntoViewOptions_ | - |

### Form Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| submit | 提交表单且验证通过后触发 | _values: object_ |
| failed | 提交表单且验证不通过后触发 | _errorInfo: { values: object, errors: object[] }_ |

### Field Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 表单项 name，作为提交表单时的标识符 | _string_ | - |
| rules | 表单校验规则 | _Rule[]_ | - |

### Rule 数据结构

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| required | 是否为必选字段 | _boolean_ |
| message | 错误提示文案 | _string_ |
| validator | 通过函数进行校验 | _(val: any) => boolean \| Promise\<boolean\>_ |
| pattern | 通过正则表达式进行校验 | _RegExp_ |
| trigger | 本项规则的触发时机，可选值为 `blur` `change` `submit` | _string_ |
| formatter | 格式化函数，将表单项的值转换后进行校验 | _(val: any) => any_ |
| type | 内置校验类型，可选值为 `email` `url` `number` `string` | _string_ |
| min | 最小长度或最小值 | _number_ |
| max | 最大长度或最大值 | _number_ |
| len | 要求长度为 len | _number_ |
| enum | 枚举类型，值必须是 enum 中的一个 | _any[]_ |
| whitespace | 是否不允许纯空白字符 | _boolean_ | 