import Timer from "@/components/Timer";
import Image from "next/image";

function Hero() {
  return (
    <div className="bg-charcoal-1 h-screen 2xl:grid-cols-2 grid-cols-1 items-center justify-center place-items-center grid">
      <div className="flex flex-col items-center">
        <div className="xl:w-[33rem] w-[20rem] flex justify-center">
          <Image
            style={{ width: "100%", height: "auto" }}
            width={550}
            height={288}
            src="/Logo.png"
            alt="ComCamp36Logo"
            priority
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-game-of-squid w-full text-center">
            7-11 <span className="text-vermilion">APRIL</span> 2025
          </h1>
          <p className="max-w-[50rem] px-4 text-center text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <div className="w-fit pt-6">
            <Timer deadline="February, 24, 2025" />
          </div>
        </div>
      </div>
      <div>
        <div className="xl:w-[45rem] w-[30rem] flex justify-center">
          <Image
            style={{ width: "100%", height: "auto" }}
            width={550}
            height={288}
            src="/static/image/hero-circle.svg"
            alt="ComCamp36Logo"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
