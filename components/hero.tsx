"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-16">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance leading-tight">
            {"Data Scientist"}
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto font-light leading-relaxed">
            {"Transforming complex data into actionable insights through statistical modeling and machine learning."}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="bg-foreground hover:bg-foreground/90 text-background font-normal px-8 py-3"
          >
            {"View Work"}
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="font-normal px-8 py-3 bg-transparent">
            {"Resume"}
          </Button>
        </div>

        <div className="flex justify-center space-x-8">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground p-2">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground p-2">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground p-2">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
