# Fantastic UI 文档站点

## 部署状态

GitHub Pages 部署状态将在仓库的 Actions 选项卡中显示

## 本地开发

1. 克隆仓库
2. 安装依赖：`npm install`
3. 启动开发服务器：`npm run dev`
4. 构建生产版本：`npm run build`

## 在线文档

访问 `https://{username}.github.io/fantastic-ui-docs/`

## 部署说明

1. 创建 GitHub 仓库
2. 在仓库设置中：
   - 启用 GitHub Pages
   - 在 Actions 选项卡中允许 GitHub Actions 创建和批准工作流
3. 推送代码到 `main` 分支将自动触发部署
4. 文档将发布到 `gh-pages` 分支

## 注意事项

- 确保替换 `{username}` 为你的 GitHub 用户名
- 首次部署可能需要几分钟时间
