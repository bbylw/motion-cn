'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import Image from 'next/image'
import { useRef } from 'react'
import MagneticButton from './MagneticButton'

export default function Navbar() {
  const { scrollY } = useScroll()
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.92])
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.15])

  const navItems = [
    { label: '特性', href: '#features' },
    { label: '演示', href: '#showcase' },
    { label: '文档', href: 'https://motion.dev/docs' },
    { label: '示例', href: 'https://motion.dev/examples' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <motion.nav
        className="max-w-7xl mx-auto flex items-center justify-between rounded-2xl px-5 py-2.5 glass"
        style={{
          backgroundColor: useTransform(backgroundOpacity, (v) => `rgba(18, 18, 26, ${v})`),
          borderColor: useTransform(borderOpacity, (v) => `rgba(99, 102, 241, ${v})`),
        }}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2.5"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="w-8 h-8 rounded-lg overflow-hidden"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Image
              src="/motion-logo.png"
              alt="Motion Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </motion.div>
          <span className="font-display text-lg font-bold text-motion-light">
            Motion
          </span>
        </motion.a>

        {/* Nav Items */}
        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm text-motion-light/70 hover:text-motion-light transition-colors relative group"
              whileHover={{ y: -1 }}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-motion-accent to-motion-hot origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <MagneticButton className="hidden sm:block px-4 py-1.5 rounded-xl bg-motion-accent/10 border border-motion-accent/20 text-motion-glow text-sm font-medium hover:bg-motion-accent/20 transition-colors">
            快速开始
          </MagneticButton>
          <motion.a
            href="https://github.com/motiondivision/motion"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-lg text-motion-light/60 hover:text-motion-light transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.575-2.505 1.413-3.399-.142-.352-.62-1.765.136-3.639 0 0 1.117-.362 3.663 1.371 1.055-.293 2.184-.44 3.365-.444 1.181.004 2.31.151 3.365.444 2.546-1.733 3.663-1.371 3.663-1.371.756 1.874.278 3.287.136 3.639.77.84 1.235 1.911 1.235 3.221 0 4.611-2.809 5.623-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
        </div>
      </motion.nav>
    </header>
  )
}
