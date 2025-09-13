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
                  Insights
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
                          Web Development
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
                <div className="group/item cursor-pointer">
                  <div className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-green-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full mb-2">
                          AI/Machine Learning
                        </span>
                        <h3 className="font-semibold text-lg mb-2 group-hover/item:text-green-600 transition-colors">
                          Large Language Model for Code Generation
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fine-tuned 7B parameter model for automated code generation with 92% functional correctness on HumanEval benchmark. Implemented advanced training techniques and optimization strategies.
                    </p>
                  </div>
                </div>

                {/* Project 3 - Computer Vision */}
                <div className="group/item cursor-pointer">
                  <div className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-purple-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full mb-2">
                          Computer Vision
                        </span>
                        <h3 className="font-semibold text-lg mb-2 group-hover/item:text-purple-600 transition-colors">
                          Real-time Object Detection Pipeline
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Production-ready computer vision system processing 10M+ images daily with sub-100ms latency using optimized YOLO architecture. Deployed on cloud infrastructure with auto-scaling capabilities.
                    </p>
                  </div>
                </div>

                {/* Project 4 - Distributed Systems */}
                <div className="group/item cursor-pointer">
                  <div className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-orange-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded-full mb-2">
                          Distributed Systems
                        </span>
                        <h3 className="font-semibold text-lg mb-2 group-hover/item:text-orange-600 transition-colors">
                          Federated Learning Framework
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Privacy-preserving distributed ML system enabling collaborative training across 1000+ edge devices without data sharing. Implemented secure aggregation protocols and differential privacy.
                    </p>
                  </div>
                </div>

                {/* Project 5 - Data Science */}
                <div className="group/item cursor-pointer">
                  <div className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-indigo-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full mb-2">
                          Data Science
                        </span>
                        <h3 className="font-semibold text-lg mb-2 group-hover/item:text-indigo-600 transition-colors">
                          Financial Risk Assessment Dashboard
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Built comprehensive risk analytics platform using Python, pandas, and Plotly. Features real-time portfolio monitoring, Monte Carlo simulations, and automated risk reporting for institutional clients.
                    </p>
                  </div>
                </div>

                {/* Project 6 - Mobile Development */}
                <div className="group/item cursor-pointer">
                  <div className="bg-card rounded-lg p-6 border border-border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-pink-200 hover:z-10 relative group-hover/projects:opacity-50 hover:!opacity-100 group-hover/item:scale-105">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium bg-pink-100 text-pink-800 rounded-full mb-2">
                          Mobile Development
                        </span>
                        <h3 className="font-semibold text-lg mb-2 group-hover/item:text-pink-600 transition-colors">
                          Cross-Platform Health Tracker
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      React Native application with AI-powered health insights, wearable device integration, and personalized recommendations. Features offline-first architecture and real-time sync capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </section>

          
          </div>
        </div>
      </div>
    </main>
  )
}
