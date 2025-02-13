import Learn from "@/components/landing/learn";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/landing/hero"), {
  loading: () => (
    <p className="flex h-full w-full items-center justify-center">Loading...</p>
  ),
});
const WhatIs = dynamic(() => import("../components/landing/what-is"), {
  loading: () => (
    <p className="flex h-full w-full items-center justify-center">Loading...</p>
  ),
});

export default function Home() {
  return (
    <div className="bg-charcoal-1 absolute h-fit w-full">
      <div className="absolute z-[100]">
        <Navbar />
      </div>
      <div className="font-prompt relative h-fit bg-[#0d0d0d] bg-cover bg-center bg-no-repeat text-white">
        <Hero />
        <WhatIs />
        <Learn />
      </div>
    </div>
  );
}
