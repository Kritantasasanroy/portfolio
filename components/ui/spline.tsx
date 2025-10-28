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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    
    // Set a timeout to show fallback if loading takes too long
    const timeout = setTimeout(() => {
      if (loading) {
        console.warn('Spline scene loading timeout')
        setError(true)
        setLoading(false)
      }
    }, 10000) // 10 second timeout

    // Dynamically import Spline only in the browser
    import('@splinetool/react-spline')
      .then((mod) => {
        setSplineComponent(() => mod.default)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Failed to load Spline:', err)
        setError(true)
        setLoading(false)
      })

    return () => clearTimeout(timeout)
  }, [loading])

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg">
        <div className="text-center">
          <span className="loader"></span>
          <p className="text-slate-400 mt-4 text-sm">Loading 3D Scene...</p>
        </div>
      </div>
    )
  }

  if (error || !SplineComponent) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 via-slate-850 to-slate-900 rounded-lg border border-slate-700/50">
        <div className="text-center p-8">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <p className="text-slate-300 font-medium">3D Interactive Scene</p>
          <p className="text-slate-500 text-sm mt-2">Powered by Spline</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative">
      <SplineComponent
        scene={scene}
        className={className}
        onLoad={() => {
          console.log('Spline scene loaded successfully')
          setLoading(false)
        }}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg">
          <div className="text-center">
            <span className="loader"></span>
            <p className="text-slate-400 mt-4 text-sm">Loading 3D Model...</p>
          </div>
        </div>
      )}
    </div>
  )
}
