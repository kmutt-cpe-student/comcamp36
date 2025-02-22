"use client";

import { steps } from "@/app/register/form-stepper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/libs/utils";
import { CheckCircle, Mail, Phone } from "lucide-react";
import Image from "next/image";

const stepsMock = steps.map((step, index) => ({
  ...step,
  completed: index < 2,
}));

function RegisterPage() {
  return (
    <div className="bg-charcoal-1 mx-8 w-full rounded-[30px] border-[5px] border-white p-16">
      <div className="grid grid-cols-[320px_1fr] gap-16">
        <div className="relative mx-auto h-80 w-80 flex-shrink-0 overflow-hidden rounded-full border-[15px] border-white">
          <Image
            src="/static/image/placeholder/main-char.png"
            alt="Profile"
            className="object-cover"
            fill
            priority
          />
        </div>

        <div className="flex h-full flex-col justify-between">
          <div className="flex items-baseline justify-between">
            <h2 className="text-5xl font-medium text-white">ข้อมูลส่วนตัว</h2>
            <div className="text-right">
              <span className="text-5xl font-semibold text-white">
                ID : 456
              </span>
            </div>
          </div>
          <Separator />
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-white">นาย ซอง กีฮุน</h1>
            <p className="text-charcoal-4 text-4xl">Seong Gi-hun</p>
          </div>
          <div className="space-y-4">
            <p className="text-vermilion flex items-center text-2xl">
              <Mail className="mr-4 h-6 w-6" />
              GihunLuvGoose@gmail.com
            </p>
            <p className="text-vermilion flex items-center text-2xl">
              <Phone className="mr-4 h-6 w-6" />
              012-345-6789
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-5xl font-medium text-white">
          การกรอกแบบฟอร์ม ({stepsMock.filter((step) => step.completed).length}/
          {stepsMock.length})
        </h3>
        <Separator className="my-8" />

        <div className="grid grid-cols-4 gap-8">
          {stepsMock.map((step) => (
            <div
              key={step.step}
              className={cn(
                "flex flex-col items-center justify-center rounded-3xl border-2 border-white bg-[#372C28] p-6",
                step.completed && "bg-vermilion",
              )}
            >
              <div className="relative size-32">
                {step.completed && (
                  <CheckCircle className="z-1 absolute right-0 top-0 size-32 text-white" />
                )}
                <Image
                  src="/static/image/learn/ai.png"
                  alt=""
                  className="object-cover"
                  fill
                />
              </div>
              <p className="mt-4 text-2xl font-medium text-white">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <Button
          className="bg-vermilion hover:bg-vermilion-3 active:bg-vermilion-1 w-full px-8 py-6 text-xl font-semibold text-white md:w-auto"
          size="lg"
        >
          กรอกฟอร์มสมัครต่อ
        </Button>
      </div>
    </div>
  );
}
export default RegisterPage;
