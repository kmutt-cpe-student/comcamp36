import Image from "next/image";

function Sponsors() {
  return (
    <div className="mb-[20rem] grid h-[60rem] w-full place-content-center">
      <h2 className="font-game-of-squid text-vermilion-1 text-center capitalize">
        Sponsored By
      </h2>
      <div className="mx-auto mt-8 flex h-[10rem]">
        <Image
          style={{ width: "100%", height: "140px" }}
          width={0}
          height={0}
          src="/static/image/kmutt-logo.svg"
          alt="kmutt logo"
          loading="lazy"
        />
        <div className="flex justify-center">
          <Image
            style={{ width: "100%", height: "120px" }}
            width={0}
            height={0}
            src="/static/image/cpe-logo.svg"
            alt="cpe logo"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
export default Sponsors;
