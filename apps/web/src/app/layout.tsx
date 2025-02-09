import CookieConsent from "@/components/cookie-consent";
import { CSPostHogProvider } from "@/components/provider/post-hog";
import QueryProvider from "@/components/provider/query";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { gameOfSquid, gemunuLibre, notoSansThaiLooped, prompt } from "@/fonts";
import RedirectHandler from "@/libs/controlling";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Comcamp36",
  description: "Camp by Computer Engineering Department, KMUTT",
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
