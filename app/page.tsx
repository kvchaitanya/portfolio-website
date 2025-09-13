'use client'

import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.nav-link')
    
    function updateActiveSection() {
      let current = ''
      
      sections.forEach(section => {
        const htmlSection = section as HTMLElement
        const sectionTop = htmlSection.offsetTop
        const sectionHeight = htmlSection.clientHeight
        // Adjusted offset to account for fixed header
        if (window.pageYOffset >= sectionTop - 300) {
          current = section.getAttribute('id') || ''
        }
      })
      
      console.log('Current section:', current) // Debug log
      
      navLinks.forEach(link => {
        const targetSection = link.getAttribute('data-section')
        
        if (targetSection === current) {
          // Only change text color to black, keep circle as is
          link.classList.remove('text-muted-foreground')
          link.classList.add('text-black')
        } else {
          // Change text color to grey
          link.classList.remove('text-black')
          link.classList.add('text-muted-foreground')
        }
      })
    }
    
    window.addEventListener('scroll', updateActiveSection)
    updateActiveSection() // Initial call
    
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
    }
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <nav className="flex items-center justify-between">
            <div className="text-lg font-medium">Hi! I'm Chaitanya</div>
            <div className="flex items-center space-x-8 text-sm">
              <a href="/publications" className="hover:text-muted-foreground transition-colors">
                Publications & Talks
              </a>
              <a href="/hackathons" className="hover:text-muted-foreground transition-colors">
                Hackathons
              </a>
              <a href="/cv" className="hover:text-muted-foreground transition-colors">
                CV
              </a>
              <a href="mailto:alex.chen@example.com" className="hover:text-muted-foreground transition-colors">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-8 py-16 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Bio (Sticky) */}
          <div className="lg:sticky lg:top-32 lg:h-fit space-y-8">
            <div>
              <h1 className="text-3xl font-medium mb-2">Venkata Chaitanya</h1>
              <p className="text-muted-foreground mb-6">Data Analyst & Machine Learning Engineer</p>

              <p className="text-sm leading-relaxed mb-8 max-w-md">
                I build AI-powered tools that simplify workflows, enhance decision-making, and automate complex tasks. My work spans machine learning, NLP, and web automation, with a focus on building practical, real-world AI applications. I love exploring new ways AI can improve businesses and everyday life.
              </p>

              <p className="text-sm leading-relaxed max-w-md">
                I currently work at TAREC (Virginia Tech), helping organizations leverage data for better decision-making. In my spare time, I experiment with generative AI, develop personal assistant bots, and contribute to open-source projects.
              </p>
            </div>

            <nav className="space-y-3">
              <div className="text-sm">
                <a href="#projects" className="nav-link text-black hover:text-black transition-colors flex items-center gap-3" data-section="projects">
                  <span className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs nav-number">1</span>
                  Projects
                </a>
              </div>
              <div className="text-sm">
                <a href="#experience" className="nav-link text-muted-foreground hover:text-black transition-colors flex items-center gap-3" data-section="experience">
                  <span className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs nav-number">2</span>
                  Insights (Coming Soon)
                </a>
              </div>
            </nav>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-16">
            {/* <section id="publications">
              <h2 className="text-xl font-medium mb-8">Publications & Talks</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium mb-1">Attention Mechanisms in Multi-Modal Learning</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    NeurIPS 2024 • <span className="text-foreground">Best Paper Award</span>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Novel attention architecture achieving SOTA results on vision-language tasks with 40% fewer
                    parameters.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-1">Scaling Transformer Models for Production</h3>
                  <p className="text-sm text-muted-foreground mb-2">ICML 2024 • Oral Presentation</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Efficient training strategies for large language models with distributed computing frameworks.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-1">Keynote: The Future of AI in Healthcare</h3>
                  <p className="text-sm text-muted-foreground mb-2">AI Summit 2024 • San Francisco</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Presented breakthrough applications of deep learning in medical diagnosis and drug discovery.
                  </p>
                </div>
              </div>
            </section> */}

              {/* <section id="experience">
              <h2 className="text-xl font-medium mb-8">Experience</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">Software Engineer</h3>
                  <p className="text-sm text-muted-foreground">Service Center Metals • 2024 - 2025</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Leading research on foundation models and multimodal AI systems. Published 8 papers, filed 3
                    patents, and deployed models serving 50M+ users.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Data Scientist</h3>
                  <p className="text-sm text-muted-foreground">Virginia Tech • 2023 - 2024</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Developed transformer architectures for Google Search and YouTube recommendation systems. Improved
                    model efficiency by 60% while maintaining accuracy.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Machine Learning Engineer</h3>
                  <p className="text-sm text-muted-foreground">Dell Technologies • 2022 - 2023</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Dissertation: "Efficient Neural Networks for Edge Computing" • Advisor: Prof. Andrew Ng
                  </p>
                </div>
              </div>
            </section> */}

            <section id="projects">
              <h2 className="text-xl font-medium mb-8">Projects</h2>

              <div className="space-y-6 group/projects">
                {/* Project 1 - Web Development */}
                <a href="https://code.vt.edu/venkatachaitanya/crime-report-web-application" target="_blank" rel="noopener noreferrer" className="group/item cursor-pointer block">
                  <div className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/chatbot_insights_app.png" 
                          alt="DC Crime Insights Dashboard"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-2">
                          Data Science
                        </span>
                        <h3 className="font-semibold text-lg mb-2 group-hover/item:text-blue-600 transition-colors">
                          DC Crime Insights Web Application
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Developed a full-stack platform using React.js, FastAPI, and AWS, featuring interactive crime dashboards, predictive analytics with ML models (Linear Regression, XGBoost), safe routing, automated ETL pipelines, and an AI-powered chatbot.
                    </p>
                  </div>
                </a>

                {/* Project 2 - AI/ML */}
                <a href="https://github.com/kvchaitanya/Parking-Demand-Prediction" target="_blank" rel="noopener noreferrer" className="group/item cursor-pointer block">
                  <div className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-green-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/image copy 2.png" 
                          alt="Urban Parking Demand Hotspot Detection"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mb-2">
                          Machine Learning
                        </span>
                        <h3 className="font-semibold text-lg mb-2 group-hover/item:text-green-600 transition-colors">
                          Urban Parking Demand Hotspot Detection & Surge Prediction
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                    Analyzed Seattle parking, weather, and map data using Python (pandas, scikit-learn, geopandas) to identify demand hotspots and predict rate surges, enabling actionable insights for urban planning
                    </p>
                  </div>
                </a>

                {/* Project 3 - Computer Vision */}
                <a href="https://github.com/kvchaitanya/MyCoverKraft" target="_blank" rel="noopener noreferrer" className="group/item cursor-pointer block">
                  <div className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-purple-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/image copy 3.png" 
                          alt="LLM-Powered Document Automation Platform"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full mb-2">
                          Language Models
                        </span>
                        <h3 className="font-semibold text-lg mb-2 group-hover/item:text-purple-600 transition-colors">
                          LLM-Powered Document Automation Platform
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                  Orchestrated a modular Python Streamlit application that leverages spaCy, scikit-learn, and PyPDF2 for NLP-driven parsing, vectorized keyword extraction, and semantic analysis of resumes and job descriptions, integrating dynamic prompt engineering to auto-generate targeted, ATS-optimized cover letters through a secure and interactive web interface
                    </p>
                  </div>
                </a>

                {/* Project 4 - Distributed Systems */}
                                {/* Project 4 - Distributed Systems */}
                <a href="https://github.com/kvchaitanya/Employee-Salary-Prediction" target="_blank" rel="noopener noreferrer" className="group/item cursor-pointer block">
                  <div className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/image.png" 
                          alt="Employee Salary Prediction System"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full mb-2">
                          Data Analysis
                        </span>
                        <h3 className="font-semibold text-lg mb-2 group-hover/item:text-orange-600 transition-colors">
                          Employee Salary Prediction System
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Engineered an end-to-end ML pipeline on Kaggle's Employee Earnings dataset using Python (pandas, scikit-learn, statsmodels), applying feature engineering, PCA, and regression/classification models (Random Forest, SVM, Neural Networks); achieved up to 89% accuracy with Polynomial Kernel SVM for salary prediction.
                    </p>
                  </div>
                </a>

                {/* Project 5 - Data Science */}
                <a href="https://github.com/kvchaitanya/NovaClinic" target="_blank" rel="noopener noreferrer" className="group/item cursor-pointer block">
                  <div className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-indigo-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/image copy.png" 
                          alt="Nova Clinic Hospital Management Platform"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full mb-2">
                          Web Development
                        </span>
                        <h3 className="font-semibold text-lg mb-2 group-hover/item:text-indigo-600 transition-colors">
                          Nova Clinic - Hospital Management Platform
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Built a full-stack clinic management web app using Python, JavaScript, HTML, and SQL, featuring user, receptionist, and admin portals with RESTful backend and relational database for handling appointments, doctors, slots, and authentication workflows.
                    </p>
                  </div>
                </a>
              </div>
            </section>

          
          </div>
        </div>
      </div>
    </main>
  )
}
