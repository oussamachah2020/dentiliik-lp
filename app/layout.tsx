import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: "Dentillik - AI-Powered Dental Practice Management",
    template: "%s | Dentillik",
  },
  description:
    "Transform your dental practice with Dentillik's AI-powered management platform. Streamline appointments, patient records, billing, and operations with enterprise-grade security and 99.9% uptime.",
  keywords: [
    "dental practice management",
    "dental software",
    "AI dental management",
    "dental appointment scheduling",
    "dental billing software",
    "practice management system",
    "dental records",
    "dental CRM",
    "dental analytics",
    "cloud dental software",
  ],
  authors: [{ name: "Dentillik Team" }],
  creator: "Dentillik",
  publisher: "Dentillik",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://dentillik.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dentillik - AI-Powered Dental Practice Management",
    description:
      "The most advanced practice management platform for modern dental professionals. Streamline operations, boost efficiency, and delight patients.",
    url: "https://dentillik.com",
    siteName: "Dentillik",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dentillik Dashboard - Dental Practice Management Software",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dentillik - AI-Powered Dental Practice Management",
    description:
      "Transform your dental practice with AI-powered management. Streamline operations and delight patients.",
    images: ["/twitter-image.jpg"],
    creator: "@dentillik",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Healthcare Technology",
  classification: "Business Software",
  applicationName: "Dentillik",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
  appleWebApp: {
    title: "Dentillik",
    statusBarStyle: "default",
    capable: true,
  },
  other: {
    "msapplication-TileColor": "#8b5cf6",
    "theme-color": "#8b5cf6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
