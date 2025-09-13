export function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl font-light text-foreground mb-6 text-balance">{"About"}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty font-light leading-relaxed">
            {"Passionate about leveraging data to solve complex problems and drive business decisions."}
          </p>
        </div>

        <div className="space-y-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground mb-8 leading-relaxed text-center">
              {
                "With over 5 years of experience in data science and machine learning, I specialize in building predictive models, conducting statistical analysis, and creating data-driven solutions that impact business outcomes."
              }
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed text-center">
              {
                "My expertise spans across various domains including natural language processing, computer vision, time series forecasting, and deep learning."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <h3 className="text-lg font-normal text-foreground mb-3">{"Machine Learning"}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {"Building and deploying ML models using scikit-learn, TensorFlow, and PyTorch."}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-foreground mb-3">{"Data Engineering"}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {"Designing data pipelines and working with big data technologies."}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-normal text-foreground mb-3">{"Analytics"}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {"Creating insightful visualizations and dashboards."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
