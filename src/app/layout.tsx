import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationServer } from "@/components/NavigationServer";
import { Footer } from "@/components/Footer";
import { cookies } from "next/headers";
import { Language } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  title: "Branmo CRM - WhatsApp AI Sales Automation Platform",
  description: "Transform WhatsApp into a sales machine with AI automation. Convert conversations to leads, manage sales funnels. Get early access!",
  keywords: ["WhatsApp CRM", "Sales Automation", "AI", "Lead Generation", "Sales Funnel", "WhatsApp Business", "CRM Software"],
  authors: [{ name: "Branmo" }],
  creator: "Branmo",
  publisher: "Branmo",
  metadataBase: new URL("https://branmo.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "pt-BR": "/",
      "es-ES": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://branmo.app",
    title: "Branmo CRM - WhatsApp Sales Automation with AI",
    description: "Transform your WhatsApp into a powerful sales machine. AI-powered automation, lead conversion, and sales funnel management.",
    siteName: "Branmo CRM",
    images: [
      {
        url: "/branmo-icon.png",
        width: 1200,
        height: 630,
        alt: "Branmo CRM - WhatsApp Sales Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branmo CRM - WhatsApp Sales Automation with AI",
    description: "Transform your WhatsApp into a powerful sales machine. AI-powered automation, lead conversion, and sales funnel management.",
    images: ["/og-image.jpg"],
    creator: "@branmocrm",
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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Branmo CRM",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
    shortcut: "/logo.svg", 
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Get language from cookies, default to "en"
  const cookieStore = await cookies();
  const currentLanguage = (cookieStore.get('language')?.value as Language) || "en";
  
  return (
      <html lang={currentLanguage === "pt-br" ? "pt" : currentLanguage}>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-background via-[#f7e7df] to-[#EE7141]/10 min-h-screen`}
        >
          <NavigationServer currentLanguage={currentLanguage} />
          <SpeedInsights />
          <Analytics />
          {children}
          <Footer language={currentLanguage} />
        </body>
      </html>
  );
}
