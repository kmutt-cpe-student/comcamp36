import { TextShimmer } from "@/components/text/text-shimmer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Ineligible() {
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center gap-10">
      <div className="flex w-[25rem] justify-center">
        <Image
          style={{ width: "100%", height: "auto" }}
          width={5000}
          height={0}
          src="/static/image/mascot/Elon.png"
          alt="Hero card section"
          loading="lazy"
          className="transition-all hover:scale-[1.1]"
        />
      </div>

      <div className="font-noto-sans-thai-looped bg-charcoal-1 mx-4 rounded-md border border-amber-500/50 p-7 text-amber-600">
        <div className="flex items-center justify-start text-xl">
          <TriangleAlert
            className="-mt-0.5 me-3 inline-flex size-10 opacity-60"
            aria-hidden="true"
          />
          <div className="grid gap-2">
            <TextShimmer
              duration={2}
              className="w-fit max-w-full text-2xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
            >
              ไม่ผ่านการคัดเลือก
            </TextShimmer>
            <p className="text-vermilion/80 text-lg font-light">
              พี่ ๆ ซาบซึ้งในความตั้งใจของน้อง ๆ มากนะ และขอบคุณสำหรับทุกคำตอบ
              อย่าเพิ่งท้อ ฝึกฝนต่อไป แล้วพี่ ๆ หวังว่าจะได้พบน้อง ๆ
              ในปีหน้าแน่นอน!
            </p>
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
export default Ineligible;
