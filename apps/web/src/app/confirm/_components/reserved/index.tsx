import { TextShimmer } from "@/components/text/text-shimmer";
import { Button } from "@/components/ui/button";
import { components } from "@/libs/server/types";
import { ChevronLeft, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ReservedProps {
  userData: components["schemas"]["UserResponseDto"];
}

function Reserved(props: ReservedProps) {
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center gap-10">
      <div className="flex">
        <div className="flex w-[18rem] justify-center">
          <Image
            style={{ width: "100%", height: "auto" }}
            width={5000}
            height={0}
            src="/static/image/mascot/Biden.png"
            alt="Hero card section"
            loading="lazy"
            className="transition-all hover:scale-[1.1]"
          />
        </div>
      </div>

      <div className="font-noto-sans-thai-looped border-mustard-1 text-mustard-2 mx-4 rounded-md border p-7">
        <div className="flex flex-col items-center justify-center gap-y-4 text-xl">
          <Mail
            className="-mt-0.5 me-3 inline-flex size-20 opacity-60"
            aria-hidden="true"
          />
          <div className="grid gap-2">
            <TextShimmer
              duration={2}
              className="mx-auto max-w-full text-2xl font-bold transition-opacity duration-200 [--base-color:var(--color-mustard)] [--base-gradient-color:var(--color-mustard-1)] dark:[--base-color:var(--color-mustard)] dark:[--base-gradient-color:var(--color-mustard-1)]"
            >
              มีสิทธิตัวสำรอง
            </TextShimmer>
            <div className="flex flex-col pl-4">
              <p className="text-mustard-1 text-lg font-normal">
                ขอขอบคุณน้องที่ให้ความสนใจในโครงการ น้องมีสิทธิเป็นตัวสำรอง
                หากได้รับเลื่อนเป็นตัวจริงจะมีการติดต่อยืนยันจากพี่ค่ายต่อไป
              </p>
              <p className="text-mustard-1 text-lg font-normal">
                พี่ค่ายจะทำการติดต่อน้องภายในในวันที่ 26-27 มีนาคม 2567
                ระหว่างเวลา 08:30 - 18:00 น.
                โปรดเตรียมรับโทรศัพท์ตามหมายเลขที่กรอกเอาไว้ในใบสมัคร
              </p>
            </div>
          </div>
        </div>
        {props.userData && (
          <p className="pt-4 text-center text-base text-gray-400">
            {props.userData?.fullname} - {props.userData?.email}
          </p>
        )}
      </div>
      <Link href="/">
        <Button>
          <ChevronLeft />
          กลับไปหน้าแรก
        </Button>
      </Link>
    </div>
  );
}
export default Reserved;
