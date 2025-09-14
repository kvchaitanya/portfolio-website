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
              <a href="https://calendly.com/chaitanya4599/30min" target="_blank" rel="noopener noreferrer" className="hover:text-muted-foreground transition-colors">
                Meet Me
              </a>
            </div>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium mb-4">Curriculum Vitae</h1>
            <p className="text-muted-foreground">Data Analyst & Machine Learning Engineer</p>
          </div>
          <a
            href="https://cerbq-portfolio-pdfs.s3.us-east-2.amazonaws.com/Chaitanya-Resume.pdf"
            download="Venkata_Chaitanya_CV.pdf"
            className="px-6 py-3 bg-foreground text-background text-sm font-medium rounded-lg hover:bg-foreground/90 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-screen bg-white rounded-lg shadow-lg border border-border overflow-hidden">
          <iframe
            src="https://cerbq-portfolio-pdfs.s3.us-east-2.amazonaws.com/Chaitanya-Resume.pdf"
            className="w-full h-full"
            title="Venkata Chaitanya CV"
          />
        </div>

        {/* Fallback message */}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>Can't see the PDF? <a href="https://cerbq-portfolio-pdfs.s3.us-east-2.amazonaws.com/Chaitanya-Resume.pdf" className="text-foreground hover:underline" download="Venkata_Chaitanya_CV.pdf">Download it directly</a></p>
        </div>
      </div>
    </main>
  )
}
