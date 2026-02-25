import type { Metadata } from 'next'
import UserTracking from '@/components/UserTracking'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chainat Wongtapan — Hands-on CTO & Engineering Leader',
  description:
    'Hands-on CTO and engineering leader with 17+ years of experience building products, teams, and scalable platforms. Open to CTO and Engineering Manager roles.',
  icons: {
    icon: '/icon.png',
  },
}

// Inline script to restore persisted theme before first paint, preventing flash
const themeScript = `
  (function() {
    var t = localStorage.getItem('theme');
    if (t) document.documentElement.setAttribute('data-theme', t);
  })();
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <UserTracking />
        {children}
      </body>
    </html>
  )
}
