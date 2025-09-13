"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6 text-balance">{"Contact"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty font-light leading-relaxed">
            {"Interested in collaborating or have a data science project in mind?"}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h3 className="text-lg font-normal text-foreground mb-8">{"Get in touch"}</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground font-mono">{"your.email@example.com"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground font-mono">{"San Francisco, CA"}</p>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="font-normal text-foreground mb-6">{"Connect"}</h4>
              <div className="flex gap-6 justify-center lg:justify-start">
                <Button variant="ghost" size="sm" className="p-0 h-auto font-normal">
                  <Github className="h-4 w-4 mr-2" />
                  {"GitHub"}
                </Button>
                <Button variant="ghost" size="sm" className="p-0 h-auto font-normal">
                  <Linkedin className="h-4 w-4 mr-2" />
                  {"LinkedIn"}
                </Button>
                <Button variant="ghost" size="sm" className="p-0 h-auto font-normal">
                  <Mail className="h-4 w-4 mr-2" />
                  {"Email"}
                </Button>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-normal text-foreground mb-3">
                    {"Name"}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background border-border/50 focus:border-foreground"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-normal text-foreground mb-3">
                    {"Email"}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-border/50 focus:border-foreground"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-normal text-foreground mb-3">
                  {"Subject"}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-background border-border/50 focus:border-foreground"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-normal text-foreground mb-3">
                  {"Message"}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-background border-border/50 focus:border-foreground resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-foreground hover:bg-foreground/90 text-background font-normal py-3"
              >
                {"Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
