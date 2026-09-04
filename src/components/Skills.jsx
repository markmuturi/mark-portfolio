import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiWordpress, SiPython } from 'react-icons/si'
import { skills } from '../content'
import { SectionLabel } from './Practice'

// Official Simple Icons marks, mapped by skill id. Rendered monochrome by
// default (matches the row's text color) rather than each brand's saturated
// color, shifting to the accent on hover along with the rest of the card.
const ICONS = {
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  wordpress: SiWordpress,
  python: SiPython,
}

// The track is the real skill list rendered twice back to back. Animating
// it from translateX(0) to translateX(-50%) and looping is what makes the
// join invisible — the second copy is pixel-identical to the first, so the
// reset never shows. Hovering the track (bubbles up from any card) pauses
// the CSS animation via animation-play-state, so the card's own hover
// reveal (below) has time to actually be read.
function SkillCard({ skill, i }) {
  const Icon = ICONS[skill.id]
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.04 }}
      className="group relative flex w-36 md:w-40 shrink-0 flex-col items-center text-center gap-2 rounded-2xl border border-line bg-surface2 px-4 py-6 overflow-hidden transition-[border-color,box-shadow] duration-300 hover:[border-color:var(--accent)] hover:shadow-[0_16px_32px_-16px_var(--accent)]"
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'var(--accent-soft)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-2 w-full">
        <span className="font-mono text-[10px] text-ink-faint">{String(i + 1).padStart(2, '0')}</span>

        {Icon && (
          <Icon
            size={28}
            className="text-ink-muted transition-all duration-300 group-hover:scale-110 group-hover:[color:var(--accent)]"
            aria-hidden="true"
          />
        )}

        <span className="font-body font-medium text-sm text-ink transition-colors duration-300 group-hover:[color:var(--accent)]">
          {skill.name}
        </span>

        <span className="font-mono text-[9px] tracking-widest uppercase text-ink-faint">
          {skill.category}
        </span>

        <p className="font-body text-ink-muted text-xs leading-relaxed max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-1.5 transition-all duration-300 ease-out overflow-hidden">
          {skill.description}
        </p>
      </div>
    </motion.div>
  )
}

// Interactive by design: a cursor-tracked spotlight over the whole section,
// a slow infinite loop of the skill cards, and per-card hover — lift,
// accent border/glow, icon and label recolor, description reveal — that
// pauses the loop for as long as the cursor stays over it.
export default function Skills() {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 30 })
  const sectionRef = useRef(null)

  function handleMouseMove(e) {
    const rect = sectionRef.current.getBoundingClientRect()
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const loopSkills = [...skills, ...skills]

  return (
    <section
      id="skills"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative px-6 md:px-10 py-24 md:py-32 border-t border-line overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(520px circle at ${spotlight.x}% ${spotlight.y}%, var(--accent-soft), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative">
        <SectionLabel title="Skills" />

        <p className="font-mono text-xs text-ink-faint mt-6 mb-10 text-center">
          Hover a skill to pause the loop and see how it actually gets used.
        </p>
      </div>

      {/* Full-bleed relative to the section so the loop can run edge to
          edge; the fade mask lives on this clipping wrapper, not the track. */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        }}
      >
        <div className="flex w-max gap-4 animate-skills-loop hover:[animation-play-state:paused]">
          {loopSkills.map((skill, i) => (
            <SkillCard key={`${skill.id}-${i < skills.length ? 'a' : 'b'}`} skill={skill} i={i % skills.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
