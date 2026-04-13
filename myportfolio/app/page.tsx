import { CustomCursor } from '@/components/custom-cursor'
import { FloatingShapes } from '@/components/floating-shapes'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { TimelineSection } from '@/components/timeline-section'
import { CertificationsSection } from '@/components/certifications-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom cursor effect */}
      <CustomCursor />
      
      {/* Floating background shapes */}
      <FloatingShapes />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Page Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
