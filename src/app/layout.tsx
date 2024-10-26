import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'KKUN-KKUN',
  description: '끈끈한 사이가 되는 방법',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className='antialiased'>{children}</body>
    </html>
  )
}
