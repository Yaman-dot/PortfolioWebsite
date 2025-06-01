import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yuman Abulaban - AI Developer & Game Engineer",
  description: "Portfolio of Yuman Abulaban - AI & Data Science student, Game Developer, and Full Stack Engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Navigation />
        <main className="relative">{children}</main>
      </body>
    </html>
  )
}
