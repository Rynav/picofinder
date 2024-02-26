import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider"
import "bootstrap-icons/font/bootstrap-icons.css"

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
        </head>
      <body className={inter.className}><ThemeProvider attribute="class"
                                                       defaultTheme="dark"
                                                       enableSystem
                                                       disableTransitionOnChange>{children}</ThemeProvider></body>
    </html>
  )
}
