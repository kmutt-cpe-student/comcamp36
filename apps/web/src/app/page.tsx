import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/landing/hero"));
const WhatIs = dynamic(() => import("../components/landing/what-is"));
const Learn = dynamic(() => import("../components/landing/learn"));
const Faq = dynamic(() => import("../components/landing/faq"));

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
        <Faq />
      </div>
    </div>
  );
}
