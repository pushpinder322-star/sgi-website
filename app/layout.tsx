import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://smartguardinnovations.com"),
  title: {
    default: "SGI | Enterprise Infrastructure & Security",
    template: "%s | SGI",
  },
  description:
    "SmartGuard Innovations delivers enterprise IT infrastructure, networking, cybersecurity, surveillance, access control, cloud continuity and managed operational support for modern businesses.",
  keywords: [
    "enterprise cybersecurity",
    "network infrastructure",
    "managed IT services",
    "data center solutions",
    "network security",
    "security infrastructure",
    "NOC services",
    "SOC services",
    "IT consulting",
    "enterprise IT",
  ],
  authors: [{ name: "SmartGuard Innovations" }],
  creator: "SmartGuard Innovations",
  publisher: "SmartGuard Innovations",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartguardinnovations.com",
    siteName: "SmartGuard Innovations",
    title: "SGI | Enterprise Infrastructure & Security",
    description:
      "Enterprise IT infrastructure, networking, cybersecurity, and managed operational support for modern businesses.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SGI - Enterprise Infrastructure & Security",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SGI | Enterprise Infrastructure & Security",
    description:
      "Enterprise IT infrastructure, networking, cybersecurity, and managed operational support.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#030303" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} bg-background`}
      data-scroll-behavior="smooth"
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
