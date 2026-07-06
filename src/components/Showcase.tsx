'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef, useState } from 'react'

function SpringDemo() {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-motion-accent to-motion-hot cursor-pointer shadow-lg shadow-motion-accent/20"
        animate={{
          scale: isPressed ? 0.7 : 1,
          borderRadius: isPressed ? '50%' : '16px',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 17,
        }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.6 }}
        onTapStart={() => setIsPressed(true)}
        onTap={() => setIsPressed(false)}
        onTapCancel={() => setIsPressed(false)}
      />
      <span className="text-xs text-motion-light/40">按住我体验弹簧效果</span>
    </div>
  )
}

function DragDemo() {
  const constraintsRef = useRef(null)

  return (
    <div ref={constraintsRef} className="relative w-full h-32 rounded-xl bg-motion-darker/50 border border-motion-accent/10 overflow-hidden">
      <motion.div
        className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 cursor-grab active:cursor-grabbing flex items-center justify-center shadow-lg shadow-emerald-500/20"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        whileDrag={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
        whileHover={{ scale: 1.05 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M8 9l-4 3 4 3V9zm8 0v6l4-3-4-3zM11 8l3-4-3 4zm0 8l-3 4 3-4z"/>
        </svg>
      </motion.div>
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-motion-light/40">在框内自由拖拽</span>
    </div>
  )
}

function LayoutDemo() {
  const [items, setItems] = useState([1, 2, 3, 4])

  const shuffle = () => {
    setItems((prev) => [...prev].sort(() => Math.random() - 0.5))
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-4 gap-2">
        {items.map((item) => (
          <motion.div
            key={item}
            layout
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {item}
          </motion.div>
        ))}
      </div>
      <motion.button
        onClick={shuffle}
        className="px-4 py-1.5 rounded-lg bg-motion-accent/20 text-motion-glow text-xs font-medium hover:bg-motion-accent/30 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
       重新排序
      </motion.button>
    </div>
  )
}

function ScrollDemo() {
  const x = useMotionValue(0)
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const rotate = useTransform(xSpring, [-200, 200], [-15, 15])

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <motion.div
        className="w-full h-20 rounded-xl bg-gradient-to-r from-motion-hot/20 to-motion-warm/20 border border-motion-hot/20 flex items-center justify-center cursor-grab active:cursor-grabbing relative overflow-hidden"
        style={{ rotate }}
      >
        <motion.div
          className="flex gap-3 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -300, right: 300 }}
          style={{ x }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-14 h-14 rounded-lg bg-gradient-to-br from-motion-hot to-motion-warm flex-shrink-0 flex items-center justify-center text-white font-mono text-xs shadow-lg shadow-motion-hot/20"
            >
              {i + 1}
            </div>
          ))}
        </motion.div>
      </motion.div>
      <span className="text-xs text-motion-light/40">水平拖拽浏览更多</span>
    </div>
  )
}

function GestureDemo() {
  const [scale, setScale] = useState(1)
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0.3, 1, 0.3])

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.div
        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-500 cursor-pointer shadow-lg shadow-rose-500/20"
        style={{ x, opacity, scale }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9, rotate: 180 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        drag="x"
        dragConstraints={{ left: -50, right: 50 }}
        onDoubleClick={() => setScale(scale === 1 ? 1.5 : 1)}
        onDragEnd={() => x.set(0)}
      />
      <span className="text-xs text-motion-light/40">悬停 · 拖拽 · 双击</span>
    </div>
  )
}

const demos = [
  { title: '弹簧物理', component: SpringDemo, description: '真实的物理弹簧动画' },
  { title: '自由拖拽', component: DragDemo, description: '带约束的拖拽系统' },
  { title: '布局动画', component: LayoutDemo, description: '自动布局过渡' },
  { title: '滚动联动', component: ScrollDemo, description: '拖拽视差效果' },
  { title: '复合手势', component: GestureDemo, description: '组合手势识别' },
]

export default function Showcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="showcase" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-motion-accent/[0.03] blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative">
               <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-motion-hot/10 border border-motion-hot/20 text-motion-hot text-sm mb-4"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: 'spring' as const, stiffness: 200, delay: 0.2 }}
          >
            交互演示
          </motion.span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-motion-light mb-4">
            Motion 的{' '}
            <span className="gradient-text">强大表现力</span>
          </h2>
          <p className="text-motion-light/50 text-lg max-w-xl mx-auto">
            亲自体验以下演示，感受 Motion 在各类场景下的动画魅力
          </p>
        </motion.div>

        {/* Demo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demos.map((demo, index) => {
            const DemoComponent = demo.component
            return (
              <motion.div
                key={demo.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1 + 0.3,
                type: 'spring' as const,
                stiffness: 100,
                }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-motion-mid/30 border border-motion-accent/5 hover:border-motion-accent/15 transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-base font-display font-semibold text-motion-light mb-1">
                    {demo.title}
                  </h3>
                  <p className="text-xs text-motion-light/40">{demo.description}</p>
                </div>
                <div className="h-48 flex items-center justify-center rounded-xl bg-motion-darker/50 border border-motion-accent/5">
                  <DemoComponent />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
