
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YD8VJYGM1X"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-YD8VJYGM1X');
        </script>
      </head>
      <body className={inter.className}>{children}   
      </body>       
    </html>
    </>
  )
}
