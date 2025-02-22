import Image from "next/image";
import SponsorSubgrid from "./components/sponsor-subgrid";

export enum SponsorTiers {
  "diamond" = 3,
  "platinum" = 2,
  "gold" = 1,
}

export interface Sponsor {
  name: string;
  tier: SponsorTiers;
  image_path: string;
}

const SponsorList: Sponsor[] = [];

function Sponsors() {
  return (
    <div className="mb-[20rem] grid h-[60rem] w-full place-content-center">
      <h2 className="font-game-of-squid text-vermilion-1 text-center capitalize">
        Organized By
      </h2>
      <div className="mx-auto mb-[7rem] mt-8 flex h-[10rem]">
        <Image
          style={{ width: "284px", height: "160px" }}
          width={284}
          height={160}
          src="/static/image/sponsors/kmutt-cpe-logo.png"
          alt="kmutt cpe logo"
          loading="lazy"
        />
      </div>
      {SponsorList.length > 0 && (
        <>
          <h2 className="font-game-of-squid text-vermilion-1 text-center capitalize">
            Sponsored By
          </h2>
          <div className="mt-6 grid w-full place-content-center content-center gap-y-4">
            <SponsorSubgrid data={SponsorList} tier={SponsorTiers.diamond} />
            <SponsorSubgrid data={SponsorList} tier={SponsorTiers.platinum} />
            <SponsorSubgrid data={SponsorList} tier={SponsorTiers.gold} />
          </div>
        </>
      )}
    </div>
  );
}
export default Sponsors;
