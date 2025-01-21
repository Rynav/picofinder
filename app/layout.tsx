import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Picofinder',
  description: 'Find every song on picosong!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
          <title>Picofinder</title>
          <script defer data-domain="pico.rynav.xyz" src="https://plausible-cwkgk8kgo8cog4cc0o8c80oo.2137420.xyz/js/script.js"></script>
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
