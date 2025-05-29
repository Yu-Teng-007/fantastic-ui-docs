# fanc-cell 单元格组件

## 组件介绍

`fanc-cell` 是一个通用的单元格组件，用于展示信息、导航等场景。它通常作为列表项使用，可以包含标题、描述、图标和右侧内容等元素，常用于设置页面、个人信息展示等场景。

## 组件特性

- 支持左侧图标
- 支持标题和描述文本
- 支持右侧内容和箭头
- 支持点击跳转
- 支持自定义内容插槽
- 支持垂直居中对齐
- 支持隐藏底部边框

## 组件用法

### 基础用法

```vue
<fanc-cell title="单元格" content="内容"></fanc-cell>
<fanc-cell title="单元格" content="内容" description="描述信息"></fanc-cell>
```

### 显示图标

```vue
<fanc-cell title="单元格" icon="user"></fanc-cell>
<fanc-cell title="单元格">
  <template #icon>
    <fanc-icon name="star" color="#f0ad4e"></fanc-icon>
  </template>
</fanc-cell>
```

### 显示箭头

```vue
<fanc-cell title="单元格" is-link></fanc-cell>
<fanc-cell title="单元格" is-link arrow-direction="down"></fanc-cell>
```

### 页面导航

```vue
<!-- 使用 url 属性进行页面跳转 -->
<fanc-cell title="URL 跳转" is-link url="/pages/index/index"></fanc-cell>

<!-- 使用 to 属性进行路由跳转 -->
<fanc-cell title="路由跳转" is-link :to="{ path: '/pages/user/index' }"></fanc-cell>
```

### 单元格大小

```vue
<fanc-cell title="普通单元格"></fanc-cell>
<fanc-cell title="大号单元格" large></fanc-cell>
```

### 垂直居中

```vue
<fanc-cell title="单元格" content="内容" center></fanc-cell>
```

### 自定义内容

```vue
<fanc-cell title="单元格">
  <template #content>
    <fanc-button size="small">按钮</fanc-button>
  </template>
</fanc-cell>
```

### 自定义标题宽度

```vue
<fanc-cell title="单元格标题很长很长很长" title-width="120px" content="内容"></fanc-cell>
<fanc-cell title="单元格" title-width="auto" content="内容"></fanc-cell>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 单元格标题 | String | - |
| content | 单元格右侧内容 | String | - |
| description | 标题下方描述 | String | - |
| icon | 左侧图标名称 | String | - |
| is-link | 是否显示右侧箭头 | Boolean | `false` |
| arrow-direction | 箭头方向，可选值为 `left` `up` `down` `right` | String | `right` |
| large | 是否使用大号单元格 | Boolean | `false` |
| center | 是否垂直居中 | Boolean | `false` |
| borderless | 是否隐藏底部边框 | Boolean | `false` |
| title-width | 标题宽度，默认为 auto | String | - |
| url | 点击后跳转的链接地址 | String | - |
| to | 点击后跳转的路由对象 | String \| Object | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击单元格时触发 | - |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义右侧内容 |
| title | 自定义标题 |
| icon | 自定义左侧图标 |
| description | 自定义描述信息 |
| content | 自定义右侧内容 |
| right-icon | 自定义右侧图标 |

## 注意事项

1. `fanc-cell` 组件通常与 `fanc-cell-group` 组件一起使用，以形成一个完整的列表
2. 当使用 `url` 或 `to` 属性时，点击单元格会自动跳转到对应页面
3. 当设置 `is-link` 为 `true` 时，单元格会显示右侧箭头，并添加点击效果 