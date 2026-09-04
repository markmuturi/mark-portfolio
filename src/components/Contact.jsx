import { profile } from '../content'
import { SectionLabel } from './Practice'
import BorderGlow from './BorderGlow'

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-24 md:py-32 border-t border-line">
      <div className="max-w-6xl mx-auto">
        <SectionLabel title="Get in touch" />

        <h2 className="font-body font-medium text-4xl md:text-6xl text-ink mt-8 max-w-3xl">
          Have a project in mind? <em className="font-display italic text-accent">Let's build it.</em>
        </h2>

        <div className="flex justify-center mt-12 flex-wrap gap-8">
          <BorderGlow
            as="a"
            href={`mailto:${profile.email}`}
            className="inline-block rounded-full px-6 py-3 bg-accent text-void font-mono text-xs tracking-widest uppercase 
            hover:opacity-90 hover:text-white hover:duration-500 transition-all"
          >
            {profile.email}
          </BorderGlow>
          <BorderGlow
            as="a"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full px-6 py-3 border border-line text-ink font-mono text-xs tracking-widest uppercase 
            hover:border-accent hover:scale-110 hover:duration-500 hover:bg-white hover:text-black transition-all"
          >
            GitHub
          </BorderGlow>
          <BorderGlow
            as="a"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full px-6 py-3 border border-line text-ink font-mono text-xs tracking-widest uppercase 
            hover:border-accent hover:scale-110 hover:duration-500 hover:bg-blue-400 hover:text-black transition-all"
          >
            LinkedIn
          </BorderGlow>
        </div>

        {/* <p className="mt-6 font-mono text-xs text-ink-faint">
          Contact details above are placeholders — edit them in src/content.js.
        </p> */}
      </div>
    </section>
  )
}
