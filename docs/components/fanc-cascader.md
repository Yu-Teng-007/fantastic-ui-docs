# fanc-cascader 级联选择器组件

## 组件介绍

`fanc-cascader` 是一个级联选择器组件，用于从一组相关联的数据集合中进行选择，常用于省市区、分类选择等具有层级关系的数据选择场景。它支持水平和垂直两种布局模式，可以自定义样式和交互行为。

## 组件特性

- 支持水平和垂直两种布局模式
- 支持自定义选中项颜色
- 支持默认选中项设置
- 支持选项禁用
- 支持关闭后重置选择
- 支持自定义标题和按钮文本
- 提供完整的选择路径和变化事件
- 支持弹出位置和样式自定义
- 自动滚动到当前选中的选项卡

## 组件用法

### 基础用法

```vue
<template>
  <view>
    <fanc-button @click="showCascader = true">选择地区</fanc-button>
    <fanc-cascader
      v-model:show="showCascader"
      :options="options"
      @finish="onFinish"
      @close="onClose"
    />
  </view>
</template>

<script>
export default {
  data() {
    return {
      showCascader: false,
      options: [
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
  },
  methods: {
    onFinish(result) {
      console.log('选择完成:', result);
      console.log('选中的值:', result.values);
      console.log('选中的文本:', result.texts);
      console.log('选中的选项:', result.options);
    },
    onClose() {
      console.log('级联选择器关闭');
    }
  }
}
</script>
```

### 垂直布局模式

```vue
<fanc-cascader
  v-model:show="showCascader"
  :options="options"
  mode="vertical"
  @finish="onFinish"
/>
```

### 设置默认选中项

```vue
<fanc-cascader
  v-model:show="showCascader"
  :options="options"
  :default-value="['zhejiang', 'hangzhou', 'xihu']"
  @finish="onFinish"
/>
```

### 自定义样式

```vue
<fanc-cascader
  v-model:show="showCascader"
  :options="options"
  active-color="#ff6b00"
  title="请选择地区"
  confirm-text="完成"
  cancel-text="返回"
  @finish="onFinish"
/>
```

### 禁用选项

```vue
<template>
  <fanc-cascader
    v-model:show="showCascader"
    :options="disabledOptions"
    @finish="onFinish"
  />
</template>

<script>
export default {
  data() {
    return {
      showCascader: false,
      disabledOptions: [
        {
          text: '浙江',
          value: 'zhejiang',
          children: [
            {
              text: '杭州',
              value: 'hangzhou',
              disabled: true, // 禁用该选项
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
        }
      ]
    }
  }
}
</script>
```

### 监听选择变化

```vue
<fanc-cascader
  v-model:show="showCascader"
  :options="options"
  @change="onChange"
  @path-selected="onPathSelected"
  @finish="onFinish"
/>
```

```javascript
methods: {
  onChange(event) {
    console.log('选择变化:', event);
    console.log('当前选中值:', event.value);
    console.log('当前选中层级:', event.tabIndex);
    console.log('选中值数组:', event.values);
    console.log('选中文本数组:', event.texts);
  },
  onPathSelected(result) {
    console.log('选择了完整路径:', result);
  },
  onFinish(result) {
    console.log('确认选择:', result);
  }
}
```

### 关闭后重置选择

```vue
<fanc-cascader
  v-model:show="showCascader"
  :options="options"
  :reset-on-close="true"
  @finish="onFinish"
/>
```

### 自定义弹出位置

```vue
<fanc-cascader
  v-model:show="showCascader"
  :options="options"
  position="center"
  :round="false"
  @finish="onFinish"
/>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| show | 是否显示级联选择器 | Boolean | `false` |
| options | 可选项数据源 | Array | `[]` |
| default-value | 默认选中项 | Array | `[]` |
| show-header | 是否显示头部 | Boolean | `true` |
| title | 标题 | String | `请选择` |
| confirm-text | 确认按钮文字 | String | `确定` |
| cancel-text | 取消按钮文字 | String | `取消` |
| active-color | 选中项的高亮颜色 | String | - |
| reset-on-close | 关闭时是否重置选中值 | Boolean | `false` |
| overlay | 是否显示遮罩层 | Boolean | `true` |
| round | 是否显示圆角 | Boolean | `true` |
| close-icon-position | 关闭图标位置 | String | `top-right` |
| z-index | 弹出层层级 | Number \| String | `1000` |
| overlay-closable | 是否点击遮罩层关闭弹窗 | Boolean | `true` |
| position | 弹出位置，可选值为 `bottom` `center` | String | `bottom` |
| mode | 选项卡显示模式，可选值为 `horizontal` `vertical` | String | `horizontal` |

### options 数据结构

```javascript
[
  {
    text: '选项名',
    value: '选项值',
    disabled: false, // 是否禁用
    children: [
      // 子选项
      {
        text: '子选项名',
        value: '子选项值',
        disabled: false,
        children: [...] // 更多子选项
      }
    ]
  }
]
```

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中项变化时触发 | { value, tabIndex, values, texts } |
| path-selected | 选择完成一个完整路径时触发 | { values, texts, options } |
| finish | 点击确认按钮时触发 | { values, texts, options } |
| close | 关闭时触发 | - |
| update:show | 更新show属性值的事件 | show: 是否显示 |

### 回调参数说明

| 参数 | 说明 |
| --- | --- |
| value | 当前选中项的值 |
| tabIndex | 当前选中项的层级索引 |
| values | 所有选中项的值数组 |
| texts | 所有选中项的文本数组 |
| options | 所有选中项的选项对象数组 |

## 注意事项

1. `options` 数据源必须是一个数组，每个选项必须包含 `text` 属性，可以包含 `value`、`disabled` 和 `children` 属性
2. `default-value` 数组的长度应该与级联层级一致，例如省市区三级联动应该提供三个值
3. 当选择了一个没有子选项的选项时，会自动触发 `path-selected` 事件并关闭选择器
4. 垂直模式（`mode="vertical"`）适合选项较多的场景，可以同时显示多级选项
5. 水平模式（`mode="horizontal"`）适合移动端使用，每次只显示一级选项
6. 禁用选项（`disabled: true`）无法被点击选择
7. 设置 `reset-on-close` 为 `true` 时，关闭选择器会重置已选中的值
8. 使用 `v-model:show` 可以双向绑定选择器的显示状态 