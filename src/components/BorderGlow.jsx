import { useCallback, useRef } from 'react'

// BorderGlow — a glowing gradient border that follows the cursor's angle
// around the element and gets stronger the closer the cursor is to the
// edge. Own implementation (CSS variables + conic-gradient mask), modeled
// after the behavior of reactbits.dev/components/border-glow — not their
// source, which isn't published in a form I could pull into this build.
//
// Usage: wrap any element. `as` picks the rendered tag (must accept a ref
// and className — 'div', 'a', 'button' all work). Pass through any other
// prop (href, onClick, target, etc) and it lands on the rendered tag.
export default function BorderGlow({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy

    const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90
    const maxDist = Math.sqrt(rect.width ** 2 + rect.height ** 2) / 2
    const dist = Math.sqrt(dx * dx + dy * dy)
    const proximity = Math.min(dist / maxDist, 1) // 0 at center, 1 at the edge

    el.style.setProperty('--glow-angle', `${angle}deg`)
    el.style.setProperty('--glow-opacity', `${0.3 + proximity * 0.7}`)
  }, [])

  const handleMouseLeave = useCallback(() => {
    ref.current?.style.setProperty('--glow-opacity', '0')
  }, [])

  return (
    <Tag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`border-glow ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
