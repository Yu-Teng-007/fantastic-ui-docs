# fanc-dropdown-menu 下拉菜单组件

## 组件介绍

`fanc-dropdown-menu` 是一个下拉菜单组件，用于在页面中展示多个下拉选项，支持单选、排序、自定义样式等功能。它常用于筛选、排序、分类等场景，可以有效节省页面空间，提高用户交互效率。

## 组件特性

- 支持多个下拉菜单并列展示
- 支持向上或向下展开菜单
- 支持自定义选中项颜色
- 支持禁用特定菜单项
- 支持点击外部区域自动关闭
- 支持自定义排序功能
- 支持关闭后重置选择
- 支持手动更新选中值
- 提供丰富的事件回调

## 组件用法

### 基础用法

```vue
<template>
  <fanc-dropdown-menu :options="options" @select="onSelect">
  </fanc-dropdown-menu>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          title: '排序',
          options: [
            { text: '综合排序', value: 'default' },
            { text: '销量优先', value: 'sales' },
            { text: '价格升序', value: 'price-asc' },
            { text: '价格降序', value: 'price-desc' }
          ]
        },
        {
          title: '筛选',
          options: [
            { text: '全部商品', value: 'all' },
            { text: '新款商品', value: 'new' },
            { text: '活动商品', value: 'activity' }
          ]
        }
      ]
    }
  },
  methods: {
    onSelect(event) {
      console.log('选中菜单索引:', event.menuIndex);
      console.log('选中选项:', event.option);
      console.log('选中值:', event.value);
      console.log('选中文本:', event.text);
    }
  }
}
</script>
```

### 向上展开菜单

```vue
<fanc-dropdown-menu :options="options" direction="up"></fanc-dropdown-menu>
```

### 设置默认选中项

```vue
<fanc-dropdown-menu 
  :options="options" 
  :default-values="['sales', 'new']"
></fanc-dropdown-menu>
```

### 禁用菜单项

```vue
<template>
  <fanc-dropdown-menu :options="disabledOptions"></fanc-dropdown-menu>
</template>

<script>
export default {
  data() {
    return {
      disabledOptions: [
        {
          title: '排序',
          options: [
            { text: '综合排序', value: 'default' },
            { text: '销量优先', value: 'sales' }
          ]
        },
        {
          title: '筛选',
          disabled: true, // 禁用整个菜单
          options: [
            { text: '全部商品', value: 'all' },
            { text: '新款商品', value: 'new' }
          ]
        }
      ]
    }
  }
}
</script>
```

### 自定义选中颜色

```vue
<fanc-dropdown-menu 
  :options="options" 
  active-color="#ff6b00"
></fanc-dropdown-menu>
```

### 使用自定义排序函数

```vue
<template>
  <fanc-dropdown-menu 
    :options="options" 
    :sort-function="customSort"
  ></fanc-dropdown-menu>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          title: '排序',
          options: [
            { text: '综合排序', value: 'default', weight: 1 },
            { text: '销量优先', value: 'sales', weight: 3 },
            { text: '价格升序', value: 'price-asc', weight: 2 },
            { text: '价格降序', value: 'price-desc', weight: 4 }
          ]
        }
      ]
    }
  },
  methods: {
    // 根据权重排序
    customSort(options) {
      return [...options].sort((a, b) => b.weight - a.weight);
    }
  }
}
</script>
```

### 关闭后重置选择

```vue
<fanc-dropdown-menu 
  :options="options" 
  :reset-on-close="true"
></fanc-dropdown-menu>
```

### 手动控制选中值

```vue
<template>
  <view>
    <fanc-dropdown-menu 
      ref="dropdownMenu" 
      :options="options"
    ></fanc-dropdown-menu>
    
    <view class="button-group">
      <fanc-button @click="updateValue(0, 'sales')">设置为销量优先</fanc-button>
      <fanc-button @click="resetValues">重置选项</fanc-button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          title: '排序',
          options: [
            { text: '综合排序', value: 'default' },
            { text: '销量优先', value: 'sales' }
          ]
        }
      ]
    }
  },
  methods: {
    updateValue(menuIndex, value) {
      this.$refs.dropdownMenu.updateValue(menuIndex, value);
    },
    resetValues() {
      this.$refs.dropdownMenu.reset();
    }
  }
}
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| options | 菜单选项配置 | Array | `[]` |
| direction | 下拉方向，可选值为 `up` `down` | String | `down` |
| overlay | 是否显示遮罩层 | Boolean | `true` |
| default-values | 初始选中值数组 | Array | `[]` |
| reset-on-close | 关闭后是否重置选择 | Boolean | `false` |
| sort-function | 自定义排序函数 | Function | - |
| active-color | 自定义选中态颜色 | String | - |

### options 数据结构

```javascript
[
  {
    title: '菜单标题',
    disabled: false, // 是否禁用
    options: [
      { text: '选项文本', value: '选项值' },
      // 更多选项...
    ]
  },
  // 更多菜单...
]
```

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| select | 选择选项时触发 | { menuIndex, option, value, text } |
| open | 打开菜单时触发 | menuIndex: 菜单索引 |
| close | 关闭菜单时触发 | - |
| change | 选中值变化时触发 | { menuIndex, value, text } |
| reset | 重置选项时触发 | values: 重置后的值数组 |

### 方法

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| updateValue | 手动更新选中值 | menuIndex: 菜单索引, value: 选中值 |
| reset | 重置所有选择 | - |
| closeMenu | 关闭当前菜单 | - |

## 注意事项

1. `options` 必须是一个数组，每个元素必须包含 `title` 和 `options` 属性
2. `options` 中的每个选项必须包含 `text` 和 `value` 属性
3. `default-values` 数组长度应与 `options` 数组长度相同，用于设置各菜单的默认选中值
4. 自定义排序函数 `sort-function` 接收选项数组作为参数，需要返回排序后的新数组
5. 在移动端使用时，建议设置适当的菜单宽度，确保用户可以方便点击
6. 当设置 `direction="up"` 时，菜单会向上展开，适用于页面底部的筛选场景
7. 可以通过 `ref` 获取组件实例，调用 `updateValue` 和 `reset` 方法手动控制选中状态
8. 设置 `reset-on-close` 为 `true` 时，关闭菜单不会保存当前选择，再次打开将恢复之前的选择 