import { motion } from 'motion/react'
import { work } from '../../content'

export default function DesignWork({ accent }) {
  const items = work.filter((w) => w.mode === 'design')

  return (
    <section id="design-work" className="px-6 md:px-10 py-24 md:py-32 bg-paper border-t border-paper-line">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-charcoal text-4xl md:text-5xl mb-4">Selected design work</h2>
        <p className="font-friendly text-charcoal-muted max-w-xl mb-12">
          Clean layout, subtle hover lift, nothing fighting for attention — the same restraint as the
          site this section takes after.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.a
              key={item.id}
              href={item.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: `0 24px 48px -16px ${accent}4D` }}
              className="rounded-2xl p-8 bg-white border"
              style={{
                borderColor: '#E7E4DD',
                borderStyle: item.placeholder ? 'dashed' : 'solid',
                opacity: item.placeholder ? 0.75 : 1,
              }}
            >
              <span
                className="inline-block font-friendly font-semibold text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full mb-4 transition-colors duration-500"
                style={{ backgroundColor: `${accent}1A`, color: accent }}
              >
                {item.tag}
              </span>
              <h3 className="font-heading text-3xl text-charcoal mb-2">{item.title}</h3>
              <p className="font-friendly text-charcoal-muted text-sm leading-relaxed">{item.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
