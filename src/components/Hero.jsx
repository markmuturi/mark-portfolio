import { motion, AnimatePresence } from 'motion/react'
import { heroCopy, profile } from '../content'
import BorderGlow from './BorderGlow'

export default function Hero({ mode }) {
  const copy = heroCopy[mode]

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-16">
      <BackgroundGrid mode={mode} />

      <div className="max-w-6xl mx-auto w-full relative">
        <motion.p
          key={copy.eyebrow}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-mono text-xs md:text-sm tracking-widest uppercase text-accent mb-6"
        >
          {copy.eyebrow}
        </motion.p>

        <h1 className="font-body font-medium text-hero text-ink max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={mode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="block"
            >
              {copy.line1}{' '}
              <em className="font-display italic text-accent">{copy.accent}</em>
              <br />
              {copy.line2}
            </motion.span>
          </AnimatePresence>
        </h1>

        <motion.p
          key={copy.body}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 max-w-xl text-ink-muted text-base md:text-lg leading-relaxed"
        >
          {copy.body}
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center gap-9">
          <BorderGlow
            as="a"
            href="#work"
            className="inline-block rounded-full px-6 py-3 bg-accent text-void font-mono text-xs tracking-widest uppercase 
            hover:opacity-70  hover:duration-300 hover:text-white transition-all"
          >
            View work
          </BorderGlow>
          <BorderGlow
            as="a"
            href={profile.cvUrl}
            download="Mark_Muturi_Resume.pdf"
            className="inline-block rounded-full px-6 py-3 border border-line text-ink font-mono text-xs tracking-widest uppercase 
            hover:border-accent hover:scale-105 hover:text-red-600 transition-all"
          >
            Download CV
          </BorderGlow>
        </div>

        <div className="mt-16 flex items-center justify-center  gap-2 font-mono text-xs text-ink-faint">
          <span className="w-3.5 h-3.5 rounded-full bg-accent" />
          <div className='text-sm'>
            {profile.location} — {profile.availability}
          </div>
        </div>
      </div>
    </section>
  )
}

function BackgroundGrid({ mode }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E9EAEC 1px, transparent 1px), linear-gradient(to bottom, #E9EAEC 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <motion.div
        animate={{
          background:
            mode === 'dev'
              ? 'radial-gradient(circle at 80% 20%, rgba(255, 0, 0, 0.14), transparent 55%)'
              : 'radial-gradient(circle at 80% 20%, rgba(240,168,87,0.16), transparent 55%)',
        }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0"
      />
    </div>
  )
}
