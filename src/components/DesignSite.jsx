import { useState } from 'react'
import DesignHero from './design/DesignHero'
import DesignWork from './design/DesignWork'
import DesignContact from './design/DesignContact'
import { designPalette } from '../content'

export default function DesignSite() {
  const [accent, setAccent] = useState(designPalette[0].hex)

  return (
    <>
      <DesignHero accent={accent} setAccent={setAccent} />
      <DesignWork accent={accent} />
      <DesignContact accent={accent} />
    </>
  )
}
