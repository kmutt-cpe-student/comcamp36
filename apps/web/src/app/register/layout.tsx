"use client";

import LogoutBtn from "@/components/auth/logout-btn";
import PolicyConsent from "@/components/card/policy-consent";
import Footer from "@/components/navigate/footer";
import Navbar from "@/components/navigate/navbar";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { fetchClient } from "@/libs/server/client";
import { notFound, redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { steps } from "./form-stepper";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [haveUser, setHaveUser] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const deadline = new Date("2025-02-24T12:00:00");
    if (new Date() <= deadline) {
      return notFound();
    }

    async function checkUser() {
      try {
        const { data } = await fetchClient.GET("/auth/me");
        if (data?.email) {
          setHaveUser(true);
        } else {
          return redirect("/sign-in");
        }
      } catch (error) {
        console.error(error);
        return redirect("/sign-in");
      }
    }
    checkUser();
  }, []);

  if (!haveUser) {
    return (
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-[#0d0d0d] text-white">
        <Spinner />
        <Button
          onClick={() => router.replace("/")}
          variant="outline"
          className="bg-[#0d0d0d]"
        >
          หากนานเกินไปให้กดปุ้มนี้เพื่อย้อนกลับ
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-screen min-h-screen bg-[#0d0d0d] text-white">
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
      <div className="font-prompt py-30 flex min-h-screen w-full justify-center px-0 sm:px-5">
        {children}
      </div>
      <Footer />
    </div>
  );
}
