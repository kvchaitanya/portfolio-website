import { S3_URLS, DOWNLOAD_NAMES } from '@/lib/constants'

export default function CV() {
  return (
    <main className="min-h-screen bg-background text-foreground">


      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="mb-6 lg:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl lg:text-3xl font-medium mb-2 lg:mb-4">Curriculum Vitae</h1>
            <p className="text-muted-foreground">Data Analyst & Machine Learning Engineer</p>
          </div>
          <a
            href={S3_URLS.RESUME_PDF}
            download={DOWNLOAD_NAMES.RESUME}
            className="px-4 lg:px-6 py-2 lg:py-3 bg-foreground text-background text-xs lg:text-sm font-medium rounded-lg hover:bg-foreground/90 transition-colors flex items-center gap-2 w-fit"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="w-full h-[60vh] lg:h-screen bg-white rounded-lg shadow-lg border border-border overflow-y-auto overflow-x-hidden flex justify-center items-stretch">
          {/* Mobile: Google Docs viewer for fit-to-width */}
          <div className="block lg:hidden w-full h-full">
            <iframe
              src={`https://docs.google.com/gview?url=${S3_URLS.RESUME_PDF}&embedded=true`}
              className="w-full h-full"
              title="Venkata Chaitanya CV Mobile"
              style={{ border: 'none', width: '100%', height: '100%' }}
              scrolling="yes"
            />
          </div>
          {/* Desktop: Default PDF iframe */}
          <div className="hidden lg:block w-full h-full">
            <iframe
              src={S3_URLS.RESUME_PDF}
              className="w-full h-full"
              title="Venkata Chaitanya CV Desktop"
              style={{ border: 'none', width: '100%', height: '100%' }}
              scrolling="yes"
            />
          </div>
        </div>

        {/* Fallback message */}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          <p>Can't see the PDF? <a href={S3_URLS.RESUME_PDF} className="text-foreground hover:underline" download={DOWNLOAD_NAMES.RESUME}>Download it directly</a></p>
        </div>
      </div>
    </main>
  )
}
