"use client"

import { useRef, useEffect, useState } from 'react'
import { TiltCard } from './tilt-card'
import { Brain, Code, Cpu, Eye, Database, Sparkles } from 'lucide-react'

const focuses = [
  { icon: Brain, title: 'Agentic AI', description: 'Building autonomous AI agents that can reason and act independently' },
  { icon: Sparkles, title: 'Generative AI', description: 'Creating intelligent systems that generate novel content and solutions' },
  { icon: Cpu, title: 'Machine Learning', description: 'Developing predictive models and intelligent algorithms' },
  { icon: Database, title: 'Data Science', description: 'Extracting insights from complex datasets' },
  { icon: Eye, title: 'Computer Vision', description: 'Teaching machines to see and understand visual data' },
  { icon: Code, title: 'DSA Python', description: 'Strong foundation in algorithms and problem-solving' },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-mono text-sm tracking-wider">01. ABOUT ME</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Passionate About <span className="text-primary">AI Innovation</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: About Text */}
          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed pl-6">
                I am a <span className="text-foreground font-semibold">BTech student</span> at Rajiv Gandhi University of Knowledge and Technologies, deeply passionate about <span className="text-primary font-semibold">Artificial Intelligence</span>, Machine Learning, and Deep Learning.
              </p>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in computer science, I am focused on exploring AI-driven technologies and their real-world applications. My goal is to solve complex problems and contribute to technological advancements.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I am eager to collaborate with industry experts, continuously learn, and innovate within the evolving field of AI. Currently based in <span className="text-foreground">Vijayawada, Andhra Pradesh, India</span>.
            </p>

            {/* Languages */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">English</span>
                <span className="text-primary ml-2">Professional</span>
              </div>
              <div className="px-4 py-2 bg-card rounded-lg border border-border">
                <span className="text-sm text-muted-foreground">Telugu</span>
                <span className="text-primary ml-2">Native</span>
              </div>
            </div>
          </div>

          {/* Right: Focus Areas Grid */}
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {focuses.map((focus, index) => (
              <TiltCard
                key={focus.title}
                className={`p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors ${
                  index === 0 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <focus.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{focus.title}</h3>
                <p className="text-sm text-muted-foreground">{focus.description}</p>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
