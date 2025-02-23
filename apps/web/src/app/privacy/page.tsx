import { TextShimmer } from "@/components/text/text-shimmer";
import Link from "next/link";
import PrivacyPolicy from "./policy";

function PolicyPage() {
  return (
    <div className="bg-charcoal-1 font-prompt flex min-h-screen w-full flex-col items-center justify-center py-10 text-white">
      <h2 className="font-game-of-squid font-bold lowercase">
        <TextShimmer
          duration={2}
          className="cursor-pointer text-5xl font-medium transition-colors [--base-color:var(--color-vermilion)] [--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-vermilion)] dark:[--base-gradient-color:var(--color-vermilion-1)]"
        >
          Privacy Policy
        </TextShimmer>
      </h2>
      <div className="max-w-[70rem]">
        <PrivacyPolicy />
      </div>
      <Link href="/register">
        <TextShimmer
          duration={1.5}
          className="cursor-pointer text-xl font-medium transition-colors [--base-color:var(--color-white)] [--base-gradient-color:var(--color-white)] hover:[--base-color:var(--color-vermilion)] hover:[--base-gradient-color:var(--color-vermilion-1)] dark:[--base-color:var(--color-white)] dark:[--base-gradient-color:var(--color-white)]"
        >
          ย้อนกลับ
        </TextShimmer>
      </Link>
    </div>
  );
}
export default PolicyPage;
