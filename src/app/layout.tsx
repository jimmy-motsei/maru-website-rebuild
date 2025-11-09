import "./globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const body = Inter({ subsets: ["latin"], display: "swap", variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Maru Online — AI Automation for South African B2B",
  description:
    "Go-to AI consultancy for SA B2B. WhatsApp AI, Sales Automation, Office Ops, and Advisory.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicons/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/apple-touch-icon.png", sizes: "180x180", rel: "apple-touch-icon" }
    ],
    shortcut: ["/favicons/icon-192.png"],
    apple: ["/apple-touch-icon.png"]
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    title: "Maru Online — AI Automation for South African B2B",
    description:
      "Go-to AI consultancy for SA B2B. WhatsApp AI, Sales Automation, Office Ops, and Advisory.",
    type: "website",
    url: "/",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Maru Online — AI Automation for South African B2B",
    description:
      "Go-to AI consultancy for SA B2B. WhatsApp AI, Sales Automation, Office Ops, and Advisory.",
    images: ["/og/default.png"]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={body.variable}>
      <body className="bg-brand-bg text-brand-text antialiased" style={{ fontFamily: "var(--font-sans)" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
