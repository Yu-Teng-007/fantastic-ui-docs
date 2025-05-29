# Uploader 文件上传

文件上传组件，提供图片和文件上传功能，支持多种上传方式和交互效果。

## 基础用法

通过 `v-model:fileList` 可以绑定已上传的文件列表，`action` 属性设置上传服务器的地址。

```html
<fanc-uploader 
  v-model:fileList="fileList" 
  :action="uploadUrl"
  tips="支持上传多种文件格式"
></fanc-uploader>
```

也可以使用简化的 `v-model` 写法：

```html
<fanc-uploader 
  v-model="fileList" 
  :action="uploadUrl"
  tips="支持上传多种文件格式"
></fanc-uploader>
```

```js
export default {
  data() {
    return {
      fileList: [],
      uploadUrl: 'https://example.com/upload'
    }
  }
}
```

## 文件预览

组件会根据文件类型自动展示预览效果，图片文件会展示缩略图，其他类型文件会展示文件图标。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
></fanc-uploader>
```

```js
export default {
  data() {
    return {
      fileList: [
        {
          name: '图片1.jpg',
          url: 'https://example.com/image1.jpg',
          type: 'image/jpeg',
          status: 'success'
        }
      ],
      uploadUrl: 'https://example.com/upload'
    }
  }
}
```

## 上传按钮文字

通过 `uploadText` 属性可以自定义上传按钮的文字提示。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  uploadText="上传文件"
></fanc-uploader>
```

## 限制上传数量

通过 `maxCount` 属性可以限制上传文件的数量。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  :maxCount="3"
  tips="最多上传3个文件"
></fanc-uploader>
```

## 限制文件大小

通过 `maxSize` 属性可以限制上传文件的大小，单位为字节。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  :maxSize="1024 * 1024 * 2"
  tips="文件大小不能超过2MB"
></fanc-uploader>
```

## 自定义上传图标

通过 `uploadIcon` 和 `uploadIconSize` 属性可以自定义上传按钮的图标。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  uploadIcon="cloud-arrow-up"
  uploadText="上传到云端"
></fanc-uploader>
```

## 不同尺寸

通过 `size` 属性可以设置上传组件的尺寸，支持 `small`、`normal`、`large` 三种尺寸。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  size="small"
></fanc-uploader>

<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  size="normal"
></fanc-uploader>

<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  size="large"
></fanc-uploader>
```

## 禁用状态

通过 `disabled` 属性可以禁用上传功能。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  disabled
  tips="上传功能已禁用"
></fanc-uploader>
```

## 只读状态

通过 `readonly` 属性可以设置只读状态，只能查看，不能上传或删除。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  readonly
  tips="只能查看，不能上传或删除"
></fanc-uploader>
```

## 手动上传

通过 `autoUpload` 属性可以设置是否自动上传，设置为 `false` 时，需要手动调用 `upload` 方法上传文件。

```html
<fanc-uploader 
  ref="uploader"
  v-model:fileList="fileList"
  :action="uploadUrl"
  :autoUpload="false"
  tips="选择文件后，点击下方按钮上传"
></fanc-uploader>
<fanc-button type="primary" size="small" @click="uploadFiles">开始上传</fanc-button>
```

```js
export default {
  methods: {
    uploadFiles() {
      // 找到所有状态为ready的文件
      const readyFiles = this.fileList.filter(file => file.status === 'ready');
      
      // 遍历并上传
      readyFiles.forEach((file, index) => {
        // 获取文件在fileList中的索引
        const fileIndex = this.fileList.findIndex(item => item === file);
        
        // 调用上传方法
        this.$refs.uploader.upload(file, fileIndex);
      });
    }
  }
}
```

## 上传前钩子函数

通过 `beforeUpload` 属性可以设置上传前的钩子函数，返回 `false` 可以阻止文件上传。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  :beforeUpload="beforeUpload"
  tips="只能上传图片文件"
></fanc-uploader>
```

```js
export default {
  methods: {
    beforeUpload(file) {
      // 检查是否为图片文件
      if (!file.type.startsWith('image/')) {
        this.$toast.error('只能上传图片文件');
        return false;
      }
      return true;
    }
  }
}
```

## 本地预览模式

通过将 `action` 属性设置为空字符串，可以启用本地预览模式，文件将只在本地预览，不会上传到服务器。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action=""
  tips="文件将只在本地预览，不会上传到服务器"
></fanc-uploader>
```

## 隐藏状态

通过 `showStatus` 属性可以控制是否显示文件的状态（上传中、成功、失败等状态）。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  :showStatus="false"
  tips="上传状态（上传中、成功、失败）将不会显示"
></fanc-uploader>
```

## 隐藏提示

通过 `showToast` 属性可以控制是否显示上传成功/失败的提示。

```html
<fanc-uploader 
  v-model:fileList="fileList"
  :action="uploadUrl"
  :showToast="false"
  tips="上传成功/失败的提示将不会显示"
></fanc-uploader>
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| fileList | 文件列表，通过 `v-model:fileList` 绑定 | `Array` | `[]` |
| accept | 接受的文件类型 | `String` | `*/*` |
| disabled | 是否禁用 | `Boolean` | `false` |
| readonly | 是否只读 | `Boolean` | `false` |
| multiple | 是否支持多选 | `Boolean` | `false` |
| maxCount | 最大上传数量，0表示不限制 | `Number` | `0` |
| maxSize | 单个文件大小限制，单位为字节，0表示不限制 | `Number` | `0` |
| uploadIcon | 上传按钮图标 | `String` | `plus` |
| uploadIconSize | 上传按钮图标大小 | `Number\|String` | `24` |
| uploadText | 上传按钮文字 | `String` | `''` |
| tips | 提示文本 | `String` | `''` |
| size | 组件尺寸，可选值为 `small`、`normal`、`large` | `String` | `normal` |
| beforeUpload | 上传前钩子函数，返回false表示阻止上传 | `Function` | `null` |
| customUpload | 自定义上传方法，不设置则使用默认的上传方法 | `Function` | `null` |
| action | 上传的服务器地址，为空时表示仅本地预览模式 | `String` | `''` |
| name | 上传的文件字段名 | `String` | `file` |
| data | 上传时附带的额外参数 | `Object` | `{}` |
| headers | 上传的请求头 | `Object` | `{}` |
| autoUpload | 是否自动上传 | `Boolean` | `true` |
| showStatus | 是否显示状态（上传中、成功、失败等状态） | `Boolean` | `true` |
| showToast | 是否显示上传成功/失败的提示 | `Boolean` | `true` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 文件列表变化时触发 | `{ file, fileList }` |
| success | 文件上传成功时触发 | `{ file, fileList, response }` |
| error | 文件上传失败时触发 | `{ file, fileList, error }` |
| delete | 文件删除时触发 | `{ file, fileList }` |
| preview | 文件预览时触发 | `file` |
| exceed | 文件数量超出限制时触发 | `files` |
| size-exceed | 文件大小超出限制时触发 | `file` |

### Methods

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| upload | 手动上传文件 | `(file, index)` |

### FileItem 数据结构

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| name | 文件名称 | `String` |
| size | 文件大小，单位为字节 | `Number` |
| type | 文件类型 | `String` |
| status | 文件状态，可选值为 `ready`、`uploading`、`success`、`error` | `String` |
| progress | 上传进度，范围为 0-100 | `Number` |
| file | 原始文件对象 | `File` |
| url | 文件预览地址 | `String` |

## 样式变量

组件提供了下列 CSS 变量，可用于自定义样式。

| 名称 | 默认值 | 说明 |
| --- | --- | --- |
| --uploader-bg-color | var(--bg-gray-light) | 上传组件背景颜色 |
| --uploader-border-color | var(--border-color) | 上传组件边框颜色 |
| --uploader-border-radius | 4px | 上传组件边框圆角 |
| --uploader-item-size-small | 80px | 小尺寸文件项宽高 |
| --uploader-item-size-normal | 100px | 默认尺寸文件项宽高 |
| --uploader-item-size-large | 120px | 大尺寸文件项宽高 |
| --uploader-delete-bg-color | rgba(0, 0, 0, 0.6) | 删除按钮背景颜色 |
| --uploader-delete-color | var(--white) | 删除按钮颜色 |
| --uploader-file-icon-color | var(--gray-600) | 文件图标颜色 |
| --uploader-file-name-color | var(--text-secondary) | 文件名称颜色 |
| --uploader-upload-icon-color | var(--gray-600) | 上传图标颜色 |
| --uploader-upload-text-color | var(--text-secondary) | 上传文字颜色 |
| --uploader-tips-color | var(--text-secondary) | 提示文字颜色 |
| --uploader-progress-color | var(--fanc-primary-color) | 上传进度条颜色 |
| --uploader-status-bg-color | rgba(0, 0, 0, 0.45) | 文件状态背景颜色 |
| --uploader-status-color | var(--white) | 文件状态颜色 |
| --uploader-error-color | var(--fanc-danger-color) | 错误状态颜色 |
| --uploader-success-color | var(--fanc-success-color) | 成功状态颜色 |
| --uploader-loading-color | var(--white) | 加载状态颜色 |
| --uploader-gap | 12px | 文件项间距 | 