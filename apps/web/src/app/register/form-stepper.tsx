"use client";

import { Button } from "@/components/ui/button";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const steps = [
  {
    step: 1,
    title: "หน้าหลัก",
    href: "/register",
  },
  {
    step: 2,
    title: "ข้อมูลส่วนตัว",
    href: "/register/info",
  },
  {
    step: 3,
    title: "ปริศนาปัญญาชน",
    href: "/register/answer-regis",
  },
  {
    step: 4,
    title: "ปริศนาสถาบันวิศวะ",
    href: "/register/answer-academic",
  },
  {
    step: 5,
    title: "ไฟล์ที่ต้องอัพโหลด",
    href: "/register/files",
  },
];

export default function FormStepper() {
  const pathname = usePathname();

  return (
    <div className="flex w-full items-center justify-center py-10">
      <div className="flex w-full max-w-[80rem] flex-col items-center justify-center gap-10 pt-10 md:flex-row">
        <Link
          href={
            steps[steps.findIndex((step) => step.href === pathname) - 1].href
          }
        >
          <Button type="button" className="size-10" variant="outline">
            <ChevronLeft />
          </Button>
        </Link>
        <Stepper
          defaultValue={steps.findIndex((step) => step.href === pathname) + 1}
          className="items-start gap-4"
        >
          {steps.map(({ step, title, href }) => (
            <StepperItem key={step} step={step} className="flex-1">
              <Link href={href} className="flex-1 cursor-pointer">
                <StepperTrigger
                  className="w-full flex-col items-start gap-2 rounded"
                  onClick={() => {}}
                >
                  <StepperIndicator
                    asChild
                    className="data-[state=completed]:bg-vermilion-1 data-[state=active]:bg-vermilion-1 h-1 w-full bg-white"
                  >
                    <span className="sr-only">{step}</span>
                  </StepperIndicator>
                  <div className="cursor-pointer space-y-0.5">
                    <StepperTitle>{title}</StepperTitle>
                  </div>
                </StepperTrigger>
              </Link>
            </StepperItem>
          ))}
        </Stepper>
        <Link
          href={
            steps[
              (steps.findIndex((step) => step.href === pathname) + 1) %
                steps.length
            ].href
          }
        >
          <Button type="button" className="size-10" variant="outline">
            <ChevronRight className="size-5" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
