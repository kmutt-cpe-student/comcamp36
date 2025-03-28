"use client";

import { MagicCard } from "@/components/card/magic-card";
import { cn } from "@/libs/utils";
import { useEffect, useState } from "react";
import ConfirmPolicy from "../confirm-policy";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";

export default function ConfirmConsent({ demo = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const COOKIE_NAME = "confirm.consent";

  const accept = () => {
    setIsOpen(false);
    document.cookie = `${COOKIE_NAME}=true; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    setTimeout(() => {
      setHide(true);
    }, 700);
  };

  useEffect(() => {
    try {
      setIsOpen(true);
      if (document.cookie.includes(`${COOKIE_NAME}=true`)) {
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

  const [check, setCheck] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "font-prompt fixed left-0 right-0 top-0 z-[200] flex h-full items-center justify-center text-black duration-700",
        !isOpen
          ? "translate-y-8 opacity-0 transition-[opacity,transform]"
          : "translate-y-0 opacity-100 transition-[opacity,transform]",
        hide && "hidden",
      )}
    >
      <MagicCard className="flex max-h-[80vh] w-full max-w-[80rem] justify-between border border-white/10 p-10">
        <div className="grid h-full w-full grid-rows-[auto_1fr_auto] gap-4">
          <h4 className="h-fit font-bold">ข้อกำหนดการยืนยันสิทธิ</h4>

          <ScrollArea className="bg-charcoal max-h-full rounded-xl p-5">
            <ConfirmPolicy />
          </ScrollArea>

          <div className="flex h-fit w-full justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={check}
                onCheckedChange={(checked) => setCheck(checked === true)}
              />
              <small>รับทราบและให้ความยินยอมตามข้อกำหนดการยืนยันสิทธิ</small>
            </div>

            <Button onClick={accept} disabled={!check}>
              ยอมรับ
            </Button>
          </div>
        </div>
      </MagicCard>
    </div>
  );
}
