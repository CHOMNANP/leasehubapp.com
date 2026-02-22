import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/sections/navigation"
import { Footer } from "@/components/sections/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "LeaseHub - Property Management for Small Landlords",
    template: "%s | LeaseHub",
  },
  description: "Property management software built for small landlords with 2-20 units. Collect rent 3x faster, automate tenant communication, and reclaim your weekends. First property free.",
  keywords: ["property management software", "small landlord", "rent collection", "tenant management", "rental property"],
  authors: [{ name: "LeaseHub" }],
  creator: "LeaseHub",
  metadataBase: new URL("https://leasehubapp.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leasehubapp.com",
    title: "LeaseHub - Property Management for Small Landlords",
    description: "Property management software built for small landlords with 2-20 units. Collect rent 3x faster, automate tenant communication, and reclaim your weekends.",
    siteName: "LeaseHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaseHub - Property Management for Small Landlords",
    description: "Property management software built for small landlords with 2-20 units. First property free.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
