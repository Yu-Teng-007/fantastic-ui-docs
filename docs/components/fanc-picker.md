# fanc-picker 选择器组件

## 组件介绍

`fanc-picker` 是一个移动端选择器组件，用于在多个选项中进行单选或多列选择。它支持单列选择、多列选择和级联选择等多种模式，适用于日期选择、地区选择、自定义菜单等场景。

## 组件特性

- 支持单列选择、多列选择和级联选择
- 支持自定义选项文本和值
- 支持禁用选项
- 支持自定义选择器高度和样式
- 支持设置默认选中项
- 支持显示/隐藏顶部工具栏
- 支持自定义确认和取消按钮文本
- 支持圆角样式
- 支持遮罩层

## 组件用法

### 基础用法

```vue
<template>
  <fanc-button @click="showPicker = true">打开选择器</fanc-button>
  <fanc-picker
    v-model:show="showPicker"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
  />
</template>

<script>
export default {
  data() {
    return {
      showPicker: false,
      columns: ['选项1', '选项2', '选项3', '选项4', '选项5']
    }
  },
  methods: {
    onConfirm(e) {
      console.log('选中值:', e.value);
      console.log('选中项:', e.items);
      console.log('选中索引:', e.index);
    },
    onCancel() {
      console.log('取消选择');
    }
  }
}
</script>
```

### 对象数组格式

```vue
<fanc-picker
  v-model:show="showPicker"
  :columns="[
    { text: '杭州', value: 'hangzhou' },
    { text: '宁波', value: 'ningbo' },
    { text: '温州', value: 'wenzhou' },
    { text: '绍兴', value: 'shaoxing' }
  ]"
  text-key="text"
  value-key="value"
/>
```

### 设置默认选中项

```vue
<fanc-picker
  v-model:show="showPicker"
  :columns="columns"
  :default-index="[2]"
/>
```

### 多列选择

```vue
<fanc-picker
  v-model:show="showPicker"
  :columns="[
    ['周一', '周二', '周三', '周四', '周五'],
    ['上午', '下午', '晚上']
  ]"
  :default-index="[1, 2]"
/>
```

### 级联选择

```vue
<fanc-picker
  v-model:show="showPicker"
  :columns="cascadeColumns"
  :cascade="true"
  children-key="children"
/>
```

```javascript
data() {
  return {
    cascadeColumns: [
      {
        text: '浙江',
        value: 'zhejiang',
        children: [
          {
            text: '杭州',
            value: 'hangzhou',
            children: [
              { text: '西湖区', value: 'xihu' },
              { text: '余杭区', value: 'yuhang' }
            ]
          },
          {
            text: '宁波',
            value: 'ningbo',
            children: [
              { text: '海曙区', value: 'haishu' },
              { text: '江北区', value: 'jiangbei' }
            ]
          }
        ]
      },
      {
        text: '江苏',
        value: 'jiangsu',
        children: [
          {
            text: '南京',
            value: 'nanjing',
            children: [
              { text: '玄武区', value: 'xuanwu' },
              { text: '秦淮区', value: 'qinhuai' }
            ]
          },
          {
            text: '苏州',
            value: 'suzhou',
            children: [
              { text: '姑苏区', value: 'gusu' },
              { text: '吴中区', value: 'wuzhong' }
            ]
          }
        ]
      }
    ]
  }
}
```

### 禁用选项

```vue
<fanc-picker
  v-model:show="showPicker"
  :columns="[
    { text: '选项1', value: '1' },
    { text: '选项2', value: '2', disabled: true },
    { text: '选项3', value: '3' }
  ]"
/>
```

### 自定义样式

```vue
<fanc-picker
  v-model:show="showPicker"
  :columns="columns"
  title="请选择"
  confirm-text="完成"
  cancel-text="返回"
  :round="true"
  height="250px"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示选择器 | Boolean | `false` |
| title | 选择器标题 | String | `请选择` |
| columns | 选择器数据，可以是字符串数组、对象数组或多维数组 | Array | `[]` |
| default-index | 默认选中项索引数组 | Array | `[]` |
| show-toolbar | 是否显示顶部工具栏 | Boolean | `true` |
| confirm-text | 确认按钮文字 | String | `确认` |
| cancel-text | 取消按钮文字 | String | `取消` |
| disabled | 是否禁用选择器 | Boolean | `false` |
| height | 选择器高度 | String | `200px` |
| overlay | 是否显示遮罩层 | Boolean | `true` |
| round | 是否显示圆角 | Boolean | `false` |
| text-key | 选项对象中，文字对应的键名 | String | `text` |
| value-key | 选项对象中，值对应的键名 | String | `value` |
| cascade | 是否级联选择 | Boolean | `false` |
| children-key | 级联选择中，子选项对应的键名 | String | `children` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| confirm | 点击确认按钮时触发 | { value, index, items } |
| cancel | 点击取消按钮时触发 | - |
| change | 选项改变时触发 | { picker, value, index, items } |
| update:show | 选择器显示状态变化时触发 | show: 是否显示 |

### 回调参数说明

| 参数 | 说明 |
| --- | --- |
| value | 选中选项的值数组 |
| index | 选中选项的索引数组 |
| items | 选中选项的对象数组 |
| picker | 选择器实例 |

## 注意事项

1. 单列选择时，`columns` 可以是简单字符串数组或对象数组
2. 多列选择时，`columns` 应该是二维数组，每个子数组代表一列
3. 级联选择时，需要设置 `cascade` 为 `true`，并且 `columns` 应该是具有子选项结构的对象数组
4. 使用对象数组时，可以通过 `text-key` 和 `value-key` 自定义文本和值的字段名
5. 禁用选项时，需要在选项对象中设置 `disabled: true`
6. 选择器高度可以通过 `height` 属性自定义
7. 使用 `v-model:show` 可以双向绑定选择器的显示状态 