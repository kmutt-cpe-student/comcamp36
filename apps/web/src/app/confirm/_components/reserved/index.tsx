import { TextShimmer } from "@/components/text/text-shimmer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Reserved() {
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
        <div className="flex items-center justify-start text-xl">
          <TriangleAlert
            className="-mt-0.5 me-3 inline-flex size-10 opacity-60"
            aria-hidden="true"
          />
          <div className="grid gap-2">
            <TextShimmer
              duration={2}
              className="w-fit max-w-full text-2xl font-bold transition-opacity duration-200 [--base-color:var(--color-mustard)] [--base-gradient-color:var(--color-mustard-1)] dark:[--base-color:var(--color-mustard)] dark:[--base-gradient-color:var(--color-mustard-1)]"
            >
              ตัวสำรอง!
            </TextShimmer>
            <div className="flex flex-col pl-4">
              <p className="text-mustard-1 text-lg font-normal">
                ขอบคุณที่สนใจเข้าร่วมค่าย น้อง ๆ
                ได้รับคัดเลือกให้เป็นตัวสำรองแล้ว พี่ ๆ
                จะติดต่อกลับไปทางโทรศัพท์ตามเบอร์ที่น้อง ๆ ให้ไว้
              </p>
              <p className="text-mustard-1 text-lg font-normal">
                พี่ ๆ จะติดต่อในวันที่ 26-27 มีนาคม 2567 ระหว่างเวลา 08:00-18:00
                น. โปรดเตรียมรับสายในช่วงเวลาดังกล่าวด้วยนะ!
              </p>
            </div>
          </div>
        </div>
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
