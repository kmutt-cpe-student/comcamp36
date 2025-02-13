import CookieConsent from "@/components/cookie-consent";
import { CSPostHogProvider } from "@/components/provider/post-hog";
import QueryProvider from "@/components/provider/query";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { gameOfSquid, gemunuLibre, notoSansThaiLooped, prompt } from "@/fonts";
import RedirectHandler from "@/libs/controlling";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ComCamp 36",
  description: `ComCamp 36 โดยภาควิชาวิศวกรรมคอมพิวเตอร์ มจธ. ชวนน้อง ๆ ที่สนใจในด้านคอมพิวเตอร์มาปลดล็อกสกิลวิศวะคอมฯ พร้อมสัมผัสความเป็นนักศึกษาวิศวะคอมฯ ที่ไม่เหมือนใคร แล้วมาหาคำตอบได้ใน "ComCamp ครั้งที่ 36"`,
  openGraph: {
    title: "ComCamp 36",
    url: "https://comcamp.io",
    images: "/og-image.webp",
    type: "website",
    description: `ComCamp 36 โดยภาควิชาวิศวกรรมคอมพิวเตอร์ มจธ. ชวนน้อง ๆ ที่สนใจในด้านคอมพิวเตอร์มาปลดล็อกสกิลวิศวะคอมฯ พร้อมสัมผัสความเป็นนักศึกษาวิศวะคอมฯ ที่ไม่เหมือนใคร แล้วมาหาคำตอบได้ใน "ComCamp ครั้งที่ 36"`,
  },
  twitter: {
    title: "ComCamp 36",
    images: "/og-image.webp",
    description: `ComCamp 36 โดยภาควิชาวิศวกรรมคอมพิวเตอร์ มจธ. ชวนน้อง ๆ ที่สนใจในด้านคอมพิวเตอร์มาปลดล็อกสกิลวิศวะคอมฯ พร้อมสัมผัสความเป็นนักศึกษาวิศวะคอมฯ ที่ไม่เหมือนใคร แล้วมาหาคำตอบได้ใน "ComCamp ครั้งที่ 36"`,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gameOfSquid.variable} ${prompt.className} ${notoSansThaiLooped.className} ${gemunuLibre.className}`}
      >
        <TailwindIndicator />
        <RedirectHandler deadline="2025-02-24T00:00:00Z" />
        <QueryProvider>
          <CSPostHogProvider>
            {children}
            <CookieConsent />
          </CSPostHogProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
