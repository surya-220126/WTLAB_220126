"use client"

import { useRef, useEffect, useState } from 'react'
import { Brain, Code2, Wrench, Sparkles, Zap, Database, Cpu, Eye, Bot, Server } from 'lucide-react'

const skillCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
    bgGlow: 'bg-cyan-500/20',
    skills: [
      { name: 'Deep Learning', level: 90, icon: Cpu },
      { name: 'Machine Learning', level: 92, icon: Brain },
      { name: 'Computer Vision', level: 85, icon: Eye },
      { name: 'Agentic AI', level: 88, icon: Bot },
      { name: 'Generative AI', level: 87, icon: Sparkles },
      { name: 'NLP', level: 82, icon: Zap },
    ]
  },
  {
    title: 'Programming',
    icon: Code2,
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    bgGlow: 'bg-violet-500/20',
    skills: [
      { name: 'Python', level: 95, icon: Code2 },
      { name: 'DSA', level: 88, icon: Database },
      { name: 'SQL', level: 85, icon: Server },
      { name: 'Flask', level: 80, icon: Zap },
      { name: 'JavaScript', level: 75, icon: Code2 },
    ]
  },
  {
    title: 'Tools & Frameworks',
    icon: Wrench,
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    bgGlow: 'bg-orange-500/20',
    skills: [
      { name: 'TensorFlow', level: 85, icon: Cpu },
      { name: 'PyTorch', level: 82, icon: Cpu },
      { name: 'Scikit-learn', level: 90, icon: Brain },
      { name: 'Pandas/NumPy', level: 92, icon: Database },
      { name: 'OpenCV', level: 85, icon: Eye },
      { name: 'MySQL', level: 83, icon: Server },
    ]
  },
]

const techStack = [
  { name: 'Python', icon: '🐍' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'Keras', icon: '⚡' },
  { name: 'OpenCV', icon: '👁️' },
  { name: 'Scikit-learn', icon: '📊' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'Flask', icon: '🌶️' },
  { name: 'SQL', icon: '💾' },
  { name: 'MySQL', icon: '🗄️' },
  { name: 'Git', icon: '📦' },
  { name: 'Jupyter', icon: '📓' },
  { name: 'VS Code', icon: '💻' },
  { name: 'Linux', icon: '🐧' },
]

function CircularProgress({ percentage, size = 80, strokeWidth = 6, gradient }: { 
  percentage: number
  size?: number
  strokeWidth?: number
  gradient: string
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          className="text-muted/30"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={`transition-all duration-1000 ease-out`}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke={`url(#${gradient})`}
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <defs>
          <linearGradient id="gradient-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>
          <linearGradient id="gradient-violet" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
          <linearGradient id="gradient-orange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#eab308" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-foreground">{percentage}%</span>
      </div>
    </div>
  )
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

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

  const gradientIds = ['gradient-cyan', 'gradient-violet', 'gradient-orange']

  return (
    <section ref={sectionRef} id="skills" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm tracking-wider">EXPERTISE</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Skills & <span className="bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Mastering the art of AI engineering with cutting-edge tools and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <div
                key={category.title}
                className={`group relative transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                {/* Card Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
                
                {/* Main Card */}
                <div className="relative p-8 bg-card/80 backdrop-blur-xl rounded-3xl border border-border/50 hover:border-primary/30 transition-all h-full overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform`}>
                      <CategoryIcon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with Circular Progress */}
                  <div className="grid grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon
                      const isHovered = hoveredSkill === `${category.title}-${skill.name}`
                      
                      return (
                        <div
                          key={skill.name}
                          className={`flex flex-col items-center p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                            isHovered ? 'bg-primary/10 scale-105' : 'hover:bg-muted/50'
                          }`}
                          style={{
                            transitionDelay: isVisible ? `${(categoryIndex * 150) + (skillIndex * 50)}ms` : '0ms'
                          }}
                          onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <CircularProgress 
                            percentage={isVisible ? skill.level : 0} 
                            gradient={gradientIds[categoryIndex]}
                            size={70}
                            strokeWidth={5}
                          />
                          <div className="mt-3 flex items-center gap-1.5">
                            <SkillIcon className={`w-3.5 h-3.5 transition-colors ${isHovered ? 'text-primary' : 'text-muted-foreground'}`} />
                            <span className={`text-xs font-medium text-center transition-colors ${isHovered ? 'text-foreground' : 'text-muted-foreground'}`}>
                              {skill.name}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech Stack Floating Pills */}
        <div className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h4 className="text-center text-sm font-mono text-muted-foreground mb-8 tracking-wider">TECH STACK</h4>
          
          <div className="relative overflow-hidden py-4">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* First Row */}
            <div className="flex animate-marquee mb-4">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`row1-${tech.name}-${index}`}
                  className="flex-shrink-0 flex items-center gap-2 px-5 py-3 mx-2 bg-card/50 backdrop-blur border border-border/50 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group"
                >
                  <span className="text-lg group-hover:scale-125 transition-transform">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
            
            {/* Second Row - Reverse Direction */}
            <div className="flex animate-marquee-reverse">
              {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, index) => (
                <div
                  key={`row2-${tech.name}-${index}`}
                  className="flex-shrink-0 flex items-center gap-2 px-5 py-3 mx-2 bg-card/50 backdrop-blur border border-border/50 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group"
                >
                  <span className="text-lg group-hover:scale-125 transition-transform">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
