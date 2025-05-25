const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// 构建输出目录
const distDir = path.resolve(__dirname, "docs/.vitepress/dist");
// 部署分支名
const deployBranch = "gitee-pages";

// 确保dist目录存在
if (!fs.existsSync(distDir)) {
  console.error("构建目录不存在，请先运行 npm run build");
  process.exit(1);
}

// 执行命令并打印输出
function run(command) {
  console.log(`执行: ${command}`);
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.error(`命令执行失败: ${e}`);
    process.exit(1);
  }
}

// 保存当前分支
const currentBranch = execSync("git rev-parse --abbrev-ref HEAD")
  .toString()
  .trim();

console.log(`开始部署到 ${deployBranch} 分支...`);

// 切换到部署分支
run(`git checkout ${deployBranch}`);

// 清空分支内容（保留.git目录）
fs.readdirSync(".").forEach((file) => {
  if (file !== ".git" && file !== "node_modules") {
    if (fs.lstatSync(file).isDirectory()) {
      fs.rmSync(file, { recursive: true, force: true });
    } else {
      fs.rmSync(file);
    }
  }
});

// 复制构建文件到根目录
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(distDir, ".");

// 提交更改
run("git add .");
run('git commit -m "更新文档站点"');

// 推送到远程仓库
run(`git push origin ${deployBranch} --force`);

// 切回原来的分支
run(`git checkout ${currentBranch}`);

console.log("部署完成！");
console.log("请前往 Gitee 仓库设置开启 Gitee Pages 服务");
console.log("地址: https://gitee.com/yuteng77/fantastic-ui-docs/pages");
