import { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DesignSite from './components/DesignSite'
import DesignFooter from './components/design/DesignFooter'
import useGuidedTour from './hooks/useGuidedTour'

export default function App() {
  const [mode, setMode] = useState('dev')
  const tour = useGuidedTour(setMode)

  useEffect(() => {
    document.documentElement.dataset.mode = mode
  }, [mode])

  return (
    <div className={mode === 'design' ? 'bg-paper min-h-screen' : 'bg-void min-h-screen'}>
      <Nav mode={mode} setMode={setMode} />
      <main>
        {mode === 'design' ? (
          <DesignSite carouselAutoplay={tour.active && tour.stepId === 'design-work'} />
        ) : (
          <>
            <Hero mode={mode} />
            <Skills />
            <Work />
            <Process />
            <Contact />
          </>
        )}
      </main>
      {mode === 'design' ? <DesignFooter /> : <Footer />}

      {tour.active && (
        <button
          type="button"
          onClick={tour.skip}
          className="fixed bottom-6 right-6 z-[999] font-mono text-[11px] tracking-widest uppercase px-4 py-2 rounded-full bg-black/70 text-white backdrop-blur hover:bg-black/85 transition-colors"
        >
          Skip tour
        </button>
      )}

      <Analytics />
    </div>
  )
}
