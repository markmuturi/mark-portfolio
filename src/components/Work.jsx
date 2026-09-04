import { motion } from 'motion/react'
import { work } from '../content'
import { SectionLabel } from './Practice'
import BorderGlow from './BorderGlow'

export default function Work() {
  const items = work.filter((item) => item.mode === 'dev')

  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionLabel title="Selected work" />

        <div className="mt-12 flex flex-col gap-4">
          {items.map((item, i) => (
            <BorderGlow key={item.id} className="rounded-2xl">
              <motion.a
                href={item.href}
                target={item.placeholder ? undefined : '_blank'}
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative overflow-hidden flex items-center justify-between gap-6 rounded-2xl border border-line p-6 md:p-8 hover:border-accent transition-colors duration-300"
                style={{
                  backgroundColor: '#12151B',
                  opacity: item.placeholder ? 0.55 : 1,
                  borderStyle: item.placeholder ? 'dashed' : 'solid',
                }}
              >
                {item.image && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(100deg, rgba(10,12,16,0.94) 30%, rgba(10,12,16,0.6) 100%)',
                      }}
                      aria-hidden="true"
                    />
                  </>
                )}

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full border border-line text-ink-faint">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display italic text-2xl md:text-3xl text-ink group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-ink-muted text-sm md:text-base mt-2 max-w-2xl">{item.description}</p>
                </div>
                <span className="relative z-10 font-mono text-ink-faint text-xl shrink-0 group-hover:text-accent group-hover:translate-x-1 transition-all">
                  {item.placeholder ? '+' : '↗'}
                </span>
              </motion.a>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  )
}
