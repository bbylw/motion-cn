import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Motion — 为现代 Web 打造的动画引擎',
  description: '一个开源动画库，为 React、JavaScript 和 Vue 提供 120fps、GPU 加速的动画效果。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
