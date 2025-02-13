import Image from "next/image";
// import FadeObserverDiv from "@/components/landing/fade-div";

function WhatIs() {
  return (
    <div className="w-full h-screen 2xl:grid-cols-2 grid-cols-1 items-center justify-center place-items-center grid">
      <div className="xl:w-[42rem] w-[21rem] ">
        <Image
          style={{ width: "100%", height: "auto" }}
          width={0}
          height={0}
          src="/static/image/what-is-duck.svg"
          alt="ComCamp36Logo"
          loading="lazy"
        />
      </div>
      <div className="flex items-center justify-center text-center flex-col">
        <h1 className="font-game-of-squid w-full text-center">
          WHAT IS COMCAMP<span className="text-vermilion">36</span> ?
        </h1>
        <p className="max-w-[50rem] px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default WhatIs;
