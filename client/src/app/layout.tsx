import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Docs Clone',
  description: 'Real-time collaborative document editor',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="min-h-svh bg-bg font-sans text-base text-text antialiased">
        {children}
      </body>
    </html>
  )
}
