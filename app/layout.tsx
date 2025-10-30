import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { LanguageProvider } from "@/components/language-provider";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "VietTri — AI Engineer Bootcamp | Become an AI Engineer in 8 Weeks",
  description: "Hands-on course: LLMs, RAG, agents, MLOps, and real projects guided by industry engineers. Learn in English or Vietnamese.",
  keywords: ["AI Engineer", "Bootcamp", "Machine Learning", "LLM", "RAG", "MLOps", "Vietnam", "VietTri"],
  openGraph: {
    title: "VietTri — AI Engineer Bootcamp",
    description: "Become an AI Engineer in 8 Weeks. Hands-on course: LLMs, RAG, agents, MLOps, and real projects.",
    type: "website",
    locale: "en_US",
    alternateLocale: "vi_VN",
  },
};

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <StructuredData />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
