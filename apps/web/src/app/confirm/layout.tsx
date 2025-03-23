"use client";

import AnimatedGradientBackground from "@/components/animation/animated-gradient-background";
import PolicyConsent from "@/components/card/policy-consent";
import Spinner from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { fetchClient, fetchQuery } from "@/libs/server/client";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [haveUser, setHaveUser] = useState(false);

  const router = useRouter();
  const { mutate } = fetchQuery.useMutation("post", "/auth/logout", {
    onSuccess() {
      toast.success("สำเร็จ!");
      router.replace("/");
    },
    onError() {
      router.replace("/");
    },
  });

  useEffect(() => {
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
          onClick={() => mutate({})}
          variant="outline"
          className="bg-[#0d0d0d]"
        >
          หากนานเกินไป ให้กดปุ่มนี้เพื่อย้อนกลับ
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-screen relative w-full overflow-hidden bg-[var(--color-charcoal)] text-white">
      <AnimatedGradientBackground
        gradientColors={[
          "#0A0A0A",
          "var(--color-vermilion)",
          "var(--color-mustard-1)",
          "var(--color-vermilion-1)",
          "var(--color-dimgray)",
          "var(--color-charcoal-special)",
          "var(--color-vermilion-special)",
        ]}
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-start px-4 text-center">
        <PolicyConsent />
        <div className="font-prompt py-30 flex min-h-screen w-full justify-center px-0 sm:px-5">
          {children}
        </div>
      </div>
    </div>
  );
}
