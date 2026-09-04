import { motion } from 'motion/react'
import { process } from '../content'
import { SectionLabel } from './Practice'

export default function Process() {
  return (
    <section id="process" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionLabel title="How a project runs" />

        <div className="mt-12 grid md:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden">
          {process.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-void p-8 md:p-10"
            >
              <span className="font-mono text-xs text-accent">{step.id}</span>
              <h3 className="font-display italic text-2xl text-ink mt-4 mb-3">{step.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-6">{step.description}</p>
              <span className="font-mono text-[10px] tracking-widest uppercase text-ink-faint">
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
