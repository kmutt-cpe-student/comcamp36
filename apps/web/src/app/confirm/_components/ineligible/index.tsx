import { TextShimmer } from "@/components/text/text-shimmer";
import { Button } from "@/components/ui/button";
import { components } from "@/libs/server/types";
import { ChevronLeft, Frown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface IneligibleProps {
  userData: components["schemas"]["UserResponseDto"];
}

function Ineligible(props: IneligibleProps) {
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

      <div className="font-noto-sans-thai-looped bg-charcoal-1 border-vermilion text-vermilion/80 mx-4 rounded-md border px-7 py-12">
        <div className="flex flex-col items-center justify-center text-xl">
          <Frown
            className="-mt-0.5 me-3 inline-flex size-20 opacity-60"
            aria-hidden="true"
          />
          <div className="grid gap-2">
            <TextShimmer
              duration={2}
              className="mx-auto max-w-full text-2xl font-bold transition-opacity duration-200 [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
            >
              ไม่ผ่านการคัดเลือก
            </TextShimmer>
            <p className="text-vermilion-3 text-xl">
              ขอขอบคุณน้องที่ให้ความสนใจในโครงการ
              ขอให้น้องโชคดีในเส้นทางการศึกษา
              และหวังว่าจะได้เจอกันอีกในกิจกรรมต่อไป✌️
            </p>
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
export default Ineligible;
