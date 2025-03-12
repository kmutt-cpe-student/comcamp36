"use client";

import { Tilt } from "@/components/card/tilt-card";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { TextScramble } from "@/components/ui/text-scramble";
import { calculateTimeLeft } from "@/libs/date";
import { fetchQuery } from "@/libs/server/client";
import { Mail } from "lucide-react";
import Image from "next/image";
import Status from "./status";

function RegisterPage() {
  const { data, isPending, isError } = fetchQuery.useQuery("get", "/auth/me");
  const { data: filesData } = fetchQuery.useQuery(
    "get",
    "/files/user-files",
    undefined,
    { retry: false },
  );

  if (isPending) {
    return (
      <Card className="grid w-full max-w-[72rem] gap-4">
        <div className="grid h-full grid-cols-1 gap-16 lg:grid-cols-[320px_1fr]">
          <Skeleton className="relative mx-auto size-60 flex-shrink-0 overflow-hidden rounded-full border-[10px] border-white" />
          <div className="flex h-full flex-col justify-start">
            <div className="flex flex-col gap-4">
              <div className="flex items-baseline justify-between">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Separator />
            </div>
            <div className="flex h-full flex-col justify-center p-5">
              <Skeleton className="h-10 w-48" />
              <Skeleton className="mt-4 h-6 w-64" />
            </div>
          </div>
        </div>
        <Skeleton className="mt-16 h-10 w-full" />
        <Skeleton className="mt-4 h-10 w-full" />
      </Card>
    );
  }

  if (!data || isError) {
    return null;
  }

  return (
    <Card className="grid gap-6">
      <div className="grid h-full grid-cols-1 gap-16 lg:grid-cols-[320px_1fr]">
        <Tilt isRevese rotationFactor={5}>
          <div className="relative mx-auto size-60 flex-shrink-0 overflow-hidden rounded-full border-[10px] border-white">
            <Image
              src={
                filesData?.face_photo.url
                  ? filesData.face_photo.url
                  : "/static/image/placeholder/main-char.png"
              }
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
              <p className="text-[1rem] sm:text-[1.25rem]">ข้อมูลส่วนบุคคล</p>
              <TextScramble trigger className="text-[1rem] sm:text-[1.25rem]">
                {(() => {
                  const { isLate, daysLeft, hoursLeft } = calculateTimeLeft(
                    new Date("2025-03-13T23:59:59+07:00"),
                  );

                  if (isLate) return "หมดเขตรับสมัครแล้ว";

                  return daysLeft > 0
                    ? `เหลือเวลาอีก ${daysLeft} วัน`
                    : `เหลือเวลาอีก ${hoursLeft} ชั่วโมง`;
                })()}
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

      <Status {...data} />
    </Card>
  );
}
export default RegisterPage;
