// app/layout.tsx
import type { Metadata } from 'next'
import { Libre_Franklin, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const sans = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-sans',
})

const display = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'Dr. Serena Blake - Psychologist',
  description: 'Psychological care for change, insight, and well-being',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} font-sans bg-[#f3f0e8]`}>
        {children}
      </body>
    </html>
  )
}