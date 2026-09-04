export default function DesignFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-6 md:px-10 py-8 bg-paper border-t border-paper-line">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 font-friendly font-semibold text-[11px] tracking-widest uppercase text-charcoal-muted">
        <span>© {year} Mark. SuaveCre8ive.</span>
        <a href="#top" className="hover:text-charcoal transition-colors">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
