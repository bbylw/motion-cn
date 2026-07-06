'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, useState, useEffect } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -60 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 14,
      },
    },
  }

  const title = '为现代 Web'
  const title2 = '打造的动画引擎'

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-bg" />

      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-motion-accent/5 blur-[100px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-motion-hot/5 blur-[100px]"
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 40, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-motion-glow/40"
          style={{
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl">
        {/* Badge */}
        <motion.div
          initial={isMounted ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-motion-accent/10 border border-motion-accent/20 mb-8"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-motion-accent"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm text-motion-glow">全新升级 · 120fps GPU 加速</span>
        </motion.div>

        {/* Main Title - Line 1 */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            variants={titleVariants}
            initial={isMounted ? 'hidden' : false}
            animate="visible"
          >
            {title.split('').map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="inline-block text-motion-light"
                style={{ perspective: 1000 }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Main Title - Line 2 */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text"
            variants={titleVariants}
            initial={isMounted ? 'hidden' : false}
            animate="visible"
          >
            {title2.split('').map((letter, i) => (
              <motion.span
                key={i}
                variants={letterVariants}
                className="inline-block"
                style={{ perspective: 1000 }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-motion-light/60 max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={isMounted ? { opacity: 0, y: 30 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          一个开源动画库，将 JavaScript 的强大能力与浏览器原生 API 结合，
          为 React、JavaScript 和 Vue 提供生产就绪的动画解决方案。
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={isMounted ? { opacity: 0, y: 30 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#showcase"
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-motion-accent to-motion-hot text-white font-medium overflow-hidden"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-motion-hot to-motion-accent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <span className="relative flex items-center gap-2">
              探索演示
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </span>
          </motion.a>

          <motion.code
            className="px-6 py-4 rounded-2xl bg-motion-mid border border-motion-accent/20 text-motion-glow font-mono text-sm"
            whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.4)' }}
          >
            npm install motion
          </motion.code>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-motion-light/20 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-motion-glow"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
