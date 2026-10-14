import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'SHASHWATTI | Premium Interior Design in Mumbai & Thane',
  description:
    'Premium interior design solutions in Mumbai & Thane. We turn your vision of a perfect home or office into a stunning reality.',
  icons: {
    icon: [
      {
        url: '/shashwatti-meta-logo.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/shashwatti-meta-logo.jpg',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/shashwatti-meta-logo.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fdfcf0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light bg-background ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
