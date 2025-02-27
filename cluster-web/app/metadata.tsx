import { Metadata } from 'next';

export const siteConfig = {
  name: 'Cluster Creations',
  description: 'Digital Agency for Web, Design & AI Solutions',
  url: 'https://clustercreations.com',
}

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.description}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: 'Specializing in web development, graphic design, and AI services to help businesses transform their digital presence and operations.',
  keywords: 'web development, web design, graphic design, AI services, digital agency, WordPress, app development',
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.description}`,
    description: 'Specializing in web development, graphic design, and AI services to help businesses transform their digital presence and operations.',
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.description}`,
    description: 'Specializing in web development, graphic design, and AI services to help businesses transform their digital presence and operations.',
    creator: '@clustercreations',
    images: ['/og-image.png'],
  },
}
