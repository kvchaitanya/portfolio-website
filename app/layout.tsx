
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chaitanya Portfolio',
  description: 'Portfolio of Venkata Chaitanya Kanakamedala - Data Analyst & Machine Learning Engineer',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} overflow-x-hidden`}>
        <Navigation />
        <div className="pt-16">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
