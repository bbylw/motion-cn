<div align="center">

<h1><img width="35" height="35" alt="Motion logo" src="https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc" /><br />Motion 中文官网</h1>

<p>一个展示 Motion 动画库强大能力的中文官方网站</p>

[![Deploy Status](https://github.com/bbylw/motion-cn/actions/workflows/deploy.yml/badge.svg)](https://github.com/bbylw/motion-cn/actions/workflows/deploy.yml)
[![Custom Domain](https://img.shields.io/badge/domain-motion.ndjp.net-6366f1)](https://motion.ndjp.net)

<a href="https://motion.ndjp.net">🌐 在线访问</a>

</div>

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 16.2.10 | React 框架，静态导出 |
| React | 19.2.7 | UI 渲染 |
| Motion | 12.42.2 | 动画引擎 |
| TypeScript | 6.0.3 | 类型安全 |
| Tailwind CSS | 3.4 | 原子化样式 |

## 本地开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000

## 构建部署

```bash
npm run build
```

输出目录：`out/`，已配置 GitHub Actions 自动部署到 Pages。

## 页面结构

- **Hero** — 3D 滚动入场标题 + 浮动粒子光效
- **数据展示** — 弹性数字卡片 + 无限滚动 logo 墙
- **特性区域** — 交错入场的特性卡片网格
- **交互演示** — 弹簧/拖拽/布局/联动/手势 五大实时演示
- **代码示例** — Tab 切换的代码片段展示
- **平台支持** — React / JavaScript / Vue 三端通用
- **CTA** — 行动号召 + 数据统计

## 自定义域名

motion.ndjp.net → GitHub Pages

## 许可

本项目采用 MIT 许可证。Motion™ 是 Motion Division 的商标。
