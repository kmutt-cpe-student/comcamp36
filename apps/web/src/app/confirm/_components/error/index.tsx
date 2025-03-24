import { TextShimmer } from "@/components/text/text-shimmer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, TriangleAlert } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ConfirmationError() {
  return (
    <div className="flex min-h-full w-full flex-col items-center justify-center gap-10">
      <div className="flex w-[25rem] justify-center">
        <Image
          src="/static/image/placeholder/main-char.png"
          alt="Profile"
          className="transition-all hover:scale-[1.1]"
          loading="lazy"
          style={{ width: "100%", height: "auto" }}
          width={5000}
          height={0}
        />
      </div>

      <div className="font-noto-sans-thai-looped bg-charcoal-1 border-vermilion text-vermilion/80 mx-4 rounded-md border p-7">
        <div className="flex flex-col items-center justify-center text-xl">
          <TriangleAlert
            className="-mt-0.5 me-3 inline-flex size-20 opacity-60"
            aria-hidden="true"
          />
          <div className="grid gap-2">
            <TextShimmer
              duration={2}
              className="mx-auto max-w-full text-2xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
            >
              เกิดข้อผิดพลาดบางอย่าง
            </TextShimmer>
            <p className="text-vermilion-3 text-xl">
              อย่าเพิ่งตกใจ ลองรีเฟรชใหม่อีกครั้ง หรือติดต่อพี่ค่ายได้ที่{" "}
              <a
                className="cursor-pointer underline"
                href="htts://instagram.com/comcamp.kmutt"
                target="_blank"
                rel="noopener noreferrer"
              >
                IG: comcamp.kmutt
              </a>
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
export default ConfirmationError;
