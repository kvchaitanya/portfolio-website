const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "R", "SQL", "JavaScript"],
  },
  {
    title: "Machine Learning",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras"],
  },
  {
    title: "Data Tools",
    skills: ["Pandas", "NumPy", "Apache Spark", "Tableau"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Git", "MLflow"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6 text-balance">{"Skills"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty font-light leading-relaxed">
            {"Technical expertise across data science and machine learning technologies."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-normal text-foreground mb-6">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <span className="text-sm text-muted-foreground font-mono">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-lg font-normal text-foreground mb-12 text-center">{"Additional Expertise"}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <h4 className="font-normal text-foreground mb-3">{"Statistics"}</h4>
              <p className="text-sm text-muted-foreground">{"Hypothesis Testing, A/B Testing"}</p>
            </div>
            <div>
              <h4 className="font-normal text-foreground mb-3">{"Deep Learning"}</h4>
              <p className="text-sm text-muted-foreground">{"CNNs, RNNs, Transformers"}</p>
            </div>
            <div>
              <h4 className="font-normal text-foreground mb-3">{"Big Data"}</h4>
              <p className="text-sm text-muted-foreground">{"Hadoop, Spark, Kafka"}</p>
            </div>
            <div>
              <h4 className="font-normal text-foreground mb-3">{"Visualization"}</h4>
              <p className="text-sm text-muted-foreground">{"Matplotlib, Plotly, D3.js"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
