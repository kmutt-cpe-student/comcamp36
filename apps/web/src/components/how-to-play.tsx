"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/libs/utils";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";

export default function HowToChess() {
  const [step, setStep] = useState(1);

  const stepContent = [
    {
      title: "บทนำ",
      description:
        "เกมการแข่งขันล่าแต้มบนตารางหมากรุกสุดพิเศษนี้ น้องเป็นห่านห้าวหาญและปราดเปรื่องผู้ปรารถนาเก็บแต้มให้ได้มากเพื่อก้าวขึ้นเป็นอันดับหนึ่งของการแข่งขัน",
    },
    {
      title: "บทนำ (ต่อ)",
      description:
        "พื่อแก้โจทย์ข้อนี้ น้องจำเป็นต้องทำความรู้จักรูปแบบการเดินของหมากรุกเบื้องต้น ในที่นี้จะแนะนำการเดินของหมากที่มีในโจทย์ ประกอบด้วย",
    },
    {
      title: "อัศวิน",
      description:
        "เดินสองช่องไปทางใดทางหนึ่งและเดินอีกหนึ่งช่องในทิศทางตั้งฉาก คล้ายกับ ‘L’",
    },
    {
      title: "เรือ",
      description:
        "เดินในแนวตรง (แนวตั้งหรือแนวนอน) ได้ไกลจนสุดขอบตาราง คล้ายกับ ‘+’",
    },
    {
      title: "บิชอป",
      description: "เดินในแนวทแยงได้ไกลจนสุดของตาราง คล้ายกับ ‘X’",
    },
    {
      title: "วิธีการเล่น (1)",
      description:
        "ออกแบบการเดินหมากห่านห้าวหาญ (อัศวิน) เริ่มต้นที่ช่อง b2 เพื่อเก็บแต้มให้มากที่สุด แต่ละช่องจะมีผลตามประเภทและค่าของช่องนั้น ๆ โดยในทุกการเดิน น้องจะถูกหักแต้มออก 10% ของแต้มที่น้องมีอยู่ และจะนับแต้มที่น้องได้ตามแต้มสุดท้ายที่น้องมีอยู่เมื่อเข้าสู่ช่องบ่อน้ำที่สิ้นสุด",
    },
    {
      title: "ประเภทผลของช่อง (1)",
      description: <div></div>,
    },
    {
      title: "ประเภทผลของช่อง (2)",
      description: <div></div>,
    },
    {
      title: "วิธีการเล่น (2)",
      description:
        "น้องสามารถเดินหมากได้โดยเลือกช่องเป้าหมายหรือลากหมากของน้องไปยังช่องเป้าหมาย เมื่อเข้าช่องบ่อน้ำที่สิ้นสุดแล้ว น้องสามารถเลือกเริ่มเล่นใหม่หรือเลือกส่งคำตอบได้ (คะแนนของข้อนี้มาจากการจัดอันดับแต้มที่ได้ร่วมกับน้องคนอื่น ๆ)",
    },
  ];

  const totalSteps = stepContent.length;

  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  return (
    <Dialog
      onOpenChange={(open) => {
        if (open) setStep(1);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" className="w-fit">
          วิธีการเล่น!
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-0 p-0 sm:max-w-[40rem] [&>button:last-child]:text-white">
        <div className="p-6"></div>
        <div className="space-y-6 px-6 pb-6 pt-3">
          <DialogHeader>
            <DialogTitle>{stepContent[step - 1].title}</DialogTitle>
            <DialogDescription className="pt-4 text-start text-white/70">
              {typeof stepContent[step - 1].description === "string"
                ? stepContent[step - 1].description
                : stepContent[step - 1].description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex justify-center gap-2 max-sm:order-1">
              {[...Array(totalSteps)].map((_, index) => (
                <Button
                  variant="default"
                  size="icon"
                  key={index}
                  className={cn(
                    "size-2",
                    index + 1 === step ? "text-white" : "opacity-20",
                  )}
                  onClick={() => setStep(index + 1)}
                ></Button>
              ))}
            </div>
            <DialogFooter className="flex w-full flex-row-reverse">
              <DialogClose asChild>
                <Button type="button" variant="ghost">
                  ข้าม
                </Button>
              </DialogClose>
              {step < totalSteps ? (
                <Button
                  className="group"
                  type="button"
                  onClick={handleContinue}
                >
                  ถัดไป
                  <ArrowRightIcon
                    className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
                    size={16}
                    aria-hidden="true"
                  />
                </Button>
              ) : (
                <DialogClose asChild>
                  <Button type="button">เข้าใจแล้ว!</Button>
                </DialogClose>
              )}
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
