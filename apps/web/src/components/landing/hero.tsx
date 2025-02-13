import FadeObserverDiv from "@/components/landing/fade-div";
import Timer from "@/components/Timer";
import Image from "next/image";

function Hero() {
  return (
    <FadeObserverDiv className="grid h-screen grid-cols-1 place-items-center items-center justify-center 2xl:grid-cols-2 2xl:pt-0">
      <div className="flex flex-col items-center">
        <div className="flex w-[24rem] justify-center">
          <Image
            style={{ width: "100%", height: "auto" }}
            width={550}
            height={288}
            src="/static/image/logo.svg"
            alt="ComCamp36Logo"
            priority
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-game-of-squid w-full text-center">
            7-11 <span className="text-vermilion">APRIL</span> 2025
          </h3>
          <small className="max-w-[50rem] text-wrap px-4 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </small>
          <div className="w-fit pt-6">
            <Timer deadline="February, 24, 2025" />
          </div>
        </div>
      </div>
      <div className="hidden 2xl:block">
        <div className="flex w-[35rem] justify-center">
          <Image
            style={{ width: "100%", height: "auto" }}
            width={0}
            height={0}
            src="/static/image/hero-circle.svg"
            alt="Hero card section"
            loading="lazy"
          />
        </div>
      </div>
    </FadeObserverDiv>
  );
}

export default Hero;
