"use client";

import LogoutBtn from "@/components/auth/logout-btn";
import PolicyConsent from "@/components/card/policy-consent";
import Footer from "@/components/navigate/footer";
import Navbar from "@/components/navigate/navbar";
import Spinner from "@/components/spinner";
import { fetchClient } from "@/libs/server/client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { steps } from "./form-stepper";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [haveUser, setHaveUser] = useState(false);

  useEffect(() => {
    async function checkUser() {
      const { data } = await fetchClient.GET("/auth/me");
      if (data?.email) {
        setHaveUser(true);
      } else {
        return redirect("/signin");
      }
    }
    checkUser();
  }, []);

  if (!haveUser) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center bg-[#0d0d0d] text-white">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#0d0d0d] text-white">
      <PolicyConsent />
      <div className="absolute z-[100]">
        <Navbar
          items={steps.map((step) => ({
            label: step.title,
            href: step.href,
          }))}
          extra={<LogoutBtn />}
        />
      </div>
      <div className="font-prompt flex min-h-screen w-full justify-center px-10 py-36">
        {children}
      </div>
      <Footer />
    </div>
  );
}
