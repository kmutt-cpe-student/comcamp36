"use client";

import PolicyConsent from "@/components/card/policy-consent";
import Footer from "@/components/navigate/footer";
import Navbar from "@/components/navigate/navbar";

export default async function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-charcoal-1 min-h-screen w-full text-white">
      <PolicyConsent />
      <div className="absolute z-[100]">
        <Navbar
          items={[
            {
              title: "หน้าหลัก",
              href: "/register",
            },
            ...steps,
          ].map((step) => ({
            label: step.title,
            href: step.href,
          }))}
        />
      </div>
      <div className="font-prompt flex min-h-screen w-full justify-center px-10 py-36">
        {children}
      </div>
      <Footer />
    </div>
  );
}
