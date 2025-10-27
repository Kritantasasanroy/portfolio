'use client'

import { useEffect, useState } from 'react'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [mounted, setMounted] = useState(false)
  const [SplineComponent, setSplineComponent] = useState<any>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Dynamically import Spline only in the browser
    import('@splinetool/react-spline')
      .then((mod) => {
        setSplineComponent(() => mod.default)
      })
      .catch((err) => {
        console.error('Failed to load Spline:', err)
        setError(true)
      })
  }, [])

  if (!mounted || !SplineComponent) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg">
        <span className="loader"></span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg">
        <p className="text-slate-400">3D Scene</p>
      </div>
    )
  }

  return (
    <SplineComponent
      scene={scene}
      className={className}
    />
  )
}
