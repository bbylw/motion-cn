'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const stats = [
  { label: 'NPM 月下载量', value: '8M+' },
  { label: 'GitHub Stars', value: '25K+' },
  { label: '官方示例', value: '330+' },
  { label: '动画帧率', value: '120fps' },
]

const sponsors = [
  'Framer',
  'Cursor',
  'Linear',
  'Figma',
  'Sanity',
  'Clerk',
  'Liveblocks',
  'Bolt.new',
]

function Marquee() {
  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex gap-8 animate-marquee">
        {[...sponsors, ...sponsors].map((name, i) => (
          <motion.div
            key={`${name}-${i}`}
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-motion-mid/20 border border-motion-accent/5"
            whileHover={{ scale: 1.05, borderColor: 'rgba(99, 102, 241, 0.3)' }}
          >
            <span className="text-sm text-motion-light/40 font-medium whitespace-nowrap">{name}</span>
          </motion.div>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </div>
  )
}

export default function GridLayout() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Stats grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: 'spring' as const,
                stiffness: 120,
              }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="text-center p-6 rounded-2xl bg-motion-mid/20 border border-motion-accent/5"
            >
              <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-motion-light/40">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee sponsors */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-motion-light/30 uppercase tracking-wider">
            受到全球领先团队和产品的信赖
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <Marquee />
        </motion.div>
      </div>
    </section>
  )
}
