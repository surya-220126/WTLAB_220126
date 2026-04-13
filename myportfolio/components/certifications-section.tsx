"use client"

import { useRef, useEffect, useState } from 'react'
import { Award, ExternalLink, CheckCircle, Calendar, Building2, Sparkles, Medal, Trophy, Star } from 'lucide-react'

const certifications = [
  {
    title: 'Level Up: Python',
    issuer: 'LinkedIn Learning',
    date: 'Sep 2024',
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500',
    skills: ['Python', 'Advanced Concepts'],
    featured: false
  },
  {
    title: 'Python Professional Certificate',
    issuer: 'OpenEDG Python Institute',
    date: 'Sep 2024',
    gradient: 'from-emerald-500 to-green-500',
    bgColor: 'bg-emerald-500',
    skills: ['Python', 'Programming'],
    featured: true
  },
  {
    title: 'Python Essential Training',
    issuer: 'LinkedIn Learning',
    date: 'Sep 2024',
    gradient: 'from-cyan-500 to-teal-500',
    bgColor: 'bg-cyan-500',
    skills: ['Python', 'Fundamentals'],
    featured: false
  },
  {
    title: 'Python Object-Oriented Programming',
    issuer: 'LinkedIn Learning',
    date: 'Sep 2024',
    gradient: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500',
    skills: ['Python', 'OOP'],
    featured: false
  },
  {
    title: 'Python Quick Start',
    issuer: 'NASBA',
    date: 'Sep 2024',
    gradient: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500',
    skills: ['Python', 'Basics'],
    featured: false
  },
  {
    title: 'ML & AI Training Program',
    issuer: 'CODTECH IT SOLUTIONS',
    date: '2024',
    gradient: 'from-primary to-accent',
    bgColor: 'bg-primary',
    skills: ['ML', 'AI', 'Deep Learning'],
    featured: true
  },
  {
    title: 'Flask Python',
    issuer: 'Great Learning',
    date: '2024',
    gradient: 'from-slate-600 to-zinc-700',
    bgColor: 'bg-slate-600',
    skills: ['Flask', 'Web Dev'],
    featured: false
  },
  {
    title: 'SQL Using MySQL & Database Design',
    issuer: 'Scaler',
    date: '2024',
    gradient: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-500',
    skills: ['SQL', 'MySQL', 'Database'],
    featured: true
  },
  {
    title: 'Python Course',
    issuer: 'Geeks for Geeks',
    date: '2024',
    gradient: 'from-green-600 to-emerald-600',
    bgColor: 'bg-green-600',
    skills: ['Python', 'DSA'],
    featured: false
  },
]

const stats = [
  { value: '9+', label: 'Certifications', icon: Medal },
  { value: '5+', label: 'Platforms', icon: Building2 },
  { value: '2024', label: 'Year Active', icon: Calendar },
  { value: '100%', label: 'Verified', icon: CheckCircle },
]

export function CertificationsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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
    <section ref={sectionRef} id="certifications" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Trophy className="w-4 h-4 text-accent" />
            <span className="text-accent font-mono text-sm tracking-wider">CREDENTIALS</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Licenses & <span className="bg-gradient-to-r from-accent via-orange-400 to-primary bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto text-lg transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Validated expertise through industry-recognized certifications
          </p>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          {stats.map((stat, index) => {
            const StatIcon = stat.icon
            return (
              <div
                key={stat.label}
                className="group relative p-6 bg-card/50 backdrop-blur rounded-2xl border border-border/50 hover:border-primary/30 transition-all text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <StatIcon className="w-6 h-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Certifications Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={`group relative transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              } ${cert.featured ? 'md:col-span-1 lg:row-span-1' : ''}`}
              style={{ transitionDelay: `${400 + index * 80}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow Effect */}
              <div 
                className={`absolute -inset-0.5 bg-gradient-to-r ${cert.gradient} rounded-2xl blur-sm transition-opacity duration-500 ${
                  hoveredCard === index ? 'opacity-60' : 'opacity-0'
                }`} 
              />
              
              {/* Card */}
              <div className="relative h-full bg-card/90 backdrop-blur-xl rounded-2xl border border-border/50 overflow-hidden transition-all hover:border-transparent">
                {/* Top Gradient Line */}
                <div className={`h-1.5 bg-gradient-to-r ${cert.gradient}`} />
                
                {/* Content */}
                <div className="p-6">
                  {/* Header Row */}
                  <div className="flex items-start justify-between mb-4">
                    {/* Badge */}
                    <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                      <Award className="w-7 h-7 text-white" />
                      {cert.featured && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 text-accent-foreground fill-current" />
                        </div>
                      )}
                    </div>
                    
                    {/* Verified Badge */}
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-xs font-medium text-emerald-500">Verified</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  
                  {/* Issuer */}
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{cert.issuer}</span>
                  </div>
                  
                  {/* Date */}
                  <div className="flex items-center gap-2 mb-5">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-mono text-muted-foreground">{cert.date}</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map(skill => (
                      <span 
                        key={skill}
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg bg-gradient-to-r ${cert.gradient} bg-opacity-10 text-foreground border border-border/50 transition-all hover:scale-105`}
                        style={{
                          background: `linear-gradient(135deg, ${cert.bgColor.replace('bg-', '')}10, transparent)`
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Hover Link */}
                  <div className={`absolute bottom-6 right-6 transition-all duration-300 ${
                    hoveredCard === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}>
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${cert.gradient} flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}>
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className={`absolute -bottom-12 -right-12 w-32 h-32 bg-gradient-to-br ${cert.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity blur-2xl`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-card/50 backdrop-blur rounded-full border border-border/50 hover:border-primary/30 transition-all group cursor-pointer">
            <Sparkles className="w-5 h-5 text-primary group-hover:animate-pulse" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Continuously learning and growing
            </span>
            <div className="flex -space-x-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
