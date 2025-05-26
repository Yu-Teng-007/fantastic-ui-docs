# Fantastic UI 文档

这是 Fantastic UI 组件库的文档站点。

## 开发

- 克隆仓库
- 运行 `npm install` 安装依赖
- 使用 `npm run dev` 启动本地开发服务器
- 使用 `npm run build` 构建生产版本

## 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。每次推送到 `main` 分支时，将自动触发部署流程。

### 手动部署

如需手动触发部署，可以：
1. 进入 GitHub 仓库的 Actions 选项卡
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" 按钮

### 配置

部署配置位于 `.github/workflows/deploy.yml`，使用最新的 GitHub Actions 部署策略。

## 许可证

本项目基于 MIT 许可证。
