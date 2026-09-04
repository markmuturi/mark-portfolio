export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px] tracking-widest uppercase text-ink-faint">
        <span>© {year} Mark Muturi</span>
        <a href="#top" className="hover:text-accent transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
