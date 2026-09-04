import { motion } from 'motion/react'

export default function OrbitRing({ accent = '#FF5A4E', size = 220, initial = 'M' }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div
        className="absolute inset-0 rounded-full transition-colors duration-500"
        style={{ border: `2px dashed ${accent}`, opacity: 0.45 }}
      />
      <div className="absolute inset-6 rounded-full bg-white border border-paper-line flex items-center justify-center shadow-sm">
        <span className="font-heading text-6xl text-charcoal">{initial}</span>
      </div>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 9, ease: 'linear' }}
      >
        <span
          className="absolute rounded-full transition-colors duration-500"
          style={{
            width: 14,
            height: 14,
            backgroundColor: accent,
            top: -7,
            left: '50%',
            marginLeft: -7,
            boxShadow: `0 0 0 4px ${accent}22`,
          }}
        />
      </motion.div>
    </div>
  )
}
