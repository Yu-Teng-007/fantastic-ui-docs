# fanc-image 图片组件

## 组件介绍

`fanc-image` 是一个功能丰富的图片组件，用于展示图片，并处理图片加载中、加载失败等状态。它支持多种图片裁剪模式、懒加载、圆形图片、替代图片等特性，可以满足各种场景下的图片展示需求。

## 组件特性

- 支持多种图片裁剪和缩放模式
- 支持图片加载中状态展示
- 支持图片加载失败状态展示和替代图片
- 支持圆形图片展示
- 支持懒加载
- 支持自定义宽高和样式
- 支持长按菜单

## 组件用法

### 基础用法

```vue
<fanc-image src="https://example.com/image.jpg" width="200" height="200"></fanc-image>
```

### 图片裁剪模式

```vue
<!-- 等比缩放，保证图片的长边能完全显示出来 -->
<fanc-image src="https://example.com/image.jpg" mode="aspectFit"></fanc-image>

<!-- 等比缩放，保证图片的短边能完全显示出来，长边将会被裁剪（默认） -->
<fanc-image src="https://example.com/image.jpg" mode="aspectFill"></fanc-image>

<!-- 拉伸图片以适应容器 -->
<fanc-image src="https://example.com/image.jpg" mode="scaleToFill"></fanc-image>

<!-- 宽度不变，高度自动变化，保持原图宽高比不变 -->
<fanc-image src="https://example.com/image.jpg" mode="widthFix"></fanc-image>

<!-- 高度不变，宽度自动变化，保持原图宽高比不变 -->
<fanc-image src="https://example.com/image.jpg" mode="heightFix"></fanc-image>
```

### 圆形图片

```vue
<fanc-image src="https://example.com/image.jpg" width="100" height="100" round></fanc-image>
```

### 加载失败处理

```vue
<!-- 使用替代图片 -->
<fanc-image 
  src="https://example.com/invalid-image.jpg" 
  fallback-src="https://example.com/fallback.jpg"
></fanc-image>

<!-- 自定义错误提示文本 -->
<fanc-image 
  src="https://example.com/invalid-image.jpg" 
  error-text="图片加载失败"
></fanc-image>

<!-- 自定义错误提示内容 -->
<fanc-image src="https://example.com/invalid-image.jpg">
  <template #error>
    <view class="custom-error">
      <fanc-icon name="image-slash" size="24"></fanc-icon>
      <text>加载失败</text>
    </view>
  </template>
</fanc-image>
```

### 加载中状态

```vue
<!-- 自定义加载提示文本 -->
<fanc-image 
  src="https://example.com/large-image.jpg" 
  loading-text="加载中..."
></fanc-image>

<!-- 自定义加载中内容 -->
<fanc-image src="https://example.com/large-image.jpg">
  <template #loading>
    <view class="custom-loading">
      <fanc-icon name="spinner" spin size="24"></fanc-icon>
      <text>正在加载图片...</text>
    </view>
  </template>
</fanc-image>
```

### 图片懒加载

```vue
<fanc-image src="https://example.com/image.jpg" lazy-load></fanc-image>
```

### 自定义样式

```vue
<fanc-image 
  src="https://example.com/image.jpg" 
  width="200" 
  height="150" 
  background="#f2f2f2"
  :custom-style="{ border: '1px solid #ddd', borderRadius: '8px' }"
></fanc-image>
```

### 长按图片显示菜单

```vue
<fanc-image src="https://example.com/image.jpg" show-menu-by-longpress></fanc-image>
```

### 监听事件

```vue
<fanc-image 
  src="https://example.com/image.jpg" 
  @load="onImageLoad" 
  @error="onImageError"
  @click="onImageClick"
></fanc-image>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | String | - |
| fallback-src | 替代图片链接（加载失败时显示） | String | - |
| mode | 图片裁剪、缩放的模式 | String | `aspectFill` |
| width | 宽度，支持数值或带单位字符串 | Number \| String | `100px` |
| height | 高度，支持数值或带单位字符串 | Number \| String | `100px` |
| round | 是否显示为圆形图片 | Boolean | `false` |
| lazy-load | 是否开启图片懒加载 | Boolean | `false` |
| loading-text | 加载中提示文字 | String | - |
| error-text | 加载失败提示文字 | String | - |
| show-menu-by-longpress | 是否开启长按图片显示菜单 | Boolean | `false` |
| background | 背景颜色 | String | - |
| custom-style | 自定义样式 | Object | `{}` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| load | 图片加载完成时触发 | event: Event |
| error | 图片加载失败时触发 | event: Event |
| click | 点击图片时触发 | event: Event |

### Slots

| 名称 | 说明 |
| --- | --- |
| loading | 自定义加载中的内容 |
| error | 自定义加载失败的内容 |

### mode 可选值

| 值 | 说明 |
| --- | --- |
| scaleToFill | 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满容器 |
| aspectFit | 保持纵横比缩放图片，使图片的长边能完全显示出来 |
| aspectFill | 保持纵横比缩放图片，只保证图片的短边能完全显示出来，长边将会被裁剪 |
| widthFix | 宽度不变，高度自动变化，保持原图宽高比不变 |
| heightFix | 高度不变，宽度自动变化，保持原图宽高比不变 |
| top | 不缩放图片，只显示图片的顶部区域 |
| bottom | 不缩放图片，只显示图片的底部区域 |
| center | 不缩放图片，只显示图片的中间区域 |
| left | 不缩放图片，只显示图片的左边区域 |
| right | 不缩放图片，只显示图片的右边区域 |
| top left | 不缩放图片，只显示图片的左上边区域 |
| top right | 不缩放图片，只显示图片的右上边区域 |
| bottom left | 不缩放图片，只显示图片的左下边区域 |
| bottom right | 不缩放图片，只显示图片的右下边区域 |

## 注意事项

1. 当图片加载失败时，如果设置了 `fallback-src`，组件会尝试加载替代图片
2. 使用 `lazy-load` 属性可以延迟加载图片，直到图片出现在视口范围内才会开始加载
3. `mode` 属性用于设置图片的裁剪和缩放模式，不同的模式会有不同的显示效果
4. 当设置 `round` 为 `true` 时，图片会显示为圆形，适合用于头像等场景
5. 可以通过 `width` 和 `height` 属性设置图片容器的尺寸，支持数值（自动添加 px 单位）或带单位的字符串 