import { Toaster } from "@/components/ui/sonner";

import CookieConsent from "@/components/card/cookie-consent";
import { CSPostHogProvider } from "@/components/provider/post-hog";
import QueryProvider from "@/components/provider/query";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { gameOfSquid, gemunuLibre, notoSansThaiLooped, prompt } from "@/fonts";
import type { Metadata } from "next";
import ErrorBoundary from "./error-boundary";
import "./globals.css";

export const metadata: Metadata = {
  title: "ComCamp 36",
  description: `ค่าย ComCamp36 จากวิศวะคอมฯ บางมด ขอเชิญน้อง ๆ ม.ปลาย มาร่วมกัน "ติดปีก" ปลดล็อกสกิลในค่ายสุดเจ๋งที่มาพร้อมกับความรู้และความสนุก สมัครฟรี กางปีกให้พร้อมแล้วมาร่วมผจญภัยไปด้วยกัน!`,
  openGraph: {
    title: "ComCamp 36",
    url: "https://comcamp.io",
    images: `${process.env.CF_PAGES_BRANCH === "production" ? "https://comcamp.io" : `${process.env.CF_PAGES_URL}`}/og-image.webp`,
    type: "website",
    description: `ค่าย ComCamp36 จากวิศวะคอมฯ บางมด ขอเชิญน้อง ๆ ม.ปลาย มาร่วมกัน "ติดปีก" ปลดล็อกสกิลในค่ายสุดเจ๋งที่มาพร้อมกับความรู้และความสนุก สมัครฟรี กางปีกให้พร้อมแล้วมาร่วมผจญภัยไปด้วยกัน!`,
  },
  twitter: {
    title: "ComCamp 36",
    images: `${process.env.CF_PAGES_BRANCH === "production" ? "https://comcamp.io" : `${process.env.CF_PAGES_URL}`}/og-image.webp`,
    description: `ค่าย ComCamp36 จากวิศวะคอมฯ บางมด ขอเชิญน้อง ๆ ม.ปลาย มาร่วมกัน "ติดปีก" ปลดล็อกสกิลในค่ายสุดเจ๋งที่มาพร้อมกับความรู้และความสนุก สมัครฟรี กางปีกให้พร้อมแล้วมาร่วมผจญภัยไปด้วยกัน!`,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${gameOfSquid.variable} ${prompt.variable} ${notoSansThaiLooped.variable} ${gemunuLibre.variable}`}
      >
        <TailwindIndicator />
        <QueryProvider>
          <CSPostHogProvider>
            <ErrorBoundary>{children}</ErrorBoundary>
            <Toaster richColors />
            <CookieConsent />
          </CSPostHogProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
