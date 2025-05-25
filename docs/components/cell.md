# Cell 单元格

单元格组件，用于列表或表单，支持左侧标题和右侧内容的展示。

## 基础用法

单元格由 `title` 和 `content` 两部分组成，`title` 是左侧标题，`content` 是右侧内容。

```vue
<template>
  <fanc-cell title="单元格" content="内容" />
  <fanc-cell title="单元格" content="内容" description="描述信息" />
</template>
```

## 单元格大小

通过 `large` 属性可以设置单元格为大号尺寸。

```vue
<template>
  <fanc-cell title="单元格" content="内容" large />
  <fanc-cell title="单元格" content="内容" description="描述信息" large />
</template>
```

## 展示图标

通过 `icon` 属性在单元格左侧展示图标。

```vue
<template>
  <fanc-cell title="单元格" content="内容" icon="star" />
  <fanc-cell title="单元格" content="内容" icon="location" />
</template>
```

## 展示箭头

通过 `isLink` 属性可以展示箭头并开启点击反馈。

```vue
<template>
  <fanc-cell title="单元格" isLink />
  <fanc-cell title="单元格" isLink content="内容" />
</template>
```

## 箭头方向

通过 `arrowDirection` 属性可以设置箭头方向。

```vue
<template>
  <fanc-cell title="箭头向右" isLink />
  <fanc-cell title="箭头向下" isLink arrowDirection="down" />
  <fanc-cell title="箭头向上" isLink arrowDirection="up" />
  <fanc-cell title="箭头向左" isLink arrowDirection="left" />
</template>
```

## 页面导航

可以通过 `url` 属性进行 URL 跳转，或通过 `to` 属性进行路由跳转。

```vue
<template>
  <fanc-cell title="URL 跳转" isLink url="/pages/index/index" />
  <fanc-cell title="路由跳转" isLink :to="{ url: '/pages/index/index' }" />
</template>
```

## 垂直居中

通过 `center` 属性可以让单元格垂直居中。

```vue
<template>
  <fanc-cell title="单元格" content="内容" center />
  <fanc-cell title="单元格" content="内容" description="描述信息" center />
</template>
```

## 自定义内容

可以通过插槽自定义单元格的各个部分。

```vue
<template>
  <fanc-cell>
    <template #title>
      <view style="color: red;">自定义标题</view>
    </template>
    <template #default>
      <fanc-button size="small" type="primary">按钮</fanc-button>
    </template>
  </fanc-cell>
  
  <fanc-cell title="单元格">
    <template #icon>
      <fanc-icon name="star" color="red" />
    </template>
    <template #right-icon>
      <fanc-icon name="setting" />
    </template>
  </fanc-cell>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 单元格标题 | _string_ | - |
| content | 单元格右侧内容 | _string_ | - |
| description | 标题下方描述 | _string_ | - |
| icon | 左侧图标名称 | _string_ | - |
| isLink | 是否显示右侧箭头并开启点击反馈 | _boolean_ | `false` |
| arrowDirection | 箭头方向，可选值为 `left` `up` `down` `right` | _string_ | `right` |
| large | 是否使用大号单元格 | _boolean_ | `false` |
| center | 是否垂直居中 | _boolean_ | `false` |
| borderless | 是否隐藏底部边框 | _boolean_ | `false` |
| titleWidth | 标题宽度，默认为 auto | _string_ | - |
| url | 点击后跳转的链接地址 | _string_ | - |
| to | 点击后跳转的路由对象 | _string \| object_ | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击单元格时触发 | _event: Event_ |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义右侧内容 |
| title | 自定义左侧标题 |
| icon | 自定义左侧图标 |
| right-icon | 自定义右侧图标 |
| description | 自定义标题下方描述 |
| content | 自定义右侧内容（同 default） | 