"use client"

import { useEffect, useRef } from 'react'

export function FloatingShapes() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const shapes = container.querySelectorAll('.floating-shape')
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight

      shapes.forEach((shape, index) => {
        const speed = (index + 1) * 20
        const xOffset = (x - 0.5) * speed
        const yOffset = (y - 0.5) * speed
        ;(shape as HTMLElement).style.transform = `translate(${xOffset}px, ${yOffset}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient orbs */}
      <div className="floating-shape absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl transition-transform duration-300 ease-out" />
      <div className="floating-shape absolute top-40 right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl transition-transform duration-300 ease-out" />
      <div className="floating-shape absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl transition-transform duration-300 ease-out" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  )
}
