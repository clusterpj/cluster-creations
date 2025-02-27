import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import './styles/radial.css'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Cluster Creations | Digital Agency for Web, Design & AI Solutions',
  description: 'Specializing in web development, graphic design, and AI services to help businesses transform their digital presence and operations.',
  keywords: 'web development, web design, graphic design, AI services, digital agency, WordPress, app development',
  authors: [{ name: 'Cluster Creations' }],
  creator: 'Cluster Creations',
  publisher: 'Cluster Creations',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://clustercreations.com',
    title: 'Cluster Creations | Digital Agency for Web, Design & AI Solutions',
    description: 'Specializing in web development, graphic design, and AI services to help businesses transform their digital presence and operations.',
    siteName: 'Cluster Creations',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cluster Creations | Digital Agency for Web, Design & AI Solutions',
    description: 'Specializing in web development, graphic design, and AI services to help businesses transform their digital presence and operations.',
    creator: '@clustercreations',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen font-sans antialiased bg-dark text-foreground',
        fontSans.variable
      )}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
          storageKey="cluster-theme"
          disableTransitionOnChange
        >
          <div id="app-content">
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}