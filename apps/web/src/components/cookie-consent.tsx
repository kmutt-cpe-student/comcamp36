"use client";

import { MagicCard } from "@/components/card/magic-card";
import { cn } from "@/libs/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CookieConsent({ demo = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookie.consent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookie.consent=true")) {
        if (!demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(
        "font-prompt fixed bottom-0 left-0 right-0 z-[200] w-full text-black duration-700 sm:bottom-4 sm:left-4 sm:max-w-md",
        !isOpen
          ? "translate-y-8 opacity-0 transition-[opacity,transform]"
          : "translate-y-0 opacity-100 transition-[opacity,transform]",
        hide && "hidden",
      )}
    >
      <MagicCard className="border border-white/10">
        <div className="grid gap-2 text-white">
          <div className="flex h-14 items-center justify-between border-b border-white/10 p-4">
            <h1 className="text-lg font-medium">เราใช้ คุกกี้ 🍪 </h1>
          </div>
          <div className="p-4">
            <p className="text-start text-sm font-normal">
              เว็บไซต์ Comcamp 36 มีการใช้งานคุกกี้ (Cookies)
              พื้นฐานที่จําเป็นซึ่งช่วยให้สามารถเข้าใช้เว็บไซต์ได้โดยการเปิดใช้ฟังก์ชันพื้นฐานต่างๆ
              และการเข้าสู่ส่วนที่ปลอดภัยของเว็บไซต์ หากไม่มีคุกกี้เหล่านี้
              เว็บไซต์จะไม่สามารถทำงานได้อย่างถูกต้อง{" "}
              <Link href="/privacy" className="text-vermilion">
                นโยบายข้อมูลส่วนบุคคล
              </Link>
              <br />
            </p>
          </div>
          <div className="flex gap-2 border-t border-white/10">
            <button
              onClick={accept}
              className="hover:text-vermilion h-full w-full cursor-pointer py-5 transition-colors"
            >
              ยอมรับ
            </button>
          </div>
        </div>
      </MagicCard>
    </div>
  );
}
