"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/libs/utils";
import { useEffect, useState } from "react";

export default function CookieConsent({ demo = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const accept = () => {
    setIsOpen(false);
    document.cookie =
      "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    setTimeout(() => {
      setHide(true);
    }, 700);
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes("cookieConsent=true")) {
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
        "fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md duration-700 font-prompt",
        !isOpen
          ? "transition-[opacity,transform] translate-y-8 opacity-0"
          : "transition-[opacity,transform] translate-y-0 opacity-100",
        hide && "hidden",
      )}
    >
      <div className="bg-white">
        <div className="grid gap-2">
          <div className="border-b h-14 flex items-center justify-between p-4">
            <h1 className="text-lg font-medium">เราใช้ คุกกี้</h1>
          </div>
          <div className="p-4">
            <p className="text-sm font-normal text-start">
              เว็บไซต์ Comcamp 36 มีการใช้งานคุกกี้ (Cookies)
              พื้นฐานที่จําเป็นซึ่งช่วยให้สามารถเข้าใช้เว็บไซต์ได้โดยการเปิดใช้ฟังก์ชันพื้นฐานต่างๆ
              และการเข้าสู่ส่วนที่ปลอดภัยของเว็บไซต์ หากไม่มีคุกกี้เหล่านี้
              เว็บไซต์จะไม่สามารถทำงานได้อย่างถูกต้อง นโยบายข้อมูลส่วนบุคคล
              <br />
            </p>
          </div>
          <div className="flex gap-2 p-2 py-5 border-t">
            <Button onClick={accept} className="w-full">
              ยอมรับ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
