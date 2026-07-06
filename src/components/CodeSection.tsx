'use client'

import { motion, useInView, AnimatePresence } from 'motion/react'
import { useRef, useState } from 'react'

const examples = [
  {
    id: 'basic',
    title: 'React 基础动画',
    language: 'tsx',
    code: `import { motion } from "motion/react"

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      让元素动起来
    </motion.div>
  )
}`,
  },
  {
    id: 'gesture',
    title: '手势交互',
    language: 'tsx',
    code: `import { motion } from "motion/react"

export default function Card() {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: -50, left: -50,
        right: 50, bottom: 50
      }}
      whileDrag={{
        scale: 1.1,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      }}
      whileHover={{ y: -5 }}
      whileTap={{ cursor: "grabbing" }}
    />
  )
}`,
  },
  {
    id: 'layout',
    title: '布局动画',
    language: 'tsx',
    code: `import { motion, LayoutGroup } from "motion/react"

export default function List({ items }) {
  return (
    <LayoutGroup>
      {items.map(item => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {item.name}
        </motion.div>
      ))}
    </LayoutGroup>
  )
}`,
  },
  {
    id: 'scroll',
    title: '滚动动画',
    language: 'tsx',
    code: `import {
  motion, useScroll, useTransform
} from "motion/react"

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(
    scrollYProgress, [0, 1], [0, -200]
  )
  const opacity = useTransform(
    scrollYProgress, [0, 0.5], [1, 0]
  )

  return (
    <motion.div style={{ y, opacity }}>
      随滚动消失
    </motion.div>
  )
}`,
  },
]

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="p-6 rounded-xl bg-motion-darker/80 border border-motion-accent/10 overflow-x-auto text-sm">
      <code className="text-motion-light/80 font-mono leading-relaxed whitespace-pre">
        {code}
      </code>
    </pre>
  )
}

export default function CodeSection() {
  const [activeExample, setActiveExample] = useState(examples[0].id)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const activeExampleData = examples.find((e) => e.id === activeExample)!

  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
          >
            代码示例
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-motion-light mb-4">
            极简的{' '}
            <span className="gradient-text">声明式 API</span>
          </h2>
          <p className="text-motion-light/50 text-lg max-w-xl mx-auto">
            几行代码即可实现复杂的动画效果，让开发变得简单而优雅
          </p>
        </motion.div>

        {/* Code examples */}
        <motion.div
          className="rounded-2xl bg-motion-mid/30 border border-motion-accent/5 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Tab bar */}
          <div className="flex items-center gap-1 p-2 border-b border-motion-accent/10 overflow-x-auto">
            {examples.map((example) => (
              <motion.button
                key={example.id}
                onClick={() => setActiveExample(example.id)}
                className={`relative px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  activeExample === example.id
                    ? 'text-motion-glow'
                    : 'text-motion-light/50 hover:text-motion-light/80'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {activeExample === example.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-lg bg-motion-accent/10 border border-motion-accent/20"
                    transition={{ type: 'spring' as const, stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{example.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Code display */}
          <div className="p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExample}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <CodeBlock code={activeExampleData.code} />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
