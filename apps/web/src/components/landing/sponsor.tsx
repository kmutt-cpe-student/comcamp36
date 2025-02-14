import Image from "next/image";

function Sponsors() {
  return (
    <div className="mb-[20rem] grid h-[60rem] w-full place-content-center">
      <div className="flex h-[10rem]">
        <Image
          style={{ width: "100%", height: "auto" }}
          width={0}
          height={0}
          src="/static/image/kmutt-logo.svg"
          alt="kmutt logo"
          loading="lazy"
        />
        <div className="flex justify-center">
          <Image
            style={{ width: "100%", height: "auto" }}
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
