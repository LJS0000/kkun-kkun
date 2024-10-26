import type { Metadata } from 'next'
import '../styles/globals.css'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'KKUN-KKUN',
  description: '끈끈한 사이가 되는 방법',
}

const pretendard = localFont({
  src: '../styles/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko'>
      <body className={`${pretendard.className} antialiased`}>{children}</body>
    </html>
  )
}
