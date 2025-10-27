'use client'

import { useEffect, useState } from 'react'

interface SplashCursorProps {
  DENSITY_DISSIPATION?: number
  VELOCITY_DISSIPATION?: number
  SPLAT_FORCE?: number
  SPLAT_RADIUS?: number
  COLOR_UPDATE_SPEED?: number
  CURL?: number
  PRESSURE?: number
}

export function ClientSplashCursor(props: SplashCursorProps) {
  const [mounted, setMounted] = useState(false)
  const [SplashComponent, setSplashComponent] = useState<any>(null)

  useEffect(() => {
    setMounted(true)
    
    // Dynamically import SplashCursor only in the browser
    import('@/components/ui/splash-cursor')
      .then((mod) => {
        setSplashComponent(() => mod.SplashCursor)
      })
      .catch((err) => {
        console.error('Failed to load SplashCursor:', err)
      })
  }, [])

  if (!mounted || !SplashComponent) {
    return null
  }

  return <SplashComponent {...props} />
}
