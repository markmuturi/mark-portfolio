import { motion } from 'motion/react'
import { practice } from '../content'

export default function Practice({ mode, setMode }) {
  return (
    <section id="practice" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="01" title="Two practices" />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-12">
          {practice.map((p) => {
            const active = mode === p.key
            return (
              <motion.button
                key={p.id}
                onClick={() => setMode(p.key)}
                whileHover={{ y: -4 }}
                className="text-left rounded-2xl border p-8 md:p-10 transition-colors duration-300"
                style={{
                  borderColor: active ? 'var(--accent)' : '#232833',
                  backgroundColor: active ? 'var(--accent-soft)' : '#12151B',
                }}
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs tracking-widest text-ink-faint">{p.id}</span>
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border"
                    style={{ borderColor: active ? 'var(--accent)' : '#232833', color: active ? 'var(--accent)' : '#7C8494' }}
                  >
                    {p.tag}
                  </span>
                </div>

                <h3 className="font-display italic text-3xl md:text-4xl text-ink mb-4">{p.name}</h3>
                <p className="text-ink-muted leading-relaxed mb-6">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] tracking-wide px-2.5 py-1 rounded-md bg-surface2 text-ink-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ index, title }) {
  return (
    <div className="flex items-baseline justify-center gap-4 ">
      <span className="font-mono text-xs text-accent tracking-widest">{index}</span>
      <h2 className="font-mono font-bold text-4xl tracking-widest uppercase text-ink-muted hover:scale-105 hover:text-white hover:duration-300 transition-all">{title}</h2>
    </div>
  )
}
