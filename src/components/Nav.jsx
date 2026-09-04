import { motion } from 'motion/react'

export default function Nav({ mode, setMode }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="#top"
          className={`font-mono text-sm tracking-widest transition-colors ${
            mode === 'design' ? 'text-charcoal' : 'text-ink'
          }`}
        >
          MARK<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <ModeToggle mode={mode} setMode={setMode} />
          <a
            href={mode === 'design' ? '#design-contact' : '#contact'}
            className={`hidden sm:inline-block font-mono text-xs tracking-widest uppercase transition-colors ${
              mode === 'design'
                ? 'text-charcoal-muted hover:text-charcoal'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            Contact ↗
          </a>
        </div>
      </div>
    </header>
  )
}

function ModeToggle({ mode, setMode }) {
  return (
    <div
      role="tablist"
      aria-label="View site as developer or designer"
      className="relative flex items-center rounded-full border border-line bg-surface/80 backdrop-blur p-1 font-mono text-[11px] tracking-widest uppercase"
    >
      {['dev', 'design'].map((m) => (
        <button
          key={m}
          role="tab"
          aria-selected={mode === m}
          onClick={() => setMode(m)}
          className="relative px-3.5 py-1.5 rounded-full transition-colors duration-300"
          style={{ color: mode === m ? '#0A0C10' : '#7C8494' }}
        >
          {mode === m && (
            <motion.span
              layoutId="mode-pill"
              className="absolute inset-0 rounded-full bg-accent"
              style={{ zIndex: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            />
          )}
          <span className="relative" style={{ zIndex: 1 }}>{m}</span>
        </button>
      ))}
    </div>
  )
}
