'use client'

import dynamic from 'next/dynamic'

interface SplineSceneProps {
  scene: string
  className?: string
}

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="loader"></span>
    </div>
  ),
})

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Spline
      scene={scene}
      className={className}
    />
  )
}