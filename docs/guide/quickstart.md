# 快速上手

本节将介绍如何在项目中使用 Fantastic UI。

## 安装

### 使用 npm 或 yarn 安装

```bash
# 使用 npm 安装
npm install fantastic-ui --save

# 使用 yarn 安装
yarn add fantastic-ui
```

## 引入组件

### 完整引入

在 main.js 中引入并使用：

```js
import { createApp } from 'vue'
import FantasticUI from 'fantastic-ui'
import 'fantastic-ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(FantasticUI)
app.mount('#app')
```

### 按需引入

借助 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件，可以实现组件的自动按需引入。

1. 安装插件：

```bash
npm install -D unplugin-vue-components
```

2. 在 vite.config.js 或 vue.config.js 中配置：

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { FantasticUIResolver } from 'fantastic-ui/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [FantasticUIResolver()]
    })
  ]
})
```

```js
// vue.config.js
const { defineConfig } = require('@vue/cli-service')
const Components = require('unplugin-vue-components/webpack')
const { FantasticUIResolver } = require('fantastic-ui/resolver')

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      Components({
        resolvers: [FantasticUIResolver()]
      })
    ]
  }
})
```

3. 直接在模板中使用组件，无需引入：

```vue
<template>
  <fanc-button type="primary">按钮</fanc-button>
</template>
```

### 手动按需引入

如果不使用自动按需引入插件，也可以手动按需引入组件：

```vue
<template>
  <fanc-button type="primary">按钮</fanc-button>
</template>

<script setup>
import { FancButton } from 'fantastic-ui'
import 'fantastic-ui/es/fanc-button/style'
</script>
```

## 全局配置

Fantastic UI 提供了全局配置的方式，可以在引入时进行配置：

```js
import { createApp } from 'vue'
import FantasticUI from 'fantastic-ui'
import App from './App.vue'

const app = createApp(App)
app.use(FantasticUI, {
  // 全局配置
  theme: 'dark',
  locale: 'zh-CN'
})
app.mount('#app')
```

## 浏览器兼容性

Fantastic UI 支持现代浏览器和 IE 11+。

| 浏览器 | 版本 |
| --- | --- |
| Chrome | 51+ |
| Firefox | 54+ |
| Safari | 10+ |
| Edge | 14+ |
| iOS Safari | 10+ |
| Android Browser | 5.0+ |

## 常见问题

### 样式丢失

如果使用按需引入，但是样式没有正确加载，请确保引入了对应的样式文件：

```js
import { FancButton } from 'fantastic-ui'
import 'fantastic-ui/es/fanc-button/style'
```

### 组件无法注册

如果使用自动按需引入，但组件没有正确注册，请检查 resolvers 配置是否正确：

```js
Components({
  resolvers: [FantasticUIResolver()]
})
```

### TypeScript 支持

Fantastic UI 提供了完整的 TypeScript 类型定义，可以享受到完整的类型检查和代码提示。
