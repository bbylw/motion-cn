<h1 align="center"> <img width="35" height="35" alt="Motion logo" src="https://github.com/user-attachments/assets/00d6d1c3-72c4-4c2f-a664-69da13182ffc" /><br />Motion</h1>
<h3 align="center">
  一个开源的动画库<br />适用于 JavaScript、React 和 Vue
</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/motion" rel="noopener noreferrer nofollow" ><img src="https://img.shields.io/npm/v/motion?color=0368FF&label=version" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/motion" rel="noopener noreferrer nofollow" ><img src="https://img.shields.io/npm/dm/framer-motion?color=8D30FF&label=npm" alt="npm downloads per month"></a>
  <a target="_blank" rel="noopener noreferrer nofollow" href="https://www.jsdelivr.com/package/npm/motion"><img alt="jsDelivr hits (npm)" src="https://img.shields.io/jsdelivr/npm/hm/framer-motion?logo=jsdeliver&color=FF4FBA"></a>
  <img alt="NPM License" src="https://img.shields.io/npm/l/motion?color=FF2B6E">
</p>

```bash
# React / JavaScript
npm install motion

# Vue
npm install motion-v
```

## 目录

1. [为什么选择 Motion？](#为什么选择-motion)
2. [🍦 支持的平台](#-支持的平台)
3. [� 示例与教程](#-示例与教程)
4. [⚡️ Motion+](#-motion)
5. [👩🏻‍⚖️ 许可证](#-许可证)
6. [💎 参与贡献](#-参与贡献)
7. [✨ 赞助商](#-赞助商)

## 为什么选择 Motion？

-   **简洁的 API：** 提供对 React、JavaScript 和 Vue 的一流支持包。
-   **混合引擎：** 将 JavaScript 的强大能力与浏览器原生 API 结合，实现 120fps、GPU 加速的动画。
-   **生产就绪：** 使用 TypeScript 编写，拥有完善的测试套件，支持按需引入（tree-shaking），体积小巧。
-   **开箱即用：** 手势、弹簧动画、布局过渡、滚动联动效果、时间轴。

## 🍦 支持的平台

Motion 可用于 [React](https://motion.dev/docs/react)、[JavaScript](https://motion.dev/docs/quick-start) 和 [Vue](https://motion.dev/docs/vue)。

### React

```jsx
import { motion } from "motion/react"

function Component() {
    return <motion.div animate={{ x: 100 }} />
}
```

从 [Motion for React](https://motion.dev/docs/react) 开始上手。

**注意：** Framer Motion 现已更名为 Motion。请从 `motion/react` 导入，而不是 `framer-motion`。

### JavaScript

```javascript
import { animate } from "motion"

animate("#box", { x: 100 })
```

从 [JavaScript](https://motion.dev/docs/quick-start) 开始上手。

### Vue

```html
<script>
    import { motion } from "motion-v"
</script>

<template> <motion.div :animate={{ x: 100 }} /> </template>
```

从 [Motion for Vue](https://motion.dev/docs/vue) 开始上手。

## 🎓 示例与教程

浏览 330+ 个[官方示例](https://motion.dev/examples)，提供可复制粘贴的代码，无论你是新手还是专家，都能提升你的动画水平。

超过 100 个示例配有完整的分步[教程](https://motion.dev/tutorials)。

## ⚡️ Motion+

一次性付费、终身更新的会员服务：

-   **330+ 示例**
-   **100+ 教程**
-   **高级 API**，例如 [Cursor](https://motion.dev/docs/cursor) 和 [Ticker](https://motion.dev/docs/react-ticker)
-   **过渡编辑器**，适用于 Cursor 和 VS Code
-   **AI 技能**
-   **专属 Discord**
-   **抢先体验内容**

[获取 Motion+](https://motion.dev/plus)

## 👩🏻‍⚖️ 许可证

-   Motion 采用 MIT 许可证。

## 💎 参与贡献

-   想要为 Motion 做贡献？我们的[贡献指南](https://github.com/motiondivision/motion/blob/master/CONTRIBUTING.md)为你提供了详细说明。

## ✨ 赞助商

Motion 能够持续发展，离不开赞助商的慷慨支持。

[成为赞助商](https://motion.dev/sponsor)

### 合作伙伴

Motion 为所有使用 Framer 构建的网站提供动画支持，Framer 是面向创意专业人士的网页构建工具。Motion 官网本身也基于 Framer 构建，得益于其令人愉悦的画布式编辑和强大的 CMS 功能。

<a href="https://framer.link/FlnUbQY">
  <img alt="Framer" src="https://github.com/user-attachments/assets/22a79be7-672e-4336-bfb7-5d55d1deb917" width="250px" height="150px">
</a>

Motion 驱动了 Cursor 官网的动画效果，并正与 Cursor 合作，将强大的 AI 工作流引入 Motion 的示例与文档。

<a href="https://cursor.com">
  <img alt="Cursor" src="https://github.com/user-attachments/assets/81c482d3-c2c2-4b35-bbcf-933b28d5b448" width="250px" height="150px" />
</a>

### 铂金赞助商

<a href="https://linear.app"><img alt="Linear" src="https://github.com/user-attachments/assets/f9ce44b4-af28-4770-bb6e-9515b474bfb2" width="250px" height="150px"></a> <a href="https://figma.com"><img alt="Figma" src="https://github.com/user-attachments/assets/1077d0ab-4305-4a1f-81c8-d5be8c4c6717" width="250px" height="150px"></a> <a href="https://sanity.io"><img alt="Sanity" src="https://github.com/user-attachments/assets/80134088-f456-483f-8edd-940593c120ce" width="250px" height="150px"></a> <a href="https://animations.dev"><img alt="Sanity" src="https://github.com/user-attachments/assets/7c5ab87d-c7d9-44b4-9c7e-f9e6a9f3ba3b" width="250px" height="150px"></a> <a href="https://clerk.com?utm_campaign=motion"><img alt="Clerk" src="https://github.com/user-attachments/assets/16789f85-eaf4-46fb-9961-b3e66d33afbc" width="250px" height="150px"></a>

### 黄金赞助商

### 白银赞助商

<a href="https://liveblocks.io"><img alt="Liveblocks" src="https://github.com/user-attachments/assets/28eddbe5-1617-4e74-969d-2eb6fcd481af" width="150px" height="100px"></a> <a href="https://www.frontend.fyi/?utm_source=motion"><img alt="Frontend.fyi" src="https://github.com/user-attachments/assets/f16e3eb9-f0bd-4ad1-8049-f079a3d65c69" width="150px" height="100px"></a> <a href="https://firecrawl.dev"><img alt="Firecrawl" src="https://github.com/user-attachments/assets/2c44e7f4-5c2a-4714-9050-1570538665ff" width="150px" height="100px"></a> <a href="https://bolt.new"><img alt="Bolt.new" src="https://github.com/user-attachments/assets/7932d4b2-bb6c-422e-82b9-6ad78a7e3090" width="150px" height="100px"></a>

### 个人赞助商

-   [OlegWock](https://sinja.io)
-   [Lambert Weller](https://github.com/l-mbert)
-   [Jake LeBoeuf](https://jklb.wf)
