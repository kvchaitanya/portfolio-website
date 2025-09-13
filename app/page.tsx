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
                  AI Projects
                </a>
              </div>
              <div className="text-sm">
                <a href="#experience" className="nav-link text-muted-foreground hover:text-black transition-colors flex items-center gap-3" data-section="experience">
                  <span className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-xs nav-number">2</span>
                  Experience
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

            <section id="projects">
              <h2 className="text-xl font-medium mb-8">AI Projects</h2>

              <div className="space-y-8">
                {/* Project 1 */}
                <div className="group">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-card rounded flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-blue-500/20 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Neural Architecture Search Framework</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Automated neural architecture discovery system using reinforcement learning, achieving 15%
                        better efficiency than hand-designed models on ImageNet.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="group">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-card rounded flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-green-500/20 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Large Language Model for Code Generation</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Fine-tuned 7B parameter model for automated code generation with 92% functional correctness on
                        HumanEval benchmark.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="group">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-card rounded flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-500/20 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Real-time Object Detection Pipeline</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Production-ready computer vision system processing 10M+ images daily with sub-100ms latency
                        using optimized YOLO architecture.
                      </p>
                    </div>
                  </div>
                </div>

                 {/* Project 3 */}
                <div className="group">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-card rounded flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-500/20 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Real-time Object Detection Pipeline</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Production-ready computer vision system processing 10M+ images daily with sub-100ms latency
                        using optimized YOLO architecture.
                      </p>
                    </div>
                  </div>
                </div>

                 {/* Project 3 */}
                <div className="group">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-card rounded flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-500/20 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Real-time Object Detection Pipeline</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Production-ready computer vision system processing 10M+ images daily with sub-100ms latency
                        using optimized YOLO architecture.
                      </p>
                    </div>
                  </div>
                </div>

                 {/* Project 3 */}
                <div className="group">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-card rounded flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-500/20 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Real-time Object Detection Pipeline</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Production-ready computer vision system processing 10M+ images daily with sub-100ms latency
                        using optimized YOLO architecture.
                      </p>
                    </div>
                  </div>
                </div>

                 {/* Project 3 */}
                <div className="group">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-card rounded flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-500/20 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Real-time Object Detection Pipeline</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Production-ready computer vision system processing 10M+ images daily with sub-100ms latency
                        using optimized YOLO architecture.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="group">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-card rounded flex-shrink-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-orange-500/20 rounded"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-2">Federated Learning Framework</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Privacy-preserving distributed ML system enabling collaborative training across 1000+ edge
                        devices without data sharing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="experience">
              <h2 className="text-xl font-medium mb-8">Experience</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">Principal AI Research Scientist</h3>
                  <p className="text-sm text-muted-foreground">DeepTech AI • 2023 - Present</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Leading research on foundation models and multimodal AI systems. Published 8 papers, filed 3
                    patents, and deployed models serving 50M+ users.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">Senior ML Engineer</h3>
                  <p className="text-sm text-muted-foreground">Google Research • 2021 - 2023</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Developed transformer architectures for Google Search and YouTube recommendation systems. Improved
                    model efficiency by 60% while maintaining accuracy.
                  </p>
                </div>

                <div>
                  <h3 className="font-medium">PhD in Computer Science</h3>
                  <p className="text-sm text-muted-foreground">Stanford University • 2017 - 2021</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Dissertation: "Efficient Neural Networks for Edge Computing" • Advisor: Prof. Andrew Ng
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
