import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import './styles/radial.css'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/react'
import { metadata } from './metadata'
import { SafeHydrate } from '@/components/safe-hydrate'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export { metadata }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
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
          <SafeHydrate>
            <div id="app-content">
              {children}
            </div>
          </SafeHydrate>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}