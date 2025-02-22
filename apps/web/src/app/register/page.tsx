"use client";

import { steps } from "@/app/register/form-stepper";
import { Tilt } from "@/components/card/tilt-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TextScramble } from "@/components/ui/text-scramble";
import { fetchQuery } from "@/libs/server/client";
import { cn } from "@/libs/utils";
import { CheckCircle, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stepsMock = steps.map((step, index) => ({
  ...step,
  completed: index < 2,
}));

function RegisterPage() {
  const { data, isPending, isError } = fetchQuery.useQuery("get", "/auth/me");

  if (isPending) {
    return null;
  }

  if (!data || isError) {
    return null;
  }

  return (
    <Card className="grid gap-4">
      <div className="grid h-full grid-cols-1 gap-16 lg:grid-cols-[320px_1fr]">
        <Tilt isRevese rotationFactor={5}>
          <div className="relative mx-auto size-60 flex-shrink-0 overflow-hidden rounded-full border-[10px] border-white">
            <Image
              src="/static/image/placeholder/main-char.png"
              alt="Profile"
              className="object-cover"
              fill
              priority
            />
          </div>
        </Tilt>

        <div className="flex h-full flex-col justify-start">
          <div className="flex flex-col gap-4">
            <div className="flex items-baseline justify-between">
              <p className="text-[1rem] sm:text-[1.25rem]">ข้อมูลส่วนตัว</p>
              <TextScramble trigger className="text-[1rem] sm:text-[1.25rem]">
                {`เหลือเวลาอีก ${Math.ceil(
                  (new Date("2025-03-13").getTime() - new Date().getTime()) /
                    (1000 * 60 * 60 * 24),
                )} วัน`}
              </TextScramble>
            </div>
            <Separator />
          </div>
          <div className="flex h-full flex-col justify-center p-5">
            <p className="font-bold leading-normal text-white lg:text-[3rem]">
              {!data.fullname ? "[REDACTED]" : data.fullname}
            </p>
            <p className="text-vermilion flex items-center text-[1.25rem] md:text-2xl">
              <Mail className="mr-4 hidden h-6 w-6 sm:block" />
              {data.email}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-4">
        <h4 className="font-medium text-white">
          การกรอกแบบฟอร์ม ({stepsMock.filter((step) => step.completed).length}/
          {stepsMock.length})
        </h4>
        <Separator />

        <div className="flex flex-1 flex-wrap justify-center gap-8">
          {stepsMock.map((step) => (
            <Link href={step.href} key={step.step}>
              <Card
                className={cn(
                  "bg-charcoal-1 flex min-w-[15rem] flex-col items-center justify-center rounded-3xl p-6",
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
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className="font-noto-sans-thai-looped mt-16 flex justify-center">
        <Button size="lg">กรอกฟอร์มสมัครต่อ</Button>
      </div>
    </Card>
  );
}
export default RegisterPage;
