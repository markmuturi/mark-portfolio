import { useEffect, useRef, useState } from 'react'

// Guided, once-per-load walkthrough of the site. Plays automatically on
// mount, scrolling section to section, then switches from dev to design
// mode and continues through that tab too. Stops permanently and hands
// back full control the moment the visitor does anything — scroll, click,
// tap, or a keypress — so it never fights someone who wants to look around
// on their own. Also never starts at all if the OS has reduced motion on.
//
// Each outer step has a stable `stepId` (what the rest of the app checks —
// e.g. App.jsx turns the carousel's autoplay on only while
// stepId === 'design-work') and a `targets` list: one or more scroll
// phases within that step. Sections taller than the viewport need more
// than one scroll position to actually show everything, so a step like
// 'work' scrolls to the top of the section first, holds, then scrolls to
// the bottom of the same section to reveal what was cut off — same idea
// for 'design-work', which frames the carousel by itself first (so it
// isn't cropped by the heading above it), then scrolls to the detail
// panel underneath it. A step's total dwell is the sum of its targets'
// `hold` values.
const DEV_STEPS = [
  { stepId: 'top', targets: [{ id: 'top', block: 'start', hold: 3500 }] },
  { stepId: 'skills', targets: [{ id: 'skills', block: 'start', hold: 5000 }] },
  {
    stepId: 'work',
    targets: [
      { id: 'work', block: 'start', hold: 2200 },
      { id: 'work', block: 'end', hold: 3300 },
    ],
  },
  { stepId: 'process', targets: [{ id: 'process', block: 'start', hold: 4000 }] },
  { stepId: 'contact', targets: [{ id: 'contact', block: 'start', hold: 3500 }] },
]

const DESIGN_STEPS = [
  { stepId: 'top', targets: [{ id: 'top', block: 'start', hold: 3000 }] },
  {
    stepId: 'design-work',
    targets: [
      // Carousel is a fixed 500px tall — centering it on its own id (not
      // the section, which also includes the heading above) is what
      // actually gets the whole thing on screen uncropped.
      { id: 'design-work-carousel', block: 'center', hold: 4500 },
      // Then pan down to the synced detail panel. Autoplay keeps running
      // underneath this the whole time, so by the 11s total it's cycled
      // through every project's details at least once.
      { id: 'design-work-details', block: 'end', hold: 6500 },
    ],
  },
  { stepId: 'design-contact', targets: [{ id: 'design-contact', block: 'start', hold: 3500 }] },
]

// Time given to the design tree to mount after setMode('design') before we
// try to scroll to its #top — React's re-render is synchronous well within
// this, it's just a safety margin, not a tuned animation value.
const MODE_SWITCH_SETTLE_MS = 500

export default function useGuidedTour(setMode) {
  const [active, setActive] = useState(false)
  const [stepId, setStepId] = useState(null)
  const cancelledRef = useRef(false)
  const timeoutsRef = useRef([])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return undefined

    setActive(true)

    const schedule = (fn, ms) => {
      const t = setTimeout(fn, ms)
      timeoutsRef.current.push(t)
      return t
    }

    function cancel() {
      if (cancelledRef.current) return
      cancelledRef.current = true
      timeoutsRef.current.forEach(clearTimeout)
      timeoutsRef.current = []
      setActive(false)
      setStepId(null)
    }

    function runSteps(steps, onDone) {
      let stepIndex = 0
      let targetIndex = 0

      const nextTarget = () => {
        if (cancelledRef.current) return
        const step = steps[stepIndex]
        if (!step) {
          onDone()
          return
        }
        if (targetIndex === 0) setStepId(step.stepId)

        const target = step.targets[targetIndex]
        if (!target) {
          stepIndex += 1
          targetIndex = 0
          nextTarget()
          return
        }

        document.getElementById(target.id)?.scrollIntoView({ behavior: 'smooth', block: target.block })
        targetIndex += 1
        schedule(nextTarget, target.hold)
      }

      nextTarget()
    }

    runSteps(DEV_STEPS, () => {
      if (cancelledRef.current) return
      setMode('design')
      schedule(() => runSteps(DESIGN_STEPS, cancel), MODE_SWITCH_SETTLE_MS)
    })

    // Only real input intent cancels the tour — not the 'scroll' event,
    // since our own scrollIntoView calls fire those too and would cancel
    // the tour the instant it tried to move.
    const onUserInput = () => cancel()
    window.addEventListener('wheel', onUserInput, { passive: true })
    window.addEventListener('touchstart', onUserInput, { passive: true })
    window.addEventListener('pointerdown', onUserInput)
    window.addEventListener('keydown', onUserInput)

    return () => {
      timeoutsRef.current.forEach(clearTimeout)
      window.removeEventListener('wheel', onUserInput)
      window.removeEventListener('touchstart', onUserInput)
      window.removeEventListener('pointerdown', onUserInput)
      window.removeEventListener('keydown', onUserInput)
    }
    // Intentionally runs once on mount — this is a single scripted pass,
    // not something that should re-fire if setMode's identity changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const skip = () => {
    cancelledRef.current = true
    timeoutsRef.current.forEach(clearTimeout)
    timeoutsRef.current = []
    setActive(false)
    setStepId(null)
  }

  return { active, stepId, skip }
}
