import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/libs/utils";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface StatusProps {
  files_done: boolean;
  academic_done: boolean;
  regis_done: boolean;
  info_done: boolean;
}

function Status(props: StatusProps) {
  let done = 0;
  if (props.info_done) done++;
  if (props.regis_done) done++;
  if (props.academic_done) done++;
  if (props.files_done) done++;
  return (
    <div className="flex w-full flex-col gap-5 pt-4">
      <h4 className="w-full text-center font-medium text-white lg:text-start">
        การกรอกแบบฟอร์ม ({done}/4)
      </h4>
      <Separator />

      <div className="flex w-full flex-1 flex-wrap justify-center gap-8">
        <Link href="/register/info">
          <Card
            className={cn(
              "bg-charcoal-1 flex min-w-[15rem] flex-col items-center justify-center rounded-3xl p-6",
              props.info_done && "bg-vermilion",
            )}
          >
            <div className="relative size-32">
              {props.info_done && (
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
              ข้อมูลส่วนตัว
            </p>
          </Card>
        </Link>
        <Link href="/register/answer-regis">
          <Card
            className={cn(
              "bg-charcoal-1 flex min-w-[15rem] flex-col items-center justify-center rounded-3xl p-6",
              props.regis_done && "bg-vermilion",
            )}
          >
            <div className="relative size-32">
              {props.regis_done && (
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
              คำถามคัดเลือก 1
            </p>
          </Card>
        </Link>
        <Link href="/register/answer-academic">
          <Card
            className={cn(
              "bg-charcoal-1 flex min-w-[15rem] flex-col items-center justify-center rounded-3xl p-6",
              props.academic_done && "bg-vermilion",
            )}
          >
            <div className="relative size-32">
              {props.academic_done && (
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
              คำถามคัดเลือก 2
            </p>
          </Card>
        </Link>
        <Link href="/register/files">
          <Card
            className={cn(
              "bg-charcoal-1 flex min-w-[15rem] flex-col items-center justify-center rounded-3xl p-6",
              props.files_done && "bg-vermilion",
            )}
          >
            <div className="relative size-32">
              {props.files_done && (
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
              ไฟล์ที่ต้องอัพโหลด
            </p>
          </Card>
        </Link>
      </div>
    </div>
  );
}
export default Status;
