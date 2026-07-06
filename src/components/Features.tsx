'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '混合引擎',
    description: '将 JavaScript 的强大能力与浏览器原生 API 结合，实现 120fps、GPU 加速的丝滑动画。',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '简洁的 API',
    description: '提供对 React、JavaScript 和 Vue 的一流支持，极简的声明式 API 让你专注创意。',
    gradient: 'from-motion-accent to-motion-glow',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '生产就绪',
    description: '使用 TypeScript 编写，拥有完善的测试套件，支持按需引入（tree-shaking），体积小巧。',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '弹簧动画',
    description: '真实的物理弹簧系统，让动画拥有自然的惯性和弹性，告别生硬的线性动画。',
    gradient: 'from-motion-hot to-rose-500',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '手势交互',
    description: '内置拖拽、悬停、点击、缩放等手势识别，让交互体验更加丰富生动。',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '滚动联动',
    description: '滚动驱动的时间轴动画，视差效果、元素跟随滚动，打造沉浸式叙事体验。',
    gradient: 'from-violet-400 to-purple-500',
  },
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative p-6 rounded-2xl bg-motion-mid/50 border border-motion-accent/5 hover:border-motion-accent/20 transition-all cursor-default overflow-hidden"
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.05), transparent 70%)`,
        }}
      />

      {/* Icon */}
      <motion.div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} bg-opacity-10 flex items-center justify-center mb-4 text-white`}
        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        {feature.icon}
      </motion.div>

      {/* Content */}
      <h3 className="text-lg font-display font-semibold text-motion-light mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-motion-light/50 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-motion-accent/10 border border-motion-accent/20 text-motion-glow text-sm mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring' as const, stiffness: 200, delay: 0.2 }}
          >
            核心特性
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-motion-light mb-4">
            为什么选择{' '}
            <span className="gradient-text">Motion</span>
            ？
          </h2>
          <p className="text-motion-light/50 text-lg max-w-xl mx-auto">
            专为现代 Web 开发设计的动画解决方案，让你的界面焕发生机
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
