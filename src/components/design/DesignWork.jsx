import { useState } from 'react'
import { motion } from 'motion/react'
import DepthCarousel from '../DepthCarousel'
import { work } from '../../content'

export default function DesignWork({ accent, autoplay = false }) {
  const items = work.filter((w) => w.mode === 'design')
  const [activeIndex, setActiveIndex] = useState(0)
  const active = items[activeIndex]

  const carouselItems = items.map((item) => ({ image: item.image, alt: item.title }))

  return (
    <section id="design-work" className="px-6 md:px-10 py-24 md:py-32 bg-paper border-t border-paper-line">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-charcoal text-4xl md:text-5xl mb-4">Selected design work</h2>
        <p className="font-friendly text-charcoal-muted max-w-xl mb-12">
          Drag, scroll, or use the arrows — the card in front is the active one, and its details sit
          just below.
        </p>

        {/* Own id so the guided tour can frame the carousel by itself,
            independent of the heading above it. */}
        <div id="design-work-carousel" style={{ height: '500px', position: 'relative' }}>
          <DepthCarousel
            items={carouselItems}
            depth={220}
            spread={90}
            tilt={22}
            tiltDirection="right"
            perspective={1400}
            visibleCards={4}
            falloff={0.2}
            blur={6}
            autoplay={autoplay}
            loop
            cardWidth={300}
            cardHeight={380}
            radius={18}
            tint="#05060a"
            duration={700}
            ease="power3.out"
            autoplayDelay={3200}
            showControls
            showIndicators
            onChange={(idx) => setActiveIndex(idx)}
          />
        </div>

        {/* Stable id on the wrapper (not the keyed motion.div inside it,
            which remounts every slide change) so the tour can target it
            reliably regardless of which project is currently active. */}
        <div id="design-work-details" className="mt-10 max-w-xl mx-auto text-center">
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className="inline-block font-friendly font-semibold text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full mb-4 transition-colors duration-500"
                style={{ backgroundColor: `${accent}1A`, color: accent }}
              >
                {active.tag}
              </span>
              <h3 className="font-heading text-3xl text-charcoal mb-2">{active.title}</h3>
              <p className="font-friendly text-charcoal-muted text-sm leading-relaxed">{active.description}</p>
              {active.href && (
                <a
                  href={active.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-4 font-friendly font-semibold text-xs tracking-widest uppercase transition-colors duration-500"
                  style={{ color: accent }}
                >
                  View project ↗
                </a>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
