import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import type { Metadata, Viewport } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" })
const siteDescription = "Software Engineer building Rust infrastructure, TypeScript and Next.js applications, real-time systems, developer tooling, and AI products."

export const metadata: Metadata = { metadataBase: new URL(DATA.url), title: { default: "Sharique Chaudhary | Software Engineer · Full-Stack + Systems", template: "%s | Sharique Chaudhary" }, description: siteDescription, openGraph: { title: "Sharique Chaudhary | Software Engineer · Full-Stack + Systems", description: siteDescription, siteName: "Sharique Chaudhary", locale: "en_US", type: "website" }, twitter: { title: "Sharique Chaudhary | Software Engineer", description: siteDescription, card: "summary_large_image" }, robots: { index: true, follow: true } }
export const viewport: Viewport = { themeColor: "#fafafa", width: "device-width", initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><head><link rel="icon" href="/logo.png" /></head><body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}><ThemeProvider attribute="class" defaultTheme="light"><TooltipProvider delayDuration={0}>{children}<Navbar /></TooltipProvider></ThemeProvider></body></html> }
