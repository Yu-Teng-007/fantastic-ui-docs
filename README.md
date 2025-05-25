# Fantastic UI 文档

这是 Fantastic UI 组件库的官方文档，基于 VitePress 构建。

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建文档

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 目录结构

```
fantastic-ui-docs/
├── docs/                   # 文档内容
│   ├── .vitepress/        # VitePress 配置
│   ├── components/        # 组件文档
│   ├── guide/             # 指南文档
│   ├── public/            # 静态资源
│   └── index.md           # 首页
├── package.json           # 项目配置
└── README.md              # 项目说明
```

## 添加新组件文档

1. 在 `docs/components/` 目录下创建新的 Markdown 文件，例如 `button.md`
2. 在 `.vitepress/config.js` 中添加侧边栏配置
3. 按照以下格式编写组件文档：

```markdown
# 组件名称

组件描述

## 基础用法

示例代码和说明

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| prop1 | 说明1 | _type_ | `default` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| event1 | 说明1 | _params_ |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 默认插槽 |
```

## 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

MIT
