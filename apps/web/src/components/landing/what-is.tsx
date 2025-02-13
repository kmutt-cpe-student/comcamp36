import FadeObserverDiv from "@/components/landing/fade-div";
import Image from "next/image";

function WhatIs() {
  return (
    <div className="flex h-[63rem] w-full flex-col place-items-center items-center justify-center 2xl:grid 2xl:grid-cols-2">
      <FadeObserverDiv className="w-[32rem]" id="whatis">
        <Image
          style={{ width: "100%", height: "auto" }}
          width={0}
          height={0}
          src="/static/image/what-is-duck.svg"
          alt="ComCamp36Logo"
          loading="lazy"
        />
      </FadeObserverDiv>
      <FadeObserverDiv className="flex flex-col items-center justify-center text-center">
        <h2 className="font-game-of-squid w-full text-start">
          WHAT IS COMCAMP<span className="text-vermilion">36</span>?
        </h2>
        <small className="max-w-[50rem] pr-32 text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </small>
      </FadeObserverDiv>
    </div>
  );
}

export default WhatIs;
