"use client"

import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 bg-card border-t border-border relative">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              <span className="text-primary">S</span>
              <span className="text-foreground">urya</span>
              <span className="text-muted-foreground text-sm ml-1 font-mono">.dev</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Building the future with AI
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['About', 'Skills', 'Journey', 'Certifications', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/suryaannepu"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/surya-annepu-59b928325/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:suryaannepu@gmail.com"
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors group"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {new Date().getFullYear()} Surya Annepu. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in India
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute right-6 -top-6 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  )
}
