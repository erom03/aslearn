import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from 'next/font/google'
import Navbar from './components/navigation'
import { AuthContextProvider } from "./context/AuthContext"
import {textFont, titleFont, testFont} from "../util/fonts"

export const metadata: Metadata = {
  title: 'ASLang',
  description: 'Learn ASL Interactively',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={textFont.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
        </body>
    </html>
  )
}
