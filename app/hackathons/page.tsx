export default function Hackathons() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <nav className="flex items-center justify-between">
            <div className="text-base lg:text-lg font-medium">
              <a href="/" className="hover:text-muted-foreground transition-colors">
                Hi! I'm Chaitanya
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm">
              <a href="/publications" className="hover:text-muted-foreground transition-colors">
                Publications & Talks
              </a>
              <a href="/hackathons" className="text-foreground font-medium">
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
              <button className="text-foreground hover:text-muted-foreground">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main content with top padding for fixed header */}
      <div className="pt-20 lg:pt-24">
        {/* Featured Project - WolframWallStreet */}
        <div className="bg-card/30 border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
            <div className="mb-6 lg:mb-8">
              <h1 className="text-xl lg:text-2xl font-medium mb-2">Featured Hackathon Project</h1>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 lg:mb-4">WolframWallStreet</h2>
              <p className="text-sm lg:text-base text-muted-foreground max-w-3xl leading-relaxed">
                A cutting-edge ML Training and Financial Simulation tool tailored for stock market trading, 
                with a special focus on accurately predicting the performance of automotive industry stocks.
              </p>
            </div>
            
            {/* Project Details Card */}
            <div className="bg-background rounded-lg border border-border shadow-lg p-8 mb-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Project Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">🚀 What it does</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      Name a stock! Our tool utilizes historical data for that stock up to 2015 to train a machine learning model. 
                      After the model is complete, it simulates the buying and selling of the stock from 2015 to 2020 and conducts 
                      data analysis to determine the profitability of the model's trading strategy and how it compares to the 
                      performance of a simple buy-and-hold strategy.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">🛠️ Technologies Used</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">Python</span>
                      <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">React.js</span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm">JavaScript</span>
                      <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-sm">Express.js</span>
                      <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm">Bootstrap</span>
                      <span className="px-3 py-1 bg-cyan-500/10 text-cyan-500 rounded-full text-sm">yfinance</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">🧠 ML Techniques</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      Implemented multiple ML algorithms including Linear Regression, Random Forest Regression, 
                      Gradient Boosting Regression, and Neural Networks. Linear Regression performed best for our simulations.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        Simple Moving Averages feature extraction
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        Relative Strength Index (RSI) analysis
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        Moving Average Convergence Divergence (MACD)
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1">•</span>
                        Automated buy/sell signal generation
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">💡 Key Insights</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      While our model doesn't perform well with high-growth stocks (tech sector), it excels at trading 
                      automotive stocks due to their more stable nature, making it easier to beat buy-and-hold strategies.
                    </p>
                  </div>
                </div>

                {/* Right Column - Project Stats & Actions */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">📊 Project Details</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-card/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-foreground">VTHacks 11</div>
                        <div className="text-sm text-muted-foreground">Hackathon</div>
                      </div>
                      <div className="bg-card/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-foreground">3</div>
                        <div className="text-sm text-muted-foreground">Team Members</div>
                      </div>
                      <div className="bg-card/50 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-foreground">2023</div>
                        <div className="text-sm text-muted-foreground">Year</div>
                      </div>
                      <div className="bg-card/50 rounded-lg p-4 text-center">
                        <div className="text-xl font-bold text-foreground">Winner</div>
                        <div className="text-sm text-muted-foreground">Award</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">🏆 Achievement</h3>
                    <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🏆</span>
                        <span className="font-medium">Peraton: Best Hack</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Winner of "Best Hack Featuring Automated Data Workflows" at VTHacks 11 for innovative ML-driven financial analysis.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">👥 Team</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="font-medium">Venkata Chaitanya Kanakamedala</span>
                        <span className="text-muted-foreground">(Backend & ML)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="font-medium">Tanisi Tripathi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="font-medium">MovementGH Furgerson</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="space-y-3">
                      <a 
                        href="https://devpost.com/software/wolframwallstreet" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-3 px-4 rounded-lg transition-colors font-medium"
                      >
                        View Full Project on Devpost →
                      </a>
                      <div className="grid grid-cols-2 gap-3">
                     
                        {/* <button className="bg-card border border-border hover:bg-card/80 text-foreground py-2 px-4 rounded-lg transition-colors text-sm">
                          Live Demo
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
