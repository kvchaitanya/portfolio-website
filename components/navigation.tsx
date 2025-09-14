"use client"

import { useState, useEffect } from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }


  const navLinks = [
    { href: "/publications", label: "Publications & Talks" },
    { href: "/hackathons", label: "Hackathons" },
    { href: "/cv", label: "CV" },
    { href: "https://calendly.com/chaitanya4599/30min", label: "Meet Me", external: true },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="font-light text-lg text-foreground">{"DS"}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light transition-colors hover:text-foreground text-muted-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light transition-colors hover:text-foreground text-muted-foreground"
                  onClick={() => setIsOpen(false)}
                  prefetch={false}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu with overlay */}
        {isOpen && (
          <>
            <div className="fixed inset-0 bg-black/40 z-[99]" onClick={() => setIsOpen(false)} />
            <div className="fixed top-16 left-0 right-0 z-[100] md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border/50 rounded-b-lg shadow-lg">
                {navLinks.map((link) => (
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 text-base font-light transition-colors hover:text-foreground text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 text-base font-light transition-colors hover:text-foreground text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
