import Footer from "@/components/navigate/footer";
import Navbar from "@/components/navigate/navbar";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/landing/hero"));
const WhatIs = dynamic(() => import("../components/landing/what-is"));
const Learn = dynamic(() => import("../components/landing/learn"));
const Faq = dynamic(() => import("../components/landing/faq"));
const StudentReq = dynamic(() => import("../components/landing/requirement"));
const Timeline = dynamic(() => import("../components/landing/timeline"));
const Contact = dynamic(() => import("../components/landing/contact"));
const Sponsors = dynamic(() => import("../components/landing/sponsor"));

export default function Home() {
  return (
    <div className="bg-charcoal-1 absolute h-fit w-full overflow-x-hidden">
      <div className="absolute z-[100]">
        <Navbar />
      </div>
      <div className="font-prompt relative h-fit bg-[#0d0d0d] bg-cover bg-center bg-no-repeat text-white">
        <Hero />
        <WhatIs />
        <Learn />
        <StudentReq />
        <Timeline />
        <Faq />
        <Sponsors />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
