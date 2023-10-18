import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './NavBar'
import { VscDebugAlt } from 'react-icons/vsc'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon:'./app/favicon.ico',
  },
  title: 'IssueMaster', 
  description: 'Issue tracker pour projet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
      <main>{children}</main>
      </body>
    </html>
  )
}
