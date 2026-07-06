'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

export default function CTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto text-center relative">
        {/* Background glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-motion-accent/10 blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-motion-light mb-6 leading-tight">
            准备好让你的界面
            <br />
            <span className="gradient-text">活起来了吗？</span>
          </h2>

          <p className="text-lg text-motion-light/50 mb-12 max-w-2xl mx-auto leading-relaxed">
            加入数万开发者的行列，使用 Motion 构建下一代 Web 体验。
            开源免费，即刻开始。
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <motion.a
              href="https://motion.dev/docs/quick-start"
              target="_blank"
              className="group relative px-10 py-5 rounded-2xl bg-gradient-to-r from-motion-accent to-motion-hot text-white font-semibold text-lg overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-motion-hot to-motion-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative flex items-center gap-3">
                立即开始
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </span>
            </motion.a>

            <motion.a
              href="https://github.com/motiondivision/motion"
              target="_blank"
              className="px-8 py-5 rounded-2xl border-2 border-motion-accent/20 text-motion-light font-semibold text-lg hover:border-motion-accent/40 hover:bg-motion-accent/5 transition-all"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.575-2.505 1.413-3.399-.142-.352-.62-1.765.136-3.639 0 0 1.117-.362 3.663 1.371 1.055-.293 2.184-.44 3.365-.444 1.181.004 2.31.151 3.365.444 2.546-1.733 3.663-1.371 3.663-1.371.756 1.874.278 3.287.136 3.639.838.894 1.413 2.088 1.413 3.399 0 4.611-2.809 5.623-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </span>
            </motion.a>
          </div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {[
              { value: '330+', label: '官方示例' },
              { value: '100+', label: '分步教程' },
              { value: '120fps', label: 'GPU 加速' },
              { value: 'MIT', label: '开源许可' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm text-motion-light/40 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
