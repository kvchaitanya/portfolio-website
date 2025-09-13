export default function CV() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/40">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-lg font-medium">
              <a href="/" className="hover:text-muted-foreground transition-colors">
                Hi! I'm Chaitanya
              </a>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <a href="/publications" className="hover:text-muted-foreground transition-colors">
                Publications & Talks
              </a>
              <a href="/hackathons" className="hover:text-muted-foreground transition-colors">
                Hackathons
              </a>
              <a href="/cv" className="text-foreground font-medium">
                CV
              </a>
              <a href="mailto:alex.chen@example.com" className="hover:text-muted-foreground transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium mb-4">Curriculum Vitae</h1>
            <p className="text-muted-foreground">AI Research Scientist & Machine Learning Engineer</p>
          </div>
          <a
            href="/cv.pdf"
            className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded hover:bg-foreground/90 transition-colors"
          >
            Download PDF
          </a>
        </div>

        <div className="space-y-16">
          {/* Contact */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div>
                <p className="mb-1">alex.chen@example.com</p>
                <p className="mb-1">+1 (555) 123-4567</p>
                <p>San Francisco, CA</p>
              </div>
              <div>
                <p className="mb-1">github.com/alexchen</p>
                <p className="mb-1">scholar.google.com/citations?user=example</p>
                <p>linkedin.com/in/alexchen</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xl font-medium mb-8">Education</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium">Ph.D. in Computer Science</h3>
                <p className="text-sm text-muted-foreground">Stanford University • 2017 - 2021</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Dissertation: "Efficient Neural Networks for Edge Computing"
                  <br />
                  Advisor: Prof. Andrew Ng
                  <br />
                  GPA: 4.0/4.0
                </p>
              </div>

              <div>
                <h3 className="font-medium">M.S. in Computer Science</h3>
                <p className="text-sm text-muted-foreground">MIT • 2015 - 2017</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Concentration: Artificial Intelligence
                  <br />
                  GPA: 3.9/4.0
                </p>
              </div>

              <div>
                <h3 className="font-medium">B.S. in Computer Science, Mathematics (Double Major)</h3>
                <p className="text-sm text-muted-foreground">UC Berkeley • 2011 - 2015</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Summa Cum Laude, Phi Beta Kappa
                  <br />
                  GPA: 3.95/4.0
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-medium mb-8">Professional Experience</h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-medium">Principal AI Research Scientist</h3>
                <p className="text-sm text-muted-foreground">DeepTech AI • San Francisco, CA • 2023 - Present</p>
                <ul className="text-sm text-muted-foreground mt-3 space-y-1 list-disc list-inside">
                  <li>Lead research team of 12 scientists developing foundation models and multimodal AI systems</li>
                  <li>Published 8 papers in top-tier venues (NeurIPS, ICML, ICLR) with 500+ citations</li>
                  <li>Filed 3 patents on novel attention mechanisms and efficient training methods</li>
                  <li>Deployed models serving 50M+ users with 99.9% uptime and sub-100ms latency</li>
                  <li>Secured $2M in research grants from NSF and industry partnerships</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium">Senior Machine Learning Engineer</h3>
                <p className="text-sm text-muted-foreground">Google Research • Mountain View, CA • 2021 - 2023</p>
                <ul className="text-sm text-muted-foreground mt-3 space-y-1 list-disc list-inside">
                  <li>Developed transformer architectures for Google Search and YouTube recommendation systems</li>
                  <li>Improved model efficiency by 60% while maintaining accuracy through novel pruning techniques</li>
                  <li>Led cross-functional team of 8 engineers to deploy ML models at Google scale</li>
                  <li>Mentored 5 junior engineers and 3 PhD interns on production ML systems</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium">Research Intern</h3>
                <p className="text-sm text-muted-foreground">OpenAI • San Francisco, CA • Summer 2020</p>
                <ul className="text-sm text-muted-foreground mt-3 space-y-1 list-disc list-inside">
                  <li>Contributed to GPT-3 training pipeline optimization and scaling experiments</li>
                  <li>Developed novel techniques for few-shot learning in large language models</li>
                  <li>Published research on emergent capabilities in transformer models</li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium">Machine Learning Engineer</h3>
                <p className="text-sm text-muted-foreground">Tesla Autopilot • Palo Alto, CA • 2017 - 2019</p>
                <ul className="text-sm text-muted-foreground mt-3 space-y-1 list-disc list-inside">
                  <li>Built computer vision models for autonomous driving perception systems</li>
                  <li>Optimized neural networks for real-time inference on Tesla's custom AI chips</li>
                  <li>Improved object detection accuracy by 25% through data augmentation and model architecture</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-xl font-medium mb-8">Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              <div>
                <h3 className="font-medium mb-3">Programming Languages</h3>
                <p className="text-muted-foreground">Python, C++, JavaScript, R, CUDA, SQL</p>
              </div>

              <div>
                <h3 className="font-medium mb-3">ML Frameworks</h3>
                <p className="text-muted-foreground">PyTorch, TensorFlow, JAX, Hugging Face, scikit-learn</p>
              </div>

              <div>
                <h3 className="font-medium mb-3">Cloud Platforms</h3>
                <p className="text-muted-foreground">AWS, Google Cloud, Azure, Kubernetes, Docker</p>
              </div>

              <div>
                <h3 className="font-medium mb-3">Specializations</h3>
                <p className="text-muted-foreground">Deep Learning, Computer Vision, NLP, Distributed Systems</p>
              </div>
            </div>
          </section>

          {/* Awards */}
          <section>
            <h2 className="text-xl font-medium mb-8">Awards & Honors</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>NeurIPS Best Paper Award</span>
                <span className="text-muted-foreground">2024</span>
              </div>
              <div className="flex justify-between">
                <span>Google Research Excellence Award</span>
                <span className="text-muted-foreground">2022</span>
              </div>
              <div className="flex justify-between">
                <span>Stanford Graduate Fellowship</span>
                <span className="text-muted-foreground">2017-2021</span>
              </div>
              <div className="flex justify-between">
                <span>MIT Presidential Fellowship</span>
                <span className="text-muted-foreground">2015-2017</span>
              </div>
              <div className="flex justify-between">
                <span>UC Berkeley Regents' and Chancellor's Scholarship</span>
                <span className="text-muted-foreground">2011-2015</span>
              </div>
            </div>
          </section>

          {/* Service */}
          <section>
            <h2 className="text-xl font-medium mb-8">Professional Service</h2>

            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-medium">Conference Reviewing</h3>
                <p className="text-muted-foreground">
                  NeurIPS (2022-2024), ICML (2021-2024), ICLR (2023-2024), AAAI (2020-2024)
                </p>
              </div>

              <div>
                <h3 className="font-medium">Editorial Board</h3>
                <p className="text-muted-foreground">Journal of Machine Learning Research (JMLR) • 2023-Present</p>
              </div>

              <div>
                <h3 className="font-medium">Program Committee</h3>
                <p className="text-muted-foreground">ICML 2024 Workshop on Efficient Machine Learning</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
