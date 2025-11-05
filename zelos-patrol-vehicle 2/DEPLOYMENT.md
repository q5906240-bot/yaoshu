# 耀数科技 - 智能巡逻车网站部署说明

## 项目信息

- **项目名称**: zelos-patrol-vehicle (耀数科技智能巡逻车展示网站)
- **公司名称**: 耀数科技
- **技术栈**: React 19 + Vite 6 + TailwindCSS 4 + Radix UI

## 联系信息

- **公司地址**: 北京市东城区北三环东路36号院3号楼3层328单元
- **联系电话**: +86 18600895313
- **邮箱**: ccxtwangpeng@163.com

## 部署包下载

**永久下载链接**: https://files.manuscdn.com/user_upload_by_module/session_file/310419663032533392/UcHmQpjICYBDhTRD.gz

**文件信息**:
- 文件名: dist.tar.gz
- 文件大小: 1.6 MB
- 包含内容: 完整的生产环境构建产物

## 部署到各平台

### 方案1: Vercel (推荐)

1. 下载并解压部署包
2. 访问 https://vercel.com 并登录
3. 点击 "Add New Project"
4. 上传解压后的文件夹
5. 部署完成,获得 `.vercel.app` 域名

### 方案2: Netlify

1. 下载并解压部署包
2. 访问 https://netlify.com 并登录
3. 拖拽文件夹到 Netlify Drop 区域
4. 自动部署,获得 `.netlify.app` 域名

### 方案3: GitHub Pages

1. 创建 GitHub 仓库
2. 下载并解压部署包
3. 推送到仓库的 `gh-pages` 分支
4. 在仓库设置中启用 GitHub Pages
5. 获得 `.github.io` 域名

### 方案4: 自建服务器

```bash
# 下载部署包
wget https://files.manuscdn.com/user_upload_by_module/session_file/310419663032533392/UcHmQpjICYBDhTRD.gz

# 解压
tar -xzf UcHmQpjICYBDhTRD.gz -C /var/www/html

# 使用 Nginx 配置
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 本地开发

```bash
# 克隆仓库
git clone <repository-url>

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览生产版本
pnpm run preview
```

## 技术特性

- ✅ React 19 最新版本
- ✅ Vite 6 超快构建
- ✅ TailwindCSS 4 原子化CSS
- ✅ Radix UI 无障碍组件库
- ✅ Framer Motion 流畅动画
- ✅ React Router 7 路由管理
- ✅ 响应式设计,支持移动端
- ✅ SEO 优化
- ✅ 代码分割和懒加载

## 页面说明

1. **首页** (`/`) - 产品概览和导航
2. **警务版** (`/police`) - 警务智能巡逻车详情
3. **交警版** (`/traffic-police`) - 交警智能巡逻车详情

## 构建产物

- **HTML**: 0.49 KB (gzip: 0.35 KB)
- **CSS**: 107.98 KB (gzip: 17.21 KB)
- **JavaScript**: 426.43 KB (gzip: 126.74 KB)
- **图片资源**: 约 1.5 MB

## 浏览器支持

- Chrome/Edge (最新版)
- Firefox (最新版)
- Safari (最新版)
- 移动端浏览器

## 许可证

© 2025 耀数科技. All rights reserved.
