'use client'

import { motion } from 'motion/react'

export default function Footer() {
  const links = {
    文档: [
      { label: 'React 指南', href: 'https://motion.dev/docs/react' },
      { label: 'JavaScript 指南', href: 'https://motion.dev/docs/quick-start' },
      { label: 'Vue 指南', href: 'https://motion.dev/docs/vue' },
    ],
    资源: [
      { label: '官方示例', href: 'https://motion.dev/examples' },
      { label: '教程', href: 'https://motion.dev/tutorials' },
      { label: 'Motion+', href: 'https://motion.dev/plus' },
    ],
    社区: [
      { label: 'GitHub', href: 'https://github.com/motiondivision/motion' },
      { label: 'Discord', href: 'https://discord.gg/motion' },
      { label: '成为赞助商', href: 'https://motion.dev/sponsor' },
    ],
  }

  return (
    <footer className="relative border-t border-motion-accent/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-motion-accent to-motion-hot flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" opacity="0.9"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                </svg>
              </div>
              <span className="font-display text-xl font-bold text-motion-light">Motion</span>
            </div>
            <p className="text-sm text-motion-light/40 leading-relaxed">
              为现代 Web 打造的开源动画库，让你的。
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(links).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="font-display font-semibold text-motion-light mb-4">{category}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <motion.a
                      href={item.href}
                      target="_blank"
                      className="text-sm text-motion-light/50 hover:text-motion-glow transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {item.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-motion-accent/5 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-sm text-motion-light/30">{new Date().getFullYear()} MIT 许可证</p>
          <p className="text-sm text-motion-light/30">
             一个开源项目，由社区驱动
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
