import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Aaryn Warrior — Developer & GIS Researcher',
  description: 'CS graduate from the University of Northern Iowa. Building AI-powered web apps, GIS automation tools, and real products for real clients.',
  keywords: ['Aaryn Warrior', 'developer', 'GIS', 'Next.js', 'portfolio', 'UNI'],
  openGraph: {
    title: 'Aaryn Warrior — Developer & GIS Researcher',
    description: 'CS graduate building AI-powered apps and GIS tools.',
    url: 'https://aarynwarrior.com',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
