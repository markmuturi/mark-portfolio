import OrbitRing from './OrbitRing'
import { designPalette, designHero } from '../../content'

export default function DesignHero({ accent, setAccent }) {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center px-6 md:px-10 pt-28 pb-16 bg-paper">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-16 items-center">
        <div>
          <p
            className="font-friendly font-semibold text-xs md:text-sm tracking-widest uppercase mb-6 transition-colors duration-500"
            style={{ color: accent }}
          >
            {designHero.eyebrow}
          </p>

          <h1 className="font-heading text-charcoal leading-[0.85] text-[clamp(3.5rem,9vw,8rem)] tracking-tight">
            {designHero.heading}
          </h1>

          <p className="font-friendly text-charcoal-muted text-base md:text-lg mt-8 max-w-xl leading-relaxed">
            {designHero.body}
          </p>

          <div className="mt-10 flex items-center gap-3">
            <span className="font-friendly text-xs text-charcoal-muted mr-1">Palette</span>
            {designPalette.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setAccent(p.hex)}
                aria-label={`Use ${p.id} accent`}
                aria-pressed={accent === p.hex}
                className="w-6 h-6 rounded-full transition-transform hover:scale-110"
                style={{
                  backgroundColor: p.hex,
                  boxShadow: accent === p.hex ? `0 0 0 2px #FAF9F6, 0 0 0 4px ${p.hex}` : 'none',
                }}
              />
            ))}
          </div>
        </div>

        <OrbitRing accent={accent} size={220} />
      </div>
    </section>
  )
}
