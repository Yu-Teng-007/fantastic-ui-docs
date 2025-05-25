# Image 图片

图片组件，提供更多图片加载相关的能力，包括加载中提示、加载失败提示、圆角等特性。

## 基础用法

基础用法与普通 `img` 标签一致，设置 `src` 属性来指定图片地址。

```vue
<template>
  <fanc-image src="https://example.com/image.jpg" width="100" height="100" />
</template>
```

## 填充模式

通过 `mode` 属性可以设置图片的填充模式，支持多种模式，默认为 `aspectFill`。

```vue
<template>
  <fanc-image src="https://example.com/image.jpg" mode="aspectFit" width="100" height="100" />
  <fanc-image src="https://example.com/image.jpg" mode="aspectFill" width="100" height="100" />
  <fanc-image src="https://example.com/image.jpg" mode="widthFix" width="100" />
  <fanc-image src="https://example.com/image.jpg" mode="heightFix" height="100" />
</template>
```

## 圆形图片

通过 `round` 属性可以将图片设置为圆形。

```vue
<template>
  <fanc-image src="https://example.com/image.jpg" round width="100" height="100" />
</template>
```

## 加载中提示

`fanc-image` 组件提供了默认的加载中提示，也可以通过 `loading` 插槽自定义加载中的提示内容。

```vue
<template>
  <fanc-image src="https://example.com/image.jpg" width="100" height="100">
    <template #loading>
      <view class="custom-loading">加载中...</view>
    </template>
  </fanc-image>
</template>
```

## 加载失败提示

当图片加载失败时，会显示加载失败的提示内容，可以通过 `error` 插槽自定义提示内容。

```vue
<template>
  <fanc-image src="https://example.com/invalid-image.jpg" width="100" height="100" />
  
  <fanc-image src="https://example.com/invalid-image.jpg" width="100" height="100">
    <template #error>
      <view class="custom-error">加载失败</view>
    </template>
  </fanc-image>
</template>
```

## 加载失败时显示替代图片

通过 `fallbackSrc` 属性可以在原图加载失败时显示替代图片。

```vue
<template>
  <fanc-image 
    src="https://example.com/invalid-image.jpg" 
    fallbackSrc="https://example.com/placeholder.jpg" 
    width="100" 
    height="100" 
  />
</template>
```

## 图片懒加载

通过 `lazy-load` 属性可以开启图片懒加载功能，当图片滚动到可视区域内才会加载。

```vue
<template>
  <fanc-image src="https://example.com/image.jpg" lazy-load width="100" height="100" />
</template>
```

## 背景色

通过 `background` 属性可以设置图片的背景色，在图片加载过程中会显示该背景色。

```vue
<template>
  <fanc-image src="https://example.com/image.jpg" background="#f2f2f2" width="100" height="100" />
</template>
```

## 自定义提示文字

通过 `loading-text` 和 `error-text` 属性可以自定义加载中和加载失败的提示文字。

```vue
<template>
  <fanc-image 
    src="https://example.com/image.jpg" 
    loading-text="加载中..." 
    width="100" 
    height="100" 
  />
  
  <fanc-image 
    src="https://example.com/invalid-image.jpg" 
    error-text="图片加载失败" 
    width="100" 
    height="100" 
  />
</template>
```

## 点击事件

通过 `@click` 事件可以监听图片的点击事件。

```vue
<template>
  <fanc-image 
    src="https://example.com/image.jpg" 
    width="100" 
    height="100" 
    @click="onImageClick" 
  />
</template>

<script setup>
import { showToast } from 'fantastic-ui';

const onImageClick = () => {
  showToast('图片被点击');
};
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | _string_ | - |
| fallbackSrc | 替代图片链接（加载失败时显示） | _string_ | - |
| mode | 图片裁剪、缩放的模式 | _string_ | `aspectFill` |
| width | 宽度，支持数值或带单位字符串 | _number \| string_ | - |
| height | 高度，支持数值或带单位字符串 | _number \| string_ | - |
| round | 是否显示为圆形 | _boolean_ | `false` |
| lazyLoad | 是否开启图片懒加载 | _boolean_ | `false` |
| loadingText | 加载中提示文字 | _string_ | - |
| errorText | 加载失败提示文字 | _string_ | - |
| showMenuByLongpress | 是否开启长按图片显示菜单 | _boolean_ | `false` |
| background | 背景颜色 | _string_ | - |
| customStyle | 自定义样式 | _object_ | - |

### 图片填充模式

| 名称 | 说明 |
| --- | --- |
| scaleToFill | 不保持纵横比缩放图片，使图片完全适应 |
| aspectFit | 保持纵横比缩放图片，使图片的长边完全显示出来 |
| aspectFill | 保持纵横比缩放图片，只保证图片的短边能完全显示出来 |
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

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击图片时触发 | _event: Event_ |
| load | 图片加载完成时触发 | _event: Event_ |
| error | 图片加载失败时触发 | _event: Event_ |

### Slots

| 名称 | 说明 |
| --- | --- |
| loading | 自定义加载中的提示内容 |
| error | 自定义加载失败的提示内容 | 