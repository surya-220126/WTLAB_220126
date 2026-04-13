"use client"

import { useEffect, useState, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Immediate dot movement
      cursorDot.style.left = `${mouseX}px`
      cursorDot.style.top = `${mouseY}px`
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Smooth cursor follow animation
    const animate = () => {
      const dx = mouseX - cursorX
      const dy = mouseY - cursorY
      
      cursorX += dx * 0.15
      cursorY += dy * 0.15
      
      cursor.style.left = `${cursorX}px`
      cursor.style.top = `${cursorY}px`
      
      requestAnimationFrame(animate)
    }

    // Add hover detection for interactive elements
    const handleElementHover = () => {
      const interactiveElements = document.querySelectorAll('a, button, [data-cursor-hover]')
      
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    
    animate()
    handleElementHover()

    // Reattach hover listeners when DOM changes
    const observer = new MutationObserver(handleElementHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary transition-all duration-200 ease-out hidden md:block ${
          isHovering 
            ? 'w-16 h-16 bg-primary/20 border-accent' 
            : isClicking 
              ? 'w-8 h-8 bg-primary/30' 
              : 'w-10 h-10'
        }`}
        style={{ mixBlendMode: 'difference' }}
      />
      {/* Cursor dot */}
      <div
        ref={cursorDotRef}
        className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-all duration-75 hidden md:block ${
          isHovering ? 'w-2 h-2' : 'w-1.5 h-1.5'
        }`}
      />
    </>
  )
}
