'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const platforms = [
  {
    name: 'React',
    description: '声明式组件动画，支持服务端渲染',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <path d="M12 19.5c-5.5 0-10-2.5-10-5.5s4.5-5.5 10-5.5 10 2.5 10 5.5-4.5 5.5-10 5.5z" stroke="#61DAFB" strokeWidth="0.5"/>
        <path d="M7 17c-2.8-4.8-2.8-10.2 0-15 2.8 4.8 2.8 10.2 0 15z" stroke="#61DAFB" strokeWidth="0.5"/>
        <path d="M17 17c2.8-4.8 2.8-10.2 0-15-2.8 4.8-2.8 10.2 0 15z" stroke="#61DAFB" strokeWidth="0.5"/>
      </svg>
    ),
    color: '#61DAFB',
    bgColor: 'rgba(97, 218, 251, 0.1)',
    borderColor: 'rgba(97, 218, 251, 0.2)',
    code: `import { motion } from "motion/react"

<motion.div animate={{ x: 100 }} />`,
  },
  {
    name: 'JavaScript',
    description: '纯 JavaScript 驱动，框架无关的解决方案',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="#F7DF1E">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
      </svg>
    ),
    color: '#F7DF1E',
    bgColor: 'rgba(247, 223, 30, 0.1)',
    borderColor: 'rgba(247, 223, 30, 0.2)',
    code: `import { animate } from "motion"

animate("#box", { x: 100 })`,
  },
  {
    name: 'Vue',
    description: '响应式组件动画，完美融入 Vue 生态',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M2 3h3.5L12 15l6.5-12H22L12 21 2 3z" fill="#41B883"/>
        <path d="M8.5 3H12l4 7-7-7z" fill="#35495E"/>
      </svg>
    ),
    color: '#41B883',
    bgColor: 'rgba(65, 184, 131, 0.1)',
    borderColor: 'rgba(65, 184, 131, 0.2)',
    code: `import { motion } from "motion-v"

<motion.div :animate="{ x: 100 }" />`,
  },
]

export default function Platforms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            跨平台支持
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-motion-light mb-4">
            一套 API，{' '}
            <span className="gradient-text">多端通用</span>
          </h2>
          <p className="text-motion-light/50 text-lg max-w-xl mx-auto">
            无论你使用 React、Vue 还是原生 JavaScript，Motion 都能无缝集成
          </p>
        </motion.div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.3,
                type: 'spring' as const,
                stiffness: 100,
                damping: 15,
              }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl bg-motion-mid/30 border overflow-hidden transition-all"
              style={{ borderColor: platform.borderColor }}
            >
              {/* Hover gradient */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 30% 20%, ${platform.bgColor}, transparent 70%)`,
                }}
              />

              <div className="relative">
                {/* Icon */}
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  style={{ color: platform.color }}
                >
                  {platform.icon}
                </motion.div>

                {/* Info */}
                <h3 className="font-display text-xl font-bold text-motion-light mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-motion-light/50 mb-4 leading-relaxed">
                  {platform.description}
                </p>

                {/* Code snippet */}
                <code className="block p-3 rounded-lg bg-motion-darker/60 text-xs font-mono text-motion-light/60 overflow-x-auto">
                  {platform.code}
                </code>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
