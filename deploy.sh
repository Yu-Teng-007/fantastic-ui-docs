#!/bin/bash
set -e

# 提交代码到 Gitee
git add .
git commit -m "Deploy to Gitee Pages"
git push gitee main:pages
