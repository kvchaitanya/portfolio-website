import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior Data Scientist",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead data science initiatives for product optimization and customer analytics. Built ML models that increased user engagement by 35% and reduced churn by 28%.",
    achievements: [
      "Developed recommendation system serving 2M+ users",
      "Led team of 4 data scientists and analysts",
      "Implemented MLOps pipeline reducing model deployment time by 60%",
    ],
    technologies: ["Python", "TensorFlow", "AWS", "Kubernetes"],
  },
  {
    title: "Data Scientist",
    company: "DataFlow Solutions",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Focused on predictive analytics and business intelligence solutions for Fortune 500 clients. Specialized in time series forecasting and anomaly detection.",
    achievements: [
      "Built forecasting models with 92% accuracy for retail clients",
      "Developed real-time anomaly detection system",
      "Created automated reporting dashboards saving 20 hours/week",
    ],
    technologies: ["Python", "R", "Tableau", "SQL"],
  },
  {
    title: "Junior Data Analyst",
    company: "Analytics Pro",
    location: "Boston, MA",
    period: "2019 - 2020",
    description:
      "Started career in data analysis focusing on statistical analysis and data visualization. Worked on various projects across healthcare and finance sectors.",
    achievements: [
      "Performed statistical analysis for clinical trials",
      "Created interactive dashboards for executive reporting",
      "Automated data collection processes",
    ],
    technologies: ["Python", "Excel", "Power BI", "SPSS"],
  },
]

const education = [
  {
    degree: "Master of Science in Data Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2017 - 2019",
    description: "Specialized in machine learning and statistical modeling with focus on deep learning applications.",
    coursework: ["Machine Learning", "Deep Learning", "Statistical Inference", "Data Mining"],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    school: "UC Berkeley",
    location: "Berkeley, CA",
    period: "2013 - 2017",
    description: "Strong foundation in computer science with emphasis on algorithms and data structures.",
    coursework: ["Algorithms", "Database Systems", "Software Engineering", "Statistics"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            {"Experience & Education"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            {"My professional journey and educational background in data science and machine learning."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">{"Work Experience"}</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-card-foreground mb-2">{exp.title}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span className="font-medium">{exp.company}</span>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>

                    <div className="mb-4">
                      <h5 className="font-medium text-card-foreground mb-2">{"Key Achievements:"}</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">{"Education"}</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-card-foreground mb-2">{edu.degree}</h4>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground mb-2">
                        <span className="font-medium">{edu.school}</span>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {edu.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 text-pretty">{edu.description}</p>

                    <div>
                      <h5 className="font-medium text-card-foreground mb-2">{"Relevant Coursework:"}</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <Badge key={course} variant="outline" className="text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
