"use client";

import { TextShimmer } from "@/components/text/text-shimmer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="font-noto-sans-thai-looped bg-charcoal-1 flex h-screen w-full flex-col items-center justify-center gap-4 text-center text-white">
      <div className="relative mx-auto size-80 flex-shrink-0 overflow-hidden rounded-full border-[0.5rem] border-white">
        <Image
          src="/static/image/placeholder/main-char.png"
          alt="Profile"
          className="object-cover"
          fill
          priority
        />
      </div>
      <TextShimmer className="text-3xl font-bold">
        404 Not Found But 456 Found !
      </TextShimmer>
      <Link href="/">
        <Button
          onClick={() => {
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }}
        >
          กลับไปยังหน้าหลัก
        </Button>
      </Link>
    </div>
  );
}
export default NotFoundPage;
