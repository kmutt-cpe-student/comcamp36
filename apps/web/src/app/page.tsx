import Hero from "@/components/landing/hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="absolute w-full">
      <div className="absolute z-[100]">
        <Navbar />
      </div>
      <div className="font-prompt text-white h-screen bg-[url(/static/image/landing-bg.svg)] bg-cover bg-no-repeat bg-center relative">
        <Hero />
      </div>
    </div>
  );
}
