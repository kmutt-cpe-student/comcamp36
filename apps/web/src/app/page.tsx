import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("../components/landing/hero"), {
  loading: () => (
    <p className="w-full h-full flex items-center justify-center">Loading...</p>
  ),
});

export default function Home() {
  return (
    <div className="absolute w-full bg-charcoal-1">
      <div className="absolute z-[100]">
        <Navbar />
      </div>
      <div className="font-prompt text-white h-screen bg-[url(/static/image/landing-bg.svg)] bg-cover bg-no-repeat bg-center relative">
        <Hero />
      </div>
    </div>
  );
}
