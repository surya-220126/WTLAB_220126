"use client"

import { useEffect, useState, useRef } from 'react'
import { ArrowDown, Download, ExternalLink } from 'lucide-react'
import { TypewriterText } from './animated-text'

const roles = [
  'Agentic AI Developer',
  'Machine Learning Engineer',
  'Deep Learning Enthusiast',
  'Computer Vision Expert',
  'Data Scientist',
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }

    const hero = heroRef.current
    hero?.addEventListener('mousemove', handleMouseMove)
    return () => hero?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background based on mouse */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, var(--primary) 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-mono">Available for opportunities</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-foreground">Hi, I&apos;m</span>
            <span className="block mt-2">
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x">
                  Surya Annepu
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
              </span>
            </span>
          </h1>

          {/* Animated Role */}
          <div className="h-12 md:h-16 flex items-center justify-center mb-8">
            <div className="relative">
              {roles.map((role, index) => (
                <span
                  key={role}
                  className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-xl md:text-3xl font-medium transition-all duration-500 ${
                    index === currentRole
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  <span className="text-primary">&lt;</span>
                  <span className="text-muted-foreground">{role}</span>
                  <span className="text-primary">/&gt;</span>
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            <TypewriterText 
              text="BTech Student at RGUKT, passionate about building AI-driven solutions that make a real impact. Exploring the frontiers of Machine Learning, Deep Learning, and Computer Vision."
              speed={30}
            />
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
              data-cursor-hover
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
            <a
              href="/resume.pdf"
              className="group px-8 py-4 border-2 border-border text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all hover:scale-105"
              data-cursor-hover
            >
              <span className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download CV
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-border/50">
            {[
              { value: '10+', label: 'Certifications' },
              { value: 'CS\'28', label: 'Graduating' },
              { value: '1500+', label: 'Connections' },
              { value: '5+', label: 'AI Domains' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground font-mono">Scroll</span>
        <ArrowDown className="w-4 h-4 text-primary" />
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease forwards;
        }
      `}</style>
    </section>
  )
}
