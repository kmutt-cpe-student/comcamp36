"use client";

import { TextShimmer } from "@/components/text/text-shimmer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import PrivacyPolicy from "./policy";

function PolicyPage() {
  const router = useRouter();

  return (
    <div className="font-prompt flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-[#0d0d0d] py-10 text-white">
      <h2 className="font-game-of-squid font-bold lowercase">
        <TextShimmer
          duration={2}
          className="cursor-pointer text-5xl font-medium transition-colors [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
        >
          Privacy Policy
        </TextShimmer>
      </h2>
      <div className="max-w-[70rem] px-4">
        <PrivacyPolicy />
      </div>
      <Button variant="outline" className="p-6" onClick={() => router.back()}>
        <TextShimmer
          duration={1.5}
          className="cursor-pointer font-medium transition-colors [--base-color:var(--color-white)] [--base-gradient-color:var(--color-white)] hover:[--base-color:var(--color-vermilion)] hover:[--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-white)] dark:[--base-gradient-color:var(--color-white)]"
        >
          ย้อนกลับ
        </TextShimmer>
      </Button>
    </div>
  );
}
export default PolicyPage;
