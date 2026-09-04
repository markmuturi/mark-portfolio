import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Work from './components/Work'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DesignSite from './components/DesignSite'
import DesignFooter from './components/design/DesignFooter'

export default function App() {
  const [mode, setMode] = useState('dev')

  useEffect(() => {
    document.documentElement.dataset.mode = mode
  }, [mode])

  return (
    <div className={mode === 'design' ? 'bg-paper min-h-screen' : 'bg-void min-h-screen'}>
      <Nav mode={mode} setMode={setMode} />
      <main>
        {mode === 'design' ? (
          <DesignSite />
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
    </div>
  )
}
