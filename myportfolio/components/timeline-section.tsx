"use client"

import { useRef, useEffect, useState } from 'react'
import { GraduationCap, Briefcase, Award, Rocket } from 'lucide-react'

const timelineEvents = [
  {
    year: '2028',
    title: 'B.Tech Computer Science',
    organization: 'Rajiv Gandhi University of Knowledge and Technologies (RGUKT)',
    description: 'Pursuing Bachelor of Technology with focus on AI/ML, Deep Learning, and Computer Vision. Actively involved in research and practical applications.',
    icon: GraduationCap,
    type: 'education',
    status: 'ongoing'
  },
  {
    year: '2024',
    title: 'ML & AI Training Program',
    organization: 'CODTECH IT SOLUTIONS',
    description: 'Completed comprehensive training in Machine Learning and Artificial Intelligence, gaining hands-on experience with real-world projects.',
    icon: Award,
    type: 'certification'
  },
  {
    year: '2024',
    title: 'Python Professional Certificate',
    organization: 'OpenEDG Python Institute',
    description: 'Earned professional certification demonstrating advanced Python programming skills and object-oriented programming expertise.',
    icon: Award,
    type: 'certification'
  },
  {
    year: '2024',
    title: 'Multiple LinkedIn Certifications',
    organization: 'LinkedIn Learning',
    description: 'Completed Level Up Python, Python Essential Training, Python OOP, and Python Quick Start certifications.',
    icon: Award,
    type: 'certification'
  },
  {
    year: '2024',
    title: 'Flask Python Development',
    organization: 'Great Learning',
    description: 'Learned web development with Flask framework, building REST APIs and web applications.',
    icon: Briefcase,
    type: 'skill'
  },
  {
    year: '2024',
    title: 'SQL & Database Design',
    organization: 'Scaler',
    description: 'Mastered SQL using MySQL and database design principles for efficient data management.',
    icon: Briefcase,
    type: 'skill'
  },
  {
    year: 'Present',
    title: 'AI Research & Development',
    organization: 'Personal Projects',
    description: 'Building innovative AI solutions including agentic systems, generative models, and computer vision applications.',
    icon: Rocket,
    type: 'project',
    status: 'ongoing'
  },
]

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

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
    <section ref={sectionRef} id="timeline" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-primary font-mono text-sm tracking-wider">03. JOURNEY</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="text-primary">Timeline</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2">
            <div 
              className="w-full bg-gradient-to-b from-primary to-accent transition-all duration-1000"
              style={{ height: isVisible ? '100%' : '0%' }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isLeft = index % 2 === 0
              
              return (
                <div
                  key={`${event.title}-${index}`}
                  className={`relative flex items-center transition-all duration-700 ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Content - Desktop */}
                  <div className={`hidden md:flex w-full items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div 
                        className={`p-6 bg-card rounded-2xl border transition-all duration-300 ${
                          activeIndex === index 
                            ? 'border-primary shadow-lg shadow-primary/10' 
                            : 'border-border'
                        }`}
                      >
                        <div className={`flex items-center gap-2 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          <span className={`px-3 py-1 text-xs font-mono rounded-full ${
                            event.type === 'education' ? 'bg-primary/20 text-primary' :
                            event.type === 'certification' ? 'bg-accent/20 text-accent' :
                            event.type === 'skill' ? 'bg-chart-2/20 text-chart-2' :
                            'bg-chart-4/20 text-chart-4'
                          }`}>
                            {event.status === 'ongoing' ? 'Ongoing' : event.year}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-1">{event.title}</h3>
                        <p className="text-sm text-primary mb-2">{event.organization}</p>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="w-2/12 flex justify-center">
                      <div className={`w-14 h-14 rounded-full border-4 flex items-center justify-center transition-all duration-300 z-10 ${
                        activeIndex === index 
                          ? 'border-primary bg-primary text-primary-foreground scale-110' 
                          : 'border-border bg-card text-muted-foreground'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="w-5/12" />
                  </div>

                  {/* Content - Mobile */}
                  <div className="md:hidden flex items-start gap-6 pl-4">
                    <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center flex-shrink-0 z-10 ${
                      activeIndex === index 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-border bg-card text-muted-foreground'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className={`flex-1 p-5 bg-card rounded-xl border transition-all ${
                      activeIndex === index ? 'border-primary' : 'border-border'
                    }`}>
                      <span className={`inline-block px-3 py-1 text-xs font-mono rounded-full mb-3 ${
                        event.type === 'education' ? 'bg-primary/20 text-primary' :
                        event.type === 'certification' ? 'bg-accent/20 text-accent' :
                        event.type === 'skill' ? 'bg-chart-2/20 text-chart-2' :
                        'bg-chart-4/20 text-chart-4'
                      }`}>
                        {event.status === 'ongoing' ? 'Ongoing' : event.year}
                      </span>
                      <h3 className="text-base font-bold text-foreground mb-1">{event.title}</h3>
                      <p className="text-sm text-primary mb-2">{event.organization}</p>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
