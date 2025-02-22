"use client";
import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";
import Link from "next/link";
import { usePathname } from "next/navigation";

const steps = [
  {
    step: 1,
    title: "ข้อมูลส่วนตัว",
    href: "info",
  },
  {
    step: 2,
    title: "คำถามคัดเลือก 1",
    href: "answer-regis",
  },
  {
    step: 3,
    title: "คำถามคัดเลือก 2",
    href: "answer-academic",
  },
  {
    step: 4,
    title: "ไฟล์ที่ต้องอัพโหลด",
    href: "files",
  },
];

export default function FormStepper() {
  const pathname = usePathname();

  return (
    <Stepper
      defaultValue={steps.findIndex((step) => pathname.includes(step.href)) + 1}
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
                className="h-1 w-full bg-zinc-200 dark:bg-zinc-800"
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
  );
}
