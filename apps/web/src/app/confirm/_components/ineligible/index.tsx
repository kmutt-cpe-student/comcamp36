import { TextShimmer } from "@/components/text/text-shimmer";
import { TriangleAlert } from "lucide-react";
import Image from "next/image";

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
      <div className="font-noto-sans-thai-looped rounded-md border border-amber-500/50 px-7 py-3 text-amber-600">
        <div className="flex flex-col items-center text-xl">
          <div className="flex items-center">
            <TriangleAlert
              className="-mt-0.5 me-3 inline-flex opacity-60"
              size={30}
              aria-hidden="true"
            />
            <TextShimmer
              duration={2}
              className="w-fit max-w-full text-xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
            >
              ขอแสดงความเสียใจ
            </TextShimmer>
          </div>
          <p className="mt-3 w-fit max-w-full text-center text-base transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]">
            พี่ ๆ เห็นถึงความตั้งใจของน้อง ๆ แล้วนะ ขอบคุณที่มาสมัคร
            ครั้งนี้อาจยังไม่ใช่โอกาสของน้อง แต่ขอให้พยายามต่อไป
            พี่เป็นกำลังใจให้เสมอ! 💙🚀
          </p>
        </div>
      </div>
    </div>
  );
}
export default Ineligible;
