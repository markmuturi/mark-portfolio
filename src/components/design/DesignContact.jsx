import { profile } from '../../content'

export default function DesignContact({ accent }) {
  return (
    <section id="design-contact" className="px-6 md:px-10 py-24 md:py-32 bg-paper border-t border-paper-line">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-charcoal text-4xl md:text-6xl max-w-2xl leading-[0.95]">
          Got a brand that needs a face?
        </h2>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="px-6 py-3 rounded-full font-friendly font-semibold text-xs tracking-widest uppercase text-white transition-colors duration-500"
            style={{ backgroundColor: accent }}
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-paper-line font-friendly font-semibold text-xs tracking-widest uppercase text-charcoal hover:border-charcoal transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
