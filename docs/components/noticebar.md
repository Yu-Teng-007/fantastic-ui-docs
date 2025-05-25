# NoticeBar 通知栏

通知栏组件，用于展示系统公告、消息通知、活动提醒等。

## 基础用法

通过 `text` 属性设置通知内容。

```vue
<template>
  <fanc-noticebar text="这是一条通知栏消息，请注意查看。" />
</template>
```

## 通知栏类型

通过 `type` 属性设置通知栏的类型，支持 `info`、`success`、`warning`、`error` 四种类型。

```vue
<template>
  <fanc-noticebar type="info" text="这是一条普通通知" />
  <fanc-noticebar type="success" text="这是一条成功通知" />
  <fanc-noticebar type="warning" text="这是一条警告通知" />
  <fanc-noticebar type="error" text="这是一条错误通知" />
</template>
```

## 隐藏图标

通过 `showIcon` 属性可以控制是否显示左侧图标。

```vue
<template>
  <fanc-noticebar :showIcon="false" text="这是一条没有图标的通知" />
</template>
```

## 自定义图标

通过 `iconName` 属性可以自定义左侧图标。

```vue
<template>
  <fanc-noticebar iconName="bell" text="这是一条使用自定义图标的通知" />
</template>
```

## 可关闭的通知栏

通过 `closable` 属性设置通知栏可关闭。

```vue
<template>
  <fanc-noticebar closable text="这是一条可关闭的通知" @close="onClose" />
</template>

<script setup>
import { showToast } from 'fantastic-ui';

const onClose = () => {
  showToast('通知栏已关闭');
};
</script>
```

## 滚动播放

通过 `scrollable` 属性设置通知栏内容是否滚动播放，通过 `scrollSpeed` 属性设置滚动速度。

```vue
<template>
  <fanc-noticebar 
    scrollable 
    :scrollSpeed="50" 
    text="这是一条很长的通知栏消息，会自动滚动播放，以便用户查看完整内容。" 
  />
</template>
```

## 多行展示

通过 `multiLine` 属性设置通知栏内容是否多行展示。

```vue
<template>
  <fanc-noticebar 
    multiLine 
    text="这是一条很长的通知栏消息，会自动换行展示，以便用户查看完整内容。这是一条很长的通知栏消息，会自动换行展示，以便用户查看完整内容。" 
  />
</template>
```

## 操作按钮

通过 `actionText` 属性设置通知栏右侧的操作按钮。

```vue
<template>
  <fanc-noticebar 
    text="这是一条带有操作按钮的通知" 
    actionText="查看详情" 
    @action="onAction" 
  />
</template>

<script setup>
import { showToast } from 'fantastic-ui';

const onAction = () => {
  showToast('点击了查看详情');
};
</script>
```

## 垂直轮播

通过传入数组作为 `text` 属性，可以实现垂直轮播效果。

```vue
<template>
  <fanc-noticebar 
    :text="notices" 
    autoPlay 
    :playInterval="3000" 
  />
</template>

<script setup>
import { ref } from 'vue';

const notices = ref([
  '这是第一条公告内容',
  '这是第二条公告内容',
  '这是第三条公告内容'
]);
</script>
```

## 带播放控制按钮

通过 `showPlayBtn` 属性可以显示播放控制按钮，控制垂直轮播的播放和暂停。

```vue
<template>
  <fanc-noticebar 
    :text="notices" 
    autoPlay 
    :playInterval="3000" 
    showPlayBtn 
  />
</template>

<script setup>
import { ref } from 'vue';

const notices = ref([
  '这是第一条公告内容',
  '这是第二条公告内容',
  '这是第三条公告内容'
]);
</script>
```

## 支持HTML内容

通过 `enableHtml` 属性可以支持HTML内容的展示。

```vue
<template>
  <fanc-noticebar 
    enableHtml 
    :text="htmlContent" 
  />
</template>

<script setup>
import { ref } from 'vue';

const htmlContent = ref('<span style="color: red;">这是红色文字</span> <span style="color: blue;">这是蓝色文字</span>');
</script>
```

## 监听点击事件

通过 `@click` 事件可以监听通知栏的点击。

```vue
<template>
  <fanc-noticebar 
    text="点击查看详情" 
    @click="onClick" 
  />
</template>

<script setup>
import { showToast } from 'fantastic-ui';

const onClick = () => {
  showToast('点击了通知栏');
};
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 通知内容，可以是字符串或字符串数组 | _string \| array_ | - |
| type | 通知类型，可选值为 `info` `success` `warning` `error` | _string_ | `info` |
| showIcon | 是否显示左侧图标 | _boolean_ | `true` |
| iconName | 自定义图标名称 | _string_ | - |
| closable | 是否显示关闭按钮 | _boolean_ | `false` |
| scrollable | 是否开启滚动播放 | _boolean_ | `false` |
| scrollSpeed | 滚动速度，单位为像素/秒 | _number_ | `50` |
| autoPlay | 是否自动播放，仅在text为数组时有效 | _boolean_ | `true` |
| playInterval | 播放间隔，单位为毫秒 | _number_ | `3000` |
| showPlayBtn | 是否显示播放控制按钮 | _boolean_ | `false` |
| multiLine | 是否支持多行展示 | _boolean_ | `false` |
| actionText | 操作按钮文本 | _string_ | - |
| enableHtml | 是否支持HTML内容 | _boolean_ | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| click | 点击通知内容时触发 | - |
| close | 关闭通知时触发 | - |
| action | 点击操作按钮时触发 | - | 