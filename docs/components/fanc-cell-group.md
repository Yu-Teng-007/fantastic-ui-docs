# fanc-cell-group 单元格组组件

## 组件介绍

`fanc-cell-group` 是一个用于将多个 `fanc-cell` 单元格组合在一起的容器组件，提供了分组标题、描述信息等功能，使单元格列表更加结构化和美观。

## 组件特性

- 支持分组标题和描述信息
- 支持卡片风格展示（圆角边框）
- 自动为内部单元格添加边框样式
- 提供统一的样式和间距

## 组件用法

### 基础用法

```vue
<fanc-cell-group>
  <fanc-cell title="单元格" content="内容"></fanc-cell>
  <fanc-cell title="单元格" content="内容"></fanc-cell>
</fanc-cell-group>
```

### 分组标题

```vue
<fanc-cell-group title="基本信息">
  <fanc-cell title="姓名" content="张三"></fanc-cell>
  <fanc-cell title="电话" content="13800138000"></fanc-cell>
</fanc-cell-group>
```

### 带描述信息

```vue
<fanc-cell-group title="基本信息" description="用户的基本个人信息">
  <fanc-cell title="姓名" content="张三"></fanc-cell>
  <fanc-cell title="电话" content="13800138000"></fanc-cell>
</fanc-cell-group>
```

### 卡片风格

```vue
<fanc-cell-group title="卡片风格" inset>
  <fanc-cell title="单元格" content="内容"></fanc-cell>
  <fanc-cell title="单元格" content="内容"></fanc-cell>
</fanc-cell-group>
```

### 自定义标题

```vue
<fanc-cell-group>
  <template #title>
    <view class="custom-title">
      <fanc-icon name="user" />
      <text>自定义标题</text>
    </view>
  </template>
  <fanc-cell title="单元格" content="内容"></fanc-cell>
  <fanc-cell title="单元格" content="内容"></fanc-cell>
</fanc-cell-group>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 分组标题 | String | - |
| description | 分组描述信息 | String | - |
| inset | 是否展示为圆角卡片风格 | Boolean | `false` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽，用于放置 fanc-cell 组件 |
| title | 自定义标题 |
| description | 自定义描述信息 |

## 注意事项

1. `fanc-cell-group` 内部应当只放置 `fanc-cell` 组件，以保证样式的一致性
2. 当使用 `inset` 属性时，单元格组会以卡片形式展示，并带有外边距和圆角
3. 当不需要标题和描述时，可以省略 `title` 和 `description` 属性 