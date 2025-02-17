import Image from "next/image";

function Sponsors() {
  return (
    <div className="mb-[20rem] grid h-[60rem] w-full place-content-center">
      <h2 className="font-game-of-squid text-vermilion-1 text-center capitalize">
        Sponsored By
      </h2>
      <div className="mx-auto mt-8 flex h-[10rem]">
        <Image
          style={{ width: "284px", height: "160px" }}
          width={284}
          height={160}
          src="/static/image/kmutt-cpe-logo.png"
          alt="kmutt cpe logo"
          loading="lazy"
        />
      </div>
    </div>
  );
}
export default Sponsors;
