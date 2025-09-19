'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <nav className="flex items-center justify-between">
            <div className="text-base lg:text-lg font-medium">Hi! I'm Chaitanya</div>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm">
              <a href="/" className="hover:text-muted-foreground transition-colors">
                Home
              </a>
              <a href="/publications" className="hover:text-muted-foreground transition-colors">
                Publications & Talks
              </a>
              <a href="/hackathons" className="hover:text-muted-foreground transition-colors">
                Hackathons
              </a>
              <a href="/cv" className="hover:text-muted-foreground transition-colors">
                CV
              </a>
              <a href="https://calendly.com/chaitanya4599/30min" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">
                Meet Me
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                className="text-foreground hover:text-muted-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile menu dropdown */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border/40">
                <a 
                  href="/" 
                  className="block px-3 py-2 text-base font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/publications" 
                  className="block px-3 py-2 text-base font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Publications & Talks
                </a>
                <a 
                  href="/hackathons" 
                  className="block px-3 py-2 text-base font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hackathons
                </a>
                <a 
                  href="/cv" 
                  className="block px-3 py-2 text-base font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CV
                </a>
                <a 
                  href="https://calendly.com/chaitanya4599/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Meet Me
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 pt-20 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Bio (Sticky) */}
          <div className="lg:sticky lg:top-32 lg:h-fit space-y-6 lg:space-y-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-medium mb-2">Venkata Chaitanya</h1>
              <p className="text-muted-foreground mb-4 lg:mb-6">Data Analyst & Machine Learning Engineer</p>

              <p className="text-sm leading-relaxed mb-6 lg:mb-8 max-w-md">
                I build AI-powered tools that simplify workflows, enhance decision-making, and automate complex tasks. My work spans machine learning, NLP, and web automation, with a focus on building practical, real-world AI applications. I love exploring new ways AI can improve businesses and everyday life.
              </p>

              <p className="text-sm leading-relaxed max-w-md">
                I currently work at TAREC (Virginia Tech), helping organizations leverage data for better decision-making. In my spare time, I experiment with generative AI, develop personal assistant bots, and contribute to open-source projects.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden border-2 border-border">
                <img 
                  src="/profile-venkata-chaitanya.jpg" 
                  alt="Venkata Chaitanya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-3">
                <a 
                  href="https://github.com/kvchaitanya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/venkata-chaitanya-kanakamedala/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="mailto:venkatachaitanya@vt.edu" 
                  className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <nav className="space-y-3 hidden lg:block">
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
              <h2 className="text-lg lg:text-xl font-medium mb-6 lg:mb-8">Projects</h2>

              <div className="space-y-4 lg:space-y-6 group/projects">
                {/* Project 1 - Web Development */}
                <a href="https://code.vt.edu/venkatachaitanya/crime-report-web-application" target="_blank" rel="noopener noreferrer" className="group/item cursor-pointer block">
                  <div className="bg-card rounded-lg p-4 lg:p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/dc-crime-insights-dashboard.png" 
                          alt="DC Crime Insights Dashboard"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2 lg:px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full mb-2">
                          Data Science
                        </span>
                        <h3 className="font-semibold text-base lg:text-lg mb-2 group-hover/item:text-blue-600 transition-colors leading-tight">
                          DC Crime Insights Web Application
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                      Developed a full-stack platform using React.js, FastAPI, and AWS, featuring interactive crime dashboards, predictive analytics with ML models (Linear Regression, XGBoost), safe routing, automated ETL pipelines, and an AI-powered chatbot.
                    </p>
                  </div>
                </a>

                {/* Project 2 - AI/ML */}
                <a href="https://github.com/kvchaitanya/Parking-Demand-Prediction" target="_blank" rel="noopener noreferrer" className="group/item cursor-pointer block">
                  <div className="bg-card rounded-lg p-4 lg:p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-green-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/parking-demand-prediction.png" 
                          alt="Urban Parking Demand Hotspot Detection"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2 lg:px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mb-2">
                          Machine Learning
                        </span>
                        <h3 className="font-semibold text-base lg:text-lg mb-2 group-hover/item:text-green-600 transition-colors leading-tight">
                          Urban Parking Demand Hotspot Detection & Surge Prediction
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                    Analyzed Seattle parking, weather, and map data using Python (pandas, scikit-learn, geopandas) to identify demand hotspots and predict rate surges, enabling actionable insights for urban planning
                    </p>
                  </div>
                </a>

                {/* Project 3 - Computer Vision */}
                <a href="https://github.com/kvchaitanya/MyCoverKraft" target="_blank" rel="noopener noreferrer" className="group/item cursor-pointer block">
                  <div className="bg-card rounded-lg p-4 lg:p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-purple-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/mycovercraft-document-automation.png" 
                          alt="LLM-Powered Document Automation Platform"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2 lg:px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full mb-2">
                          Language Models
                        </span>
                        <h3 className="font-semibold text-base lg:text-lg mb-2 group-hover/item:text-purple-600 transition-colors leading-tight">
                          LLM-Powered Document Automation Platform
                        </h3>
                      </div>
                    </div>
                    <p className="text-xs lg:text-sm text-muted-foreground leading-relaxed">
                  Orchestrated a modular Python Streamlit application that leverages spaCy, scikit-learn, and PyPDF2 for NLP-driven parsing, vectorized keyword extraction, and semantic analysis of resumes and job descriptions, integrating dynamic prompt engineering to auto-generate targeted, ATS-optimized cover letters through a secure and interactive web interface
                    </p>
                  </div>
                </a>

                {/* Project 4 - Distributed Systems */}
                                {/* Project 4 - Distributed Systems */}
                <a href="https://github.com/kvchaitanya/Employee-Salary-Prediction" target="_blank" rel="noopener noreferrer" className="group/item cursor-pointer block">
                  <div className="bg-card rounded-lg p-4 lg:p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-3 lg:gap-4 mb-3 lg:mb-4">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img 
                          src="/employee-salary-prediction.png" 
                          alt="Employee Salary Prediction System"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="inline-block px-2 lg:px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full mb-2">
                          Data Analysis
                        </span>
                        <h3 className="font-semibold text-base lg:text-lg mb-2 group-hover/item:text-orange-600 transition-colors leading-tight">
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
                          src="/nova-clinic-management.png" 
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
