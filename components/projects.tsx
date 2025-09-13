"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Customer Churn Prediction",
    description:
      "Built a machine learning model to predict customer churn with 94% accuracy using ensemble methods and feature engineering.",
    technologies: ["Python", "Scikit-learn", "XGBoost"],
    category: "Machine Learning",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "Real-time Sentiment Analysis",
    description: "Developed a real-time sentiment analysis system for social media data using NLP techniques.",
    technologies: ["Python", "NLTK", "Apache Kafka"],
    category: "NLP",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Sales Forecasting Dashboard",
    description: "Created an interactive dashboard for sales forecasting using time series analysis.",
    technologies: ["Python", "Streamlit", "Prophet"],
    category: "Time Series",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Computer Vision Quality Control",
    description: "Implemented a computer vision system for automated quality control in manufacturing.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    category: "Computer Vision",
    github: "#",
    demo: "#",
  },
]

const categories = ["All", "Machine Learning", "NLP", "Time Series", "Computer Vision"]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6 text-balance">{"Projects"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty font-light leading-relaxed">
            {"A selection of data science projects demonstrating practical applications."}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`font-normal ${activeCategory === category ? "bg-foreground text-background hover:bg-foreground/90" : "hover:bg-muted"}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="space-y-16">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="mb-4">
                  <span className="text-xs text-muted-foreground font-mono">{project.category}</span>
                </div>
                <h3 className="text-xl font-normal text-foreground mb-4 text-balance">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button size="sm" variant="ghost" className="p-0 h-auto font-normal">
                    <Github className="h-4 w-4 mr-2" />
                    {"Code"}
                  </Button>
                  <Button size="sm" variant="ghost" className="p-0 h-auto font-normal">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {"Demo"}
                  </Button>
                </div>
              </div>

              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <div className="aspect-video bg-muted rounded-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
